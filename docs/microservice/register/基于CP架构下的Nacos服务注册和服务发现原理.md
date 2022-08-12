---
title: 基于CP架构下的Nacos服务注册和服务发现原理
prev:
  text: 基于AP架构下的Nacos服务注册和服务发现原理
  link: /microservice/register/基于AP架构下的Nacos服务注册和服务发现原理.md
next:
  text: 基于Nacos的配置中心实现
  link: /microservice/config/基于Nacos的配置中心实现.md
---
::: info
&#8195;&#8195;常见的AP架构就是Netflix项目的Eureka集群、Redis集群，Naocs常用的也是AP架构实现。
&#8195;&#8195;常用的CP架构有Zookeeper，其中Zookeeper是通过ZAB协议实现的CP架构。
&#8195;&#8195;Nacos也提供了CP架构的实现，Nacos的CP架构是基于Raft协议实现的。
:::
[[toc]]

***

## AP架构和CP架构对比
&#8195;&#8195;根据[CAP定理](../../methodology/distribution/CAP定理和BASE理论.md)，在分布式架构下，由于分区容错必须要满足，因此注册中心有两种实现，AP架构和CP架构，下图是两种架构的对比：

![AP架构和CP架构对比](/images/microservice/register/AP架构和CP架构对比.png)

&#8195;&#8195;上图可见，CP架构为了保证数据一致性，一般会有一个Leader，写数据只能写到Leader节点。当出现分区时，AP架构两个节点的数据会出现不一致(最终还是会一致)；CP架构不能连接Leader的节点则会出现不可用，重新出现选举状态。

&#8195;&#8195;使用Nacos做注册中心时，一个Client可以通过yml中配置ephemeral=false来设置此实例为持久化实例，此选项默认为true，即把服务注册为临时实例。临时实例会自动使用AP架构，存在内存中；而持久化实例会使用CP架构。

&#8195;&#8195;Nacos是可以同时实现AP架构或CP架构的。

## 写数据流程(一段提交)

&#8195;&#8195;Nacos有一个自己实现Raft协议的流程，实现类是RaftConsistencyServiceImpl，下面简单说一下这个类的流程：
1. 判断是否是Leader
2. 如果不是Leader，转发请求到Leader
3. 如果是Leader，调用raftStore的写数据方法，这个方法里是写文件(日志)，写到data目录的naming空间下。
4. 发布事件:数据变更。
5. onChange()监听事件，详见[AP架构刷新内存数据的逻辑](基于AP架构下的Nacos服务注册和服务发现原理.md)，这里是相同的调用。
6. 同步给其他节点。这一步实现通过**CountDownLaunch**，回调方法里进行countDownLaunch -1。

&#8195;&#8195;上述流程可以看到，Nacos的自己实现没有万千按照Raft协议进行实现，而是自己简化了。在Leader本地写入数据后并没有进行同步，而是直接写内存数据。最后再一步提交数据。

&#8195;&#8195;因此这个流程是有问题的，如果从节点没有写成功，主节点依旧是有数据的，是写成功的(不过CP架构不是很常用，影响不是很大)，新版本的Nacos使用jraft实现的，满足raft协议，不存在这个问题。

&#8195;&#8195;需要注意的是，Mysql是给配置中心用的，不是给CP架构用的，注册中心的CP架构使用的是写文件的方式。

## 附录：client端配置项说明

```yml
spring:
  application:
    name: pearl-test
  cloud:
    nacos:
      discovery:
        # 是否开启Nacos注册
        enabled: true
        # Nacos服务注册地址
        server-addr: localhost:8848
        # Nacos 认证用户
        username: nacos
        # Nacos 认证密码
        password: 123456
        # 配置命名空间ID
        namespace: ba42e722-81aa-48f1-9944-9dca57d5f396
        # 分组名称
        group: PEARL_GROUP
        # 连接Nacos Server指定的连接点
        #endpoint: localhost
        # 设置注册时本服务IP地址
        #ip: 127.0.0.1
        # nacos客户端向服务端发送心跳的时间间隔，单位s
        #heart-beat-interval: 5
        # 集群名称
        #cluster-name: DEFAULT
        # 心跳超时时间，单位s
        #heart-beat-timeout: 15
        # 是否注册服务，默认为true
        #register-enabled: true
        # 当要上阿里云时，阿里云上面的一个云账号名
        #access-key:
        # 当要上阿里云时，阿里云上面的一个云账号密码
        #secret-key:
        # nacos客户端日志名，默认naming.log:
        #log-name:
        # 服务元数据标签
        #metadata:
        # 服务超时时，多少秒后删除
        #ip-delete-timeout: 30
        # 负载均衡权重，默认1,取值范围 1 到 100，数值越大，权重越大
        #weight: 1
        # 监视延迟，从nacos服务器拉取新服务的持续时间,单位ms
        #watch-delay: 30000
        # 注册服务时的服务名,默认${spring.application.name}
        #service: pearl-service
        # 服务是否是https
        #secure: false
        # 注册时本服务的端口，无需设置，自动探测
        #port: 8088
        # 选择固定网卡
        #network-interface: eth0
        # 是否从本地缓存中，默认false
        #naming-load-cache-at-start: false
```

***
参考
- Spring Cloud Alibaba 微服务原理与实战[谭峰(mic)]. 中国工信出版社,电子工业出版社