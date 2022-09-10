import{_ as n,e as s}from"./app.7eb989d9.js";const a={},p=s(`<div class="custom-container info"><p class="custom-container-title">\u76F8\u5173\u4FE1\u606F</p><p>\u6587\u7AE0\u4ECB\u7ECD</p></div><nav class="table-of-contents"><ul></ul></nav><hr><h1 id="bucket\u548Cmetric\u6982\u5FF5" tabindex="-1"><a class="header-anchor" href="#bucket\u548Cmetric\u6982\u5FF5" aria-hidden="true">#</a> bucket\u548Cmetric\u6982\u5FF5</h1><ul><li><strong>bucket</strong>\uFF1A\u8868\u793A\u4E00\u4E2A\u805A\u5408\u6570\u636E\u8D70\u7D22\u65F6\u7684\u6570\u636E\u5206\u7EC4\u3002\u6BD4\u5982\u9500\u552E\u90E8\u6709a\u548Cb\uFF0C\u5F00\u53D1\u90E8\u6709c\u548Cd\uFF0C\u6309\u7167\u90E8\u95E8\u5206\u7EC4\u5F97\u5230\u7684\u7ED3\u679C\u5C31\u662F2\u4E2Abucket\u3002</li><li><strong>metric</strong>\uFF1A\u8868\u793A\u5BF9\u4E00\u4E2Abucket\u7684\u6570\u636E\u7EDF\u8BA1\u3002\u6BD4\u5982\u9500\u552E\u90E82\u4E2A\u5458\u5DE5\uFF0C\u6216\u8005\u5F00\u53D1\u90E82\u4E2A\u5458\u5DE5\uFF0C\u8FD9\u5C31\u662Fmetric\u3002metric\u7684\u7EDF\u8BA1\u6709\u591A\u79CD\uFF1A\u6C42\u548C\u3001\u6700\u5927\u503C\u3001\u6700\u5C0F\u503C\u3001\u5E73\u5747\u503C\u7B49\u3002</li></ul><h1 id="\u6570\u636E\u51C6\u5907" tabindex="-1"><a class="header-anchor" href="#\u6570\u636E\u51C6\u5907" aria-hidden="true">#</a> \u6570\u636E\u51C6\u5907</h1><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code>DELETE /cars
PUT /cars
<span class="token punctuation">{</span>
  <span class="token property">&quot;mappings&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
    <span class="token property">&quot;properties&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
      <span class="token property">&quot;price&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span><span class="token property">&quot;type&quot;</span><span class="token operator">:</span><span class="token string">&quot;long&quot;</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token property">&quot;color&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span><span class="token property">&quot;type&quot;</span><span class="token operator">:</span><span class="token string">&quot;keyword&quot;</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token property">&quot;brand&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span><span class="token property">&quot;type&quot;</span><span class="token operator">:</span><span class="token string">&quot;keyword&quot;</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token property">&quot;model&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span><span class="token property">&quot;type&quot;</span><span class="token operator">:</span><span class="token string">&quot;keyword&quot;</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token property">&quot;sold_date&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span><span class="token property">&quot;type&quot;</span><span class="token operator">:</span><span class="token string">&quot;date&quot;</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token property">&quot;remark&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span><span class="token property">&quot;type&quot;</span><span class="token operator">:</span><span class="token string">&quot;text&quot;</span><span class="token punctuation">,</span><span class="token property">&quot;analyzer&quot;</span><span class="token operator">:</span><span class="token string">&quot;ik_max_word&quot;</span><span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

POST /cars/_bulk
<span class="token punctuation">{</span><span class="token property">&quot;index&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">}</span>
<span class="token punctuation">{</span><span class="token property">&quot;price&quot;</span><span class="token operator">:</span><span class="token number">258000</span><span class="token punctuation">,</span><span class="token property">&quot;color&quot;</span><span class="token operator">:</span><span class="token string">&quot;\u91D1\u8272&quot;</span><span class="token punctuation">,</span><span class="token property">&quot;brand&quot;</span><span class="token operator">:</span><span class="token string">&quot;\u5927\u4F17&quot;</span><span class="token punctuation">,</span><span class="token property">&quot;model&quot;</span><span class="token operator">:</span><span class="token string">&quot;\u5927\u4F17\u8FC8\u817E&quot;</span><span class="token punctuation">,</span><span class="token property">&quot;sold_date&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;20211028&quot;</span><span class="token punctuation">,</span><span class="token property">&quot;remark&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;\u5927\u4F17\u4E2D\u6863\u8F66&quot;</span> <span class="token punctuation">}</span>
<span class="token punctuation">{</span><span class="token property">&quot;index&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">}</span>
<span class="token punctuation">{</span><span class="token property">&quot;price&quot;</span><span class="token operator">:</span><span class="token number">123000</span><span class="token punctuation">,</span><span class="token property">&quot;color&quot;</span><span class="token operator">:</span><span class="token string">&quot;\u91D1\u8272&quot;</span><span class="token punctuation">,</span><span class="token property">&quot;brand&quot;</span><span class="token operator">:</span><span class="token string">&quot;\u5927\u4F17&quot;</span><span class="token punctuation">,</span><span class="token property">&quot;model&quot;</span><span class="token operator">:</span><span class="token string">&quot;\u5927\u4F17\u901F\u817E&quot;</span><span class="token punctuation">,</span><span class="token property">&quot;sold_date&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;20211105&quot;</span><span class="token punctuation">,</span><span class="token property">&quot;remark&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;\u5927\u4F17\u795E\u8F66&quot;</span> <span class="token punctuation">}</span>
<span class="token punctuation">{</span><span class="token property">&quot;index&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">}</span>
<span class="token punctuation">{</span><span class="token property">&quot;price&quot;</span><span class="token operator">:</span><span class="token number">239800</span><span class="token punctuation">,</span><span class="token property">&quot;color&quot;</span><span class="token operator">:</span><span class="token string">&quot;\u767D\u8272&quot;</span><span class="token punctuation">,</span><span class="token property">&quot;brand&quot;</span><span class="token operator">:</span><span class="token string">&quot;\u6807\u5FD7&quot;</span><span class="token punctuation">,</span><span class="token property">&quot;model&quot;</span><span class="token operator">:</span><span class="token string">&quot;\u6807\u5FD7508&quot;</span><span class="token punctuation">,</span><span class="token property">&quot;sold_date&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;20210518&quot;</span><span class="token punctuation">,</span><span class="token property">&quot;remark&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;\u6807\u5FD7\u54C1\u724C\u5168\u7403\u4E0A\u5E02\u8F66\u578B&quot;</span> <span class="token punctuation">}</span>
<span class="token punctuation">{</span><span class="token property">&quot;index&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">}</span>
<span class="token punctuation">{</span><span class="token property">&quot;price&quot;</span><span class="token operator">:</span><span class="token number">148800</span><span class="token punctuation">,</span><span class="token property">&quot;color&quot;</span><span class="token operator">:</span><span class="token string">&quot;\u767D\u8272&quot;</span><span class="token punctuation">,</span><span class="token property">&quot;brand&quot;</span><span class="token operator">:</span><span class="token string">&quot;\u6807\u5FD7&quot;</span><span class="token punctuation">,</span><span class="token property">&quot;model&quot;</span><span class="token operator">:</span><span class="token string">&quot;\u6807\u5FD7408&quot;</span><span class="token punctuation">,</span><span class="token property">&quot;sold_date&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;20210702&quot;</span><span class="token punctuation">,</span><span class="token property">&quot;remark&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;\u6BD4\u8F83\u5927\u7684\u7D27\u51D1\u578B\u8F66&quot;</span> <span class="token punctuation">}</span>
<span class="token punctuation">{</span><span class="token property">&quot;index&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">}</span>
<span class="token punctuation">{</span><span class="token property">&quot;price&quot;</span><span class="token operator">:</span><span class="token number">1998000</span><span class="token punctuation">,</span><span class="token property">&quot;color&quot;</span><span class="token operator">:</span><span class="token string">&quot;\u9ED1\u8272&quot;</span><span class="token punctuation">,</span><span class="token property">&quot;brand&quot;</span><span class="token operator">:</span><span class="token string">&quot;\u5927\u4F17&quot;</span><span class="token punctuation">,</span><span class="token property">&quot;model&quot;</span><span class="token operator">:</span><span class="token string">&quot;\u5927\u4F17\u8F89\u817E&quot;</span><span class="token punctuation">,</span><span class="token property">&quot;sold_date&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;20210819&quot;</span><span class="token punctuation">,</span><span class="token property">&quot;remark&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;\u5927\u4F17\u6700\u8BA9\u4EBA\u809D\u75BC\u7684\u8F66&quot;</span> <span class="token punctuation">}</span>
<span class="token punctuation">{</span><span class="token property">&quot;index&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">}</span>
<span class="token punctuation">{</span><span class="token property">&quot;price&quot;</span><span class="token operator">:</span><span class="token number">218000</span><span class="token punctuation">,</span><span class="token property">&quot;color&quot;</span><span class="token operator">:</span><span class="token string">&quot;\u7EA2\u8272&quot;</span><span class="token punctuation">,</span><span class="token property">&quot;brand&quot;</span><span class="token operator">:</span><span class="token string">&quot;\u5965\u8FEA&quot;</span><span class="token punctuation">,</span><span class="token property">&quot;model&quot;</span><span class="token operator">:</span><span class="token string">&quot;\u5965\u8FEAA4&quot;</span><span class="token punctuation">,</span><span class="token property">&quot;sold_date&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;20211105&quot;</span><span class="token punctuation">,</span><span class="token property">&quot;remark&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;\u5C0F\u8D44\u8F66\u578B&quot;</span> <span class="token punctuation">}</span>
<span class="token punctuation">{</span><span class="token property">&quot;index&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">}</span>
<span class="token punctuation">{</span><span class="token property">&quot;price&quot;</span><span class="token operator">:</span><span class="token number">489000</span><span class="token punctuation">,</span><span class="token property">&quot;color&quot;</span><span class="token operator">:</span><span class="token string">&quot;\u9ED1\u8272&quot;</span><span class="token punctuation">,</span><span class="token property">&quot;brand&quot;</span><span class="token operator">:</span><span class="token string">&quot;\u5965\u8FEA&quot;</span><span class="token punctuation">,</span><span class="token property">&quot;model&quot;</span><span class="token operator">:</span><span class="token string">&quot;\u5965\u8FEAA6&quot;</span><span class="token punctuation">,</span><span class="token property">&quot;sold_date&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;20220101&quot;</span><span class="token punctuation">,</span><span class="token property">&quot;remark&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;\u653F\u5E9C\u4E13\u7528?&quot;</span> <span class="token punctuation">}</span>
<span class="token punctuation">{</span><span class="token property">&quot;index&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">}</span>
<span class="token punctuation">{</span><span class="token property">&quot;price&quot;</span><span class="token operator">:</span><span class="token number">1899000</span><span class="token punctuation">,</span><span class="token property">&quot;color&quot;</span><span class="token operator">:</span><span class="token string">&quot;\u9ED1\u8272&quot;</span><span class="token punctuation">,</span><span class="token property">&quot;brand&quot;</span><span class="token operator">:</span><span class="token string">&quot;\u5965\u8FEA&quot;</span><span class="token punctuation">,</span><span class="token property">&quot;model&quot;</span><span class="token operator">:</span><span class="token string">&quot;\u5965\u8FEAA8&quot;</span><span class="token punctuation">,</span><span class="token property">&quot;sold_date&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;20220212&quot;</span><span class="token punctuation">,</span><span class="token property">&quot;remark&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;\u5F88\u8D35\u7684\u5927A6\u3002\u3002\u3002&quot;</span> <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br></div></div><h1 id="\u5206\u7EC4" tabindex="-1"><a class="header-anchor" href="#\u5206\u7EC4" aria-hidden="true">#</a> \u5206\u7EC4</h1><p>\u6700\u57FA\u7840\u7684\u805A\u5408\u662Fterms\uFF0C\u76F8\u5F53\u4E8Esql\u4E2D\u7684count\uFF0C\u9ED8\u8BA4\u60C5\u51B5\u4E0B\u5206\u7EC4\u4F7F\u7528doc_count\u505A\u964D\u5E8F\u6392\u5E8F\u3002</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code>GET /cars/_search
<span class="token punctuation">{</span>
  <span class="token property">&quot;aggs&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
    <span class="token property">&quot;group_by_color&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
      <span class="token property">&quot;terms&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
        <span class="token property">&quot;field&quot;</span><span class="token operator">:</span><span class="token string">&quot;color&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;order&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
          <span class="token property">&quot;_count&quot;</span><span class="token operator">:</span><span class="token string">&quot;desc&quot;</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><h1 id="\u7EDF\u8BA1" tabindex="-1"><a class="header-anchor" href="#\u7EDF\u8BA1" aria-hidden="true">#</a> \u7EDF\u8BA1</h1><p>\u73B0\u6839\u636Ecolor\u8FDB\u884C\u5206\u7EC4\uFF0C\u7136\u540E\u5BF9\u8F66\u8F86\u6C42\u5E73\u5747\u4EF7\u683C\uFF0C\u4E5F\u5C31\u662Fmetric\uFF0C\u6700\u540E\u5BF9\u5E73\u5747\u4EF7\u683C\u8FDB\u884C\u6392\u5E8F\u3002\u4E0B\u9762\u5BF9\u7EDF\u8BA1\u6570\u636E\u7ED9\u4E0E\u4E86\u547D\u540Davg_by_price\u3002</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code>GET /cars/_search
<span class="token punctuation">{</span>
  <span class="token property">&quot;aggs&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
    <span class="token property">&quot;group_by_color&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
      <span class="token property">&quot;terms&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
        <span class="token property">&quot;field&quot;</span><span class="token operator">:</span><span class="token string">&quot;color&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;order&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
          <span class="token property">&quot;avg_by_price&quot;</span><span class="token operator">:</span><span class="token string">&quot;asc&quot;</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token property">&quot;aggs&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
        <span class="token property">&quot;avg_by_price&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
          <span class="token property">&quot;avg&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
            <span class="token property">&quot;field&quot;</span><span class="token operator">:</span><span class="token string">&quot;price&quot;</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br></div></div><p>\u53EF\u4EE5\u6307\u5B9Asize\u4E3A0\uFF0C\u4E0D\u8FD4\u56DEes\u7684\u6587\u6863\uFF0C\u53EA\u8FD4\u56DE\u805A\u5408\u4E4B\u540E\u7684\u6570\u636E\uFF0C\u63D0\u9AD8\u67E5\u8BE2\u901F\u5EA6\u3002</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code>GET /cars/_search
<span class="token punctuation">{</span>
  <span class="token property">&quot;size&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
  <span class="token property">&quot;aggs&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;group_by_color&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;terms&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;field&quot;</span><span class="token operator">:</span> <span class="token string">&quot;color&quot;</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token property">&quot;aggs&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;group_by_brand&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token property">&quot;terms&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;field&quot;</span><span class="token operator">:</span> <span class="token string">&quot;brand&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;order&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
              <span class="token property">&quot;avg_by_price&quot;</span><span class="token operator">:</span> <span class="token string">&quot;asc&quot;</span>
            <span class="token punctuation">}</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token property">&quot;aggs&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;avg_by_price&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
              <span class="token property">&quot;avg&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token property">&quot;field&quot;</span><span class="token operator">:</span> <span class="token string">&quot;price&quot;</span>
              <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br></div></div><h1 id="\u4E0B\u94BB\u5206\u6790" tabindex="-1"><a class="header-anchor" href="#\u4E0B\u94BB\u5206\u6790" aria-hidden="true">#</a> \u4E0B\u94BB\u5206\u6790</h1><p>\u73B0\u6839\u636E\u4E00\u4E2A\u5B57\u6BB5\u8FDB\u884C\u5206\u7EC4\uFF0C\u5728\u5206\u7EC4\u7684\u57FA\u7840\u4E0A\u5BF9\u53E6\u4E00\u4E2A\u5B57\u6BB5\u518D\u6B21\u5206\u7EC4\uFF0C\u79F0\u4E3A\u4E0B\u94BB\u5206\u6790\u3002aggs\u63D0\u4F9B\u4E86\u5D4C\u5957\u5B9A\u4E49\u548C\u6C34\u5E73\u5B9A\u4E49\uFF0C\u5D4C\u5957\u5B9A\u4E49\u5373\u4E0B\u94BB\u5206\u6790\uFF0C\u6C34\u5E73\u5B9A\u4E49\u5219\u662F\u5E73\u94FA\u591A\u4E2A\u5206\u7EC4\u65B9\u5F0F\u3002</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code># \u8BED\u6CD5\u683C\u5F0F
GET /index_name/type_name/_search
<span class="token punctuation">{</span>
  <span class="token property">&quot;aggs&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
    <span class="token property">&quot;\u5B9A\u4E49\u5206\u7EC4\u540D\u79F0(\u6700\u5916\u5C42)&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;\u5206\u7EC4\u7B56\u7565\u5982:terms\u3001avg\u3001sum&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;field&quot;</span><span class="token operator">:</span><span class="token string">&quot;\u6839\u636E\u54EA\u4E00\u4E2A\u5B57\u6BB5\u5206\u7EC4&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;\u5176\u4ED6\u53C2\u6570&quot;</span><span class="token operator">:</span><span class="token string">&quot;&quot;</span>
      <span class="token punctuation">}</span>\uFF0C
      <span class="token property">&quot;aggs&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
        <span class="token property">&quot;\u5206\u7EC4\u540D\u79F01&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> 
        <span class="token property">&quot;\u5206\u7EC4\u540D\u79F02&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span><span class="token punctuation">}</span> 
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><p>\u4E0B\u9762\u901A\u8FC7\u4E00\u4E2A\u4F8B\u5B50\u8BF4\u660E\uFF1A</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code>GET /cars/_search
<span class="token punctuation">{</span>
  <span class="token property">&quot;aggs&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
    <span class="token property">&quot;group_by_color&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
      <span class="token property">&quot;terms&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
        <span class="token property">&quot;field&quot;</span><span class="token operator">:</span><span class="token string">&quot;color&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;order&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
          <span class="token property">&quot;avg_by_price_color&quot;</span><span class="token operator">:</span><span class="token string">&quot;asc&quot;</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token property">&quot;aggs&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
        <span class="token property">&quot;avg_by_price_color&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
          <span class="token property">&quot;avg&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span><span class="token property">&quot;field&quot;</span><span class="token operator">:</span><span class="token string">&quot;price&quot;</span><span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token property">&quot;group_by_brand&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
          <span class="token property">&quot;terms&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
            <span class="token property">&quot;field&quot;</span><span class="token operator">:</span><span class="token string">&quot;brand&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;order&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
              <span class="token property">&quot;avg_by_price_brand&quot;</span><span class="token operator">:</span><span class="token string">&quot;desc&quot;</span>
            <span class="token punctuation">}</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token property">&quot;aggs&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
            <span class="token property">&quot;avg_by_price_brand&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
              <span class="token property">&quot;avg&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span><span class="token property">&quot;field&quot;</span><span class="token operator">:</span><span class="token string">&quot;price&quot;</span><span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br></div></div><h1 id="\u5206\u7EC4\u6700\u5927\u503C\u6700\u5C0F\u503C" tabindex="-1"><a class="header-anchor" href="#\u5206\u7EC4\u6700\u5927\u503C\u6700\u5C0F\u503C" aria-hidden="true">#</a> \u5206\u7EC4\u6700\u5927\u503C\u6700\u5C0F\u503C</h1><p>\u5728\u5B9E\u9645\u4E1A\u52A1\u4E2D\uFF0C\u6700\u5E38\u7528\u7684\u5C31\u662F\u6570\u91CF\u7EDF\u8BA1\uFF0C\u6BD4\u5982\u6700\u5927\u503C\u3001\u6700\u5C0F\u503C\u3001\u5E73\u5747\u3001\u603B\u8BA1\u7B49\u7B49\u3002\u901A\u5E38\u5360\u805A\u5408\u4E1A\u52A1\u4E2D\u768460%\u4EE5\u4E0A\uFF0C\u4E2D\u5C0F\u9879\u76EE\u4E2D\u751A\u81F3\u536080%\u4EE5\u4E0A\u3002</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code>GET /cars/_search
<span class="token punctuation">{</span>
  <span class="token property">&quot;aggs&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
    <span class="token property">&quot;group_by_color&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
      <span class="token property">&quot;terms&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
        <span class="token property">&quot;field&quot;</span><span class="token operator">:</span><span class="token string">&quot;color&quot;</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token property">&quot;aggs&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
        <span class="token property">&quot;max_price&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
          <span class="token property">&quot;max&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
            <span class="token property">&quot;field&quot;</span><span class="token operator">:</span><span class="token string">&quot;price&quot;</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token property">&quot;min_price&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
          <span class="token property">&quot;min&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
            <span class="token property">&quot;field&quot;</span><span class="token operator">:</span><span class="token string">&quot;price&quot;</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token property">&quot;sum_price&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
          <span class="token property">&quot;sum&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
            <span class="token property">&quot;field&quot;</span><span class="token operator">:</span><span class="token string">&quot;price&quot;</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br></div></div><h1 id="\u5206\u7EC4\u6392\u5E8F" tabindex="-1"><a class="header-anchor" href="#\u5206\u7EC4\u6392\u5E8F" aria-hidden="true">#</a> \u5206\u7EC4\u6392\u5E8F</h1><p>\u5BF9\u4E8E\u5206\u7EC4\u5185\u7684\u6570\u636E\u9700\u8981\u6392\u5E8F\uFF0C\u5E76\u4E14\u53D6\u6392\u5E8F\u4E2D\u6700\u9AD8\u7684\u51E0\u4F4D\uFF0C\u53EF\u4EE5\u4F7F\u7528top_hits\u6807\u7B7E\uFF0C\u540C\u65F6\u4F7F\u7528size\u63A7\u5236top n\u7684\u4E2A\u6570\u3002_source\u4EE3\u8868\u663E\u793A\u5185\u5BB9\u4E3A\u54EA\u4E9B\u5B57\u6BB5\u3002</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code>GET cars/_search
<span class="token punctuation">{</span>
  <span class="token property">&quot;size&quot;</span><span class="token operator">:</span><span class="token number">0</span><span class="token punctuation">,</span>
  <span class="token property">&quot;aggs&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
    <span class="token property">&quot;group_by_brand&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
      <span class="token property">&quot;terms&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
        <span class="token property">&quot;field&quot;</span><span class="token operator">:</span><span class="token string">&quot;brand&quot;</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token property">&quot;aggs&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
        <span class="token property">&quot;top_car&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
          <span class="token property">&quot;top_hits&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
            <span class="token property">&quot;size&quot;</span><span class="token operator">:</span><span class="token number">1</span><span class="token punctuation">,</span>
            <span class="token property">&quot;sort&quot;</span><span class="token operator">:</span><span class="token punctuation">[</span>
              <span class="token punctuation">{</span>
                <span class="token property">&quot;price&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span><span class="token property">&quot;order&quot;</span><span class="token operator">:</span><span class="token string">&quot;desc&quot;</span><span class="token punctuation">}</span>
              <span class="token punctuation">}</span>
              <span class="token punctuation">]</span><span class="token punctuation">,</span>
              <span class="token property">&quot;_source&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
                <span class="token property">&quot;includes&quot;</span><span class="token operator">:</span><span class="token punctuation">[</span><span class="token string">&quot;model&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;price&quot;</span><span class="token punctuation">]</span>
              <span class="token punctuation">}</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br></div></div><h1 id="histogram\u533A\u95F4\u7EDF\u8BA1" tabindex="-1"><a class="header-anchor" href="#histogram\u533A\u95F4\u7EDF\u8BA1" aria-hidden="true">#</a> histogram\u533A\u95F4\u7EDF\u8BA1</h1><p>histogram\u8DDFterms\u7C7B\u4F3C\uFF0C\u4E5F\u662F\u8FDB\u884Cbucket\u5206\u7EC4\u64CD\u4F5C\uFF0C\u6839\u636E\u4E00\u4E2A\u5B57\u6BB5\uFF0C\u5B9E\u73B0\u533A\u95F4\u5206\u7EC4\u3002</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code>GET /cars/_search
<span class="token punctuation">{</span>
  <span class="token property">&quot;aggs&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
    <span class="token property">&quot;histogram_by_price&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
      <span class="token property">&quot;histogram&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
        <span class="token property">&quot;field&quot;</span><span class="token operator">:</span><span class="token string">&quot;price&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;interval&quot;</span><span class="token operator">:</span> <span class="token number">1000000</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token property">&quot;aggs&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
        <span class="token property">&quot;avg_by_price&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
          <span class="token property">&quot;avg&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
            <span class="token property">&quot;field&quot;</span><span class="token operator">:</span><span class="token string">&quot;price&quot;</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div><h1 id="date-histogram\u533A\u95F4\u5206\u7EC4" tabindex="-1"><a class="header-anchor" href="#date-histogram\u533A\u95F4\u5206\u7EC4" aria-hidden="true">#</a> date_histogram\u533A\u95F4\u5206\u7EC4</h1><p>date_histogram\u53EF\u4EE5\u5BF9date\u7C7B\u578B\u8FDB\u884C\u533A\u95F4\u5206\u7EC4\u3002</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code>GET /cars/_search
<span class="token punctuation">{</span>
  <span class="token property">&quot;aggs&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
    <span class="token property">&quot;histogram_by_date&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
      <span class="token property">&quot;date_histogram&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
        <span class="token property">&quot;field&quot;</span><span class="token operator">:</span><span class="token string">&quot;sold_date&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;calendar_interval&quot;</span><span class="token operator">:</span><span class="token string">&quot;month&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;format&quot;</span><span class="token operator">:</span><span class="token string">&quot;yyyy\u2010MM\u2010dd&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;min_doc_count&quot;</span><span class="token operator">:</span><span class="token number">1</span><span class="token punctuation">,</span>
        <span class="token property">&quot;extended_bounds&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
          <span class="token property">&quot;min&quot;</span><span class="token operator">:</span><span class="token string">&quot;2021\u201001\u201001&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;max&quot;</span><span class="token operator">:</span><span class="token string">&quot;2022\u201012\u201031&quot;</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token property">&quot;aggs&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
        <span class="token property">&quot;sum_by_price&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
          <span class="token property">&quot;sum&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
            <span class="token property">&quot;field&quot;</span><span class="token operator">:</span><span class="token string">&quot;price&quot;</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br></div></div><h1 id="\u6570\u636E\u6BD4\u5BF9-global-bucket" tabindex="-1"><a class="header-anchor" href="#\u6570\u636E\u6BD4\u5BF9-global-bucket" aria-hidden="true">#</a> \u6570\u636E\u6BD4\u5BF9_global bucket</h1><p>\u5982\u679C\u9700\u8981\u5BF9\u6BD4\u90E8\u5206\u6570\u636E\u4E0E\u6574\u4F53\u6570\u636E\u7684\u603B\u548C\uFF0C\u5C31\u9700\u8981global\u5B9A\u4E49\u5168\u5C40\u6570\u636E\u53C2\u6570\u3002\u5982\u4E0B\u7EDF\u8BA1\u67D0\u4E2A\u54C1\u724C\u7684\u5E73\u5747\u4EF7\u683C\u548C\u5168\u90E8\u7684\u4EF7\u683C\u3002</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code>GET /cars/_search
<span class="token punctuation">{</span>
  <span class="token property">&quot;size&quot;</span><span class="token operator">:</span><span class="token number">0</span><span class="token punctuation">,</span>
  <span class="token property">&quot;query&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
    <span class="token property">&quot;match&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
      <span class="token property">&quot;brand&quot;</span><span class="token operator">:</span><span class="token string">&quot;\u5927\u4F17&quot;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;aggs&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
    <span class="token property">&quot;volkswagen_of_avg_price&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
      <span class="token property">&quot;avg&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span><span class="token property">&quot;field&quot;</span><span class="token operator">:</span><span class="token string">&quot;price&quot;</span><span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">&quot;all_avg_price&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
      <span class="token property">&quot;global&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token property">&quot;aggs&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
        <span class="token property">&quot;all_of_price&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
          <span class="token property">&quot;avg&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span><span class="token property">&quot;field&quot;</span><span class="token operator">:</span><span class="token string">&quot;price&quot;</span><span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br></div></div><h1 id="\u805A\u5408\u6392\u5E8Faggs-order" tabindex="-1"><a class="header-anchor" href="#\u805A\u5408\u6392\u5E8Faggs-order" aria-hidden="true">#</a> \u805A\u5408\u6392\u5E8Faggs+order</h1><p>\u5BF9\u805A\u5408\u6570\u636E\u8FDB\u884C\u6392\u5E8F\uFF0C\u5982\u7EDF\u8BA1\u6C7D\u8F66\u7684\u9500\u552E\u91CF\u548C\u9500\u552E\u603B\u989D\uFF0C\u6309\u7167\u9500\u552E\u603B\u989D\u964D\u5E8F\u6392\u5E8F</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code>GET /cars/_search
<span class="token punctuation">{</span>
  <span class="token property">&quot;aggs&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
    <span class="token property">&quot;group_of_brand&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
      <span class="token property">&quot;terms&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
        <span class="token property">&quot;field&quot;</span><span class="token operator">:</span><span class="token string">&quot;brand&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;order&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
          <span class="token property">&quot;sum_of_price&quot;</span><span class="token operator">:</span><span class="token string">&quot;desc&quot;</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token property">&quot;aggs&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
        <span class="token property">&quot;sum_of_price&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
          <span class="token property">&quot;sum&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
            <span class="token property">&quot;field&quot;</span><span class="token operator">:</span><span class="token string">&quot;price&quot;</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br></div></div><p>\u5982\u679C\u6709\u591A\u5C42aggs\uFF0C\u4E0B\u94BB\u5206\u6790\u65F6\uFF0C\u53EF\u4EE5\u6839\u636E\u6700\u5185\u5C42\u7684aggs\u8FDB\u884C\u6392\u5E8F\uFF0C<strong>\u8DDFsql\u4E00\u6837\uFF0C\u53EA\u80FD\u7EC4\u5185\u8FDB\u884C\u6392\u5E8F\uFF0C\u6CA1\u529E\u6CD5\u8DE8\u7EC4\u6392\u5E8F</strong>\u3002\u5982\u7EDF\u8BA1\u6BCF\u4E2A\u54C1\u724C\u6BCF\u79CD\u989C\u8272\u8F66\u8F86\u7684\u9500\u552E\u603B\u989D\uFF0C\u5E76\u6839\u636E\u9500\u552E\u60C5\u51B5\u6392\u5E8F\u3002</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code>GET /cars/_search
<span class="token punctuation">{</span>
  <span class="token property">&quot;aggs&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
    <span class="token property">&quot;group_by_brand&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
      <span class="token property">&quot;terms&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
        <span class="token property">&quot;field&quot;</span><span class="token operator">:</span><span class="token string">&quot;brand&quot;</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token property">&quot;aggs&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
        <span class="token property">&quot;group_by_color&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
          <span class="token property">&quot;terms&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
            <span class="token property">&quot;field&quot;</span><span class="token operator">:</span><span class="token string">&quot;color&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;order&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
              <span class="token property">&quot;sum_of_price&quot;</span><span class="token operator">:</span><span class="token string">&quot;desc&quot;</span>
            <span class="token punctuation">}</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token property">&quot;aggs&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
            <span class="token property">&quot;sum_of_price&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
              <span class="token property">&quot;sum&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
                <span class="token property">&quot;field&quot;</span><span class="token operator">:</span><span class="token string">&quot;price&quot;</span>
              <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br></div></div><h1 id="\u5206\u7EC4\u641C\u7D22search-aggs" tabindex="-1"><a class="header-anchor" href="#\u5206\u7EC4\u641C\u7D22search-aggs" aria-hidden="true">#</a> \u5206\u7EC4\u641C\u7D22search+aggs</h1><p>search\u7C7B\u4F3C\u4E8Esql\u4E2D\u7684where\uFF0Caggs\u7C7B\u4F3C\u4E8Egroup by\u3002es\u53EF\u4EE5\u4F7F\u7528\u4E24\u79CD\u7EC4\u5408\u8FDB\u884C\u590D\u6742\u7684\u805A\u5408\u67E5\u8BE2\uFF0C\u5982\u7EDF\u8BA1\u67D0\u54C1\u724C\u8F66\u8F86\u6BCF\u4E2A\u5B63\u5EA6\u7684\u9500\u91CF\u548C\u9500\u552E\u989D\u5EA6\u3002</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code>GET /cars/_search
<span class="token punctuation">{</span>
  <span class="token property">&quot;query&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
    <span class="token property">&quot;match&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
      <span class="token property">&quot;brand&quot;</span><span class="token operator">:</span><span class="token string">&quot;\u5927\u4F17&quot;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;aggs&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
    <span class="token property">&quot;histogram_by_date&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
      <span class="token property">&quot;date_histogram&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
        <span class="token property">&quot;field&quot;</span><span class="token operator">:</span><span class="token string">&quot;sold_date&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;calendar_interval&quot;</span><span class="token operator">:</span><span class="token string">&quot;quarter&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;min_doc_count&quot;</span><span class="token operator">:</span><span class="token number">1</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token property">&quot;aggs&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
        <span class="token property">&quot;sum_by_price&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
          <span class="token property">&quot;sum&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
            <span class="token property">&quot;field&quot;</span><span class="token operator">:</span><span class="token string">&quot;price&quot;</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br></div></div><h1 id="\u8FC7\u6EE4\u805A\u5408\u5206\u6790filter-aggs" tabindex="-1"><a class="header-anchor" href="#\u8FC7\u6EE4\u805A\u5408\u5206\u6790filter-aggs" aria-hidden="true">#</a> \u8FC7\u6EE4\u805A\u5408\u5206\u6790filter+aggs</h1><p>\u7EDF\u8BA110w~50w\u4E4B\u95F4\u8F66\u8F86\u7684\u5E73\u5747\u4EF7\u683C\uFF1A</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code>GET /cars/_search
<span class="token punctuation">{</span>
  <span class="token property">&quot;query&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
    <span class="token property">&quot;constant_score&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
      <span class="token property">&quot;filter&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
        <span class="token property">&quot;range&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
          <span class="token property">&quot;price&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
            <span class="token property">&quot;gte&quot;</span><span class="token operator">:</span><span class="token number">100000</span><span class="token punctuation">,</span>
            <span class="token property">&quot;lte&quot;</span><span class="token operator">:</span><span class="token number">500000</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;aggs&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
    <span class="token property">&quot;avg_by_price&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
      <span class="token property">&quot;avg&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
        <span class="token property">&quot;field&quot;</span><span class="token operator">:</span><span class="token string">&quot;price&quot;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br></div></div><h1 id="\u805A\u5408\u4E2D\u4F7F\u7528filter\u7F29\u5C0F\u8FC7\u6EE4\u8303\u56F4" tabindex="-1"><a class="header-anchor" href="#\u805A\u5408\u4E2D\u4F7F\u7528filter\u7F29\u5C0F\u8FC7\u6EE4\u8303\u56F4" aria-hidden="true">#</a> \u805A\u5408\u4E2D\u4F7F\u7528filter\u7F29\u5C0F\u8FC7\u6EE4\u8303\u56F4</h1><p>\u7EDF\u8BA1\u67D0\u4E2A\u54C1\u724C\u6700\u8FD1\u4E00\u5E74\u7684\u9500\u552E\u989D\u5EA6\u3002</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code>GET /cars/_search
<span class="token punctuation">{</span>
  <span class="token property">&quot;query&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
    <span class="token property">&quot;match&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
      <span class="token property">&quot;brand&quot;</span><span class="token operator">:</span><span class="token string">&quot;\u5927\u4F17&quot;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;aggs&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
    <span class="token property">&quot;count_last_year&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
      <span class="token property">&quot;filter&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
        <span class="token property">&quot;range&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
          <span class="token property">&quot;sold_date&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
            <span class="token property">&quot;gte&quot;</span><span class="token operator">:</span><span class="token string">&quot;now\u201012M&quot;</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token property">&quot;aggs&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
        <span class="token property">&quot;sum_of_price_last_year&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
          <span class="token property">&quot;sum&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
            <span class="token property">&quot;field&quot;</span><span class="token operator">:</span><span class="token string">&quot;price&quot;</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br></div></div><h1 id="" tabindex="-1"><a class="header-anchor" href="#" aria-hidden="true">#</a></h1>`,50);function t(o,e){return p}var c=n(a,[["render",t]]);export{c as default};
