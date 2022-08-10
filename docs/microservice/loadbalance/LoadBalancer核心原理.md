---
title: LoadBalancer核心原理
next:
  text: LoadBalancer负载均衡策略
  link: /microservice/loadbalance/LoadBalancer负载均衡策略.md
---
::: info
&#8195;&#8195;Spring Cloud LoadBalancer 与 Ribbon 类似，是一个客户端负载均衡器，但是由于 Netflix 的 Ribbon 进入维护，而且 Ribbon1 和 Ribbon2 并不兼容，Spring Cloud Commons 项目中，使用了 LoadBalancer 作为默认负载均衡器，同时 SC 也推荐其作为替代。

&#8195;&#8195;另外，LoadBalancer 对 Ribbon、Eureka、Zuul、Hystrix 等做了兼容，而且Gateway、Nacos、Sentinel也都支持 LoadBalancer，因此可以通过简单的依赖和配置，在项目中使用这一组件。
:::
[[toc]]

***

## 使用场景

&#8195;&#8195;鉴于Spring Cloud默认的服务之间的调用场景是Http请求，LoadBalancer的使用场景也主要是针对以下API的调用：

* **RestTemplate**：SpringMVC的同步Http调用，封装了Rest风格的同步Http API，简单易用，但是由于其同步调用的特性，在Spring5之后进入维护状态不再更新。官方的替代产品是WebClient。
* **WebClient**：SpringBoot WebFlux项目中的异步响应式Http API。
* **第三方客户端**：如OpenFeign。

&#8195;&#8195;项目中如果加入了 spring-cloud-loadbalancer 或者 spring-cloud-starter-loadbalancer 的依赖，那么在SpringBoot项目启动时，会自动加载其相关配置和注入负载均衡的Bean。对于三种不同的API调用方式，需要进行不同程度的配置：

* RestTemplate：会自动对所有的带有 **@LoadBalanced** 注解修饰的 RestTemplate Bean 增加 Interceptor 修饰，增加负载均衡的特性。
* WebClient：会为WebClient自动创建 ReactorLoadBalancerExchangeFilterFunction，因此可以通过加入 **ReactorLoadBalancerExchangeFilterFunction** 加入负载均衡的特性。此外，WebClient也可以通过对Builder进行注入，使用@LoadBalanced来实现，两种方法均可。
* OpenFeign：对于第三方客户端的集成，一般都在依赖内部加入适配，不需要用户额外配置什么。

### RestTemplate

1. 整合依赖
```xml
<!-- LoadBalancer 依赖 -->
<dependency>
    <groupId>org.springframework.cloud</groupId>
    <artifactId>spring-cloud-starter-loadbalancer</artifactId>
</dependency>
<!-- Spring MVC 引入 RestTemplate -->
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-web</artifactId>
</dependency>
<!-- Nacos 服务发现，1.4版本后也已经弃用了 Ribbon，而且需要用户自己集成负载均衡 -->
<dependency>
    <groupId>com.alibaba.cloud</groupId>
    <artifactId>spring-cloud-starter-alibaba-nacos-discovery</artifactId>
</dependency>
```

2. 注入带有 @LoadBalanced 的 RestTemplate Bean：
```java
@Configuration
public class RestTemplateConfig {
    @Bean
    @LoadBalanced
    public RestTemplate restTemplate() {
        return new RestTemplate();
    }
}
```

3. 调用时可以直接使用服务名进行替代：
```plain
String url = "http://nacos-service-provider/hello";
String result = restTemplate.getForObject(url,String.class);
```

### WebClient

1. 整合依赖
```xml
<!-- WebClient 在 WebFlux 包中 -->
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-webflux</artifactId>
</dependency>
<!-- LoadBalancer 依赖 -->
<dependency>
    <groupId>org.springframework.cloud</groupId>
    <artifactId>spring-cloud-starter-loadbalancer</artifactId>
</dependency>
<!-- nacos client 依赖 -->
<dependency>
    <groupId>com.alibaba.cloud</groupId>
    <artifactId>spring-cloud-starter-alibaba-nacos-discovery</artifactId>
</dependency>
```

