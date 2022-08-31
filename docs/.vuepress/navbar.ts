/**
 * TODO:
 * Golang专栏
 * 
 * 算法专栏:
 *  -- 数据挖掘算法
 *  -- 推荐算法
 *  -- 机器学习算法
 * 
 * 数据库专栏:
 *  -- MongoDB
 * 
 * 大数据专栏:
 *  -- 分布式存储
 *  -- 分布式计算
 *  -- 资源调度
 *  -- 分析计算引擎
 *  -- 集群监控
 * 
 * 技术管理专栏
 *  -- 技术规范
 *  -- 团队管理
 *  -- 技术演讲
 *  -- 产品设计
 *  -- 个人成长
 *  -- 面试总结
 *  -- 文案运营
 * 
 * 工具|部署专栏
 *  -- k8s
 */
import { defineNavbarConfig } from "vuepress-theme-hope";

export default defineNavbarConfig([
  {
    text: "面试题",
    children:[
      { text: "分布式和微服务面试题", link: "/questions/分布式和微服务面试题.md" }
    ]
  },
  /**
   * [Java]模块 导航栏
   */
  {
    text: "Java",
    children: [
      /**
       * [面向对象|基础] 导航栏
       */
      {
        text: "面向对象|基础", children: [
          { text: "面向对象特性", link: "/java/basic/面向对象编程.md" },         /** 指向面向对象起始文章 */
          { text: "Java基础知识", link: "/java/basic/Java基础知识.md" },        /** 指向Java基础知识起始文章 */
          { text: "Java高级特性", link: "/java/basic/Java泛型机制.md" },        /** 指向高级特性起始文章 */
        ]
      },

      /**
       * [JAVA 集合框架] 导航栏
       */
      {
        text: "JAVA 集合框架", children: [
          { text: "Collection 集合", link: "/guide.md" },     /** 指向Collection 集合起始文章 */
          { text: "Map 集合", link: "/guide.md" },        /** 指向Map 集合起始文章 */
          { text: "并发集合框架", link: "/guide.md" },        /** 指向并发集合框架起始文章 */
        ]
      },

      /**
       * [并发框架] 导航栏
       */
      {
        text: "JAVA 并发框架", children: [
          { text: "并发理论基础", link: "/guide.md" },    /** 指向并发理论基础起始文章 */
          { text: "多线程基础", link: "/guide.md" },      /** 指向多线程基础起始文章 */
          { text: "关键字详解", link: "/guide.md" },      /** 指向关键字详解起始文章 */
          { text: "集合与并发集合", link: "/guide.md" },      /** 指向集合与并发集合起始文章 */
          { text: "线程池", link: "/guide.md" },          /** 指向线程池起始文章 */
          { text: "CAS原理和原子类", link: "/guide.md" },     /** 指向CAS原理和原子类起始文章 */
          { text: "AQS原理和锁机制", link: "/guide.md" },     /** 指向AQS原理和锁机制起始文章 */
          { text: "并发流程控制", link: "/guide.md" },        /** 指向并发流程控制起始文章 */
          { text: "Disruptor框架", link: "/guide.md" },       /** 指向Disruptor框架起始文章 */
          { text: "ThreadLocal", link: "/guide.md" },     /** 指向ThreadLocal起始文章 */
          { text: "并发设计模式", link: "/guide.md" },     /** 指向ThreadLocal起始文章 */
        ]
      },

      /**
       * [JAVA IO框架] 导航栏
       */
      {
        text: "JAVA IO框架", children: [
          { text: "JAVA IO", link: "/guide.md" },   /** 指向IO的起始文章 */
          { text: "JAVA NIO", link: "/guide.md" },  /** 指向NIO、AIO、BIO的起始文章 */
        ]
      },

      /**
       * [JVM原理] 导航栏
       */
      {
        text: "JVM原理", children: [
          { text: "JVM类加载机制", link: "/java/jvm/类加载机制.md" },     /** 指向类加载机制的起始文章 */
          { text: "JVM内存知识", link: "/java/jvm/类加载机制.md" },       /** 指向JVM内存知识的起始文章 */
          { text: "JVM垃圾回收原理", link: "/java/jvm/内存模型.md" },     /** 指向JVM垃圾回收原理的起始文章 */
          { text: "JVM调优思路", link: "/java/jvm/对象生命周期.md" },     /** 指向JVM调优思路的起始文章 */
          { text: "JVM线上调试排查", link: "/java/jvm/垃圾回收.md" },     /** 指向JVM线上调试排查的起始文章 */
        ]
      },

      /**
       * [JAVA 版本特性] 导航栏
       */
      {
        text: "JAVA 版本特性", children: [
          { text: "Java8特性", link: "/java/version/java8/java8特性知识体系.md" },                   /** 指向java8特性的起始文章 */
          { text: "java8升java11特性", link: "/java/version/java11/java9到java11特性知识体系.md" },   /** 指向java11特性的起始文章 */
          { text: "java11升java17特性", link: "/java/version/java17/java12到java17特性知识体系.md" }, /** 指向java17特性的起始文章 */
        ]
      },
    ]
  },


  /**
   * [算法]模块 导航栏
   */
  {
    text: "算法",
    children: [
      /**
       * [数据结构] 导航栏
       */
      {
        text: "数据结构", children: [
          { text: "复杂度析分析", link: "/guide.md" },         /** 指向复杂度分析起始文章 */
          { text: "线性表相关数据结构", link: "/guide.md" },         /** 指向线性表相关数据结构起始文章 */
          { text: "树相关数据结构", link: "/guide.md" },         /** 指向树相关数据结构起始文章 */
          { text: "堆相关数据结构", link: "/guide.md" },         /** 指向堆相关数据结构起始文章 */
          { text: "图相关数据结构", link: "/guide.md" },         /** 指向图相关数据结构起始文章 */
        ]
      },

      /**
       * [常用算法] 导航栏
       */
      {
        text: "常用算法", children: [
          { text: "排序算法", link: "/guide.md" },         /** 指向排序算法起始文章 */
          { text: "查找算法", link: "/guide.md" },         /** 指向查找算法起始文章 */
        ]
      },

      /**
       * [算法思想] 导航栏
       */
      {
        text: "算法思想", children: [
          { text: "动态规划", link: "/guide.md" },         /** 指向动态规划起始文章 */
          { text: "分治算法", link: "/guide.md" },         /** 指向分治算法起始文章 */
          { text: "二分法", link: "/guide.md" },         /** 指向二分法起始文章 */
          { text: "搜索算法", link: "/guide.md" },         /** 指向搜索算法起始文章 */
          { text: "回溯算法", link: "/guide.md" },         /** 指向回溯算法起始文章 */
          { text: "贪心算法", link: "/guide.md" },         /** 指向贪心算法起始文章 */
        ]
      },

      /**
       * [领域算法实践] 导航栏
       */
      {
        text: "领域算法实践", children: [
          { text: "加密算法", link: "/guide.md" },         /** 指向加密算法始文章 */
          { text: "字符串匹配算法", link: "/guide.md" },         /** 指向字符串匹配算法起始文章 */
          { text: "数据一致性算法", link: "/guide.md" },         /** 指向数据一致性算法起始文章 */
          { text: "负载均衡算法", link: "/guide.md" },         /** 指向搜索算法起始文章 */
          { text: "限流算法", link: "/algorithm/domain/限流算法.md" },         /** 指向限流算法起始文章 */
          { text: "数据处理算法", link: "/guide.md" },         /** 指向数据处理算法起始文章 */
        ]
      },
    ]
  },

  /**
   * [数据库]模块 导航栏
   */
  {
    text: "数据库",
    children: [
      /**
       * [数据库基础] 导航栏
       */
      {
        text: "数据库基础", children: [
          { text: "数据库理论", link: "/guide.md" },         /** 指向数据库理论起始文章 */
          { text: "SQL语言", link: "/guide.md" },         /** 指向SQL语言起始文章 */
        ]
      },

      /**
       * [Mysql] 导航栏
       */
      {
        text: "SQL数据库 Mysql", children: [
          { text: "索引原理", link: "/guide.md" },    /** 指向索引原理起始文章 */
          { text: "存储引擎", link: "/guide.md" },    /** 指向存储引擎起始文章 */
          { text: "架构原理", link: "/guide.md" },    /** 指向架构原理起始文章 */
          { text: "事务机制", link: "/guide.md" },    /** 指向事务机制起始文章 */
          { text: "性能优化", link: "/guide.md" },    /** 指向性能优化起始文章 */
          { text: "分库分表和读写分离", link: "/guide.md" },      /** 指向分库分表和读写分离起始文章 */
        ]
      },

      /**
       * [Redis] 导航栏
       */
      {
        text: "Nosql数据库 Redis", children: [
          { text: "数据类型和数据结构", link: "/guide.md" },    /** 指向数据类型和数据结构始文章 */
          { text: "高可用集群原理", link: "/guide.md" },    /** 指向高可用集群原理始文章 */
          { text: "数据持久化原理", link: "/guide.md" },    /** 指向数据持久化原理始文章 */
          { text: "高性能原理", link: "/guide.md" },    /** 指向高性能原理始文章 */
          { text: "性能优化要点", link: "/guide.md" },    /** 指向性能优化要点始文章 */
          { text: "典型应用实现", link: "/guide.md" },    /** 指向典型应用实现始文章 */
        ]
      },

      /**
       * [ElasticSearch] 导航栏
       */
      {
        text: "Nosql数据库 ElasticSearch", children: [
          { text: "Elastic Stack生态", link: "/guide.md" },         /** 指向Elastic Stack生态起始文章 */
          { text: "查询和聚合", link: "/guide.md" },                 /** 指向查询和聚合起始文章 */
          { text: "复杂搜索策略", link: "/guide.md" },               /** 指向复杂搜索策略起始文章 */
          { text: "聚合匹配", link: "/guide.md" },                  /** 指向聚合匹配起始文章 */
          { text: "数据建模", link: "/guide.md" },                  /** 指向数据建模起始文章 */
          { text: "核心原理", link: "/guide.md" },                  /** 指向核心原理起始文章 */
          { text: "优化思路", link: "/guide.md" },                  /** 指向优化思路起始文章 */
        ]
      },
    ]
  },

  /**
   * [框架|中间件]模块 导航栏
   */
  {
    text: "框架|中间件",
    children: [
      /**
      * [SpringFramework] 导航栏
      */
      {
        text: "Spring Framework", children: [
          { text: "控制反转(IOC)", link: "/guide.md" },                  /** 指向控制反转(IOC)起始文章 */
          { text: "面向切面编程(AOP)", link: "/guide.md" },                  /** 指向面向切面编程(AOP)起始文章 */
          { text: "事务机制", link: "/guide.md" },                  /** 指向事务机制起始文章 */
          { text: "MVC机制", link: "/guide.md" },                  /** 指向MVC机制起始文章 */
          { text: "基于注解配置", link: "/guide.md" },                  /** 指向基于注解配置起始文章 */
          { text: "WebFlux", link: "/guide.md" },                  /** 指向WebFlux起始文章 */
        ]
      },

      /**
       * [SpringBoot] 导航栏
       */
      {
        text: "Spring Boot", children: [
          { text: "约定大于配置", link: "/guide.md" },                  /** 指向约定大于配置起始文章 */
          { text: "自动装配原理", link: "/guide.md" },                  /** 指向自动装配原理起始文章 */
          { text: "组件集成", link: "/guide.md" },                  /** 指向组件集成起始文章 */
        ]
      },
      /**
       * [ORM框架] 导航栏
       */
      {
        text: "ORM框架", children: [
          { text: "Mybatis核心原理", link: "/guide.md" },                  /** 指向Mybatis核心原理起始文章 */
          { text: "Mybatis-Plus简化开发", link: "/guide.md" },                  /** 指向Mybatis-Plus简化开发起始文章 */
        ]
      },
    ]
  },


  /**
   * [WEB容器]模块 导航栏
   */
  {
    text: "WEB容器",
    children: [
      /**
       * [Nginx容器] 导航栏
       */
      {
        text: "Nginx容器", children: [
          { text: "架构及配置", link: "/guide.md" },                  /** 指向架构及配置起始文章 */
          { text: "性能调优", link: "/guide.md" },                  /** 指向性能调优起始文章 */
        ]
      },

      /**
       * [Tomcat容器] 导航栏
       */
      {
        text: "Tomcat容器", children: [
          { text: "Web请求过程", link: "/guide.md" },                  /** 指向Web请求过程起始文章 */
          { text: "启停原理", link: "/guide.md" },                  /** 指向启停原理起始文章 */
          { text: "网络原理", link: "/guide.md" },                  /** 指向网络原理起始文章 */
          { text: "热加载和热部署", link: "/guide.md" },                  /** 指向热加载和热部署起始文章 */
        ]
      },

      /**
       * [Netty容器] 导航栏
       */
      {
        text: "Netty容器", children: [
          { text: "Netty核心架构", link: "/guide.md" },               /** 指向Netty核心架构起始文章 */
          { text: "Netty线程模型实现原理", link: "/guide.md" },        /** 指向Netty线程模型实现原理起始文章 */
          { text: "Netty数据交换实现原理", link: "/guide.md" },        /** 指向Netty数据交换实现原理起始文章 */
          { text: "Netty优化", link: "/guide.md" },                  /** 指向Netty优化起始文章 */
        ]
      },
    ]
  },


  /**
   * [消息队列]模块 导航栏
   */
  {
    text: "消息队列",
    children: [
      /**
       * [RocketMQ] 导航栏
       */
      {
        text: "RocketMQ", children: [
          { text: "TODO", link: "/guide.md" },                  /** 指向RocketMQ起始文章 */
        ]
      },

      /**
       * [Kafka] 导航栏
       */
      {
        text: "Kafka", children: [
          { text: "Kafka核心原理", link: "/guide.md" },                  /** 指向Kafka核心原理起始文章 */
          { text: "典型应用方案", link: "/guide.md" },                   /** 指向典型应用方案起始文章 */
          { text: "调优思路分析", link: "/guide.md" },                   /** 指向调优思路分析起始文章 */
        ]
      },

      /**
       * [RabbitMQ] 导航栏
       */
      {
        text: "RabbitMQ", children: [
          { text: "架构原理", link: "/guide.md" },                   /** 指向调优思路分析起始文章 */
          { text: "集群原理", link: "/guide.md" },     /** 指向集群原理起始文章 */
          { text: "典型应用方案", link: "/guide.md" },   /** 指向典型应用方案起始文章 */
        ]
      },
    ]
  },

    /**
   * [微服务]模块 导航栏
   */
     {
      text: "微服务",
      children: [
        
        /**
         * [Spring Cloud 组件] 导航栏
         */
         {
          text: "Spring Cloud 生态", children: [
            { text: "LoadBalancer:负载均衡器", link: "/microservice/loadbalance/LoadBalancer核心原理.md" },          /** 指向LoadBalancer:负载均衡器起始文章 */
            { text: "OpenFeign:函数式调用", link: "/microservice/feign/OpenFeign架构原理.md" },          /** 指向OpenFeign:函数式调用起始文章 */
            { text: "Gateway:高可用网关API", link: "/microservice/gateway/Gateway核心原理.md" },          /** 指向Gateway:高可用网关API起始文章 */
            { text: "Security:认证和授权", link: "/microservice/auth/SpringSecurity核心原理.md" },          /** Security:认证和授权 */
            { text: "SkyWalking:链路追踪", link: "/guide.md" },          /** 指向SkyWalking:服务调用链起始文章 */
            { text: "SpringCloud扩展点", link: "/guide.md" },          /** 指向SpringCloud扩展点起始文章 */
          ]
        },
  
        /**
         * [Spring Cloud Alibaba 生态] 导航栏
         */
         {
          text: "Spring Cloud Alibaba 生态", children: [
            { text: "Nacos:服务注册与发现", link: "/microservice/register/基于AP架构下的Nacos服务注册和服务发现原理.md" },          /** 指向服务注册与发现起始文章 */
            { text: "Nacos:配置中心", link: "/microservice/config/基于Nacos的配置中心实现.md" },          /** 指向配置中心起始文章 */
            { text: "Sentinel:限流和降级", link: "/microservice/sentinel/基于Sentinel实现服务限流.md" },          /** 指向Sentinel:限流和降级起始文章 */
            { text: "Seata:分布式事务", link: "/guide.md" },          /** 指向Seata:强一致性事务实现起始文章 */
          ]
        },
      ]
    },

  /**
   * [方法论|系统设计]模块 导航栏
   */
  {
    text: "方法论|系统设计",
    children: [
      /**
       * [开发原则] 导航栏
       */
      {
        text: "开发原则", children: [
          { text: "代码设计原则", link: "/guide.md" },    /** 指向代码设计原则起始文章 */
          { text: "代码规范和重构", link: "/guide.md" },    /** 指向代码规范和重构起始文章 */
          { text: "开源协议和系统认证", link: "/guide.md" },    /** 指向开源协议和系统认证起始文章 */
        ]
      },
      /**
       * [设计模式] 导航栏
       */
      {
        text: "设计模式范式", children: [
          { text: "创建型范式", link: "/patterns/build/单例模式.md" },    /** 指向创建型范式起始文章 */
          { text: "结构型范式", link: "/patterns/construct/代理模式.md" },    /** 指向结构型范式起始文章 */
          { text: "行为型范式", link: "/patterns/action/门面模式.md" },    /** 指向行为型范式起始文章 */
        ]
      },

      /**
       * [分布式理论] 导航栏
       */
      {
        text: "分布式理论", children: [
          { text: "分布式理论和模型", link: "/methodology/distribution/分布式系统特点.md" },    /** 指向分布式理论和模型起始文章 */
          { text: "分布式事务理论", link: "/methodology/transaction/X_OPEN事务模型.md" },      /** 指向事务理论和模型起始文章 */
          { text: "微服务理论", link: "/guide.md" },          /** 指向微服务理论起始文章 */
        ]
      },

    ]
  },


  /**
   * [架构|分布式]模块 导航栏
   */
  {
    text: "架构|分布式",
    children: [
      /**
       * [系统架构] 导航栏
       */
      {
        text: "系统架构", children: [
          { text: "架构视角及演进", link: "/guide.md" },              /** 指向架构视角及演进起始文章 */
          { text: "架构的模式与核心要素", link: "/guide.md" },         /** 指向架构的模式与核心要素起始文章 */
          { text: "高并发架构要素", link: "/guide.md" },              /** 指向高并发架构要素起始文章 */
          { text: "高可用架构要素", link: "/guide.md" },              /** 指高可用架构要素起始文章 */
          { text: "高性能架构要素", link: "/guide.md" },              /** 指向高性能架构要素起始文章 */
        ]
      },

      /**
       * [分布式系统] 导航栏
       */
      {
        text: "分布式系统设计", children: [
          { text: "全局唯一ID", link: "/guide.md" },          /** 指向全局唯一ID起始文章 */
          { text: "分布式锁", link: "/guide.md" },            /** 指向分布式锁始文章 */
          { text: "分布式事务", link: "/guide.md" },           /** 指向分布式事务起始文章 */
          { text: "分布式缓存", link: "/guide.md" },          /** 指向分布式缓存起始文章 */
          { text: "分布式任务", link: "/guide.md" },          /** 指向分布式任务起始文章 */
          { text: "分布式会话", link: "/guide.md" },          /** 指向分布式会话起始文章 */
          { text: "分布式链路追踪", link: "/guide.md" },      /** 指向分布式链路追踪起始文章 */
          { text: "分布式文件", link: "/guide.md" },          /** 指向分布式文件起始文章 */
          { text: "分布式存储", link: "/guide.md" },          /** 指向分布式存储起始文章 */
          { text: "分布式计算", link: "/guide.md" },          /** 指向分布式计算起始文章 */
        ]
      },

      /**
       * [系统设计案例] 导航栏
       */
      {
        text: "系统设计案例", children: [
          { text: "秒杀系统案例", link: "/guide.md" },          /** 指向全局唯一ID起始文章 */
          { text: "后台管理系统案例", link: "/guide.md" },            /** 指向后台管理系统起始文章 */
          { text: "数据同步案例", link: "/guide.md" },           /** 指向数据同步案例起始文章 */
          { text: "商城架构案例", link: "/guide.md" },          /** 指向商城架构案例起始文章 */
          { text: "轻量单体限流框架案例", link: "/guide.md" },          /** 指向轻量单体限流框架案例起始文章 */
          { text: "轻量消息系统案例", link: "/guide.md" },          /** 指向轻量消息系统案例起始文章 */
          { text: "OSS单点登录案例", link: "/guide.md" },          /** 指向OSS单点登录案例起始文章 */
          { text: "高可用网关案例", link: "/guide.md" },          /** 指向高可用网关案例起始文章 */
          { text: "认证授权服务案例", link: "/guide.md" },          /** 指向认证授权服务案例起始文章 */
        ]
      },
    ]
  },





  /**
   * [大数据] 导航栏
   */
  {
    text: "大数据",
    children: [
      /**
       * [数据同步] 导航栏
       */
      {
        text: "数据同步", children: [
          { text: "canal:数据库准实时同步", link: "/guide.md" },     /** 指向canal:数据库准实时同步起始文章 */
        ]
      },

      /**
       * [日志收集] 导航栏
       */
      {
        text: "日志收集", children: [
          { text: "ELK日志数据收集", link: "/guide.md" },     /** 指向ELK日志数据收集起始文章 */
        ]
      },
    ]
  },


  /**
   * [项目|案例]模块 导航栏
   */
  {
    text: "项目|优化",
    children: [
      /**
       * [系统性能优化] 导航栏
       */
      {
        text: "系统性能优化", children: [
          { text: "Java编程性能调优", link: "/guide.md" },        /** 指向Java编程性能调优起始文章 */
          { text: "多线程调优", link: "/guide.md" },        /** 指向Java编程性能调优起始文章 */
          { text: "JVM性能检测及调优", link: "/guide.md" },        /** 指向Java编程性能调优起始文章 */
          { text: "设计模式调优", link: "/guide.md" },        /** 指向设计模式调优起始文章 */
          { text: "数据库调优", link: "/guide.md" },        /** 指向数据库调优起始文章 */
          { text: "基础设施优化", link: "/guide.md" },        /** 指向基础设施优化起始文章 */
          { text: "系统网络调优", link: "/guide.md" },        /** 指向系统网络调优起始文章 */
          { text: "分布式系统优化", link: "/guide.md" },        /** 指向分布式系统优化起始文章 */
          { text: "业务开发优化", link: "/guide.md" },        /** 指向业务开发优化起始文章 */
        ]
      },

      /**
       * [项目重构|项目设计] 导航栏
       * 每一个项目都是一个独立的侧边栏不混合
       */
      {
        text: "项目重构|项目设计", children: [
          { text: "一套分布式高可用架构选型", link: "/guide.md" },
          { text: "商城系统", link: "/guide.md" },
          { text: "秒杀系统", link: "/guide.md" },
          { text: "认证授权系统", link: "/projects/uua/UUA认证中心实现案例.md" },
          { text: "日志中心系统", link: "/guide.md" },
          { text: "基于数据库的订阅中心", link: "/guide.md" },
          { text: "高可用网关方案", link: "/guide.md" },
          { text: "单机可插拔限流框架", link: "/guide.md" },
          { text: "幂等性框架", link: "/guide.md" },
          { text: "基于Flink的实时推荐系统", link: "/guide.md" },
        ]
      },
    ]
  },


  /**
   * [工具|部署]模块 导航栏
   */
  {
    text: "工具|部署",
    children: [
      /**
       * [开发工具] 导航栏
       */
      {
        text: "开发工具", children: [
          { text: "常用类库", link: "/guide.md" },     /** 指向常用类库起始文章 */
          { text: "代码质量保障", link: "/guide.md" },     /** 指向代码质量保障起始文章 */
          { text: "常用表达式", link: "/guide.md" },     /** 指向常用表达式起始文章 */
          { text: "代码安全", link: "/guide.md" },     /** 指向代码安全起始文章 */
        ]
      },

      /**
       * [Linux|Shell脚本] 导航栏
       */
      {
        text: "Linux|Shell脚本", children: [
          { text: "Shell脚本", link: "/guide.md" },     /** 指向Shell脚本起始文章 */
          { text: "文本操作命令", link: "/guide.md" },     /** 指向文本操作命令起始文章 */
          { text: "系统操作命令", link: "/guide.md" },     /** 指向系统操作命令起始文章 */
          { text: "系统管理命令", link: "/guide.md" },     /** 指向系统管理命令起始文章 */
        ]
      },

      /**
       * [网络协议|抓包工具] 导航栏
       */
      {
        text: "网络协议|抓包工具", children: [
          { text: "Http1.1协议", link: "/guide.md" },         /** 指向Http1.1协议起始文章 */
          { text: "WebSocket协议", link: "/guide.md" },       /** 指向WebSocket协议起始文章 */
          { text: "Http2协议", link: "/guide.md" },           /** 指向Http2协议起始文章 */
          { text: "TLS/SSL协议", link: "/guide.md" },         /** 指向SSL协议起始文章 */
          { text: "TCP协议", link: "/guide.md" },             /** 指向TCP协议起始文章 */
          { text: "UDP协议", link: "/guide.md" },             /** 指向UDP协议起始文章 */
          { text: "IP协议", link: "/guide.md" },              /** 指向IP协议起始文章 */
        ]
      },

      /**
       * [Docker容器化] 导航栏
       */
      {
        text: "Docker容器化", children: [
          { text: "容器进程管理", link: "/guide.md" },              /** 指向容器进程管理起始文章 */
          { text: "容器内存管理", link: "/guide.md" },              /** 指向容器内存管理起始文章 */
          { text: "容器存储管理", link: "/guide.md" },              /** 指向容器存储管理起始文章 */
        ]
      },

      /**
       * [代码管理|依赖管理] 导航栏
       */
      {
        text: "代码管理|依赖管理", children: [
          { text: "Git常用功能", link: "/guide.md" },                 /** 指向Git常用功能起始文章 */
          { text: "分支管理模式", link: "/guide.md" },                 /** 指向分支管理模式起始文章 */
          { text: "Maven依赖管理", link: "/guide.md" },               /** 指向分支管理模式起始文章 */
          { text: "GitHub常用功能", link: "/guide.md" },              /** 指向分支管理模式起始文章 */
          { text: "常用开源工具", link: "/guide.md" },              /** 指向常用工具起始文章 */
        ]
      },
    ]
  },
]);
