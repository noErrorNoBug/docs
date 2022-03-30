---
title: title
prev:
  text: 回到首页
  link: /README.md
next:
  text: 回到首页
  link: /README.md
---
::: info
文章介绍
:::
[[toc]]

***
# 生产者

## 依赖

```xml
<!-- amqp的starter -->
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-amqp</artifactId>
</dependency>
```

## 配置

```yaml
spring:
  rabbitmq:  
    host: 127.0.0.1
    port: 5672
    username: admin
    password: admin
    virtual-host: /basic
```

## 常用API

通过配置类对RabbitMQ的组件进行配置，并使**用@Configuration注解将配置类交给Spring管理**。

### 声明Exchange

通过ExchangeBuider创建Exchange实例并绑定属性，并将实例注册为Spring Bean。

```java
@Bean("myExchange")
public Exchange getExchange() {
    return ExchangeBuilder            
    .directExchange(EXCHANGE_NAME)    //交换机名称和交换机类型，direct、topic、fanout三种类型
    .durable(true)                    //持久化
    .build();
}
```

### 声明Queue

通过QueueBuilder创建Queue实例，并注册到Spring Bean。

```java
@Bean("myQueue")
public Queue getQueue() {
    return QueueBuilder
    .durable(QUEUE_NAME)          //队列名称
    .build();
}
```

### 声明Binding

注入声明的Exchange和Queue，并且通过BindingBuilder绑定Queue到Exchange，以及设置Routing key，并将Binding实例注册到Spring Bean。

```java
@Bean
public Binding getBinding(
@Qualifier("myQueue") Queue queue,  //注入Queue
@Qualifier("myExchange") Exchange exchange  //注入Exchange
) {
    return BindingBuilder
    .bind(queue).to(exchange)      //绑定队列到交换机
    .with(ROUTING_KEY)               //设置路由
    .noargs();
}
```

### 生产消息

通过RabbitTemplate进行消息的生产和发送。

```java
//注入 RabbitTemplate
@Autowired
private RabbitTemplate rabbitTemplate;

public void sendMessage() {
//  传入交换机名称、Routing_Key、消息
rabbitTemplate.convertAndSend(EXCHANGE_NAME,ROUTING_KEY,MESSAGE);
}
```

# 消费者

## 依赖

```xml
<!-- amqp的starter -->
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-amqp</artifactId>
</dependency>
```
## 配置

```yaml
spring:
  rabbitmq:
    host: sunqiang.club
    port: 5672
    username: admin
    password: admin
    virtual-host: /basic
```
## 常用API

使用 @RabbitListener 对方法进行监听，注解内需要用 queue 属性标明监听的队列，监听方法可以注入Message、Channel等相关属性。监听器需要注册为Spring Bean。

```java
@Component
public class RabbitMQListener {
    //声明监听队列并监听Message属性
    @RabbitListener(queues = QUEUE_NAME)
    public void lisenerQueue(Message message) {
        //...业务处理代码
    }
}
```
其中，监听器的参数有多重，如下是常用的方法：
* Message message：接收Message全部信息
* Channel channel：接收Channel信息
* @Payload String body：直接接收String类型的Message.body
* @Headers Map<String,Object> headers：接收所有消息头
* @Header String token：接收指定的消息头
