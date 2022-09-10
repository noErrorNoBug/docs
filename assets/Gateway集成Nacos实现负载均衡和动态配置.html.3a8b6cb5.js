import{_ as e,r as o,o as l,a as u,d as a,b as t,w as p,F as i,e as c,f as n}from"./app.7eb989d9.js";const r={},k=a("div",{class:"custom-container info"},[a("p",{class:"custom-container-title"},"\u6982\u8FF0"),a("p",null,"\u2003\u2003Nacos\u53EF\u4EE5\u7528\u4E8E\u5B9E\u73B0 Spring Cloud Gateway\u4E2D\u7F51\u5173\u7684\u52A8\u6001\u8DEF\u7531\u7684\u529F\u80FD\uFF0C\u4E5F\u53EF\u4EE5\u57FA\u4E8ENacos\u5B9E\u73B0\u5BF9\u540E\u7AEF\u670D\u52A1\u7684\u8D1F\u8F7D\u5747\u8861\u3002\u524D\u8005\u5229\u7528Nacos\u7684\u914D\u7F6E\u4E2D\u5FC3\u7684\u529F\u80FD\uFF0C\u540E\u8005\u5229\u7528Nacos\u670D\u52A1\u6CE8\u518C\u7684\u529F\u80FD\u3002")],-1),g={class:"table-of-contents"},d=n("\u4F9D\u8D56\u6574\u5408"),b=n("\u914D\u7F6E\u6587\u4EF6"),m=c(`<hr><h2 id="\u4F9D\u8D56\u6574\u5408" tabindex="-1"><a class="header-anchor" href="#\u4F9D\u8D56\u6574\u5408" aria-hidden="true">#</a> \u4F9D\u8D56\u6574\u5408</h2><p>\u2003\u2003\u4E0B\u9762\u662F\u5B9E\u73B0\u6574\u5408\u6240\u9700\u8981\u7684\u4F9D\u8D56\uFF0C\u6CE8\u518C\u4E2D\u5FC3\u3001\u914D\u7F6E\u4E2D\u5FC3\u548C\u7F51\u5173\u81EA\u8EAB\u7684\u4F9D\u8D56\u5E76\u4E0D\u9700\u8981\u591A\u89E3\u91CA\u3002\u6B64\u5916\u5BF9\u4E8E\u9AD8\u7248\u672C\u7684Nacos\uFF0C\u9700\u8981\u81EA\u5DF1\u96C6\u6210LoadBalancer\u7684\u4F9D\u8D56\u5B9E\u73B0\u8D1F\u8F7D\u5747\u8861\uFF0CNacos\u5305\u4E0D\u518D\u81EA\u5DF1\u63D0\u4F9BLoadBalancer\u3002\u540C\u68372.4\u4EE5\u4E0A\u7684SpringCloud\u9ED8\u8BA4\u4E0D\u518D\u63D0\u4F9B\u8BFBbootstrap.yml\u7684\u529F\u80FD\uFF0C\u9700\u8981\u7EE7\u627F\u76F8\u5173\u5305\u3002</p><div class="language-xml ext-xml line-numbers-mode"><pre class="language-xml"><code><span class="token comment">&lt;!-- Gateway \u81EA\u8EAB\u4F9D\u8D56 --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.springframework.cloud<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>spring-cloud-starter-gateway<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
<span class="token comment">&lt;!-- \u670D\u52A1\u6CE8\u518C\u4E0E\u53D1\u73B0 --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>com.alibaba.cloud<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>spring-cloud-starter-alibaba-nacos-discovery<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
<span class="token comment">&lt;!-- \u914D\u7F6E\u4E2D\u5FC3 --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>com.alibaba.cloud<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>spring-cloud-starter-alibaba-nacos-config<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
<span class="token comment">&lt;!-- \u8BFB\u53D6bootstrap.yml --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.springframework.cloud<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>spring-cloud-starter-bootstrap<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
<span class="token comment">&lt;!-- LoadBalancer\u8D1F\u8F7D\u5747\u8861 --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.springframework.cloud<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>spring-cloud-starter-loadbalancer<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br></div></div>`,4),_=n("\u2003\u2003\u6709\u5173"),E=n("Nacos\u670D\u52A1\u6CE8\u518C\u4E0E\u53D1\u73B0"),h=n("\u3001"),f=n("LoadBalancer\u8D1F\u8F7D\u5747\u8861"),B=n("\u3001"),I=n("Nacos\u914D\u7F6E\u4E2D\u5FC3"),y=n("\u76F8\u5173\u7684\u539F\u7406\uFF0C\u8BE6\u89C1\u5BF9\u5E94\u7AE0\u8282\u3002"),A=c('<h2 id="\u914D\u7F6E\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u914D\u7F6E\u6587\u4EF6" aria-hidden="true">#</a> \u914D\u7F6E\u6587\u4EF6</h2><p>\u2003\u2003\u914D\u7F6E\u6587\u4EF6\u6B64\u5904\u5EFA\u8BAE\u4F7F\u7528Nacos\u6CE8\u518C\u4E2D\u5FC3\u7684\u52A8\u6001\u914D\u7F6E\uFF0C\u7531\u4E8E\u7F51\u5173\u7684\u914D\u7F6E\u6587\u4EF6\u6BD4\u8F83\u591A\uFF0C\u800C\u4E14\u529F\u80FD\u6BD4\u8F83\u590D\u6742\uFF0C\u8FD9\u91CC\u53EA\u7ED9\u51FA\u4E00\u4E9B\u5212\u5206\u7684\u610F\u89C1\uFF1A</p><ul><li>bootstrap.yml \u4E2D\u8FDB\u884C\u914D\u7F6E\u4E2D\u5FC3\u7684\u4E00\u4E9B\u57FA\u7840\u914D\u7F6E\u7528\u4E8E\u9879\u76EE\u542F\u52A8</li><li>Web\u76F8\u5173\u7684\u7EDF\u4E00\u914D\u7F6E\u3001\u76D1\u63A7\u76F8\u5173\u7684\u914D\u7F6E\uFF0C\u5728\u914D\u7F6E\u4E2D\u5FC3\u5355\u72EC\u4F5C\u4E3A\u516C\u5171\u914D\u7F6E\u8FDB\u884C\u63D0\u53D6</li><li>\u9488\u5BF9\u4E0D\u540C\u7684\u4E0B\u5C5E\u540E\u7AEF\u670D\u52A1\u96C6\u7FA4\u5207\u5272gateway\u7684\u914D\u7F6E\u6587\u4EF6\uFF0C\u5728\u914D\u7F6E\u4E2D\u5FC3\u8FDB\u884C\u52A8\u6001\u914D\u7F6E\uFF0C\u5E76\u4E14\u5F00\u542F\u52A8\u6001\u5237\u65B0</li><li>\u9700\u8981\u7070\u5EA6\u53D1\u5E03\u7684\u670D\u52A1\u6839\u636E\u670D\u52A1\u96C6\u7FA4\u8FDB\u884C\u5207\u5272\uFF0C\u5728\u914D\u7F6E\u4E2D\u5FC3\u8FDB\u884C\u52A8\u6001\u914D\u7F6E\uFF0C\u5E76\u4E14\u5F00\u542F\u52A8\u6001\u5237\u65B0</li><li>\u8BA4\u8BC1\u76F8\u5173\u7684\u914D\u7F6E\u5728\u914D\u7F6E\u4E2D\u5FC3\u8FDB\u884C\u52A8\u6001\u914D\u7F6E\uFF0C\u5E76\u4E14\u5F00\u542F\u5237\u65B0</li><li>\u9650\u6D41\u76F8\u5173\u7684\u914D\u7F6E\u5728\u914D\u7F6E\u4E2D\u5FC3\u8FDB\u884C\u5355\u72EC\u914D\u7F6E\uFF0C\u5E76\u4E14\u5F00\u542F\u5237\u65B0</li></ul><hr><p>\u53C2\u8003</p><ul><li>Spring Cloud Alibaba \u5FAE\u670D\u52A1\u539F\u7406\u4E0E\u5B9E\u6218[\u8C2D\u5CF0(mic)]. \u4E2D\u56FD\u5DE5\u4FE1\u51FA\u7248\u793E,\u7535\u5B50\u5DE5\u4E1A\u51FA\u7248\u793E</li></ul>',6);function N(v,x){const s=o("RouterLink");return l(),u(i,null,[k,a("nav",g,[a("ul",null,[a("li",null,[t(s,{to:"#\u4F9D\u8D56\u6574\u5408"},{default:p(()=>[d]),_:1})]),a("li",null,[t(s,{to:"#\u914D\u7F6E\u6587\u4EF6"},{default:p(()=>[b]),_:1})])])]),m,a("p",null,[_,t(s,{to:"/microservice/register/%E5%9F%BA%E4%BA%8EAP%E6%9E%B6%E6%9E%84%E4%B8%8B%E7%9A%84Nacos%E6%9C%8D%E5%8A%A1%E6%B3%A8%E5%86%8C%E5%92%8C%E6%9C%8D%E5%8A%A1%E5%8F%91%E7%8E%B0%E5%8E%9F%E7%90%86.html"},{default:p(()=>[E]),_:1}),h,t(s,{to:"/microservice/loadbalance/LoadBalancer%E6%A0%B8%E5%BF%83%E5%8E%9F%E7%90%86.html"},{default:p(()=>[f]),_:1}),B,t(s,{to:"/microservice/config/%E5%9F%BA%E4%BA%8ENacos%E7%9A%84%E9%85%8D%E7%BD%AE%E4%B8%AD%E5%BF%83%E5%AE%9E%E7%8E%B0.html"},{default:p(()=>[I]),_:1}),y]),A],64)}var C=e(r,[["render",N]]);export{C as default};