2. 通过注入ReactorLoadBalancerExchangeFilterFunction实现负载均衡
```java
@Configuration
public class WebClientConfig {
    @Autowired
    private ReactorLoadBalancerExchangeFilterFunction exchangeFilterFunction;
    @Bean
    public WebClient filterWebClient() {
        return WebClient.builder()
                .filter(exchangeFilterFunction)
                .build();
    }
}
```

3. 通过@LoadBalancer实现负载均衡
```java
@Configuration
public class WebClientConfig {
    @Bean
    @LoadBalanced
    public WebClient.Builder webClientBuilder() {
        return WebClient.builder();
    }
    @Bean
    public WebClient annonationWebClient() {
        return webClientBuilder().build();
    }
}
```

4. 调用时使用服务名替代URI
```java
Mono<String> result = annonationWebClient.get().uri("http://nacos-service-provider/hello")
        .retrieve()
        .bodyToMono(String.class);
```

### OpenFeign

1. 整合依赖
```xml
<!-- LoadBalancer 依赖 -->
<dependency>
    <groupId>org.springframework.cloud</groupId>
    <artifactId>spring-cloud-starter-loadbalancer</artifactId>
</dependency>
<!-- nacos client 依赖 -->
<dependency>
    <groupId>com.alibaba.cloud</groupId>
    <artifactId>spring-cloud-starter-alibaba-nacos-discovery</artifactId>
</dependency>
<!-- openfeign 依赖 -->
<dependency>
    <groupId>org.springframework.cloud</groupId>
    <artifactId>spring-cloud-starter-openfeign</artifactId>
</dependency>
```

2. 编写Feign接口
```java
@FeignClient(value = "nacos-service-provider")
public interface LoadBalancerFeign {
    @GetMapping("/hello")
    Position simpleProvider();
}
```

3. 调用
```java
String result = feign.simpleProvider();
```

# 结构总览

![LoadBalancer结构图](/images/microservice/loadbalancer/LoadBalancer结构图.png)

&#8195;&#8195;整个SpringCloud LoadBalancer的整体结构可以分为4个部分：子容器管理、配置注入、调用链路和扩展功能。也就是说，核心的类主要是下面几个：

* **子容器管理**：
    * **NamedContextFactory**：子容器管理父类，每一个子容器都有**容器名**和**默认配置**。
    * **LoadBalancerClientFactory**：子容器管理的具体实现，容器名是服务名，可以通过Specification注入自定义的扩展配置，核心是name和getInstance()方法。
* **配置注入**：
    * **LoadBalancerClientConfiguration**：默认配置，每一个容器都会注入，通过它注入默认的负载均衡算法和服务列表。
    * **LoadBalancerClient和LoadBalancerClients**：用于注入自定义扩展配置的注解，将引入LoadBalancerClientConfigurationRegister，使用BeanDefinition注册扩展配置的LoadBalancerClientSpecification，**可以实现对所有或者指定的服务使用自定义的负载均衡算法或者访问不同集群**。
    * **xxxAutoConfiguration**：为Http组件添加拦截器或过滤器。
* **调用链路**：
    * **过滤器和拦截器**：Http组件通过拦截器在请求发送之前获取服务地址
    * **xxxLoadBalancerClient**：通过要调用的服务名获取子容器，通过子容器懒加载负载均衡器和服务列表。
* **扩展组件**：
    * **ReactorLoadBalancer\<ServiceInstance\>**：负载均衡器，需要实现choose方法，实现具体的负载均衡算法。
    * **ServiceInstanceListSupplier**：服务列表，不同的注册中心有不同的实现，可以通过指定不同的服务列表实现对不同负载集群的负载均衡。

## 子容器管理原理

&#8195;&#8195;与子容器创建相关的核心类主要是下面两个：

* **NamedContextFactory**
* **LoadBalancerClientFactory**
SpringCloud 使用 NamedContextFactory 这个类管理子容器。SpringCloud LoadBalancer 依旧采用 Ribbon 的方式，用**LoadBalancerClientFactory继承NamedContextFactory，为每个ServiceName拥有自己的SpringContext和Bean，实现了不同服务之间的LoadBalancer和其依赖的Bean的隔离**。

