module.exports = {
    /**
     * [Java]模块 侧边栏
     */
    '/java/': [
        /*
         * [面向对象|基础]模块 侧边栏
         */
        {
            text: '面向对象|基础',   // 必填，标题
            sidebarDepth: 2,    // 深度 2层，展示H0，H1，H2
            collapsible: false,  // 是否可折叠，有childre才可用
            children: [
                {
                    text: "面向对象编程",
                    link: '/java/basic/面向对象编程.md',
                },
                {
                    text: "思考-如何在开发中实践面向对象的思想",
                    link: '/java/basic/思考-如何在开发中实践面向对象的思想.md',
                },
                {
                    text: "思考-贫血模型还是充血模型",
                    link: '/java/basic/思考-贫血模型还是充血模型.md',
                },
                {
                    text: "Java基础知识",
                    link: '/java/basic/Java基础知识.md',
                },
                {
                    text: "Java中的String",
                    link: '/java/basic/Java中的String.md',
                },
                {
                    text: "Java泛型机制",
                    link: '/java/basic/Java泛型机制.md',
                },
                {
                    text: "Java注解机制",
                    link: '/java/basic/Java注解机制.md',
                },
                {
                    text: "Java异常机制",
                    link: '/java/basic/Java异常机制.md',
                },
                {
                    text: "Java反射机制",
                    link: '/java/basic/Java反射机制.md',
                },
                {
                    text: "JavaSPI机制",
                    link: '/java/basic/JavaSPI机制.md',
                },
            ],
        },
        /*
         * [JAVA 集合框架]模块 侧边栏
         */
        {
            text: 'JAVA 集合框架',   // 必填，标题
            sidebarDepth: 2,    // 深度 2层，展示H0，H1，H2
            collapsible: false,  // 是否可折叠，有childre才可用
            children: [
                {
                    text: "内存模型",
                    link: '/java/concurrence/内存模型.md',
                },
            ],
        },
        /*
         * [并发框架]模块 侧边栏
         */
        {
            text: '并发框架',   // 必填，标题
            sidebarDepth: 2,    // 深度 2层，展示H0，H1，H2
            collapsible: false,  // 是否可折叠，有childre才可用
            children: [
                {
                    text: "内存模型",
                    link: '/java/concurrence/内存模型.md',
                },
                {
                    text: "synchronized关键字",
                    link: '/java/concurrence/synchronized关键字.md',
                },
                {
                    text: "ThreadLocal",
                    link: '/java/concurrence/ThreadLocal.md',
                },
                {
                    text: "线程池",
                    link: '/java/concurrence/线程池.md',
                },
                {
                    text: "CAS和原子类",
                    link: '/java/concurrence/CAS和原子类.md',
                },
                {
                    text: "锁",
                    link: '/java/concurrence/锁.md',
                },
                {
                    text: "final和不变性",
                    link: '/java/concurrence/final和不变性',
                },
                {
                    text: "并发流程控制",
                    link: '/java/concurrence/并发流程控制.md',
                },
                {
                    text: "AQS原理",
                    link: '/java/concurrence/AQS原理.md',
                },
                {
                    text: "Future和Callable",
                    link: '/java/concurrence/Future和Callable.md',
                },
            ],
        },
        /*
         * [JAVA IO框架]模块 侧边栏
         */
        {
            text: 'JAVA IO框架',   // 必填，标题
            sidebarDepth: 2,    // 深度 2层，展示H0，H1，H2
            collapsible: false,  // 是否可折叠，有childre才可用
            children: [
                {
                    text: "内存模型",
                    link: '/java/concurrence/内存模型.md',
                },
            ],
        },
        /**
         * [JVM原理]模块 侧边栏
         */
        {
            text: 'JVM原理',
            sidebarDepth: 2,
            collapsible: false,
            children: [
                /**
                 * 类加载机制子模块
                 * 导航栏类加载机制指向此处，内容分开讲，对象生命周期看看是否需要拿过来
                 */
                {
                    text: "类加载机制",
                    link: '/java/jvm/类加载机制.md',
                },
                {
                    text: "类字节码",
                    link: '/java/jvm/类加载机制.md',
                },
                /**
                 * JVM内存知识子模块
                 * JVM内存知识指向此处，将内容拆分分开讲
                 */
                {
                    text: "内存模型",
                    link: '/java/jvm/内存模型.md',
                },
                {
                    text: "对象生命周期",
                    link: '/java/jvm/对象生命周期.md',
                },
                /**
                 * 垃圾回收子模块
                 * 垃圾回收导航栏指向此处，将垃圾回收拆开，垃圾回收算法挪到算法模块
                 */
                {
                    text: "垃圾回收",
                    link: '/java/jvm/垃圾回收.md',
                },
                /**
                 * JVM调优子模块
                 * JVM调优导航栏指向此处，将调优拆分开讲
                 */
                {
                    text: "调优实战",
                    link: '/java/jvm/调优实战.md',
                },
                /**
                 * JVM线上调试排查
                 * JVM线上调试排查指向此处，并且需要拆开讲
                 */
                {
                    text: "监控工具",
                    link: '/java/jvm/监控工具.md',
                },
            ],
        },
        /**
         * JAVA版本特性
         */
        {
            text: 'JAVA 版本特性',
            sidebarDepth: 2,
            collapsible: false,
            children: [
                /**
                 * Java8特性子模块
                 * Java8特性子模块导航栏指向此处
                 */
                {
                    text: "java8特性知识体系",
                    link: '/java/version/java8/java8特性知识体系.md',
                },
                {
                    text: "函数式编程",
                    link: '/java/version/java8/函数式编程.md',
                },
                {
                    text: "Optional类",
                    link: '/java/version/java8/Optional类.md',
                },
                {
                    text: "默认方法",
                    link: '/java/version/java8/默认方法.md',
                },
                {
                    text: "注解特性",
                    link: '/java/version/java8/注解特性.md',
                },
                {
                    text: "类型推断优化",
                    link: '/java/version/java8/类型推断优化.md',
                },
                {
                    text: "精简JRE",
                    link: '/java/version/java8/精简JRE.md',
                },
                {
                    text: "JVM移除元空间",
                    link: '/java/version/java8/JVM移除元空间.md',
                },
                {
                    text: "StampedLock",
                    link: '/java/version/java8/StampedLock.md',
                },
                {
                    text: "LocalDate和LocalDateTime",
                    link: '/java/version/java8/LocalDate和LocalDateTime.md',
                },
                {
                    text: "其他更新",
                    link: '/java/version/java8/其他更新.md',
                },
                /**
                 * java8升java11特性
                 * java8升java11特性导航栏指向此处
                 */
                {
                    text: "java9到java11特性知识体系",
                    link: '/java/version/java11/java9到java11特性知识体系.md',
                },
                {
                    text: "java9特性",
                    link: '/java/version/java11/java9特性.md',
                },
                {
                    text: "java10特性",
                    link: '/java/version/java11/java10特性.md',
                },
                {
                    text: "java11特性",
                    link: '/java/version/java11/java11特性.md',
                },
                /**
                 * java11升java17特性
                 * java11升java17特性导航栏指向此处
                 */
                {
                    text: "java12到java17特性知识体系",
                    link: '/java/version/java17/java12到java17特性知识体系.md',
                },
                {
                    text: "java12特性",
                    link: '/java/version/java17/java12特性.md',
                },
                {
                    text: "java13特性",
                    link: '/java/version/java17/java13特性.md',
                },
                {
                    text: "java14特性",
                    link: '/java/version/java17/java14特性.md',
                },
                {
                    text: "java15特性",
                    link: '/java/version/java17/java15特性.md',
                },
                {
                    text: "java16特性",
                    link: '/java/version/java17/java16特性.md',
                },
                {
                    text: "java17特性",
                    link: '/java/version/java17/java17特性.md',
                },
            ],
        },
    ],

    /*
     * [数据库]模块 侧边栏
     */
    '/db/': [
        /**
         * [mysql]模块 侧边栏
         */
        {
            text: 'SQL数据库 Mysql',
            sidebarDepth: 2,
            collapsible: false,
            children: [
                {
                    text: "索引原理",
                    link: '/db/mysql/索引原理.md',
                },
                {
                    text: "sql执行过程",
                    link: '/db/mysql/sql执行过程.md',
                },
                {
                    text: "索引分析和优化",
                    link: '/db/mysql/索引分析和优化.md',
                },
                {
                    text: "隔离级别和锁机制",
                    link: '/db/mysql/隔离级别和锁机制.md',
                },
                {
                    text: "MVCC和BufferPool缓存机制",
                    link: '/db/mysql/MVCC和BufferPool缓存机制.md',
                },
                {
                    text: "主从架构和分库分表",
                    link: '/db/mysql/主从架构和分库分表.md',
                },
            ],
        },
        /**
         * [Redis]模块 侧边栏
         */
        {
            text: 'Nosql数据库 Redis',
            sidebarDepth: 2,
            collapsible: false,
            children: [
                {
                    text: "数据类型和命令",
                    link: '/db/redis/数据类型和命令.md',
                },
                {
                    text: "底层数据结构实现",
                    link: '/db/redis/底层数据结构实现.md',
                },
                {
                    text: "高性能IO模型",
                    link: '/db/redis/高性能IO模型.md',
                },
                {
                    text: "数据持久化原理",
                    link: '/db/redis/数据持久化原理.md',
                },
                {
                    text: "主从模式和数据同步原理",
                    link: '/db/redis/主从模式和数据同步原理.md',
                },
                {
                    text: "哨兵集群原理",
                    link: '/db/redis/哨兵集群原理.md',
                },
                {
                    text: "分片集群原理",
                    link: '/db/redis/分片集群原理.md',
                },
                {
                    text: "单线程阻塞点及优化方案",
                    link: '/db/redis/单线程阻塞点及优化方案.md',
                },
                {
                    text: "基于CPU结构优化",
                    link: '/db/redis/基于CPU结构优化.md',
                },
                {
                    text: "Redis变慢优化思路",
                    link: '/db/redis/Redis变慢优化思路.md',
                },
                {
                    text: "内存碎片优化",
                    link: '/db/redis/内存碎片优化.md',
                },
                {
                    text: "缓冲区优化",
                    link: '/db/redis/缓冲区优化.md',
                },
                {
                    text: "旁路缓存应用",
                    link: '/db/redis/旁路缓存应用.md',
                },
                {
                    text: "淘汰策略选择",
                    link: '/db/redis/淘汰策略选择.md',
                },
                {
                    text: "异常情况处理",
                    link: '/db/redis/异常情况处理.md',
                },
                {
                    text: "分布式锁实现",
                    link: '/db/redis/分布式锁实现.md',
                },
                {
                    text: "秒杀场景应用",
                    link: '/db/redis/秒杀场景应用.md',
                },
                {
                    text: "Lua脚本和集成框架",
                    link: '/db/redis/Lua脚本和集成框架.md',
                },
            ],
        },
        /**
         * [ElasticSearch]模块 侧边栏
         */
        {
            text: 'Nosql数据库 ElasticSearch',
            sidebarDepth: 2,
            collapsible: false,
            children: [
                {
                    text: "高可用集群搭建",
                    link: '/db/es/高可用集群搭建.md',
                },
                {
                    text: "基本操作和命令",
                    link: '/db/es/基本操作和命令.md',
                },
                {
                    text: "复杂搜索策略",
                    link: '/db/es/复杂搜索策略.md',
                },
                {
                    text: "聚合匹配",
                    link: '/db/es/聚合匹配.md',
                },
                {
                    text: "数据建模",
                    link: '/db/es/数据建模.md',
                },
                {
                    text: "核心原理",
                    link: '/db/es/核心原理.md',
                },
                {
                    text: "优化思路",
                    link: '/db/es/优化思路.md',
                },
                {
                    text: "面试题",
                    link: '/db/es/面试题.md',
                },
            ],
        },
    ],

    /*
     * [WEB容器]模块 侧边栏
     */
    '/container/': [
        /**
         * [Nginx容器]模块 侧边栏
         */
        {
            text: 'Nginx容器',
            sidebarDepth: 2,
            collapsible: false,
            children: [
                {
                    text: "原理及配置",
                    link: '/container/nginx/原理及配置.md',
                },
                {
                    text: "性能调优",
                    link: '/container/nginx/性能调优.md',
                },
                {
                    text: "Nginx-Kafka插件",
                    link: '/container/nginx/Nginx-Kafka插件.md',
                },
            ],
        },

        /**
         * [Tomcat容器]模块 侧边栏
         */
        {
            text: 'Tomcat容器',
            sidebarDepth: 2,
            collapsible: false,
            children: [
                {
                    text: "Web请求过程",
                    link: '/container/tomcat/Web请求过程.md',
                },
                {
                    text: "架构原理和启停原理",
                    link: '/container/tomcat/架构原理和启停原理.md',
                },
                {
                    text: "网络IO模型和Connector原理",
                    link: '/container/tomcat/网络IO模型和Connector原理.md',
                },
                {
                    text: "热加载和热部署",
                    link: '/container/tomcat/热加载和热部署.md',
                },
                {
                    text: "加载Spring容器",
                    link: '/container/tomcat/加载Spring容器.md',
                },
            ],
        },

        /**
         * [Netty容器]模块 侧边栏
         */
        {
            text: 'Netty容器',
            sidebarDepth: 2,
            collapsible: false,
            children: [
                {
                    text: "NIO和Epoll",
                    link: '/container/netty/NIO和Epoll.md',
                },
                {
                    text: "Netty核心原理",
                    link: '/container/netty/Netty核心原理.md',
                },
                {
                    text: "线程模型源码",
                    link: '/container/netty/线程模型源码.md',
                },
                {
                    text: "数据交换源码",
                    link: '/container/netty/数据交换源码.md',
                },
            ],
        },
    ],

    /*
     * [消息队列]模块 侧边栏
     */
    '/mq/': [
        /**
         * [Kafka]模块 侧边栏
         */
        {
            text: 'Kafka',
            sidebarDepth: 2,
            collapsible: false,
            children: [
                {
                    text: "Kafka原理之Broker机制",
                    link: '/mq/kafka/Kafka原理之Broker机制.md',
                },
                {
                    text: "Kafka原理之Producer机制",
                    link: '/mq/kafka/Kafka原理之Producer机制.md',
                },
                {
                    text: "Kafka原理之Consumer机制",
                    link: '/mq/kafka/Kafka原理之Consumer机制.md',
                },
                {
                    text: "常见问题及解决方案",
                    link: '/mq/kafka/常见问题及解决方案.md',
                },
                {
                    text: "Kafka调优思路",
                    link: '/mq/kafka/Kafka调优思路.md',
                },
                {
                    text: "如何有效的对Kafka进行资源规划",
                    link: '/mq/kafka/如何有效的对Kafka进行资源规划.md',
                },
                {
                    text: "Kafka面试题",
                    link: '/mq/kafka/Kafka面试题.md',
                },
            ],
        },

        /**
         * [RabbitMQ]模块 侧边栏
         */
        {
            text: 'RabbitMQ',
            sidebarDepth: 2,
            collapsible: false,
            children: [
                {
                    text: "消息模型",
                    link: '/mq/rabbitmq/消息模型.md',
                },
                {
                    text: "高可用集群搭建",
                    link: '/mq/rabbitmq/高可用集群搭建.md',
                },
                {
                    text: "集群原理",
                    link: '/mq/rabbitmq/集群原理.md',
                },
                {
                    text: "高级特性",
                    link: '/mq/rabbitmq/高级特性.md',
                },
                {
                    text: "解决方案总结",
                    link: '/mq/rabbitmq/解决方案总结.md',
                },
                {
                    text: "与SpringBoot集成",
                    link: '/mq/rabbitmq/与SpringBoot集成.md',
                },
            ],
        },
    ],



    /*
     * [方法论|系统设计]模块 侧边栏
     */
    '/methodology/': [
        /**
         * [设计模式]模块 侧边栏
         */
        {
            text: '设计模式',
            sidebarDepth: 2,
            collapsible: false,
            children: [
                {
                    text: "单例模式",
                    link: '/methodology/patterns/单例模式.md',
                },
                {
                    text: "工厂模式",
                    link: '/methodology/patterns/工厂模式.md',
                },
                {
                    text: "建造者模式",
                    link: '/methodology/patterns/建造者模式.md',
                },
                {
                    text: "代理模式",
                    link: '/methodology/patterns/代理模式.md',
                },
                {
                    text: "桥接模式",
                    link: '/methodology/patterns/桥接模式.md',
                },
                {
                    text: "装饰器模式",
                    link: '/methodology/patterns/装饰器模式.md',
                },
                {
                    text: "适配器模式",
                    link: '/methodology/patterns/适配器模式.md',
                },
                {
                    text: "四种模式区别",
                    link: '/methodology/patterns/四种模式区别.md',
                },
                {
                    text: "门面模式",
                    link: '/methodology/patterns/门面模式.md',
                },
                {
                    text: "观察者模式",
                    link: '/methodology/patterns/观察者模式.md',
                },
                {
                    text: "模板模式",
                    link: '/methodology/patterns/模板模式.md',
                },
                {
                    text: "策略模式",
                    link: '/methodology/patterns/策略模式.md',
                },
                {
                    text: "原型模式",
                    link: '/methodology/patterns/原型模式.md',
                },
            ],
        },

        /**
         * [分布式理论]模块 侧边栏
         */
        {
            text: '分布式理论',
            sidebarDepth: 2,
            collapsible: false,
            children: [
                {
                    text: "CAP定理和BASE理论",
                    link: '/methodology/distribution/CAP定理和BASE理论.md',
                },
                {
                    text: "X_OPEN事务模型",
                    link: '/methodology/distribution/X_OPEN事务模型.md',
                },
                {
                    text: "2PC事务模型",
                    link: '/methodology/distribution/2PC事务模型.md',
                },
                {
                    text: "3PC事务模型",
                    link: '/methodology/distribution/3PC事务模型.md',
                },
                {
                    text: "TCC事务补偿方案",
                    link: '/methodology/distribution/TCC事务补偿方案.md',
                },
                {
                    text: "最大努力通知型事务方案",
                    link: '/methodology/distribution/最大努力通知型事务方案.md',
                },
            ],
        },
    ],


    /*
     * [微服务]模块 侧边栏
     */
    '/microservice/': [
        /**
         * [注册中心|配置中心]模块 侧边栏
         */
        {
            text: '注册中心|配置中心',
            sidebarDepth: 2,
            collapsible: false,
            children: [
                {
                    text: "基于AP架构下的Nacos服务注册和服务发现原理",
                    link: '/microservice/register/基于AP架构下的Nacos服务注册和服务发现原理.md',
                },
                {
                    text: "基于CP架构下的Nacos服务注册和服务发现原理",
                    link: '/microservice/register/基于CP架构下的Nacos服务注册和服务发现原理.md',
                },
                {
                    text: "基于Nacos的配置中心实现原理",
                    link: '/microservice/register/基于Nacos的配置中心实现原理.md',
                },
                {
                    text: "基于Nacos的注册中心扩展",
                    link: '/microservice/register/基于Nacos的注册中心扩展.md',
                },
            ],
        },

        /**
         * [负载均衡|RPC调用]模块 侧边栏
         */
        {
            text: '负载均衡|RPC调用',
            sidebarDepth: 2,
            collapsible: false,
            children: [
                {
                    text: "LoadBalancer核心原理",
                    link: '/microservice/loadbalance/LoadBalancer核心原理.md',
                },
                {
                    text: "LoadBalancer功能扩展",
                    link: '/microservice/loadbalance/LoadBalancer功能扩展.md',
                },
                {
                    text: "LoadBalancer负载均衡策略",
                    link: '/microservice/loadbalance/LoadBalancer负载均衡策略.md',
                },
                {
                    text: "OpenFeign架构原理",
                    link: '/microservice/loadbalance/OpenFeign架构原理.md',
                },
                {
                    text: "OpenFeign生命周期",
                    link: '/microservice/loadbalance/OpenFeign生命周期.md',
                },
                {
                    text: "OpenFeign核心组件源码",
                    link: '/microservice/loadbalance/OpenFeign核心组件源码.md',
                },
            ],
        },
    ],



    /*
     * [工具|部署]模块 侧边栏
     */
    '/tools/': [
        /**
         * [Linux|Shell脚本]模块 侧边栏
         */
        {
            text: 'Linux|Shell脚本',
            sidebarDepth: 2,
            collapsible: false,
            children: [
                {
                    text: "Shell脚本",
                    link: '/tools/linux/Shell脚本.md',
                },
                {
                    text: "文本操作命令",
                    link: '/tools/linux/文本操作命令.md',
                },
                {
                    text: "系统操作命令",
                    link: '/tools/linux/系统操作命令.md',
                },
                {
                    text: "系统管理命令",
                    link: '/tools/linux/系统管理命令.md',
                },
            ],
        },
    ],
}