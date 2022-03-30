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
# Jedis简单应用

## Jedis连接代码

```java
/**
 * 连接池配置
 */
JedisPoolConfig config = new JedisPoolConfig();
config.setMaxTotal(20); //最大连接数
config.setMaxIdle(10);  //最大空闲连接数
config.setMinIdle(5);   //最小空闲连接数
JedisPool pool = new JedisPool(config, "118.126.82.157", 6379);//建立连接池
Jedis jedis = pool.getResource();//获取jedis对象
System.out.println(jedis.set("jedis:single","test-jedis"));//set操作
System.out.println(jedis.get("jedis:single"));//get操作
```
## 管道操作

**管道操作不是原子的**，如果有报错会跳过，类似于队列。

```java
Pipeline pipelined = jedis.pipelined();
for (int i = 0; i < 10; i++) {
    pipelined.incr("pipeline:incr");
    pipelined.set("pipeline:value:" + i, "value");
    //模拟管道报错
    pipelined.setbit("pipeline:exception:"+i,-1,true);
}
List<Object> returnAll = pipelined.syncAndReturnAll();
System.out.println(returnAll);
```
## Lua脚本

* **原子操作**，所有的操作包装在Lua脚本中一起执行。
* 减少网络开销，跟管道一样，多次操作连接一次一块儿执行。
* **替代Redis的事务功能**，redis的自身的事务支持不好，建议使用Lua脚本。
* 不要在Lua脚本中出现死循环或者耗时操作，不然会阻塞Redis。
### 语法

```shell
# 语法格式
EVAL script numkeys key [key ...] arg [arg ...]
```
### Jedis应用

```java
/**
 * Lua脚本模拟减库存操作
 */
jedis.set("lua:product:10016","15");//库存设置为15
String script = "local count = redis.call('get',KEYS[1])"
        + "  local a = tonumber(count)"
        + "  local b = tonumber(ARGV[1])"
        + "  if a >= b then"
        + "  redis.call('set',KEYS[1],a-b)"
        //模拟语法报错
        //+ "bb == 0"
        + "  return 1"
        + "  end"
        + "  return 0";
Object eval = jedis.eval(script, Arrays.asList("lua:product:10016"), Arrays.asList("10"));
System.out.println(eval);
```
## 哨兵访问

```java
public class JedisSentinelTest {
    public static void main(String[] args) {
        /**
         * 连接池配置
         */
        JedisPoolConfig config = new JedisPoolConfig();
        config.setMaxTotal(20); //最大连接数
        config.setMaxIdle(10);  //最大空闲连接数
        config.setMinIdle(5);   //最小空闲连接数
        /**
         * 配置哨兵节点
         */
        String masterName = "redis-master-1";
        Set<String> sentinels = new HashSet<>();
        // sentinels.add(new HostAndPort("118.126.82.157",26380).toString());
        // sentinels.add(new HostAndPort("118.126.82.157",26381).toString());
        // sentinels.add(new HostAndPort("118.126.82.157",26382).toString());
        sentinels.add(new HostAndPort("sunqiang.club",26380).toString());
        sentinels.add(new HostAndPort("sunqiang.club",26381).toString());
        sentinels.add(new HostAndPort("sunqiang.club",26382).toString());
        JedisSentinelPool pool = new JedisSentinelPool(masterName, sentinels, config);
        Jedis jedis = null;
        try {
            jedis = pool.getResource();
            System.out.println(jedis.set("sentinel:jedis","test1"));
            System.out.println(jedis.get("sentinel:jedis"));
        } catch (Exception e) {
            e.printStackTrace();
        } finally {
            // 这里不是释放，是将资源归还到pool
            if (jedis != null) {
                jedis.close();
            }
        }
    }
}
```

## Spring哨兵访问

```yaml
server:
  port: 8080
spring:
  redis:
    database: 0
    timeout: 3000
    password: admin.redis
    sentinel:
      master: redis-master-1
      nodes: 118.126.82.157:26380,118.126.82.157:26381,118.126.82.157:26382
    lettuce:
      pool:
        max-idle: 50
        min-idle: 10
        max-active: 100
        max-wait: 3000
```

```java
@Slf4j
@RestController
public class RedisController {
    @Autowired
    private StringRedisTemplate stringRedisTemplate;
    @RequestMapping("/sentinel")
    public void testSentinel() {
        stringRedisTemplate.opsForValue().set("spring:sentinel","test2");
        stringRedisTemplate.delete("spring:sentinel");
        stringRedisTemplate.delete("jedis:single");
    }
}
```

## Jedis集群操作

```java
public class JedisClusterTest {
    public static void main(String[] args) {
        /**
         * 连接池配置
         */
        JedisPoolConfig config = new JedisPoolConfig();
        config.setMaxTotal(20); //最大连接数
        config.setMaxIdle(10);  //最大空闲连接数
        config.setMinIdle(5);   //最小空闲连接数
        /**
         * 集群节点配置
         */
        HashSet<HostAndPort> nodes = new HashSet<>();
        nodes.add(new HostAndPort("118.126.82.157",6380));
        nodes.add(new HostAndPort("118.126.82.157",6381));
        nodes.add(new HostAndPort("118.126.82.157",6382));
        nodes.add(new HostAndPort("118.126.82.157",6383));
        nodes.add(new HostAndPort("118.126.82.157",6384));
        nodes.add(new HostAndPort("118.126.82.157",6385));
        /**
         * 集群连接
         * connectionTimeout:连接超时时间
         * soTimeout:读取数据超时时间
         * maxAttempts:重试次数
         */
        JedisCluster jedisCluster = new JedisCluster(nodes,3000,500,3,"admin.redis",config);
        /**
         * 模拟基本操作
         */
        System.out.println(jedisCluster.set("jedis:single","test1"));
        System.out.println(jedisCluster.get("jedis:single"));
    }
```

## Spring集群访问

```yaml
server:
  port: 8080
spring:
  redis:
    database: 0
    timeout: 3000
    password: admin.redis
    cluster:
      nodes: 118.126.82.157:6380,118.126.82.157:6381,118.126.82.157:6382,118.126.82.157:6383,118.126.82.157:6384,118.126.82.157:6385
    lettuce:
      pool:
        max-idle: 50
        min-idle: 10
        max-active: 100
        max-wait: 3000
```

