---
title: ElasticSeach集群架构方案
prev:
  text: ElasticSeach集群架构方案
  link: /db/es/ElasticSeach集群架构方案.md
next:
  text: ElasticSeach集群架构方案
  link: /db/es/ElasticSeach集群架构方案.md
---
::: info
&#8195;&#8195;ElasticSearch通过集群架构是生产环境中常用的，可以实现高可用和高扩展的手段。其高可用体现在两点：服务可用性，即允许节点停止服务；数据可用性，即部分节点丢失，不会丢失数据。其可扩展性体现在可以将存储水平扩容。
:::
[[toc]]
***
## 节点角色

## 单角色部署

## 水平扩展场景

## 读写分离场景

## 异地多活架构

## Hot & Warm架构

## 集群容量规划思路
### 业务评估和应用场景评估

### 硬件和容量评估

### 部署方式和扩容方式评估

## 集群规划典型案例
### 大数据集低写入业务规划

### 时间序列数据规划

## 附录：特性、部署、配置
### 版本特性
Elasticsearch7.x特性：
- Lucence 8.0
- 废除单个索引下多个type
- security免费
- ECK：Elasticsearch Operator on Kubernetes
- 新特性
  - New Cluster coordination
  - Complete High Level REST Client
  - Script Score Query
- 默认的Primary Shard数从5改为1,避免Over Sharding
- 更快的Top K
- 内置 java 环境

Elasticsearch8.x特性：
- RestAPI 改动很大，如删除_type
- 默认开启安全配置
- 存储空间优化：倒排索引使用新编码集，对于keyword、match_only_text、text类型字段有效，有3.5%的空间优化提升，对于新建索引和segment自动生效。
- 优化geo_point，geo_shape类型的索引（写入）效率：15%的提升。

### 文件结构
```lua
elasticsearch
│  ├─bin -- 脚本文件，包括启动elasticsearch，安装插件，运行统计数据等
│  ├─config -- 配置文件目录，如elasticsearch配置、角色配置、jvm配置等
│  ├─jdk -- java运行环境
│  ├─data -- 默认的数据存放目录，包含节点、分片、索引、文档的所有数据，生产环境需要修改
│  ├─lib -- elasticsearch依赖的Java类库
│  ├─logs -- 默认的日志文件存储路径，生产环境需要修改
│  ├─modules -- 包含所有的Elasticsearch模块，如Cluster、Discovery、Indices等
│  ├─plugins -- 已安装插件目录
```

### 配置文件
&#8195;&#8195;Elasticsearch是基于内存的数据存储服务，JVM的环境配置优先级为ES_JAVA_HOME>JAVA_HOME>ES_HOME，其中数据节点非常消耗内存，因此需要配置JVM的堆内存，进入elasticsearch的config目录下，修改jvm配置(4G以上30G以下 https://www.elastic.co/cn/blog/a-heap-of-trouble)：
```shell
vim jvm.options
-Xms4g
-Xmx4g
```

&#8195;&#8195;Elasticsearch启动不允许使用root账户，需要为Elasticsearch创建运行账号，并赋予目录相关权限。
```shell
adduser es
passwd es 
chown -R es:es /opt/elasticsearch/elasticsearch-8.3.2
```

&#8195;&#8195;修改Elasticsearch配置文件，具体配置项及其意义如下所示：
```yml
cluster.name: 集群名称
node.name: 节点的名称
node.roles: [ data, master]
bootstrap.memory_lock: true #是否开启时锁定内存（默认为是）
# 注意这两个路径不要配置物理机的路径了，这是【容器内部】的路径！！
path.data: /usr/share/elasticsearch/data # 数据存档位置
path.logs: /usr/share/elasticsearch/log   # 日志存放位置
# 配合network.publish_host 一起使用。参见下文的小窍门：
network.host: 10.10.10.11 #设置网关地址
# 设置其它结点和该结点交互的ip地址，如果不设置它会自动判断，值必须是个真实的ip地址，设置当前物理机地址,如果是docker安装节点的IP将会是配置的IP而不是docker网管ip
# network.publish_host: 10.10.10.11
http.port: 9200  # 设置映射端口
transport.port: 9300  # 内部节点之间沟通端口 
# 组播地址
discovery.seed_hosts: ["10.10.10.12:9300","10.10.10.13:9300"]
# es7.x 之后新增的配置，写入候选主节点的设备地址，在开启服务后可以被选为主节点
cluster.initial_master_nodes: ["node-1","node-2","node-3"]

```

### 集群安全
&#8195;&#8195;Elasticsearch8.x的版本中，已经将安全由可选项变成了默认选项。Elasticsearch的安全认证可以参考官网的实施方案：https://www.elastic.co/guide/en/elasticsearch/reference/7.17/configuring-stack-security.html，免费的方案可以采用如下：
- nginx反向代理
- 免费的Security插件：
  - Search Guard ： https://search-guard.com/
  - readonlyrest： https://readonlyrest.com/
- X-Pack的Basic版

&#8195;&#8195;另外，Elasticsearch内部是通过9300端口进行传输的，如果不对数据加密，可能会造成数据被抓包，敏感信息泄漏的等问题。针对此点，可以使用TLS协议（Trusted Certificate Authority (CA））为节点创建证书，证书认证有三个级别：
- Certificate ——节点加入需要使用相同CA签发的证书
- Full Verification——节点加入集群需要相同CA签发的证书，还需要验证Host name 或IP地址
- No Verification——任何节点都可以加入，开发环境中用于诊断目的

