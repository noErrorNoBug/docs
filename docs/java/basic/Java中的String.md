---
title: Java中的String
prev:
  text: Java基础知识
  link: /java/basic/Java基础知识.md
next:
  text: Java中的空值处理
  link: /java/basic/Java中的空值处理.md
---
::: info
之所以把String单独拿出来讲，是因为在面试中，很容易通过问String、StringBuilder、StringBuffer而把深度引导至JVM和并发框架中去。
:::
[[toc]]

***

## String 的不可变性
&#8195;&#8195;String类是不可变的，被final修饰，同时它也是由不可变的char数组组成，也就是它的值被初始化后，也是不可更改的了。

&#8195;&#8195;不可变的String是有好处的：
- 缓存hashCode：String的HashCode是很常用的，比如Map的Key。不可变的String类型的HashCode也是不可变的，因此只需要计算一次哈希值。
- 常量池的需要：一个字符串被创建了，会被放入常量池重复引用，即创建相同的字符串的值的字符串时，不会创建新的字符串对象，而是直接从常量池中引用。不可变的String才能实现这样的功能。
- 参数的安全性：String经常被作为参数传递，不可变性可以保证参数传递过程中的值的一致。
- 线程安全：final不可变天生具有线程安全的特性，并发环境下可以安全使用。

## String、StringBuilder、StringBuffer
### 可变性
- 可变：StringBuilder、StringBuffer
- 不可变：String

### 线程安全
- 线程不安全：StringBuilder
- 线程安全：
  - String：通过final保证线程安全。
  - StringBuffer：通过synchronized保证线程安全

## intern()方法
&#8195;&#8195;String.intern()方法可以保证内容相同的字符串引用常量池中的同一个内存对象。同时如果是使用""的方式创建字符串的话，也会引用常量池的同一个内存对象。
```java 
著作权归https://pdai.tech所有。
链接：https://www.pdai.tech/md/java/basic/java-basic-lan-basic.html

String s1 = new String("aaa");
String s2 = new String("aaa");
System.out.println(s1 == s2);           // false
String s3 = s1.intern();
System.out.println(s1.intern() == s3);  // true
String s4 = "bbb";
String s5 = "bbb";
System.out.println(s4 == s5);  // true
```
&#8195;&#8195;在某些大量重复使用某些字符串，以及字符串拼接的场景，可以适当使用intern()方法提升效率，避免重复构建String对象或者StringBuilder对象（Java编译器优化时，更倾向于将字符串拼接优化为StringBuilder，每次都会新建StringBuilder对象）。但是应该注意，正常情况下不要滥用intern()。
::: tip
Java8以后的版本，字符串常量池的位置被移动到了本地方法Native Method中。
:::


***
参考：
- [深入解析String#intern](https://tech.meituan.com/2014/03/06/in-depth-understanding-string-intern.html)
- Bloch J. Effective java[M]. Addison-Wesley Professional, 2017.