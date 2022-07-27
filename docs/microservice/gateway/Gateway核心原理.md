---
title: Gateway核心原理
prev:
  text: Java基础知识
  link: /java/basic/Java基础知识.md
next:
  text: 断言工厂和路由匹配
  link: /microservice/gateway/断言工厂和路由匹配.md
---
::: info
&#8195;&#8195;Gateway是由WebFlux、Netty、Reactor实现的响应式API网关。其作用不仅是一个请求的转发以及服务的整合，还可以提供下述功能：
- 统一鉴权、限流、熔断、日志。
- 协议转化。针对后端的多种协议(如REST、DUBBO协议)，在网关层统一处理以HTTP协议对外提供的服务后，针对后端的服务进行协议转换。
- 请求转发。分发请求并且可以基于网关实现内外网的隔离。
- 灰度发布。在网关层通过灰度规则进行部分流量的路由，或者根据分流引擎的配置规则进行分流。
:::
[[toc]]
***

## 请求处理原理
&#8195;&#8195;Gateway是由WebFlux、Netty、Reactor实现的响应式API网关，不能在传统的Servlet容器中工作，也不能构建为war包。Gateway的使用围绕着3个核心的概念进行：
- 路由(Route)：网关的基本组件，由ID、目标URI、Predicate集合、Filter集合组成。
- 断言或谓语(Predicate)：使用的Java8的断言函数，Gateway中允许判断请求中的任何信息，如URI、请求头、参数等等。简单的说就是如果一个请求符合Predicate的要求，那么这个请求就与这个Route匹配，可以通过层层过滤器发往目标URI。
- 过滤器(Filter)：Gateway为请求提供前置和后置过滤器，包括其内置的过滤器和可自定义的过滤器。


![Gateway请求处理过程](/images/microservice/gateway/Gateway请求处理过程.png)

&#8195;&#8195;Gateway启动时，基于Netty Server监听一个指定的端口(通过server.port指定)。当客户端发送一个请求到达网关时，网关根据一系列的Predicate的匹配，确定该访问哪个路由，然后根据过滤器链进行请求的处理。
&#8195;&#8195;Gateway只包含pre和post过滤器，即先执行pre过滤器链，然后转发到对应服务器，最后执行post过滤器链。

## 快速开始
&#8195;&#8195;Gateway是由Netty构建的服务，因此只需要引入依赖，然后启动应用即可：
```xml 
<dependency>
            <groupId>org.springframework.cloud</groupId>
            <artifactId>spring-cloud-starter-gateway</artifactId>
        </dependency>
```
&#8195;&#8195;配置文件中添加Gateway的路由：
```yml 
spring:
  cloud:
    gateway:
      enabled: true         # 开启网关
      routes:
        - id: gateway       # 路由 id 
          uri: http://localhost:8080/hello    # 目标uri
          predicates:
            - Path=/gateway/**        # 路径匹配
          filters:
            - StripPrefix=1         # 跳过前缀
```

## 断言工厂(Route Predicate Factories)
&#8195;&#8195;Predicates是Java8种的断言函数，允许接收参数并且返回一个布尔值，用于过滤条件和请求参数的校验。下面列举几个比较常用的路由匹配规则。

### 内置断言工厂
#### 指定时间规则匹配
&#8195;&#8195;时间规则匹配的路由规则包含三种：
- 指定日期之前：BeforeRoutePredicateFactory。
- 指定日期之后：AfterRoutePredicateFactory。
- 指定日期之间：BetweenRoutePredicateFactory。

```yml 
spring:
  cloud:
    gateway:
      routes:
        - id: gateway       
          uri: http://localhost:8080/hello    
          predicates:
            - After=2020-06-01T24:00:00.000+08:00[Asia/Shanghai]
            # - Before=2020-06-01T24:00:00.000+08:00[Asia/Shanghai]
            # - Between=2020-06-01T24:00:00.000+08:00[Asia/Shanghai],2020-07-01T24:00:00.000+08:00[Asia/Shanghai]
```
&#8195;&#8195;需要注意的是，时间日期需要满足ZonedDateTime的格式，使用'T'间隔年月日和时分秒，+08:00是和UTC相差的时间，最后是时区。