&#8195;&#8195;也就是说，在我调用不同的服务时，为其提供负载均衡能力的LoadBalancer和所依赖的Bean，都是以要调用的ServiceName为单元分割为子容器管理的。子容器之间相互隔离，调用一个服务的负载均衡组件并不会影响其他服务。

&#8195;&#8195;这样做有什么好处呢？

* **子容器之间数据隔离**。不同的LoadBalancer只管理自己的实例，明确自己的职责。比如 name-test服务的集群数据与age-test服务的集群数据是隔离的。
* **子容器之间配置隔离**。不同LoadBalancer之间可以使用不同的配置，例如调用报表服务的响应时间会很长，配置的超时时间就会比较长；调用会员服务逻辑简单，超时时间比较短。
* **子容器之间的Bean隔离**。例如name-test服务的注册中心是Nacos集群，需要通过Nacos拉取服务列表；age-test是consul集群做的注册中心，需要从consul集群拉取列表。还例如不同的服务使用不同的负载均衡策略。
## NamedContextFactory

&#8195;&#8195;NamedContextFactory 一般是将其继承后使用，在自己定义的实现类中，调用super方法。这个类的构造器包含3个参数（十分重要），如下所示：

```java
public NamedContextFactory(Class<?> defaultConfigType, String propertySourceName, String propertyName) {
    this.defaultConfigType = defaultConfigType;
    this.propertySourceName = propertySourceName;
    this.propertyName = propertyName;
}
```
* **defaultConfigType（很重要）**：默认配置类，当使用你的实现类时，该参数所属类型的配置类一定会被加载。
* propertySourceName：该子容器在environment中的propertySourceName
* **propertyName（非常重要）**：子容器的Name，在LoadBalancer中被固定写入了http.client.name=ServiceName，也就是说**通过读取http.client.name就可以读取到服务名**。

### LoadBalancerClientFactory

&#8195;&#8195;LoadBalancerClientFactory类是LoadBalancer对NamedContextFactory的具体实现，也就是说，**LoadBalancer通过LoadBalancerClientFactory管理子容器，每个服务有一个LoadBalancerClientFactory，下面挂着很多相关的Bean，如负载均衡器等**。

&#8195;&#8195;首先，每一个子容器的propertyName，这里定义其为Environment的值为loadbalancer.client.name，它的值是要调用的服务名。也就是说通过environment.getProperty("loadbalancer.client.name")是可以获得到服务名的，子容器以服务名进行命名的。

```java
// 源码中的定义，可以直接通过常量获取
public static final String PROPERTY_NAME = "loadbalancer.client.name";
```

&#8195;&#8195;其次，在将LoadBalancerClientFactory注册为Bean的时候，也就是生成子容器的时候，会添加默认配置LoadBalancerClientConfiguration，默认配置中注入了默认的服务列表和默认的负载均衡算法。

```java
// 源码中的定义，会传入默认配置类
public LoadBalancerClientFactory(LoadBalancerClientsProperties properties) {
    super(LoadBalancerClientConfiguration.class, "loadbalancer", "loadbalancer.client.name");
    this.properties = properties;
}
```

&#8195;&#8195;第三，LoadBalancerClientFactory实现了ReactorLoadBalancer接口，也就是实现了getInstance方法，可以通过这个方法获取到服务对应的负载均衡器的实例。
```java
// 源码中方法的实现，可以根据服务id获取对应的负载均衡实例
public ReactiveLoadBalancer<ServiceInstance> getInstance(String serviceId) {
    return (ReactiveLoadBalancer)this.getInstance(serviceId, ReactorServiceInstanceLoadBalancer.class);
}
```

## 配置注入原理

### LoadBalancerClientConfiguration

&#8195;&#8195;默认配置比较容易理解，就是在将LoadBalancerClientFactory注册为Bean时，加载的配置项，它的**主要作用是注册默认的负载均衡器和默认的服务列表**，相关的源码如下：

&#8195;&#8195;下面是注册默认服务列表的源码，当然LoadBalancer提供了很多种服务列表的Bean，这个在后面服务列表的源码中说明：

