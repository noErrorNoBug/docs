---
title: 基于AP架构下的Nacos服务注册和服务发现原理
prev:
  text: SpringSecurity实现OOS
  link: /microservice/auth/SpringSecurity实现OOS.md
next:
  text: 基于CP架构下的Nacos服务注册和服务发现原理
  link: /microservice/register/基于CP架构下的Nacos服务注册和服务发现原理.md
---
::: info
&#8195;&#8195;Nacos注册中心提供了很多关键的特性，如**服务发现和服务健康检测、动态配置服务、动态DNS、服务和元数据管理**。服务发现、服务注册和服务健康检测是作为注册中心最核心的功能。

&#8195;&#8195;除以上功能外，作为注册中心集群，也具备正常分布式集群的特性。

&#8195;&#8195;本文根据源码实现说明Nacos如何实现[AP架构](../../methodology/distribution/CAP定理和BASE理论.md)的注册中心。
:::
[[toc]]

***
## Nacos概述

### 组件和功能

![Nacos架构](/images/microservice/register/Nacos架构.png)

* Name Server：通过VIP（Virtual IP）或者DNS方式实现Nacos的高可用路由。
* Nacos Server：Nacos的服务提供者。
    * OpenAPI：服务注册发现的OpenAPI入口。
    * Config Service：配置中心服务模块。
    * Naming Service：命名中心服务模块。
    * Consistency Protocol：一致性协议实现模块，采用的Raft算法。
    * Nacos Core：Nacos核心模块。
* Nacos Console：Nacos控制台。

### 服务发现和注册整体流程

![服务注册与发现原理](/images/microservice/register/服务注册与发现原理.png)

&#8195;&#8195;服务注册和发现的流程如上图所示：

1. 首先服务提供者实例通过调用Open API发起服务注册。
2. 服务提供方实例通过Open API与Nacos Server建立心跳机制，检测服务状态。
3. 服务消费者通过Open API从Nacos Server拉取服务提供方列表。
4. 服务消费者会有定时任务每隔10s从Nacos Server更新一次列表数据。
5. 如果Nacos Server检测到服务提供者异常，会基于UDP协议推送更新。
6. 服务消费者通过列表与服务提供者进行通讯。

## 服务发现和注册原理

### Client端发起服务注册


#### Client端发起注册流程
![Client端服务注册流程图](/images/microservice/register/Client端服务注册流程图.png)


&#8195;&#8195;Client端的服务注册可以抽象为这么几个过程：

1. **通过自动装配初始化服务注册需要的Bean。**
2. **实现Spring的事件监听机制，通过事件监听进行服务注册。**
    * **在Spring Cloud原生生态中，通过实现ApplicationListener来监听WebServerInitializedEvent（WebServer初始化后），之后通过调用this.bind(event)方法，实现对NacosServiceRegistry.register的调用。**
    * **在Dubbo的生态中，监听ApplicationStartedEvent事件（刷新上下文之后，调用application命令之前触发），然后最终实现对NacosServiceRegistry.register的调用。**
3. **服务注册共完成两个任务：**
    * **通过定时任务实现心跳健康状态发送。**
    * **封装OpenAPI调用，向Server发送注册信息。**

#### Spring Cloud生态下发起注册的时机

&#8195;&#8195;**Nacos通过自动装配实现事件监听的方式实现SpringCloud的集成。其中AutoServiceRegistrationAutoConfiguration类就是服务注册相关的配置类**，其代码如下：

```java
@Configuration(
    proxyBeanMethods = false
)
@Import({AutoServiceRegistrationConfiguration.class})
@ConditionalOnProperty(
    value = {"spring.cloud.service-registry.auto-registration.enabled"},
    matchIfMissing = true
)
public class AutoServiceRegistrationAutoConfiguration {
    @Autowired(
        required = false
    )
    private AutoServiceRegistration autoServiceRegistration;
    @Autowired
    private AutoServiceRegistrationProperties properties;
    public AutoServiceRegistrationAutoConfiguration() {
    }
    @PostConstruct
    protected void init() {
        if (this.autoServiceRegistration == null && this.properties.isFailFast()) {
            throw new IllegalStateException("Auto Service Registration has been requested, but there is no AutoServiceRegistration bean");
        }
    }
}
```

