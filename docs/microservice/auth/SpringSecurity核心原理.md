---
title: SpringSecurity核心原理
prev:
  text: SpringSecurity核心原理
  link: /microservice/auth/SpringSecurity核心原理.md
next:
  text: Oauth2核心原理
  link: /microservice/auth/Oauth2核心原理.md
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

### 核心接口
&#8195;&#8195;SpringSecurity中核心的实现有下面几个：
- **SpringSecurityFilterChain**：过滤器链，在项目启动时被注入。
- **AuthorizationManager**：管理认证功能的处理器，有认证功能的具体实现，管理认证相关的过滤器。
- **AccessDecisionManager**：管理授权功能的处理器，有授权功能的具体实现，管理授权相关的过滤器。
- **AuthenticationProvider**：AuthorizationProvider接口是一个关键接口，这个接口提供了认证的方法。
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
### 用户密码认证流程
![SpringSecurity认证原理](/images/microservice/auth/SpringSecurity认证原理.png)
&#8195;&#8195;我们来看SpringSecurity所提供的用户名密码的认证流程：
1. 用户提交用户名和密码，被SpringSecurityFilterChain中的UsenamePasswordAuthenticationFilter过滤器获取到，封装为Authorization实例，此时实例中只有用户名和密码，没有进行验证，通常情况下，实现类UsernamePasswordAuthenticationToken。
2. 过滤器将Authentication提交到认证管理器AuthenticationManager进行认证。
3. 认证管理器AuthenticationManager委托具体的认证实现Provider进行认证。
4. 认证成功后，AuthenticationManager返回一个填充了认证信息、权限信息、身份信息、细节信息并且一般密码被移除的Authentication认证实例。
5. SpringSecurityHolder将填充认证信息的Authentication存入上下文中。


### 自定义(扩展)认证流程
&#8195;&#8195;由上面的认证流程我们可以看到，SpringSecurity支持多种认证方式，因此维护了一个AuthenticationProvider列表存放多种认证方式的实现。对于用户密码认证流程，我们比较方便通过**四个点进行干预或者扩展**：
- 可以通过自定义过滤器，并且添加到过滤器链的特定位置，更改认证的流程。比如在UsernamePasswordAuthenticationFilter前添加过滤器验证token。
- 可以通过实现UserDetailsService接口，并注入Spring容器，在Provider调用时就会调用自己实现的UserDetailsService，实现自己的用户密码的查询。如通过数据库查询。
- 可以注入不同的PasswordEncoder，实现不同的加解密方式。
- 可以通过继承UserDetails，扩展自定义的用户信息。


## SpringSecurity 授权流程
&#8195;&#8195;授权是在认证通过之后，对访问资源权限进行检查的过程。也就是说，授权需要两个前提条件：认证通过、认证流程节点之后。
### 授权流程
![SpringSecurity授权原理](/images/microservice/auth/SpringSecurity授权原理.png)
&#8195;&#8195;授权的流程主要通过FilterSecurityFilter完成，它取出Authentication中的授权信息进行验证，具体流程如图所示：
1. 请求拦截：通过FilterSecurityFilter拦截想要访问受保护资源的请求。
2. 获取资源访问策略：通过SecurityMetadataSource获取访问资源所需要的权限，其读取的内容，就是在Config中配置的访问规则，详见下文【放行接口配置】中配置的放行规则。
3. 最后由投票器发起决策，决定该请求是否放行。

&#8195;&#8195;从上述流程可以看到，投票策略是可以进行干预的，我们可以通过config配置，注入自己希望的投票器（AccessDecisionVoter），也可以自己实现自己的投票器。
### 基于AOP的方法权限管理
&#8195;&#8195;SpringSecurity是支持方法级别的资源访问控制的，并且可以很方便的使用AOP的方式完成。首先需要开启基于AOP的方法权限管理，如下开启访问方法前和后的权限控制：
```java
@Configuration
@EnableWebSecurity
@EnableGlobalMethodSecurity(prePostEnabled = true)
public class SecurityConfig extends WebSecurityConfigurerAdapter {
}
```
&#8195;&#8195;**SpringSecurity提供了@PreAuthorize注解用于在接口调用之前进行鉴权**，这个注解可以指定权限校验的方法：
- **hasAuthority**(source)：传入一种权限，具有该权限可以访问资源
- **hasAnyAuthority**(sources..):传入多种权限，具有其中一个权限即可访问资源
- **hasRole**(source)：会把传入的参数source前面拼接ROLE_后再去比较。
- **hasAnyRole**(sources..)：hasRole的复数版本，传入多个参数，都会拼接上ROLE_。

