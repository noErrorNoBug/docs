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
文章介绍
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