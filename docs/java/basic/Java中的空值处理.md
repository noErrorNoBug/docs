---
title: Java中的空值处理
prev:
  text: Java中的String
  link: /java/basic/Java中的String.md
next:
  text: Java泛型机制
  link: /java/basic/Java泛型机制.md
---
::: info
大部分的空指针异常，在我们实际生产中，都产生于对方法参数处理的不谨慎，下面是5个比较典型的类型。
:::
[[toc]]

***
## 包装类自动拆箱空指针
&#8195;&#8195;包装类如Integer，由于包装类型都是引用类型，因此在其自身是null时，如果进行操作，在自动拆箱时会出现NullPointerException。
```java
private void wrong(Integer i) {
    log.info(i + 1);
}

@GetMapping("wrong")
public void int(@RequestParam(value = "test", defaultValue = "1111")String test) {
    wrong(test.charAt(0) == '1' ? null : "OK");
}
```

&#8195;&#8195;包装类可以使用Optional.ofNullable()构造一个Optional，然后使用orElse(0)把null替换成0。
```java
private void right(Integer i) {
    log.info(Optional.ofNullable(i).orElse(0) + 1);
}
```
## 字符串空指针
&#8195;&#8195;String字符串在调用自身的方法时，如果字符串本身是null，也会抛出异常，如下所示：
```java
private void wrong(String i) {
    log.info(i.equals("abc"));
}

@GetMapping("wrong")
public void int(@RequestParam(value = "test", defaultValue = "1")String test) {
    wrong(test.charAt(0) == '1' ? null : "OK");
}
```
&#8195;&#8195;对于字面量的判断，我们一般是将字面量放在前面；两个对象而非字面量的判断，使用Objects.equals()进行判断。
```java
private void wrong(String i,String t) {
    log.info("abc".equals(i));
    log.info(Objects.equals(i,t));
}

"OK".equals(s), Objects.equals(s, t),
```
## 不支持null的容器类强行赋null
&#8195;&#8195;下面是以ConcurrentHashMap为例，强行赋值为null：
```java
private void wrong(String i) {
    new ConcurrentHashMap().put(null, null);
}

```
&#8195;&#8195;对于例如ConcurrentHashMap这种特性的知识点，多看多总结避免使用误区就可以了。

## 属性引用级联调用空指针
&#8195;&#8195;如果说A类中的一个属性需要引用B类的对象，此时如果属性是null，就会抛出NullPointerException：
```java
private void wrong() {
    new A().b.b();
}

Class A{
    private B b;
}

Class B{
    String b() {
        log.info("b类");
    }
}
```
&#8195;&#8195;级联调用使用Optional和Stream进行判断可以省很多代码：
```java 
private void right(A a) {
    Optional.ofNullable(a)
            .map(FooService::getBarService)
            .ifPresent(b -> b.info());
}

Class A{
    private B b;
}

Class B{
    String b() {
        log.info("b类");
    }
}
```
## 远程服务返回null而不是size()为0的List
&#8195;&#8195;如下返回值是一个List，如果接收到的实际上是一个Null时，当使用这个List时，也会出现NullPointerException：
```java
private void wrong() {
    new DemoList().nullList().size();
}

Class DemoList{
    List<String> nullList(){
        return null;
    }
}

```
&#8195;&#8195;同样，List在不确定会不会产生null时，也是使用Optional包装一下，然后使用.orElse(Collections.emptyList())返回一个size为0的List对象即可。
```java
private void wrong() {
    Optional.ofNullable(new DemoList().nullList().size()).orElse(Collections.emptyList());
}

Class DemoList{
    List<String> nullList(){
        return null;
    }
}
```

&#8195;&#8195;最后，需要注意的是，如果是系统bug产生的NullPointerException，根据类型进行针对性的处理即可；如果是业务系统可能存在Null的情况，要根据业务情况，分析传参是否合理、是否需要设置调用规范、是否代表某种业务情形等等。