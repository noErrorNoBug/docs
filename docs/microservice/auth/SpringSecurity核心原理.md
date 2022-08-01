---
title: SpringSecurity核心原理
next:
  text: Java注解机制
  link: /java/basic/Java注解机制.md
---
::: info
&#8195;&#8195;SpringSecurity主要解决的事**认证和授权**的问题。认证解决的是"我是谁"的问题，授权解决的是"我能做什么"的问题。
&#8195;&#8195;在Spring Security的底层机制中，是通过**Filter和FilterChain**来实现认证和授权的，Filter和客户端的交互则是通过请求/响应中的字段完成的。
:::
[[toc]]
***
## 过滤器链执行原理
&#8195;&#8195;过滤器和过滤器链是SpringSecurity实现认证和授权的核心。其认证和授权的功能就是在多个过滤器的执行下完成的，数据则是通过请求/响应中的字段进行交互。
&#8195;&#8195;Spring Security的Filter在Http请求到达Controller之前，过滤每一个想要传入的Http请求，如下图所示：

![Filter原理](/images/microservice/auth/Filter原理.png)

&#8195;&#8195;Spring Security中的内置过滤器共有15个，分别负责不同的作用(大部分很少用到，可以只关注用到的)。SpringSecurity按照一定的顺序将过滤器组织起来(SpringSecurityFilterChain)，通过一系列的逻辑(AuthorizationManager和AccessDecisionManager)完成认证和授权功能，如下图是一个认证过程的示意：

![FilterChain原理](/images/microservice/auth/FilterChain原理.png)

## SpringSecurity核心组成
&#8195;&#8195;下面是SpringSecurity的核心组成，包括实现具体认证和授权逻辑的管理器、过滤器链；负责不同功能的核心过滤器；处理特定情况的Handler；封装执行信息的实体等。

### 逻辑实现
&#8195;&#8195;SpringSecurity中核心的实现有三个，上文中已经提到：
- **SpringSecurityFilterChain**：过滤器链，在项目启动时被注入。
- **AuthorizationManager**：管理认证功能的处理器，有认证功能的具体实现，管理认证相关的过滤器。
- **AccessDecisionManager**：管理授权功能的处理器，有授权功能的具体实现，管理授权相关的过滤器。
- **UserDetailsService**：控制用户认证过程中用户名和密码的具体实现，是认证过程中唯一可以由用户自定义实现的地方。
- **UserDetails**：用户信息实例，存储用户细节和权限信息。
- **Authorization**：权限实例，包含权限、身份、细节等信息，一般密码信息会被移除。
- **SecurityContextHolder**：存储本次请求的用户、认证、权限信息，供给过滤器使用。(分布式场景下采用token认证，很少使用到session，因此不考虑session情况，以下均如此)
- **PasswordEncoder**：密码编码器，可以自定义密码编码器。

### 重要Filter
&#8195;&#8195;SpringSecurity中的内置过滤器共有15个，比较常用的有以下几个：
- **SecurityContextPersistenceFilter**：整个过滤器链的入口和出口(第一个和最后一个过滤器)，负责初始化。会从配置好的SecurityContextRepository中获取SecurityContext，然后设置给SecurityContextHolder，并在请求完成后将Holder持有的上下文SecurityContext保存到SecurityContextRepository，并清理Holder。
- **UsenamePasswordAuthenticationFilter**：用户名密码验证过滤器，提交的表单必须是用户名和密码，其内还有AuthorizationSuccessHandler和AuthorizationFailerHandler分别处理认证成功和认证失败的逻辑。
- **ExceptionTranslationFilter**：处理过滤器中抛出的任何AccessDeniedException和AuthenticationException。
- **FilterSecurityInterceptor**：负责授权的过滤器，由AccessDecisionManager负责管理。

## SpringSecurity 认证流程
## 用户认证流程

### AuthorizationProvider接口

### xxxx 接口


## SpringSecurity 授权流程
### 基于AOP的方法权限管理

### 自定义权限处理方法

### 

