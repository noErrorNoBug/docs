---
title: SpringSecurityOauth2核心原理
prev:
  text: Oauth2协议详解
  link: /microservice/auth/Oauth2协议详解.md
next:
  text: JWT核心原理
  link: /microservice/auth/JWT核心原理.md
---
::: info
&#8195;&#8195;[SpringSecurity](SpringSecurity%E6%A0%B8%E5%BF%83%E5%8E%9F%E7%90%86.md)是一个能够为基于Spring的企业应用系统提供声明式的安全访问控制解决方案的安全框架。SpringSecurity主要实现了认证和授权的功能。
&#8195;&#8195;把Spring Security和Oauth2进行集成，就可以实现一套完整的安全解决方案。即通过Spring Security Oauth2 构建一个授权服务器验证access_token，并且通过这个access_token获取请求资源。
:::
[[toc]]
***

## 授权服务器功能
### 授权服务器架构

![授权服务器](/images/microservice/auth/授权服务器.png)

&#8195;&#8195;如上图所示，是一个简单的授权服务器的简单示意，包含最基本的如下功能：
- Authorize Endpoint：授权端点，用于授权
- Token Endpoint：令牌端点，经过授权拿到对应token
- Introspection Endpoint：校验端点，验证token合法性
- Revocation Endpoint：撤销端点，撤销授权

### 授权服务器端点功能
- /oauth/authorize：授权端点
- /oauth/token：令牌端点
- /oauth/confirm_access：用户确认授权提交的端点
- /oauth/error：授权服务错误信息端点
- /oauth/check_token：解析访问资源服务的请求的令牌端点
- /oauth/token_key：使用jwt令牌需要用到的提供公有秘钥的端点

::: note
上述端点应该被Spring Security保护起来，只供授权用户访问。
:::


## 快速开始
### 引入依赖
&#8195;&#8195;我们需要引入Spring Security和Oauth2的依赖，如下所示：
```xml
<!-- 父依赖包 -->
<dependency>
    <groupId>org.springframework.cloud</groupId>
    <artifactId>spring-cloud-security-dependencies</artifactId>
    <version>${spring.cloud.security.version}</version>
    <type>pom</type>
    <scope>import</scope>
</dependency>
<!-- Spring Security 依赖 -->
<dependency>
    <groupId>org.springframework.cloud</groupId>
    <artifactId>spring-cloud-starter-security</artifactId>
</dependency>
<!-- Oauth2依赖 -->
<dependency>
    <groupId>org.springframework.cloud</groupId>
    <artifactId>spring-cloud-starter-oauth2</artifactId>
</dependency>
```

### 配置SpringSecurity
&#8195;&#8195;我们需要对[SpringSecurity进行基本的配置](SpringSecurity核心原理.md)，比如注入密码Encoder、开放Oauth端口等，详情如下代码所示：
```java
@Configuration
@EnableWebSecurity
public class SecurityConfig extends WebSecurityConfigurerAdapter {
    @Autowired
    private UserDetailsServiceImpl userDetailsService;

    /**
     * 注入BCryptPasswordEncoder进行密码加解密(注入后SpringSecurity会自动调用这个实现，自己也可以注入使用)
     *
     * @return
     */
    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }

    /**
     * 密码模式需要AuthenticationManager
     * @return
     * @throws Exception
     */
    @Bean
    @Override
    protected AuthenticationManager authenticationManager() throws Exception {
        return super.authenticationManager();
    }

    /**
     * 指定用户认证
     *
     * @param auth
     *
     * @throws Exception
     */
    @Override
    protected void configure(AuthenticationManagerBuilder auth) throws Exception {
        auth.userDetailsService(userDetailsService);
    }

    /**
     * 对Security的配置主要在这个方法中进行配置
     *
     * @param http
     *
     * @throws Exception
     */
    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http.formLogin().permitAll()
                .and().authorizeRequests()
                .antMatchers("/oauth/**","/login/**","/logout/**").permitAll()
                .anyRequest().authenticated()
                .and().logout().permitAll()
                .and().csrf().disable();
    }
}
```
### 实现UserDetails和UserDetailsService
&#8195;&#8195;这里我们使用数据库查询用户信息和用户的权限，因此需要自己实现UserDetails和UserDetailsService，实现如下：
```java
@Data
public class LoginUser implements UserDetails {
    /**
     * 数据库中的用户实体
     */
    private SysUser user;

    /**
     * 保存权限信息
     */
    private List<String> permissions;

    /**
     * 这个方法是UserDetails中返回权限的方法，也是在FilterChain中默认调用的方法
     * @return
     */
    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        if (CollectionUtils.isEmpty(grantedAuthorities)) {
            this.grantedAuthorities = permissions.stream().map(SimpleGrantedAuthority::new).collect(Collectors.toList());
        }
        return grantedAuthorities;
    }

    @Override
    public String getPassword() {
        return user.getPassword();
    }

    @Override
    public String getUsername() {
        return user.getUserName();
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return true;
    }
}
```
&#8195;&#8195;在UserDetailsService我们主要实现查询用户和查询用户的权限两个逻辑，并将查询到的信息封装到UserDetails。
```java
public class UserDetailsServiceImpl implements UserDetailsService {
    @Autowired
    private SysUserMapper userMapper;
    @Autowired
    private SysMenuMapper menuMapper;
    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        //根据用户名查询用户信息
        LambdaQueryWrapper<SysUser> wrapper = new LambdaQueryWrapper<>();
        wrapper.eq(SysUser::getUserName, username);
        SysUser user = userMapper.selectOne(wrapper);
        //如果查询不到数据就通过抛出异常来给出提示
        if (Objects.isNull(user)) {
            throw new RuntimeException("用户名或密码错误");
        }
        //根据用户查询权限信息 添加到LoginUser中
        List<String> permissions = menuMapper.selectPermsByUserId(user.getId());
        log.info("{}", user);
        //封装成UserDetails对象返回
        return new LoginUser(user, permissions);
    }
}
```

