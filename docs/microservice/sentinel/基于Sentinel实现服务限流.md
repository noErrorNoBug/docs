---
title: 基于Sentinel实现服务限流
prev:
  text: Nacos配置中心核心原理
  link: /microservice/config/Nacos配置中心核心原理.md
next:
  text: Sentinel规则配置说明
  link: /microservice/sentinel/Sentinel规则配置说明.md
---
::: info 前置知识
- **服务限流**：通过限制并发访问数量或者限制一个时间窗口内允许处理的请求数量来保护系统，一旦达到限制数量则对当前请求进行处理并采取对应的拒绝措施，如跳转错误页面或者拒绝请求、进入排队系统、降级等。从本质上说，限流主要作用是牺牲一部分用户的可用性，保证大部分用户的可用性。
- **服务熔断**：在分布式场景下，服务之间的请求链路和依赖关系比较复杂，尤其是底层的依赖服务的稳定性对系统整体的影响非常大。一旦链路上某个依赖的服务不可用，很可能出现请求堆积导致雪崩效应。服务熔断就是当一个服务提供者无法提供正常的服务时，将其出现故障的接口暂时隔离出来，当触发熔断的一定时间内，调用该服务的请求将会直接失败返回，直到恢复正常。
- **服务降级**的几种常见方案：
  - **平均响应时间**：比如1s内持续进入5个请求，对应时刻的平均响应时间均超过阈值，那么接下来的固定时间窗口内，对这个方法的访问都会熔断。
  - **异常比例**：当某个方法每秒调用所获得的异常总数比例超过阈值，该资源的固定时间窗口内，对方法的访问都会熔断。
  - **异常数量**：与异常比例相似，当某个方法或者资源在指定的时间窗口内的异常数量超过阈值时，触发熔断。

:::
[[toc]]
***

&#8195;&#8195;使用Sentinel需要了解两个基本概念：
- **资源**：通过Sentinel API定义的代码统称为资源，能够被Sentinel保护起来。大部分情况下，可以使用方法签名、URL、甚至服务名作为资源名来标识资源。
- **规则**：围绕资源实时状态设定的规则，可以包括流量控制规则、熔断降级规则以及系统保护规则。所有的规则可以动态实时调整。

## API 实现
&#8195;&#8195;API实现方式业务入侵度非常高，一般不去使用，这里仅仅作为对Sentinel-Core进行测试。
### 引入依赖
```xml

```

### 代码实现
&#8195;&#8195;使用API方式进行资源保护，需要实现三个步骤：
1. 定义资源
2. 定义规则
3. 检验规则是否生效


&#8195;&#8195;如下利用@PostConstruct定义资源和定义规则，这里只有一个资源，为其定义一条规则；在Controller中调用API对定义的资源进行验证。

&#8195;&#8195;调用API验证资源会抛出BlockException，即不符合规则的请求，资源访问会被阻止。
```java
@Slf4j
@RestController
@Api(tags = "商品专题管理API")
public class ApiTestController {
    /**
     * 资源名称
     */
    public static final String RESOURCE = "hello";

    @ResponseBody
    @ApiOperation(value = "测试Sentinel-Core")
    @GetMapping(value = "/hello", produces = {"application/json;charset=UTF-8"})
    public String hello() {
        Entry entry = null;
        try {
            // 资源名可以使用任意有意义的业务字符串
            entry = SphU.entry(RESOURCE);

            // 受保护资源
            log.info("===============正常执行：hello world=================");
            return "hello world";
        } catch (BlockException e) {
            // 资源访问被阻止
            log.error("============block!====================");
            return "流量控制";
        } catch (Exception e) {
            // 如果需要匹配降级规则，需要通过这种方式记录业务异常
            Tracer.traceEntry(e,entry);
        } finally {
            if (entry!= null) {
                entry.exit();
            }
        }
        return null;
    }

    /**
     * 定义流控规则列表
     */
    @PostConstruct
    private static void initFluwRules(){
        List<FlowRule> rules = new ArrayList<>();
        FlowRule rule = new FlowRule();
        // 受保护资源
        rule.setResource(RESOURCE);
        // 设置流控规则 QPS
        rule.setGrade(RuleConstant.FLOW_GRADE_QPS);
        // 设置阈值
        rule.setCount(1);

        // 加载资源和规则
        rules.add(rule);
        FlowRuleManager.loadRules(rules);
    }
}
```

## 注解实现
### Sentinel Dashboard
&#8195;&#8195;Sentinel利用SpringBoot提供了一个轻量级的开源控制台，支持机器的发现、健康管理、监控、规则管理和推送功能，因此可以使用控制台进行流控规则的配置。https://github.com/alibaba/Sentinel/wiki/控制台#2-启动控制台

&#8195;&#8195;安装Sentinel DashBoard可以从Github的仓库中下载jar包启动，相关配置详见上述仓库文档：
```shell
java -Dserver.port=8080 -Dcsp.sentinel.dashboard.server=localhost:8080 -Dproject.name=sentinel-dashboard -jar sentinel-dashboard.jar
```

### 添加依赖
&#8195;&#8195;使用注解方式需要依赖Sentinel对aspectj的依赖，同时添加对DashBoard的通讯依赖：
```xml
<!-- 支持aop注解的sentinel依赖 -->
<dependency>
    <groupId>com.alibaba.csp</groupId>
    <artifactId>sentinel-annotation-aspectj</artifactId>
</dependency>
<!-- Dashboard通信依赖 -->
<dependency>
    <groupId>com.alibaba.csp</groupId>
    <artifactId>sentinel-transport-simple-http</artifactId>
</dependency>
```

