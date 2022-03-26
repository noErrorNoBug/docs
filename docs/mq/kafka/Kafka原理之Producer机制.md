# 消息压缩机制

不管哪个版本Kafka，消息分为两个维度，Message Set 和Message，也就是消息集合以及消息，一个消息一般是由多条日志log组成的，Kafka通常不会直接操作消息，而是操作消息集合。**Kafka做消息****压缩****的地方主要有两个：生产者端和Broker。其中以****生产者****端为主，Broker只是处理部分特殊情况**。

消息压缩的整个过程简而言之：**生产者压缩、Broker保持、消费者解压**。

## 消息压缩实现

生产者程序中配置props.put(“compression.type”, “gzip”)即可开启消息压缩，并且压缩算法是GZIP。这样以来每条消息都是通过gzip压缩过后的，可以有效的减少带宽和内存及磁盘占用。

## 消息解压缩

压缩后的消息，一般情况下Broker是不动它的，一直等到消费端消费时，将消息pull下来后在消费端进行解压缩。kafka会把压缩的消息放在消息集合中时也会将压缩算法封装到消息集合，Consumer从消息集合取到消息，也会取到压缩算法，就可以进行对应的解压缩。

## 是否开启压缩的选择时机

* 生产者CPU资源：我们知道消息的压缩是由生产者控制的，也就是说如果生产者的CPU资源非常的充足，那么我们就可以开启压缩功能；反之资源紧张的情况下，不建议开启压缩，别给自己搞崩掉。
* 网卡带宽：如果网卡带宽不是很充足，那么建议开启压缩的，节省带宽资源。
# 消息确认机制

## 回调方法

目前Kafka是异步发送消息的，也就是说调用了send(msg)方法后，会立即返回，但是此时并不能确认消息就已经发送完成。

但是同样的，**Kafka也提供了带有回调方法的的API，也就是producer.send(msg,callback)，回调方法不仅能够准确的告诉你是否已经发送成功，而且一旦出现发送失败的情况，还能针对性的进行处理**。

## 消息持久化机制

在Producer中可以通过ack的配置，设置生产者端消息持久化机制以保证消息的送达确认：

* **ack=0**：级别最低，不需要等待任收到何一个Broker的消息确认，就可以发送下一条消息。
* **ack=1**：至少需要等待Leader的分区将消息写入Log持久化后，才会发送下一条消息，不需要等待Follower持久化。
* **ack=all**：需要等待设置的min.insync.replicas数量的副本将消息持久化后才会发送下一条消息。
## 消息重试

Kafka提供了消息重试机制，可以通过Producer端进行配置，主要有两个参数需要配置

* 重试次数
* 重试间隔时间
# 消息缓冲区机制

**Prod****uc****e****r端允许先将一步分消息存储在本地缓存，然后分批向Broker发送消息**。默认情况下，允许本次拥有一个32M的缓冲区，每批次发送消息的数量为16KB，还可以设置每批次发送的最长等待时间，即如果消息不满16KB也将不再等待直接发送。

# 幂等和事务

## 幂等型Producer

Kafka提供了一个幂等的参数，可以使的Producer对发送的消息实现幂等性，这个参数是enable.idempotence，当这个参数设置为true时，Producer自动升级成幂等的Producer。

大概**原理是空间换时间**的一个概念，Producer多花费一定的空间，记录消息发送的字段，当每次发送时进行判断，如果是相同的消息那么就不再发送。

但是幂等事务的作用范围十分有限：

* **只能保证单分区幂等**：也就是说只能实现一个Topic在一个Partition的幂等性，跨分区或者Topic是不行的。
* **只能保证单会话幂等**：可以理解在当前进程下可以保证幂等性，如果Kafka宕机或者重启了，那么对以前的消息也就不具备幂等条件了。
## 事务型Producer

**事务型Producer是指****可以****保证消息****原子****的写入多个Partition中，要么全部写入成功****，****要么全部写入失败。另外事务型Producer也不惧怕进程重启**。

开启事务型Producer的方法也很简单：

* 将参数enable.idempotence = true 开启
* 设置一个 transaction id，最好是有意义的id
* 调用事务api
```java
producer.initTransactions();
try {
            producer.beginTransaction();
            producer.send(record1);
            producer.send(record2);
            producer.commitTransaction();
} catch (KafkaException e) {
            producer.abortTransaction();
}
```

