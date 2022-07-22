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
&#8195;&#8195;泛型可以使用在类中，指定一个或者多个泛型类型，这些泛型类型可以作用于类的属性，具体的类型由外部决定，如下所示Point&#60;T&#62;类是一个简单的泛型类，其属性var由外部决定；Notepad&#60;K,V,T&#62;是一个指定了3个泛型类型的泛型类。
```java 
public class GenericsClassDemo {
    public static void main(String[] args) {
        Point<String> point = new Point<>();
        point.setVar("简单泛型");
        System.out.println(point.getVar());

        Notepad<String, Integer, String> notepad = new Notepad<>();
        notepad.setKey("小明");
        notepad.setValue(20);
        notepad.setVar("初级工程师");
        System.out.println("姓名："+notepad.getKey());
        System.out.println("年龄："+notepad.getValue());
        System.out.println("职位："+notepad.getVar());
    }
}


class Point<T> {    // 简单泛型类，可以指定一种类型，此处可以随便写标识符号，T是type的简称
    private T var;  // var的类型由T指定，即：由外部指定
    public T getVar() {     // 返回值的类型由外部决定
        return var;
    }
    public void setVar(T var) { // 设置的类型也由外部决定
        this.var = var;
    }
}

class Notepad<K,V,T> {  // 多元泛型类，可以指定多种泛型类型，此处指定三个类型
    private K key;  // key的类型由外部决定
    private V value;    // value的类型由外部决定
    private T var;  // var的类型由外部决定

    public K getKey() {
        return key;
    }
    public void setKey(K key) {
        this.key = key;
    }
    public V getValue() {
        return value;
    }

    public void setValue(V value) {
        this.value = value;
    }
    public T getVar() {
        return var;
    }
    public void setVar(T var) {
        this.var = var;
    }
}
```
### 泛型接口
&#8195;&#8195;可以通过泛型声明接口，并指定于接口的抽象方法。
```java 
public class GenericsInterfaceDemo {
    public static void main(String[] args) {
        Info<String> info = new InfoImpl<String>("泛型接口");
        System.out.println(info.getVar());
    }
}

interface Info<T>{  //接口上可以定义泛型
    public T getVar();      // 通过泛型定义抽象方法
}

class InfoImpl<T> implements Info<T> {
    private T var;

    public InfoImpl(T var) {
        this.var = var;
    }

    public void setVar(T var) {
        this.var = var;
    }
    @Override
    public T getVar() {
        return var;
    }
}

```
### 泛型方法
&#8195;&#8195;声明一个泛型类和泛型接口都比较简单，但是Java中声明一个泛型方法就比较复杂。下面以一个获取对象的方法为例，说明一下泛型方法声明和泛型方法调用的语法格式。
- 泛型方法声明
![泛型方法声明](/images/java/basic/泛型方法声明.png)
&#8195;&#8195;泛型方法声明时，返回值前面必须加上&#60;T&#62;,来声明这是一个泛型方法，持有一个泛型T，然后才可以用泛型T作为方法的返回值或者方法的入参。
&#8195;&#8195;泛型方法的入参为什么使用Class&#60;T&#62;,是因为既然是个泛型方法，我们无法知道泛型的类型，因此使用Class实例的getDeclaredConstructor().newInstance()方法创建泛型实例，也就是通过反射创建实例。

- 泛型方法调用
![泛型方法声明](/images/java/basic/泛型方法调用.png)

```java 
public class GenericsMethodDemo {

    public static void main(String[] args) {
        GenericsMethodDemo methodDemo = new GenericsMethodDemo();
        try {
            Object object = methodDemo.getObject(Class.forName("cn.sunsite.demo.jdk.generics.TestDemo"));
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
    }

    /**
     * @param <T>   声明一个泛型T
     * @param c 创建泛型对象
     * @return
     * @throws NoSuchMethodException
     * @throws InvocationTargetException
     * @throws InstantiationException
     * @throws IllegalAccessException
     */
    public <T> T getObject(Class<T> c) throws NoSuchMethodException, InvocationTargetException, InstantiationException, IllegalAccessException {
        T t = c.getDeclaredConstructor().newInstance();
        return t;
    }
}
```
### 泛型上下限
&#8195;&#8195;Java泛型通过&#60;? extends A&#62;和&#60;? super B&#62;表示泛型的上下限，前者上限，后者表示下限。比如上限，编译时擦除到类型A，即用A类型代替参数类型。这样做的好处是，允许编译器在允许的范围内进行类型转换。
```java
<?> // 无限制通配符
<? extends E> extends   //关键字声明了类型的上界，表示参数化的类型可能是所指定的类型，或者是此类型的子类
<? super E> super   //关键字声明了类型的下界，表示参数化的类型可能是指定的类型，或者是此类型的父类
```
&#8195;&#8195;根据《Effictive Java》中的描述，通配符的使用原则可以概括为：
- 如果参数化类型表示一个 T 的生产者，使用 &#60;? extends T&#62;。
- 如果参数化类型表示一个 T 的消费者，使用  &#60;? super T&#62;。
- 多个限定使用&符号进行连接。

