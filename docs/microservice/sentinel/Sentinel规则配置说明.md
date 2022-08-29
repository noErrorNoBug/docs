---
title: Sentinel控制台配置规则
prev:
  text: 基于Sentinel实现服务限流
  link: /microservice/sentinel/基于Sentinel实现服务限流.md
next:
  text: Sentinel整合RestTemplate和OpenFeign
  link: /microservice/sentinel/Sentinel整合RestTemplate和OpenFeign.md
---
::: info
&#8195;&#8195;Sentinel支持多种保护规则：流量控制规则、熔断降级规则、系统保护规则、来源访问控制规则、热点参数规则等。在[实现Sentinel限流](基于Sentinel实现服务限流.md)中我们提到过，这些规则是通过多个FlowRule定义的，除此之外，还可以使用控制台进行定义，但是核心也是去定义FlowRule。
:::
[[toc]]
***

## Sentinel流控规则
&#8195;&#8195;**资源保护规则通过FlowRule定义，FlowRule有5个核心属性**，资源保护规则就是围绕这4个核心属性配置的，我们分别来了解一下含义：
- **limitApp**：**是否需要针对调用来源进行限流**，默认default(不区分调用来源)，微服务架构下可以指定服务名，配置针对某服务的限流规则。
- **grade**：**流量控制统计类型**，QPS(每秒访问接口次数)或者并发线程数(为接收请求分配的线程数量)。
- **strategy**：**调用关系限流策略**，包括直接、链路、关联。
- **controlBehavior**：**流控行为**，包括直接拒绝、排队等待、慢启动模式，默认是直接拒绝。
- **clusterMode**：**是否是集群限流**，默认为否。

### 基于并发数和QPS的流量控制
&#8195;&#8195;上述grade属性控制的两个策略，**并发线程数限流用来保护业务线程不被耗尽**。比如A服务调用B服务，而B服务因为某种原因导致服务不稳定或者响应延迟，那么对于A来说吞吐量会下降，也就一直占用线程。

&#8195;&#8195;QPS表示每秒的查询数，也就是一台服务器每秒能够响应的查询次数，当QPS达到限流阈值时，就会触发限流政策。**QPS直接针对流量行为进行保护**。

### QPS流量控制行为
&#8195;&#8195;流量控制行为即controlBehavior的4种行为。

#### 直接拒绝
&#8195;&#8195;**直接拒绝**是默认的流量控制方式，也就是**请求流量超出阈值时，直接抛出一个FlowException**。

#### 慢启动（warm up）
&#8195;&#8195;Warm Up是一种冷启动方式(预热方式)。当流量突然增大，也就意味着系统从空闲状态突然切换到繁忙状态，有可能会瞬间压垮系统。**当我们希望请求处理的数量逐步递增，并在达到一个预期时间之后达到允许处理请求的最大值，就可以使用Warm up模式**。

#### 匀速排队
&#8195;&#8195;**匀速排队方式会严格控制请求通过的时间间隔，也就是让请求以均匀地速度通过，相当于漏桶算法，可以处理间隔性突发请求**。

### 调用关系调流策略
&#8195;&#8195;调用关系包括调用方和被调用方，一个方法有可能会调用其他方法，形成一个调用链。调用关系流量策略则是根据调用纬度出发流控规则，即上述的strategy属性控制的三种策略：
- 根据调用方限流(配合limitApp的直接调用)
- 根据调用链路入口限流
- 据有关系的资源流量控制(关联流量控制)


#### 调用方限流
&#8195;&#8195;**调用方限流即根据请求的来源进行流量控制**，通过limitApp设置来源信息，共有三个属性：
- default：不区分调用者，所有的请求都会统计
- {some_origin_name}：特定的调用者，可以是多个，只有来自这些来源的请求才会限流
- other：表示针对除了{some_origin_name}之外的请求

&#8195;&#8195;注意，同一个资源可以配置多个规则，如果多个规则的limitApp不一致，**规则生效的顺序为：{some_origin_name} --> other --> default**。