```java
@Bean
@ConditionalOnBean({DiscoveryClient.class})
@ConditionalOnMissingBean
@Conditional({LoadBalancerClientConfiguration.DefaultConfigurationCondition.class})
public ServiceInstanceListSupplier discoveryClientServiceInstanceListSupplier(ConfigurableApplicationContext context) {
    return ServiceInstanceListSupplier.builder().withBlockingDiscoveryClient().withCaching().build(context);
}
```

&#8195;&#8195;下面是Reactor方式创建的懒加载的默认负载均衡器，也可以看到，**负载均衡器默认使用的是轮询的策略，而且是懒加载**：

```java
@Bean
@ConditionalOnMissingBean
public ReactorLoadBalancer<ServiceInstance> reactorServiceInstanceLoadBalancer(Environment environment, LoadBalancerClientFactory loadBalancerClientFactory) {
    String name = environment.getProperty("loadbalancer.client.name");
    return new RoundRobinLoadBalancer(loadBalancerClientFactory.getLazyProvider(name, ServiceInstanceListSupplier.class), name);
}
```

### LoadBalancerClient和LoadBalancerClients

&#8195;&#8195;如果想要实现**自定义公共服务在均衡的配置，或者单独指定某几个微服务的负载均衡的配置**，就需要到@LoadBalancerClient和@LoadBalancerClients两个注解。下面是@LoadBalancerClients的源码：

```java
@Configuration(
    proxyBeanMethods = false
)
@Retention(RetentionPolicy.RUNTIME)
@Target({ElementType.TYPE})
@Documented
@Import({LoadBalancerClientConfigurationRegistrar.class})
public @interface LoadBalancerClients {
    // 可以指定LoadBalancerClient的生效范围，默认是全部
    LoadBalancerClient[] value() default {};
    // 指定所有负载均衡器的默认扩展配置
    Class<?>[] defaultConfiguration() default {};
}
```

&#8195;&#8195;接下来是@LoadBalancerClient的源码：
```java
@Configuration(
    proxyBeanMethods = false
)
@Import({LoadBalancerClientConfigurationRegistrar.class})
@Target({ElementType.TYPE})
@Retention(RetentionPolicy.RUNTIME)
@Documented
public @interface LoadBalancerClient {
    // name 和 value 都是微服务名
    @AliasFor("name")
    String value() default "";
    @AliasFor("value")
    String name() default "";
    // 指定该微服务的默认扩展配置
    Class<?>[] configuration() default {};
}
```

&#8195;&#8195;通过上面我们可以看到，这两个注解是可以指定扩展配置的。那么是如何实现扩展配置加载的呢？在两个注解上都有@Import注解，而且都引入了**LoadBalancerClientConfigurationRegistrar**类，实际上，**扩展配置的注入都是通过这个类使用BeanDefinition注册的，而且并不是直接注册配置类，而是注册一个LoadBalancerClientsSpecification加入到子容器LoadBalancerClientFactory中**。下面是它的源码：

