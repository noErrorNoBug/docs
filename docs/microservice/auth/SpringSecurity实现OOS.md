---
title: SpringSecurity实现OOS
prev:
  text: JWT核心原理
  link: /microservice/auth/JWT核心原理.md
next:
  text: SpringSecurity实现OOS
  link: /microservice/auth/SpringSecurity实现OOS.md
---
::: info 单点登录介绍
&#8195;&#8195;目前每家企业或者平台都存在不止一套系统，由于历史原因每套系统采购于不同厂商，所以系统间都是相互独立的，都有自己的用户鉴权认证体系，当用户进行登录系统时，不得不记住每套系统的用户名密码，同时，管理员也需要为同一个用户设置多套系统登录账号，这对系统的使用者来说显然是不方便的。我们期望的是如果存在多个系统，只需要登录一次就可以访问多个系统，只需要在其中一个系统执行注销登录操作，则所有的系统都注销登录，无需重复操作，这就是单点登录(Single Sign On 简称SSO)系统实现的功能。

&#8195;&#8195;单点登录是系统功能的定义，而实现单点登录功能，目前开源且流行的有CAS和OAuth2两种方式，过去我们用的最多的是CAS，现在随着SpringCloud的流行，更多人选择使用SpringSecurity提供的OAuth2认证授权服务器实现单点登录功能。
:::
[[toc]]
***

## Spring Security Oauth2 实现单点登录
&#8195;&#8195;实现Spring Security Oauth2的单点登录之前，我们需要了解OOS、[Spring Security](SpringSecurity核心原理.md)、[Oauth2](Oauth2协议详解.md)和[Jwt](JWT核心原理.md)的相关知识，详见相关文章，此处不再赘述。
### 业务时序图

![SpringSecurityOauth2单点登录流程](/images/microservice/auth/SpringSecurityOauth2单点登录流程.png)

&#8195;&#8195;如上图所示是单点登录的流程，ClientA和ClientB是受保护的单点登录资源，Authentication Client是授权服务器，整体访问流程包含四步：首次尝试访问ClientA的资源、首次尝试授权、单点登录和授权访问访问ClientA资源、访问ClientB资源。

- 首次尝试访问Client A的资源：首次访问Client A资源时，由于资源保护，需要重定向到授权服务器的授权页面。
- 首次尝试授权：授权服务器判断用户未登录，需要用户登录后进行授权。
- 单点登录和授权访问Client A资源：登录和授权符合Oauth2的密码模式或者授权码模式，不同的流程在于授权服务器会基于Session保存用户的登录状态，同时要访问的ClientA也会保存用户的登录状态。
- 访问Client B资源：当想要访问ClientB时，授权服务器可以通过相同SessionID来获取同一个会话的登录状态，因此不需要再次登录。

### 客户端实现
&#8195;&#8195;客户端需要@EnableOAuth2Sso注解来开启单点登录功能。并且需要添加配置：
```yml
server.port=8081
#防止Cookie冲突，冲突会导致登录验证不通过
server.servlet.session.cookie.name=OAUTH2‐CLIENT‐SESSIONID01
#授权服务器地址
oauth2‐server‐url:http://localhost:8080
#与授权服务器对应的配置
security.oauth2.client.client‐id=client
security.oauth2.client.client‐secret=123123
security.oauth2.client.user‐authorization‐uri=${oauth2‐serverurl}/oauth/authorize 10 security.oauth2.client.access‐token‐uri=${oauth2‐server‐url}/oauth/token
security.oauth2.resource.jwt.key‐uri=${oauth2‐server‐url}/oauth/token_key
```

### 授权服务器实现
&#8195;&#8195;授权服务器需要绑定跳转路径为资源服务的登录页面：

![绑定登录页](/images/microservice/auth/绑定登录页.png)

## Spring Cloud 实现单点登录思路
### 网关实现权限校验的原理
&#8195;&#8195;网关整合Oauth2有两种思路，一种是授权服务器生成令牌，所有的请求在网关层进行统一的验证，判断权限等操作。另一种是由资源服务器进行处理，网关只做请求转发。比较常用的是第一种，把网关作为授权服务器的一个角色，实现介入客户端的权限拦截、令牌解析和转发当前登录用户信息给微服务，这样下游服务只需要关心业务，不需要关心令牌格式等与认证授权相关的事情了。

&#8195;&#8195;网关在认证授权体系中主要负责两件事：
1. 作为Oauth2.0的资源服务器角色，实现接入方的权限拦截。
2. 令牌解析并转发当前登录用户信息(明文token)给微服务。

&#8195;&#8195;下游的微服务拿到明文token后(明文token中存放登录用户信息和权限信息)也需要做两件事：
1. 用户拦截（再次验证当前用户是否有权限访问该服务对应资源）。
2. 将用户信息存储到进程的上下文(有利于后续逻辑获取当前用户信息)。


![gateway集成oauth2](/images/microservice/auth/gateway集成oauth2.png)

### 实现示例
```java
@Component
@Order(0)
publicclassAuthenticationFilterimplementsGlobalFilter,InitializingBean{

  @Autowired
  private RestTemplate restTemplate;

  private static Set<String> shouldSkipUrl = new LinkedHashSet<>();
  @Override
  public void afterPropertiesSet() throws Exception {
// 不拦截认证的请求
shouldSkipUrl.add("/oauth/token");
shouldSkipUrl.add("/oauth/check_token");
shouldSkipUrl.add("/user/getCurrentUser");
}
@Override
public Mono<Void> filter(ServerWebExchange exchange, GatewayFilterChain chain) {
String requestPath = exchange.getRequest().getURI().getPath();
//不需要认证的url
if(shouldSkip(requestPath)) {
return chain.filter(exchange);
}

//获取请求头
String authHeader = exchange.getRequest().getHeaders().getFirst("Authorization");

//请求头为空
if(StringUtils.isEmpty(authHeader)) {
throw new RuntimeException("请求头为空");
}
TokenInfo tokenInfo=null;
try{
//获取token信息
tokenInfo = getTokenInfo(authHeader);
}catch (Exception e) {
throw new RuntimeException("校验令牌异常");
}
exchange.getAttributes().put("tokenInfo",tokenInfo);
return chain.filter(exchange);
}

private boolean shouldSkip(String reqPath) {
for(String skipPath:shouldSkipUrl) {
if(reqPath.contains(skipPath)) {
return true;
}
}
return false;
}

private TokenInfo getTokenInfo(String authHeader) {
// 获取token的值
String token = StringUtils.substringAfter(authHeader, "bearer ");

HttpHeaders headers = new HttpHeaders();
headers.setContentType(MediaType.APPLICATION_FORM_URLENCODED);
headers.setBasicAuth(MDA.clientId, MDA.clientSecret);
MultiValueMap<String, String> params = new LinkedMultiValueMap<>();
params.add("token", token);
HttpEntity<MultiValueMap<String, String>> entity = new HttpEntity<>(params, headers);
ResponseEntity<TokenInfo> response = restTemplate.exchange(MDA.checkTokenUrl, HttpMethod.P OST, entity, TokenInfo.class);
return response.getBody(); }
}
```