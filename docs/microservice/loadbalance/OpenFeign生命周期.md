# 创建OpenFeign代理

OpenFeign创建代理对象主要是基于JDK的动态代理实现的，下面先来看一下JDK的动态代理的创建过程。

## JDK的动态代理

使用JDK的动态代理，需要下面几个步骤：

1. **编写接口以及对应代理类**。这里编写一个简单的接口以及实现类：
```java
// 接口
public interface ReflectTest {
    String testReflect();
}
// 实现类
public class ReflectTestImpl implements ReflectTest{
    @Override
    public String testReflect() {
        return "这是代理接口实现类ReflectTestImpl";
    }
}
```
2. **创建动态代理java.lang.reflect.InvocationHandler实现类**。下面是创建的一个简单的代理实现类。
```java
@Slf4j
public class ReflectTestProxy {
    private ReflectTest reflectTest;
    public ReflectTestProxy() {
        this.reflectTest = new ReflectTestImpl();
    }
    /**
     * 创建代理类的方法
     * @param proxiedObject
     * @return
     */
    public Object createProxy(Object proxiedObject) {
        Class<?>[] interfaces = proxiedObject.getClass().getInterfaces();
        SimpleJDKInvocationHandler handler = new SimpleJDKInvocationHandler(proxiedObject);
        // 使用Proxy进行创建，需要获取到【被代理类的ClassLoader】、【接口】、【InvocationHandler实现（增强逻辑）】
        return Proxy.newProxyInstance(proxiedObject.getClass().getClassLoader(),interfaces,handler);
    }
    class SimpleJDKInvocationHandler implements InvocationHandler {
        private final Object reflectTest;
        public SimpleJDKInvocationHandler(Object reflectTest) {
            this.reflectTest = reflectTest;
        }
        @Override
        public Object invoke(Object proxy, Method method, Object[] args) throws Throwable {
            log.info("代理类增强非业务主干");
            String invoke = (String) method.invoke(reflectTest);
            String result = "这个类已经被代理增强：" + invoke;
            return result;
        }
    }
}
```
3. 创建代理对象，并使用代理对象。一般通过Proxy的静态方法创建，下面是举例：
```java
ReflectTestProxy proxy = new ReflectTestProxy();
ReflectTest reflectTest = (ReflectTest)proxy.createProxy(new ReflectTestImpl());
String result = reflectTest.testReflect();
```

## OpenFeign创建代理对象过程

OpenFeign实际上是对Feign原生接口的增强，因此探究OpenFeign创建代理对象的过程，需要从Feign的原生接口入手，接下来通过一个例子，看一看创建由Feign代理的Http调用接口的内部流程。

下面是例子的代码，主要展示Feign的主要接口：

```java
// 创建接口
public interface OriginFeign {
    @RequestLine("GET /demo/simple/{identity}/{dataTime}")
    List<Position> getPosition(@Param("identity") String identity,@Param("dataTime") String dataTime);
}

// 调用过程
public static void main(String[] args) {
    // 创建Feign代理
    OriginFeign feignClient = Feign.builder()
            // 设置decoder
            .decoder(new FastJsonDecoder())
            // 指定要被代理的接口和基地址
            .target(OriginFeign.class, "http://localhost:8010");
    List<Position> position = feignClient.getPosition("demo-service", "2021");
}
```

### 配置项解析

通过上面的使用举例我们可以看出，Feign创建代理的核心接口是Feign.builder()，可以说明Feign的Builder组件是可以配置的，我们后面**定制化OpenFeign很大程度上也是依赖配置项的**，其源码如下：

