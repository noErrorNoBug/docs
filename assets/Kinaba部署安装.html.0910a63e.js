import{_ as p,r as l,o as c,a as o,d as n,b as a,w as e,F as r,e as u,f as t}from"./app.7eb989d9.js";const i={},k=n("div",{class:"custom-container info"},[n("p",{class:"custom-container-title"},"\u76F8\u5173\u4FE1\u606F"),n("p",null,"\u2003\u2003Kibana\u662F\u5B98\u65B9\u63D0\u4F9B\u7684\u4E00\u4E2A\u76D1\u63A7\u3001\u8BA1\u7B97\u7B49\u4E00\u4F53\u7684\u53EF\u89C6\u5316\u4EEA\u8868\u76D8\uFF0C\u652F\u6301ElasticSearch\u3001Logstash\u3001Filebeats\u7B49\u540C\u4E00\u4E2A\u6280\u672F\u6808\u4E0B\u7684\u591A\u79CD\u76D1\u63A7\u548C\u64CD\u4F5C\u3002")],-1),b={class:"table-of-contents"},m=t("\u5B89\u88C5\u90E8\u7F72"),d=t("\u914D\u7F6E\u6587\u4EF6"),h=t("\u542F\u52A8"),g=u(`<hr><h2 id="\u5B89\u88C5\u90E8\u7F72" tabindex="-1"><a class="header-anchor" href="#\u5B89\u88C5\u90E8\u7F72" aria-hidden="true">#</a> \u5B89\u88C5\u90E8\u7F72</h2><h3 id="\u914D\u7F6E\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u914D\u7F6E\u6587\u4EF6" aria-hidden="true">#</a> \u914D\u7F6E\u6587\u4EF6</h3><p>\u2003\u2003\u9996\u5148\u9700\u8981\u4FEE\u6539\u914D\u7F6E\u6587\u4EF6\uFF0C\u9700\u8981\u6CE8\u610F\u7684\u662F\uFF0Ces\u5982\u679C\u5F00\u542F\u4E86\u5B89\u5168\u9009\u9879\uFF0C\u9700\u8981\u914D\u7F6E\u8BBF\u95EEes\u96C6\u7FA4\u7684\u7528\u6237\u540D\u3001\u5BC6\u7801\u767B\u3002</p><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token comment"># \u7AEF\u53E3</span>
<span class="token key atrule">server.port</span><span class="token punctuation">:</span> <span class="token number">5601</span>
<span class="token comment"># \u7F51\u5173\u5730\u5740</span>
<span class="token key atrule">server.host</span><span class="token punctuation">:</span> 0.0.0.0
<span class="token comment"># \u8BF7\u6C42\u6700\u5927\u8D1F\u8F7D\uFF1A1048576 \uFF0C\u5355\u4F4D\u5B57\u8282</span>
<span class="token key atrule">server.maxPayload</span><span class="token punctuation">:</span> <span class="token number">1048576</span>
<span class="token comment"># \u670D\u52A1\u540D</span>
<span class="token key atrule">server.name</span><span class="token punctuation">:</span> <span class="token string">&quot;kibana&quot;</span>
<span class="token comment"># es\u96C6\u7FA4\u914D\u7F6E</span>
<span class="token key atrule">elasticsearch.hosts</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">&quot;http://1.1.1.1:9200&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;http://1.1.1.2:9200&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;http://1.1.1.3:9200&quot;</span><span class="token punctuation">]</span>
<span class="token key atrule">elasticsearch.username</span><span class="token punctuation">:</span> <span class="token string">&quot;kibana&quot;</span>
<span class="token key atrule">elasticsearch.password</span><span class="token punctuation">:</span> <span class="token string">&quot;xxxxx&quot;</span>
<span class="token key atrule">elasticsearch.pingTimeout</span><span class="token punctuation">:</span> <span class="token number">1500</span>
<span class="token key atrule">elasticsearch.requestTimeout</span><span class="token punctuation">:</span> <span class="token number">30000</span>
<span class="token key atrule">elasticsearch.maxSockets</span><span class="token punctuation">:</span> <span class="token number">1024</span>
<span class="token key atrule">logging.root.level</span><span class="token punctuation">:</span> info
<span class="token key atrule">logging.appenders.default</span><span class="token punctuation">:</span>
  <span class="token key atrule">type</span><span class="token punctuation">:</span> file
  <span class="token key atrule">fileName</span><span class="token punctuation">:</span> /opt/kibana/kibana<span class="token punctuation">-</span>8.3.2/logs/kibana.log
  <span class="token key atrule">layout</span><span class="token punctuation">:</span>
    <span class="token key atrule">type</span><span class="token punctuation">:</span> json
<span class="token key atrule">logging.loggers</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> elasticsearch.query
    <span class="token key atrule">level</span><span class="token punctuation">:</span> info
  <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> http.server.response
    <span class="token key atrule">level</span><span class="token punctuation">:</span> info
  <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> metrics.ops
    <span class="token key atrule">level</span><span class="token punctuation">:</span> info
<span class="token key atrule">path.data</span><span class="token punctuation">:</span> /opt/kibana/kibana<span class="token punctuation">-</span>8.3.2/data
<span class="token comment">#pid.file: /run/kibana/kibana.pid</span>
<span class="token comment">#ops.interval: 5000</span>
<span class="token key atrule">i18n.locale</span><span class="token punctuation">:</span> <span class="token string">&quot;zh-CN&quot;</span>
<span class="token comment">#migrations.batchSize: 1000</span>
<span class="token comment"># configuration option. Default: 100mb</span>
<span class="token comment">#migrations.maxBatchSizeBytes: 100mb</span>
<span class="token comment">#migrations.retryAttempts: 15</span>
<span class="token comment">#unifiedSearch.autocomplete.valueSuggestions.timeout: 1000</span>
<span class="token comment">#unifiedSearch.autocomplete.valueSuggestions.terminateAfter: 100000</span>

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br></div></div><h3 id="\u542F\u52A8" tabindex="-1"><a class="header-anchor" href="#\u542F\u52A8" aria-hidden="true">#</a> \u542F\u52A8</h3><p>\u2003\u2003kinaba\u540C\u6837\u4E5F\u4E0D\u80FD\u4F7F\u7528root\u7528\u6237\uFF0C\u9700\u8981\u6388\u6743\u65B0\u7528\u6237</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u65B0\u5EFA\u7528\u6237\u548C\u6388\u6743</span>
adduser es
<span class="token function">passwd</span> es 
<span class="token function">chown</span> -R es /opt/kibana/kibana-8.3.2

<span class="token comment"># \u540E\u53F0\u542F\u52A8</span>
<span class="token function">nohup</span> ./kibana
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div>`,8);function y(f,_){const s=l("RouterLink");return c(),o(r,null,[k,n("nav",b,[n("ul",null,[n("li",null,[a(s,{to:"#\u5B89\u88C5\u90E8\u7F72"},{default:e(()=>[m]),_:1}),n("ul",null,[n("li",null,[a(s,{to:"#\u914D\u7F6E\u6587\u4EF6"},{default:e(()=>[d]),_:1})]),n("li",null,[a(s,{to:"#\u542F\u52A8"},{default:e(()=>[h]),_:1})])])])])]),g],64)}var x=p(i,[["render",y]]);export{x as default};