&#8195;&#8195;**配置类中注入了一个AutoServiceRegistration类**，该类的类关系图如下：

![继承关系](/images/microservice/register/继承关系.png)

* AutoServiceRegistration：服务自动注册
* ApplicationListener：事件监听
* AbstractAutoServiceRegistration：服务注册的抽象类。
**服务注册通过实现ApplicationListener来实现Spring的监听机制**，其主要的抽象方法为:

```java
@FunctionalInterface
public interface ApplicationListener<E extends ApplicationEvent> extends EventListener {
    void onApplicationEvent(E var1);
}
```
&#8195;&#8195;AbstractAutoServiceRegistration实现了事件监听的具体逻辑，主要**注册监听了WebServerInitializedEvent事件（WebServer初始化完成后），调用了this.bind(event)方法**：
```java
public void onApplicationEvent(WebServerInitializedEvent event) {
    this.bind(event);
}
```

&#8195;&#8195;继续跟进，发现**最终调用了NacosServiceRegistry.register方法进行服务注册**。

```java
protected void register() {
    this.serviceRegistry.register(this.getRegistration());
}
```

#### Dubbo生态下发起服务注册的时机：

&#8195;&#8195;在Dubbo的自动装配中，使用DubboLoadBalancedRestTemplateAutoConfiguration进行自动配置，这个类中，有一个@EventListener({ApplicationStartedEvent.class})事件的监听，它会**监听ApplicationStartedEvent事件（刷新上下文之后，调用application命令之前触发）**

```java
@EventListener({ApplicationStartedEvent.class})
public void adaptRestTemplates() {
    DubboTransportedAttributesResolver attributesResolver = new DubboTransportedAttributesResolver(this.environment);
    Iterator var2 = this.restTemplates.entrySet().iterator();
    while(var2.hasNext()) {
        Entry<String, RestTemplate> entry = (Entry)var2.next();
        String beanName = (String)entry.getKey();
        Map<String, Object> dubboTranslatedAttributes = this.getDubboTranslatedAttributes(beanName, attributesResolver);
        if (!CollectionUtils.isEmpty(dubboTranslatedAttributes)) {
            this.adaptRestTemplate((RestTemplate)entry.getValue(), dubboTranslatedAttributes);
        }
    }
}
```

&#8195;&#8195;同样的收到事件的通知后，也是最终低啊用NacosServiceRegistry类中的register方法实现服务的注册。

#### Spring监听事件调用服务注册的方法
&#8195;&#8195;**SpringCloud提供了一个接口ServiceRegistry用来提供服务注册的标准，所有集成到SpringCloud的服务注册组件，都需要实现这个接口来提供服务注册功能**：

```java
public interface ServiceRegistry<R extends Registration> {
    void register(R registration);
    void deregister(R registration);
    void close();
    void setStatus(R registration, String status);
    <T> T getStatus(R registration);
}
```

&#8195;&#8195;**NacosServiceRegistry类**就是对ServiceRegistry的实现类，**在其内部实现了服务注册、心跳健康监听发送等功能**。

&#8195;&#8195;**NacosServiceRegistry#registry()方法是实现服务注册的主要方法，方法中调用了NacosClient SDK中的namingService#registerInstance()方法实现服务注册**：

```java
public void register(Registration registration) {
    if (StringUtils.isEmpty(registration.getServiceId())) {
        log.warn("No service to register for nacos client...");
    } else {
        String serviceId = registration.getServiceId();
        String group = this.nacosDiscoveryProperties.getGroup();
        Instance instance = this.getNacosInstanceFromRegistration(registration);
        try {
            // 服务注册，需要传入serviceId、group、instance等服务注册需要的主要信息。
            this.namingService.registerInstance(serviceId, group, instance);
            log.info("nacos registry, {} {} {}:{} register finished", new Object[]{group, serviceId, instance.getIp(), instance.getPort()});
        } catch (Exception var6) {
            log.error("nacos registry, {} register failed...{},", new Object[]{serviceId, registration.toString(), var6});
        }
    }
}
```

