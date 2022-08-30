---
title: Sentinel持久化原理
prev:
  text: Sentinel核心原理
  link: /microservice/sentinel/Sentinel核心原理.md
next:
  text: Seata文章衔接
  link: /microservice/seata/todo.md
---
::: info
&#8195;&#8195;Sentinel的持久化分为3种模式：原始模式、Pull模式和Push模式。
- **原始模式**：通过API推送规则到Client端，并存储到内存中，扩展写数据源(WritableDataSource)。
- **Pull模式**：客户端主动向某个规则管理中心定时轮询拉取配置，这个规则中心可以是RDBMS、文件等等，无法保证实时性，扩展写数据源(WritableDataSource)。
- **Push模式**：规则中心统一推送，客户端通过注册监听器的方式时刻监听变化，如Nacos、Zookeeper，扩展读数据源(ReadableDataSource)。

:::
[[toc]]
***
&#8195;&#8195;推送的原始模式，我们在讲解[Sentinel核心原理](Sentinel核心原理.md)时提到过，这里不再赘述，下面重点分析Pull模式和Push模式。

## Pull模式

![pull模式](/images/microservice/sentinel/pull模式.png)

&#8195;&#8195;如上图所示是pull模式的流程，即sentinel客户端启动后，无论是通过DashBoard或者是本地的配置进行加载后，会将规则配置存储到本地文件或者其他数据源。

&#8195;&#8195;引入Sentinel的数据源扩展包后，会有一个FileWritableDataSource，在CommandHandler中初始化和调用，将内存中的流控规则持久化到本地文件。

&#8195;&#8195;FileWritableDataSource实现了**WritableDataSource，这个接口负责实现规则的持久化，是一个可以定制的扩展点**。

&#8195;&#8195;在扩展包下提供了FileRefreshableDataSource，负责读本地文件数据源，间隔时间是3s。

&#8195;&#8195;通过上面的流程可以看到，pull模式存在一定的更新不及时的情况，而且生产环境中我们也很少用到Sentinel DashBoard，因此这种方式在生产环境中也不常用。

## Push模式

![Push模式](/images/microservice/sentinel/Push模式.png)

&#8195;&#8195;如图所示，Push借助配置中心的监听回调功能，相当于监听特定配置文件完成配置的更新，这是生产环境中最常用的方式。


&#8195;&#8195;**Push模式是实现了读数据源ReadableDataSource**，其中实现了很多的配置中心的实现，如Nacos、Apollo、zk、redis等。Nacos的实现中是利用Nacos配置中心监听器，当配置发生变更时，就会监听到变更更新本地内存配置文件。

&#8195;&#8195;不管是原始模式、pull模式还是push模式，其核心都是实现WritableDataSource和ReadableDataSource，利用不同数据源的读写或者监听机制，将配置信息转换为FlowRule或者其他Rule实例，保存在内存中。

## Sentinel集成Nacos配置中心
&#8195;&#8195;引入数据源依赖：
```xml
<dependency>
      <groupId>com.alibaba.csp</groupId>
      <artifactId>sentinel-datasource-nacos</artifactId>
</dependency>
```

```yml
spring:
    sentinel:
      transport:
        dashboard: 127.0.0.1:7777
        port: 8719
      datasource:
        ds1: # 数据源名称必须唯一，可以随便取
          nacos:
            server-addr: 127.0.0.1:8848
            data-id: platform-sentinel
            group-id: PLATFORM
            data-type: json
            rule-type: flow  # 不同的规则需要单独配置数据源，比如降级规则再配个ds2，指定规则类型为降级规则即可
```