```java
// 拦截器列表，默认拦截器为空
private final List<RequestInterceptor> requestInterceptors = new ArrayList();
// 日志级别，默认不打印日志
private Level logLevel;
// 契约解析器，默认是支持OpenFeign的内置解析器，Default
private Contract contract;
// http client，默认是HttpURLConnection
private Client client;
// 重试器，默认也是default
private Retryer retryer;
// 日志组件，默认不记录
private Logger logger;
// 编码器和解码器，默认也都是default
private Encoder encoder;
private Decoder decoder;
// 查询参数编码器，一般也不会修改
private QueryMapEncoder queryMapEncoder;
// 错误解码器，默认default
private ErrorDecoder errorDecoder;
// 超时配置通过 Options配置，不更改的话使用默认配置
private Options options;
// 用来生成动态代理的InvocationHandler的Factory，也有默认实现
private InvocationHandlerFactory invocationHandlerFactory;
// 是否解析404错误，默认false，因为大多数情况下404我们不想抛出异常
private boolean decode404;
// 是否解码后立即关闭Response，默认true
private boolean closeAfterDecode;
// 异常传播规则，默认不传播
private ExceptionPropagationPolicy propagationPolicy;
// 是否强制解码，主要是为了兼容异步Feign引入，很少用到，认为其实false
private boolean forceDecoding;
private List<Capability> capabilities;

public Builder() {
    this.logLevel = Level.NONE;
    this.contract = new Default();
    this.client = new feign.Client.Default((SSLSocketFactory)null, (HostnameVerifier)null);
    this.retryer = new feign.Retryer.Default();
    this.logger = new NoOpLogger();
    this.encoder = new feign.codec.Encoder.Default();
    this.decoder = new feign.codec.Decoder.Default();
    this.queryMapEncoder = new FieldQueryMapEncoder();
    this.errorDecoder = new feign.codec.ErrorDecoder.Default();
    this.options = new Options();
    this.invocationHandlerFactory = new feign.InvocationHandlerFactory.Default();
    this.closeAfterDecode = true;
    this.propagationPolicy = ExceptionPropagationPolicy.NONE;
    this.forceDecoding = false;
    this.capabilities = new ArrayList();
}
```

### 代理生成过程

代理生成主要是通过target接口生成的，我们通过源码可以了解到其创建代理的整个过程。

1. **创建ReflectiveFeign**：
    1. 所有组件经过Capability
    2. 创建SynchronousMethodHandlerFactory
    3. 按照方法名解析路由
    4. 创建ReflectiveFeign
```java
public <T> T target(Class<T> apiType, String url) {
    return this.target(new HardCodedTarget(apiType, url));
}
public <T> T target(Target<T> target) {
    //
    return this.build().newInstance(target);
}
// target() 方法最终会在build()中创建ReflectiveFeign类，并调用neInstance方法
public Feign build() {
    // 将所有的组件经过Capability，由此我们可以通过Capability动态的修改Feign组件
    Client client = (Client)Capability.enrich(this.client, this.capabilities);
    Retryer retryer = (Retryer)Capability.enrich(this.retryer, this.capabilities);
    List<RequestInterceptor> requestInterceptors = (List)this.requestInterceptors.stream().map((ri) -> {
        return (RequestInterceptor)Capability.enrich(ri, this.capabilities);
    }).collect(Collectors.toList());
    Logger logger = (Logger)Capability.enrich(this.logger, this.capabilities);
    Contract contract = (Contract)Capability.enrich(this.contract, this.capabilities);
    Options options = (Options)Capability.enrich(this.options, this.capabilities);
    Encoder encoder = (Encoder)Capability.enrich(this.encoder, this.capabilities);
    Decoder decoder = (Decoder)Capability.enrich(this.decoder, this.capabilities);
    InvocationHandlerFactory invocationHandlerFactory = (InvocationHandlerFactory)Capability.enrich(this.invocationHandlerFactory, this.capabilities);
    QueryMapEncoder queryMapEncoder = (QueryMapEncoder)Capability.enrich(this.queryMapEncoder, this.capabilities);
    // 用于创建SynchronousMethodHandler的工厂，SynchronousMethodHandler是实际承载Feign代理请求的实现类
    Factory synchronousMethodHandlerFactory = new Factory(client, retryer, requestInterceptors, logger, this.logLevel, this.decode404, this.closeAfterDecode, this.propagationPolicy, this.forceDecoding);
    // 通过方法名区分不同接口的元数据解析，用于生成不同的路由，并对应到相应的代理方法
    ParseHandlersByName handlersByName = new ParseHandlersByName(contract, options, encoder, decoder, queryMapEncoder, this.errorDecoder, synchronousMethodHandlerFactory);
    // 创建ReflectiveFeign
    return new ReflectiveFeign(handlersByName, invocationHandlerFactory, queryMapEncoder);
}
```
2. 调用newInstance方法 
    1. 解析元数据生成**MethodHandler（这个Handler是主要的调用逻辑，也就是被代理后的逻辑）**，并使其与方法名一一对应。关于解析元数据为MethodHandler这一步，主要就涉及到使用Contract进行解码元数据，并且与MethodHandler绑定。
    2. 使用JDK的动态代理创建代理对象，即创建InvocationHandler
    3. 将代理对象与DefaultMethodHandler关联