&#8195;&#8195;**namingService#registerInstance()方法主要逻辑如下：**

* **beatReactor.addBeatInfo：创建心跳信息实现健康检测。**
* **serverProxy.registerService：实现服务注册**
```java
public void registerInstance(String serviceName, String groupName, Instance instance) throws NacosException {
    if (instance.isEphemeral()) {
        BeatInfo beatInfo = new BeatInfo();
        beatInfo.setServiceName(NamingUtils.getGroupedName(serviceName, groupName));
        beatInfo.setIp(instance.getIp());
        beatInfo.setPort(instance.getPort());
        beatInfo.setCluster(instance.getClusterName());
        beatInfo.setWeight(instance.getWeight());
        beatInfo.setMetadata(instance.getMetadata());
        beatInfo.setScheduled(false);
        beatInfo.setPeriod(instance.getInstanceHeartBeatInterval());
        // 心跳健康检测
        this.beatReactor.addBeatInfo(NamingUtils.getGroupedName(serviceName, groupName), beatInfo);
    }
    // 服务注册
    this.serverProxy.registerService(NamingUtils.getGroupedName(serviceName, groupName), groupName, instance);
}
```

#### 注册心跳
&#8195;&#8195;**心跳机制的实现如下代码所示，client通过一个定时任务线程池schedule定时向服务端发送心跳数据包，然后启动一个线程不断检测服务端的回应，如果在设定时间内没有收到服务端的回应就认为服务端故障**。

```java
public void addBeatInfo(String serviceName, BeatInfo beatInfo) {
    LogUtils.NAMING_LOGGER.info("[BEAT] adding beat: {} to beat map.", beatInfo);
    String key = this.buildKey(serviceName, beatInfo.getIp(), beatInfo.getPort());
    BeatInfo existBeat = null;
    if ((existBeat = (BeatInfo)this.dom2Beat.remove(key)) != null) {
        existBeat.setStopped(true);
    }
    this.dom2Beat.put(key, beatInfo);
    // 创建定时任务不断发送数据包
    this.executorService.schedule(new BeatReactor.BeatTask(beatInfo), beatInfo.getPeriod(), TimeUnit.MILLISECONDS);
    // 创建一个新的线程监视服务端返回
    MetricsMonitor.getDom2BeatSizeMonitor().set((double)this.dom2Beat.size());
}
```
#### 发送服务注册信息

&#8195;&#8195;Nacos的Server端是通过Open API的形式实现服务注册与发现的，对于Client端的SDK一样，就是封装了一个固定的对OpenAPI的调用，然后发送到服务端

```java
public void registerService(String serviceName, String groupName, Instance instance) throws NacosException {
    LogUtils.NAMING_LOGGER.info("[REGISTER-SERVICE] {} registering service {} with instance: {}", new Object[]{this.namespaceId, serviceName, instance});
    Map<String, String> params = new HashMap(9);
    params.put("namespaceId", this.namespaceId);
    params.put("serviceName", serviceName);
    params.put("groupName", groupName);
    params.put("clusterName", instance.getClusterName());
    params.put("ip", instance.getIp());
    params.put("port", String.valueOf(instance.getPort()));
    params.put("weight", String.valueOf(instance.getWeight()));
    params.put("enable", String.valueOf(instance.isEnabled()));
    params.put("healthy", String.valueOf(instance.isHealthy()));
    params.put("ephemeral", String.valueOf(instance.isEphemeral()));
    params.put("metadata", JSON.toJSONString(instance.getMetadata()));
    this.reqAPI(UtilAndComs.NACOS_URL_INSTANCE, params, "POST");
}
```

### Server端注册微服务
#### 注册流程
![Server端服务注册流程](/images/microservice/register/Server端服务注册流程.png)

#### OpenAPI接口

