# Kafka

* 为什么使用Kafka，以及Kafka 的用途
* 消费过的消息如何再消费
* Kafka 数据存放在磁盘还是内存上，为什么速度快
* Kafka如何保障数据不丢失
* 数据采集为什么选择Kafka
* Kafka重启是否会导致数据丢失
* Kafka宕机了如何处理
* 为什么Kafka不支持读写分离
* Kafka数据分区和消费者的关系
* Kafka数据offset的读取流程
* Kafka内部如何保证顺序，结合外部组件如何保证消费顺序
* Kafka数据积压如何处理
* Kafka单条日志传输大小
* Kafka以及ES分片大小设置
    * 如果topic或者index不多，分片数量是机器数量的整数倍，否则会有流量负载不均
    * topic分片数主要看单partition性能以及场景需要的有序和流量独立的项数，如收binlog按分表内有序的场景
    * shard分片数取决于整个index预期文档数，但是shard只能支持20e文档
