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

## 核心概念
&#8195;&#8195;Gateway是由WebFlux、Netty、Reactor实现的响应式API网关，不能在传统的Servlet容器中工作，也不能构建为war包。Gateway的使用围绕着3个核心的概念进行：
- 路由(Route)：网关的基本组件，由ID、目标URI、Predicate集合、Filter集合组成。
- 断言或谓语(Predicate)：使用的Java8的断言函数，Gateway中允许判断请求中的任何信息，如URI、请求头、参数等等。简单的说就是如果一个请求符合Predicate的要求，那么这个请求就与这个Route匹配，可以通过层层过滤器发往目标URI。
- 过滤器(Filter)：Gateway为请求提供前置和后置过滤器，包括其内置的过滤器和可自定义的过滤器。


## 请求处理过程

![Gateway请求处理过程](/images/microservice/gateway/Gateway请求处理过程.png)

&#8195;&#8195;Gateway启动时，基于Netty Server监听一个指定的端口(通过server.port指定)。当客户端发送一个请求到达网关时，网关根据一系列的Predicate的匹配，确定该访问哪个路由，然后根据过滤器链进行请求的处理。
&#8195;&#8195;Gateway只包含pre和post过滤器，即先执行pre过滤器链，然后转发到对应服务器，最后执行post过滤器链。