&#8195;&#8195;服务端服务注册的Open API实现接口在**InstanceController类**(naming实例)中，需要获取到服务、实例的相关参数，然后**调用registerInstance注册实例**。

```java
@CanDistro
@PostMapping
@Secured(parser = NamingResourceParser.class, action = ActionTypes.WRITE)
public String register(HttpServletRequest request) throws Exception {
    
    final String namespaceId = WebUtils
            .optional(request, CommonParams.NAMESPACE_ID, Constants.DEFAULT_NAMESPACE_ID);
    final String serviceName = WebUtils.required(request, CommonParams.SERVICE_NAME);
    NamingUtils.checkServiceNameFormat(serviceName);
    
    final Instance instance = parseInstance(request);
    
    serviceManager.registerInstance(namespaceId, serviceName, instance);
    return "ok";
}
```

#### 命名空间领域模型

![命名空间领域模型](/images/microservice/register/命名空间领域模型.png)

* Namespace：命名空间实现不同环境之间的隔离，如开发环境、测试环境、生产环境，不同的命名空间之间是完全隔离的。
* Group：分组，可以把不同的微服务划分到同一个分组，方便项目组之间的管理。
* Service：微服务，或者叫服务提供方。
* Cluster：微服务的集群。
* Instance：具体的微服务实例。
以下来举例

![命名空间例子](/images/microservice/register/命名空间例子.png)

#### 注册表数据结构

&#8195;&#8195;服务注册表的数据结构就是根据上述领域模型进行建模的，**整体是由一个ConcurrentHashMap组成**。

```java
/**
 * Map(namespace, Map(group::serviceName, Service)).
 */
private final Map<String, Map<String, Service>> serviceMap = new ConcurrentHashMap<>();
```

每一个领域层级的数据结构都是通过Map和实例的嵌套组成，具体结构如下图：

![服务注册表](/images/microservice/register/服务注册表.png)


#### 服务注册流程

&#8195;&#8195;在实际服务注册过程中需要完成以下三个步骤：

* **初始化服务列表**：初始化一个空的ConcurrentHashMap集合作为serviceMap，用于存储服务实例。
* **获取服务实例**：从serviceMap中根据namespaceId和serviceName得到一个服务对象。
* **添加服务实例**：调用addInstance添加服务实例
```java
public void registerInstance(String namespaceId, String serviceName, Instance instance) throws NacosException {
    // 初始化服务集合
    createEmptyService(namespaceId, serviceName, instance.isEphemeral());
    // 获取指定服务
    Service service = getService(namespaceId, serviceName);
    
    if (service == null) {
        throw new NacosException(NacosException.INVALID_PARAM,
                "service not found, namespace: " + namespaceId + ", service: " + serviceName);
    }
    // 添加实例
    addInstance(namespaceId, serviceName, instance.isEphemeral(), instance);
}
```


&#8195;&#8195;**服务列表初始化**最终调用了createServiceIfAbsent()方法，主要实现了两个功能：

* **从服务列表中获取实例**
* **如果实例为空，则创建和初始化实例**
```java
public void createServiceIfAbsent(String namespaceId, String serviceName, boolean local, Cluster cluster)
        throws NacosException {
    // 获取实例
    Service service = getService(namespaceId, serviceName);
    // 创建和初始化实例
    if (service == null) {
        
        Loggers.SRV_LOG.info("creating empty service {}:{}", namespaceId, serviceName);
        service = new Service();
        service.setName(serviceName);
        service.setNamespaceId(namespaceId);
        service.setGroupName(NamingUtils.getGroupName(serviceName));
        // now validate the service. if failed, exception will be thrown
        service.setLastModifiedMillis(System.currentTimeMillis());
        service.recalculateChecksum();
        if (cluster != null) {
            cluster.setService(service);
            service.getClusterMap().put(cluster.getName(), cluster);
        }
        service.validate();
        
        putServiceAndInit(service);
        if (!local) {
            addOrReplaceService(service);
        }
    }
}
```

&#8195;&#8195;对于创建和初始化的逻辑，主要有3个功能：