```java
public <T> T newInstance(Target<T> target) {
    // 根据方法名解析元数据并生成对应需要被代理的方法的MethodHandler
    Map<String, MethodHandler> nameToHandler = this.targetToHandlersByName.apply(target);
    Map<Method, MethodHandler> methodToHandler = new LinkedHashMap();
    List<DefaultMethodHandler> defaultMethodHandlers = new LinkedList();
    
    // 将方法名和MethodHandler一一对应
    Method[] var5 = target.type().getMethods();
    int var6 = var5.length;
    for(int var7 = 0; var7 < var6; ++var7) {
        Method method = var5[var7];
        if (method.getDeclaringClass() != Object.class) {
            if (Util.isDefault(method)) {
                DefaultMethodHandler handler = new DefaultMethodHandler(method);
                defaultMethodHandlers.add(handler);
                methodToHandler.put(method, handler);
            } else {
                methodToHandler.put(method, nameToHandler.get(Feign.configKey(target.type(), method)));
            }
        }
    }
    // 创建 InvocationHandler
    InvocationHandler handler = this.factory.create(target, methodToHandler);
    // 使用 proxy 创建 代理对象
    T proxy = Proxy.newProxyInstance(target.type().getClassLoader(), new Class[]{target.type()}, handler);
    
    // 将代理对象与DefaultMethodHandler关联
    Iterator var12 = defaultMethodHandlers.iterator();
    while(var12.hasNext()) {
        DefaultMethodHandler defaultMethodHandler = (DefaultMethodHandler)var12.next();
        defaultMethodHandler.bindTo(proxy);
    }
    return proxy;
}
```

对于第一步的解析元数据，其源码如下：

```java
public Map<String, MethodHandler> apply(Target target) {
    // 使用Contract解析所有元数据
    List<MethodMetadata> metadata = this.contract.parseAndValidateMetadata(target.type());
    // 元数据与MethodHandler进行绑定
    Map<String, MethodHandler> result = new LinkedHashMap();
    Iterator var4 = metadata.iterator();
    while(var4.hasNext()) {
        MethodMetadata md = (MethodMetadata)var4.next();
        Object buildTemplate;
        if (!md.formParams().isEmpty() && md.template().bodyTemplate() == null) {
            buildTemplate = new ReflectiveFeign.BuildFormEncodedTemplateFromArgs(md, this.encoder, this.queryMapEncoder, target);
        } else if (md.bodyIndex() == null && !md.alwaysEncodeBody()) {
            buildTemplate = new ReflectiveFeign.BuildTemplateByResolvingArgs(md, this.queryMapEncoder, target);
        } else {
            buildTemplate = new ReflectiveFeign.BuildEncodedTemplateFromArgs(md, this.encoder, this.queryMapEncoder, target);
        }
        if (md.isIgnored()) {
            result.put(md.configKey(), (args) -> {
                throw new IllegalStateException(md.configKey() + " is not a method handled by feign");
            });
        } else {
            result.put(md.configKey(), this.factory.create(target, md, (Factory)buildTemplate, this.options, this.decoder, this.errorDecoder));
        }
    }
    return result;
}
```

第二步中，InvocationHandlerFactory生成的InvocationHandler是FeignInvocationHandler，如下所示：

```java
public interface InvocationHandlerFactory {
    InvocationHandler create(Target var1, Map<Method, InvocationHandlerFactory.MethodHandler> var2);
    public static final class Default implements InvocationHandlerFactory {
        public Default() {
        }
        public InvocationHandler create(Target target, Map<Method, InvocationHandlerFactory.MethodHandler> dispatch) {
            return new FeignInvocationHandler(target, dispatch);
        }
    }
    public interface MethodHandler {
        Object invoke(Object[] var1) throws Throwable;
    }
}
```

InvocationHandler的主要逻辑如下所示，如果方法是equals、hashCode、toString，则直接调用，如果不是则使用对应的MethodHandler中的方法进行调用，也就是使用代理的方法。

```java
public Object invoke(Object proxy, Method method, Object[] args) throws Throwable {
    if (!"equals".equals(method.getName())) {
        if ("hashCode".equals(method.getName())) {
            return this.hashCode();
        } else {
            // 如果不是equals、hashCode、toString则使用MethodHandler中被代理的方法
            return "toString".equals(method.getName()) ? this.toString() : ((MethodHandler)this.dispatch.get(method)).invoke(args);
        }
    } else {
        try {
            Object otherHandler = args.length > 0 && args[0] != null ? Proxy.getInvocationHandler(args[0]) : null;
            return this.equals(otherHandler);
        } catch (IllegalArgumentException var5) {
            return false;
        }
    }
}
```