#### 根据调用链路的入口限流
&#8195;&#8195;一个被限流保护的方法，可能来自于不同的调用链路。比如一个查看商品详情的接口，可能来自于购物车调用，也可能来自于促销系统调用。如果仅针对特定的调用链路限流，那么就可以使用调用链路的入口限流，**一定程度上类似于调用方限流**。

#### 关联流量控制
&#8195;&#8195;当两个资源之间存在依赖关系或者资源竞争时，我们就说两个资源存在关联。存在关联的资源在执行的时候可能会因为某一个资源执行操作过于频繁导致另一个资源执行效率变慢，所以关联流量控制就是限制其中一个资源的执行流量。

#### 链路限流失效问题
&#8195;&#8195;sentinel1.7以后，需要引入依赖：
```xml
<dependency>
    <groupId>com.alibaba.csp</groupId>
    <artifactId>sentinel‐web‐servlet</artifactId>
</dependency>
```
&#8195;&#8195;添加配置类，配置CommonFilter过滤器，指定WEB_CONTEXT_UNIFY=false，禁止收敛URL的入口context：

```java
@Configuration
public class SentinelConfig {

    @Bean
    public FilterRegistrationBean filterRegistrationBean() {
        FilterRegistrationBean<Filter> bean = new FilterRegistrationBean<>();
        bean.setFilter(new CommonFilter());
        bean.addUrlPatterns("/*");

        // 入口资源关闭聚合，解决链路不生效
        bean.addInitParameter(CommonFilter.WEB_CONTEXT_UNIFY,"false");
        bean.setName("sentinelFilter");
        bean.setOrder(1);

        // 自定义BlockExceptionHandler
        WebCallbackManager.setUrlBlockHandler(new CustomsUrlBlockHandler());
        // 配置自定义的UrlCleaner
        WebCallbackManager.setUrlCleaner(new CustomerUrlCleaner());
        return bean;
    }
}
```
&#8195;&#8195;另外需要注意的是，对于被保护的资源，为了使捕捉到的异常能够正常抛出，还应该配置异常处理器，即上面代码注释位置，处理器的具体代码如下：
```java
@Service
public class CustomsUrlBlockHandler implements UrlBlockHandler {
    @Override
    public void blocked(HttpServletRequest httpServletRequest, HttpServletResponse httpServletResponse, BlockException e) throws IOException {
        log.error("限流规则：{}",e.getRule());
        BaseResponse result = null;
        if (e instanceof FlowException) {
            result = BaseResponse.failed(FLOW_RESTRICTION);
        } else if (e instanceof DegradeException) {
            result = BaseResponse.failed(RELEGATION);
        } else if (e instanceof ParamFlowException) {
            result = BaseResponse.failed(HOTSPOT_RESTRICTION);
        } else if (e instanceof SystemBlockException) {
            result = BaseResponse.failed(SYSTEM_BLOCKED);
        } else if (e instanceof AuthorityException) {
            result = BaseResponse.failed(FLOW_UNAUTHORIZED);
        }
        response.setStatus(200);
        request.setCharacterEncoding("utf-8");
        response.setContentType(MediaType.APPLICATION_JSON_VALUE);
        new ObjectMapper().writeValue(response.getWriter(),result);
    }
}
```

&#8195;&#8195;对于被保护的资源，应该使用注解@SentinelResource配置对应的fallbackHandler。
## Sentinel熔断规则
&#8195;&#8195;Sentinel服务熔断规则与限流规则类似，通过DegradeRule定义，它有4个核心属性：
-** grade：熔断策略**，支持秒级RT、秒级异常比例、分钟级异常数量。默认状态是秒级RT。
- **timeWindow：熔断降级的时间窗口**，单位s。也就是触发熔断降级后多长时间内保持熔断状态。
- **rtSlowRequestAmount：RT模式下**，1s内持续多少个请求的平均RT超出阈值后会出发熔断，默认5。
- **minRequestAmount：触发的异常熔断最小请求数**，请求数量小于这个值即使异常比例超出阈值也不会熔断，默认5。