事务型的Producer发送的消息，不管事务最终成功和失败，发送到Broker的消息都会存入log，也就是说，所有的消息（无论成功失败与否），Consumer端是都可以看到的，因此如果使用了事务型Producer，消费端也是需要修改的，主要是修改isolation.level参数，这个参数有两个值：

* read_uncommitted：默认值，表示可以读取所有类型的消息，不管是一般的消息、事务型Producer提交的事务消息还是终止事务的消息。
* read_committed：只读取事务提交成功的消息，但是可以看到全部消息。
# TCP连接管理

**K****afk****a的通信是基于TCP的，而不是Http或者其他协议**。

## 为何使用TCP连接

从社区角度来讲，可以利用TCP提供的很多高级功能，比如多路复用请求以及同时轮询多个连接。

所谓的多路复用请求就是，将两个或者多个数据流合并到底层单一物理连接中的过程，TCP多路复用请求会在一个物理连接上创建多个虚拟连接，每个虚拟连接负责流转对应的数据流。严格来讲，TCP并不算是多路复用，它只是提供可靠地消息交付语义保证，比如自动重传丢失的报文。

更严谨的说，TCP是一个基于报文的协议，TCP能够被用于多路复用的场景的前提是，上层的应用协议如http允许发送多条消息。

除此之外，http协议在很多语言中的包装过于简陋也是选择TCP协议的原因。

## 何时开启TCP连接

对于Kafka的Java Client来说，有两个地方可以建立连接，一个是 Producer producer = new KafkaProducer(prop);一个是调用producer.send(msg,callback)方法发送信息。

**第一个地方**，在创建KafkaProducer的时候确实会建立连接，确切的说，**在创建Kafka实例时****，****生产者应用****会创建****并且在****后台启动****一个Sender线程，该线程****会首先****与Broker****进行****连接。Sender线程会与你****需要****建立连接****的****指定****的****所有****的地址的集群进行连接。因此，一般****在****创建KafkaProducer 的****时候****，指定3-4台Broker的****地址****就可以了，因为****连接****到任意一台，就可以取到集群信息**。

**第二个地方，元数据更新时**，这里**并不是总创建TCP****连接**，当Producer更新了Kafka集群的元数据后，如果有些Broker没有连接，那么Client会进行TCP连接。更新元数据的场景也有两种，一个是尝试给一个不存在的Topic发送消息，这时发送失败，会更新元数据；另外就是设置了定时更新元数据的配置。

**第三个地方，发送消息时**，**也并不总会创建TCP****连接**，同样的道理，如果跟某些Broker没有建立连接，那么在消息发送前就需要建立连接。

## 何时关闭TCP连接

Kafka提供了两种关闭TCP连接的方式，**一种是****主动****关闭****，****也就是producer.****c****l****o****se()**。

**另一种****是****kafka帮助client****关闭**。第二种方式与Producer端的参数**connections.max.idle.ms**有关，即在配置的时间内，没有任何请求经过那么就关闭TCP连接。这种方式由于是**Broker端关闭TCP连接****，****因此产生大量的Close Wait连接，Producer端是****观测不到****的**。

# 拦截器功能

kafka提供了生产者和消费者拦截器，这里主要说生产者拦截器。**生产者拦截器允许在****发送****消息之前和消息****提交****成功后两个时刻植入****你的****拦截器逻辑**。

拦截器的方法也是通过配置实现的，通过指定拦截器的类路径来进行添加，如下：

```java
Properties props = new Properties();List interceptors = new ArrayList<>();
interceptors.add("com.yourcompany.kafkaproject.interceptors.AddTimestampInterceptor"); // 拦截器1
interceptors.add("com.yourcompany.kafkaproject.interceptors.UpdateCounterInterceptor"); // 拦截器2
props.put(ProducerConfig.INTERCEPTOR_CLASSES_CONFIG, interceptors);
```

拦截器的实现是通过实现org.apache.kafka.clients.producer.**ProducerInterceptor**接口，这个接口里面有两个方法：

* **onSend()：这个方法在消息发送前调用**
* **onAcknowledgement****(****)：这个方法在消息发送成功或者失败的时候调用，这个方法要早于回调方法callback。这个方法并不是跟onSend在****一个****线程中调用的，因此如果onSend和OnAcknowledgement用到了****共享变量****，一定注意线程安全**。
以上的两个方法都在消息发送的主路径中，**尽量****不要放置特别重****的逻辑**，不然非常影响发送的性能。

