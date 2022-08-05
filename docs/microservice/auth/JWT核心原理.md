---
title: JWT核心原理
prev:
  text: SpringSecurityOauth2核心原理
  link: /microservice/auth/SpringSecurityOauth2核心原理.md
next:
  text: SpringSecurity实现OOS
  link: /microservice/auth/SpringSecurity实现OOS.md
---
::: info
&#8195;&#8195;JSON Web Token(JWT)是一个开放的行业标准(RFC 7519)，它定义了一种简介的、自包含 的协议格式，用于在通信双方传递json对象，传递的信息经过数字签名可以被验证和信任。JWT 可以使用HMAC算法或使用RSA的公钥/私钥对来签名，防止被篡改。https://jwt.io/

&#8195;&#8195;JWT有以下的特点：
- 基于Json，非常方便
- 令牌中可以自定义丰富的内容，易于扩展
- 防止篡改，基于非对称加密和数字签名技术，安全性高
- 资源服务使用JWT可以不依赖于授权服务
- 令牌较长，存储空间相对大
:::
[[toc]]
***

## JWT组成
&#8195;&#8195;JWT实际上是一个字符串，由三部分组成：header、payload、signature。如图所示是JWT结构展示:

![jwt结构](/images/microservice/auth/jwt结构.png)

### 头部（header）
&#8195;&#8195;**头部描述了的组基本的信息，即类型(JWT)、签名所用的算法（如RSA**）等，也可以被表示成一个JSON对象。
```json
{
  "alg": "HS256",
  "typ": "JWT"
}
```

&#8195;&#8195;再将上述信息进行**Base64编码得到的字符串**，就是头部，因此头部还可以被解码的。

### 载荷（payload）
&#8195;&#8195;载荷是存放有效信息的地方，有效信息包含三个部分：
- **标准中注册的声明**（不强制使用）
  - iss：jwt签发者
  - sub：jwt所面向的用户
  - aud：接收jwt的一方
  - exp：jwt过期时间，必须大于签发时间
  - nbf：定义在这个时间前，jwt都是不可用的
  - iat：jwt的签发时间
  - jti：jwt的唯一身份标识，主要用来做一次性token，从而回避重放攻击
- **公共的声明**：可以存放任何信息，一般添加用户信息和其他业务需要的必要信息，但是不应该添加敏感信息，这部分在客户端也可解密
- **私有的声明**：私有声明是提供者和消费者共同定义的声明，不应该存放敏感信息，也是可以被解密的。

&#8195;&#8195;**载荷部分也是以上三部分信息的Base64编码**，因此也相当于铭文，不应该存放敏感信息。如下是一个payload的json对象：
```json
{
"sub": "1234567890",
"name": "John Doe",
"iat": 1516239022
}
```

### 签名（signature）
&#8195;&#8195;签名信息也是由三部分组成：
- header(Base64后的)
- payload(Base64后的)
- secret(盐，需要保密)

&#8195;&#8195;**这部分需要使用“.”连接Base64后的header和payload，然后使用header中声明的加密方式进行加盐secret的组合加密，成为签名**。

```javascript
var encodedString = base64UrlEncode(header)+'.'+base64UrlEncode(payload);
var signature = HMACSHA256(encodedString,'zhangsansecret');
```

&#8195;&#8195;**需要注意的是，secret是保存在服务端的，jwt签发也是在服务端，secret就是进行jwt签发和认证的(即私钥)，任何场景都不应该流露出去**。

## JJWT
&#8195;&#8195;JJWT是Java开发中泛用性比较广的JWT的包，包含了常用的JWT加解密、验证等功能的封装，并且支持多种加密算法。

### 依赖
```xml
<dependency>
    <groupId>io.jsonwebtoken</groupId>
    <artifactId>jjwt</artifactId>
</dependency>
```
### 生成token
&#8195;&#8195;如下代码可以用于生成token：
```java
@Test
    public void createToken() {
        log.info("======================创建token======================");
        JwtBuilder builder = Jwts.builder()
                // 声明用户ID
                .setId("client")
                // 声明用户主体
                .setSubject("zhangsan")
                // 创建日期
                .setIssuedAt(new Date())
                // 签名
                .signWith(SignatureAlgorithm.HS512,"123456");

        // 创建token
        String token = builder.compact();
        log.info("token:{}",token);
        log.info("======================token解码======================");
        String[] split = token.split("\\.");
        log.info("token header:{}", Base64Codec.BASE64.decodeToString(split[0]));
        log.info("token payload:{}", Base64Codec.BASE64.decodeToString(split[1]));
        log.info("token signature:{}", Base64Codec.BASE64.decodeToString(split[2]));

    }
```