&#8195;&#8195;下面是最常用hasAuthority判断是否具有权限"system:dept:list"。

```java
@PreAuthorize("hasAuthority('system:dept:list')")
@ResponseBody
@ApiOperation(value = "测试认证服务")
@GetMapping(value = "/hello/{name}", produces = {"application/json;charset=UTF-8"})
public String hello(@PathVariable("name") String name) {
    return "hello"+name;
}
```
### 自定义权限处理方法
&#8195;&#8195;上面介绍了使用SpringSecurity提供的四个方法hasAuthority、hasAnyAuthority、hasRole、hasAnyRole来进行权限校验，很多时候我们的权限校验是需要自己的逻辑，或者是需要通过第三方完成的，这时候我们需要自己实现一个权限校验的方法，并且集成到SpringSecurity中的。
&#8195;&#8195;要实现自己的权限校验方法非常的简单，只需要将自己的实现注入到Spring容器中(最好自己指定名称)，然后调用即可：
```java
/**
 * 自定义校验逻辑
 * 注入到容器中，命名为ex
 * hasAuthority方法需要返回boolean，true表示具备权限，false表示不具备权限
*/
@Component("ex")
public class SGExpressionRoot {

    public boolean hasAuthority(String authority){
        //获取当前用户的权限
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        LoginUser loginUser = (LoginUser) authentication.getPrincipal();
        List<String> permissions = loginUser.getPermissions();
        //判断用户权限集合中是否存在authority
        return permissions.contains(authority);
    }
}
```


&#8195;&#8195;在调用时只需要在@PreAuthorize注解中使用自己的方法即可：
```java
@RequestMapping("/hello")
@PreAuthorize("@ex.hasAuthority('system:dept:list')")
public String hello(){
    return "hello";
}
```
###  基于配置的权限控制
&#8195;&#8195;基于配置的权限控制比较简单，即我们常说的白名单黑名单，可以通过配置类中直接进行配置：
```java
    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http
                ...
                .authorizeRequests()
                // 对于登录接口 允许匿名访问
                .antMatchers("/user/login").anonymous()
                // 对于这个路径，需要具备指定权限
                .antMatchers("/testCors").hasAuthority("system:dept:list222")
                // 除上面外的所有请求全部需要鉴权认证
                .anyRequest().authenticated();
    }
```

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
#### 关于CSRF的一点说明
&#8195;&#8195;CSRF指的是跨域请求伪造，是web常见的攻击手段之一，SpringSecurity去防止CSRF攻击的方式就是通过csrf_token。后端会生成一个csrf_token，前端发起请求的时候需要携带这个csrf_token,后端会有过滤器进行校验，如果没有携带或者是伪造的就不允许访问。
&#8195;&#8195;CSRF攻击是依靠token中携带一个认证信息进行攻击的，但是我**们大多数场景下都是使用token进行认证，而且token都是让其写在请求头中的**，因此这里可以不用担心。

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

### 投票器配置
&#8195;&#8195;SpringSecurity默认使用的是AffrimativeBased投票器，如果想要自定义投票器，首先需要将投票器注入Spring容器,然后再configure()方法中配置为自己的投票器：
```java
@Configuration
@EnableWebSecurity
public class SecurityConfig extends WebSecurityConfigurerAdapter {

    @Bean
    public AccessDecisionManager accessDecisionManager() {
        List<AccessDecisionVoter<? extends Object>> voters = Arrays.asList(
                new WebExpressionVoter(),
                new RoleVoter(),
                new AuthenticatedVoter()
        );
        return new UnanimousBased(voters);
    }

    /**
     * 对Security的配置主要在这个方法中进行配置
     * @param http
     * @throws Exception
     */
    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http
                ...
                .anyRequest().authenticated()
                // 自定义投票器
                .accessDecisionManager(accessDecisionManager());

    }
}
```



