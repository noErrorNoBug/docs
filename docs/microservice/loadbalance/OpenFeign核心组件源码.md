# Contract 契约组件

类似于LoadBalancer，我们可以通过其NamedContextFactory的实现类FeignContext的构造函数，查看到其默认配置类是FeignClientsConfiguration：

```java
public FeignContext() {
    super(FeignClientsConfiguration.class, "feign", "feign.client.name");
}
```
这个类里初始化了默认组件的配置，包括但不限于Contract、Encoder、Decoder、HttpClient等等（详见之前说的各种组件）：
```java
@Bean
@ConditionalOnMissingBean
public Contract feignContract(ConversionService feignConversionService) {
    boolean decodeSlash = this.feignClientProperties == null || this.feignClientProperties.isDecodeSlash();
    return new SpringMvcContract(this.parameterProcessors, feignConversionService, decodeSlash);
}

@Bean
public FormattingConversionService feignConversionService() {
    FormattingConversionService conversionService = new DefaultFormattingConversionService();
    Iterator var2 = this.feignFormatterRegistrars.iterator();
    while(var2.hasNext()) {
        FeignFormatterRegistrar feignFormatterRegistrar = (FeignFormatterRegistrar)var2.next();
        feignFormatterRegistrar.registerFormatters(conversionService);
    }
    return conversionService;
}
```
我们可以看到，其默认提供的Contract就是**SpringMvcContract**，它主要包括两部分的核心逻辑：
* **定义Feign专用的Formatter和Converter**
* **AnnotatedParameterProcessor解析Spring MVC注解**
# Encoder/Decoder 序列化组件

我们知道，SpringCloud中的任何基础组件，都是基于SpringBoot实现的，由于SpringBoot中已经有了编码器和解码器，因此OpenFeign中的编解码器使用的是SpringBoot提供的。

下面我们可以看到FeignClientsConfiguration中**编码器**部分的默认配置，使用的是**SpringEncoder**：

```java
@Bean
@ConditionalOnMissingBean
@ConditionalOnMissingClass({"org.springframework.data.domain.Pageable"})
public Encoder feignEncoder(ObjectProvider<AbstractFormWriter> formWriterProvider, ObjectProvider<HttpMessageConverterCustomizer> customizers) {
    return this.springEncoder(formWriterProvider, this.encoderProperties, customizers);
}

private Encoder springEncoder(ObjectProvider<AbstractFormWriter> formWriterProvider, FeignEncoderProperties encoderProperties, ObjectProvider<HttpMessageConverterCustomizer> customizers) {
    AbstractFormWriter formWriter = (AbstractFormWriter)formWriterProvider.getIfAvailable();
    return formWriter != null ? new SpringEncoder(new FeignClientsConfiguration.SpringPojoFormEncoder(formWriter), this.messageConverters, encoderProperties, customizers) : new SpringEncoder(new SpringFormEncoder(), this.messageConverters, encoderProperties, customizers);
}
```

而解码器我们也可以看到，使用的是经过**包装的解码器**：

* **OptionalDecoder**：用于处理Optional封装类的解码器
* **ResponseEntityDecoder**：用于处理Spring-Web中请求响应封装类HttpEntity的解码器
* **SpringDecoder**：使用Spring的解码器实现Feign的Decoder
```java
@Bean
@ConditionalOnMissingBean
public Decoder feignDecoder(ObjectProvider<HttpMessageConverterCustomizer> customizers) {
    return new OptionalDecoder(new ResponseEntityDecoder(new SpringDecoder(this.messageConverters, customizers)));
}
```

编解码器的内核是HttpMessageConverter实现的，它是SpringWeb中对Http请求和响应的Body进行编码和解码的工具，下面是其接口的源码：

```java
public interface HttpMessageConverter<T> {
    // 判断类是否能被当前Converter识别读取
    boolean canRead(Class<?> clazz, @Nullable MediaType mediaType);
    // 判断类是否能被当前Converter写
    boolean canWrite(Class<?> clazz, @Nullable MediaType mediaType);
    // 获取所有支持的MediaType
    List<MediaType> getSupportedMediaTypes();
    // 当类支持该Converter读写时，返回所有支持的MediaType
    default List<MediaType> getSupportedMediaTypes(Class<?> clazz) {
        return !this.canRead(clazz, (MediaType)null) && !this.canWrite(clazz, (MediaType)null) ? Collections.emptyList() : this.getSupportedMediaTypes();
    }
    // 从inputMessage中解析出类型
    T read(Class<? extends T> clazz, HttpInputMessage inputMessage) throws IOException, HttpMessageNotReadableException;
    // 将该类型的对象序列化写入httoOutputMessage
    void write(T t, @Nullable MediaType contentType, HttpOutputMessage outputMessage) throws IOException, HttpMessageNotWritableException;
}
```
# RequestInterceptor 请求拦截器

