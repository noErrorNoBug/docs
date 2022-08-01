---
title: 集群监控工具ElasticView
prev:
  text: ElasticSeach集群架构方案
  link: /db/es/ElasticSeach集群架构方案.md
next:
  text: Kinaba部署安装
  link: /db/es/Kinaba部署安装.md
---
::: info
&#8195;&#8195;ElasticView 是一款用golang开发，用来监控ElasticSearch状态和操作ElasticSearch索引的web可视化工具。它由golang开发而成，具有部署方便，占用内存小等优点。对于小集群中使用远比kibana要方便很多，而且可以舍弃head插件做集群监控。官网：http://www.elastic-view.cn
&#8195;&#8195;但是经过实测，ElasticView目前bug有点多。
:::
[[toc]]
***

## 特性
- 权限管理：提供角色管理和用户管理，可以授予角色页面权限和接口权限；可以进行用户管理并且授予角色权限。
- 连接树管理：可以进行es连接管理，支持多es源，支持es6、7、8版本。
- es状态监控：
  - 别名、过滤器、路由信息
  - 节点分片数量
  - 占用空间
  - 索引文档数量
  - 集群健康状态
  - 索引分片信息
- 开发工具：
  - 可以打开多个REST API窗口
  - 支持SQL转DSL
  - 历史查询信息显示，转储excel
  - 查询结果转储excel
  - 返回结果转表格
- 索引管理：新建、删除索引，修改映射，关闭索引，开启索引，节点切换为可读状态，修改别名，重建索引。
- 快照，储存库：可以更方便的创建、删除和恢复快照。
- Navicat：可在该页面更方便的筛选和排序文档数据。
- 数据抽取：您可在该页面进行更傻瓜式的数据抽取操作，支持数据源（mysql,clickhouse），支持定时任务。

## 部署
&#8195;&#8195;可以去官网(http://www.elastic-view.cn/usage.html)查看多种部署方式，或者去Gitee直接下载相关安装包(https://gitee.com/cynthia520/elastic-view/releases)。下面说明Linux部署步骤：
1. 解压后执行sql文件，创建项目所需数据库和数据表
2. 解压后修改配置文件
```yml
# config中修改配置文件
log:
  storageDays: 4          # 日志保留天数
  logDir: "logs"         # 日志保留文件夹
port: 8090              # 启动端口
dbType: "sqlite3"       # 数据保留类型 分为 sqlite3 和 mysql
sqlite:                 # dbType为sqlite3时填 dbPath为数据保存文件地址
  dbPath: "es_view.db"
mysql:                  # dbType为mysql时填
  username: "root"
  pwd: "123456"
  ip: "127.0.01"
  port: "3306"
  dbName: "es_view"
  maxOpenConns: 10
  maxIdleConns: 10
appSecret: "1340691923@qq.com" # jwt 加密密钥
esPwdSecret: "concat_mail!!->1340691923@qq.com" # es密码加密密钥 加密方式为 AES
version: "1.8.5"  # ES 版本号
deBug: true      # 是否为测试模式 如果为 false则打开默认浏览器直接访问地址
```
3. 启动
```shell
chmod +x ElasticView && nohup ./ElasticView > ElasticView.log &
```

## 界面截图
![开发工具](/images/db/es/dev_tools.webp)

![索引管理](/images/db/es/indices.webp)

![索引重建](/images/db/es/reindex.webp)
