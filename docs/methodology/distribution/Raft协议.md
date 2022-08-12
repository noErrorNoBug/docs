---
title: Raft协议
prev:
  text: ZAB协议
  link: /methodology/distribution/ZAB协议.md
next:
  text: X_OPEN事务模型
  link: /methodology/transaction/X_OPEN事务模型.md
---
::: info
&#8195;&#8195;Raft协议是基于Paxos协议的简化，用于解决分布式架构中数据一致性的一种算法。
:::
[[toc]]

***
## 两个关键步骤
&#8195;&#8195;Raft协议与ZAB协议类似，也是分布式架构中用于解决数据一致性的一种算法，都是Paxos协议的简化，主要包含两部分：
* Leader选举（半数节点投票同意）
* 集群写入数据同步（两阶段提交，半数以上节点写入成功）


## 三种节点状态
&#8195;&#8195;Raft协议规定了3种状态(节点)：
- Follower
- Candidate
- Leader

## Leader选举过程
![Raft选举流程](/images/methodology/Raft选举流程.png)

1. 最初，所有的节点都在Follower状态，每一个节点都会有一个选举超时时间(随机在150ms~300ms)
2. 最先达到选举超时时间的Follower，会把状态更改为Candidate，并为自己投票
3. Candidate向其他节点发起投票请求
4. 其他未苏醒节点，向Candidate投票
5. Candidate收到半数以上的投票，成为Leader
6. Leader向Follower发起数据同步，Raft协议是通过心跳机制进行数据同步，会有心跳超时时间

&#8195;&#8195;**与ZAB区别的是，Raft协议节点有一个休眠时间(随机的)，率先苏醒的节点会发起投票，未苏醒的节点收到投票意图后，会投票给这个节点。ZAB则是都会发起投票，所有节点的票数再进行PK取符合条件的节点**。

## 写数据过程
![Raft写数据流程](/images/methodology/Raft写数据流程.png)

&#8195;&#8195;Raft协议与ZAB协议类似，也是[两阶段提交](../transaction/2PC事务模型.md)过程，**所有的写操作只能通过Leader进行**：
1. 客户端向Leader发起写请求后，Leader记录写操作日志，当前日志为uncommited状态，首先写入自己的日志，并向Follower发出数据写请求
2. Follower收到写请求后，写入本地日志文件并且返回ack
3. 当Leader收到半数以上的ack后，将数据提交到自己内存，此时为commit状态
4. 向Client发回执行结果
5. Follower写入本地数据


## 脑裂问题解决
&#8195;&#8195;类似的，如果集群发生分区，那么就一定会伴随脑裂问题，每个分区都会有一个Leader。**Raft解决脑裂问题也是一样的，由于两阶段提交的半数以上ack才能commit数据，因此一定有一个分区提交不了数据，从而避免脑裂问题**。