---
title: Sentinel整合RestTemplate和OpenFeign
prev:
  text: Sentinel规则配置说明
  link: /microservice/sentinel/Sentinel规则配置说明.md
next:
  text: Sentinel核心原理
  link: /microservice/sentinel/Sentinel核心原理.md
---
::: info
&#8195;&#8195;Sentinel可以整合RestTemplate、OpenFeign和Dubbo这些具有远程调用的组件进行使用，并且为其配置限流规则。
:::
[[toc]]
***


## RestTemplate整合Sentinel

### 注入RestTemplate
&#8195;&#8195;整合RestTemplate需要使用@SentinelRestTemplate注解：
```java
@Configuration
public class RestTemplateConfig {

    @Bean
    @LoadBalanced
    @SentinelRestTemplate(
            blockHandler = "handleException",blockHandlerClass = ExceptionUtil.class,
            fallback = "fallback",fallbackClass = ExceptionUtil.class
    )
    public RestTemplate restTemplate() {
        return new RestTemplate();
    }
}
```

### 配置文件
&#8195;&#8195;需要开启Sentinel对RestTemplate的支持，默认为false：
```yml
resttemplate:
  sentinel:
    enabled: true
```

### 资源规则
&#8195;&#8195;Sentinel提供了两种粒度的资源规则配置：
- httpmetod:schema://host:port/path：协议、主机、端口、路径
- httpmetod:schema://host:port：协议、主机、端口

![整合RestTemplate](/images/microservice/sentinel/整合RestTemplate.png)


## OpenFeign整合Sentinel
&#8195;&#8195;Sentinel适配了OpenFeign组件，引入Spring Cloud Starter OpenFeign依赖即可实现自动配置。
### 开启对OpenFeign的支持
```yml
feign:
  sentinel:
    enabled: true
```

### 声明OpenFeign接口
```java
@FeignClient(value = "mall-order",path = "/order",fallbackFactory = FallbackOrderFeignServiceFactory.class)
public interface OrderFeignService {
    @RequestMapping("/order/{id}")
    BaseResponse getOrderById(@PathVariable("id") Integer id);
}
```

### 实现FallbackFactory
&#8195;&#8195;实现FallbackFactory或者实现FallBack二选一即可，具体根据FeignClient中的配置决定，通过FallBackFactory可以拿到异常，通过不同的异常进行针对性的处理，直接配置Fallback的话无法获取到异常：
```java
@Component
public class FallbackOrderFeignServiceFactory implements FallbackFactory<OrderFeignService> {
    @Override
    public OrderFeignService create(Throwable e) {
        return new OrderFeignService() {
            @Override
            public BaseResponse getOrderById(Integer id) {
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
                return result;
            }
        };
    }
}
```
### 实现FallBack实现类
```java
@Component
public class FallBackeOrderFeignService implements OrderFeignService{
    @Override
    public BaseResponse getOrderById(Integer id) {
        return BaseResponse.failed("服务被降级");
    }
}
```