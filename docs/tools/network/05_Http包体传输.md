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
# 不能携带包体的方法

* HEAD方法
* 1xx，204，304响应
* CONNECT对应的2xx的响应
# 定长包体传输

**如果发送Http请求之前能够确定包体的长度，那么可以采用定长包体发送的方式，需要在Header-field中指明字段Content-Length来说明包体长度**。

* Content-Length = 1*DIGIT 
    * 注意是10进制的，表示字节个数
    * **长度必须要与包体长度一致，如果Content-Length小于实际长度，TCP层面会传递完整的数据，但是Http层面只会解析设置长度的数据，造成数据丢失；如果设置的长度大于实际长度，将无法解析Http请求**。
优点是接收端处理比较简单。

# 不定长包体传输

**如果发送时不能确定长度，那么使用Transfer-Encoding头部指明使用Chunk方式，同时含有Transfer-Encoding头部的请求会自动忽略掉Content-Length头部**。

不定长包体传输有以下的好处：

* 基于长连接持续推送信息
* 压缩交大的包体时，可以计算出头部后，一边发送一边继续压缩
* 传递必须在包体传输完成才能计算出Trailer头部
# HTML form表单提交包体格式

## 表单提交时的关键属性（前端控件）

* **action：提交Http请求的uri**
* **method：Http请求的method**
    * **GET：表单通过URI参数的方式提交**
    * **POST：将表单放在请求体中提交**
* **enctype：在POST方法下，指定表单内容在请求体中的编码方式**
    * application/x-www-form-urlencoded：用"&"分割的键值对，以URL编码方式进行编码
    * multipart/form-data：使用boundary分隔符，每一个部分都有一个HTTP头部描述的子包体，用last-boundary结尾
    * application/json：以json方式进行编码
# Range请求（断点续传、多线程、随机点播场景）

## 步骤

1. 客户端明确任务：从哪儿开始下载？
    * 本地是否已有部分文件？
    * 本地已有的文件在服务端是否发生改变？
    * 使用几个线程并发下载？
2. 下载文件的指定部分内容
3. 下载完成后统一拼装
## HTTP Range规范

* 允许服务器基于客户端的请求只发送响应包体的一部分到客户端，客户端自动将多个片段的包体组合成更大的完整的包体。
    * 支持断点续传
    * 支持多线程下载
    * 支持视频播放器实时拖动
* **通过Accept-Range头部表述是否支持Range请求**
    * Accept-Range = acceptable-ranges
    * 例如：Accept-Range : bytes 表示支持，Accept-Ranges:none 表示不支持
* 可以通过以下的方式表示请求包体的范围（假设长度10000字节）：
    * 第1个500字节：bytes=0-499
    * 第2个500字节：
        * bytes=500-999
        * bytes=500-600,601-999
        * bytes=500-700,601-999
    * 最后一个500字节：
        * bytes=-500
        * bytes=9500-
    * 仅仅第一个和最后一个字节：bytes=0-0,-1
* **通过Range头部进行字节长度的传递**：
    * 如Range:bytes=0-499
## Range 条件请求

* 如果客户端已经得到了Range响应的一部分，并且想在这个响应未过期的情况下，获取其他部分的响应：
    * 常与**If-Unmodified-Since** 或者 **If-Match 头部**共同使用
* **If-Range = entity-tag / HTTP-date**
    * 可以使用Etag或者Last-Modify
* 如果在条件获取过程中出现412错误，那么就是响应在服务端发生了变化，就需要重新获取响应。
* 如果只获取一部分响应，那么**服务端返回的是206，并且返回Content-Range头部，显示当前片段在完整包体中的位置**。
    * 例如：Content-Range: bytes 42-1233/1234 表示42-1233字节，完整包体1234字节
