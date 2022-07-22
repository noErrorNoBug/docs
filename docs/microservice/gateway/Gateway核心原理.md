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

### 指定时间规则匹配
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

### Cookie规则匹配
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

### Header规则匹配
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

### Host规则匹配
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

### 请求方法匹配
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
### 请求路径匹配
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

## 内置过滤器(Gateway Filter Factories)
&#8195;&#8195;Gateway的Filter只有Pre和Post两种，并且只有两种实现：
- GatewayFilter：只会作用到单个路由上。在单个路由中配置
- GlobalFilter：作用到所有路由上。全局均可配置。

### GatewayFilter
#### AddRequestParameter(添加请求参数过滤器)

#### AddResponseHeader(添加响应头过滤器)

#### RetryGatewayFilter(请求重试过滤器)

### GlobalFilter