&#8195;&#8195;下面是一些上下限的Demo：
```java 
public class GenericsLimitsDemo {
    public static void main(String[] args) {
        InfoNumber<Integer> number = new InfoNumber<Integer>();    // Integer是Number的子类，在上限范围内

        InfoString<String> string = new InfoString<String>();   // 声明String泛型
        InfoString<Object> object = new InfoString<Object>();   // 声明Object泛型
        string.setVar("hello");
        object.setVar(new Object());
        fun(string);
        fun(object);

    }

    /**
     * 参数只能接收到String和Object，因为String只有一个父类Object
     * @param string    规定了下限为String，String的子类无法传入
     */
    public static void fun(InfoString<? super String> string) {
        System.out.println(string + ",");
    }


    /**
     * 这个方法通过一个数值比较演示比较复杂的上下限的使用：
     *      第一，方法是比较的作用，因此 extends Comparable表示E必须是可比较的才能使用方法。
     *      第二，方法是对E进行比较，E是消费者，使用Comparable<? super E>声明。
     *      第三，入参要指定E为上限，保证List的容器足够大，也表明操作对象必须是E或者其子类，使用List<? extends E>进行限定。
     * @param params
     * @return
     * @param <E>
     */
    private <E extends Comparable<? super E>> E max(List<? extends E> params) {
        if (params == null) {
            return null;
        }

        Iterator<? extends E> iterator = params.iterator();
        E result = iterator.next();
        while (iterator.hasNext()) {
            E next = iterator.next();
            if (next.compareTo(result) > 0 ){
                result = next;
            }
        }
        return result;
    }
}

/**
 * 泛型的上限是Number，也就是说泛型只能是数字类型
 * @param <T>
 */
class InfoNumber<T extends Number> {
    private T var;  // 泛型变量
    public T getVar() {
        return var;
    }
    public void setVar(T var) {
        this.var = var;
    }
    @Override
    public String toString() {
        return this.var.toString();
    }
}

/**
 * 声明泛型用于测试下限
 * @param <T>
 */
class InfoString<T> {
    private T var;
    public T getVar() {
        return var;
    }
    public void setVar(T var) {
        this.var = var;
    }
    @Override
    public String toString() {
        return this.var.toString();
    }
}
```

### 泛型数组
&#8195;&#8195;泛型数组是我们很常用的场景，下面说几种声明的方式：
```java 
List<String>[] list11 = new ArrayList<String>[10]; //编译错误，非法创建 
List<String>[] list12 = new ArrayList<?>[10]; //编译错误，需要强转类型 
List<String>[] list13 = (List<String>[]) new ArrayList<?>[10]; //OK，但是会有警告 
List<?>[] list14 = new ArrayList<String>[10]; //编译错误，非法创建 
List<?>[] list15 = new ArrayList<?>[10]; //OK 
List<String>[] list6 = new ArrayList[10]; //OK，但是会有警告
```

&#8195;&#8195;推荐的方式如下：
```java 
public ArrayWithTypeToken(Class<T> type, int size) {
    array = (T[]) Array.newInstance(type, size);
}
```

## 类型擦除原理
### 什么是类型擦除
&#8195;&#8195;Java的泛型采用了“伪泛型”的策略，即在语法上支持泛型，但是编译阶段会进行“**类型擦除**”，将所有的泛型表示（泛型的通配符）替换为具体的类型。
&#8195;&#8195;**泛型类型擦除的原则**是：
- 消除类型参数的声明，即删除&#60;&#62;部分。
- 根据类型参数的上下限，推断并替换为所有的**原始类型**：
  - 无上下限替换为Object
  - 有上下界取父类（最左边限定类型，子类替换原则）
- 为了保证类型安全，必要时插入强制类型转换代码。
- 生成“**桥接方法**”保证类型擦除后的代码仍具备“**多态性**”。

