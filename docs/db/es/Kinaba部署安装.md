---
title: Kinaba部署安装
prev:
  text: 集群监控工具ElasticView
  link: /db/es/集群监控工具ElasticView.md
next:
  text: Kinaba部署安装
  link: /db/es/Kinaba部署安装.md
---
::: info
&#8195;&#8195;Kibana是官方提供的一个监控、计算等一体的可视化仪表盘，支持ElasticSearch、Logstash、Filebeats等同一个技术栈下的多种监控和操作。
:::
[[toc]]
***

## 安装部署
### 配置文件
&#8195;&#8195;首先需要修改配置文件，需要注意的是，es如果开启了安全选项，需要配置访问es集群的用户名、密码登。
```yml 
# 端口
server.port: 5601
# 网关地址
server.host: 0.0.0.0
# 请求最大负载：1048576 ，单位字节
server.maxPayload: 1048576
# 服务名
server.name: "kibana"
# es集群配置
elasticsearch.hosts: ["http://1.1.1.1:9200","http://1.1.1.2:9200","http://1.1.1.3:9200"]
elasticsearch.username: "kibana"
elasticsearch.password: "xxxxx"
elasticsearch.pingTimeout: 1500
elasticsearch.requestTimeout: 30000
elasticsearch.maxSockets: 1024
logging.root.level: info
logging.appenders.default:
  type: file
  fileName: /opt/kibana/kibana-8.3.2/logs/kibana.log
  layout:
    type: json
logging.loggers:
  - name: elasticsearch.query
    level: info
  - name: http.server.response
    level: info
  - name: metrics.ops
    level: info
path.data: /opt/kibana/kibana-8.3.2/data
#pid.file: /run/kibana/kibana.pid
#ops.interval: 5000
i18n.locale: "zh-CN"
#migrations.batchSize: 1000
# configuration option. Default: 100mb
#migrations.maxBatchSizeBytes: 100mb
#migrations.retryAttempts: 15
#unifiedSearch.autocomplete.valueSuggestions.timeout: 1000
#unifiedSearch.autocomplete.valueSuggestions.terminateAfter: 100000

```

### 启动
&#8195;&#8195;kinaba同样也不能使用root用户，需要授权新用户
```shell
# 新建用户和授权
adduser es
passwd es 
chown -R es /opt/kibana/kibana-8.3.2

# 后台启动
nohup ./kibana
```