#### Cookie规则匹配
&#8195;&#8195;Cookie规则匹配就是通过判断请求中携带的Cookie是否满足匹配规则，配置方式如下：
```yml
spring:
  cloud:
    gateway:
      routes:
        - id: gateway       
          uri: http://localhost:8080/hello    
          predicates:
            - Cookie=zhangsan,male
```
&#8195;&#8195;上述配置表示请求必须带有一个name=zhangsan，value=male的Cookie才能匹配到路由。

#### Header规则匹配
&#8195;&#8195;Header匹配规则是判断请求头Header中对应的name和value是否满足断言中的匹配，value是正则表达式的形式：
```yml
spring:
  cloud:
    gateway:
      routes:
        - id: gateway       
          uri: http://localhost:8080/hello    
          predicates:
            - Header=X-Request-Id, \d+
```
&#8195;&#8195;上述表示请求头Header中的name=X-Request-Id，并且Value是一个以上的数字，才会匹配到对应的路由。

#### Host规则匹配
&#8195;&#8195;Http请求会携带一个Host字段，这个字段标识请求的服务器网址。Host匹配规则就是对Host字段进行匹配。
```yml
spring:
  cloud:
    gateway:
      routes:
        - id: gateway       
          uri: http://localhost:8080/hello    
          predicates:
            - Host=**.host.com,**.another.com
```
&#8195;&#8195;Host可以是一个列表，只有满足上述host时请求才会被转发。

#### 请求方法匹配
&#8195;&#8195;请求方法匹配则是匹配固定的请求Method，如下匹配GET和POST。
```yml
spring:
  cloud:
    gateway:
      routes:
        - id: gateway       
          uri: http://localhost:8080/hello    
          predicates:
            - Method=GET,POST
```
#### 请求路径匹配
&#8195;&#8195;路径匹配是最常用的匹配规则了，如下匹配多个路径：
```yml 
spring:
  cloud:
    gateway:
      routes:
        - id: gateway       
          uri: http://localhost:8080/hello    
          predicates:
            - Path=/red/{segment},/blue/*,/yellow/**
```
- ${segment}：占位符，表示*
- *：匹配单层路径
- **：匹配多层路径

### 自定义断言工厂
&#8195;&#8195;自定义断言工厂需要需要继承AbstractRoutePredicateFactory类，重写apply()方法。在方法中可以通过exchange.getRequest()获得ServerHttpRequest对象，从而获得请求相关信息。断言工厂需要被注入到容器中，因此需要@Service进行装配。注意：自定义断言工厂命名需要以RoutePredicateFactory结尾。
```java
@Slf4j
@Service
public class CheckAuthRoutePredicateFactory extends AbstractRoutePredicateFactory<CheckAuthRoutePredicateFactory.Config> {
    public CheckAuthRoutePredicateFactory(Class<Config> configClass) {
        super(configClass);
    }

    /**
     * 判断逻辑
     * @param config
     * @return
     */
    @Override
    public Predicate<ServerWebExchange> apply(Config config) {
        return serverWebExchange -> {
            log.info("调用CheckAuthRoutePredicateFactory，name=",config.getName());
            return "zhangsan".equals(config.name);
        };
    }

    /**
     * 快捷配置设置
     * @return
     */
    @Override
    public List<String> shortcutFieldOrder() {
        return Collections.singletonList("name");
    }

    public static class Config {
        public String getName() {
            return name;
        }

        public void setName(String name) {
            this.name = name;
        }

        private String name;
    }
}
```
&#8195;&#8195;yml配置文件中使用自定义断言工厂：
```yml
spring:
  cloud:
    gateway:
      routes:
        - id: color
          uri: lb://color-service
          predicates:
            - Path=/subject/**,/prefrence/**
            - name: CheckAuth     # 自定义断言工厂
              args:
                name: zhangsan      # 自定义参数
```

## 内置过滤器(Gateway Filter Factories)
&#8195;&#8195;Gateway的Filter只有Pre和Post两种，并且只有两种实现：
- GatewayFilter：只会作用到单个路由上。在单个路由中配置
- GlobalFilter：作用到所有路由上。全局均可配置。