```java
// 这个方法用于注册Bean
public void registerBeanDefinitions(AnnotationMetadata metadata, BeanDefinitionRegistry registry) {
    // 根据@LoadBalancerClients注解的元数据注册
    Map<String, Object> attrs = metadata.getAnnotationAttributes(LoadBalancerClients.class.getName(), true);
    if (attrs != null && attrs.containsKey("value")) {
        AnnotationAttributes[] clients = (AnnotationAttributes[])((AnnotationAttributes[])attrs.get("value"));
        AnnotationAttributes[] var5 = clients;
        int var6 = clients.length;
        for(int var7 = 0; var7 < var6; ++var7) {
            AnnotationAttributes client = var5[var7];
            // 注册LoadBalancerClientSpecification
            registerClientConfiguration(registry, getClientName(client), client.get("configuration"));
        }
    }
    // 如果没有指定额外配置，使用默认配置器配置
    if (attrs != null && attrs.containsKey("defaultConfiguration")) {
        String name;
        if (metadata.hasEnclosingClass()) {
            name = "default." + metadata.getEnclosingClassName();
        } else {
            name = "default." + metadata.getClassName();
        }
        // 注册LoadBalancerClientSpecification
        registerClientConfiguration(registry, name, attrs.get("defaultConfiguration"));
    }
    // 根据@LoadBalancerClient注解的元数据注册
    Map<String, Object> client = metadata.getAnnotationAttributes(LoadBalancerClient.class.getName(), true);
    String name = getClientName(client);
    if (name != null) {
        // 注册LoadBalancerClientSpecification
        registerClientConfiguration(registry, name, client.get("configuration"));
    }
}

// 这个方法用于注册一个LoadBalancerClientSpecification Bean
private static void registerClientConfiguration(BeanDefinitionRegistry registry, Object name, Object configuration) {
    BeanDefinitionBuilder builder = BeanDefinitionBuilder.genericBeanDefinition(LoadBalancerClientSpecification.class);
    builder.addConstructorArgValue(name);
    builder.addConstructorArgValue(configuration);
    registry.registerBeanDefinition(name + ".LoadBalancerClientSpecification", builder.getBeanDefinition());
}
```
### xxxAutoConfiguration

&#8195;&#8195;这里主要指的是loadbalancer包下的**LoadBalancerAutoConfiguration**和**ReactorLoadBalancerClientAutoConfiguration**，这两个类主要是为了向RestTemplate和WebClient中加入负载均衡的功能。

&#8195;&#8195;RestTemplate是通过LoadBalancerAutoConfiguration，向带有@LoadBalanced注解的RestTemplate的Bean中加入Interceptor实现的。下面是@LoadBalanced注解的源码，这个注解中带有@Qualify注解，用于其他位置进行识别：

```java
@Target({ElementType.FIELD, ElementType.PARAMETER, ElementType.METHOD})
@Retention(RetentionPolicy.RUNTIME)
@Documented
@Inherited
@Qualifier
public @interface LoadBalanced {
}
```

&#8195;&#8195;在LoadBalancerAutoConfiguration中，通过@Qualify识别出注入带有@LoadBalanced注解的RestTemplate Bean，然后为这些Bean**加入LoadBalancerInterceptor**。
```java
// 注入所有需要加入负载均衡能力的RestTemplate Bean集合
@LoadBalanced
@Autowired(
    required = false
)
private List<RestTemplate> restTemplates = Collections.emptyList();

// 为RestTemplate加入Interceptor
@Bean
@ConditionalOnMissingBean
public RestTemplateCustomizer restTemplateCustomizer(final LoadBalancerInterceptor loadBalancerInterceptor) {
    return (restTemplate) -> {
        List<ClientHttpRequestInterceptor> list = new ArrayList(restTemplate.getInterceptors());
        list.add(loadBalancerInterceptor);
        restTemplate.setInterceptors(list);
    };
}
```

&#8195;&#8195;对于WeClient，则是为其添加一个ReactorLoadBalancerExchangeFilterFunction的拦截器，前面我们已经实现了直接添加Bean的操作，比较好理解。下面是为Builder添加@LoadBalanced注解，让其自己添加拦截器的原理，其实跟我们手动添加一样：
```java
@Bean
public ReactorLoadBalancerExchangeFilterFunction loadBalancerExchangeFilterFunction(Factory<ServiceInstance> loadBalancerFactory, ObjectProvider<List<LoadBalancerClientRequestTransformer>> transformers) {
    return new ReactorLoadBalancerExchangeFilterFunction(loadBalancerFactory, (List)transformers.getIfAvailable(Collections::emptyList));
}
```

## 链路调用原理

### 过滤器和拦截器

&#8195;&#8195;对于第三方的API，其自己实现原理各不相同，不在此处叙述。对于RestTemplate，则是使用LoadBalancerInterceptor进行拦截，其原理是在Http请求发出之前，调用BlockingLoadBalancerClient的execute方法，获取服务地址创建请求。

```java
public ClientHttpResponse intercept(final HttpRequest request, final byte[] body, final ClientHttpRequestExecution execution) throws IOException {
    URI originalUri = request.getURI();
    String serviceName = originalUri.getHost();
    Assert.state(serviceName != null, "Request URI does not contain a valid hostname: " + originalUri);
    return (ClientHttpResponse)this.loadBalancer.execute(serviceName, this.requestFactory.createRequest(request, body, execution));
}
```

