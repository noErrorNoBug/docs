---
title: title
prev:
  text: 回到首页
  link: /README.md
next:
  text: 回到首页
  link: /README.md
---
::: info
文章介绍
:::
[[toc]]

***
# Client配置项

```java
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



