---
title: Nacos配置中心核心原理
prev:
  text: 基于Nacos的配置中心实现
  link: /microservice/config/基于Nacos的配置中心实现.md
next:
  text: Sentinel文章衔接
  link: /microservice/sentinel/todo.md
---
::: info
&#8195;&#8195;Nacos Config针对配置管理提供了4种操作：
- 获取配置：从Nacos Config Server中读取配置
- 监听配置：订阅感兴趣的配置，当配置发生时监听到对应的事件
- 发布配置：将配置保存到Nacos Config Server中
- 删除配置：删除配置中心的指定配置

&#8195;&#8195;我们对Nacos Config的学习也是围绕上述的核心操作进行的，上述4个操作也提供了对应的SDK和Open API。
:::
[[toc]]
***

## 配置的CURD
![Nacos配置中心整体流程](/images/microservice/config/Nacos配置中心整体流程.png)

&#8195;&#8195;对于Nacos Config来说，其实就是通过Server端提供了配置的集中式管理功能，然后对外提供CURD的访问接口完成配置的基本操作。

&#8195;&#8195;如上图所示，对于服务端而言，所涉及到的功能就是配置信息如何存储，是否需要持久化，如何读取，如何监听等；对于客户端而言，就是通过接口查询服务端的对应数据而已。

## 配置信息的动态监听
&#8195;&#8195;在[实现Nacos配置中心](基于Nacos的配置中心实现.md)时我们提到可以通过refresh=true实现配置实时刷新功能。那么当Server端的配置发生变化时，需要让相关的应用程序感知配置的变化，这就需要Client端针对感兴趣的配置进行监听。

### Pull和Push的区别
&#8195;&#8195;一般来说，客户端和服务端之间的数据交互无非就是两种方式，Pull和Push，这两种方式没有优劣，但是要区分场景：
- Pull表示客户端主动从服务端拉取数据。
- Push表示服务端制动把数据推送给客户端。

&#8195;&#8195;Push模式下，服务端需要与客户端维持长连接，如果客户端的数量比较多，那么服务端就要消费大量的内存资源保存每个连接，并且为了检测连接的有效性，还需要心跳机制进行维持。

&#8195;&#8195;在Pull模式下，客户端需要定时从服务端拉取数据，由于定时任务存在一定的时间间隔，所以不能保证数据的实时性。并且在服务端配置长时间不更新的情况下，客户端会有一些无效的Pull操作。

### Nacos Config的长轮询机制
&#8195;&#8195;Nacos Config采用的整体上是一种Pull模式，但却是种采用了**长轮询机制的Pull模式**，即客户端采用长轮询的方式定时发起Pull请求。

&#8195;&#8195;所谓长轮询的Pull方式，就是Client发起Pull请求后，如果Server端的配置发生了更新，那么立刻返回更新的配置；如果没有发生更新，那么Server会暂时“Hold”这个请求，也就是Server在一定时间内不返回结果，直到配置发生变化或者超过“Hold”的时间(默认30s)。

![Nacos长轮询机制](/images/microservice/config/Nacos长轮询机制.png)

&#8195;&#8195;如上图所示，Nacos的Server端收到请求之后，首先检查配置是否发生了变化，如果没有，则设置一个定时任务，延期29.5s，并且把当前客户端长轮询链接加入到allSubs队列。这个时候有两种方式出发连接返回结果：
- **超过延迟时间**：29.5s后触发自动检查机制，不管配置是否发生变化，都会把结果返回给客户端。这种情况下29.5s的延迟只是为了保存长连接。
- **配置更新事件**：在延迟的任意时刻，不管是通过Dashboard还是API的方式对配置进行了修改，监听到该事件的任务都会遍历allSubs队列，找到会发生变更的配置项对应的ClientLongPolling任务，将变更的配置通过其保存的连接进行返回。

## Client端配置加载过程
&#8195;&#8195;在Spring Cloud中，要实现统一配置管理并且动态的刷新配置，需要解决两个问题：
- 如何将远程服务器上的配置加载到Environment。
- 配置变更时，如何将新的配置更新到Environment。

&#8195;&#8195;要解决以上两个问题，首先要明白SpringBoot如何加载本地的配置文件。

### SpringBoot加载本地配置文件过程

![加载配置文件](/images/microservice/config/加载配置文件.png)