拦截器对于很多场景也非常重要，比如**客户端监控、端到端性能检测、消息审计**等多种场景。比如Kafka提供的监控都是针对单个客户端或者Broker的，如果需要从业务维度进行统计和监控，比如从消息的流转路径、或者对某一类消息进行审计，那么可以使用拦截器进行前置和后置的处理。

# Java实现Producer

java实现Producer主要有以下的几个步骤：

1. 构造生产者程序所需要的参数对象
2. 利用参数对象构建KafkaProducer实例
3. 使用KafkaProducer的send方法发送消息
4. 使用KafkaProducer的close方法结束资源
```java
@Slf4j
public class JavaProducer {
    public static final String TOPIC = "my-replicated-topic";
    public static void main(String[] args) throws ExecutionException, InterruptedException {
        Properties prop = new Properties();
        //kafka集群broker地址
        prop.put(ProducerConfig.BOOTSTRAP_SERVERS_CONFIG,"1.117.86.235:9092,1.117.86.235:9093,1.117.86.235:9094");
        /**
         * 生产者端消息持久化机制
         * (1)acks=0,producer不需要等待任何一个broker确认收到消息的回复，就可以继续发送下一条消息。性能最高，但是最容易消息丢失。
         * (2)acks=1,至少需要等待leader将消息写入log持久化后就可以发送消息，不需要等待follower持久化。此时如果follower没有同步但是leader挂掉，则会消息丢失。
         * (3)acks=-1或all,需要等待min.insync.replicas配置的数量的副本写入日志后，才发送下一条消息。可靠性最好，一般除了金融级别不使用。
         */
        prop.put(ProducerConfig.ACKS_CONFIG,"1");
        /**
         * 重试次数及重试间隔，发送失败会重试，默认重试时间100ms，最好设置，以避免网络抖动，需要在消费者端做好幂等性
         */
        prop.put(ProducerConfig.RETRIES_CONFIG,3);
        prop.put(ProducerConfig.RETRY_BACKOFF_MS_CONFIG,100);
        //消息缓冲区相关设置
        //设置消息缓冲区，消息会先存储在本地，可以提高消息发送的性能，默认值33554432，即32M
        prop.put(ProducerConfig.BUFFER_MEMORY_CONFIG,33554432);
        //消息缓冲区批量发送消息大小，16KB，消息缓冲区以16KB的消息为单位批量发送
        prop.put(ProducerConfig.BATCH_SIZE_CONFIG,16384);
        //消息缓冲区最长等待时间，默认0，不建议设置为0会影响性能。当消息缓冲区本批次达到16KB就会发送消息，如果没有达到最多等待10ms就发送
        prop.put(ProducerConfig.LINGER_MS_CONFIG,10);
        //序列化相关设置
        //将key值从字符串序列化为字节数组
        prop.put(ProducerConfig.KEY_SERIALIZER_CLASS_CONFIG, StringSerializer.class.getName());
        //将value值从字符串序列化为字节数组
        prop.put(ProducerConfig.VALUE_SERIALIZER_CLASS_CONFIG,StringSerializer.class.getName());
        Producer<String, String> producer = new KafkaProducer<>(prop);
        int msgNum = 5;
        final CountDownLatch count = new CountDownLatch(msgNum);
        for (int i = 0; i < msgNum; i++) {
            Order order = new Order(i, 100 + i, 1, 1000.00);
            //指定Partition 0 分区发送
            ProducerRecord<String, String> record = new ProducerRecord<>(TOPIC, 0, order.getOrderId().toString(), JSON.toJSONString(order));
            //未指定发送分区，具体发送的分区计算公式:hash(key)%partitionNum
            // ProducerRecord<String, String> record = new ProducerRecord<>(TOPIC, order.getOrderId().toString(), JSON.toJSONString(order));
            //等待消息发送成功的同步阻塞方式
            // RecordMetadata metaData = producer.send(record).get();
            // log.info("消息同步发送成功");
            // log.info("Topic：{}",metaData.topic());
            // log.info("Partition:{}",metaData.partition());
            // log.info("Offset:{}",metaData.offset());
            //异步回调方式
            producer.send(record,(metadata,exception) ->{
                if (exception != null) {
                    log.error("消息发送失败：{}",exception.getStackTrace());
                }
                if (metadata != null) {
                    log.info("消息异步发送成功");
                    log.info("Topic：{}",metadata.topic());
                    log.info("Partition:{}",metadata.partition());
                    log.info("Offset:{}",metadata.offset());
                }
                count.countDown();
            });
        }
        count.await();
        producer.close();
    }
}
```

