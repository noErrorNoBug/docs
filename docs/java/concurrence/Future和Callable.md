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
# Callable接口

* 类似于Runnable，是一个线程执行的task
* 实现call()方法，call()方法有返回值
# Future类

Future可以用子线程异步的执行方法，并且获取到子线程的返回值。

* Future.get()可以获取Callable接口的返回值结果。
* Future.isDone()判断任务是否执行完成。
* 任务取消有三种情况：
    * 任务没开始执行，cancel返回true
    * 任务已完成，cancel返回false
    * 正在执行，如果cancel设置为可以中断，则会发出中断信号并且返回中断异常
* Callable的call()方法执行结束以前，调用get()的方法会被阻塞。
* Future是一个存储器，存储了Call()的执行结果。
# FutureTask类

* 是一种包装类
* 可以把Callable转换为Future和Runnable
* 把Callable当做参数生成FutureTask对象，然后把FutureTask当做一个Runnable让线程池执行，最后通过FutureTask获取执行结果。