&#8195;&#8195;显示结果如下，我们可以看到由"."拼接的token字符串，和每一部分解码后的Json对象，以及不能Base64解码的signature。

![生成token](/images/microservice/auth/生成token.png)

### token验证
&#8195;&#8195;token的验证代码如下，解密需要持有secret：
```java
@Test
    public void testToken() {
        String token = "eyJhbGciOiJIUzUxMiJ9.eyJqdGkiOiJjbGllbnQiLCJzdWIiOiJ6aGFuZ3NhbiIsImlhdCI6MTY1OTY2NTc0Nn0.XJsGR0Q2BEnqxxdfy7lWDzVpBEIYUulbJoFtw_64XStP5I0yOkSWnV8PMq57Bn-TykXXkd6YrRrPB677zsWi3w";
        Claims claims = Jwts.parser()
                // 加密secret
                .setSigningKey("123456")
                .parseClaimsJws(token)
                .getBody();
        log.info("======================token解析======================");
        log.info("ClientId：{}",claims.getId());
        log.info("Subject:{}",claims.getSubject());
        log.info("IssueAt:{}",claims.getIssuedAt());
    }
```

&#8195;&#8195;解析结果如下，正确的解析出了token的信息：

![token解析](/images/microservice/auth/token解析.png)

### token过期校验
&#8195;&#8195;我们大多数情况下是不希望token长期有效的，创建token时可以通过setExpiration方法设置过期校验时间。
```java
JwtBuilder builder = Jwts.builder()
                // 声明用户ID
                .setId("client")
                // 声明用户主体
                .setSubject("zhangsan")
                // 创建日期
                .setIssuedAt(new Date())
                // 设置过期校验
                .setExpiration(new Date(System.currentTimeMillis()+60*1000))
                // 签名
                .signWith(SignatureAlgorithm.HS512,"123456");
```

&#8195;&#8195;token在有效期内可以正常的解析，如果超过有效期时间，那么就会报错：

![token过期](/images/microservice/auth/token过期.png)

### 自定义claims
&#8195;&#8195;我们需要自定义一些属性时，可以通过claim传入，如下所示：
```java
JwtBuilder builder = Jwts.builder()
                // 声明用户ID
                .setId("client")
                // 声明用户主体
                .setSubject("zhangsan")
                // 创建日期
                .setIssuedAt(new Date())
                // 设置过期校验
                .setExpiration(new Date(System.currentTimeMillis()+60*1000))
                // 自定义claim属性，直接传入map
                .claim("roles","admin")
                .claim("logo","abc.png")
                // 签名
                .signWith(SignatureAlgorithm.HS512,"123456");
```

&#8195;&#8195;解析自定义的claim也是通过claims进行解析，只要传入map的key即可：
```java
@Test
    public void testToken() {
        String token = "eyJhbGciOiJIUzUxMiJ9.eyJqdGkiOiJjbGllbnQiLCJzdWIiOiJ6aGFuZ3NhbiIsImlhdCI6MTY1OTY2NzAzOCwiZXhwIjoxNjU5NjcwNjM4LCJyb2xlcyI6ImFkbWluIiwibG9nbyI6ImFiYy5wbmcifQ.V7P0hd7SsFl3A58sa4jWyhAU0FwO9IPuf0T9ZGQ-y91LyiEQx7sYqts5r8JM4iCSm3HsiRMUdZQUEwzAgAGcTA";
        Claims claims = Jwts.parser()
                // 加密secret
                .setSigningKey("123456")
                .parseClaimsJws(token)
                .getBody();
        log.info("======================token解析======================");
        log.info("ClientId：{}",claims.getId());
        log.info("Subject:{}",claims.getSubject());
        log.info("IssueAt:{}",claims.getIssuedAt());
        log.info("Expiration:{}",claims.getExpiration());
        log.info("Now:{}",new Date());
        log.info("roles:{}",claims.get("roles"));
        log.info("logo:{}",claims.get("logo"));
    }
```


&#8195;&#8195;解析结果如下所示：

![自定义claim](/images/microservice/auth/自定义claim.png)

## Spring Security Oauth2 整合 JWT
&#8195;&#8195;使用Spring Security Oauth2整合JWT的话需要在之前[Spring Security Oauth2项目](SpringSecurityOauth2核心原理.md)上进行修改，具体代码如下：
### 依赖
```xml
<dependency>
    <groupId>org.springframework.security</groupId>
    <artifactId>spring-security-jwt</artifactId>
    <version>1.1.1.RELEASE</version>
</dependency>
```
### 配置
&#8195;&#8195;配置文件需要注入Jwt的TokenStore，同时注入JwtToken的解码器：
```java
@Configuration
public class JwtTokenStoreConfig {

    @Bean
    public JwtAccessTokenConverter jwtAccessTokenConverter(){
        JwtAccessTokenConverter converter = new JwtAccessTokenConverter();
        converter.setSigningKey("123456");
        return converter;
    }

    @Bean(name = "jwtTokenStore")
    public TokenStore jwtTokenStore() {
        return new JwtTokenStore(jwtAccessTokenConverter());
    }
}
```

