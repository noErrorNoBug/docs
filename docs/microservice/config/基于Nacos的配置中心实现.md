---
title: 基于Nacos的配置中心实现
next:
  text: Java注解机制
  link: /java/basic/Java注解机制.md
---
::: info
&#8195;&#8195;开源配置中心的方案有很多，比如Zookeeper、Spring Cloud Config等。无论哪种方案，其核心原理和目的都是一样的。Nacos通过Config Service实现了对配置的CURD、版本管理、灰度管理、监听管理、推送轨迹、聚合数据等功能。
:::
[[toc]]
***

## 快速开始
&#8195;&#8195;Spring Cloud Alibaba Nacos Config不同于Spring Cloud Config，外部化配置集合了ConfigService和ConfigClient两部分，因此只需要一个依赖即可。
&#8195;&#8195;此外，2.4版本以上的SpringCloud不会再主动读取bootstrap.yml中的配置，因此需要引入相关依赖。
```xml 
<!-- nacos 配置中心 -->
<dependency>
    <groupId>com.alibaba.cloud</groupId>
    <artifactId>spring-cloud-starter-alibaba-nacos-config</artifactId>
</dependency>

<!-- 读取bootstrap.yml 配置文件-->
<dependency>
    <groupId>org.springframework.cloud</groupId>
    <artifactId>spring-cloud-starter-bootstrap</artifactId>
</dependency>
```
&#8195;&#8195;对于其配置的高级功能下个章节详细展开，这里使用最简单的配置作为快速开始。
``` yml
# bootstrap.yml
spring:
  application:
    name: config
  cloud:
    nacos:
      discovery:
        server-addr: 127.0.0.1:8848
        namespace: public
        group: DEFAULT_GROUP
      config:
        server-addr: 127.0.0.1:8848
        namespace: public
        group: DEFAULT_GROUP
        file-extension: yaml
        prefix: config

text: "测试输出本地配置"
```
&#8195;&#8195;通过以下一个简单的SpringBoot程序输出配置：
``` java
@SpringBootApplication
public class Application {
    public static void main(String[] args) throws InterruptedException {
        ConfigurableApplicationContext context = SpringApplication.run(Application.class);
        while (true) {
            String text = context.getEnvironment().getProperty("text");
            System.out.println("text_"+text);
            Thread.sleep(2000);
        }
    }
}
```

&#8195;&#8195;此时启动项目我们可以得到输出结果为 “测试输出本地配置”。下面我们在配置中心中添加配置，如下图所示：
![配置中心快速开始](/images/microservice/config/配置中心快速开始.png)
&#8195;&#8195;此时我们可以得到输出“输出配置中心配置”。至此一个简单的动态更新配置的demo就算完成了。

## 外部化配置
&#8195;&#8195;使用配置中心的主要目的，就是为了微服务架构中简化微服务配置文件的目的，通过Nacos Config Service提供的多种配置，可以通过外部化配置文件做到简化微服务配置的目的。
&#8195;&#8195;需要注意的是，配置中心的相关配置是需要放在bootstrap.yml文件中的。SpringBoot中有两种上下文配置，一种是bootstrap，一种是application。其中**bootstrap是应用程序的父上下文，优先于application进行加载**(也就意味着application会覆盖bootstrap)。在加载远程配置之前，需要读取Nacos配置中心的服务地址信息，所以Nacos的服务地址需要发在bootstrap进行优先加载。
&#8195;&#8195;对于外部化配置的使用，首先需要在NacosConfigServer上按照指定的DataID、Namespace、Group进行配置；其次需要client在bootstrap中进行声明。
### 基于DataID配置
&#8195;&#8195;当我们的client端从Nacos Config Server中加载配置时，会匹配Server端的DataID，也就是上图中我们需要填写的"config.yml"一栏。在Nacos的实现中，默认的DataID的实现为：
```yml
#{前缀}-{多环境支持}.{扩展名}
${prefix}-${spring.profile.active}.${file-extension}
```
- 在默认情况下，如果不指定prefix，那么就会读取{spring.application.name}.properties的配置。
- 如果明确指定了prefix，那么会读取配置的名称。

&#8195;&#8195;对于client端对远程加载配置的前缀的指定和后缀指定，在bootstrap.yml中对应的属性如下：
```yml
spring:
  cloud:
    nacos:
      config:
        prefix: config
        file-extension: yaml
```

### 多环境配置
&#8195;&#8195;在SpringBoot中，可以基于spring.profiles.active实现不同环境下的配置切换，绝大多数公司都会有开发环境、测试环境、预生产环境、生产环境等，不同环境下配置是不一定相同的，所以希望能够通过一个属性方便的指定不同的配置文件。
&#8195;&#8195;SpringBoot的多环境配置如下所示：
- 在resources目录中创建不同的配置文件
```shell
/resources
    - application-dev.properties
    - application-test.properties
    - application-prod.properties
```
- 定义一个application.properties的默认配置，在配置中使用下面的属性置顶当前环境配置。也可以使用虚拟机的启动选项配置环境 VM options=-Dspring.profiles.active=prod。这两种方式的作用是相同的。
``` yml
# application.yml中默认配置
spring:
    profiles:
        active: prod
```