&#8195;&#8195;对于WebClient，则是使用DeferringLoadBalancerExchangeFilterFunction调用filter，在过滤器中调用ReactorLoadBalancerExchangeFilterFunction实现提前获取服务地址的需求。

```java
public Mono<ClientResponse> filter(ClientRequest request, ExchangeFunction next) {
    this.tryResolveDelegate();
    return this.delegate.filter(request, next);
}
```
### xxxLoadBalancerClient

&#8195;&#8195;在支撑RestTemplate的BlockingLoadBalancerClient中，首先使用LoadBalancerClientFactory获取对应服务的子容器的负载均衡器的Bean，然后调用负载均衡器的choose方法获取服务地址：

```java
public <T> ServiceInstance choose(String serviceId, Request<T> request) {
    // 通过子容器获取负载均衡器Bean
    ReactiveLoadBalancer<ServiceInstance> loadBalancer = this.loadBalancerClientFactory.getInstance(serviceId);
    if (loadBalancer == null) {
        return null;
    } else {
        // 调用负载均衡器
        Response<ServiceInstance> loadBalancerResponse = (Response)Mono.from(loadBalancer.choose(request)).block();
        return loadBalancerResponse == null ? null : (ServiceInstance)loadBalancerResponse.getServer();
    }
}
```

&#8195;&#8195;在WebClient的ReactorLoadBalancerExchangeFilterFunction中，也是通过LoadBalancerClientFactory获取对应服务的子容器的负载均衡器的Bean，然后调用负载均衡器的choose方法获取服务地址：
```java
protected Mono<Response<ServiceInstance>> choose(String serviceId, Request<RequestDataContext> request) {
    // 通过子容器获取负载均衡器Bean
    ReactiveLoadBalancer<ServiceInstance> loadBalancer = this.loadBalancerFactory.getInstance(serviceId);
    // 调用负载均衡器
    return loadBalancer == null ? Mono.just(new EmptyResponse()) : Mono.from(loadBalancer.choose(request));
}
```

## 负载均衡和服务列表实现

### ReactiveLoadBalancer\<ServiceInstance\>

&#8195;&#8195;ReactorLoadBalancer\<ServiceInstance\>是负载均衡器的统一接口，其核心方法是choose方法，负责的负载均衡策略的实现：

```java
public interface ReactorLoadBalancer<T> extends ReactiveLoadBalancer<T> {
    Mono<Response<T>> choose(Request request);
    default Mono<Response<T>> choose() {
        return this.choose(REQUEST);
    }
}
```
&#8195;&#8195;这里以默认的轮询策略举例，首先第一步是通过ServiceInstanceListSupplier获取服务列表，然后执行具体的负载均衡算法（其他的负载均衡算法，在后面再进行介绍）：
```java
public Mono<Response<ServiceInstance>> choose(Request request) {
    // 获取服务列表
    ServiceInstanceListSupplier supplier = (ServiceInstanceListSupplier)this.serviceInstanceListSupplierProvider.getIfAvailable(NoopServiceInstanceListSupplier::new);
    // 执行负载均衡算法
    return supplier.get(request).next().map((serviceInstances) -> {
        return this.processInstanceResponse(supplier, serviceInstances);
    });
}
```

### ServiceInstanceListSupplier

&#8195;&#8195;ServiceInstanceListSupplier就是服务列表提供者，提供者在Spring Cloud中有很多实现，需要指定配置类来进行制定，配置项是spring.cloud.loadbalancer.configurations，默认的配置项就是LoadBalancerClientConfiguration。

```java
public interface ServiceInstanceListSupplier extends Supplier<Flux<List<ServiceInstance>>> {
    String getServiceId();
    default Flux<List<ServiceInstance>> get(Request request) {
        return (Flux)this.get();
    }
    static ServiceInstanceListSupplierBuilder builder() {
        return new ServiceInstanceListSupplierBuilder();
    }
}
``` 