&#8195;&#8195;以上，我们的准备工作就做完了，下面对Oauth2进行配置和说明。

## 授权服务器配置
&#8195;&#8195;**授权服务器配置需要继承AuthorizationServerConfigurerAdapter类，并实现相关的configure()方法来完成配置，并且需要使用注解@EnableAuthorizationServer使得授权服务器生效**。

&#8195;&#8195;授权服务器需要配置四块内容：客户端详情、令牌服务、令牌端点、安全约束。

```java
@Configuration
@EnableAuthorizationServer
public class AuthenticationServerConfig extends AuthorizationServerConfigurerAdapter {
    //...配置项
}
```
### 客户端详情配置(ClientDetailsServiceConfigurer)
&#8195;&#8195;**客户端详情(ClientDetailsService)**通过ClientDetailsServiceConfigurer进行配置，配置方式包含三种：内存配置、JDBC配置和自定义的ClientDetailsService。这里以内存模式为例，JDBC配置和自定义配置在下面章节结合表结构进行详细说明。
- clientId：必填，客户标识。
- secret：客户端安全码。
- scope：权限范围。
- authorizedGrantaTypes：授权类型，对应四种授权模式和令牌刷新，分别是authentication_code(授权码模式)、implicit(简化模式)、password(密码模式)、client_credentials(客户端模式)、refresh_token(令牌刷新)
- redirectUris：重定向URI
- authorities：此客户端具有的权限，基于SpringSecurity
- resourcesId：此客户端拥有的资源列表
- autoApprove：是否自动跳转到授权页面

```java
@Configuration
@EnableAuthorizationServer
public class AuthenticationServerConfig extends AuthorizationServerConfigurerAdapter {
    @Autowired
    private PasswordEncoder passwordEncoder;

    /**
     * 客户端配置
     * @param clients
     * @throws Exception
     */
    @Override
    public void configure(ClientDetailsServiceConfigurer clients) throws Exception {
        clients.inMemory()
                // 配置clientid
                .withClient("client")
                .secret(passwordEncoder.encode("123456"))
                .accessTokenValiditySeconds(3600 * 24)
                .refreshTokenValiditySeconds(3600 * 24 * 7)
                .redirectUris("http://localhost:14100/subject/all")
                .scopes("all")
                .authorizedGrantTypes("authorization_code","implicit","password","client_credentials","refresh_token");
    }
}
```

### 令牌服务和端点配置配置
&#8195;&#8195;**令牌管理的操作是通过AuthenticationServerTokenService接口实现的**，令牌用来被加载身份信息，包含了该令牌的操作权限。**实现令牌管理操作需要继承DefaultTokenServices这个类**。这个类实现了对令牌的默认操作，可以通过重写相关方法来实现对令牌的操作逻辑。

&#8195;&#8195;另外，我们还需要**通过TokenStore接口实现令牌的持久化**，Spring提供了几种TokenStore的实现类：
- InMemoryTokenStore：默认方式，将令牌保存到内存中。
- JdbcTokenStore：基于JDBC，存储到关系型数据库中，类似的还有RedisTokenStore，用于将令牌存储到Redis中。
- JwtTokenStore：基于JWT的TokenStore。

