module.exports = [
    // { text: '主页', link: '/' },


    /**
     * [Java]模块 导航栏
     */
    {
        text: 'Java',
        children: [
            /**
             * [Java基础] 导航栏
             */
            {
                text: '面向对象|基础', children: [
                    { text: '面向对象特性', link: '/guide.md' },         /** 指向面向对象起始文章 */
                    { text: 'Java基础知识', link: '/guide.md' },        /** 指向Java基础知识起始文章 */
                    { text: 'Java泛型机制', link: '/guide.md' },        /** 指向Java泛型机制起始文章 */
                    { text: 'Java注解机制', link: '/guide.md' },        /** 指向Java注解机制起始文章 */
                    { text: 'Java异常机制', link: '/guide.md' },        /** 指向Java异常机制起始文章 */
                    { text: 'Java反射机制', link: '/guide.md' },        /** 指向Java反射机制起始文章 */
                    { text: 'JavaSPI机制', link: '/guide.md' },        /** 指向JavaSPI机制起始文章 */
                ]
            },

            /**
             * [集合框架] 导航栏
             */
            {
                text: 'JAVA 集合框架', children: [
                    { text: 'Collection 集合', link: '/guide.md' },     /** 指向Collection 集合起始文章 */
                    { text: 'Map 集合', link: '/guide.md' },        /** 指向Map 集合起始文章 */
                    { text: '并发集合框架', link: '/guide.md' },        /** 指向并发集合框架起始文章 */
                ]
            },

            /**
             * [并发框架] 导航栏
             */
            {
                text: 'JAVA 并发框架', children: [
                    { text: '并发理论基础', link: '/guide.md' },    /** 指向并发理论基础起始文章 */
                    { text: '多线程基础', link: '/guide.md' },      /** 指向多线程基础起始文章 */
                    { text: '关键字详解', link: '/guide.md' },      /** 指向关键字详解起始文章 */
                    { text: '集合与并发集合', link: '/guide.md' },      /** 指向集合与并发集合起始文章 */
                    { text: '线程池', link: '/guide.md' },          /** 指向线程池起始文章 */
                    { text: 'CAS原理和原子类', link: '/guide.md' },     /** 指向CAS原理和原子类起始文章 */
                    { text: 'AQS原理和锁机制', link: '/guide.md' },     /** 指向AQS原理和锁机制起始文章 */
                    { text: '并发流程控制', link: '/guide.md' },        /** 指向并发流程控制起始文章 */
                    { text: 'Disruptor框架', link: '/guide.md' },       /** 指向Disruptor框架起始文章 */
                    { text: 'ThreadLocal', link: '/guide.md' },     /** 指向ThreadLocal起始文章 */
                ]
            },

            /**
             * [IO框架] 导航栏
             */
            {
                text: 'JAVA IO框架', children: [
                    { text: 'JAVA IO', link: '/guide.md' },   /** 指向IO的起始文章 */
                    { text: 'JAVA NIO', link: '/guide.md' },  /** 指向NIO、AIO、BIO的起始文章 */
                ]
            },

            /**
             * [JVM原理] 导航栏
             */
            {
                text: 'JVM原理', children: [
                    { text: 'JVM类加载机制', link: '/java/jvm/类加载机制.md' },     /** 指向类加载机制的起始文章 */
                    { text: 'JVM内存知识', link: '/java/jvm/类加载机制.md' },       /** 指向JVM内存知识的起始文章 */
                    { text: 'JVM垃圾回收原理', link: '/java/jvm/内存模型.md' },     /** 指向JVM垃圾回收原理的起始文章 */
                    { text: 'JVM调优思路', link: '/java/jvm/对象生命周期.md' },     /** 指向JVM调优思路的起始文章 */
                    { text: 'JVM线上调试排查', link: '/java/jvm/垃圾回收.md' },     /** 指向JVM线上调试排查的起始文章 */
                ]
            },

            /**
             * [版本特性] 导航栏
             */
            {
                text: 'JAVA 版本特性', children: [
                    { text: 'Java8特性', link: '/java/version/java8/java8特性知识体系.md' },                   /** 指向java8特性的起始文章 */
                    { text: 'java8升java11特性', link: '/java/version/java11/java9到java11特性知识体系.md' },   /** 指向java11特性的起始文章 */
                    { text: 'java11升java17特性', link: '/java/version/java17/java12到java17特性知识体系.md' }, /** 指向java17特性的起始文章 */
                ]
            },
        ]
    },

    /**
     * [Golang]模块 导航栏
     */
    // { text: 'Golang', link: '/test' },

    /**
     * [算法]模块 导航栏
     */
    // {
    //   text: '算法',
    //   children: [
    //     /**
    //      * [数据结构] 导航栏
    //      */
    //     {
    //       text: '常见数据结构', children: [
    //         { text: '链表', link: '/test' },
    //         { text: '队列', link: '/test' },
    //       ]
    //     },

    //     /**
    //      * [排序算法] 导航栏
    //      */
    //     {
    //       text: '排序算法', children: [
    //         { text: '冒泡排序', link: '/test' },
    //         { text: '快排', link: '/test' },
    //       ]
    //     },

    //     /**
    //      * [算法思想] 导航栏
    //      */
    //     {
    //       text: '算法思想', children: [
    //         { text: '分治算法', link: '/test' },
    //         { text: '动态规划', link: '/test' },
    //       ]
    //     },

    //     /**
    //      * [加密算法] 导航栏
    //      */
    //     {
    //       text: '加密算法', children: [
    //         { text: '加密算法1', link: '/test' },
    //         { text: '加密算法2', link: '/test' },
    //       ]
    //     },

    //     /**
    //      * [字符串匹配算法] 导航栏
    //      */
    //     {
    //       text: '字符串匹配算法', children: [
    //         { text: '字符串匹配算法1', link: '/test' },
    //         { text: '字符串匹配算法2', link: '/test' },
    //       ]
    //     },

    //     /**
    //      * [数据处理算法] 导航栏
    //      */
    //     {
    //       text: '数据处理算法', children: [
    //         { text: '数据处理算法1', link: '/test' },
    //         { text: '11-数据处理算法2', link: '/test' },
    //       ]
    //     },

    //     /**
    //      * [数据一致性算法] 导航栏
    //      */
    //     {
    //       text: '数据一致性算法', children: [
    //         { text: '数据一致性算法1', link: '/test' },
    //         { text: '数据一致性算法2', link: '/test' },
    //       ]
    //     },

    //     /**
    //      * [负载均衡算法] 导航栏
    //      */
    //     {
    //       text: '负载均衡算法', children: [
    //         { text: '负载均衡算法1', link: '/test' },
    //         { text: '负载均衡算法2', link: '/test' },
    //       ]
    //     },

    //     /**
    //      * [限流算法] 导航栏
    //      */
    //     {
    //       text: '限流算法', children: [
    //         { text: '限流算法1', link: '/test' },
    //         { text: '限流算法2', link: '/test' },
    //       ]
    //     },

    //     /**
    //      * [推荐算法] 导航栏
    //      */
    //     {
    //       text: '推荐算法', children: [
    //         { text: '推荐算法1', link: '/test' },
    //         { text: '推荐算法2', link: '/test' },
    //       ]
    //     },

    //     /**
    //      * [数据挖掘算法] 导航栏
    //      */
    //     {
    //       text: '数据挖掘算法', children: [
    //         { text: '数据挖掘算法1', link: '/test' },
    //         { text: '数据挖掘算法2', link: '/test' },
    //       ]
    //     },

    //     /**
    //      * [机器学习算法] 导航栏
    //      */
    //     {
    //       text: '机器学习算法', children: [
    //         { text: '机器学习算法1', link: '/test' },
    //         { text: '机器学习算法2', link: '/test' },
    //       ]
    //     },
    //   ]
    // },

    /**
     * [数据库]模块 导航栏
     */
    {
        text: '数据库',
        children: [
            /**
             * [数据库理论] 导航栏
             */
            // { text: '数据库理论', children: [
            //   { text: '数据库理论1', link: '/test' },
            //   { text: '数据库理论2', link: '/test' },
            // ] },

            /**
             * [SQL语言] 导航栏
             */
            // { text: 'SQL语言', children: [
            //   { text: 'SQL语言1', link: '/test' },
            //   { text: 'SQL语言2', link: '/test' },
            // ] },

            /**
             * [Mysql] 导航栏
             */
            {
                text: 'SQL数据库 Mysql', children: [
                    { text: '索引原理', link: '/db/mysql/索引原理.md' },
                    { text: 'sql执行过程', link: '/db/mysql/sql执行过程.md' },
                    { text: '索引分析和优化', link: '/db/mysql/索引分析和优化.md' },
                    { text: '隔离级别和锁机制', link: '/db/mysql/隔离级别和锁机制.md' },
                    { text: 'MVCC和BufferPool缓存机制', link: '/db/mysql/MVCC和BufferPool缓存机制.md' },
                    { text: '主从架构和分库分表', link: '/db/mysql/主从架构和分库分表.md' },
                ]
            },

            /**
             * [Redis] 导航栏
             */
            {
                text: 'Nosql数据库 Redis', children: [
                    { text: '数据类型和命令', link: '/db/redis/数据类型和命令.md' },
                    { text: '底层数据结构实现', link: '/db/redis/底层数据结构实现.md' },
                    { text: '高性能IO模型', link: '/db/redis/高性能IO模型.md' },
                    { text: '数据持久化原理', link: '/db/redis/数据持久化原理.md' },
                    { text: '主从模式和数据同步原理', link: '/db/redis/主从模式和数据同步原理.md' },
                    { text: '哨兵集群原理', link: '/db/redis/哨兵集群原理.md' },
                    { text: '分片集群原理', link: '/db/redis/分片集群原理.md' },
                    { text: '单线程阻塞点及优化方案', link: '/db/redis/单线程阻塞点及优化方案.md' },
                    { text: '基于CPU结构优化', link: '/db/redis/基于CPU结构优化.md' },
                    { text: 'Redis变慢优化思路', link: '/db/redis/Redis变慢优化思路.md' },
                    { text: '内存碎片优化', link: '/db/redis/内存碎片优化.md' },
                    { text: '缓冲区优化', link: '/db/redis/缓冲区优化.md' },
                    { text: '旁路缓存应用', link: '/db/redis/旁路缓存应用.md' },
                    { text: '淘汰策略选择', link: '/db/redis/淘汰策略选择.md' },
                    { text: '异常情况处理', link: '/db/redis/异常情况处理.md' },
                    { text: '分布式锁实现', link: '/db/redis/分布式锁实现.md' },
                    { text: '秒杀场景应用', link: '/db/redis/秒杀场景应用.md' },
                    { text: 'Lua脚本和集成框架', link: '/db/redis/Lua脚本和集成框架.md' },
                ]
            },

            /**
             * [MongoDB] 导航栏
             */
            // { text: 'Nosql数据库 MongoDB', children: [
            //   { text: '字符串匹配算法1', link: '/test' },
            //   { text: '字符串匹配算法2', link: '/test' },
            // ] },

            /**
             * [ElasticSearch] 导航栏
             */
            {
                text: 'Nosql数据库 ElasticSearch', children: [
                    { text: '高可用集群搭建', link: '/db/es/高可用集群搭建.md' },
                    { text: '基本操作和命令', link: '/db/es/基本操作和命令.md' },
                    { text: '复杂搜索策略', link: '/db/es/复杂搜索策略.md' },
                    { text: '聚合匹配', link: '/db/es/聚合匹配.md' },
                    { text: '数据建模', link: '/db/es/数据建模.md' },
                    { text: '核心原理', link: '/db/es/核心原理.md' },
                    { text: '优化思路', link: '/db/es/优化思路.md' },
                    { text: '面试题', link: '/db/es/面试题.md' },
                ]
            },
        ]
    },

    /**
     * [框架|中间件]模块 导航栏
     */
    // {
    //   text: '框架|中间件',
    //   children: [
    //     {
    //       /**
    //        * [SpringFramework] 导航栏
    //        */
    //       text: 'Spring Framework', children: [
    //         { text: '控制反转（IOC）', link: '/test' },
    //         { text: '面向切面编程（AOP）', link: '/test' },
    //         { text: '事务机制', link: '/test' },
    //         { text: 'MVC', link: '/test' },
    //         { text: '基于注解配置', link: '/test' },
    //         { text: 'WebFlux', link: '/test' },
    //         { text: '新特性', link: '/test' },
    //       ]
    //     },

    //     /**
    //      * [SpringBoot] 导航栏
    //      */
    //     {
    //       text: 'Spring Boot', children: [
    //         { text: 'SQL语言1', link: '/test' },
    //         { text: 'SQL语言2', link: '/test' },
    //       ]
    //     },

    //     /**
    //      * [SpringSecurity] 导航栏
    //      */
    //     {
    //       text: 'Spring Security', children: [
    //         { text: '分治算法', link: '/test' },
    //         { text: '动态规划', link: '/test' },
    //       ]
    //     },
    //     /**
    //      * [ORM框架] 导航栏
    //      */
    //     {
    //       text: 'ORM框架', children: [
    //         { text: 'Mybatis', link: '/test' },
    //         { text: 'Mybatis-Plus', link: '/test' },
    //       ]
    //     },
    //   ]
    // },


    /**
     * [WEB容器]模块 导航栏
     */
    {
        text: 'WEB容器',
        children: [
            /**
             * [Nginx容器] 导航栏
             */
            {
                text: 'Nginx容器', children: [
                    { text: '原理及配置', link: '/container/nginx/原理及配置.md' },
                    { text: '性能调优', link: '/container/nginx/性能调优.md' },
                    { text: 'Nginx-Kafka插件', link: '/container/nginx/Nginx-Kafka插件.md' },
                ]
            },

            /**
             * [Tomcat容器] 导航栏
             */
            {
                text: 'Tomcat容器', children: [
                    { text: 'Web请求过程', link: '/container/tomcat/Web请求过程.md' },
                    { text: '架构原理和启停原理', link: '/container/tomcat/架构原理和启停原理.md' },
                    { text: '网络IO模型和Connector原理', link: '/container/tomcat/网络IO模型和Connector原理.md' },
                    { text: '热加载和热部署', link: '/container/tomcat/热加载和热部署.md' },
                    { text: '加载Spring容器', link: '/container/tomcat/加载Spring容器.md' },
                ]
            },

            /**
             * [Netty容器] 导航栏
             */
            {
                text: 'Netty容器', children: [
                    { text: 'NIO和Epoll', link: '/container/netty/NIO和Epoll.md' },
                    { text: 'Netty核心原理', link: '/container/netty/Netty核心原理.md' },
                    { text: '线程模型源码', link: '/container/netty/线程模型源码.md' },
                    { text: '数据交换源码', link: '/container/netty/数据交换源码.md' },
                ]
            },
        ]
    },


    /**
     * [消息队列]模块 导航栏
     */
    {
        text: '消息队列',
        children: [
            /**
             * [RocketMQ] 导航栏
             */
            // {
            //   text: 'RocketMQ', children: [
            //     { text: 'SQL语言1', link: '/test' },
            //     { text: 'SQL语言2', link: '/test' },
            //   ]
            // },

            /**
             * [Kafka] 导航栏
             */
            {
                text: 'Kafka', children: [
                    { text: 'Kafka原理之Broker机制', link: '/mq/kafka/Kafka原理之Broker机制.md' },
                    { text: 'Kafka原理之Producer机制', link: '/mq/kafka/Kafka原理之Producer机制.md' },
                    { text: 'Kafka原理之Consumer机制', link: '/mq/kafka/Kafka原理之Consumer机制.md' },
                    { text: '常见问题及解决方案', link: '/mq/kafka/常见问题及解决方案.md' },
                    { text: 'Kafka调优思路', link: '/mq/kafka/Kafka调优思路.md' },
                    { text: '如何有效的对Kafka进行资源规划', link: '/mq/kafka/如何有效的对Kafka进行资源规划.md' },
                    { text: 'Kafka面试题', link: '/mq/kafka/Kafka面试题.md' },
                ]
            },

            /**
             * [RabbitMQ] 导航栏
             */
            {
                text: 'RabbitMQ', children: [
                    { text: '消息模型', link: '/mq/rabbitmq/消息模型.md' },
                    { text: '高可用集群搭建', link: '/mq/rabbitmq/高可用集群搭建.md' },
                    { text: '集群原理', link: '/mq/rabbitmq/集群原理.md' },
                    { text: '高级特性', link: '/mq/rabbitmq/高级特性.md' },
                    { text: '解决方案总结', link: '/mq/rabbitmq/解决方案总结.md' },
                    { text: '与SpringBoot集成', link: '/mq/rabbitmq/与SpringBoot集成.md' },
                ]
            },
        ]
    },


    /**
     * [方法论|系统设计]模块 导航栏
     */
    {
        text: '方法论|系统设计',
        children: [
            /**
             * [设计模式] 导航栏
             */
            {
                text: '设计模式', children: [
                    { text: '单例模式', link: '/methodology/patterns/单例模式.md' },
                    { text: '工厂模式', link: '/methodology/patterns/工厂模式.md' },
                    { text: '建造者模式', link: '/methodology/patterns/建造者模式.md' },
                    { text: '代理模式', link: '/methodology/patterns/代理模式.md' },
                    { text: '桥接模式', link: '/methodology/patterns/桥接模式.md' },
                    { text: '装饰器模式', link: '/methodology/patterns/装饰器模式.md' },
                    { text: '适配器模式', link: '/methodology/patterns/适配器模式.md' },
                    { text: '四种模式区别', link: '/methodology/patterns/四种模式区别.md' },
                    { text: '门面模式', link: '/methodology/patterns/观察者模式.md' },
                    { text: '观察者模式', link: '/methodology/patterns/观察者模式.md' },
                    { text: '模板模式', link: '/methodology/patterns/模板模式.md' },
                    { text: '策略模式', link: '/methodology/patterns/策略模式.md' },
                    { text: '原型模式', link: '/methodology/patterns/原型模式.md' },
                ]
            },

            /**
             * [分布式理论] 导航栏
             */
            {
                text: '分布式理论', children: [
                    { text: 'CAP定理和BASE理论', link: '/methodology/distribution/CAP定理和BASE理论.md' },
                    { text: 'X_OPEN事务模型', link: '/methodology/distribution/X_OPEN事务模型.md' },
                    { text: '2PC事务模型', link: '/methodology/distribution/2PC事务模型.md' },
                    { text: '3PC事务模型', link: '/methodology/distribution/3PC事务模型.md' },
                    { text: 'TCC事务补偿方案', link: '/methodology/distribution/TCC事务补偿方案.md' },
                    { text: '基于可靠消息的最终一致性方案', link: '/methodology/distribution/基于可靠消息的最终一致性方案.md' },
                    { text: '最大努力通知型事务方案', link: '/methodology/distribution/最大努力通知型事务方案.md' },
                ]
            },

            /**
             * [系统设计理论] 导航栏
             */
            // {
            //   text: '系统设计理论', children: [
            //     { text: '分治算法', link: '/test' },
            //     { text: '动态规划', link: '/test' },
            //   ]
            // },
        ]
    },


    /**
     * [架构|分布式]模块 导航栏
     */
    // {
    //   text: '架构|分布式',
    //   children: [
    //     /**
    //      * [系统架构] 导航栏
    //      */
    //     {
    //       text: '系统架构', children: [
    //         { text: '数据库理论1', link: '/test' },
    //         { text: '数据库理论2', link: '/test' },
    //       ]
    //     },

    //     /**
    //      * [分布式系统] 导航栏
    //      */
    //     {
    //       text: '分布式系统', children: [
    //         { text: 'SQL语言1', link: '/test' },
    //         { text: 'SQL语言2', link: '/test' },
    //       ]
    //     },
    //   ]
    // },


    /**
     * [微服务]模块 导航栏
     */
    {
        text: '微服务',
        children: [
            /**
             * [注册中心|配置中心] 导航栏
             */
            {
                text: '注册中心|配置中心', children: [
                    { text: '基于AP架构下的Nacos服务注册和服务发现原理', link: '/microservice/register/基于AP架构下的Nacos服务注册和服务发现原理.md' },
                    { text: '基于CP架构下的Nacos服务注册和服务发现原理', link: '/microservice/register/基于CP架构下的Nacos服务注册和服务发现原理.md' },
                    { text: '基于Nacos的配置中心实现原理', link: '/microservice/register/基于Nacos的配置中心实现原理.md' },
                    { text: '基于Nacos的注册中心扩展', link: '/microservice/register/基于Nacos的注册中心扩展.md' },
                ]
            },

            /**
             * [负载均衡|RPC调用] 导航栏
             */
            {
                text: '负载均衡|RPC调用', children: [
                    { text: 'LoadBalancer核心原理', link: '/microservice/loadbalance/LoadBalancer核心原理.md' },
                    { text: 'LoadBalancer功能扩展', link: '/microservice/loadbalance/LoadBalancer功能扩展.md' },
                    { text: 'LoadBalancer负载均衡策略', link: '/microservice/loadbalance/LoadBalancer负载均衡策略.md' },
                    { text: 'OpenFeign架构原理', link: '/microservice/loadbalance/OpenFeign架构原理.md' },
                    { text: 'OpenFeign生命周期', link: '/microservice/loadbalance/OpenFeign生命周期.md' },
                    { text: 'OpenFeign核心组件源码', link: '/microservice/loadbalance/OpenFeign核心组件源码.md' },
                    { text: 'OpenFeign扩展配置', link: '/microservice/loadbalance/OpenFeign扩展配置.md' },
                ]
            },
        ]
    },


    /**
     * [大数据] 导航栏
     */
    // {
    //   text: '大数据',
    //   children: [
    //     /**
    //      * [分布式存储] 导航栏
    //      */
    //     {
    //       text: '分布式存储', children: [
    //         { text: '数据库理论1', link: '/test' },
    //         { text: '数据库理论2', link: '/test' },
    //       ]
    //     },

    //     /**
    //      * [分布式计算] 导航栏
    //      */
    //     {
    //       text: '分布式计算', children: [
    //         { text: 'SQL语言1', link: '/test' },
    //         { text: 'SQL语言2', link: '/test' },
    //       ]
    //     },

    //     /**
    //      * [数据同步] 导航栏
    //      */
    //     {
    //       text: '数据同步', children: [
    //         { text: '分治算法', link: '/test' },
    //         { text: '动态规划', link: '/test' },
    //       ]
    //     },

    //     /**
    //      * [资源调度] 导航栏
    //      */
    //     {
    //       text: '资源调度', children: [
    //         { text: '加密算法1', link: '/test' },
    //         { text: '加密算法2', link: '/test' },
    //       ]
    //     },

    //     /**
    //      * [日志收集] 导航栏
    //      */
    //     {
    //       text: '日志收集', children: [
    //         { text: '字符串匹配算法1', link: '/test' },
    //         { text: '字符串匹配算法2', link: '/test' },
    //       ]
    //     },

    //     /**
    //      * [分析计算引擎] 导航栏
    //      */
    //     {
    //       text: '分析计算引擎', children: [
    //         { text: '数据处理算法1', link: '/test' },
    //         { text: '11-数据处理算法2', link: '/test' },
    //       ]
    //     },

    //     /**
    //      * [集群监控] 导航栏
    //      */
    //     {
    //       text: '集群监控', children: [
    //         { text: '数据处理算法1', link: '/test' },
    //         { text: '11-数据处理算法2', link: '/test' },
    //       ]
    //     },
    //   ]
    // },


    /**
     * [项目|案例]模块 导航栏
     */
    // {
    //   text: '项目|案例',
    //   children: [
    //     /**
    //      * [系统架构案例] 导航栏
    //      */
    //     {
    //       text: '系统架构案例', children: [
    //         { text: '数据库理论1', link: '/test' },
    //         { text: '数据库理论2', link: '/test' },
    //       ]
    //     },

    //     /**
    //      * [系统性能优化] 导航栏
    //      */
    //     {
    //       text: '系统性能优化', children: [
    //         { text: 'SQL语言1', link: '/test' },
    //         { text: 'SQL语言2', link: '/test' },
    //       ]
    //     },

    //     /**
    //      * [业务代码优化] 导航栏
    //      */
    //     {
    //       text: '业务代码优化', children: [
    //         { text: '分治算法', link: '/test' },
    //         { text: '动态规划', link: '/test' },
    //       ]
    //     },

    //     /**
    //      * [商城系统设计] 导航栏
    //      */
    //     {
    //       text: '商城系统设计', children: [
    //         { text: '加密算法1', link: '/test' },
    //         { text: '加密算法2', link: '/test' },
    //       ]
    //     },

    //     /**
    //      * [秒杀系统设计] 导航栏
    //      */
    //     {
    //       text: '秒杀系统设计', children: [
    //         { text: '字符串匹配算法1', link: '/test' },
    //         { text: '字符串匹配算法2', link: '/test' },
    //       ]
    //     },

    //     /**
    //      * [后台管理系统设计] 导航栏
    //      */
    //     {
    //       text: '后台管理系统设计', children: [
    //         { text: '数据处理算法1', link: '/test' },
    //         { text: '11-数据处理算法2', link: '/test' },
    //       ]
    //     },

    //     /**
    //      * [电商数仓系统设计] 导航栏
    //      */
    //     {
    //       text: '电商数仓系统设计', children: [
    //         { text: '数据处理算法1', link: '/test' },
    //         { text: '11-数据处理算法2', link: '/test' },
    //       ]
    //     },

    //     /**
    //      * [推荐系统设计] 导航栏
    //      */
    //     {
    //       text: '推荐系统设计', children: [
    //         { text: '数据处理算法1', link: '/test' },
    //         { text: '11-数据处理算法2', link: '/test' },
    //       ]
    //     },

    //     /**
    //      * [客户画像系统设计] 导航栏
    //      */
    //     {
    //       text: '客户画像系统设计', children: [
    //         { text: '数据处理算法1', link: '/test' },
    //         { text: '11-数据处理算法2', link: '/test' },
    //       ]
    //     },
    //   ]
    // },


    /**
     * [工具|部署]模块 导航栏
     */
    {
        text: '工具|部署',
        children: [
            /**
             * [开发工具] 导航栏
             */
            // {
            //   text: '开发工具', children: [
            //     { text: '数据库理论1', link: '/test' },
            //     { text: '数据库理论2', link: '/test' },
            //   ]
            // },

            /**
             * [Linux|Shell脚本] 导航栏
             */
            {
                text: 'Linux|Shell脚本', children: [
                    { text: 'Shell脚本', link: '/tools/linux/Shell脚本.md' },
                    { text: '文本操作命令', link: '/tools/linux/文本操作命令.md' },
                    { text: '系统操作命令', link: '/tools/linux/系统操作命令.md' },
                    { text: '系统管理命令', link: '/tools/linux/系统管理命令.md' },
                ]
            },

            /**
             * [网络协议|抓包工具] 导航栏
             */
            // {
            //   text: '网络协议|抓包工具', children: [
            //     { text: 'Http1.1协议详解', link: '/tools/network/Http1.1协议详解' },
            //     { text: 'WebSocket协议详解', link: '/tools/network/WebSocket协议详解' },
            //   ]
            // },

            /**
             * [Docker容器化] 导航栏
             */
            // {
            //   text: 'Docker容器化', children: [
            //     { text: '加密算法1', link: '/test' },
            //     { text: '加密算法2', link: '/test' },
            //   ]
            // },

            /**
             * [K8s服务集群管理] 导航栏
             */
            // {
            //   text: 'K8s服务集群管理', children: [
            //     { text: '加密算法1', link: '/test' },
            //     { text: '加密算法2', link: '/test' },
            //   ]
            // },

            /**
             * [Git代码管理|Maven依赖管理] 导航栏
             */
            // {
            //   text: 'Git代码管理|Maven依赖管理', children: [
            //     { text: '字符串匹配算法1', link: '/test' },
            //     { text: '字符串匹配算法2', link: '/test' },
            //   ]
            // },
        ]
    },


    /**
     * [技术管理|团队|产品]模块 导航栏
     */
    // {
    //   text: '技术管理|团队|产品',
    //   children: [
    //     /**
    //      * [技术规范] 导航栏
    //      */
    //     {
    //       text: '技术规范', children: [
    //         { text: '数据库理论1', link: '/test' },
    //         { text: '数据库理论2', link: '/test' },
    //       ]
    //     },

    //     /**
    //      * [团队管理] 导航栏
    //      */
    //     {
    //       text: '团队管理', children: [
    //         { text: 'SQL语言1', link: '/test' },
    //         { text: 'SQL语言2', link: '/test' },
    //       ]
    //     },

    //     /**
    //      * [技术演讲] 导航栏
    //      */
    //     {
    //       text: '技术演讲', children: [
    //         { text: '分治算法', link: '/test' },
    //         { text: '动态规划', link: '/test' },
    //       ]
    //     },

    //     /**
    //      * [产品设计启迪] 导航栏
    //      */
    //     {
    //       text: '产品设计启迪', children: [
    //         { text: '加密算法1', link: '/test' },
    //         { text: '加密算法2', link: '/test' },
    //       ]
    //     },

    //     /**
    //      * [个人成长] 导航栏
    //      */
    //     {
    //       text: '个人成长', children: [
    //         { text: '字符串匹配算法1', link: '/test' },
    //         { text: '字符串匹配算法2', link: '/test' },
    //       ]
    //     },

    //     /**
    //      * [面试总结] 导航栏
    //      */
    //     {
    //       text: '面试总结', children: [
    //         { text: '数据处理算法1', link: '/test' },
    //         { text: '11-数据处理算法2', link: '/test' },
    //       ]
    //     },
    //   ]
    // },


    /**
     * [兴趣爱好]模块 导航栏
     */
    // {
    //   text: '兴趣|爱好',
    //   children: [
    //     /**
    //      * [篮球|健身] 导航栏
    //      */
    //     {
    //       text: '篮球|健身', children: [
    //         { text: '数据库理论1', link: '/test' },
    //         { text: '数据库理论2', link: '/test' },
    //       ]
    //     },

    //     /**
    //      * [化妆|穿搭|发型] 导航栏
    //      */
    //     {
    //       text: '化妆|穿搭|发型', children: [
    //         { text: 'SQL语言1', link: '/test' },
    //         { text: 'SQL语言2', link: '/test' },
    //       ]
    //     },

    //     /**
    //      * [摄影|视频|图片] 导航栏
    //      */
    //     {
    //       text: '摄影|视频|图片', children: [
    //         { text: '分治算法', link: '/test' },
    //         { text: '动态规划', link: '/test' },
    //       ]
    //     },

    //     /**
    //      * [文案|运营] 导航栏
    //      */
    //     {
    //       text: '文案|运营', children: [
    //         { text: '加密算法1', link: '/test' },
    //         { text: '加密算法2', link: '/test' },
    //       ]
    //     },

    //     /**
    //      * [音乐|演唱|乐器] 导航栏
    //      */
    //     {
    //       text: '音乐|演唱|乐器', children: [
    //         { text: '字符串匹配算法1', link: '/test' },
    //         { text: '字符串匹配算法2', link: '/test' },
    //       ]
    //     },

    //     /**
    //      * [车辆驾驶] 导航栏
    //      */
    //     {
    //       text: '车辆驾驶', children: [
    //         { text: '数据处理算法1', link: '/test' },
    //         { text: '11-数据处理算法2', link: '/test' },
    //       ]
    //     },

    //     /**
    //      * [软考高级] 导航栏
    //      */
    //     {
    //       text: '软考高级', children: [
    //         { text: '数据处理算法1', link: '/test' },
    //         { text: '11-数据处理算法2', link: '/test' },
    //       ]
    //     },

    //     /**
    //      * [研究生考试] 导航栏
    //      */
    //     {
    //       text: '研究生考试', children: [
    //         { text: '数据处理算法1', link: '/test' },
    //         { text: '11-数据处理算法2', link: '/test' },
    //       ]
    //     },
    //   ]
    // },
    // { text: 'Github', link: 'https://github.com/noErrorNoBug' },
]