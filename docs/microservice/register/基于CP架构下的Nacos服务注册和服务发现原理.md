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
# Raft和ZAB协议

Raft和ZAB协议都是Paxos的简化，主要包括两部分：

* Leader选举（半数节点投票同意）
* 集群写入数据同步（两阶段提交，半数以上节点写入成功）