&#8195;&#8195;首先需要注入一个TokenStore：
```java
    @Bean
    public TokenStore tokenStore(){
        return new InMemoryTokenStore();
    }
```

&#8195;&#8195;接下来需要对TokenService进行配置：
```java
    @Autowired
    private TokenStore tokenStore;

    /**
     * 之前配置的ClientDetailsServiceConfigure
     */
    @Autowired
    private ClientDetailsService clientDetailsService;

    public AuthorizationServerTokenServices tokenServices() {
        DefaultTokenServices tokenServices = new DefaultTokenServices();
        tokenServices.setClientDetailsService(clientDetailsService);
        tokenServices.setTokenStore(tokenStore);
        tokenServices.setSupportRefreshToken(true);
        tokenServices.setAccessTokenValiditySeconds(3600 * 24);
        tokenServices.setRefreshTokenValiditySeconds(3600 * 24 * 7);
        return tokenServices;
    }

    /**
     * 授权码服务注入，此处采用内存方式
     * @return
     */
    @Bean
    public AuthorizationCodeServices codeServices() {
        return new InMemoryAuthorizationCodeServices();
    }

```

&#8195;&#8195;令牌端点配置AuthenticationServerEndpointsConfigurer对于不同的授权类型，需要配置不同的属性：
- authenticationManager：SpringSecurity的授权管理器，当使用password模式时，需要指定AuthenticationManager进行授权。
- userDetailsService：用户管理服务，指定自定义的用户管理实现，这里我们使用准备工作中的视线。也可以把它配置到全局配置中(GlobalAuthenticationManagerConfigurer)，这样在refresh_token时，流程中就会多一个检查的步骤，确保账号仍然有效。
- authenticationCodeServices：设置授权服务器，主要用于授权码模式。
- implicitGrantService：设置简化模式的状态。
- tokenGranter：自定义授权过程，如果设置了这个选项(需要自己实现TokenGranter接口)，所有的授权过程将由实现掌控，不再使用SpringSecurityOauth2的实现，上述的配置全部失效。一般当四种授权模式不满足要求时才使用。
- pathMapping：配置Oauth2的访问地址，即上文中提到的Oauth2的访问端点，这个属性是将默认地址进行映射，映射为我们自定义的地址，比如修改授权提交的端点/oauth/confirm_access

```java 
/**
     * 令牌端点配置
     * @param endpoints
     * @throws Exception
     */
    @Override
    public void configure(AuthorizationServerEndpointsConfigurer endpoints) throws Exception {
        endpoints
                // 认证管理器，密码模式需要提供
                .authenticationManager(authenticationManager)
                // 用户服务实现，密码模式需要提供
                .userDetailsService(userDetailsService)
                // 授权码服务
                .authorizationCodeServices(authorizationCodeServices)
                // token允许的HTTP METHOD
                .allowedTokenEndpointRequestMethods(HttpMethod.OPTIONS,HttpMethod.GET,HttpMethod.POST,HttpMethod.PUT,HttpMethod.PATCH,HttpMethod.DELETE)
                // 令牌管理服务
                .tokenServices(tokenServices());
    }
```
### 安全约束配置
&#8195;&#8195;安全约束相对来说比较简单，但是里面有一个坑，仅仅在自己测试时需要注意，具体配置如下：
```java
/**
     * 端点安全约束配置
     * @param security
     * @throws Exception
     */
    @Override
    public void configure(AuthorizationServerSecurityConfigurer security) throws Exception {
        security
                // 配置密码编解码器
                .passwordEncoder(passwordEncoder)
                // /oauth/token 需要认证后才能访问
                .tokenKeyAccess("isAuthenticated()")
                // /oauth/check_token 公开
                .checkTokenAccess("permitAll()")
                /**
                 * 巨坑：
                 * 使用/oauth/authorize进行授权时，登录的表单没有问题，
                 * 但是使用/oauth/token获取令牌时，这时的authentication并不是上一步的authentication，
                 * 而是使用的SpringSecurity匿名登录的那个authentication，这样的话第一步授权的就无法使用，会得到401 authentication is required
                 * 因此需要允许Form表单授权
                 */
                .allowFormAuthenticationForClients();
    }
```
## 资源服务器配置
&#8195;&#8195;资源服务器是在请求到达时，增加了一步令牌验证的操作。资源服务器也需要通过配置类进行配置，需要继承ResourceServerConfigurerAdapter，不过相对简单，并且资源服务需要通过注解@EnableResourceServer开启：
```java
@Configuration
@EnableResourceServer
public class ResourceServiceConfig extends ResourceServerConfigurerAdapter {
}
```