### 全局异常处理器
&#8195;&#8195;对于认证失败和授权失败，我们一般会对返回值做一些处理，或者添加其他逻辑如通知、审计日志等等，此时我们就需要对失败后的逻辑进行处理。
&#8195;&#8195;对于**认证失败**，可以通过实现AuthenticationEntryPoint接口的commence()方法，并且将实现注入到SpringSecurity配置中实现。下面是实现类，这里仅仅是封装为自定义的返回值：
```java
@Component
public class AuthenticationEntryPointImpl implements AuthenticationEntryPoint {
    @Override
    public void commence(HttpServletRequest request, HttpServletResponse response, AuthenticationException authException) throws IOException, ServletException {
        BaseResponse result = BaseResponse.unauthorized(null);
        String json = JSON.toJSONString(result);
        WebUtils.renderString(response,json);
    }
}
```
&#8195;&#8195;对于**授权失败**，可以通过实现AccessDeniedHandler的handle()方法实现授权失败的拦截，并且将拦截器注入到SpringSecurity的配置中，下面是实现类，封装了自定义的返回值：
```java
@Component
public class AccessDeniedHandlerImpl implements AccessDeniedHandler {
    /**
     * 将异常封装为同一返回形式
     * @param request
     * @param response
     * @param accessDeniedException
     * @throws IOException
     * @throws ServletException
     */
    @Override
    public void handle(HttpServletRequest request, HttpServletResponse response, AccessDeniedException accessDeniedException) throws IOException, ServletException {
        BaseResponse result = BaseResponse.forbidden(null);
        String json = JSON.toJSONString(result);
        WebUtils.renderString(response,json);
    }
}
```
&#8195;&#8195;完成自己的实现后，需要将实现类注入到SpringSecurity的配置中才能生效，如下：
```java
@Configuration
@EnableWebSecurity
public class SecurityConfig extends WebSecurityConfigurerAdapter {

    @Autowired
    private AuthenticationEntryPoint authenticationEntryPoint;
    @Autowired
    private AccessDeniedHandler accessDeniedHandler;

    /**
     * 对Security的配置主要在这个方法中进行配置
     * @param http
     * @throws Exception
     */
    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http
                ...
                .anyRequest().authenticated()
                // 配置全局异常处理
                .exceptionHandling()
                // 认证异常
                .authenticationEntryPoint(authenticationEntryPoint)
                // 授权异常
                .accessDeniedHandler(accessDeniedHandler);
    }
}

```