### 指定授权服务器tokenStore
&#8195;&#8195;将授权服务器的TokenStore指定为JwtTokenStore，并指定JwtToken的解码器：
```java
    @Autowired
    @Qualifier("jwtTokenStore")
    private TokenStore tokenStore;

    @Autowired
    private JwtAccessTokenConverter jwtAccessTokenConverter;  


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
                .authorizationCodeServices(codeServices())
                // token允许的HTTP METHOD
                .allowedTokenEndpointRequestMethods(HttpMethod.OPTIONS,HttpMethod.GET,HttpMethod.POST,HttpMethod.PUT,HttpMethod.PATCH,HttpMethod.DELETE)
                // 令牌管理服务
                .tokenServices(tokenServices());
    }

    /**
     * 令牌服务
     * @return
     */
    public AuthorizationServerTokenServices tokenServices() {
        DefaultTokenServices tokenServices = new DefaultTokenServices();
        tokenServices.setClientDetailsService(clientDetailsService);
        // tokenServices.setTokenStore(tokenStore());
        //配置jwtTokenStore和Converter
        tokenServices.setTokenStore(tokenStore);
        tokenServices.setTokenEnhancer(jwtAccessTokenConverter);
        
        tokenServices.setSupportRefreshToken(true);
        tokenServices.setAccessTokenValiditySeconds(3600 * 24);
        tokenServices.setRefreshTokenValiditySeconds(3600 * 24 * 7);
        return tokenServices;
    }
```

&#8195;&#8195;使用密码模式进行测试获得的结果：

![jwt密码模式](/images/microservice/auth/jwt密码模式.png)

&#8195;&#8195;我们使用这个结果去官网进行解析，或者使用刚才的测试程序进行解析：

![jwt密码模式解析](/images/microservice/auth/jwt密码模式解析.png)

### 扩展JWT中的内容
&#8195;&#8195;使用Spring Security提供jwt工具时，如果要进行扩展Jwt的内容，需要实现TokenEnhance接口，实现一个自己的Token增强器，并且重写enhance()方法。
```java
public class JwtTokenEnhancer implements TokenEnhancer {
    @Override
    public OAuth2AccessToken enhance(OAuth2AccessToken oAuth2AccessToken, OAuth2Authentication oAuth2Authentication) {
        Map<String, Object> map = new HashMap<>();
        map.put("enhance","enchance info");
        ((DefaultOAuth2AccessToken) oAuth2AccessToken).setAdditionalInformation(map);
        return oAuth2AccessToken;
    }
}
```

&#8195;&#8195;同时需要把这个TokenEnhance注入到Spring容器中：
```java
@Bean
    public TokenEnhancer tokenEnhancer(){
        return new JwtTokenEnhancer();
    }
```

&#8195;&#8195;在授权服务器中配置Token增强：
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
                .authorizationCodeServices(codeServices())
                // token允许的HTTP METHOD
                .allowedTokenEndpointRequestMethods(HttpMethod.OPTIONS,HttpMethod.GET,HttpMethod.POST,HttpMethod.PUT,HttpMethod.PATCH,HttpMethod.DELETE)
                // 令牌管理服务
                .tokenServices(tokenServices());
    }

    /**
     * 令牌服务
     * @return
     */
    public AuthorizationServerTokenServices tokenServices() {
        // 增强器
        TokenEnhancerChain enhancerChain = new TokenEnhancerChain();
        List<TokenEnhancer> enhancers = new ArrayList<>();
        enhancers.add(tokenEnhancer());
        enhancers.add(jwtAccessTokenConverter);
        enhancerChain.setTokenEnhancers(enhancers);

        DefaultTokenServices tokenServices = new DefaultTokenServices();
        tokenServices.setClientDetailsService(clientDetailsService);
        // tokenServices.setTokenStore(tokenStore());
        //配置jwtTokenStore和Converter
        tokenServices.setTokenStore(tokenStore);
        tokenServices.setTokenEnhancer(enhancerChain);

        tokenServices.setSupportRefreshToken(true);
        tokenServices.setAccessTokenValiditySeconds(3600 * 24);
        tokenServices.setRefreshTokenValiditySeconds(3600 * 24 * 7);
        return tokenServices;
    }
```

&#8195;&#8195;之后我们还是使用密码模式进行测试，并将获得的token在官网进行解析：

![token增强解析](/images/microservice/auth/token增强解析.png)

