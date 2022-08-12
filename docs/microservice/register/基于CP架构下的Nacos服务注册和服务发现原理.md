---
title: 基于CP架构下的Nacos服务注册和服务发现原理
prev:
  text: 基于AP架构下的Nacos服务注册和服务发现原理
  link: /microservice/register/基于AP架构下的Nacos服务注册和服务发现原理.md
next:
  text: 基于Nacos的注册中心扩展
  link: /microservice/register/基于Nacos的注册中心扩展.md
---
::: info
&#8195;&#8195;Nacos注册中心提供了很多关键的特性，如**服务发现和服务健康检测、动态配置服务、动态DNS、服务和元数据管理**。服务发现、服务注册和服务健康检测是作为注册中心最核心的功能。

&#8195;&#8195;除以上功能外，作为注册中心集群，也具备正常分布式集群的特性。

&#8195;&#8195;本文根据源码实现说明Nacos如何实现[CP架构](../../methodology/distribution/CAP定理和BASE理论.md)的注册中心。
:::
[[toc]]

***
# Raft和ZAB协议

Raft和ZAB协议都是Paxos的简化，主要包括两部分：

* Leader选举（半数节点投票同意）
* 集群写入数据同步（两阶段提交，半数以上节点写入成功）

***
参考
- Spring Cloud Alibaba 微服务原理与实战[谭峰(mic)]. 中国工信出版社,电子工业出版社