### GatewayFilter
#### AddRequestParameter(添加请求参数过滤器)
&#8195;&#8195;该过滤器的作用是为请求添加一个参数，如下所示添加foo=bar这个参数：
```yml
spring:
  cloud:
    gateway:
      routes:
        - id: gateway       
          uri: http://localhost:8080/hello    
          predicates:
          filters:
            - AddRequestParameter=foo,bar         
```

#### AddResponseHeader(添加响应头过滤器)
&#8195;&#8195;这个过滤器会匹配所有满足的请求，在结果返回给客户端之前，在Response Header中添加相应的数据，如下添加key=X-Response-Foo，value=Bar的Header；
```yml
spring:
  cloud:
    gateway:
      routes:
        - id: gateway       
          uri: http://localhost:8080/hello    
          predicates:
          filters:
            - AddResponseHeader=X-Response-Foo,Bar   
```

#### RetryGatewayFilter(请求重试过滤器)
&#8195;&#8195;请求重试过滤器的作用是当后端服务不可用时，网关会根据配置的参数发起重试：
```yml
spring:
  cloud:
    gateway:
      routes:
        - id: gateway       
          uri: http://localhost:8080/hello    
          predicates:
          filters:
            - name: Retry
              args:
                retries: 3    # 请求重试次数
                status: 503   # 需要重试的状态码
                methods: GET,POST # 需要重试的方法
                # series: SERVER_ERROR(5) # 错误码段
```
- retries：请求重试次数，默认3
- status：需要重试的状态码，上述在后端服务返回503时进行重试
- methods：重试的请求方法，只有满足条件的Method才会充实
- series：错误码段，默认SERVER_ERROR(5)，即5xx的错误码才会重试，如果配置了series没有配置status，会以series为标准进行匹配

#### PrefixPath(添加请求URI前缀过滤器)
&#8195;&#8195;这个过滤器会在请求转发之前，为所有的请求URI添加一个前缀，如下会转发到 localhost:8080/color/hello
```yml
spring:
  cloud:
    gateway:
      routes:
        - id: gateway       
          uri: http://localhost:8080/hello    
          predicates:
          filters:
            - PrefixPath=/color   
```
#### RedirectTo(重定向过滤器)
&#8195;&#8195;这个过滤器会将符合条件的Route进行重定向到指定的URI，如下重定向到百度。
```yml
spring:
  cloud:
    gateway:
      routes:
        - id: gateway       
          uri: http://localhost:8080/hello    
          predicates:
          filters:
            - RedirectTo=302,http://baidu.com 
```

### GlobalFilter
#### LoadBalancerClientFilter(负载均衡过滤器)
&#8195;&#8195;用于实现请求负载均衡的全局过滤器，这个过滤器需要配合注册中心和负载均衡Loadbalance使用，如下：
```yml
spring:
  cloud:
      discovery:
        locator:
          enabled: true     # 默认false，不建议开启，是否通过微服务创建路由功能
      routes:
        - id: color-gateway
          uri: lb://color-service
          predicates:
            - Path=/red/**,/yellow/**
```
&#8195;&#8195;如上所示，符合匹配的URL会替换为color-service服务的uri，并且会通过LoadBalancerClient解析具体的主机和端口列表，并通过设定的负载均衡算法进行访问。

#### GatewayMetricsFilter(网关指标监控过滤器)
&#8195;&#8195;这是网关监控指标过滤器，这个过滤器会添加name=gateway.requests的timermetrics，包含以下数据：
- routeId：路由Id
- routeUri：目标URI
- outcome：返回的状态码段，HttpStatus.Series定义
- status：返回给客户端的Http Status
- httpStatusCode：返回给客户端的HttpStatusCode，如200
- httpMethod：请求所使用的Http方法

&#8195;&#8195;这些指标通过actuator的metrics路径的gateway.requests获得，也就是访问http://ip:port/actuator/metrics/gateway.requests获得。需要依赖Actuator。

## 自定义过滤器(Gateway Filter Factories)
&#8195;&#8195;自定义过滤器也分为GatewayFilter和GlobalFiler两种，其作用域与内置过滤器相同，GatewayFilter只对声明的Route有效，GlobalFilter全局有效。
### GatewayFilter
1. 继承AbstractGatewayFilterFactory
   - 命名必须以GatewayFilterFactory结尾，默认会截取前缀
