---
title: Gateway集成Nacos实现负载均衡和动态配置.md
prev:
  text: Gateway核心原理
  link: /microservice/gateway/Gateway核心原理.md
next:
  text: Gateway集成Sentinel实现网关限流
  link: /microservice/gateway/Gateway集成Sentinel实现网关限流.md
---
::: info 概述
&#8195;&#8195;Nacos可以用于实现 Spring Cloud Gateway中网关的动态路由的功能，也可以基于Nacos实现对后端服务的负载均衡。前者利用Nacos的配置中心的功能，后者利用Nacos服务注册的功能。
:::
[[toc]]
***

## 依赖整合
&#8195;&#8195;下面是实现整合所需要的依赖，注册中心、配置中心和网关自身的依赖并不需要多解释。此外对于高版本的Nacos，需要自己集成LoadBalancer的依赖实现负载均衡，Nacos包不再自己提供LoadBalancer。同样2.4以上的SpringCloud默认不再提供读bootstrap.yml的功能，需要继承相关包。

```xml
<!-- Gateway 自身依赖 -->
<dependency>
  <groupId>org.springframework.cloud</groupId>
  <artifactId>spring-cloud-starter-gateway</artifactId>
</dependency>
<!-- 服务注册与发现 -->
<dependency>
  <groupId>com.alibaba.cloud</groupId>
  <artifactId>spring-cloud-starter-alibaba-nacos-discovery</artifactId>
</dependency>
<!-- 配置中心 -->
<dependency>
  <groupId>com.alibaba.cloud</groupId>
  <artifactId>spring-cloud-starter-alibaba-nacos-config</artifactId>
</dependency>
<!-- 读取bootstrap.yml -->
<dependency>
  <groupId>org.springframework.cloud</groupId>
  <artifactId>spring-cloud-starter-bootstrap</artifactId>
</dependency>
<!-- LoadBalancer负载均衡 -->
<dependency>
  <groupId>org.springframework.cloud</groupId>
  <artifactId>spring-cloud-starter-loadbalancer</artifactId>
</dependency>
```

&#8195;&#8195;有关[Nacos服务注册与发现](../microservice/../register/基于AP架构下的Nacos服务注册和服务发现原理.md)、[LoadBalancer负载均衡](../microservice/../loadbalance/LoadBalancer核心原理.md)、[Nacos配置中心](../microservice/../config/基于Nacos的配置中心实现.md)相关的原理，详见对应章节。

## 配置文件

&#8195;&#8195;配置文件此处建议使用Nacos注册中心的动态配置，由于网关的配置文件比较多，而且功能比较复杂，这里只给出一些划分的意见：
- bootstrap.yml 中进行配置中心的一些基础配置用于项目启动
- Web相关的统一配置、监控相关的配置，在配置中心单独作为公共配置进行提取
- 针对不同的下属后端服务集群切割gateway的配置文件，在配置中心进行动态配置，并且开启动态刷新
- 需要灰度发布的服务根据服务集群进行切割，在配置中心进行动态配置，并且开启动态刷新
- 认证相关的配置在配置中心进行动态配置，并且开启刷新
- 限流相关的配置在配置中心进行单独配置，并且开启刷新

***
参考
- Spring Cloud Alibaba 微服务原理与实战[谭峰(mic)]. 中国工信出版社,电子工业出版社