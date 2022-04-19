---
title: Java泛型机制
prev:
  text: Java基础知识
  link: /java/basic/Java基础知识.md
next:
  text: Java注解机制
  link: /java/basic/Java注解机制.md
---
::: info
Java的泛型实际上采用的是“伪泛型”，即语法上支持泛型，但是在编译阶段进行“**类型擦除**”，将所有泛型替换成对应的具体类型。
:::
[[toc]]

***
&#8195;&#8195;泛型的本质是为了参数化类型，主要有这么几点好处：
- **代码复用：多种参数类型执行相同的代码。**比如对不同的数值类型的参数进行相加操作，Java中有Double、Integer等多种数值类型(包装类)，写多个方法进行重载就非常的冗余，就可以使用泛型机制实现代码复用。
- **类型安全：类型在使用时指定，不需要强制类型转换，编译器会检查类型。**比如声明ArrayList时，显式的声明List中的类型，那么在使用add方法时就可以避免抛出类型转换异常。

## 泛型的使用方法
### 泛型类
- 简单的泛型类，可以指定一种泛型类型：
```java 
class Point<T>{         // 此处可以随便写标识符号，T是type的简称  
    private T var ;     // var的类型由T指定，即：由外部指定  
    public T getVar(){  // 返回值的类型由外部决定  
        return var ;  
    }  
    public void setVar(T var){  // 设置的类型也由外部决定  
        this.var = var ;  
    }  
}  
public class GenericsDemo06{  
    public static void main(String args[]){  
        Point<String> p = new Point<String>() ;     // 里面的var类型为String类型  
        p.setVar("it") ;                            // 设置字符串  
        System.out.println(p.getVar().length()) ;   // 取得字符串的长度  
    }  
}
```
- 多元泛型类，可以指定多种泛型类型：
### 泛型接口

### 泛型方法

### 泛型上下限

### 泛型数组

## 泛型机制详解
### 如何理解类型擦除？

### 如何理解泛型的编译期检查？

### 如何理解泛型的多态？泛型的桥接方法

### 如何理解基本类型不能作为泛型类型？

### 如何理解泛型不能被实例化？

### 泛型数组：能不能使用具体的泛型类型进行初始化？

### 泛型数组：如何正确初始化泛型数组实例？

### 如何理解泛型中的静态方法和静态变量？

### 如何理解异常中使用泛型？

### 如何获取泛型的参数类型

## 实战举例