* **将实例存入服务列表**：存入ConcurrentHashMap，这里面的put为了保证单例使用了双重检测保证线程安全。
* **建立心跳检测机制**：service.init()，通过定时任务不断检测当前服务所有实例发送心跳包的时间，如果超时就将healty设置为false，并且发送服务变更事件。
* **实现该实例的数据一致性监听**：consistencyService.listen
```java
private void putServiceAndInit(Service service) throws NacosException {
    // 将服务存入服务注册表
    putService(service);
    // 初始化服务
    service.init();
    // 数据一致性监听
    consistencyService
            .listen(KeyBuilder.buildInstanceListKey(service.getNamespaceId(), service.getName(), true), service);
    consistencyService
            .listen(KeyBuilder.buildInstanceListKey(service.getNamespaceId(), service.getName(), false), service);
    Loggers.SRV_LOG.info("[NEW-SERVICE] {}", service.toJson());
}
```


&#8195;&#8195;**将服务存入注册表使用的是双重检查，以保证多线程操作的安全性**。

```java
public void putService(Service service) {
    if (!serviceMap.containsKey(service.getNamespaceId())) {
        synchronized (putServiceLock) {
            if (!serviceMap.containsKey(service.getNamespaceId())) {
                serviceMap.put(service.getNamespaceId(), new ConcurrentSkipListMap<>());
            }
        }
    }
    serviceMap.get(service.getNamespaceId()).put(service.getName(), service);
}
```


&#8195;&#8195;服务初始化主要是启动两个定时线程：心跳检测线程和健康检测线程

* **心跳检测任务**：**延迟5s，定时5s**。
    1. 获取Server的所有实例
    2. 检查是否超时：当前时间-上次心跳时间 > **超时时间（默认15s）**
    3. 将实例的Heathy状态设置为false
    4. 发布一个心跳超时的事件
    5. 删除宕机的实例
```java
public void run() {
    try {
        //省略非核心代码
        // 获取所有实例
        List<Instance> instances = service.allIPs(true);
        
        // 检测心跳是否健康
        for (Instance instance : instances) {
           //判断逻辑
            if (System.currentTimeMillis() - instance.getLastBeat() > instance.getInstanceHeartBeatTimeOut()) {
                if (!instance.isMarked()) {
                    if (instance.isHealthy()) {
                        // 设置为不健康
                        instance.setHealthy(false);
                        Loggers.EVT_LOG
                                .info("{POS} {IP-DISABLED} valid: {}:{}@{}@{}, region: {}, msg: client timeout after {}, last beat: {}",
                                        instance.getIp(), instance.getPort(), instance.getClusterName(),
                                        service.getName(), UtilsAndCommons.LOCALHOST_SITE,
                                        instance.getInstanceHeartBeatTimeOut(), instance.getLastBeat());
                        getPushService().serviceChanged(service);
                        // 发布事件
                        ApplicationUtils.publishEvent(new InstanceHeartbeatTimeoutEvent(this, instance));
                    }
                }
            }
        }

        
        // 删除宕机的实例
        for (Instance instance : instances) {
            
            if (instance.isMarked()) {
                continue;
            }
            
            if (System.currentTimeMillis() - instance.getLastBeat() > instance.getIpDeleteTimeout()) {
                // delete instance
                Loggers.SRV_LOG.info("[AUTO-DELETE-IP] service: {}, ip: {}", service.getName(),
                        JacksonUtils.toJson(instance));
                deleteIp(instance);
            }
        }
        
    } catch (Exception e) {
        Loggers.SRV_LOG.warn("Exception while processing client beat time out.", e);
    }
    
}
```

#### 注册服务实例（异步任务与内存队列）
&#8195;&#8195;通过异步注册，可以快速的给Client返回结果，不会影响Client的启动时间。

&#8195;&#8195;添加服务实例列表的主要逻辑是对实例列表的构建，由于区分了是否持久化，因此会有两套逻辑。它的**核心是最终的addTask()方法，通过异步的方式添加实例，将实例添加到一个阻塞队列中**。

