import{_ as p,r as o,o as l,a as c,d as n,b as t,w as e,F as i,f as s,e as u}from"./app.7eb989d9.js";const r={},k={class:"custom-container info"},d=n("p",{class:"custom-container-title"},"\u76F8\u5173\u4FE1\u606F",-1),m=s("\u2003\u2003Sentinel\u652F\u6301\u591A\u79CD\u4FDD\u62A4\u89C4\u5219\uFF1A\u6D41\u91CF\u63A7\u5236\u89C4\u5219\u3001\u7194\u65AD\u964D\u7EA7\u89C4\u5219\u3001\u7CFB\u7EDF\u4FDD\u62A4\u89C4\u5219\u3001\u6765\u6E90\u8BBF\u95EE\u63A7\u5236\u89C4\u5219\u3001\u70ED\u70B9\u53C2\u6570\u89C4\u5219\u7B49\u3002\u5728"),b=s("\u5B9E\u73B0Sentinel\u9650\u6D41"),g=s("\u4E2D\u6211\u4EEC\u63D0\u5230\u8FC7\uFF0C\u8FD9\u4E9B\u89C4\u5219\u662F\u901A\u8FC7\u591A\u4E2AFlowRule\u5B9A\u4E49\u7684\uFF0C\u9664\u6B64\u4E4B\u5916\uFF0C\u8FD8\u53EF\u4EE5\u4F7F\u7528\u63A7\u5236\u53F0\u8FDB\u884C\u5B9A\u4E49\uFF0C\u4F46\u662F\u6838\u5FC3\u4E5F\u662F\u53BB\u5B9A\u4E49FlowRule\u3002"),h={class:"table-of-contents"},f=s("Sentinel\u6D41\u63A7\u89C4\u5219"),_=s("\u57FA\u4E8E\u5E76\u53D1\u6570\u548CQPS\u7684\u6D41\u91CF\u63A7\u5236"),w=s("QPS\u6D41\u91CF\u63A7\u5236\u884C\u4E3A"),v=s("\u8C03\u7528\u5173\u7CFB\u8C03\u6D41\u7B56\u7565"),S=s("Sentinel\u7194\u65AD\u89C4\u5219"),R=s("\u7194\u65AD\u7B56\u7565"),x=s("\u70ED\u70B9\u89C4\u5219"),y=s("\u7CFB\u7EDF\u89C4\u5219"),E=s("\u6388\u6743\u89C4\u5219"),C=s("\u96C6\u7FA4\u89C4\u5219"),B=s("\u89C4\u5219\u539F\u7406"),T=u(`<hr><h2 id="sentinel\u6D41\u63A7\u89C4\u5219" tabindex="-1"><a class="header-anchor" href="#sentinel\u6D41\u63A7\u89C4\u5219" aria-hidden="true">#</a> Sentinel\u6D41\u63A7\u89C4\u5219</h2><p>\u2003\u2003<strong>\u8D44\u6E90\u4FDD\u62A4\u89C4\u5219\u901A\u8FC7FlowRule\u5B9A\u4E49\uFF0CFlowRule\u67095\u4E2A\u6838\u5FC3\u5C5E\u6027</strong>\uFF0C\u8D44\u6E90\u4FDD\u62A4\u89C4\u5219\u5C31\u662F\u56F4\u7ED5\u8FD94\u4E2A\u6838\u5FC3\u5C5E\u6027\u914D\u7F6E\u7684\uFF0C\u6211\u4EEC\u5206\u522B\u6765\u4E86\u89E3\u4E00\u4E0B\u542B\u4E49\uFF1A</p><ul><li><strong>limitApp</strong>\uFF1A<strong>\u662F\u5426\u9700\u8981\u9488\u5BF9\u8C03\u7528\u6765\u6E90\u8FDB\u884C\u9650\u6D41</strong>\uFF0C\u9ED8\u8BA4default(\u4E0D\u533A\u5206\u8C03\u7528\u6765\u6E90)\uFF0C\u5FAE\u670D\u52A1\u67B6\u6784\u4E0B\u53EF\u4EE5\u6307\u5B9A\u670D\u52A1\u540D\uFF0C\u914D\u7F6E\u9488\u5BF9\u67D0\u670D\u52A1\u7684\u9650\u6D41\u89C4\u5219\u3002</li><li><strong>grade</strong>\uFF1A<strong>\u6D41\u91CF\u63A7\u5236\u7EDF\u8BA1\u7C7B\u578B</strong>\uFF0CQPS(\u6BCF\u79D2\u8BBF\u95EE\u63A5\u53E3\u6B21\u6570)\u6216\u8005\u5E76\u53D1\u7EBF\u7A0B\u6570(\u4E3A\u63A5\u6536\u8BF7\u6C42\u5206\u914D\u7684\u7EBF\u7A0B\u6570\u91CF)\u3002</li><li><strong>strategy</strong>\uFF1A<strong>\u8C03\u7528\u5173\u7CFB\u9650\u6D41\u7B56\u7565</strong>\uFF0C\u5305\u62EC\u76F4\u63A5\u3001\u94FE\u8DEF\u3001\u5173\u8054\u3002</li><li><strong>controlBehavior</strong>\uFF1A<strong>\u6D41\u63A7\u884C\u4E3A</strong>\uFF0C\u5305\u62EC\u76F4\u63A5\u62D2\u7EDD\u3001\u6392\u961F\u7B49\u5F85\u3001\u6162\u542F\u52A8\u6A21\u5F0F\uFF0C\u9ED8\u8BA4\u662F\u76F4\u63A5\u62D2\u7EDD\u3002</li><li><strong>clusterMode</strong>\uFF1A<strong>\u662F\u5426\u662F\u96C6\u7FA4\u9650\u6D41</strong>\uFF0C\u9ED8\u8BA4\u4E3A\u5426\u3002</li></ul><h3 id="\u57FA\u4E8E\u5E76\u53D1\u6570\u548Cqps\u7684\u6D41\u91CF\u63A7\u5236" tabindex="-1"><a class="header-anchor" href="#\u57FA\u4E8E\u5E76\u53D1\u6570\u548Cqps\u7684\u6D41\u91CF\u63A7\u5236" aria-hidden="true">#</a> \u57FA\u4E8E\u5E76\u53D1\u6570\u548CQPS\u7684\u6D41\u91CF\u63A7\u5236</h3><p>\u2003\u2003\u4E0A\u8FF0grade\u5C5E\u6027\u63A7\u5236\u7684\u4E24\u4E2A\u7B56\u7565\uFF0C<strong>\u5E76\u53D1\u7EBF\u7A0B\u6570\u9650\u6D41\u7528\u6765\u4FDD\u62A4\u4E1A\u52A1\u7EBF\u7A0B\u4E0D\u88AB\u8017\u5C3D</strong>\u3002\u6BD4\u5982A\u670D\u52A1\u8C03\u7528B\u670D\u52A1\uFF0C\u800CB\u670D\u52A1\u56E0\u4E3A\u67D0\u79CD\u539F\u56E0\u5BFC\u81F4\u670D\u52A1\u4E0D\u7A33\u5B9A\u6216\u8005\u54CD\u5E94\u5EF6\u8FDF\uFF0C\u90A3\u4E48\u5BF9\u4E8EA\u6765\u8BF4\u541E\u5410\u91CF\u4F1A\u4E0B\u964D\uFF0C\u4E5F\u5C31\u4E00\u76F4\u5360\u7528\u7EBF\u7A0B\u3002</p><p>\u2003\u2003QPS\u8868\u793A\u6BCF\u79D2\u7684\u67E5\u8BE2\u6570\uFF0C\u4E5F\u5C31\u662F\u4E00\u53F0\u670D\u52A1\u5668\u6BCF\u79D2\u80FD\u591F\u54CD\u5E94\u7684\u67E5\u8BE2\u6B21\u6570\uFF0C\u5F53QPS\u8FBE\u5230\u9650\u6D41\u9608\u503C\u65F6\uFF0C\u5C31\u4F1A\u89E6\u53D1\u9650\u6D41\u653F\u7B56\u3002<strong>QPS\u76F4\u63A5\u9488\u5BF9\u6D41\u91CF\u884C\u4E3A\u8FDB\u884C\u4FDD\u62A4</strong>\u3002</p><h3 id="qps\u6D41\u91CF\u63A7\u5236\u884C\u4E3A" tabindex="-1"><a class="header-anchor" href="#qps\u6D41\u91CF\u63A7\u5236\u884C\u4E3A" aria-hidden="true">#</a> QPS\u6D41\u91CF\u63A7\u5236\u884C\u4E3A</h3><p>\u2003\u2003\u6D41\u91CF\u63A7\u5236\u884C\u4E3A\u5373controlBehavior\u76844\u79CD\u884C\u4E3A\u3002</p><h4 id="\u76F4\u63A5\u62D2\u7EDD" tabindex="-1"><a class="header-anchor" href="#\u76F4\u63A5\u62D2\u7EDD" aria-hidden="true">#</a> \u76F4\u63A5\u62D2\u7EDD</h4><p>\u2003\u2003<strong>\u76F4\u63A5\u62D2\u7EDD</strong>\u662F\u9ED8\u8BA4\u7684\u6D41\u91CF\u63A7\u5236\u65B9\u5F0F\uFF0C\u4E5F\u5C31\u662F<strong>\u8BF7\u6C42\u6D41\u91CF\u8D85\u51FA\u9608\u503C\u65F6\uFF0C\u76F4\u63A5\u629B\u51FA\u4E00\u4E2AFlowException</strong>\u3002</p><h4 id="\u6162\u542F\u52A8-warm-up" tabindex="-1"><a class="header-anchor" href="#\u6162\u542F\u52A8-warm-up" aria-hidden="true">#</a> \u6162\u542F\u52A8\uFF08warm up\uFF09</h4><p>\u2003\u2003Warm Up\u662F\u4E00\u79CD\u51B7\u542F\u52A8\u65B9\u5F0F(\u9884\u70ED\u65B9\u5F0F)\u3002\u5F53\u6D41\u91CF\u7A81\u7136\u589E\u5927\uFF0C\u4E5F\u5C31\u610F\u5473\u7740\u7CFB\u7EDF\u4ECE\u7A7A\u95F2\u72B6\u6001\u7A81\u7136\u5207\u6362\u5230\u7E41\u5FD9\u72B6\u6001\uFF0C\u6709\u53EF\u80FD\u4F1A\u77AC\u95F4\u538B\u57AE\u7CFB\u7EDF\u3002<strong>\u5F53\u6211\u4EEC\u5E0C\u671B\u8BF7\u6C42\u5904\u7406\u7684\u6570\u91CF\u9010\u6B65\u9012\u589E\uFF0C\u5E76\u5728\u8FBE\u5230\u4E00\u4E2A\u9884\u671F\u65F6\u95F4\u4E4B\u540E\u8FBE\u5230\u5141\u8BB8\u5904\u7406\u8BF7\u6C42\u7684\u6700\u5927\u503C\uFF0C\u5C31\u53EF\u4EE5\u4F7F\u7528Warm up\u6A21\u5F0F</strong>\u3002</p><h4 id="\u5300\u901F\u6392\u961F" tabindex="-1"><a class="header-anchor" href="#\u5300\u901F\u6392\u961F" aria-hidden="true">#</a> \u5300\u901F\u6392\u961F</h4><p>\u2003\u2003<strong>\u5300\u901F\u6392\u961F\u65B9\u5F0F\u4F1A\u4E25\u683C\u63A7\u5236\u8BF7\u6C42\u901A\u8FC7\u7684\u65F6\u95F4\u95F4\u9694\uFF0C\u4E5F\u5C31\u662F\u8BA9\u8BF7\u6C42\u4EE5\u5747\u5300\u5730\u901F\u5EA6\u901A\u8FC7\uFF0C\u76F8\u5F53\u4E8E\u6F0F\u6876\u7B97\u6CD5\uFF0C\u53EF\u4EE5\u5904\u7406\u95F4\u9694\u6027\u7A81\u53D1\u8BF7\u6C42</strong>\u3002</p><h3 id="\u8C03\u7528\u5173\u7CFB\u8C03\u6D41\u7B56\u7565" tabindex="-1"><a class="header-anchor" href="#\u8C03\u7528\u5173\u7CFB\u8C03\u6D41\u7B56\u7565" aria-hidden="true">#</a> \u8C03\u7528\u5173\u7CFB\u8C03\u6D41\u7B56\u7565</h3><p>\u2003\u2003\u8C03\u7528\u5173\u7CFB\u5305\u62EC\u8C03\u7528\u65B9\u548C\u88AB\u8C03\u7528\u65B9\uFF0C\u4E00\u4E2A\u65B9\u6CD5\u6709\u53EF\u80FD\u4F1A\u8C03\u7528\u5176\u4ED6\u65B9\u6CD5\uFF0C\u5F62\u6210\u4E00\u4E2A\u8C03\u7528\u94FE\u3002\u8C03\u7528\u5173\u7CFB\u6D41\u91CF\u7B56\u7565\u5219\u662F\u6839\u636E\u8C03\u7528\u7EAC\u5EA6\u51FA\u53D1\u6D41\u63A7\u89C4\u5219\uFF0C\u5373\u4E0A\u8FF0\u7684strategy\u5C5E\u6027\u63A7\u5236\u7684\u4E09\u79CD\u7B56\u7565\uFF1A</p><ul><li>\u6839\u636E\u8C03\u7528\u65B9\u9650\u6D41(\u914D\u5408limitApp\u7684\u76F4\u63A5\u8C03\u7528)</li><li>\u6839\u636E\u8C03\u7528\u94FE\u8DEF\u5165\u53E3\u9650\u6D41</li><li>\u636E\u6709\u5173\u7CFB\u7684\u8D44\u6E90\u6D41\u91CF\u63A7\u5236(\u5173\u8054\u6D41\u91CF\u63A7\u5236)</li></ul><h4 id="\u8C03\u7528\u65B9\u9650\u6D41" tabindex="-1"><a class="header-anchor" href="#\u8C03\u7528\u65B9\u9650\u6D41" aria-hidden="true">#</a> \u8C03\u7528\u65B9\u9650\u6D41</h4><p>\u2003\u2003<strong>\u8C03\u7528\u65B9\u9650\u6D41\u5373\u6839\u636E\u8BF7\u6C42\u7684\u6765\u6E90\u8FDB\u884C\u6D41\u91CF\u63A7\u5236</strong>\uFF0C\u901A\u8FC7limitApp\u8BBE\u7F6E\u6765\u6E90\u4FE1\u606F\uFF0C\u5171\u6709\u4E09\u4E2A\u5C5E\u6027\uFF1A</p><ul><li>default\uFF1A\u4E0D\u533A\u5206\u8C03\u7528\u8005\uFF0C\u6240\u6709\u7684\u8BF7\u6C42\u90FD\u4F1A\u7EDF\u8BA1</li><li>{some_origin_name}\uFF1A\u7279\u5B9A\u7684\u8C03\u7528\u8005\uFF0C\u53EF\u4EE5\u662F\u591A\u4E2A\uFF0C\u53EA\u6709\u6765\u81EA\u8FD9\u4E9B\u6765\u6E90\u7684\u8BF7\u6C42\u624D\u4F1A\u9650\u6D41</li><li>other\uFF1A\u8868\u793A\u9488\u5BF9\u9664\u4E86{some_origin_name}\u4E4B\u5916\u7684\u8BF7\u6C42</li></ul><p>\u2003\u2003\u6CE8\u610F\uFF0C\u540C\u4E00\u4E2A\u8D44\u6E90\u53EF\u4EE5\u914D\u7F6E\u591A\u4E2A\u89C4\u5219\uFF0C\u5982\u679C\u591A\u4E2A\u89C4\u5219\u7684limitApp\u4E0D\u4E00\u81F4\uFF0C<strong>\u89C4\u5219\u751F\u6548\u7684\u987A\u5E8F\u4E3A\uFF1A{some_origin_name} --&gt; other --&gt; default</strong>\u3002</p><h4 id="\u6839\u636E\u8C03\u7528\u94FE\u8DEF\u7684\u5165\u53E3\u9650\u6D41" tabindex="-1"><a class="header-anchor" href="#\u6839\u636E\u8C03\u7528\u94FE\u8DEF\u7684\u5165\u53E3\u9650\u6D41" aria-hidden="true">#</a> \u6839\u636E\u8C03\u7528\u94FE\u8DEF\u7684\u5165\u53E3\u9650\u6D41</h4><p>\u2003\u2003\u4E00\u4E2A\u88AB\u9650\u6D41\u4FDD\u62A4\u7684\u65B9\u6CD5\uFF0C\u53EF\u80FD\u6765\u81EA\u4E8E\u4E0D\u540C\u7684\u8C03\u7528\u94FE\u8DEF\u3002\u6BD4\u5982\u4E00\u4E2A\u67E5\u770B\u5546\u54C1\u8BE6\u60C5\u7684\u63A5\u53E3\uFF0C\u53EF\u80FD\u6765\u81EA\u4E8E\u8D2D\u7269\u8F66\u8C03\u7528\uFF0C\u4E5F\u53EF\u80FD\u6765\u81EA\u4E8E\u4FC3\u9500\u7CFB\u7EDF\u8C03\u7528\u3002\u5982\u679C\u4EC5\u9488\u5BF9\u7279\u5B9A\u7684\u8C03\u7528\u94FE\u8DEF\u9650\u6D41\uFF0C\u90A3\u4E48\u5C31\u53EF\u4EE5\u4F7F\u7528\u8C03\u7528\u94FE\u8DEF\u7684\u5165\u53E3\u9650\u6D41\uFF0C<strong>\u4E00\u5B9A\u7A0B\u5EA6\u4E0A\u7C7B\u4F3C\u4E8E\u8C03\u7528\u65B9\u9650\u6D41</strong>\u3002</p><h4 id="\u5173\u8054\u6D41\u91CF\u63A7\u5236" tabindex="-1"><a class="header-anchor" href="#\u5173\u8054\u6D41\u91CF\u63A7\u5236" aria-hidden="true">#</a> \u5173\u8054\u6D41\u91CF\u63A7\u5236</h4><p>\u2003\u2003\u5F53\u4E24\u4E2A\u8D44\u6E90\u4E4B\u95F4\u5B58\u5728\u4F9D\u8D56\u5173\u7CFB\u6216\u8005\u8D44\u6E90\u7ADE\u4E89\u65F6\uFF0C\u6211\u4EEC\u5C31\u8BF4\u4E24\u4E2A\u8D44\u6E90\u5B58\u5728\u5173\u8054\u3002\u5B58\u5728\u5173\u8054\u7684\u8D44\u6E90\u5728\u6267\u884C\u7684\u65F6\u5019\u53EF\u80FD\u4F1A\u56E0\u4E3A\u67D0\u4E00\u4E2A\u8D44\u6E90\u6267\u884C\u64CD\u4F5C\u8FC7\u4E8E\u9891\u7E41\u5BFC\u81F4\u53E6\u4E00\u4E2A\u8D44\u6E90\u6267\u884C\u6548\u7387\u53D8\u6162\uFF0C\u6240\u4EE5\u5173\u8054\u6D41\u91CF\u63A7\u5236\u5C31\u662F\u9650\u5236\u5176\u4E2D\u4E00\u4E2A\u8D44\u6E90\u7684\u6267\u884C\u6D41\u91CF\u3002</p><h4 id="\u94FE\u8DEF\u9650\u6D41\u5931\u6548\u95EE\u9898" tabindex="-1"><a class="header-anchor" href="#\u94FE\u8DEF\u9650\u6D41\u5931\u6548\u95EE\u9898" aria-hidden="true">#</a> \u94FE\u8DEF\u9650\u6D41\u5931\u6548\u95EE\u9898</h4><p>\u2003\u2003sentinel1.7\u4EE5\u540E\uFF0C\u9700\u8981\u5F15\u5165\u4F9D\u8D56\uFF1A</p><div class="language-xml ext-xml line-numbers-mode"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>com.alibaba.csp<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>sentinel\u2010web\u2010servlet<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>\u2003\u2003\u6DFB\u52A0\u914D\u7F6E\u7C7B\uFF0C\u914D\u7F6ECommonFilter\u8FC7\u6EE4\u5668\uFF0C\u6307\u5B9AWEB_CONTEXT_UNIFY=false\uFF0C\u7981\u6B62\u6536\u655BURL\u7684\u5165\u53E3context\uFF1A</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token annotation punctuation">@Configuration</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">SentinelConfig</span> <span class="token punctuation">{</span>

    <span class="token annotation punctuation">@Bean</span>
    <span class="token keyword">public</span> <span class="token class-name">FilterRegistrationBean</span> <span class="token function">filterRegistrationBean</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">FilterRegistrationBean</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Filter</span><span class="token punctuation">&gt;</span></span> bean <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">FilterRegistrationBean</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        bean<span class="token punctuation">.</span><span class="token function">setFilter</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">CommonFilter</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        bean<span class="token punctuation">.</span><span class="token function">addUrlPatterns</span><span class="token punctuation">(</span><span class="token string">&quot;/*&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// \u5165\u53E3\u8D44\u6E90\u5173\u95ED\u805A\u5408\uFF0C\u89E3\u51B3\u94FE\u8DEF\u4E0D\u751F\u6548</span>
        bean<span class="token punctuation">.</span><span class="token function">addInitParameter</span><span class="token punctuation">(</span><span class="token class-name">CommonFilter</span><span class="token punctuation">.</span>WEB_CONTEXT_UNIFY<span class="token punctuation">,</span><span class="token string">&quot;false&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        bean<span class="token punctuation">.</span><span class="token function">setName</span><span class="token punctuation">(</span><span class="token string">&quot;sentinelFilter&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        bean<span class="token punctuation">.</span><span class="token function">setOrder</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// \u81EA\u5B9A\u4E49BlockExceptionHandler</span>
        <span class="token class-name">WebCallbackManager</span><span class="token punctuation">.</span><span class="token function">setUrlBlockHandler</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">CustomsUrlBlockHandler</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// \u914D\u7F6E\u81EA\u5B9A\u4E49\u7684UrlCleaner</span>
        <span class="token class-name">WebCallbackManager</span><span class="token punctuation">.</span><span class="token function">setUrlCleaner</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">CustomerUrlCleaner</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> bean<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div></div><p>\u2003\u2003\u53E6\u5916\u9700\u8981\u6CE8\u610F\u7684\u662F\uFF0C\u5BF9\u4E8E\u88AB\u4FDD\u62A4\u7684\u8D44\u6E90\uFF0C\u4E3A\u4E86\u4F7F\u6355\u6349\u5230\u7684\u5F02\u5E38\u80FD\u591F\u6B63\u5E38\u629B\u51FA\uFF0C\u8FD8\u5E94\u8BE5\u914D\u7F6E\u5F02\u5E38\u5904\u7406\u5668\uFF0C\u5373\u4E0A\u9762\u4EE3\u7801\u6CE8\u91CA\u4F4D\u7F6E\uFF0C\u5904\u7406\u5668\u7684\u5177\u4F53\u4EE3\u7801\u5982\u4E0B\uFF1A</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token annotation punctuation">@Service</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">CustomsUrlBlockHandler</span> <span class="token keyword">implements</span> <span class="token class-name">UrlBlockHandler</span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">blocked</span><span class="token punctuation">(</span><span class="token class-name">HttpServletRequest</span> httpServletRequest<span class="token punctuation">,</span> <span class="token class-name">HttpServletResponse</span> httpServletResponse<span class="token punctuation">,</span> <span class="token class-name">BlockException</span> e<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">IOException</span> <span class="token punctuation">{</span>
        log<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token string">&quot;\u9650\u6D41\u89C4\u5219\uFF1A{}&quot;</span><span class="token punctuation">,</span>e<span class="token punctuation">.</span><span class="token function">getRule</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">BaseResponse</span> result <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>e <span class="token keyword">instanceof</span> <span class="token class-name">FlowException</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            result <span class="token operator">=</span> <span class="token class-name">BaseResponse</span><span class="token punctuation">.</span><span class="token function">failed</span><span class="token punctuation">(</span>FLOW_RESTRICTION<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>e <span class="token keyword">instanceof</span> <span class="token class-name">DegradeException</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            result <span class="token operator">=</span> <span class="token class-name">BaseResponse</span><span class="token punctuation">.</span><span class="token function">failed</span><span class="token punctuation">(</span>RELEGATION<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>e <span class="token keyword">instanceof</span> <span class="token class-name">ParamFlowException</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            result <span class="token operator">=</span> <span class="token class-name">BaseResponse</span><span class="token punctuation">.</span><span class="token function">failed</span><span class="token punctuation">(</span>HOTSPOT_RESTRICTION<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>e <span class="token keyword">instanceof</span> <span class="token class-name">SystemBlockException</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            result <span class="token operator">=</span> <span class="token class-name">BaseResponse</span><span class="token punctuation">.</span><span class="token function">failed</span><span class="token punctuation">(</span>SYSTEM_BLOCKED<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>e <span class="token keyword">instanceof</span> <span class="token class-name">AuthorityException</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            result <span class="token operator">=</span> <span class="token class-name">BaseResponse</span><span class="token punctuation">.</span><span class="token function">failed</span><span class="token punctuation">(</span>FLOW_UNAUTHORIZED<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        response<span class="token punctuation">.</span><span class="token function">setStatus</span><span class="token punctuation">(</span><span class="token number">200</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        request<span class="token punctuation">.</span><span class="token function">setCharacterEncoding</span><span class="token punctuation">(</span><span class="token string">&quot;utf-8&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        response<span class="token punctuation">.</span><span class="token function">setContentType</span><span class="token punctuation">(</span><span class="token class-name">MediaType</span><span class="token punctuation">.</span>APPLICATION_JSON_VALUE<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">new</span> <span class="token class-name">ObjectMapper</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">writeValue</span><span class="token punctuation">(</span>response<span class="token punctuation">.</span><span class="token function">getWriter</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>result<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br></div></div><p>\u2003\u2003\u5BF9\u4E8E\u88AB\u4FDD\u62A4\u7684\u8D44\u6E90\uFF0C\u5E94\u8BE5\u4F7F\u7528\u6CE8\u89E3@SentinelResource\u914D\u7F6E\u5BF9\u5E94\u7684fallbackHandler\u3002</p><h2 id="sentinel\u7194\u65AD\u89C4\u5219" tabindex="-1"><a class="header-anchor" href="#sentinel\u7194\u65AD\u89C4\u5219" aria-hidden="true">#</a> Sentinel\u7194\u65AD\u89C4\u5219</h2><p>\u2003\u2003Sentinel\u670D\u52A1\u7194\u65AD\u89C4\u5219\u4E0E\u9650\u6D41\u89C4\u5219\u7C7B\u4F3C\uFF0C\u901A\u8FC7DegradeRule\u5B9A\u4E49\uFF0C\u5B83\u67094\u4E2A\u6838\u5FC3\u5C5E\u6027\uFF1A -** grade\uFF1A\u7194\u65AD\u7B56\u7565**\uFF0C\u652F\u6301\u79D2\u7EA7RT\u3001\u79D2\u7EA7\u5F02\u5E38\u6BD4\u4F8B\u3001\u5206\u949F\u7EA7\u5F02\u5E38\u6570\u91CF\u3002\u9ED8\u8BA4\u72B6\u6001\u662F\u79D2\u7EA7RT\u3002</p><ul><li><strong>timeWindow\uFF1A\u7194\u65AD\u964D\u7EA7\u7684\u65F6\u95F4\u7A97\u53E3</strong>\uFF0C\u5355\u4F4Ds\u3002\u4E5F\u5C31\u662F\u89E6\u53D1\u7194\u65AD\u964D\u7EA7\u540E\u591A\u957F\u65F6\u95F4\u5185\u4FDD\u6301\u7194\u65AD\u72B6\u6001\u3002</li><li><strong>rtSlowRequestAmount\uFF1ART\u6A21\u5F0F\u4E0B</strong>\uFF0C1s\u5185\u6301\u7EED\u591A\u5C11\u4E2A\u8BF7\u6C42\u7684\u5E73\u5747RT\u8D85\u51FA\u9608\u503C\u540E\u4F1A\u51FA\u53D1\u7194\u65AD\uFF0C\u9ED8\u8BA45\u3002</li><li><strong>minRequestAmount\uFF1A\u89E6\u53D1\u7684\u5F02\u5E38\u7194\u65AD\u6700\u5C0F\u8BF7\u6C42\u6570</strong>\uFF0C\u8BF7\u6C42\u6570\u91CF\u5C0F\u4E8E\u8FD9\u4E2A\u503C\u5373\u4F7F\u5F02\u5E38\u6BD4\u4F8B\u8D85\u51FA\u9608\u503C\u4E5F\u4E0D\u4F1A\u7194\u65AD\uFF0C\u9ED8\u8BA45\u3002</li></ul><h3 id="\u7194\u65AD\u7B56\u7565" tabindex="-1"><a class="header-anchor" href="#\u7194\u65AD\u7B56\u7565" aria-hidden="true">#</a> \u7194\u65AD\u7B56\u7565</h3><p>\u2003\u2003\u7194\u65AD\u7B56\u7565\u901A\u8FC7grade\u8BBE\u5B9A\uFF0CSentinel\u63D0\u4F9B\u4E863\u79CD\u7194\u65AD\u7B56\u7565\uFF1A</p><ul><li><strong>\u5E73\u5747\u54CD\u5E94\u65F6\u95F4</strong>\uFF1A\u5982\u679C1s\u5185\u6301\u7EED\u8FDB\u51655\u4E2A\u8BF7\u6C42\uFF0C\u5BF9\u5E94\u7684\u5E73\u5747\u54CD\u5E94\u65F6\u95F4\u90FD\u8D85\u8FC7\u4E86\u9608\u503C\uFF0C\u63A5\u4E0B\u6765\u7684\u65F6\u95F4\u7A97\u53E3\u5185(timeWindow)\uFF0C\u8FD9\u4E2A\u65B9\u6CD5\u7684\u8C03\u7528\u90FD\u4F1A\u81EA\u52A8\u7194\u65AD\uFF0C\u629B\u51FADegradeException\u3002\uFF08Sentinel\u9ED8\u8BA4\u7EDF\u8BA1\u7684RT\u4E0A\u7EBF\u662F4900ms\uFF09</li><li><strong>\u5F02\u5E38\u6BD4\u4F8B</strong>\uFF1A\u5982\u679C\u6BCF\u79D2\u8D44\u6E90\u6570\u5927\u4E8E\u7B49\u4E8E\u89E6\u53D1\u7194\u65AD\u7684\u6700\u5C0F\u8BF7\u6C42\u6570(minRequestAmout)\u7684\u60C5\u51B5\u4E0B\uFF0C\u79D8\u5BC6\u5965\u5FB7\u5F02\u5E38\u603B\u6570\u5360\u901A\u8FC7\u603B\u91CF\u7684\u6BD4\u4F8B\u8D85\u8FC7\u9608\u503C\uFF0C\u8D44\u6E90\u5C31\u4F1A\u8BA1\u5165\u964D\u7EA7\u72B6\u6001\u3002</li><li><strong>\u5F02\u5E38\u6570</strong>\uFF1A\u5F53\u8D44\u6E90\u6700\u8FD1\u4E00\u5206\u949F\u7684\u5F02\u5E38\u6570\u8D85\u8FC7\u9608\u503C\u540E\uFF0C\u89E6\u53D1\u7194\u65AD\u3002</li></ul><h2 id="\u70ED\u70B9\u89C4\u5219" tabindex="-1"><a class="header-anchor" href="#\u70ED\u70B9\u89C4\u5219" aria-hidden="true">#</a> \u70ED\u70B9\u89C4\u5219</h2><p>\u2003\u2003\u70ED\u70B9\u6307\u7684\u662F\u6211\u4EEC\u7ECF\u5E38\u8BBF\u95EE\u7684\u6570\u636E\uFF0C\u6709\u65F6\u5019\u6211\u4EEC\u9700\u8981\u7EDF\u8BA1\u8BBF\u95EE\u91CF\u4E2D\u7684Top k\u7684\u6570\u636E\uFF0C\u6BD4\u5982\u4EE5\u5546\u54C1ID\u4F4D\u53C2\u6570\uFF0C\u7EDF\u8BA1\u4E00\u6BB5\u65F6\u95F4\u5185\u6700\u5E38\u8D2D\u4E70\u7684\u5546\u54C1ID\u5E76\u8FDB\u884C\u9650\u5236\uFF1B\u4EE5\u7528\u6237ID\u4E3A\u53C2\u6570\uFF0C\u9488\u5BF9\u4E00\u6BB5\u65F6\u95F4\u6BB5\u5185\u7684\u9891\u7E41\u8BBF\u95EE\u7684\u7528\u6237\u8FDB\u884C\u9650\u5236\u3002</p><p>\u2003\u2003\u70ED\u70B9\u53C2\u6570\u9650\u6D41\u4F1A\u7EDF\u8BA1\u4F20\u5165\u63A5\u53E3\u7684\u53C2\u6570\u4E2D\u7684\u70ED\u70B9\u53C2\u6570\uFF0C\u5E76\u4E14\u6839\u636E\u9608\u503C\u8DDF\u6A21\u5F0F\uFF0C\u5BF9\u70ED\u70B9\u8D44\u6E90\u7684\u8C03\u7528\u8FDB\u884C\u9650\u6D41\u3002\u5982\u5BF9id\u53C2\u6570QPS\u8D85\u8FC750\u7684\u8FDB\u884C\u9650\u6D41\u3002</p><p>\u2003\u2003\u70ED\u70B9\u89C4\u5219\u9700\u8981\u4F7F\u7528@SentinelResource\u6CE8\u89E3\uFF0C\u5426\u5219\u4E0D\u751F\u6548\u3002</p><h2 id="\u7CFB\u7EDF\u89C4\u5219" tabindex="-1"><a class="header-anchor" href="#\u7CFB\u7EDF\u89C4\u5219" aria-hidden="true">#</a> \u7CFB\u7EDF\u89C4\u5219</h2><p>\u2003\u2003\u7CFB\u7EDF\u89C4\u5219\u662F\u4ECE\u6574\u4E2A\u7CFB\u7EDF\u7684\u7EF4\u5EA6\uFF0C\u5BF9\u7CFB\u7EDF\u7684\u6240\u6709\u7684\u8D44\u6E90\u7EDF\u4E00\u8FDB\u884C\u7684\u914D\u7F6E\uFF0C\u4E3B\u8981\u7EF4\u5EA6\u5982\u4E0B\uFF1A</p><ul><li><strong>Load\u81EA\u9002\u5E94</strong>(\u4EC5\u4EC5\u5BF9Linux/Unix-like\u673A\u5668\u9002\u7528)\uFF1A\u7CFB\u7EDF\u7684load1\u4F5C\u4E3A\u542F\u53D1\u6307\u6807\uFF0C\u8FDB\u884C\u81EA\u9002\u5E94\u7CFB\u7EDF\u4FDD\u62A4\u3002\u5F53\u7CFB\u7EDF\u7684load1\u8D85\u8FC7\u8BBE\u5B9A\u7684\u542F\u53D1\u503C\uFF0C\u4E14\u5F53\u7CFB\u7EDF\u7684\u5E76\u53D1\u7EBF\u7A0B\u6570\u8D85\u8FC7\u4F30\u7B97\u7684\u7CFB\u7EDF\u5BB9\u91CF\u65F6\u624D\u4F1A\u89E6\u53D1\u4FDD\u62A4\u3002\u7CFB\u7EDF\u5BB9\u91CF\u662F\u7531\u7CFB\u7EDF\u7684maxQps * minRt\u8BA1\u7B97\uFF0C\u8BBE\u5B9A\u53C2\u8003\u503C\u4E00\u822C\u662F CPU cores * 2.5\u3002</li><li><strong>CPU usage</strong>\uFF1A\u5F53\u524DCPU\u4F7F\u7528\u7387\u8D85\u8FC7\u9608\u503C\u5219\u542F\u52A8\u4FDD\u62A4\u3002</li><li><strong>\u5E73\u5747RT</strong>\uFF1A\u5355\u53F0\u673A\u5668\u6240\u6709\u7684\u5165\u53E3\u6D41\u91CF\u7684\u5E73\u5747RT\u8FBE\u5230\u9608\u503C\u542F\u52A8\u4FDD\u62A4\u3002</li><li><strong>\u5E76\u53D1\u7EBF\u7A0B\u6570</strong>\uFF1A\u5355\u53F0\u673A\u5668\u7684\u6240\u6709\u6D41\u91CF\u5165\u53E3\u7684\u5E76\u53D1\u7EBF\u7A0B\u6570\u8FBE\u5230\u9608\u503C\u542F\u52A8\u4FDD\u62A4\u3002</li><li><strong>\u5165\u53E3QPS</strong>\uFF1A\u5355\u53F0\u673A\u5668\u7684\u6240\u6709\u6D41\u91CF\u5165\u53E3\u7684QPS\u8FBE\u5230\u9608\u503C\u542F\u52A8\u4FDD\u62A4\u3002</li></ul><h2 id="\u6388\u6743\u89C4\u5219" tabindex="-1"><a class="header-anchor" href="#\u6388\u6743\u89C4\u5219" aria-hidden="true">#</a> \u6388\u6743\u89C4\u5219</h2><p>\u2003\u2003\u6B64\u89C4\u5219\u5373\u9ED1\u767D\u540D\u5355\u89C4\u5219\uFF0C\u53EF\u4EE5\u914D\u7F6E\u9ED1\u767D\u540D\u5355\uFF0C\u4E3B\u8981\u6709\u4EE5\u4E0B\u51E0\u4E2A\u53C2\u6570\uFF1A</p><ul><li>resource\uFF1A\u8D44\u6E90\u540D\u79F0</li><li>limitApp\uFF1A\u5BF9\u5E94\u540D\u5355\u7684\u5185\u5BB9\uFF0C\u53EF\u4EE5\u662F\u591A\u4E2A\uFF0C\u7528\u201C\uFF0C\u201D\u9694\u5F00</li><li>strategy\uFF1A\u9ED1\u540D\u5355/\u767D\u540D\u5355\uFF0C\u9ED8\u8BA4\u767D\u540D\u5355\u6A21\u5F0F</li></ul><p>\u2003\u2003\u5982\u679C\u5F15\u5165\u4E86CommonFilter\uFF0C\u90A3\u4E48\u9700\u8981\u989D\u5916\u914D\u7F6E\u4E00\u4E2AFilter\u83B7\u53D6limitApp\uFF1A</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token annotation punctuation">@Service</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">CustomsRequestOriginParser</span> <span class="token keyword">implements</span> <span class="token class-name">RequestOriginParser</span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">parseOrigin</span><span class="token punctuation">(</span><span class="token class-name">HttpServletRequest</span> request<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> request<span class="token punctuation">.</span><span class="token function">getParameter</span><span class="token punctuation">(</span><span class="token string">&quot;serviceName&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h2 id="\u96C6\u7FA4\u89C4\u5219" tabindex="-1"><a class="header-anchor" href="#\u96C6\u7FA4\u89C4\u5219" aria-hidden="true">#</a> \u96C6\u7FA4\u89C4\u5219</h2><p>\u2003\u2003\u96C6\u7FA4\u89C4\u5219\u7684\u573A\u666F\u4E3B\u8981\u6709\u4E24\u79CD\uFF0C\u4E00\u79CD\u662F\u901A\u8FC7\u4E00\u53F0\u670D\u52A1\u5668\u8FDB\u884C\u6D41\u91CF\u7684\u6574\u4F53\u7EDF\u8BA1\u518D\u5224\u65AD\u96C6\u7FA4\u662F\u5426\u9650\u6D41\uFF1B\u53E6\u4E00\u79CD\u662F\u89E3\u51B3\u6D41\u91CF\u4E0D\u5747\u5300\u7684\u60C5\u51B5\u3002\u56E0\u6B64\u884D\u751F\u51FA\u4E86\u4E24\u79CD\u5F62\u5F0F\uFF1A\u96C6\u7FA4\u603B\u4F53\u6A21\u5F0F\u548C\u5355\u673A\u5206\u644A\u6A21\u5F0F\u3002</p><h3 id="\u89C4\u5219\u539F\u7406" tabindex="-1"><a class="header-anchor" href="#\u89C4\u5219\u539F\u7406" aria-hidden="true">#</a> \u89C4\u5219\u539F\u7406</h3><p>\u2003\u2003\u96C6\u7FA4\u6D41\u63A7\u89C4\u5219\u5C06\u670D\u52A1\u5668\u5206\u4E3A\u4E24\u79CD\u8EAB\u4EFD\uFF1A</p><ul><li><strong>Token Client</strong>\uFF1A\u96C6\u7FA4\u6D41\u63A7\u7684\u5BA2\u6237\u7AEF\uFF0C\u5411Token Server\u8BF7\u6C42Token\uFF0CToken Server\u4F1A\u8FD4\u56DE\u7ED9Client\u7ED3\u679C\uFF0C\u51B3\u5B9A\u662F\u5426\u9650\u6D41\u3002</li><li><strong>Token Server</strong>\uFF1A\u96C6\u7FA4\u6D41\u63A7\u670D\u52A1\u7AEF\uFF0C\u5904\u7406Token Client\u7684\u8BF7\u6C42\uFF0C\u6839\u636E\u96C6\u7FA4\u9650\u6D41\u89C4\u5219\u5224\u65AD\u662F\u5426\u8BE5\u8BF7\u6C42\u8981\u9650\u6D41\uFF0C\u5E76\u628A\u7ED3\u679C\u8FD4\u56DE\u7ED9Client\u3002</li></ul><p>\u2003\u2003\u6839\u636E\u4EE5\u4E0A\u4E24\u4E2A\u89D2\u8272\u548C\u4E0A\u8FF0\u7684\u4E24\u79CD\u573A\u666F\uFF0C\u6211\u4EEC\u53EF\u4EE5\u7B80\u5355\u7684\u7406\u89E3\u4E00\u4E0B\u4E24\u79CD\u96C6\u7FA4\u9650\u6D41\u6A21\u5F0F\uFF1A</p><ul><li><strong>\u96C6\u7FA4\u603B\u4F53\u6A21\u5F0F</strong>\uFF1A\u8FD9\u4E2A\u6A21\u5F0F\u4E0B\u7684\u9608\u503C\u662F\u9650\u5236\u96C6\u7FA4\u7684\u603BQPS\u4E0D\u8D85\u8FC7\u7684\u9608\u503C\uFF0C\u8D85\u8FC7\u9608\u503C\u540E\u6240\u6709\u7684Client\u90FD\u4F1A\u88AB\u9650\u6D41\u3002</li><li><strong>\u5355\u673A\u5747\u644A\u6A21\u5F0F</strong>\uFF1A\u8FD9\u4E2A\u6A21\u5F0F\u4E0B\u7684\u9608\u503C\u662F\u96C6\u7FA4\u4E2D\u6BCF\u4E2A\u5355\u673A\u5B9E\u4F8B\u80FD\u591F\u627F\u53D7\u7684\u9608\u503C\uFF0Ctoken server\u6839\u636E\u96C6\u7FA4\u7684\u8FDE\u63A5\u6570\u8BA1\u7B97\u603B\u7684\u9608\u503C\uFF0C\u7136\u540E\u6309\u7167\u603B\u7684\u9608\u503C\u8FDB\u884C\u9650\u5236(\u598210\u53F0\u5355\u673A\uFF0C\u8BBE\u7F6E\u9608\u503C\u4E3A300\uFF0C\u90A3\u4E48\u96C6\u7FA4\u7684\u603B\u9608\u503C\u5C31\u662F3000)\u3002</li></ul><p>\u2003\u2003Token Server\u7684\u542F\u52A8\u65B9\u5F0F\u6709\u4E24\u79CD\uFF1A</p><ul><li><strong>\u72EC\u7ACB\u6A21\u5F0F</strong>\uFF1Atoken server\u4F5C\u4E3A\u72EC\u7ACB\u7684\u8FDB\u7A0B\u542F\u52A8\uFF0C\u72EC\u7ACB\u90E8\u7F72\uFF0C\u9694\u79BB\u6027\u80FD\u597D\uFF0C\u4F46\u662F\u9700\u8981\u989D\u5916\u7684\u90E8\u7F72\u64CD\u4F5C\u3002\u8FD9\u79CD\u6A21\u5F0F\u9002\u5408\u4F5C\u4E3A\u5168\u5C40\u9650\u6D41\u5668\u7ED9\u96C6\u7FA4\u4F7F\u7528\uFF08\u5176\u5B9E\u7F51\u5173\u9650\u6D41\u5F88\u5927\u7A0B\u5EA6\u4E0A\u5C31\u662F\u8FD9\u4E2A\u4F5C\u7528\uFF09\u3002</li><li><strong>\u5D4C\u5165\u6A21\u5F0F</strong>\uFF1Atoken server\u4F5C\u4E3A\u5185\u7F6E\u7684\u7EBF\u7A0B\u4E0E\u670D\u52A1\u4E00\u5757\u513F\u542F\u52A8\uFF0C\u8FD9\u79CD\u6A21\u5F0F\u4E0B\u96C6\u7FA4\u4E2D\u7684\u6BCF\u4E2A\u5B9E\u4F8B\u90FD\u662F\u5BF9\u7B49\u7684\uFF0Cserver\u548Cclient\u7684\u89D2\u8272\u968F\u65F6\u8FDB\u884C\u8F6C\u53D8\uFF0C\u65E0\u9700\u5355\u72EC\u90E8\u7F72\u3002\u4F46\u662F\u9694\u79BB\u6027\u4E0D\u597D\uFF0C\u9700\u8981\u9650\u5236token server\u7684\u603Bqps\u9632\u6B62\u5F71\u54CD\u5E94\u7528\u672C\u8EAB\u7684\u8FD0\u884C\uFF0C\u6BD4\u8F83\u9002\u5408\u5185\u90E8\u6216\u8005\u5C40\u90E8\u6D41\u63A7\u3002</li></ul>`,61);function q(F,P){const a=o("RouterLink");return l(),c(i,null,[n("div",k,[d,n("p",null,[m,t(a,{to:"/microservice/sentinel/%E5%9F%BA%E4%BA%8ESentinel%E5%AE%9E%E7%8E%B0%E6%9C%8D%E5%8A%A1%E9%99%90%E6%B5%81.html"},{default:e(()=>[b]),_:1}),g])]),n("nav",h,[n("ul",null,[n("li",null,[t(a,{to:"#sentinel\u6D41\u63A7\u89C4\u5219"},{default:e(()=>[f]),_:1}),n("ul",null,[n("li",null,[t(a,{to:"#\u57FA\u4E8E\u5E76\u53D1\u6570\u548Cqps\u7684\u6D41\u91CF\u63A7\u5236"},{default:e(()=>[_]),_:1})]),n("li",null,[t(a,{to:"#qps\u6D41\u91CF\u63A7\u5236\u884C\u4E3A"},{default:e(()=>[w]),_:1})]),n("li",null,[t(a,{to:"#\u8C03\u7528\u5173\u7CFB\u8C03\u6D41\u7B56\u7565"},{default:e(()=>[v]),_:1})])])]),n("li",null,[t(a,{to:"#sentinel\u7194\u65AD\u89C4\u5219"},{default:e(()=>[S]),_:1}),n("ul",null,[n("li",null,[t(a,{to:"#\u7194\u65AD\u7B56\u7565"},{default:e(()=>[R]),_:1})])])]),n("li",null,[t(a,{to:"#\u70ED\u70B9\u89C4\u5219"},{default:e(()=>[x]),_:1})]),n("li",null,[t(a,{to:"#\u7CFB\u7EDF\u89C4\u5219"},{default:e(()=>[y]),_:1})]),n("li",null,[t(a,{to:"#\u6388\u6743\u89C4\u5219"},{default:e(()=>[E]),_:1})]),n("li",null,[t(a,{to:"#\u96C6\u7FA4\u89C4\u5219"},{default:e(()=>[C]),_:1}),n("ul",null,[n("li",null,[t(a,{to:"#\u89C4\u5219\u539F\u7406"},{default:e(()=>[B]),_:1})])])])])]),T],64)}var O=p(r,[["render",q]]);export{O as default};
