import{_ as t,r as l,o,a as c,d as n,b as a,w as p,F as u,e as r,f as e}from"./app.7eb989d9.js";var i="/docs/images/microservice/config/\u914D\u7F6E\u4E2D\u5FC3\u5FEB\u901F\u5F00\u59CB.png";const k={},b=n("div",{class:"custom-container info"},[n("p",{class:"custom-container-title"},"\u76F8\u5173\u4FE1\u606F"),n("p",null,"\u2003\u2003\u5F00\u6E90\u914D\u7F6E\u4E2D\u5FC3\u7684\u65B9\u6848\u6709\u5F88\u591A\uFF0C\u6BD4\u5982Zookeeper\u3001Spring Cloud Config\u7B49\u3002\u65E0\u8BBA\u54EA\u79CD\u65B9\u6848\uFF0C\u5176\u6838\u5FC3\u539F\u7406\u548C\u76EE\u7684\u90FD\u662F\u4E00\u6837\u7684\u3002Nacos\u901A\u8FC7Config Service\u5B9E\u73B0\u4E86\u5BF9\u914D\u7F6E\u7684CURD\u3001\u7248\u672C\u7BA1\u7406\u3001\u7070\u5EA6\u7BA1\u7406\u3001\u76D1\u542C\u7BA1\u7406\u3001\u63A8\u9001\u8F68\u8FF9\u3001\u805A\u5408\u6570\u636E\u7B49\u529F\u80FD\u3002")],-1),m={class:"table-of-contents"},d=e("\u5FEB\u901F\u5F00\u59CB"),g=e("\u5916\u90E8\u5316\u914D\u7F6E"),y=e("\u57FA\u4E8EDataID\u914D\u7F6E"),f=e("\u591A\u73AF\u5883\u914D\u7F6E"),h=e("\u73AF\u5883\u9694\u79BB(Namespace\u548CGroup)"),v=e("\u9ED8\u8BA4\u914D\u7F6E\u548C\u6269\u5C55\u914D\u7F6E"),_=e("@RefreshScope"),x=e("\u603B\u7ED3\uFF1A\u57FA\u4E8ENacos\u7684\u914D\u7F6E\u65B9\u6848"),D=r(`<hr><h2 id="\u5FEB\u901F\u5F00\u59CB" tabindex="-1"><a class="header-anchor" href="#\u5FEB\u901F\u5F00\u59CB" aria-hidden="true">#</a> \u5FEB\u901F\u5F00\u59CB</h2><p>\u2003\u2003Spring Cloud Alibaba Nacos Config\u4E0D\u540C\u4E8ESpring Cloud Config\uFF0C\u5916\u90E8\u5316\u914D\u7F6E\u96C6\u5408\u4E86ConfigService\u548CConfigClient\u4E24\u90E8\u5206\uFF0C\u56E0\u6B64\u53EA\u9700\u8981\u4E00\u4E2A\u4F9D\u8D56\u5373\u53EF\u3002 \u2003\u2003\u6B64\u5916\uFF0C2.4\u7248\u672C\u4EE5\u4E0A\u7684SpringCloud\u4E0D\u4F1A\u518D\u4E3B\u52A8\u8BFB\u53D6bootstrap.yml\u4E2D\u7684\u914D\u7F6E\uFF0C\u56E0\u6B64\u9700\u8981\u5F15\u5165\u76F8\u5173\u4F9D\u8D56\u3002</p><div class="language-xml ext-xml line-numbers-mode"><pre class="language-xml"><code><span class="token comment">&lt;!-- nacos \u914D\u7F6E\u4E2D\u5FC3 --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>com.alibaba.cloud<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>spring-cloud-starter-alibaba-nacos-config<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>

<span class="token comment">&lt;!-- \u8BFB\u53D6bootstrap.yml \u914D\u7F6E\u6587\u4EF6--&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.springframework.cloud<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>spring-cloud-starter-bootstrap<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p>\u2003\u2003\u5BF9\u4E8E\u5176\u914D\u7F6E\u7684\u9AD8\u7EA7\u529F\u80FD\u4E0B\u4E2A\u7AE0\u8282\u8BE6\u7EC6\u5C55\u5F00\uFF0C\u8FD9\u91CC\u4F7F\u7528\u6700\u7B80\u5355\u7684\u914D\u7F6E\u4F5C\u4E3A\u5FEB\u901F\u5F00\u59CB\u3002</p><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token comment"># bootstrap.yml</span>
<span class="token key atrule">spring</span><span class="token punctuation">:</span>
  <span class="token key atrule">application</span><span class="token punctuation">:</span>
    <span class="token key atrule">name</span><span class="token punctuation">:</span> config
  <span class="token key atrule">cloud</span><span class="token punctuation">:</span>
    <span class="token key atrule">nacos</span><span class="token punctuation">:</span>
      <span class="token key atrule">discovery</span><span class="token punctuation">:</span>
        <span class="token key atrule">server-addr</span><span class="token punctuation">:</span> 127.0.0.1<span class="token punctuation">:</span><span class="token number">8848</span>
        <span class="token key atrule">namespace</span><span class="token punctuation">:</span> public
        <span class="token key atrule">group</span><span class="token punctuation">:</span> DEFAULT_GROUP
      <span class="token key atrule">config</span><span class="token punctuation">:</span>
        <span class="token key atrule">server-addr</span><span class="token punctuation">:</span> 127.0.0.1<span class="token punctuation">:</span><span class="token number">8848</span>
        <span class="token key atrule">namespace</span><span class="token punctuation">:</span> public
        <span class="token key atrule">group</span><span class="token punctuation">:</span> DEFAULT_GROUP
        <span class="token key atrule">file-extension</span><span class="token punctuation">:</span> yaml
        <span class="token key atrule">prefix</span><span class="token punctuation">:</span> config

<span class="token key atrule">text</span><span class="token punctuation">:</span> <span class="token string">&quot;\u6D4B\u8BD5\u8F93\u51FA\u672C\u5730\u914D\u7F6E&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div><p>\u2003\u2003\u901A\u8FC7\u4EE5\u4E0B\u4E00\u4E2A\u7B80\u5355\u7684SpringBoot\u7A0B\u5E8F\u8F93\u51FA\u914D\u7F6E\uFF1A</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token annotation punctuation">@SpringBootApplication</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Application</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">InterruptedException</span> <span class="token punctuation">{</span>
        <span class="token class-name">ConfigurableApplicationContext</span> context <span class="token operator">=</span> <span class="token class-name">SpringApplication</span><span class="token punctuation">.</span><span class="token function">run</span><span class="token punctuation">(</span><span class="token class-name">Application</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">String</span> text <span class="token operator">=</span> context<span class="token punctuation">.</span><span class="token function">getEnvironment</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getProperty</span><span class="token punctuation">(</span><span class="token string">&quot;text&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;text_&quot;</span><span class="token operator">+</span>text<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token class-name">Thread</span><span class="token punctuation">.</span><span class="token function">sleep</span><span class="token punctuation">(</span><span class="token number">2000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p>\u2003\u2003\u6B64\u65F6\u542F\u52A8\u9879\u76EE\u6211\u4EEC\u53EF\u4EE5\u5F97\u5230\u8F93\u51FA\u7ED3\u679C\u4E3A \u201C\u6D4B\u8BD5\u8F93\u51FA\u672C\u5730\u914D\u7F6E\u201D\u3002\u4E0B\u9762\u6211\u4EEC\u5728\u914D\u7F6E\u4E2D\u5FC3\u4E2D\u6DFB\u52A0\u914D\u7F6E\uFF0C\u5982\u4E0B\u56FE\u6240\u793A\uFF1A</p><p><img src="`+i+`" alt="\u914D\u7F6E\u4E2D\u5FC3\u5FEB\u901F\u5F00\u59CB" loading="lazy"></p><p>\u2003\u2003\u6B64\u65F6\u6211\u4EEC\u53EF\u4EE5\u5F97\u5230\u8F93\u51FA\u201C\u8F93\u51FA\u914D\u7F6E\u4E2D\u5FC3\u914D\u7F6E\u201D\u3002\u81F3\u6B64\u4E00\u4E2A\u7B80\u5355\u7684\u52A8\u6001\u66F4\u65B0\u914D\u7F6E\u7684demo\u5C31\u7B97\u5B8C\u6210\u4E86\u3002</p><h2 id="\u5916\u90E8\u5316\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#\u5916\u90E8\u5316\u914D\u7F6E" aria-hidden="true">#</a> \u5916\u90E8\u5316\u914D\u7F6E</h2><p>\u2003\u2003\u4F7F\u7528\u914D\u7F6E\u4E2D\u5FC3\u7684\u4E3B\u8981\u76EE\u7684\uFF0C\u5C31\u662F\u4E3A\u4E86\u5FAE\u670D\u52A1\u67B6\u6784\u4E2D\u7B80\u5316\u5FAE\u670D\u52A1\u914D\u7F6E\u6587\u4EF6\u7684\u76EE\u7684\uFF0C\u901A\u8FC7Nacos Config Service\u63D0\u4F9B\u7684\u591A\u79CD\u914D\u7F6E\uFF0C\u53EF\u4EE5\u901A\u8FC7\u5916\u90E8\u5316\u914D\u7F6E\u6587\u4EF6\u505A\u5230\u7B80\u5316\u5FAE\u670D\u52A1\u914D\u7F6E\u7684\u76EE\u7684\u3002 \u2003\u2003\u9700\u8981\u6CE8\u610F\u7684\u662F\uFF0C\u914D\u7F6E\u4E2D\u5FC3\u7684\u76F8\u5173\u914D\u7F6E\u662F\u9700\u8981\u653E\u5728bootstrap.yml\u6587\u4EF6\u4E2D\u7684\u3002SpringBoot\u4E2D\u6709\u4E24\u79CD\u4E0A\u4E0B\u6587\u914D\u7F6E\uFF0C\u4E00\u79CD\u662Fbootstrap\uFF0C\u4E00\u79CD\u662Fapplication\u3002\u5176\u4E2D<strong>bootstrap\u662F\u5E94\u7528\u7A0B\u5E8F\u7684\u7236\u4E0A\u4E0B\u6587\uFF0C\u4F18\u5148\u4E8Eapplication\u8FDB\u884C\u52A0\u8F7D</strong>(\u4E5F\u5C31\u610F\u5473\u7740application\u4F1A\u8986\u76D6bootstrap)\u3002\u5728\u52A0\u8F7D\u8FDC\u7A0B\u914D\u7F6E\u4E4B\u524D\uFF0C\u9700\u8981\u8BFB\u53D6Nacos\u914D\u7F6E\u4E2D\u5FC3\u7684\u670D\u52A1\u5730\u5740\u4FE1\u606F\uFF0C\u6240\u4EE5Nacos\u7684\u670D\u52A1\u5730\u5740\u9700\u8981\u53D1\u5728bootstrap\u8FDB\u884C\u4F18\u5148\u52A0\u8F7D\u3002 \u2003\u2003\u5BF9\u4E8E\u5916\u90E8\u5316\u914D\u7F6E\u7684\u4F7F\u7528\uFF0C\u9996\u5148\u9700\u8981\u5728NacosConfigServer\u4E0A\u6309\u7167\u6307\u5B9A\u7684DataID\u3001Namespace\u3001Group\u8FDB\u884C\u914D\u7F6E\uFF1B\u5176\u6B21\u9700\u8981client\u5728bootstrap\u4E2D\u8FDB\u884C\u58F0\u660E\u3002</p><h3 id="\u57FA\u4E8Edataid\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#\u57FA\u4E8Edataid\u914D\u7F6E" aria-hidden="true">#</a> \u57FA\u4E8EDataID\u914D\u7F6E</h3><p>\u2003\u2003\u5F53\u6211\u4EEC\u7684client\u7AEF\u4ECENacos Config Server\u4E2D\u52A0\u8F7D\u914D\u7F6E\u65F6\uFF0C\u4F1A\u5339\u914DServer\u7AEF\u7684DataID\uFF0C\u4E5F\u5C31\u662F\u4E0A\u56FE\u4E2D\u6211\u4EEC\u9700\u8981\u586B\u5199\u7684&quot;config.yml&quot;\u4E00\u680F\u3002\u5728Nacos\u7684\u5B9E\u73B0\u4E2D\uFF0C\u9ED8\u8BA4\u7684DataID\u7684\u5B9E\u73B0\u4E3A\uFF1A</p><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token comment">#{\u524D\u7F00}-{\u591A\u73AF\u5883\u652F\u6301}.{\u6269\u5C55\u540D}</span>
$<span class="token punctuation">{</span>prefix<span class="token punctuation">}</span><span class="token punctuation">-</span>$<span class="token punctuation">{</span>spring.profile.active<span class="token punctuation">}</span>.$<span class="token punctuation">{</span>file<span class="token punctuation">-</span>extension<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><ul><li>\u5728\u9ED8\u8BA4\u60C5\u51B5\u4E0B\uFF0C\u5982\u679C\u4E0D\u6307\u5B9Aprefix\uFF0C\u90A3\u4E48\u5C31\u4F1A\u8BFB\u53D6{spring.application.name}.properties\u7684\u914D\u7F6E\u3002</li><li>\u5982\u679C\u660E\u786E\u6307\u5B9A\u4E86prefix\uFF0C\u90A3\u4E48\u4F1A\u8BFB\u53D6\u914D\u7F6E\u7684\u540D\u79F0\u3002</li></ul><p>\u2003\u2003\u5BF9\u4E8Eclient\u7AEF\u5BF9\u8FDC\u7A0B\u52A0\u8F7D\u914D\u7F6E\u7684\u524D\u7F00\u7684\u6307\u5B9A\u548C\u540E\u7F00\u6307\u5B9A\uFF0C\u5728bootstrap.yml\u4E2D\u5BF9\u5E94\u7684\u5C5E\u6027\u5982\u4E0B\uFF1A</p><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token key atrule">spring</span><span class="token punctuation">:</span>
  <span class="token key atrule">cloud</span><span class="token punctuation">:</span>
    <span class="token key atrule">nacos</span><span class="token punctuation">:</span>
      <span class="token key atrule">config</span><span class="token punctuation">:</span>
        <span class="token key atrule">prefix</span><span class="token punctuation">:</span> config
        <span class="token key atrule">file-extension</span><span class="token punctuation">:</span> yaml
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h3 id="\u591A\u73AF\u5883\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#\u591A\u73AF\u5883\u914D\u7F6E" aria-hidden="true">#</a> \u591A\u73AF\u5883\u914D\u7F6E</h3><p>\u2003\u2003\u5728SpringBoot\u4E2D\uFF0C\u53EF\u4EE5\u57FA\u4E8Espring.profiles.active\u5B9E\u73B0\u4E0D\u540C\u73AF\u5883\u4E0B\u7684\u914D\u7F6E\u5207\u6362\uFF0C\u7EDD\u5927\u591A\u6570\u516C\u53F8\u90FD\u4F1A\u6709\u5F00\u53D1\u73AF\u5883\u3001\u6D4B\u8BD5\u73AF\u5883\u3001\u9884\u751F\u4EA7\u73AF\u5883\u3001\u751F\u4EA7\u73AF\u5883\u7B49\uFF0C\u4E0D\u540C\u73AF\u5883\u4E0B\u914D\u7F6E\u662F\u4E0D\u4E00\u5B9A\u76F8\u540C\u7684\uFF0C\u6240\u4EE5\u5E0C\u671B\u80FD\u591F\u901A\u8FC7\u4E00\u4E2A\u5C5E\u6027\u65B9\u4FBF\u7684\u6307\u5B9A\u4E0D\u540C\u7684\u914D\u7F6E\u6587\u4EF6\u3002 \u2003\u2003SpringBoot\u7684\u591A\u73AF\u5883\u914D\u7F6E\u5982\u4E0B\u6240\u793A\uFF1A</p><ul><li>\u5728resources\u76EE\u5F55\u4E2D\u521B\u5EFA\u4E0D\u540C\u7684\u914D\u7F6E\u6587\u4EF6</li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>/resources
    - application-dev.properties
    - application-test.properties
    - application-prod.properties
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><ul><li>\u5B9A\u4E49\u4E00\u4E2Aapplication.properties\u7684\u9ED8\u8BA4\u914D\u7F6E\uFF0C\u5728\u914D\u7F6E\u4E2D\u4F7F\u7528\u4E0B\u9762\u7684\u5C5E\u6027\u7F6E\u9876\u5F53\u524D\u73AF\u5883\u914D\u7F6E\u3002\u4E5F\u53EF\u4EE5\u4F7F\u7528\u865A\u62DF\u673A\u7684\u542F\u52A8\u9009\u9879\u914D\u7F6E\u73AF\u5883 VM options=-Dspring.profiles.active=prod\u3002\u8FD9\u4E24\u79CD\u65B9\u5F0F\u7684\u4F5C\u7528\u662F\u76F8\u540C\u7684\u3002</li></ul><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token comment"># application.yml\u4E2D\u9ED8\u8BA4\u914D\u7F6E</span>
<span class="token key atrule">spring</span><span class="token punctuation">:</span>
    <span class="token key atrule">profiles</span><span class="token punctuation">:</span>
        <span class="token key atrule">active</span><span class="token punctuation">:</span> prod
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>\u2003\u2003\u5BF9\u4E8Eclient\u6307\u5B9A\u591A\u73AF\u5883\u8BFB\u53D6\u7684\u914D\u7F6E\uFF0C\u5728bootstrap.yml\u5BF9\u5E94\u5982\u4E0B\u914D\u7F6E(\u4E0E\u4E0A\u9762SpringBoot\u914D\u7F6E\u76F8\u540C\uFF0C\u4E0D\u9700\u8981\u989D\u5916\u7684\u914D\u7F6E)\uFF1A</p><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token key atrule">spring</span><span class="token punctuation">:</span>
  <span class="token key atrule">profiles</span><span class="token punctuation">:</span>
    <span class="token key atrule">active</span><span class="token punctuation">:</span> prod  
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h3 id="\u73AF\u5883\u9694\u79BB-namespace\u548Cgroup" tabindex="-1"><a class="header-anchor" href="#\u73AF\u5883\u9694\u79BB-namespace\u548Cgroup" aria-hidden="true">#</a> \u73AF\u5883\u9694\u79BB(Namespace\u548CGroup)</h3><p>\u2003\u2003Nacos\u7684\u6570\u636E\u6A21\u578B\u662F\u7531\u4E09\u5143\u7EC4\u6765\u552F\u4E00\u786E\u5B9A\u7684\uFF0C\u8FD9\u4E00\u70B9\u4E0E\u6CE8\u518C\u4E2D\u5FC3\u4E5F\u662F\u4E00\u6837\u7684\uFF0C\u5373Namespace\u3001Group\u3001service/DataId\u7EC4\u6210\u3002 \u2003\u2003Namespace\u5B9E\u73B0\u591A\u73AF\u5883\u6216\u8005\u591A\u79DF\u6237\u7684\u6570\u636E\u9694\u79BB\uFF0C\u5728\u4E0D\u540C\u7684Namespace\u4E0B\u53EF\u4EE5\u5B58\u5728\u76F8\u540C\u7684Group\u6216\u8005DataID\u3002Group\u7528\u6765\u5B9E\u73B0DataID\u7684\u5206\u7EC4\u63A7\u5236\u673A\u5236\uFF0C\u5B9E\u73B0\u4E0D\u540CGroup\u548CDataID\u7684\u9694\u79BB\uFF0C\u6BD4\u5982\u7528\u4E8E\u533A\u5206\u540C\u4E00\u4E2A\u73AF\u5883\u4E0B\u7684\u4E0D\u540C\u4E1A\u52A1\u7684\u5212\u5206\uFF0C\u5982\u79D2\u6740\u4E1A\u52A1\u3001\u8BA2\u5355\u4E1A\u52A1\u3001\u7528\u6237\u4E1A\u52A1\u6307\u5B9A\u4E3A\u4E0D\u540C\u7684\u7EC4\uFF0C\u540C\u5728\u5F00\u53D1\u73AF\u5883(\u76F8\u540C\u7684Namespace)\u4E0B\u7684\u4E1A\u52A1\u533A\u5206\u3002 \u2003\u2003\u4E09\u5143\u6570\u636E\u901A\u8FC7\u5982\u4E0B\u65B9\u5F0F\u6307\u5B9A\uFF1A</p><ul><li><strong>Namespace</strong>\uFF1Aserver\u7AEF\u9700\u8981\u901A\u8FC7server\u7AEF\u7684API\u6216\u8005\u5728\u63A7\u5236\u53F0\u521B\u5EFA(\u65B0\u7248\u672Cnacos\u53EF\u4EE5\u81EA\u5DF1\u6307\u5B9A\uFF0C\u4E0D\u518D\u968F\u673A\u751F\u6210)\u3002client\u7AEF\u901A\u8FC7bootstrap.yml\u4E2D\u7684\u5C5E\u6027\u6307\u5B9A\u6302\u8F7D\u54EA\u4E2A\u547D\u540D\u7A7A\u95F4\u4E0B\uFF1A</li></ul><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token key atrule">spring</span><span class="token punctuation">:</span>
  <span class="token key atrule">cloud</span><span class="token punctuation">:</span>
    <span class="token key atrule">nacos</span><span class="token punctuation">:</span>
      <span class="token key atrule">config</span><span class="token punctuation">:</span>
        <span class="token key atrule">namespace</span><span class="token punctuation">:</span> mall<span class="token punctuation">-</span>local<span class="token punctuation">-</span>dev
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><ul><li><strong>Group</strong>\uFF1Aserver\u7AEF\u9700\u8981\u5728\u63A7\u5236\u53F0\u521B\u5EFA\u5177\u4F53\u914D\u7F6E\u65F6\u58F0\u660EGroup\u3002client\u7AEF\u901A\u8FC7bootstrap\u3002yml\u4E2D\u7684\u5C5E\u6027\u6307\u5B9A\uFF1A</li></ul><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token key atrule">spring</span><span class="token punctuation">:</span>
  <span class="token key atrule">cloud</span><span class="token punctuation">:</span>
    <span class="token key atrule">nacos</span><span class="token punctuation">:</span>
      <span class="token key atrule">config</span><span class="token punctuation">:</span>
        <span class="token key atrule">group</span><span class="token punctuation">:</span> member
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><ul><li><strong>DataID</strong>\uFF1A\u5177\u4F53\u521B\u5EFA\u5728\u524D\u9762\u7AE0\u8282\u5DF2\u7ECF\u8BF4\u660E\u3002</li></ul><h3 id="\u9ED8\u8BA4\u914D\u7F6E\u548C\u6269\u5C55\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#\u9ED8\u8BA4\u914D\u7F6E\u548C\u6269\u5C55\u914D\u7F6E" aria-hidden="true">#</a> \u9ED8\u8BA4\u914D\u7F6E\u548C\u6269\u5C55\u914D\u7F6E</h3><p>\u2003\u2003Nacos\u7684\u6269\u5C55\u914D\u7F6E\u7684\u6838\u5FC3\u4F5C\u7528\u662F\u652F\u6301\u4E00\u4E2A\u5E94\u7528\u53EF\u4EE5\u8BFB\u53D6\u591A\u4E2A\u914D\u7F6E\u6587\u4EF6\uFF0C\u89E3\u51B3\u591A\u4E2A\u5E94\u7528\u914D\u7F6E\u5171\u4EAB\u7684\u95EE\u9898\u3002\u6BD4\u5982\u5728\u5B9E\u9645\u7684\u573A\u666F\u4E2D\uFF0C\u6211\u4EEC\u66F4\u503E\u5411\u4E8E\u5C06\u65E5\u5FD7\u3001Redis\u3001\u6CE8\u518C\u4E2D\u5FC3\u3001Kafka\u7B49\u7B49\u4E00\u7CFB\u5217\u7684\u6BD4\u8F83\u901A\u7528\u7684\u914D\u7F6E\u5355\u72EC\u63D0\u53D6\u51FA\u6765\uFF0C\u4F5C\u4E3A\u9ED8\u8BA4\u914D\u7F6E\u5728\u540C\u4E00\u4E2A\u7EC4\u6216\u8005\u540C\u4E00\u4E2A\u73AF\u5883\u4E0B\u4F7F\u7528\uFF0C\u800C\u5F00\u53D1\u8005\u53EA\u9700\u8981\u5173\u6CE8\u81EA\u5DF1\u7684\u670D\u52A1\u72EC\u6709\u7684\u914D\u7F6E\u5C31\u53EF\u4EE5\u3002 \u2003\u2003\u81EA\u5B9A\u4E49\u6269\u5C55\u7684DataID\u914D\u7F6E\u901A\u8FC7\u5982\u4E0B\u4E24\u79CD\u5C5E\u6027\u8FDB\u884C\u914D\u7F6E\uFF1A</p><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token key atrule">spring</span><span class="token punctuation">:</span>
  <span class="token key atrule">cloud</span><span class="token punctuation">:</span>
    <span class="token key atrule">nacos</span><span class="token punctuation">:</span>
      <span class="token key atrule">config</span><span class="token punctuation">:</span>
        sharedConfigs<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">:</span>
          <span class="token key atrule">dataId</span><span class="token punctuation">:</span> common.yml
          <span class="token key atrule">group</span><span class="token punctuation">:</span> DEFAULT_GROUP
          <span class="token key atrule">refresh</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>
        extensionConfigs<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">:</span>
          <span class="token key atrule">dataId</span><span class="token punctuation">:</span> redis.yml
          <span class="token key atrule">group</span><span class="token punctuation">:</span> DEFAULT_GROUP
          <span class="token key atrule">refresh</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><p>\u2003\u2003\u6211\u4EEC\u53EF\u4EE5\u770B\u5230\uFF0CsharedConfigs,extension-configs \u662F\u4E24\u4E2A\u4E2A\u6570\u7EC4\uFF0C\u524D\u8005\u8868\u793A\u5171\u7528\u7684\u914D\u7F6E\uFF0C\u540E\u8005\u8868\u793A\u9700\u8981\u989D\u5916\u62FC\u63A5\u7684\u914D\u7F6E\uFF0C\u5F53\u6570\u7EC4\u4E0B\u6807n\u8D8A\u5927\u65F6\uFF0C\u4F18\u5148\u7EA7\u8D8A\u9AD8\uFF0C\u8D8A\u65E9\u88AB\u52A0\u8F7D\uFF0C\u53EF\u4EE5\u914D\u7F6E\u591A\u7EC4\u6269\u5C55\u914D\u7F6E\uFF0C\u5176\u4E2D\u6BCF\u4E00\u9879\u7684\u542B\u4E49\u662F\u8FD9\u6837\u7684\uFF1A</p><ul><li>dataId\uFF1A\u6307\u5B9A\u9700\u8981\u52A0\u8F7D\u7684Nacos Config\u7684DataID\uFF0C\u8FD9\u91CC\u9700\u8981\u5E26\u6269\u5C55\u540D\uFF0C\u56E0\u4E3A\u6307\u5B9A\u7684\u662F\u4E00\u4E2A\u5177\u4F53\u7684\u6587\u4EF6</li><li>group\uFF1A\u6307\u5B9A\u9700\u8981\u52A0\u8F7D\u7684DataID\u6240\u5C5EGroup</li><li>refresh\uFF1A\u6307\u5B9A\u914D\u7F6E\u66F4\u65B0\u65F6\u662F\u5426\u52A8\u6001\u5237\u65B0\uFF0C\u9ED8\u8BA4false\u4E0D\u5237\u65B0</li></ul><h3 id="refreshscope" tabindex="-1"><a class="header-anchor" href="#refreshscope" aria-hidden="true">#</a> @RefreshScope</h3><p>\u2003\u2003\u6B64\u6CE8\u89E3\u53EF\u4EE5\u4F7F\u5F97\u4E1A\u52A1\u7C7B\u4E2D\u8BFB\u53D6\u4E0A\u4E0B\u6587\u4E2D\u5143\u6570\u636E\u65F6\u83B7\u5F97\u5237\u65B0\uFF0C\u5373\u4FEE\u6539\u914D\u7F6E\u4E2D\u5FC3\u7684\u914D\u7F6E\u53D1\u5E03\uFF0C\u4F7F\u7528@Value\u6CE8\u89E3\u8BFB\u53D6\u7684\u5143\u6570\u636E\u4F1A\u5F97\u5230\u5237\u65B0\uFF0C\u5BF9\u4E8E\u67D0\u4E9B\u573A\u666F\u8FD8\u662F\u6BD4\u8F83\u5B9E\u7528\u7684\uFF1A</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token annotation punctuation">@RestController</span>
<span class="token annotation punctuation">@RefreshScope</span> 
publicclassTestController <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Value</span><span class="token punctuation">(</span><span class="token string">&quot;name:zhangsan&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> name<span class="token punctuation">;</span>

    <span class="token annotation punctuation">@GetMapping</span><span class="token punctuation">(</span><span class="token string">&quot;/name&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> name<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><h2 id="\u603B\u7ED3-\u57FA\u4E8Enacos\u7684\u914D\u7F6E\u65B9\u6848" tabindex="-1"><a class="header-anchor" href="#\u603B\u7ED3-\u57FA\u4E8Enacos\u7684\u914D\u7F6E\u65B9\u6848" aria-hidden="true">#</a> \u603B\u7ED3\uFF1A\u57FA\u4E8ENacos\u7684\u914D\u7F6E\u65B9\u6848</h2><p>\u2003\u2003\u6211\u4EEC\u5C06\u4E0A\u8FF0\u4E0D\u540C\u4F5C\u7528\u7684client\u7684bootstrap.yml\u914D\u7F6E\u6587\u4EF6\u5408\u5E76\u5230\u4E00\u5904\uFF0C\u5982\u4E0B\u6240\u793A:</p><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token key atrule">spring</span><span class="token punctuation">:</span>
  <span class="token key atrule">application</span><span class="token punctuation">:</span>
    <span class="token key atrule">name</span><span class="token punctuation">:</span> config
  <span class="token key atrule">profiles</span><span class="token punctuation">:</span>
    <span class="token key atrule">active</span><span class="token punctuation">:</span> prod  
  <span class="token key atrule">cloud</span><span class="token punctuation">:</span>
    <span class="token key atrule">nacos</span><span class="token punctuation">:</span>
      <span class="token key atrule">config</span><span class="token punctuation">:</span>
        <span class="token key atrule">server-addr</span><span class="token punctuation">:</span> 127.0.0.1<span class="token punctuation">:</span><span class="token number">8848</span>
        <span class="token key atrule">namespace</span><span class="token punctuation">:</span> public
        <span class="token key atrule">group</span><span class="token punctuation">:</span> DEFAULT_GROUP
        <span class="token key atrule">file-extension</span><span class="token punctuation">:</span> yaml
        <span class="token key atrule">prefix</span><span class="token punctuation">:</span> config
        extensionConfigs<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">:</span>
          <span class="token key atrule">dataId</span><span class="token punctuation">:</span> kafka.yml
          <span class="token key atrule">group</span><span class="token punctuation">:</span> DEFAULT_GROUP
          <span class="token key atrule">refresh</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
        extensionConfigs<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">:</span>
          <span class="token key atrule">dataId</span><span class="token punctuation">:</span> redis.yml
          <span class="token key atrule">group</span><span class="token punctuation">:</span> DEFAULT_GROUP
          <span class="token key atrule">refresh</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
        extensionConfigs<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">:</span>
          <span class="token key atrule">dataId</span><span class="token punctuation">:</span> common.yml
          <span class="token key atrule">group</span><span class="token punctuation">:</span> DEFAULT_GROUP
          <span class="token key atrule">refresh</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br></div></div><p>\u2003\u2003\u7ED3\u5408\u4E0A\u8FF0\u901A\u8FC7Nacos Config Server\u5BF9\u4E8E\u4E09\u5143\u6570\u636E\u7684\u914D\u7F6E\uFF0C\u6211\u4EEC\u53EF\u4EE5\u603B\u7ED3\u51FA\u4E00\u5957\u4E00\u822C\u9002\u7528\u7684\u914D\u7F6E\u65B9\u6848\uFF1A</p><ul><li>\u73AF\u5883\u63A7\u5236\uFF1A\u901A\u8FC7Namespace\u8FDB\u884C\u73AF\u5883\u9694\u79BB\uFF0C\u4EE5\u6B64\u533A\u5206\u5F00\u53D1\u3001\u6D4B\u8BD5\u3001\u751F\u4EA7\u7B49\u73AF\u5883\u3002</li><li>\u4E1A\u52A1\u9694\u79BB\uFF1A\u901A\u8FC7Group\u5BF9\u4E0D\u540C\u7684\u4E1A\u52A1\u96C6\u7FA4\u8FDB\u884C\u5206\u7EC4\uFF0C\u4EE5\u6B64\u8FDB\u884C\u4E1A\u52A1\u7684\u5782\u76F4\u9694\u79BB\u3002</li><li>\u914D\u7F6E\u6269\u5C55\uFF1A\u4E0D\u540C\u73AF\u5883\u4E0B\u7684\u516C\u6709\u914D\u7F6E\u8FDB\u884C\u63D0\u53D6\uFF0C\u8FD9\u4E9B\u914D\u7F6E\u57FA\u672C\u56FA\u5B9A\uFF0C\u901A\u8FC7\u914D\u7F6E\u6269\u5C55\u6765\u9ED8\u8BA4\u52A0\u8F7D\u8FD9\u4E9B\u914D\u7F6E\u3002 <ul><li>\u6269\u5C55\u6587\u4EF6\u52A0\u8F7D\u987A\u5E8F\uFF1ADataId\u7CBE\u51C6\u5339\u914D &gt; \u4E0D\u5E26\u73AF\u5883\u7684DataID\u5339\u914D &gt; \u6269\u5C55 &gt; \u901A\u7528\u5171\u4EAB</li></ul></li></ul>`,47);function I(C,N){const s=l("RouterLink");return o(),c(u,null,[b,n("nav",m,[n("ul",null,[n("li",null,[a(s,{to:"#\u5FEB\u901F\u5F00\u59CB"},{default:p(()=>[d]),_:1})]),n("li",null,[a(s,{to:"#\u5916\u90E8\u5316\u914D\u7F6E"},{default:p(()=>[g]),_:1}),n("ul",null,[n("li",null,[a(s,{to:"#\u57FA\u4E8Edataid\u914D\u7F6E"},{default:p(()=>[y]),_:1})]),n("li",null,[a(s,{to:"#\u591A\u73AF\u5883\u914D\u7F6E"},{default:p(()=>[f]),_:1})]),n("li",null,[a(s,{to:"#\u73AF\u5883\u9694\u79BB-namespace\u548Cgroup"},{default:p(()=>[h]),_:1})]),n("li",null,[a(s,{to:"#\u9ED8\u8BA4\u914D\u7F6E\u548C\u6269\u5C55\u914D\u7F6E"},{default:p(()=>[v]),_:1})]),n("li",null,[a(s,{to:"#refreshscope"},{default:p(()=>[_]),_:1})])])]),n("li",null,[a(s,{to:"#\u603B\u7ED3-\u57FA\u4E8Enacos\u7684\u914D\u7F6E\u65B9\u6848"},{default:p(()=>[x]),_:1})])])]),D],64)}var G=t(k,[["render",I]]);export{G as default};