#### 内部通信TLS证书创建
1. 为每个节点创建证书
```shell
bin/elasticsearch-certutil ca
# 执行命令后会有两次输入，第一次为CA文件名，第二次为密码（密码1）
# 建议依次输入回车（文件使用默认名，不设置密码）
# 执行完会在ES根目录生成 elastic-stack-ca.p12 文件（默认文件名）
```
2. 为节点颁发证书
```shell
bin/elasticsearch-certutil cert --ca elastic-stack-ca.p12
# 执行命令后会有三次输入
# 第一次输入为CA密码（密码1）
# 第二次输入为证书文件名，建议直接回车（使用默认文件名）
# 第三次输入为证书密码（密码2）
# 执行完会在ES目录生成 elastic-certificates.p12 文件（默认文件名）
```
3. 使用keystore保存证书密码
```shell
bin/elasticsearch-keystore add xpack.security.transport.ssl.keystore.secure_password 
bin/elasticsearch-keystore add xpack.security.transport.ssl.truststore.secure_password
# 如果没有创建 keystore 文件，会提示是否创建，输入y即可（文件默认创建在elasticsearch.yml 同级目录下）
# 然后输入证书密码（密码2）
# 经测试证书密码（密码2）为空的时候，可以省略这一步
```
4. 将生成的 ca文件和证书文件移动到config目录，然后重启es服务
```shell
mv elastic-certificates.p12 config/
mv elastic-stack-ca.p12 config/
# 命令示例为默认文件名
# 经测试，elastic-stack-ca.p12 文件可以不保留
```
5. 为集群中其他节点颁发证书
```shell
# 有两种方法，任一都可以
# 1.进入集群中其他节点 ES 目录，拷贝步骤2生成的 CA 文件到 ES 根目录,然后重复步骤3，4，5
# 2.登录其他es应用用户，拷贝步骤3生成的证书文件和 keystore 文件，放到 ES config 目录，然后重启es服务
```

6. 配置节点间的通讯
```yml 
## elasticsearch.yml 配置
xpack.security.transport.ssl.enabled: true
xpack.security.transport.ssl.verification_mode: certificate 
xpack.security.transport.ssl.client_authentication: required
xpack.security.transport.ssl.keystore.path: elastic-certificates.p12
xpack.security.transport.ssl.truststore.path: elastic-certificates.p12
```

#### 开启并配置X-Pack的认证
1. 配置文件配置开启认证(默认开启)
```yml
xpack.security.enabled: true
xpack.security.enrollment.enabled: true
```
2. 添加http密码
```shell
./bin/elasticsearch-keystore add xpack.security.http.ssl.keystore.secure_password

./bin/elasticsearch-keystore add xpack.security.http.ssl.truststore.secure_password
```
3. 配置https认证
```yml
xpack.security.http.ssl.enabled: false
xpack.security.http.ssl.verification_mode: certificate
xpack.security.http.ssl.truststore.path: elastic-certificates.p12
xpack.security.http.ssl.keystore.path: elastic-certificates.p12
```
4. 集群启动后为内置账号添加密码
```shell
# 自动创建密码
./bin/elasticsearch-setup-passwords auto
# 手动输入密码
./bin/elasticsearch-setup-passwords interactive
# 随机重置用户密码
./bin/elasticsearch-reset-password -u elastic
# 手动重置指定用户密码，内置常用用户apm_system, beats_system, elastic, kibana,logstash_system, remote_monitoring_user
./bin/elasticsearch-reset-password -u elastic -i <password>

./bin/elasticsearch-reset-password -u apm_system -i Sq201240600255
./bin/elasticsearch-reset-password -u beats_system -i Sq201240600255
./bin/elasticsearch-reset-password -u elastic -i Sq201240600255
./bin/elasticsearch-reset-password -u kibana -i Sq201240600255
./bin/elasticsearch-reset-password -u logstash_system -i Sq201240600255
./bin/elasticsearch-reset-password -u remote_monitoring_user -i Sq201240600255
```
5. 配置kibana
```yml
elasticsearch.username: "kibana"
elasticsearch.password: "xxxxx"
elasticsearch.hosts: ["http://1.1.1.1:9200","http://2.2.2.2:9200","http://3.3.3.3:9200"]
```
6. 配置logstash
7. 配置kafka

### 集群启动
```shell
# 调整系统虚拟内存
vim /etc/sysctl.conf
vm.max_map_count=262144
sysctl -p


# 开启内存锁定
vim /etc/security/limits.conf
# -----文件内容-------
* soft nofile 65536

* hard nofile 65536

* soft nproc 32000

* hard nproc 32000

* hard memlock unlimited

* soft memlock unlimited
# ------文件内容-------


vim /etc/systemd/system.conf
# ------文件内容-------
DefaultLimitNOFILE=65536
DefaultLimitNPROC=32000
DefaultLimitMEMLOCK=infinity
# ------文件内容-------

#非root用户
bin/elasticsearch 

# -d 后台启动
bin/elasticsearch -d
```