```java
private BlockingQueue<Pair<String, DataOperation>> tasks = new ArrayBlockingQueue<>(1024 * 1024);
public void addTask(String datumKey, DataOperation action) {
    // 省略其他非核心代码
    // 添加到阻塞队列
    tasks.offer(Pair.with(datumKey, action));
}
```

&#8195;&#8195;**队列中的任务由其他线程异步执行（这个线程通过@PostConstruction 进行初始化的），通过无限的for循环不断的进行注册**，完成真正的实例注册：

```java
@Override
public void run() {
    Loggers.DISTRO.info("distro notifier started");
    
    for (; ; ) {
        try {
            // 获取队列中的任务
            Pair<String, DataOperation> pair = tasks.take();
            // 执行注册
            handle(pair);
        } catch (Throwable e) {
            Loggers.DISTRO.error("[NACOS-DISTRO] Error while handling notifying task", e);
        }
    }
}
private void handle(Pair<String, DataOperation> pair) {
    try {
        String datumKey = pair.getValue0();
        // 操作类型
        DataOperation action = pair.getValue1();
        
        //省略其他逻辑
        
        for (RecordListener listener : listeners.get(datumKey)) {
            count++;
            try {
                // 根据不同的执行策略
                if (action == DataOperation.CHANGE) {
                    listener.onChange(datumKey, dataStore.get(datumKey).value);
                    continue;
                }
                
                if (action == DataOperation.DELETE) {
                    listener.onDelete(datumKey);
                    continue;
                }
            } catch (Throwable e) {
                Loggers.DISTRO.error("[NACOS-DISTRO] error while notifying listener of key: {}", datumKey, e);
            }
        }
    } catch (Throwable e) {
        Loggers.DISTRO.error("[NACOS-DISTRO] Error while handling notifying task", e);
    }
}
```
&#8195;&#8195;真正执行注册的逻辑：
```java
public void updateIps(List<Instance> ips, boolean ephemeral) {
    
    Set<Instance> toUpdateInstances = ephemeral ? ephemeralInstances : persistentInstances;
    
    // 省略其他逻辑
    
    if (ephemeral) {
        // 注册到实例列表
        ephemeralInstances = toUpdateInstances;
    } else {
        persistentInstances = toUpdateInstances;
    }
}
```

#### CopyOnWrite机制防止多节点读写并发冲突

&#8195;&#8195;为了防止注册中心Server出现并发读写的冲突，也就是修改注册表的同时如果有实例拉取注册表，那么会有并发安全问题。**Nacos通过写时复制的原理来防止并发冲突**。**其原理就是复制一份注册列表进行修改，修改完成后赋值到原来的旧的列表，只要保证写的同步安全就可以了。为了充分的利用内存，应该保证复制的数据结构为最小单元，Nacos中复制的单元为实例列表，也就是最小的列表单元了**。

```java
public void updateIps(List<Instance> ips, boolean ephemeral) {
    
    Set<Instance> toUpdateInstances = ephemeral ? ephemeralInstances : persistentInstances;
    // 复制一个副本
    HashMap<String, Instance> oldIpMap = new HashMap<>(toUpdateInstances.size());
    for (Instance ip : toUpdateInstances) {
        oldIpMap.put(ip.getDatumKey(), ip);
    }
    
    // 后续的操作全都是对副本进行操作
    List<Instance> updatedIPs = updatedIps(ips, oldIpMap.values());
    // 省略其他逻辑
    
    // 对老的副本进行比对
    List<Instance> deadIPs = subtract(oldIpMap.values(), ips);
    
    //省略其他逻辑
    
    // 重新赋值
    toUpdateInstances = new HashSet<>(ips);
    
    // 省略其他逻辑
}
```

## 服务健康检测

### Client端心跳机制
![Client端心跳机制](/images/microservice/register/Client端心跳机制.png)

&#8195;&#8195;Client端心跳机制的建立是包含在服务注册的过程中的，在注册过程中会创建延迟任务并且执行BeatTask。

&#8195;&#8195;首先是延迟任务执行，**默认延迟时间是5s**。在注册服务时是第一次执行延迟任务。