### 类型擦除的过程
- 无限定类型的擦除，&#60;T&#62;和&#60;?&#62;直接被替换为Object。
![无限制类型泛型擦除](/images/java/basic/无限制类型泛型擦除.png)
- 有上下界限定的泛型类型擦除，有上界的类型替换为上界，有下界的类型替换为Object。
![有限制类型泛型擦除](/images/java/basic/有限制类型泛型擦除.png)
- 方法中的类型擦除原则依旧适用。
![无限制类型泛型擦除](/images/java/basic/方法定义中的泛型擦除.png)

### 如何证明类型擦除
- 原始类型相等：下面的例子，两个List通过getClass方法判断两个类的类型是相等的，也就是原始类型是相等的，不受到&#60;T&#62;和&#60;?&#62;的影响。
```java 
public class Test {
    public static void main(String[] args) {
        ArrayList<String> list1 = new ArrayList<String>();
        list1.add("abc");

        ArrayList<Integer> list2 = new ArrayList<Integer>();
        list2.add(123);

        System.out.println(list1.getClass() == list2.getClass()); // true
    }
}
```

- 通过反射添加其他类型：如下通过反射向List中add不同类型的元素，是可以的，可以证明泛型类型是被擦除掉了（替换为了Object）。
```java 
public class Test {
    public static void main(String[] args) throws Exception {
        ArrayList<Integer> list = new ArrayList<Integer>();

        list.add(1);  //这样调用 add 方法只能存储整形，因为泛型类型的实例为 Integer

        list.getClass().getMethod("add", Object.class).invoke(list, "asd");

        for (int i = 0; i < list.size(); i++) {
            System.out.println(list.get(i));
        }
    }
}
```

### 原始类型
&#8195;&#8195;我们通过前面的类型擦除的原则可以看到一个概念，就是原始类型。原始类型指的是，擦除泛型信息后，字节码中真正的类型。
- 无限定类型的原始类型Object：
```java 
// 泛型类 Pair<T>
class Pair<T> {  
    private T value;  
    public T getValue() {  
        return value;  
    }  
    public void setValue(T  value) {  
        this.value = value;  
    }  
} 

// 原始类型为Object，擦除后的Pair类型
class Pair {  
    private Object value;  
    public Object getValue() {  
        return value;  
    }  
    public void setValue(Object  value) {  
        this.value = value;  
    }  
}
```
- 有限定类型的原始类型为上界类型，如下声明的话，原始类型就是Comparable：
```java 
public class Pair<T extends Comparable> {}
``` 

- 泛型方法调用时，语法上可以指定泛型类型，也可以不指定泛型类型：
  - 不指定泛型类型的情况下，泛型变量的类型是方法中几种类型的同一父类的最小级，一直到Object。
  - 指定泛型类型的情况下，则必须是指定的类型或者其子类（即指定的就是最小级）。
  
### 编译期检查
&#8195;&#8195;我们在泛型数组那一章节有提到过，使用泛型时，IDE会有提示，也就是说，编译期是会对泛型进行检查的。那么编译期间类型检查是针对什么的？这里可以先说结论，**编译期间类型检查是针对引用的，谁通过引用调用泛型方法，就会对这个引用调用的方法进行类型检查，无关于引用的对象**。
&#8195;&#8195;下面是几种引用和声明的方式：
```java 
ArrayList list = new ArrayList();   // 原始写法
ArrayList<String> list = new ArrayList<String>();   // 全量写法
ArrayList<String> list1 = new ArrayList(); //与全量写法效果相同
ArrayList list2 = new ArrayList<String>(); //没有泛型效果


ArrayList<String> list1 = new ArrayList();  // list1这个引用声明了泛型，需要进行检查
list1.add("1"); //编译通过  
list1.add(1); //编译错误  
String str1 = list1.get(0); //返回类型就是String  

ArrayList list2 = new ArrayList<String>();  //list2没有声明，则不会检查
list2.add("1"); //编译通过  
list2.add(1); //编译通过  
Object object = list2.get(0); //返回类型就是Object  

new ArrayList<String>().add("11"); //编译通过  
new ArrayList<String>().add(22); //编译错误  

String str2 = new ArrayList<String>().get(0); //返回类型就是String  
```
### 泛型的多态和桥接方法

## 深入理解泛型机制
### 如何理解基本类型不能作为泛型类型？

### 如何理解泛型不能被实例化？

### 泛型数组：能不能使用具体的泛型类型进行初始化？

### 泛型数组：如何正确初始化泛型数组实例？

### 如何理解泛型中的静态方法和静态变量？

### 如何理解异常中使用泛型？

### 如何获取泛型的参数类型

## 实战举例
