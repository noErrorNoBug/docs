import { defineSidebarConfig } from "vuepress-theme-hope";

export default defineSidebarConfig({
  /**
   * [Java]模块 侧边栏
   */
  "/java/": [
    /*
     * [面向对象|基础]模块 侧边栏
     */
    {
      text: "面向对象|基础",   // 必填，标题
      collapsable: false,  // 是否可折叠，有childre才可用
      prefix: "basic/",
      children: [
        "面向对象编程.md",
        "思考-如何在开发中实践面向对象的思想.md",
        "思考-贫血模型还是充血模型.md",
        "Java基础知识.md",
        "Java中的String.md",
        "Java中的空值处理.md",
        "Java泛型机制.md",
        "Java注解机制.md",
        "Java异常机制.md",
        "Java反射机制.md",
        "JavaSPI机制.md",
      ],
    },
    /*
     * [JAVA 集合框架]模块 侧边栏
     */
    {
      text: "JAVA 集合框架",   
      collapsable: false,  
      prefix: "collection/",
      children: [
        "todo.md",
      ],
    },
    /*
     * [并发框架]模块 侧边栏
     */
    {
      text: "并发框架",   
      collapsable: false,  
      prefix: "concurrence/",
      children: [
        "内存模型.md",
        "并发流程控制.md",
        "CAS和原子类.md",
        "synchronized关键字.md",
        "锁.md",
        "线程池.md",
        "AQS原理.md",
        "final和不变性.md",
        "Future和Callable.md",
        "ThreadLocal.md",
      ],
    },
    /*
     * [JAVA IO框架]模块 侧边栏
     */
    {
      text: "JAVA IO框架",   
      collapsable: false,
      prefix: "io/",
      children: [
        "todo.md",
      ],
    },
    /**
     * [JVM原理]模块 侧边栏
     */
    {
      text: "JVM原理.md",
      collapsable: false,
      prefix: "jvm/",
      children: [
        "类加载机制.md", /** 导航栏类加载机制指向此处，内容分开讲，对象生命周期看看是否需要拿过来 */
        "类字节码.md",
        "内存模型.md", /** JVM内存知识指向此处，将内容拆分分开讲 */
        "对象生命周期.md",
        "垃圾回收.md", /** 垃圾回收导航栏指向此处，将垃圾回收拆开，垃圾回收算法挪到算法模块 */
        "调优实战.md", /** JVM调优导航栏指向此处，将调优拆分开讲 */
        "监控工具.md", /** JVM线上调试排查指向此处，并且需要拆开讲 */
      ],
    },
    /**
     * JAVA8版本特性
     */
    {
      text: "JAVA8版本特性.md",
      collapsable: false,
      prefix: "version/java8/",
      children: [
        "java8特性知识体系.md", /** Java8特性子模块导航栏指向此处 */
        "函数式编程.md",
        "Optional类.md", 
        "默认方法.md",
        "注解特性.md", 
        "类型推断优化.md", 
        "精简JRE.md", 
        "JVM移除元空间.md", 
        "StampedLock.md", 
        "LocalDate和LocalDateTime.md",
        "其他更新.md", 

      ],
    },
    /**
     * JAVA11版本特性
     */
     {
      text: "JAVA11版本特性",
      collapsable: false,
      prefix: "version/java11/",
      children: [
        "java9到java11特性知识体系.md", /** java8升java11特性导航栏指向此处 */
        "java9特性.md",
        "java10特性.md", 
        "java11特性.md",
      ],
    },
    /**
     * JAVA17版本特性
     */
     {
      text: "JAVA17版本特性",
      collapsable: false,
      prefix: "version/java17/",
      children: [
        "java12到java17特性知识体系.md", /** java11升java17特性导航栏指向此处 */
        "java12特性.md",
        "java13特性.md", 
        "java14特性.md",
        "java15特性.md",
        "java16特性.md",
        "java17特性.md",
      ],
    },
  ],

  /*
   * [数据库]模块 侧边栏
   */
  "/db/": [
    /**
     * [mysql]模块 侧边栏
     */
    {
      text: "SQL数据库 Mysql",
      collapsable: false,
      prefix: "mysql/",
      children: [
        "sql执行过程.md", 
        "索引原理.md", 
        "索引分析和优化.md", 
        "隔离级别和锁机制.md", 
        "MVCC和BufferPool缓存机制.md", 
        "主从架构和分库分表.md", 
      ],
    },
    /**
     * [Redis]模块 侧边栏
     */
    {
      text: "Nosql数据库 Redis",
      collapsable: false,
      prefix: "redis/",
      children: [
        "数据类型和命令.md", 
        "底层数据结构实现.md", 
        "高性能IO模型.md", 
        "数据持久化原理.md", 
        "主从模式和数据同步原理.md", 
        "哨兵集群原理.md", 
        "分片集群原理.md", 
        "单线程阻塞点及优化方案.md", 
        "基于CPU结构优化.md", 
        "Redis变慢优化思路.md", 
        "内存碎片优化.md", 
        "缓冲区优化.md", 
        "旁路缓存应用.md", 
        "淘汰策略选择.md", 
        "异常情况处理.md", 
        "分布式锁实现.md", 
        "秒杀场景应用.md", 
        "Lua脚本和集成框架.md", 
      ],
    },
    /**
     * [ElasticSearch]模块 侧边栏
     */
    {
      text: "Nosql数据库 ElasticSearch",
      collapsable: false,
      prefix: "es/",
      children: [
        "基本操作和命令.md", 
        "复杂搜索策略.md", 
        "聚合匹配.md", 
        "数据建模.md", 
        "核心原理.md", 
        "优化思路.md", 
        "ElasticSeach集群架构方案.md", 
        "集群监控工具ElasticView.md", 
        "Kinaba部署安装.md", 
        "面试题.md", 
      ],
    },
  ],

  /*
   * [WEB容器]模块 侧边栏
   */
  "/container/": [
    /**
     * [Nginx容器]模块 侧边栏
     */
    {
      text: "Nginx容器",
      collapsable: false,
      prefix: "nginx/",
      children: [
        "原理及配置.md", 
        "性能调优.md", 
      ],
    },

    /**
     * [Tomcat容器]模块 侧边栏
     */
    {
      text: "Tomcat容器",
      collapsable: false,
      prefix: "tomcat/",
      children: [
        "Web请求过程.md", 
        "架构原理和启停原理.md", 
        "热加载和热部署.md", 
        "网络IO模型和Connector原理.md", 
      ],
    },

    /**
     * [Netty容器]模块 侧边栏
     */
    {
      text: "Netty容器",
      collapsable: false,
      prefix: "netty/",
      children: [
        "NIO和Epoll.md", 
        "Netty核心原理.md", 
        "线程模型源码.md", 
        "数据交换源码.md", 
      ],
    },
  ],

  /*
   * [消息队列]模块 侧边栏
   */
  "/mq/": [
    /**
     * [Kafka]模块 侧边栏
     */
    {
      text: "Kafka",
      collapsable: false,
      prefix: "kafka/",
      children: [
        "Broker原理.md", 
        "Producer原理.md", 
        "Consumer原理.md", 
        "常见问题及解决方案.md", 
        "Kafka调优思路.md", 
        "如何有效的对Kafka进行资源规划.md", 
        "Kafka面试题.md", 
      ],
    },

    /**
     * [RabbitMQ]模块 侧边栏
     */
    {
      text: "RabbitMQ",
      collapsable: false,
      prefix: "rabbitmq/",
      children: [
        "高可用集群搭建.md", 
        "集群原理.md", 
        "消息模型.md", 
        "高级特性.md", 
        "与SpringBoot集成.md", 
        "解决方案总结.md", 
      ],
    },

    /**
     * [RocketMQ]模块 侧边栏
     */
     {
      text: "RocketMQ",
      collapsable: false,
      prefix: "rocketmq/",
      children: [
        "todo.md", 
      ],
    },
  ],


  /*
   * [微服务]模块 侧边栏
   */
  "/microservice/": [
    /**
     * [LoadBalancer:负载均衡]模块 侧边栏
     */
     {
      text: "LoadBalance:负载均衡",
      collapsable: false,
      prefix: "loadbalance/",
      children: [
        "LoadBalancer核心原理.md",
        "LoadBalancer负载均衡策略.md", 
        "LoadBalancer功能扩展.md", 
      ],
    },

    /**
     * [OpenFeign:函数式调用]模块 侧边栏
     */
     {
      text: "OpenFeign:函数式调用",
      collapsable: false,
      prefix: "feign/",
      children: [
        "OpenFeign架构原理.md",
        "OpenFeign生命周期.md", 
        "OpenFeign核心组件源码.md", 
        "OpenFeign扩展配置.md", 
      ],
    },

    /**
     * [Gateway:高可用网关API]模块 侧边栏
     */
     {
      text: "Gateway:高可用网关API",
      collapsable: false,
      prefix: "gateway/",
      children: [
        "Gateway核心原理.md",
        "Gateway集成Nacos实现负载均衡和动态配置.md", 
        "Gateway集成Sentinel实现网关限流.md", 
        "Gateway集成Swagger3实现统一接口文档.md", 
        "Gateway集成监控系统.md", 
        "Gateway源码解析.md", 
      ],
    },

    /**
     * [Security:认证和授权]模块 侧边栏
     */
     {
      text: "Security:认证和授权",
      collapsable: false,
      prefix: "auth/",
      children: [
        "SpringSecurity核心原理.md",
        "Oauth2协议详解.md", 
        "SpringSecurityOauth2核心原理.md", 
        "JWT核心原理.md", 
        "SpringSecurity实现OOS.md", 
      ],
    },

    /**
     * [Skywalking:链路追踪]模块 侧边栏
     */
     {
      text: "Skywalking:链路追踪",
      collapsable: false,
      prefix: "skywalking/",
      children: [
        "todo.md",
      ],
    },

    /**
     * [SpringCloud扩展点]模块 侧边栏
     */
     {
      text: "SpringCloud扩展点",
      collapsable: false,
      prefix: "extends/",
      children: [
        "todo.md",
      ],
    },

    /**
     * [Nacos:注册中心]模块 侧边栏
     */
     {
      text: "Nacos:注册中心",
      collapsable: false,
      prefix: "register/",
      children: [
        "基于AP架构下的Nacos服务注册和服务发现原理.md",
        "基于CP架构下的Nacos服务注册和服务发现原理.md", 
      ],
    },

    /**
     * [Nacos:配置中心]模块 侧边栏
     */
     {
      text: "Nacos:配置中心",
      collapsable: false,
      prefix: "config/",
      children: [
        "基于Nacos的配置中心实现.md",
        "Nacos配置中心源码解析.md", 
      ],
    },

    /**
     * [Sentinel:服务限流和降级]模块 侧边栏
     */
     {
      text: "Sentinel:服务限流和降级",
      collapsable: false,
      prefix: "sentinel/",
      children: [
        "todo.md",
      ],
    },

    /**
     * [Seata:分布式事务]模块 侧边栏
     */
     {
      text: "Seata:分布式事务",
      collapsable: false,
      prefix: "seata/",
      children: [
        "todo.md",
      ],
    },
  ],

  /*
   * [设计模式]模块 侧边栏
   */
  "/patterns/": [
    /**
     * [创建型]模块 侧边栏
     */
    {
      text: "创建型",
      collapsable: false,
      prefix: "build/",
      children: [
        "单例模式.md", 
        "工厂模式.md", 
        "建造者模式.md", 
      ],
    },

    /**
     * [结构型]模块 侧边栏
     */
     {
      text: "结构型",
      collapsable: false,
      prefix: "construct/",
      children: [
        "代理模式.md", 
        "桥接模式.md", 
        "装饰器模式.md", 
        "适配器模式.md", 
        "思考-代理模式、装饰器模式、适配器模式、桥接模式的异同.md", 
      ],
    },

    /**
     * [行为型]模块 侧边栏
     */
     {
      text: "行为型",
      collapsable: false,
      prefix: "action/",
      children: [
        "门面模式.md", 
        "观察者模式.md", 
        "模板模式.md", 
        "策略模式.md", 
        "原型模式.md", 
      ],
    },

  ],

  /*
   * [方法论|系统设计]模块 侧边栏
   */
  "/methodology/": [
    /**
     * [分布式理论]模块 侧边栏
     */
    {
      text: "分布式理论",
      collapsable: false,
      prefix: "distribution/",
      children: [
        "CAP定理和BASE理论.md", 
        "ZAB协议.md", 
        "Raft协议.md", 
      ],
    },

    /**
     * [分布式事务理论]模块 侧边栏
     */
     {
      text: "分布式事务理论",
      collapsable: false,
      prefix: "transaction/",
      children: [
        "X_OPEN事务模型.md", 
        "2PC事务模型.md", 
        "3PC事务模型.md", 
        "TCC事务补偿方案.md", 
        "基于可靠消息的最终一致性方案.md", 
        "最大努力通知型事务方案.md", 
      ],
    },
  ],

  /*
   * [工具|部署]模块 侧边栏
   */
  "/tools/": [
    /**
     * [Linux|Shell脚本]模块 侧边栏
     */
    {
      text: "Linux|Shell脚本",
      collapsable: false,
      prefix: "linux/",
      children: [
        "Shell脚本.md",
        "文本操作命令.md",
        "系统操作命令.md",
        "系统管理命令.md",
      ],
    },

    /**
     * [网络协议]模块 侧边栏
     */
     {
      text: "网络协议",
      collapsable: false,
      prefix: "network/",
      children: [
        "消息格式及语义.md",
        "WebSocket协议格式.md",
        "Http1_1连接过程.md",
        "HTTP协议升级WebSocket.md",
        "传递消息时的编码格式.md",
        "start-line起始行.md",
        "会话心跳保持.md",
        "Header-filed头部字段.md",
        "关闭会话.md",
        "Http包体传输.md",
        "Cookie和Session.md",
        "缓存.md",
        "其他语义.md",
      ],
    },
  ],
});