```java
public void addBeatInfo(String serviceName, BeatInfo beatInfo) {
    //省略其他逻辑
    this.executorService.schedule(new BeatReactor.BeatTask(beatInfo), beatInfo.getPeriod(), TimeUnit.MILLISECONDS);
    // 省略其他逻辑
    }
    
```

&#8195;&#8195;对于BeatTask而言，除了发送心跳包外，还要自己继续创建延迟线程，以完成循环。
```java
public void run() {
    if (!this.beatInfo.isStopped()) {
        long nextTime = this.beatInfo.getPeriod();
        try {
            // 发送心跳包
            JSONObject result = BeatReactor.this.serverProxy.sendBeat(this.beatInfo, BeatReactor.this.lightBeatEnabled);
            //省略其他逻辑
        } catch (NacosException var11) {
            LogUtils.NAMING_LOGGER.error("[CLIENT-BEAT] failed to send beat: {}, code: {}, msg: {}", new Object[]{JSON.toJSONString(this.beatInfo), var11.getErrCode(), var11.getErrMsg()});
        }
        // 重新创建延迟任务实现循环
        BeatReactor.this.executorService.schedule(BeatReactor.this.new BeatTask(this.beatInfo), nextTime, TimeUnit.MILLISECONDS);
    }
}
```
### Server端检测心跳机制
![Server端心跳机制](/images/microservice/register/Server端心跳机制.png)


&#8195;&#8195;对于server端心跳机制也是在服务注册时触发，创建一个线程池，延迟5s/定时每5s执行，主要是判断是否健康和是否需要下线。

&#8195;&#8195;下线则是调用服务下线的OpenAPI进行下线。


## 服务发现

### Client端服务列表拉取

![Client端拉取服务列表](/images/microservice/register/Client端拉取服务列表.png)

&#8195;&#8195;在Client端的拉取服务列表很简单，本地会缓存一个服务列表，当需要进行调用查找时，先查找本地的服务列表，如果本地服务列表为空，则调用Server端的OpenAPI拉取；否则直接从服务列表中获取。

&#8195;&#8195;获取到服务列表后，插入一个延迟任务（默认1s），延迟更新服务列表。

```java
public ServiceInfo getServiceInfo(String serviceName, String clusters) {
    LogUtils.NAMING_LOGGER.debug("failover-mode: " + this.failoverReactor.isFailoverSwitch());
    String key = ServiceInfo.getKey(serviceName, clusters);
    if (this.failoverReactor.isFailoverSwitch()) {
        return this.failoverReactor.getService(key);
    } else {
        // 从本地服务列表获取Service信息
        ServiceInfo serviceObj = this.getServiceInfo0(serviceName, clusters);
        if (null == serviceObj) {
            serviceObj = new ServiceInfo(serviceName, clusters);
            this.serviceInfoMap.put(serviceObj.getKey(), serviceObj);
            this.updatingMap.put(serviceName, new Object());
            // 如果本地为空则调用远程OpenAPI拉取
            this.updateServiceNow(serviceName, clusters);
            this.updatingMap.remove(serviceName);
        } else if (this.updatingMap.containsKey(serviceName)) {
            synchronized(serviceObj) {
                try {
                    serviceObj.wait(5000L);
                } catch (InterruptedException var8) {
                    LogUtils.NAMING_LOGGER.error("[getServiceInfo] serviceName:" + serviceName + ", clusters:" + clusters, var8);
                }
            }
        }
        // 创建一个延迟任务延迟更新(拉取)
        this.scheduleUpdateIfAbsent(serviceName, clusters);
        return (ServiceInfo)this.serviceInfoMap.get(serviceObj.getKey());
    }
}
```

### Server端服务列表拉取
![Server端拉取服务列表](/images/microservice/register/Server端拉取服务列表.png)

&#8195;&#8195;Server端主要是InstanceController中的list()接口的逻辑，除了参数处理外，主要的逻辑就是从数据结构中取出Instance列表：

