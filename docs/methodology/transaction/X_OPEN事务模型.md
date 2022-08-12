---
title: X_OPEN事务模型
prev:
  text: CAP定理和BASE理论
  link: /methodology/distribution/CAP定理和BASE理论.md
next:
  text: 2PC事务模型
  link: /methodology/transaction/2PC事务模型.md
---

&#8195;&#8195;XA事务模型定义了一套分布式事务处理标准，使用**两阶段提交2PC**保证分布式事务的完整性。

&#8195;&#8195;XA模型中包含以下三种角色：

* AP：Application，表示应用程序
* RM：Resource Manager，表示资源管理器，如数据库
* TM：Transaction Manager，表示事务管理器或者协调者，负责协调和管理事务。

![X_Open事务模型](/images/methodology/X_Open事务模型.png)

&#8195;&#8195;大体的实现步骤如下：

* 配置TM：把多个RM注册到TM，相当于注册RM给TM作为数据源
* AP从TM中获取RM连接
* AP向TM发送一个全局事务，此时TM生成全局事务ID
* AP通过获取到的连接操作RM完成数据操作，每次操作会把XID传给RM
* AP结束全局事务，TM通知RM结束全局事务
* RM根据事务执行结果和XID，执行事务提交或者回滚。
TM和RM之间的事务控制，是基于XA协议来完成的，XA协议是X/Open提出的分布式事务的处理规范，**定义了xa_和ax_系列的函数功能描述和约束**，如oracle、mysql等都实现了XA接口，都可以看做是RM。