拦截器均是RequestInterceptor的实现，其接口如下所示，想要自定义拦截器只需要实现该接口即可：

```java
public interface RequestInterceptor {
    void apply(RequestTemplate var1);
}
```
# HttpClient

OpenFeign的HttpClient也是可以自定义的，默认是通过Java内部的Http客户端HttpURLConnection实现的，其接口为：

```java
public interface Client {
    Response execute(Request var1, Options var2) throws IOException;
}

public static class Options {
    private final long connectTimeout;
    private final TimeUnit connectTimeoutUnit;
    private final long readTimeout;
    private final TimeUnit readTimeoutUnit;
    private final boolean followRedirects;
}
```

其中Options是对调用参数的一些设置。

# 错误解码器

只有响应码不是2xx时，才会调用ErrorDecoder的decode方法，除了可以指定ErrorDecoder之外，还可以指定异常抛出策略ExceptionPropagationPolicy。默认的ErrorDecoder实现如下所示：

```java
public interface ErrorDecoder {
    Exception decode(String var1, Response var2);
}

public static class Default implements ErrorDecoder {
    private final ErrorDecoder.RetryAfterDecoder retryAfterDecoder = new ErrorDecoder.RetryAfterDecoder();
    public Default() {
    }
    public Exception decode(String methodKey, Response response) {
        // 将不同的响应码封装成不同的异常形式
        FeignException exception = FeignException.errorStatus(methodKey, response);
        // 提取Retry-After响应头，如果存在封装为RetryableException用于后面重试
        Date retryAfter = this.retryAfterDecoder.apply((String)this.firstOrNull(response.headers(), "Retry-After"));
        return (Exception)(retryAfter != null ? new RetryableException(response.status(), exception.getMessage(), response.request().httpMethod(), exception, retryAfter, response.request()) : exception);
    }
    private <T> T firstOrNull(Map<String, Collection<T>> map, String key) {
        return map.containsKey(key) && !((Collection)map.get(key)).isEmpty() ? ((Collection)map.get(key)).iterator().next() : null;
    }
}
```

# Retryer 重试器

当调用发生异常时，为了排除网络抖动或者一些其他因素，我们一般是希望在将异常抛出给更上层之前，通过重试机制来减少网络扰动的影响。我们关心的重试机制一般包括两个比较重要的部分：我们需要对什么请求进行重试？重试的策略是什么？

对于哪些异常需要重试的问题，ErrorDecoder中给出答案，即**如果需要进行重试，需要将异常封装成RetryableException**。

至于重试策略是什么，就需要Retryer重试器来完成了，下面是重试器的接口：

```java
public interface Retryer extends Cloneable {
  // 重试或者抛出异常结束重试
  void continueOrPropagate(RetryableException var1);
  // 每次请求都会调用clone创建一个同样配置的重试器
  Retryer clone();
}
```

重试器的默认逻辑是这样的：

```java
public static class Default implements Retryer {\
    // 最大重试次数
    private final int maxAttempts;
    // 初始重试间隔
    private final long period;
    // 最大重试间隔
    private final long maxPeriod;
    // 重试次数
    int attempt;
    // 等待间隔的总和
    long sleptForMillis;
    public Default() {
       // 默认配置初始重试间隔100ms、最大重试间隔1s，重试次数5次
        this(100L, TimeUnit.SECONDS.toMillis(1L), 5);
    }
    public Default(long period, long maxPeriod, int maxAttempts) {
        this.period = period;
        this.maxPeriod = maxPeriod;
        this.maxAttempts = maxAttempts;
        // 重试次数初始化
        this.attempt = 1;
    }
    protected long currentTimeMillis() {
        return System.currentTimeMillis();
    }
    public void continueOrPropagate(RetryableException e) {
        // 重试失败
        if (this.attempt++ >= this.maxAttempts) {
            throw e;
        } else {
            long interval;
            // 如果指定了 Retry-After，重试间隔以此为准
            if (e.retryAfter() != null) {
                interval = e.retryAfter().getTime() - this.currentTimeMillis();
                if (interval > this.maxPeriod) {
                    interval = this.maxPeriod;
                }
                if (interval < 0L) {
                    return;
                }
            } else {
                // 否则计算间隔
                interval = this.nextMaxInterval();
            }
            try {
                Thread.sleep(interval);
            } catch (InterruptedException var5) {
                Thread.currentThread().interrupt();
                throw e;
            }
            this.sleptForMillis += interval;
        }
    }
    // 重试间隔逐次增加50%，直到达到最大重试间隔
    long nextMaxInterval() {
        long interval = (long)((double)this.period * Math.pow(1.5D, (double)(this.attempt - 1)));
        return interval > this.maxPeriod ? this.maxPeriod : interval;
    }
    public Retryer clone() {
        // 创建新的重试器
        return new Retryer.Default(this.period, this.maxPeriod, this.maxAttempts);
    }
}
```