&#8195;&#8195;对于client指定多环境读取的配置，在bootstrap.yml对应如下配置(与上面SpringBoot配置相同，不需要额外的配置)：
```yml
spring:
  profiles:
    active: prod  
```

### 环境隔离(Namespace和Group)
&#8195;&#8195;Nacos的数据模型是由三元组来唯一确定的，这一点与注册中心也是一样的，即Namespace、Group、service/DataId组成。
&#8195;&#8195;Namespace实现多环境或者多租户的数据隔离，在不同的Namespace下可以存在相同的Group或者DataID。Group用来实现DataID的分组控制机制，实现不同Group和DataID的隔离，比如用于区分同一个环境下的不同业务的划分，如秒杀业务、订单业务、用户业务指定为不同的组，同在开发环境(相同的Namespace)下的业务区分。
&#8195;&#8195;三元数据通过如下方式指定：
- **Namespace**：server端需要通过server端的API或者在控制台创建(新版本nacos可以自己指定，不再随机生成)。client端通过bootstrap.yml中的属性指定挂载哪个命名空间下：
```yml 
spring:
  cloud:
    nacos:
      config:
        namespace: mall-local-dev
```
- **Group**：server端需要在控制台创建具体配置时声明Group。client端通过bootstrap。yml中的属性指定：
```yml
spring:
  cloud:
    nacos:
      config:
        group: member
```
- **DataID**：具体创建在前面章节已经说明。

### 默认配置和扩展配置
&#8195;&#8195;Nacos的扩展配置的核心作用是支持一个应用可以读取多个配置文件，解决多个应用配置共享的问题。比如在实际的场景中，我们更倾向于将日志、Redis、注册中心、Kafka等等一系列的比较通用的配置单独提取出来，作为默认配置在同一个组或者同一个环境下使用，而开发者只需要关注自己的服务独有的配置就可以。
&#8195;&#8195;自定义扩展的DataID配置通过如下两种属性进行配置：
```yml
spring:
  cloud:
    nacos:
      config:
        sharedConfigs[0]:
          dataId: common.yml
          group: DEFAULT_GROUP
          refresh: false
        extensionConfigs[0]:
          dataId: redis.yml
          group: DEFAULT_GROUP
          refresh: true
```
&#8195;&#8195;我们可以看到，sharedConfigs,extension-configs 是两个个数组，前者表示共用的配置，后者表示需要额外拼接的配置，当数组下标n越大时，优先级越高，越早被加载，可以配置多组扩展配置，其中每一项的含义是这样的：
- dataId：指定需要加载的Nacos Config的DataID，这里需要带扩展名，因为指定的是一个具体的文件
- group：指定需要加载的DataID所属Group
- refresh：指定配置更新时是否动态刷新，默认false不刷新

### @RefreshScope
&#8195;&#8195;此注解可以使得业务类中读取上下文中元数据时获得刷新，即修改配置中心的配置发布，使用@Value注解读取的元数据会得到刷新，对于某些场景还是比较实用的：
```java 
@RestController
@RefreshScope 
publicclassTestController {
    @Value("name:zhangsan")
    private String name;

    @GetMapping("/name")
    public String getName() {
        return name;
    }
}

```

## 总结：基于Nacos的配置方案
&#8195;&#8195;我们将上述不同作用的client的bootstrap.yml配置文件合并到一处，如下所示:
```yml
spring:
  application:
    name: config
  profiles:
    active: prod  
  cloud:
    nacos:
      config:
        server-addr: 127.0.0.1:8848
        namespace: public
        group: DEFAULT_GROUP
        file-extension: yaml
        prefix: config
        extensionConfigs[0]:
          dataId: kafka.yml
          group: DEFAULT_GROUP
          refresh: true
        extensionConfigs[1]:
          dataId: redis.yml
          group: DEFAULT_GROUP
          refresh: true
        extensionConfigs[2]:
          dataId: common.yml
          group: DEFAULT_GROUP
          refresh: false
```
&#8195;&#8195;结合上述通过Nacos Config Server对于三元数据的配置，我们可以总结出一套一般适用的配置方案：
- 环境控制：通过Namespace进行环境隔离，以此区分开发、测试、生产等环境。
- 业务隔离：通过Group对不同的业务集群进行分组，以此进行业务的垂直隔离。
- 配置扩展：不同环境下的公有配置进行提取，这些配置基本固定，通过配置扩展来默认加载这些配置。
  - 扩展文件加载顺序：DataId精准匹配 > 不带环境的DataID匹配 > 扩展 > 通用共享