&#8195;&#8195;与Nacos配置中心相关的SpringBoot启动流程，大致是上图4步：
- **加载环境变量**：通过prepareEnvironment()方法，加载环境变量时会加载bootstrap.yml和application.yml
- **加载上下文**：通过prepareContext()方法加载上下文，加载上下文时通过Spring的SPI通过SpringFactoriesLoader加载ApplicationContextInitializer，以此机制实现对Server端配置的加载。
- **事件监听**：通过发布事件，通过Spring的事件监听机制实现长轮询以动态更新配置。

&#8195;&#8195;SpringBoot提供了PropertySourceLoader接口用来实现对本地配置文件的加载，常用的实现类包括YamlPropertySourceLoader和PropertiesPropertySourceLoader，用于加载yml文件和properties文件。

&#8195;&#8195;通过其实现可知，会**先加载bootstrap.yml然后加载application.yml**。

###  Client端配置动态加载
&#8195;&#8195;上面我们看到了加载本地配置文件的时机和顺序，下面我们介绍如何在Client端实现动态加载配置的时机。

&#8195;&#8195;与本地配置文件不同的是，**Client端启动时Server端的配置文件加载是在加载上下文时实现的**，如下图所示：

![加载上下文](/images/microservice/config/加载上下文.png)

在上下文加载中，有几个重要的接口和类：
- **ApplicationContextInitializer**：在加载上下文的方法中，会执行容器中的ApplicationContextInitializer，**它的作用是在应用程序上下文初始化时，做一些额外的操作，这也是Spring的扩展点之一，在ConfigurationApplicationContext#refresh()调用之前被回调**。在这里会通过SPI机制回调其实现类PropertySourceBootstrapConfiguration完成配置文件加载。
- **PropertySourceLocator**：**这个接口主要作用是实现应用外部化配置的可动态加载**，Nacos Config的Client端SDK就是通过实现这个接口完成读取配置的。
- **NacosPropertySourceLocator**：Nacos的实现类，locate()方法主要实现了两个功能：
  - **初始化ConfigService对象，这是Nacos Client端访问Server的基本操作类。**
  - **按照顺序加载共享配置->扩展配置->应用名对应配置。**
- **NacosConfigService**：客户端的长轮询定时任务就是NacosFactory.createConfigService构建此类时创建的。**其内部主要是与远程调用相关(HttpClient)的实现和长轮询的实现(ClientWork)**。
- **ClientWork**：有两个定时调度的线程池并且启动一个定时任务。
  - 一个线程池每个10s检查一次配置信息
  - 第二个线程池用于定时长轮询
- LongPollingRunnable：顾名思义，长轮询线程，主要完成本地配置检查、建立长轮询获取服务端配置更新、更新配置保存到本地文件

## Server端长轮询机制

### OpenAPI接口
&#8195;&#8195;在Server端实现了一个**\/lisatener接口**，是客户端发起监听的调用接口，这是整个请求的入口：
- 获取客户端可能要监听的配置，计算MD5
- 执行长轮询请求

&#8195;&#8195;接口内核心的方法是inner.doPollingConfig，如果是长轮询请求，addLongPollingClient，其逻辑如下：
- 获取客户端请求超时时间，减去500ms赋值给timeout
- 判断isFixedPolling，如果是true，定时任务在30s后执行；否则在29.5s后执行
- 利用服务端数据与MD5对比，发生变化则返回
- 定时任务线程池执行ClientLongPolling线程

### ClientLongPolling线程
&#8195;&#8195;**ClientLongPolling线程是具体长轮询的执行线程**：
- 现成被定时任务线程池启动，延迟时间29.5s
- 将ClientLongPolling添加到allSubs队列中，这个队列主要维护一个长轮询的订阅关系
- 定时任务执行后，从allSubs中移除本实例
- 通过MD5比对配置信息是否变化，并将结果返回客户端

### LongPollingService事件
&#8195;&#8195;**LongPollingService是AbstractEventListener的实现，通过onEvent方法监听LocalDataChangeEvent事件的发生**，其主要逻辑如下：
- 遍历allSubs中的客户端长轮询请求
- 比较每个长轮询请求中携带的groupKey，如果配置一样则返回给客户端。

## 附录：源码流程图
![Nacos配置中心源码分析](/images/microservice/config/Nacos配置中心源码分析.jpg)
***
参考
- Spring Cloud Alibaba 微服务原理与实战[谭峰(mic)]. 中国工信出版社,电子工业出版社