### 自定义认证失败处理器
&#8195;&#8195;上面是认证和授权处理异常的拦截，那么认证失败的话应该如何处理呢？SpringSecurity提供了认证失败的拦截器，需要实现AuthenticationFailureHandler的onAuthenticationFailure()方法：
```java 
@Component
public class SGFailureHandler implements AuthenticationFailureHandler {
    @Override
    public void onAuthenticationFailure(HttpServletRequest request, HttpServletResponse response, AuthenticationException exception) throws IOException, ServletException {
        System.out.println("认证失败了");
    }
}

```
&#8195;&#8195;并且将处理器注入Spring容器中，并且加入到SpringSecurity的配置中：
```java
@Configuration
public class SecurityConfig extends WebSecurityConfigurerAdapter {

    @Autowired
    private AuthenticationSuccessHandler successHandler;

    @Autowired
    private AuthenticationFailureHandler failureHandler;

    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http.formLogin()
//                配置认证失败处理器
                .failureHandler(failureHandler);

        http.authorizeRequests().anyRequest().authenticated();
    }
}

```
### 自定义认证成功处理器
&#8195;&#8195;上面说了自定义认证失败处理器，那么必然有自定义的认证成功处理器。自定义的认证成功处理器需要实现AuthenticationSuccessHandler的onAuthenticationSuccess()方法。
```java
@Component
public class SGSuccessHandler implements AuthenticationSuccessHandler {

    @Override
    public void onAuthenticationSuccess(HttpServletRequest request, HttpServletResponse response, Authentication authentication) throws IOException, ServletException {
        System.out.println("认证成功了");
    }
}
```
&#8195;&#8195;同样的，认证成功处理器也需要注入到Spring容器中，并且在SpringSecurity中进行配置：
```java
@Configuration
public class SecurityConfig extends WebSecurityConfigurerAdapter {

    @Autowired
    private AuthenticationSuccessHandler successHandler;

    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http.formLogin().successHandler(successHandler);

        http.authorizeRequests().anyRequest().authenticated();
    }
}
```
### 自定义密码编码器
&#8195;&#8195;我们一般使用BCrypt算法进行编码解码，因此一般也会替换掉密码编码器，只需要在配置类中将所需要的编码器注入到Spring容器中即可：
```java
@Bean
public PasswordEncoder passwordEncoder() {
    return new BCryptPasswordEncoder();
}
```
### 获取认证/权限处理器
&#8195;&#8195;有时候我们在自己实现认证逻辑时，可能需要自己调用AuthenticationManager的认证方法来执行认证流程，此时我们就需要获取到认证管理器。
&#8195;&#8195;获取认证管理器只需要重写WebSecurityConfigurerAdapter的authenticationManagerBean()方法，并且调用父类的方法获取到Manager，注入到Spring容器中即可，之后我们就可以在需要的地方通过@Autowire获取到AuthenticationManager。
```java
@Configuration
@EnableWebSecurity
public class SecurityConfig extends WebSecurityConfigurerAdapter {

    /**
     * 注入AuthenticationManager用于在登陆接口进行认证
     * @return
     * @throws Exception
     */
    @Bean
    @Override
    public AuthenticationManager authenticationManagerBean() throws Exception {
        return super.authenticationManagerBean();
    }

}
```
### 自定义过滤器加入过滤器链
&#8195;&#8195;一般情况下我们是不使用SpringSecurity的原生认证和鉴权的逻辑的，比如我们需要把用户名、密码、角色等信息存储到数据库中，同时对于登录的用户需要存储用户信息和权限到nosql数据库中，还需要解析token等操作。尤其是使用token进行验证的授权模式，需要在用户名和密码验证之前首先验证是否持有token，此时我们需要在UsernamePasswordAuthenticationFilter前加一个过滤器，验证token，下面我们以此为例，说明一下如何将自定义的过滤器添加到过滤器链中。
&#8195;&#8195;首先，可以通过**继承OncePerRequestFilter，并且实现doFilterInternal方法来**实现过滤器的逻辑，**过滤器需要注入到Spring容器中**，下面是实现了通过token解析用户状态的过滤：
```java
@Component
public class JwtAuthenticationTokenFilter extends OncePerRequestFilter {
    @Autowired
    private RedisCache redisCache;

    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain) throws ServletException, IOException {
        //获取token
        String token = request.getHeader("token");
        if (StringUtils.isBlank(token)) {
            //放行(或者说是放到下一个过滤器，这个过滤器的逻辑不需要执行了)
            filterChain.doFilter(request, response);
            // 没有写else，因此执行完chain后需要返回而不是执行下面的逻辑
            return;
        }
        //解析token
        Long userid;
        try {
            Claims claims = JwtUtil.parseJWT(token);
            userid = Long.parseLong(claims.getSubject());
        } catch (Exception e) {
            e.printStackTrace();
            throw new RuntimeException("token非法");
        }
        //从redis中获取用户信息
        String redisKey = "login:" + userid;
        LoginUser loginUser = redisCache.getCacheObject(redisKey);
        // 此处permissions是自定义的资源访问权限，如果用户已登录，登录时将权限存入redis，认证时直接取出，同时通过redis的过期时限作为用户自动退出的时限
        List<String> permissions = menuMapper.selectPermsByUserId(userid);
        loginUser.setPermissions(permissions);
        if(Objects.isNull(loginUser)){
            throw new RuntimeException("用户未登录");
        }
        //存入SecurityContextHolder
        // 设置UsernamePasswordAuthenticationToken为已认证的状态(三个参数的构造器默认设置认证状态为true)，就不需要ProviderManager再去认证了
        //获取权限信息封装到Authentication中
        UsernamePasswordAuthenticationToken authenticationToken =
                new UsernamePasswordAuthenticationToken(loginUser,null,loginUser.getAuthorities());
        SecurityContextHolder.getContext().setAuthentication(authenticationToken);
        //放行
        filterChain.doFilter(request, response);
    }
}
```
&#8195;&#8195;然后，需要将过滤器添加到SpringSecurity的配置中，也就是加入过滤器链，并且指定顺序，其中指定顺序可以通过@Order注解实现，也可以如下指定为某个过滤器之前或者之后：
```java
@Configuration
@EnableWebSecurity
public class SecurityConfig extends WebSecurityConfigurerAdapter {

    @Autowired
    private JwtAuthenticationTokenFilter jwtAuthenticationTokenFilter;
    

    /**
     * 对Security的配置主要在这个方法中进行配置
     * @param http
     * @throws Exception
     */
    @Override
    protected void configure(HttpSecurity http) throws Exception {
        // 配置过滤器链
        http    
                ...
                // 把自定义的token认证过滤器放在登录认证的过滤器前
                .addFilterBefore(jwtAuthenticationTokenFilter, UsernamePasswordAuthenticationFilter.class);
    }
}
```