## 配置SpringSecurity
### 依赖
```xml
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-security</artifactId>
</dependency>
```
&#8195;&#8195;加入依赖后，通过@EnableWebSecurity来开启SpringSecurity功能。

### 配置实现
&#8195;&#8195;SpringSecurity的配置通过继承WebSecurityConfigurerAdapter，并且重写configure方法实现。在方法中可以通过对参数的链式编程实现不同的功能。
```java
@Configuration
@EnableWebSecurity
public class SecurityConfig extends WebSecurityConfigurerAdapter {

    /**
     * 对Security的配置主要在这个方法中进行配置
     * @param http
     * @throws Exception
     */
    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http
                //关闭csrf(跨域)
                .csrf().disable()
                //不通过Session获取SecurityContext
                .sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS)
                .and()
                .authorizeRequests()
                // 放行接口配置，对于登录接口 允许匿名访问
                .antMatchers("/auth/login").anonymous()
                // 除上面外的所有请求全部需要鉴权认证
                .anyRequest().authenticated();
    }
}
```
### 跨域设置
&#8195;&#8195;跨域指的是浏览器不能执行其他网站的脚本，这是由于浏览器的同源策略决定的。对于分布式的项目而言，禁止跨域访问基本是不可能的，因此需要配置跨域放行。首先我们需要配置SpringMVC的跨域放行：
```java
@Component
public class CorsConfig implements WebMvcConfigurer {
    @Override
    public void addCorsMappings(CorsRegistry registry) {
        // 设置允许跨域的路径
        registry.addMapping("/**")
                // 设置允许跨域请求的域名
                .allowedOriginPatterns("*")
                // 是否允许cookie
                .allowCredentials(true)
                // 设置允许的请求方式
                .allowedMethods("GET", "POST", "DELETE", "PUT")
                // 设置允许的header属性
                .allowedHeaders("*")
                // 跨域允许时间
                .maxAge(3600);
    }
}
```

&#8195;&#8195;SpringSecurity中的跨域放行配置相对比较简单，在config方法中对http进行配置即可：
```java 
@Configuration
@EnableWebSecurity
public class SecurityConfig extends WebSecurityConfigurerAdapter {

    /**
     * 对Security的配置主要在这个方法中进行配置
     * @param http
     * @throws Exception
     */
    @Override
    protected void configure(HttpSecurity http) throws Exception {
        //关闭csrf(跨域)
        http.csrf().disable();
    }
}
```
### Session配置
&#8195;&#8195;在分布式项目中，一般采取通过token的方式进行认证和授权，而且认证信息一般存储在Redis、MongoDB等分布式存储中，并不需要通过Session保存SecurityContext，因此在配置中关闭即可。
```java
@Configuration
@EnableWebSecurity
public class SecurityConfig extends WebSecurityConfigurerAdapter {
    /**
     * 对Security的配置主要在这个方法中进行配置
     * @param http
     * @throws Exception
     */
    @Override
    protected void configure(HttpSecurity http) throws Exception {
        //不通过Session获取SecurityContext
        http.sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS);
    }
}
```

### 放行接口配置
&#8195;&#8195;对于特定的接口如果需要放行，也是通过配置类的config方法进行配置，比如放行登录接口、首页接口、Swagger页面等等。
```java
@Configuration
@EnableWebSecurity
public class SecurityConfig extends WebSecurityConfigurerAdapter {
    /**
     * 对Security的配置主要在这个方法中进行配置
     * @param http
     * @throws Exception
     */
    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http.authorizeRequests()
            // 放行接口配置，对于登录接口 允许匿名访问
            .antMatchers("/auth/login").anonymous()
            .antMatchers("/home/**").anonymous()
            // 除上面外的所有请求全部需要鉴权认证
            .anyRequest().authenticated();
    }
}
```

### 自定义过滤器加入过滤器链

### 全局异常处理器

### 自定义密码编码器

### 获取认证/权限处理器

### 自定义认证成功/失败处理器

### 登出成功处理器

### 关于CSRF的一点说明

