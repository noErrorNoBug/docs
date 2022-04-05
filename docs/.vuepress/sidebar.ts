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
        "标题占位.md",
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
        "标题占位.md",
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
        "标题占位.md",
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
        "标题占位.md", 
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
        "标题占位.md", 
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
        "标题占位.md", 
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
        "标题占位.md", 
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
        "标题占位.md", 
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
        "标题占位.md", 
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
        "标题占位.md", 
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
        "标题占位.md", 
      ],
    },
  ],



  /*
   * [方法论|系统设计]模块 侧边栏
   */
  "/methodology/": [
    /**
     * [设计模式]模块 侧边栏
     */
    {
      text: "设计模式",
      collapsable: false,
      prefix: "patterns/",
      children: [
        "标题占位.md", 
      ],
    },

    /**
     * [分布式理论]模块 侧边栏
     */
    {
      text: "分布式理论",
      collapsable: false,
      prefix: "distribution/",
      children: [
        "标题占位.md", 
      ],
    },
  ],


  /*
   * [微服务]模块 侧边栏
   */
  "/microservice/": [
    /**
     * [注册中心|配置中心]模块 侧边栏
     */
    {
      text: "注册中心|配置中心",
      collapsable: false,
      prefix: "register/",
      children: [
        "标题占位.md", 
      ],
    },

    /**
     * [负载均衡|RPC调用]模块 侧边栏
     */
    {
      text: "负载均衡|RPC调用",
      collapsable: false,
      prefix: "loadbalance/",
      children: [
        "标题占位.md", 
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
  ],
});