# 请求调用过程

MethodHandler中是实际执行请求调用的逻辑，对于同步调用的Feign，使用的是SynchronousMethodHandler。那么下面就分析同步Feign的一个调用过程。

1. 创建请求模板工厂RequestTemplate.Factory，创建请求模板RequestTemplate。
2. 读取Options配置。
3. 使用配置的Retryer创建新的Retryer。
4. 执行请求并将响应执行反序列化executeAndDecode：
    1. 如果配置了RequestInterceptor，则依次执行
    2. 将请求模板转化为Request
    3. 通过Client执行Request
    4. 如果响应码时2xx，使用decode解析响应
    5. 如果响应码4xx，配置中配置了需要解析，则对4xx的响应进行decode
    6. 对于其他响应码，则使用errorDecoder进行反序列化，可以自己实现errorDecoder，抛出RetryableException进入重试逻辑
    7. 如果以上步骤出现IOException，则封装成RetryableException抛出
5. 如果过程中有抛出的RetryableException，则使用第三步创建的Retryer进行重试，即重新执行第一步。
下面是1-5步的整体过程的源码，主要包含在SynchronousMethodHandler的invoke的方法中：

```java
public Object invoke(Object[] argv) throws Throwable {
    // 1.创建请求模板
    RequestTemplate template = this.buildTemplateFromArgs.create(argv);
    // 2.读取Options配置
    Options options = this.findOptions(argv);
    // 3.创建重试器
    Retryer retryer = this.retryer.clone();
    while(true) {
        try {
            // 执行请求
            return this.executeAndDecode(template, options);
        } catch (RetryableException var9) {
            // 请求重试
            RetryableException e = var9;
            try {
                retryer.continueOrPropagate(e);
            } catch (RetryableException var8) {
                Throwable cause = var8.getCause();
                if (this.propagationPolicy == ExceptionPropagationPolicy.UNWRAP && cause != null) {
                    throw cause;
                }
                throw var8;
            }
            if (this.logLevel != Level.NONE) {
                this.logger.logRetry(this.metadata.configKey(), this.logLevel);
            }
        }
    }
}
```
具体的Http请求过程主要在executeAndDecode方法中，下面是其源码：
```java
Request targetRequest(RequestTemplate template) {
    // 执行拦截器
    Iterator var2 = this.requestInterceptors.iterator();
    while(var2.hasNext()) {
        RequestInterceptor interceptor = (RequestInterceptor)var2.next();
        interceptor.apply(template);
    }
    // 转化为Request
    return this.target.apply(template);
}

Object executeAndDecode(RequestTemplate template, Options options) throws Throwable {
    Request request = this.targetRequest(template);
    if (this.logLevel != Level.NONE) {
        this.logger.logRequest(this.metadata.configKey(), this.logLevel, request);
    }
    long start = System.nanoTime();
    Response response;
    try {
        // 通过Http请求Client执行http请求
        response = this.client.execute(request, options);
        // 创建请求
        response = response.toBuilder().request(request).requestTemplate(template).build();
    } catch (IOException var13) {
        if (this.logLevel != Level.NONE) {
            this.logger.logIOException(this.metadata.configKey(), this.logLevel, var13, this.elapsedTime(start));
        }
        throw FeignException.errorExecuting(request, var13);
    }
    long elapsedTime = TimeUnit.NANOSECONDS.toMillis(System.nanoTime() - start);
    if (this.decoder != null) {
        return this.decoder.decode(response, this.metadata.returnType());
    } else {
        CompletableFuture<Object> resultFuture = new CompletableFuture();
        // 根据不同的响应码进行处理
        this.asyncResponseHandler.handleResponse(resultFuture, this.metadata.configKey(), response, this.metadata.returnType(), elapsedTime);
        try {
            if (!resultFuture.isDone()) {
                throw new IllegalStateException("Response handling not done");
            } else {
                return resultFuture.join();
            }
        } catch (CompletionException var12) {
            Throwable cause = var12.getCause();
            if (cause != null) {
                throw cause;
            } else {
                throw var12;
            }
        }
    }
}
```