### 熔断策略
&#8195;&#8195;熔断策略通过grade设定，Sentinel提供了3种熔断策略：
- **平均响应时间**：如果1s内持续进入5个请求，对应的平均响应时间都超过了阈值，接下来的时间窗口内(timeWindow)，这个方法的调用都会自动熔断，抛出DegradeException。（Sentinel默认统计的RT上线是4900ms）
- **异常比例**：如果每秒资源数大于等于触发熔断的最小请求数(minRequestAmout)的情况下，秘密奥德异常总数占通过总量的比例超过阈值，资源就会计入降级状态。
- **异常数**：当资源最近一分钟的异常数超过阈值后，触发熔断。

## 热点规则
&#8195;&#8195;热点指的是我们经常访问的数据，有时候我们需要统计访问量中的Top k的数据，比如以商品ID位参数，统计一段时间内最常购买的商品ID并进行限制；以用户ID为参数，针对一段时间段内的频繁访问的用户进行限制。

&#8195;&#8195;热点参数限流会统计传入接口的参数中的热点参数，并且根据阈值跟模式，对热点资源的调用进行限流。如对id参数QPS超过50的进行限流。

&#8195;&#8195;热点规则需要使用@SentinelResource注解，否则不生效。
## 系统规则
&#8195;&#8195;系统规则是从整个系统的维度，对系统的所有的资源统一进行的配置，主要维度如下：
- **Load自适应**(仅仅对Linux/Unix-like机器适用)：系统的load1作为启发指标，进行自适应系统保护。当系统的load1超过设定的启发值，且当系统的并发线程数超过估算的系统容量时才会触发保护。系统容量是由系统的maxQps * minRt计算，设定参考值一般是 CPU cores * 2.5。
- **CPU usage**：当前CPU使用率超过阈值则启动保护。
- **平均RT**：单台机器所有的入口流量的平均RT达到阈值启动保护。
- **并发线程数**：单台机器的所有流量入口的并发线程数达到阈值启动保护。
- **入口QPS**：单台机器的所有流量入口的QPS达到阈值启动保护。

## 授权规则
&#8195;&#8195;此规则即黑白名单规则，可以配置黑白名单，主要有以下几个参数：
- resource：资源名称
- limitApp：对应名单的内容，可以是多个，用“，”隔开
- strategy：黑名单/白名单，默认白名单模式

&#8195;&#8195;如果引入了CommonFilter，那么需要额外配置一个Filter获取limitApp：
```java
@Service
public class CustomsRequestOriginParser implements RequestOriginParser {
    @Override
    public String parseOrigin(HttpServletRequest request) {
        return request.getParameter("serviceName");
    }
}
```

## 集群规则
&#8195;&#8195;集群规则的场景主要有两种，一种是通过一台服务器进行流量的整体统计再判断集群是否限流；另一种是解决流量不均匀的情况。因此衍生出了两种形式：集群总体模式和单机分摊模式。

### 规则原理
&#8195;&#8195;集群流控规则将服务器分为两种身份：
- **Token Client**：集群流控的客户端，向Token Server请求Token，Token Server会返回给Client结果，决定是否限流。
- **Token Server**：集群流控服务端，处理Token Client的请求，根据集群限流规则判断是否该请求要限流，并把结果返回给Client。

&#8195;&#8195;根据以上两个角色和上述的两种场景，我们可以简单的理解一下两种集群限流模式：
- **集群总体模式**：这个模式下的阈值是限制集群的总QPS不超过的阈值，超过阈值后所有的Client都会被限流。
- **单机均摊模式**：这个模式下的阈值是集群中每个单机实例能够承受的阈值，token server根据集群的连接数计算总的阈值，然后按照总的阈值进行限制(如10台单机，设置阈值为300，那么集群的总阈值就是3000)。


&#8195;&#8195;Token Server的启动方式有两种：
- **独立模式**：token server作为独立的进程启动，独立部署，隔离性能好，但是需要额外的部署操作。这种模式适合作为全局限流器给集群使用（其实网关限流很大程度上就是这个作用）。
- **嵌入模式**：token server作为内置的线程与服务一块儿启动，这种模式下集群中的每个实例都是对等的，server和client的角色随时进行转变，无需单独部署。但是隔离性不好，需要限制token server的总qps防止影响应用本身的运行，比较适合内部或者局部流控。