### 资源服务安全配置
&#8195;&#8195;资源服务的安全配置主要是对ResourceServerSecurityConfigurer进行配置，主要的配置项如下所示：
- tokenServices：ResourceServerTokenServices实例，可选，用来实现令牌服务，即如何验证令牌。
- tokenStore：TokenStore实例，token存储配置，可选。
- resourcesId：这个资源服务的ID，可选，但是推荐在授权服务中进行配置。
- 其他扩展：tokenExtractor，令牌提取器，用来提取请求中的令牌。

```java
/**
     * 资源id
     */
    public static final String RESOURCE_TEST="test";


    /**
     * 资源服务器安全配置
     * @param resources
     * @throws Exception
     */
    @Override
    public void configure(ResourceServerSecurityConfigurer resources) throws Exception {
        resources
                //resourceId
                .resourceId(RESOURCE_TEST)
                // token验证服务配置
                .tokenServices(tokenServices())
                // 无状态模式，不需要存储session等
                .stateless(true);
        super.configure(resources);
    }

    public ResourceServerTokenServices tokenServices() {
        // 模拟远程验证，即去授权中心验证
        RemoteTokenServices services = new RemoteTokenServices();
        // 授权中心验证地址
        services.setCheckTokenEndpointUrl("http://localhost:12000/oauth/check_token");
        // 需要验证的客户端名称
        services.setClientId("client");
        // 需要验证的客户端秘钥
        services.setClientSecret("123456");
        return services;
    }
```
### http安全配置
&#8195;&#8195;http安全配置与SpringSecurity类似，此处不再过多赘述，详见[SpringSecurity核心原理](SpringSecurity核心原理.md)一文。

```java
/**
     * 配置需要验证的资源服务
     * @param http
     * @throws Exception
     */
    @Override
    public void configure(HttpSecurity http) throws Exception {
        http
                // 校验请求
                .authorizeRequests()
                // 资源路径
                .antMatchers("/test/**")
                // 判断token携带权限作用域
                .access("#oauth2.hasScope('all')")
                .and().csrf().disable()
                .sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS);

    }
```

## 四种模式测试
### 授权码模式
1. 获取授权码
```lua
>http://localhost:12000/oauth/authorize?response_type=code&client_id=client&redirect_uri=http://localhost:14100/subject/all&scope=all
```
&#8195;&#8195;服务器启动后发送请求，此时还没有登录，要求进行登录和认证，如下所示：

![登录和认证](/images/microservice/auth/登录和认证.png)

&#8195;&#8195;认证成功后会跳转到授权页面，如下所示，选择授权：

![授权页面](/images/microservice/auth/授权页面.png)

&#8195;&#8195;授权后，认证服务器返回带有授权码的请求跳转：

![授权码](/images/microservice/auth/授权码.png)

2. 获取token
&#8195;&#8195;携带上一步的授权码以及所需要的参数，访问申请令牌的请求，获得令牌：

![使用授权码获取token](/images/microservice/auth/使用授权码获取token.png)

3. 携带token访问资源
&#8195;&#8195;访问资源时携带令牌进行访问：

![使用token访问资源](/images/microservice/auth/使用token访问资源.png)

### 简化模式
&#8195;&#8195;下图是通过简化模式获取token：

![简化模式token](/images/microservice/auth/简化模式token.png)

### 密码模式
&#8195;&#8195;下图是通过密码模式获取token：

![密码模式token](/images/microservice/auth/密码模式token.png)

### 客户端模式
&#8195;&#8195;下图是通过客户端模式获取token：

![客户端模式token](/images/microservice/auth/客户端模式token.png)

### 更新令牌
&#8195;&#8195;下图是刷新token的请求：

![刷新token](/images/microservice/auth/刷新token.png)

## 自定义认证页面
&#8195;&#8195;内置的自定义页面是基于@FrameworkEndpoint方式做的，实现在WhitelabelApprovalEndpoint和WhitelabelErrorEndpoint，分别实现了/oauth/confirm_access和/oauth/error两个页面。

### 自定义Controller方式
&#8195;&#8195;这种方式**需要自己实现一个Controller，并且带上@SessionAttributes({"authorizationRequest"})这个注解**。

&#8195;&#8195;Controller中的Mapping可以相同也可以不同，Spring Security OAuth2会优先调用自己设置的Controller。但是返回值必须是ModelAndView。

### 通过授权服务配置Endpoint
&#8195;&#8195;这种方法就是上述授权服务配置时提供的可以替换指定Endpoint路径的方式。

