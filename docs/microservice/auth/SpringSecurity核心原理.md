---
title: SpringSecurity核心原理
next:
  text: Java注解机制
  link: /java/basic/Java注解机制.md
---
::: info
&#8195;&#8195;认证解决的是"我是谁"的问题，授权解决的是"我能做什么"的问题。在Spring Security的底层机制中，是通过**Filter和FilterChain**来实现认证和授权的，Filter和客户端的交互则是通过请求/响应中的字段完成的。
:::
[[toc]]
***
## 快速开始
&#8195;&#8195;SpringSecurity集成比较简单，只需要加入依赖即可：
```xml
<dependency>
  <groupId>org.springframework.boot</groupId>
  <artifactId>spring-boot-starter-security</artifactId>
</dependency>
```
## 登录认证原理
### 前后端分离下一般的登录认证流程
![前后端分离登录认证流程](/images/microservice/auth/前后端分离登录认证流程.png)
&#8195;&#8195;如图所示是一般单体应用前后端分离架构下的登录认证的流程，资源认证的核心就是token。关于其基本原理我们以这个案例进行展开

### Spring Security执行认证的流程
&#8195;&#8195;Spring Security的本质是一个过滤器链，其认证和授权的功能就是在多个过滤器的执行下完成的，数据则是通过请求/响应中的字段进行交互。Spring Security中的内置过滤器共有15个，分别负责不同的作用(大部分很少用到，可以只关注用到的)。

## Filter和FilterChain原理
![Filter原理](/images/microservice/auth/Filter原理.png)
&#8195;&#8195;Spring Security的Filter在Http请求到达Controller之前，过滤每一个想要传入的Http请求。
&#8195;&#8195;FilterChain则是由Security组件的多个功能不同的Filter组成的过滤器链，共同完成认证和授权的功能，下图是一个FilterChain的过程举例。
![FilterChain原理](/images/microservice/auth/FilterChain原理.png)

## 内建过滤器
- **BasicAuthenticationFilter**：如果在请求中找到一个 Basic Auth Http 头，则尝试在该Header中获取用户名密码。
- **UsenamePasswordAuthenticationFilter**：如果在RequestParam中或者Post请求的RequestBody中找到用户名或者密码，则尝试对这些值进行身份验证。
- DefaultLoginPageGeneratingFilter：默认登录页面生成过滤器。用于生成一个登录页面，不想使用需要显式禁用。
- DefaultLogoutPageGeneratingFilter：默认注销页面过滤器。用于生成一个注销界面，不想使用需要显式的禁用。
- FilterSecurityinterceptor：过滤安全拦截器。用于授权逻辑的实现。