2. 实现apply()方法
    - 方法中同时包含pre和post过滤，then方法是请求执行结束之后的后置处理
3. 需要加载到Spring容器，也就是需要用@Service或者相关注解实现
4. 在配置文件中定义和使用

&#8195;&#8195;如下是简单实现一个带有属性的过滤器
```java
@Slf4j
@Service
public class GpDefineGatewayFilterFactory extends AbstractGatewayFilterFactory<GpConfig> {
    public GpDefineGatewayFilterFactory() {
        super(GpConfig.class);
    }

    @Override
    public GatewayFilter apply(GpConfig config) {
        return (exchange, chain) -> {
            // 前置拦截器
            log.info("Pre过滤器拦截请求：{}",config.getName());
            // then方法是后端处理完成后Post拦截响应
            return chain.filter(exchange)
                    .then(Mono.fromRunnable(() -> {
                        log.info("Post过滤器拦截响应");
                    }));
        };
    }


}
/**
 * 属性类
 */
class GpConfig {
    private String name;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        name = name;
    }
}
```
&#8195;&#8195;配置文件如下：
```yml 
spring:
  application:
    name: color-gateway
  cloud:
    gateway:
      routes:
        - id: color
          uri: lb://color-service
          predicates:
            - Path=/red/**,/yellow/**
          filters:
            - name: GpDefine    ## 自定义过滤器名称
              args:
                name: shangsan  ## 传入属性的key-value
            - StripPrefix=1
```

### GlobalFilter
&#8195;&#8195;全局过滤器只需要实现GlobalFilter，不需要其他额外配置。注意：需要实现Ordered或者使用@Order来实现过滤器的执行顺序。
```java
@Slf4j
@Service
public class GpDefineFilter implements GlobalFilter, Ordered {
    @Override
    public Mono<Void> filter(ServerWebExchange exchange, GatewayFilterChain chain) {
        log.info("自定义全局过滤器GpDefineFilter前置pre过滤");
        return chain.filter(exchange).then(Mono.fromRunnable(()->{
            log.info("自定义全局过滤器GpDefineFilter后置post过滤");
        }));
    }

    /**
     * 过滤器执行顺序，也可以使用@Order
     * @return
     */
    @Override
    public int getOrder() {
        return 0;
    }
}
```

## 跨域配置
&#8195;&#8195;跨域在项目中一半是由前端进行统一配置，或者Nginx中进行配置，但是很多情况下后端服务也必须要有一定的托底(实际开发中不应该将信任交由其他服务)，Gateway提供了通过配置进行设置跨域访问的机制，如下是一个全部开放跨域的配置示例：
```yml
spring:
  cloud:
    gateway:
      globalcors:
        cors-configurations:
          '[/**]':
            allowedOrigins: "*"
            allowedMethods:
              - GET
              - POST
              - DELETE
              - PUT
              - OPTION
```
&#8195;&#8195;当然，依旧可以使用Java配置的方式进行跨域的配置，Gateway使用的是WebFlux，因此只需要配置WebFlux CROS Handling即可。
```java
@Configuration
public class CrosConfig {
    public CorsWebFilter corsWebFilter() {
        CorsConfiguration config = new CorsConfiguration();
        config.addAllowedMethod("*");
        config.addAllowedOrigin("*");
        config.addAllowedHeader("*");
        // 使用reactor的
        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource(new PathPatternParser());
        source.registerCorsConfiguration("/**",config);
        return new CorsWebFilter(source);
    }
}
```
## 网关高可用方案
&#8195;&#8195;网关一般是在整个调用链路的最前方，同时也是流量最集中的地方。Gateway采用Netty、Reactor、WebFlux来处理流量集中的问题，但是仍需要进行高可用保证以保证整个系统的可靠性。
&#8195;&#8195;Gateway的高可用可以采用多个实例进行负载，然后使用Nginx或者F5进行反向代理和负载均衡即可。


***
参考
- Spring Cloud Alibaba 微服务原理与实战[谭峰(mic)]. 中国工信出版社,电子工业出版社