```java
public List<Instance> allIPs() {
    List<Instance> allInstances = new ArrayList<>();
    // 取出持久化和非持久化的Instance列表
    allInstances.addAll(persistentInstances);
    allInstances.addAll(ephemeralInstances);
    return allInstances;
}
```

### 服务变动推送
![服务变更推送](/images/microservice/register/服务变更推送.png)

&#8195;&#8195;服务变动推送是在服务注册的流程中触发的，服务注册是通过阻塞队列多线程异步进行的，**异步线程在更新实例列表的同时会发布一个ServiceChangedEvent，服务订阅该事件，通过UDP的方式进行发送**。**UDP的端口则是Client调用/instance/list时携带过来的**。

&#8195;&#8195;采用异步事件订阅+UDP进行变更推送性能会比较不错，相比Zookeeper来说，长时间心跳维持TCP长连接非常消耗性能，UDP就不用担心。对于UDP的缺点就是丢包，Nacos也设置了重试机制，重试一定次数后就不再进行发送。由于有Client端定时拉取手段作为兜底，即便主动推送的能力被削弱甚至推送异常也不会产生太大的影响。

### 服务下线
&#8195;&#8195;服务下线相对而言就比较好理解了，通过提供OpenAPI进行调用，最后核心还是将Set\<Instance\>移除，用的是同一套代码，只是操作参数传入的是REMOVE。

## 集群架构原理

### 集群架构心跳机制
&#8195;&#8195;集群架构的心跳机制非常简单，**同一个Service的心跳监测只会运行在一台NacosService上**。在心跳的业务触发前，会对机器Hash并且取模，如果是本台机器则执行：

```java
public void run() {
    try {
        // 判断是否在本台机器上
        if (!getDistroMapper().responsible(service.getName())) {
            return;
        }
        
        if (!getSwitchDomain().isHealthCheckEnabled()) {
            return;
        }
        // 心跳task的其他核心业务省略
}
```
### 集群节点状态同步
![集群节点状态感知](/images/microservice/register/集群节点状态感知.png)

&#8195;&#8195;节点状态同步，任务是一个@PostConstruction初始化的任务，由ServiceStatusReporter进行初始化。默认延迟时间为2s。该节点会循环往所有其他节点发送状态信息（心跳）。一旦宕机，其他节点会感知到并且重新计算。发送完毕后，继续发布一个延迟2s的任务。

```java
public void run() {
    try {
        
        // 省略其他逻辑
        if (allServers.size() > 0 && !EnvUtil.getLocalAddress()
                .contains(IPUtil.localHostIP())) {
            for (Member server : allServers) {
                //省略其他逻辑
                
                synchronizer.send(server.getAddress(), msg);
            }
        }
    } catch (Exception e) {
        Loggers.SRV_LOG.error("[SERVER-STATUS] Exception while sending server status", e);
    } finally {
        // 继续延迟执行任务
        GlobalExecutor
                .registerServerStatusReporter(this, switchDomain.getServerStatusSynchronizationPeriodMillis());
    }
}

```
### 服务新增数据同步
![新增服务数据同步](/images/microservice/register/新增服务数据同步.png)

&#8195;&#8195;数据新增是在服务注册最后一步异步同步数据完成的，整体过程是一个异步同步的过程，但是细节比较绕，先将服务信息存入一个Map，另一个定时线程来取出，再存入一个队列。再有一个线程从队列中取出，给另一个线程发送。

### 服务变更数据同步

&#8195;&#8195;服务状态（健康状态）在集群之间的同步也是通过一个task完成，这个task由ServiceManager使用@PostConstruct初始化，延迟6s执行。同步发起的机器就是做健康检查的那台机器。将服务的健康状况发送到集群其他节点，并且继续循环。

![服务健康状态同步](/images/microservice/register/服务健康状态同步.png)


# 附录：源码流程

![Nacos源码剖析](/images/microservice/register/Nacos源码剖析.png)

***
参考
- Spring Cloud Alibaba 微服务原理与实战[谭峰(mic)]. 中国工信出版社,电子工业出版社