### 代码实现
&#8195;&#8195;首先需要配置Sentinel切面支持：
```java
@Configuration
public class SentinelAspectConfiguration {
    @Bean
    public SentinelResourceAspect sentinelResourceAspect() {
        return new SentinelResourceAspect();
    }
}
```
&#8195;&#8195;**注解实现的核心是@SentinelResource注解**，这个注解有三个参数：
- **value**：受保护资源，对应API里的资源名称
- **fallback**：方法名，对应API里的catch(Exception)，处理自定义异常，flalbackClass指定方法所在类。
- **blockHandler**：限流异常处理方法，对应API里catch(BlockException)，处理Sentinel异常，blockHandlerClass指定方法所在类。

```java
@ResponseBody
@ApiOperation(value = "测试Sentinel-aspectj")
@GetMapping(value = "/anno", produces = {"application/json;charset=UTF-8"})
@SentinelResource(value = RESOURCE,
    fallback = "fallback",fallbackClass = ExceptionUtil.class,
    blockHandler = "handleException",blockHandlerClass = ExceptionUtil.class)
public String anno() {
    return "hello anno!";
}
```

&#8195;&#8195;为了与Dashboard进行交互，还需要指定相关配置文件：
```yml 
spring:
  application:
    name: platform-sentinel
  cloud:
    sentinel:
      transport:
        # 指定Dashboard
        dashboard: 127.0.0.1:7777
        # 指定本服务与Dashboard交互的端口号
        port: 12001
```

## Spring Cloud Alibaba 整合
### 引入依赖
&#8195;&#8195;需要引入Sentinel的Spring Cloud Starter依赖和SpringBoot的Actuator依赖，**Actuator主要用于暴露/actuator/sentinel端口与控制台进行通讯**。

```xml
<dependency>
    <groupId>com.alibaba.cloud</groupId>
    <artifactId>spring-cloud-starter-alibaba-sentinel</artifactId>
</dependency>

<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-actuator</artifactId>
</dependency>
```

&#8195;&#8195;引入依赖后需要配置actuator和sentinel dashboard，这里作为测试将actuator端点全部暴露：
```yml
spring:
  application:
    name: platform-sentinel
  cloud:
    sentinel:
      transport:
        # 指定Dashboard
        dashboard: 127.0.0.1:7777
        # 指定本服务与Dashboard交互的端口号
        port: 12001
# 暴露actuator端点
management:
  endpoints:
    web:
      exposure:
        include: "*"
```

### 编辑流控规则
&#8195;&#8195;如图所示，流控规则需要设定以下属性，这些属性也与Sentinel的API所对应：
- 资源名：@SentinelResource对应的value值
- 针对来源：默认default，当多个微服务调用时，可以配置微服务名称设置阈值
- 阈值类型：QPS或者是线程数
  - QPS：每秒访问接口次数
  - 线程数：为接收请求分配的线程数量

![控制台流控规则](/images/microservice/sentinel/控制台流控规则.png)

&#8195;&#8195;接下来看一下actuator中的监控信息，也就是flowRules：

![autuator的sentinel端点](/images/microservice/sentinel/autuator的sentinel端点.png)


## 自定义URL限流异常
&#8195;&#8195;大多数情况下我们都不会使用Sentinel的触发限流后直接返回的异常，而是使用自己系统内定义的JSON返回值。

&#8195;&#8195;我们可以通过实现BlockExceptionHandler来实现对异常返回结果的拦截，如下所示：
```java
@Service
public class CustomBlockExceptionHandler implements BlockExceptionHandler {
    @Override
    public void handle(HttpServletRequest request, HttpServletResponse response, BlockException e) throws Exception {
        BaseResponse result = null;
        if (e instanceof FlowException) {
            result = BaseResponse.failed(FLOW_RESTRICTION);
        } else if (e instanceof DegradeException) {
            result = BaseResponse.failed(RELEGATION);
        } else if (e instanceof ParamFlowException) {
            result = BaseResponse.failed(HOTSPOT_RESTRICTION);
        } else if (e instanceof SystemBlockException) {
            result = BaseResponse.failed(SYSTEM_BLOCKED);
        } else if (e instanceof AuthorityException) {
            result = BaseResponse.failed(FLOW_UNAUTHORIZED);
        }
        response.setStatus(200);
        request.setCharacterEncoding("utf-8");
        response.setContentType(MediaType.APPLICATION_JSON_VALUE);
        new ObjectMapper().writeValue(response.getWriter(),result);
    }
}
```

&#8195;&#8195;还有一种场景是，如果限流了，我们希望跳转到某一个降级页面，可以通过配置实现：
```yml
spring.cloud.sentinel.servlet.block-page={url}
```

## URL资源清洗
&#8195;&#8195;Sentinel在1.7以后限流默认由Sentinel-Web-Servlet包的CommonFilter实现，这个会把每个不同的URL都作为不同的资源处理。这就导致了如果有PathVariable的存在，就会当成是不同的URL资源。

&#8195;&#8195;因此会造成流量统计错漏的问题，这就需要进行资源清洗。资源清晰只要实现UrlCleaner接口并且重写clean方法即可。
```java
@Service
public class CustomerUrlCleaner implements UrlCleaner {
    @Override
    public String clean(String s) {
        if (StringUtils.isBlank(s)) {
            return s;
        }
        if (s.startsWith("/clean/")) {
            return "/clean/*";
        }
        return s;
    }
}
```