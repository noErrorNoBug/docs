import{_ as e,r as o,o as r,a as l,d as n,b as a,w as p,F as u,e as c,f as t}from"./app.7eb989d9.js";const i={},b=n("div",{class:"custom-container info"},[n("p",{class:"custom-container-title"},"\u76F8\u5173\u4FE1\u606F"),n("p",null,"\u6587\u7AE0\u4ECB\u7ECD")],-1),k={class:"table-of-contents"},m=t("\u5339\u914D\u7CBE\u5EA6\u63A7\u5236"),q=t("match\u5E95\u5C42\u8F6C\u6362"),d=t("boost\u6743\u91CD\u63A7\u5236"),h=t("best fields \u7B56\u7565\u5B9E\u73B0"),g=t("\u57FA\u4E8Edis_max\u5B9E\u73B0best fields\u7B56\u7565\u8FDB\u884C\u591A\u5B57\u6BB5\u641C\u7D22"),y=t("\u57FA\u4E8Etie_breaker\u53C2\u6570\u4F18\u5316dis_max\u641C\u7D22\u6548\u679C"),_=t("\u4F7F\u7528multi_match\u7B80\u5316dis_max + tie_breaker"),f=t("cross fields \u7B56\u7565\u5B9E\u73B0"),v=t("copy_to \u7EC4\u5408fields"),x=t("match phrase\uFF08\u5E38\u7528\uFF09"),j=t("match_phrase \u539F\u7406"),T=t("slop\u53C2\u6570"),z=t("match\u548Cproximity search\u914D\u5408\u5E73\u8861\u53EC\u56DE\u7387\u548C\u7CBE\u51C6\u5EA6"),G=t("\u524D\u7F00\u641C\u7D22 prefix search"),E=t("\u901A\u914D\u7B26\u641C\u7D22"),w=t("\u6B63\u5219\u641C\u7D22"),A=t("fuzzy\u6A21\u7CCA\u641C\u7D22"),P=t("\u641C\u7D22\u63A8\u8350"),S=t("from\u548Csize\u5206\u9875"),V=t("scroll\u5206\u9875"),Q=c(`<hr><h1 id="\u591A\u6761\u4EF6\u7EC4\u5408" tabindex="-1"><a class="header-anchor" href="#\u591A\u6761\u4EF6\u7EC4\u5408" aria-hidden="true">#</a> \u591A\u6761\u4EF6\u7EC4\u5408</h1><h2 id="\u5339\u914D\u7CBE\u5EA6\u63A7\u5236" tabindex="-1"><a class="header-anchor" href="#\u5339\u914D\u7CBE\u5EA6\u63A7\u5236" aria-hidden="true">#</a> \u5339\u914D\u7CBE\u5EA6\u63A7\u5236</h2><ul><li><strong>operator</strong>\uFF1A\u6307\u5B9A\u903B\u8F91\u8FD0\u7B97\uFF0C\u9ED8\u8BA4\u662Fand\uFF0C\u53EF\u4EE5\u6307\u5B9Aor\u8868\u793A\u5206\u8BCD\u4E3A\u6216\u5173\u7CFB\u3002</li></ul><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code># \u4F7F\u7528\u6216\u8BED\u6CD5
GET /es_db/_search
<span class="token punctuation">{</span>
  <span class="token property">&quot;query&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
    <span class="token property">&quot;match&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
      <span class="token property">&quot;remark&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
        <span class="token property">&quot;query&quot;</span><span class="token operator">:</span><span class="token string">&quot;java developer&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;operator&quot;</span><span class="token operator">:</span><span class="token string">&quot;and&quot;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><ul><li><strong>minimum_should_match</strong>\uFF1A\u5339\u914D\u7CBE\u5EA6\uFF0C\u53EF\u4EE5\u4F7F\u7528\u767E\u5206\u6BD4\uFF0C\u8868\u793A\u5206\u8BCD\u5FC5\u987B\u6709\u6307\u5B9A\u7684\u767E\u5206\u6BD4\u5339\u914D\u4E0A\u5219\u7B26\u5408\u7ED3\u679C\u3002</li></ul><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code># \u9650\u5B9A\u767E\u5206\u6BD4
GET /es_db/_search
<span class="token punctuation">{</span>
  <span class="token property">&quot;query&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
    <span class="token property">&quot;match&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
      <span class="token property">&quot;remark&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
        <span class="token property">&quot;query&quot;</span><span class="token operator">:</span><span class="token string">&quot;java architect assistant&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;minimum_should_match&quot;</span><span class="token operator">:</span><span class="token string">&quot;68%&quot;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><ul><li>should + bool\uFF1A\u63A7\u5236\u5339\u914D\u7CBE\u5EA6\uFF0C\u53EF\u4EE5\u6307\u5B9A\u5206\u8BCD\u7684\u4E2A\u6570\u3002</li></ul><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code># \u9650\u5B9A\u5206\u8BCD\u5339\u914D\u4E2A\u6570
GET /es_db/_search
<span class="token punctuation">{</span>
  <span class="token property">&quot;query&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
    <span class="token property">&quot;bool&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
      <span class="token property">&quot;should&quot;</span><span class="token operator">:</span><span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
          <span class="token property">&quot;match&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
            <span class="token property">&quot;remark&quot;</span><span class="token operator">:</span><span class="token string">&quot;java&quot;</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          <span class="token property">&quot;match&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
            <span class="token property">&quot;remark&quot;</span><span class="token operator">:</span><span class="token string">&quot;developer&quot;</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          <span class="token property">&quot;match&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
            <span class="token property">&quot;remark&quot;</span><span class="token operator">:</span><span class="token string">&quot;assistant&quot;</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token property">&quot;minimum_should_match&quot;</span><span class="token operator">:</span><span class="token number">2</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br></div></div><h2 id="match\u5E95\u5C42\u8F6C\u6362" tabindex="-1"><a class="header-anchor" href="#match\u5E95\u5C42\u8F6C\u6362" aria-hidden="true">#</a> match\u5E95\u5C42\u8F6C\u6362</h2><p>\u5728\u6267\u884Cmatch\u5339\u914D\u65F6\uFF0Ces\u5E95\u5C42\u901A\u5E38\u5BF9\u641C\u7D22\u6761\u4EF6\u4F1A\u8FDB\u884C\u8F6C\u6362\uFF0C\u6765\u5B9E\u73B0\u6700\u7EC8\u7684\u7ED3\u679C\uFF0C<strong>\u5982\u679C\u6761\u4EF6\u5141\u8BB8\u7684\u60C5\u51B5\u4E0B\uFF0C\u5E94\u8BE5\u5C3D\u91CF\u4F7F\u7528\u8F6C\u6362\u540E\u7684\u8BED\u6CD5\u4EE5\u63D0\u9AD8\u641C\u7D22\u6548\u7387</strong>\u3002\u5982\u4E0Bmatch\u6240\u793A\uFF0C\u53CA\u8F6C\u6362\u540E\u7684\u7ED3\u679C\uFF1A</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code># \u8F6C\u6362\u524D\uFF0Coperator=or\u65F6\u66FF\u6362\u4E3Ashould
GET /es_db/_search
<span class="token punctuation">{</span>
  <span class="token property">&quot;query&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
    <span class="token property">&quot;match&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
      <span class="token property">&quot;remark&quot;</span><span class="token operator">:</span><span class="token string">&quot;java developer&quot;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
# \u8F6C\u6362\u540E
GET /es_db/_search
<span class="token punctuation">{</span>
  <span class="token property">&quot;query&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
    <span class="token property">&quot;bool&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
      <span class="token property">&quot;should&quot;</span><span class="token operator">:</span><span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
          <span class="token property">&quot;term&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
            <span class="token property">&quot;remark&quot;</span><span class="token operator">:</span><span class="token string">&quot;java&quot;</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          <span class="token property">&quot;term&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
            <span class="token property">&quot;remark&quot;</span><span class="token operator">:</span><span class="token string">&quot;developer&quot;</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        <span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

# \u8F6C\u6362\u524D\uFF0Coperator=and\u65F6\u8F6C\u6362\u4E3Amust
GET /es_db/_search
<span class="token punctuation">{</span>
  <span class="token property">&quot;query&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
    <span class="token property">&quot;match&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
      <span class="token property">&quot;remark&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
        <span class="token property">&quot;query&quot;</span><span class="token operator">:</span><span class="token string">&quot;java developer&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;operator&quot;</span><span class="token operator">:</span><span class="token string">&quot;and&quot;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
# \u8F6C\u6362\u540E
GET /es_db/_search
<span class="token punctuation">{</span>
  <span class="token property">&quot;query&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
    <span class="token property">&quot;bool&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
      <span class="token property">&quot;should&quot;</span><span class="token operator">:</span><span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
          <span class="token property">&quot;term&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
            <span class="token property">&quot;remark&quot;</span><span class="token operator">:</span><span class="token string">&quot;java&quot;</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          <span class="token property">&quot;term&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
            <span class="token property">&quot;remark&quot;</span><span class="token operator">:</span><span class="token string">&quot;developer&quot;</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        <span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

# \u6BD4\u4F8B\u8F6C\u6362
GET /es_db/_search
<span class="token punctuation">{</span>
  <span class="token property">&quot;query&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
    <span class="token property">&quot;match&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
      <span class="token property">&quot;remark&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
        <span class="token property">&quot;query&quot;</span><span class="token operator">:</span><span class="token string">&quot;java architect assistant&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;minimum_should_match&quot;</span><span class="token operator">:</span><span class="token string">&quot;68%&quot;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

# \u8F6C\u6362\u540E
GET /es_db/_search
<span class="token punctuation">{</span>
  <span class="token property">&quot;query&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
    <span class="token property">&quot;bool&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
      <span class="token property">&quot;should&quot;</span><span class="token operator">:</span><span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
          <span class="token property">&quot;match&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
            <span class="token property">&quot;remark&quot;</span><span class="token operator">:</span><span class="token string">&quot;java&quot;</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          <span class="token property">&quot;match&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
            <span class="token property">&quot;remark&quot;</span><span class="token operator">:</span><span class="token string">&quot;developer&quot;</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          <span class="token property">&quot;match&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
            <span class="token property">&quot;remark&quot;</span><span class="token operator">:</span><span class="token string">&quot;assistant&quot;</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token property">&quot;minimum_should_match&quot;</span><span class="token operator">:</span><span class="token number">2</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br><span class="line-number">91</span><br><span class="line-number">92</span><br><span class="line-number">93</span><br><span class="line-number">94</span><br><span class="line-number">95</span><br><span class="line-number">96</span><br><span class="line-number">97</span><br><span class="line-number">98</span><br><span class="line-number">99</span><br><span class="line-number">100</span><br><span class="line-number">101</span><br><span class="line-number">102</span><br></div></div><h2 id="boost\u6743\u91CD\u63A7\u5236" tabindex="-1"><a class="header-anchor" href="#boost\u6743\u91CD\u63A7\u5236" aria-hidden="true">#</a> boost\u6743\u91CD\u63A7\u5236</h2><p>\u5982\u679C\u5BF9\u4E8E\u641C\u7D22\u7ED3\u679C\u9700\u8981<strong>\u6309\u7167\u6743\u91CD\uFF08\u76F8\u5173\u5EA6\uFF09\u6392\u5E8F</strong>\uFF0C\u5982\u7535\u5546\u4E2D\u7EFC\u5408\u6392\u5E8F\uFF0C\u5728\u9500\u91CF\u3001\u5E7F\u544A\u6295\u653E\u91CF\u3001\u8BC4\u4EF7\u503C\u3001\u5E93\u5B58\u7B49\u6392\u5E8F\uFF0C\u5E7F\u544A\u6295\u653E\u91CF\u6743\u91CD\u6700\u9AD8\u3001\u5E93\u5B58\u6743\u91CD\u6700\u4F4E\u7684\u6392\u5E8F\u89C4\u5219\uFF0C\u5219\u53EF\u4EE5\u4F7F\u7528boost\u8FDB\u884C\u6743\u91CD\u63A7\u5236\u3002boost\u5206\u503C\u8D8A\u9AD8\u5219\u6743\u91CD\u8D8A\u9AD8\u3002</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code>GET /es_db/_search
<span class="token punctuation">{</span>
  <span class="token property">&quot;query&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
    <span class="token property">&quot;bool&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
      <span class="token property">&quot;must&quot;</span><span class="token operator">:</span><span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
          <span class="token property">&quot;match&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
            <span class="token property">&quot;remark&quot;</span><span class="token operator">:</span><span class="token string">&quot;java&quot;</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token property">&quot;should&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
          <span class="token property">&quot;match&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
            <span class="token property">&quot;remark&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
              <span class="token property">&quot;query&quot;</span><span class="token operator">:</span> <span class="token string">&quot;developer&quot;</span><span class="token punctuation">,</span>
              <span class="token property">&quot;boost&quot;</span><span class="token operator">:</span><span class="token number">1</span>
              <span class="token punctuation">}</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          <span class="token property">&quot;match&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
            <span class="token property">&quot;remark&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
              <span class="token property">&quot;query&quot;</span><span class="token operator">:</span> <span class="token string">&quot;architect&quot;</span><span class="token punctuation">,</span>
              <span class="token property">&quot;boost&quot;</span><span class="token operator">:</span><span class="token number">3</span>
              <span class="token punctuation">}</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        <span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br></div></div><h2 id="best-fields-\u7B56\u7565\u5B9E\u73B0" tabindex="-1"><a class="header-anchor" href="#best-fields-\u7B56\u7565\u5B9E\u73B0" aria-hidden="true">#</a> best fields \u7B56\u7565\u5B9E\u73B0</h2><h3 id="\u57FA\u4E8Edis-max\u5B9E\u73B0best-fields\u7B56\u7565\u8FDB\u884C\u591A\u5B57\u6BB5\u641C\u7D22" tabindex="-1"><a class="header-anchor" href="#\u57FA\u4E8Edis-max\u5B9E\u73B0best-fields\u7B56\u7565\u8FDB\u884C\u591A\u5B57\u6BB5\u641C\u7D22" aria-hidden="true">#</a> \u57FA\u4E8Edis_max\u5B9E\u73B0best fields\u7B56\u7565\u8FDB\u884C\u591A\u5B57\u6BB5\u641C\u7D22</h3><p>best fields\u6307\u7684\u662F\uFF1Adocument\u4E2D\u7684\u67D0\u4E00\u4E2Afield\uFF0C\u5C3D\u53EF\u80FD\u591A\u7684\u5339\u914D\u641C\u7D22\u6761\u4EF6\u3002\u4E0E\u4E4B\u76F8\u53CD\u7684\u662F\uFF0C\u5C3D\u53EF\u80FD\u591A\u7684\u5B57\u6BB5\u6EE1\u8DB3\u5339\u914D\u6761\u4EF6\uFF08most fields\u7B56\u7565\uFF09\u3002\u5982\u767E\u5EA6\u5C31\u662F\u7528\u7684best fields\u3002</p><p><strong>best fields\u7B56\u7565\u7684\u4F18\u70B9\u662F\uFF1A\u7CBE\u786E\u5339\u914D\u7684\u6570\u636E\u53EF\u4EE5\u5C3D\u53EF\u80FD\u7684\u6392\u5217\u5728\u6700\u524D\u7AEF\uFF0C\u800C\u4E14\u53EF\u4EE5\u901A\u8FC7minimum_should_match\u53BB\u9664\u957F\u5C3E\u6570\u636E\uFF0C\u907F\u514D\u957F\u5C3E\u6570\u636E\u5B57\u6BB5\u5BF9\u6392\u5E8F\u7ED3\u679C\u4EA7\u751F\u5F71\u54CD\u3002</strong>\uFF08\u957F\u5C3E\u6570\u636E\u6307\u7684\u662F\uFF1A\u6211\u4EEC\u60F3\u8981\u5339\u914D4\u4E2A\u5173\u952E\u8BCD\uFF0C\u4F46\u662F\u5F88\u591A\u6587\u6863\u53EA\u5339\u914D1\u4E2A\u4E5F\u663E\u793A\u51FA\u6765\u4E86\uFF0C\u8FD9\u4E9B\u6587\u6863\u663E\u7136\u4E0D\u662F\u6211\u4EEC\u60F3\u8981\u7684\uFF09\u3002</p><p>best fields\u7B56\u7565\u7684\u7F3A\u70B9\u662F\uFF1A\u76F8\u5BF9\u6392\u5E8F\u4E0D\u5747\u5300\u3002</p><p>dis_max\u8BED\u6CD5\uFF1A\u76F4\u63A5\u83B7\u53D6\u641C\u7D22\u7684\u591A\u6761\u4EF6\u4E2D\uFF0C\u5355\u6761\u4EF6query**\u76F8\u5173\u5EA6\u5206\u6570\uFF08_s<strong><strong>c</strong></strong>o<strong><strong>r</strong></strong>e\uFF09**\u6700\u9AD8\u7684\u6570\u636E\uFF0C\u4EE5\u8FD9\u4E2A\u6570\u636E\u505A\u76F8\u5173\u5EA6\u6392\u5E8F\uFF0C\u6BD4\u5982\u4E0B\u9762\u8BED\u53E5\uFF0C\u4F1A\u6839\u636Ename\u5B57\u6BB5\u548Cremark\u5B57\u6BB5\uFF0C\u770B\u54EA\u4E2A_score\u5206\u6570\u9AD8\uFF0C\u5C31\u4F1A\u6309\u7167\u54EA\u4E2A\u6392\u5E8F\u3002</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code>GET /es_db/_search
<span class="token punctuation">{</span>
  <span class="token property">&quot;query&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;dis_max&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;queries&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
          <span class="token property">&quot;match&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;rod&quot;</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          <span class="token property">&quot;match&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;remark&quot;</span><span class="token operator">:</span> <span class="token string">&quot;java developer&quot;</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div><h3 id="\u57FA\u4E8Etie-breaker\u53C2\u6570\u4F18\u5316dis-max\u641C\u7D22\u6548\u679C" tabindex="-1"><a class="header-anchor" href="#\u57FA\u4E8Etie-breaker\u53C2\u6570\u4F18\u5316dis-max\u641C\u7D22\u6548\u679C" aria-hidden="true">#</a> \u57FA\u4E8Etie_breaker\u53C2\u6570\u4F18\u5316dis_max\u641C\u7D22\u6548\u679C</h3><p>dis_max\u662F\u5C06\u591A\u4E2A\u641C\u7D22\u6761\u4EF6\u4E2Dquery\u6761\u4EF6\u4E2D\u76F8\u5173\u5EA6\u5206\u6570\u6700\u9AD8\u7684\u7528\u4E8E\u7ED3\u679C\u6392\u5E8F\uFF0C\u5FFD\u7565\u5176\u4ED6query\u5206\u6570\uFF0C\u5728\u67D0\u4E9B\u60C5\u51B5\u4E0B\uFF0C\u53EF\u80FD\u8FD8\u9700\u8981\u5176\u4ED6query\u6761\u4EF6\u7684\u76F8\u5173\u5EA6\u4ECB\u5165\u6700\u7EC8\u7ED3\u679C\u6392\u5E8F\uFF0C\u8FD9\u4E2A\u65F6\u5019\u53EF\u4EE5\u4F7F\u7528tie_breaker\u53C2\u6570\u4F18\u5316dis_max\u3002</p><p>tie_breaker\u53C2\u6570\u7684\u542B\u4E49\u662F\uFF1A\u5C06\u5176\u4ED6query\u6761\u4EF6\u7684\u76F8\u5173\u5EA6\u5206\u6570\u4E58\u4EE5\u53C2\u6570\u503C\uFF0C\u518D\u53C2\u4E0E\u5230\u7ED3\u679C\u6392\u5E8F\u4E2D\u3002\u5982\u679C\u4E0D\u6307\u5B9A\u8FD9\u4E2A\u53C2\u6570\uFF0C\u9ED8\u8BA4\u4E3A0\uFF0C\u5176\u4ED6\u7684query\u6761\u4EF6\u7684\u76F8\u5173\u5EA6\u4E5F\u5C31\u88AB\u5FFD\u7565\u3002</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code>GET /es_db/_search
<span class="token punctuation">{</span>
  <span class="token property">&quot;query&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;dis_max&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;queries&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
          <span class="token property">&quot;match&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;rod&quot;</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          <span class="token property">&quot;match&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;remark&quot;</span><span class="token operator">:</span> <span class="token string">&quot;java developer&quot;</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token property">&quot;tie_breaker&quot;</span><span class="token operator">:</span><span class="token number">0.5</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br></div></div><h3 id="\u4F7F\u7528multi-match\u7B80\u5316dis-max-tie-breaker" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528multi-match\u7B80\u5316dis-max-tie-breaker" aria-hidden="true">#</a> \u4F7F\u7528multi_match\u7B80\u5316dis_max + tie_breaker</h3><p>es\u4E2D\u53EF\u4EE5\u8FBE\u5230\u76F8\u540C\u6548\u679C\u7684\u8BED\u6CD5\u6709\u591A\u91CD\uFF0Cmulti_match\u53EF\u4EE5\u5927\u5E45\u5EA6\u7B80\u5316dis_max + tie_breaker\u6765\u5B9E\u73B0best fields\u7B56\u7565\u3002</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code># \u4E0D\u4F7F\u7528 multi_match
GET /es_db/_search
<span class="token punctuation">{</span>
  <span class="token property">&quot;query&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;dis_max&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;queries&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
          <span class="token property">&quot;match&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;rod&quot;</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          <span class="token property">&quot;match&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;remark&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
              <span class="token property">&quot;query&quot;</span><span class="token operator">:</span> <span class="token string">&quot;java developer&quot;</span><span class="token punctuation">,</span>
              <span class="token property">&quot;boost&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
              <span class="token property">&quot;minimum_should_match&quot;</span><span class="token operator">:</span> <span class="token number">2</span>
            <span class="token punctuation">}</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token property">&quot;tie_breaker&quot;</span><span class="token operator">:</span> <span class="token number">0.5</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

# \u4F7F\u7528 multi_match<span class="token punctuation">,</span>\u5176\u4E2Dtype\u5E38\u7528\u7684\u6709best_fields\u548Cmost_fields\u3002^n\u4EE3\u8868\u6743\u91CD\uFF0C \u76F8\u5F53\u4E8E<span class="token property">&quot;boost&quot;</span><span class="token operator">:</span>n\u3002 
GET /es_db/_search
<span class="token punctuation">{</span>
  <span class="token property">&quot;query&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
    <span class="token property">&quot;multi_match&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
      <span class="token property">&quot;query&quot;</span><span class="token operator">:</span><span class="token string">&quot;rod java developer&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;fields&quot;</span><span class="token operator">:</span><span class="token punctuation">[</span><span class="token string">&quot;name&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;remark^2&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token property">&quot;type&quot;</span><span class="token operator">:</span><span class="token string">&quot;best_fields&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;tie_breaker&quot;</span><span class="token operator">:</span><span class="token number">0.5</span><span class="token punctuation">,</span>
      <span class="token property">&quot;minimum_should_match&quot;</span><span class="token operator">:</span><span class="token string">&quot;50%&quot;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br></div></div><h2 id="cross-fields-\u7B56\u7565\u5B9E\u73B0" tabindex="-1"><a class="header-anchor" href="#cross-fields-\u7B56\u7565\u5B9E\u73B0" aria-hidden="true">#</a> cross fields \u7B56\u7565\u5B9E\u73B0</h2><p>cross fields\u7B56\u7565\uFF1A\u4E00\u4E2A\u552F\u4E00\u7684\u6807\u8BC6\uFF0C\u5206\u5E03\u5728\u591A\u4E2Afields\u4E2D\uFF0C\u4F7F\u7528\u8FD9\u79CD\u552F\u4E00\u8868\u793A\u641C\u7D22\u6570\u636E\u5C31\u662Fcross fields \u7B56\u7565\u3002\u6BD4\u5982\u4EBA\u540D\u5206\u4E3A\u59D3\u548C\u540D\uFF0C\u5730\u5740\u5206\u4E3A\u56FD\u5BB6\u3001\u7701\u3001\u5E02\u3001\u533A\u53BF\u3001\u8857\u9053\u3002\u90A3\u4E48\u4F7F\u7528\u4EBA\u540D\u6216\u8005\u5730\u5740\u641C\u7D22\u5C31\u662Fcross fields\uFF0C\u7C7B\u4F3C\u4E8E\u8054\u5408\u4E3B\u952E\u3002\u4F7F\u7528\u8FD9\u79CD\u7B56\u7565\u4E00\u822C\u90FD\u662F\u901A\u8FC7most fields\u7B56\u7565\u5B9E\u73B0\u3002</p><p>\u4F7F\u7528cross fields\u641C\u7D22\uFF0C\u90FD\u4F1A\u643A\u5E26\u4E00\u4E2Aoperator\u53C2\u6570\uFF0C\u7528\u6765\u6807\u8BB0\u591A\u4E2A\u5B57\u6BB5\u7684\u5339\u914D\u6761\u4EF6\u3002</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code>GET /es_db/_search
<span class="token punctuation">{</span>
  <span class="token property">&quot;query&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
    <span class="token property">&quot;multi_match&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
      <span class="token property">&quot;query&quot;</span><span class="token operator">:</span><span class="token string">&quot;java developer&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;fields&quot;</span><span class="token operator">:</span><span class="token punctuation">[</span><span class="token string">&quot;name&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;remark&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token property">&quot;type&quot;</span><span class="token operator">:</span><span class="token string">&quot;cross_fields&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;operator&quot;</span><span class="token operator">:</span> <span class="token string">&quot;and&quot;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p><strong>\u5728\u4F7F\u7528 most fields \u548C cross fields\u641C\u7D22\u65F6\uFF0C\u7531\u4E8E\u4E0D\u80FD\u4F7F\u7528 minimum_should_match\u8FDB\u884C\u53BB\u9664\u957F\u5C3E\u6570\u636E\uFF0C\u56E0\u6B64\u6D89\u53CA\u5230\u7CBE\u786E\u641C\u7D22\u7684\u6392\u5E8F\u95EE\u9898\u3002\u5728\u4F7F\u7528most fields\u7B56\u7565\u548Cbest fields\u7B56\u7565\u65F6\uFF0C\u90FD\u6709\u4E0D\u540C\u7684\u4F18\u7F3A\u70B9\uFF0C\u5728\u5B9E\u9645\u9879\u76EE\u5F00\u53D1\u4E2D\uFF0C\u4E00\u822C\u90FD\u63A8\u8350\u4F7F\u7528best fields\u8FDB\u884C\u641C\u7D22\u3002</strong></p><h2 id="copy-to-\u7EC4\u5408fields" tabindex="-1"><a class="header-anchor" href="#copy-to-\u7EC4\u5408fields" aria-hidden="true">#</a> copy_to \u7EC4\u5408fields</h2><p>\u6709\u4EE5\u4E0B\u573A\u666F\uFF0C\u9700\u8981\u5728\u7535\u5546\u9879\u76EE\u4E2D\u641C\u7D22\u624B\u673A\uFF0C\u90A3\u4E48\u9700\u8981\u5728\u5546\u54C1\u540D\u79F0\u3001\u5546\u54C1\u5356\u70B9\u3001\u5546\u54C1\u7C7B\u578B\u3001\u5546\u54C1\u63CF\u8FF0\u54EA\u4E2A\u5B57\u6BB5\u4E2D\u8FDB\u884C\u641C\u7D22\u5462\uFF1F\u663E\u7136\u4F7F\u7528_all\u8FDB\u884C\u5168\u5B57\u6BB5\u7684\u641C\u7D22\u4E5F\u662F\u4E0D\u884C\u7684\uFF0C\u56E0\u4E3A\u5168\u5B57\u6BB5\u8FD8\u5305\u542B\u56FE\u7247\u3001\u4EF7\u683C\u7B49\u4E00\u7CFB\u5217\u4E0D\u76F8\u5173\u7684\u5B57\u6BB5\u3002</p><p><strong>copy_to\uFF1A\u5C06\u6307\u5B9A\u7684\u591A\u4E2A\u5B57\u6BB5\uFF0C\u590D\u5236\u5230\u4E00\u4E2A\u5B57\u6BB5\u4E2D\uFF0C\u5B9E\u73B0\u4E00\u4E2A\u5B57\u6BB5\u7684\u7EC4\u5408\u641C\u7D22\u3002\u540C\u65F6 copy_to \u8FD8\u80FD\u89E3\u51B3 cross field \u7B56\u7565\u7684\u95EE\u9898\u3002\u5728\u9879\u76EE\u4E2D\u4E5F\u5E38\u7528\u4E8E\u89E3\u51B3\u641C\u7D22\u6761\u4EF6\u9ED8\u8BA4\u5B57\u6BB5\u7684\u95EE\u9898</strong>\u3002</p><p>\u4F7F\u7528copy_to\u8BED\u6CD5\uFF0C\u9700\u8981\u5728\u5B9A\u4E49index\u7684\u65F6\u5019\u624B\u52A8\u6307\u5B9A\u9759\u6001mapping\u6620\u5C04\u7B56\u7565\u3002</p><p>\u4E0B\u9762\u7684\u4F8B\u5B50\uFF0Cprovice\u3001city\u3001street\u5B57\u6BB5\u4F1A\u5728PUT\u7684\u65F6\u5019\u81EA\u52A8\u590D\u5236\u5230adress\u5B57\u6BB5\u4E2D\uFF0C\u4E0D\u9700\u8981\u624B\u52A8\u7EF4\u62A4\uFF0C\u641C\u7D22\u7684\u65F6\u5019\u53EF\u4EE5\u76F4\u63A5\u5728adress\u6761\u4EF6\u4E2D\u505A\u5339\u914D\u3002</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code># \u793A\u4F8B\u6570\u636E
<span class="token punctuation">{</span>
  <span class="token property">&quot;category_name&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;\u624B\u673A&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;product_name&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;\u4E00\u52A06T\u624B\u673A&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;price&quot;</span> <span class="token operator">:</span> <span class="token number">568800</span><span class="token punctuation">,</span>
  <span class="token property">&quot;sell_point&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;\u56FD\u4EA7\u6700\u597D\u7684Android\u624B\u673A&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;tags&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;8G+128G&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;256G\u53EF\u6269\u5C55&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">&quot;color&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;\u7EA2\u8272&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;keyword&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;\u624B\u673A \u4E00\u52A06T\u624B\u673A \u56FD\u4EA7\u6700\u597D\u7684Android\u624B\u673A&quot;</span>
<span class="token punctuation">}</span>

# copy_to \u8BED\u6CD5
PUT /es_db/_mapping
<span class="token punctuation">{</span>
  <span class="token property">&quot;properties&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
    <span class="token property">&quot;provice&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span><span class="token property">&quot;type&quot;</span><span class="token operator">:</span><span class="token string">&quot;text&quot;</span><span class="token punctuation">,</span><span class="token property">&quot;analyzer&quot;</span><span class="token operator">:</span><span class="token string">&quot;standard&quot;</span><span class="token punctuation">,</span><span class="token property">&quot;copy_to&quot;</span><span class="token operator">:</span><span class="token string">&quot;address_a&quot;</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">&quot;city&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span><span class="token property">&quot;type&quot;</span><span class="token operator">:</span><span class="token string">&quot;text&quot;</span><span class="token punctuation">,</span><span class="token property">&quot;analyzer&quot;</span><span class="token operator">:</span><span class="token string">&quot;standard&quot;</span><span class="token punctuation">,</span><span class="token property">&quot;copy_to&quot;</span><span class="token operator">:</span><span class="token string">&quot;address_a&quot;</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">&quot;street&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span><span class="token property">&quot;type&quot;</span><span class="token operator">:</span><span class="token string">&quot;text&quot;</span><span class="token punctuation">,</span><span class="token property">&quot;analyzer&quot;</span><span class="token operator">:</span><span class="token string">&quot;standard&quot;</span><span class="token punctuation">,</span><span class="token property">&quot;copy_to&quot;</span><span class="token operator">:</span><span class="token string">&quot;address_a&quot;</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">&quot;address_a&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span><span class="token property">&quot;type&quot;</span><span class="token operator">:</span><span class="token string">&quot;text&quot;</span><span class="token punctuation">,</span><span class="token property">&quot;analyzer&quot;</span><span class="token operator">:</span><span class="token string">&quot;standard&quot;</span><span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div></div><h1 id="\u8FD1\u4F3C\u5339\u914D" tabindex="-1"><a class="header-anchor" href="#\u8FD1\u4F3C\u5339\u914D" aria-hidden="true">#</a> \u8FD1\u4F3C\u5339\u914D</h1><h2 id="match-phrase-\u5E38\u7528" tabindex="-1"><a class="header-anchor" href="#match-phrase-\u5E38\u7528" aria-hidden="true">#</a> match phrase\uFF08\u5E38\u7528\uFF09</h2><h3 id="match-phrase-\u539F\u7406" tabindex="-1"><a class="header-anchor" href="#match-phrase-\u539F\u7406" aria-hidden="true">#</a> match_phrase \u539F\u7406</h3><p>\u77ED\u8BED\u641C\u7D22\uFF0C\u4E0D\u8FDB\u884C\u5206\u8BCD\uFF0C\u641C\u7D22\u6761\u4EF6\u4E0D\u53EF\u5206\u5272\u3002\u901A\u8FC7\u5982\u4E0B\u8BED\u6CD5\u53EF\u4EE5\u5B9E\u73B0\u77ED\u8BED\u641C\u7D22\uFF1A</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code>GET _search
<span class="token punctuation">{</span>
  <span class="token property">&quot;query&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
    <span class="token property">&quot;match_phrase&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
      <span class="token property">&quot;remark&quot;</span><span class="token operator">:</span><span class="token string">&quot;java assistant&quot;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>\u4F7F\u7528match_phrase\u8FDB\u884C\u77ED\u8BED\u68C0\u7D22\u65F6\uFF0C\u540C\u6837\u4E5F\u662F\u5982match\u4E00\u6837\uFF0C\u5012\u6392\u7D22\u5F15\u65F6\uFF0C\u9996\u5148\u4F7F\u7528_analyze\u8FDB\u884C\u5206\u8BCD\uFF0C\u5206\u8BCD\u7684\u540C\u65F6\u7531\u4E8E\u8FD8\u4F1A\u4FDD\u5B58\u4E00\u4E2Aposition\uFF0C\u4E5F\u5C31\u662F\u5206\u8BCD\u7D22\u5F15\u7684\u4E0B\u6807\u3002\u5982\u679C\u5206\u8BCD\u90FD\u5C5E\u4E8E\u540C\u4E00\u4E2Afield\uFF0C\u90A3\u4E48\u5224\u65ADposition\u662F\u5426\u8FDE\u7EED\uFF0C\u5982\u679C\u8FDE\u7EED\u5219\u5339\u914D\u6210\u529F\uFF0C\u5982\u679C\u4E0D\u8FDE\u7EED\u5339\u914D\u5931\u8D25\u3002</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code># \u5206\u8BCD\u8BED\u6CD5
GET _analyze
<span class="token punctuation">{</span>
  <span class="token property">&quot;text&quot;</span><span class="token operator">:</span><span class="token string">&quot;hello world,java spark&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;analyzer&quot;</span><span class="token operator">:</span><span class="token string">&quot;standard&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h3 id="slop\u53C2\u6570" tabindex="-1"><a class="header-anchor" href="#slop\u53C2\u6570" aria-hidden="true">#</a> slop\u53C2\u6570</h3><p>slop\u53C2\u6570\u53EF\u4EE5\u8BBE\u7F6Ematch_phrase\u641C\u7D22\u65F6\uFF0C\u77ED\u8BED\u5206\u8BCDposition\u53EF\u4EE5\u5411\u540E\u79FB\u52A8\u7684\u4F4D\u6570\uFF0C\u5982\u4E0B\u6240\u793A\uFF0C\u5982\u679C\u8BBE\u7F6Eslop=3\uFF0C\u90A3\u4E48\u5206\u8BCDposition\u95F4\u96943\u4E2A\u4F4D\u7F6E\u90FD\u662F\u88AB\u5141\u8BB8\u7684\uFF1A</p><table><thead><tr><th style="text-align:left;"><strong>match_phrase\uFF1A</strong></th><th style="text-align:left;">hello world</th><th style="text-align:left;"></th><th style="text-align:left;"></th><th style="text-align:left;"></th></tr></thead><tbody><tr><td style="text-align:left;"><strong>\u4E0B\u6807\uFF1A</strong></td><td style="text-align:left;">0</td><td style="text-align:left;">1</td><td style="text-align:left;">2</td><td style="text-align:left;">3</td></tr><tr><td style="text-align:left;"><strong>\u79FB\u52A81</strong></td><td style="text-align:left;">hello</td><td style="text-align:left;">world</td><td style="text-align:left;"></td><td style="text-align:left;"></td></tr><tr><td style="text-align:left;"><strong>\u79FB\u52A82</strong></td><td style="text-align:left;">hello</td><td style="text-align:left;">you</td><td style="text-align:left;">world</td><td style="text-align:left;"></td></tr><tr><td style="text-align:left;"><strong>\u79FB\u52A83</strong></td><td style="text-align:left;">hello</td><td style="text-align:left;">you</td><td style="text-align:left;">fuck</td><td style="text-align:left;">world</td></tr></tbody></table><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code>GET _search
<span class="token punctuation">{</span>
  <span class="token property">&quot;query&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
    <span class="token property">&quot;match_phrase&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
      <span class="token property">&quot;remark&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
        <span class="token property">&quot;query&quot;</span><span class="token operator">:</span> <span class="token string">&quot;java assistant&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;slop&quot;</span><span class="token operator">:</span> <span class="token number">3</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><h3 id="match\u548Cproximity-search\u914D\u5408\u5E73\u8861\u53EC\u56DE\u7387\u548C\u7CBE\u51C6\u5EA6" tabindex="-1"><a class="header-anchor" href="#match\u548Cproximity-search\u914D\u5408\u5E73\u8861\u53EC\u56DE\u7387\u548C\u7CBE\u51C6\u5EA6" aria-hidden="true">#</a> match\u548Cproximity search\u914D\u5408\u5E73\u8861\u53EC\u56DE\u7387\u548C\u7CBE\u51C6\u5EA6</h3><ul><li>\u53EC\u56DE\u7387\uFF1A\u641C\u7D22\u7ED3\u679C\u5448\u73B0\u7684\u6BD4\u7387\uFF0C\u53EC\u56DE\u7387\u8D8A\u9AD8\u641C\u7D22\u8FD4\u56DE\u7684\u7ED3\u679C\u8D8A\u591A\u3002</li><li>\u7CBE\u51C6\u5EA6\uFF1A\u641C\u7D22\u7ED3\u679C\u7684\u51C6\u786E\u7387\uFF0C\u53EC\u56DE\u7387\u4E00\u822C\u60C5\u51B5\u4E0B\u4E0E\u7CBE\u51C6\u5EA6\u6210\u53CD\u6BD4\u3002 \u5728\u5B9E\u9645\u5E94\u7528\u4E2D\uFF0C\u5982\u679C\u53EA\u4F7F\u7528match_phrase\u8FDB\u884Cproximity search\u7684\u8BDD\uFF0C\u4F1A\u5BFC\u81F4\u53EC\u56DE\u7387\u8FC7\u4F4E\uFF1B\u4F46\u662F\u5927\u8303\u56F4\u53EA\u4F7F\u7528match\u5C31\u4F1A\u5BFC\u81F4\u51C6\u786E\u7387\u4E0B\u964D\u3002\u901A\u5E38\u4E24\u8005\u7ED3\u5408\u4F7F\u7528\u3002</li></ul><p>\u5982\u4E0B\u6240\u793A\uFF0C<strong>\u4F7F\u7528 bool \u7EC4\u5408\u6761\u4EF6\uFF0C\u5BF9\u4E8E<strong><strong>\u5FC5\u987B</strong></strong>\u7684\u6761\u4EF6\u4F7F\u7528must\u548Cmatch\u8FDB\u884C\u5206\u8BCD\u641C\u7D22\uFF1B\u4F7F\u7528should\u548Cmatch_ph<strong><strong>r</strong></strong>a<strong><strong>s</strong></strong>e\u63D0\u9AD8\u641C\u7D22<strong><strong>\u8BCD\u7EC4</strong></strong>\u7684\u5F97\u5206</strong>\u3002</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code># \u7ED3\u5408\u4F7F\u7528match\u548Cmatch_phrase
GET /test_a/_search
<span class="token punctuation">{</span>
  <span class="token property">&quot;query&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;bool&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;must&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
          <span class="token property">&quot;match&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;f&quot;</span><span class="token operator">:</span> <span class="token string">&quot;java spark&quot;</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token property">&quot;should&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;match_phrase&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token property">&quot;f&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;query&quot;</span><span class="token operator">:</span> <span class="token string">&quot;java spark&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;slop&quot;</span><span class="token operator">:</span> <span class="token number">50</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
# \u6570\u636E\u51C6\u5907
POST /test_a/_doc/<span class="token number">3</span>
<span class="token punctuation">{</span>
  <span class="token property">&quot;f&quot;</span><span class="token operator">:</span><span class="token string">&quot;hello,java is very good,spark is also very good&quot;</span>
<span class="token punctuation">}</span>
POST /test_a/_doc/<span class="token number">4</span>
<span class="token punctuation">{</span>
  <span class="token property">&quot;f&quot;</span><span class="token operator">:</span><span class="token string">&quot;java and spark,development language&quot;</span>
<span class="token punctuation">}</span>
POST /test_a/_doc/<span class="token number">5</span>
<span class="token punctuation">{</span>
  <span class="token property">&quot;f&quot;</span><span class="token operator">:</span><span class="token string">&quot;Java Spark is a fast and general\u2010purpose cluster computing system.I t provides high\u2010level APIs in Java, Scala, Python and R, and an optimized engi ne that supports general execution graphs.&quot;</span>
<span class="token punctuation">}</span>
POST /test_a/_doc/<span class="token number">6</span>
<span class="token punctuation">{</span>
  <span class="token property">&quot;f&quot;</span><span class="token operator">:</span><span class="token string">&quot;java spark and,development language&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br></div></div><h2 id="\u524D\u7F00\u641C\u7D22-prefix-search" tabindex="-1"><a class="header-anchor" href="#\u524D\u7F00\u641C\u7D22-prefix-search" aria-hidden="true">#</a> \u524D\u7F00\u641C\u7D22 prefix search</h2><p>\u524D\u7F00\u641C\u7D22prefix search<strong>\u53EA\u9488\u5BF9keyword\u7C7B\u578B<strong><strong>\u7684</strong></strong>\u5B57\u6BB5</strong>\uFF0C\u4E5F\u5C31\u662F\u53EA\u80FD\u9488\u5BF9<strong>\u4E0D<strong><strong>\u5206\u8BCD</strong></strong>\u7684\u5B57\u6BB5\uFF0C\u800C\u4E14keyword\u5927\u5C0F\u5199\u654F\u611F</strong>\u3002\u524D\u7F00\u641C\u7D22\u6548\u7387\u4F4E\uFF0C<strong>\u4E0D\u8BA1\u7B97\u76F8\u5173\u5EA6\u5206\u6570</strong>\u3002\u524D\u7F00\u641C\u7D22\u9700\u8981\u626B\u63CF\u5B8C\u6574\u7684\u7D22\u5F15\u5185\u5BB9\uFF0C\u6548\u7387\u8F83\u4F4E\uFF0C\u5E76\u4E14<strong>\u4E0D\u5EFA\u8BAE****\u4F7F\u7528\u77ED\u524D\u7F00</strong>\u3002</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code>GET /test_a/_search
<span class="token punctuation">{</span>
  <span class="token property">&quot;query&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
    <span class="token property">&quot;prefix&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
      <span class="token property">&quot;f.keyword&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
        <span class="token property">&quot;value&quot;</span><span class="token operator">:</span><span class="token string">&quot;J&quot;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><h2 id="\u901A\u914D\u7B26\u641C\u7D22" tabindex="-1"><a class="header-anchor" href="#\u901A\u914D\u7B26\u641C\u7D22" aria-hidden="true">#</a> \u901A\u914D\u7B26\u641C\u7D22</h2><p>es\u7684\u901A\u914D\u7B26\u548Cjava\u7684\u4E0D\u592A\u4E00\u6837\uFF0C<strong>\u901A\u914D\u7B26\u652F\u6301\u5012\u6392\u7D22\u5F15</strong>\uFF0C\u4E5F\u652F\u6301keyword\u3002\u9700\u8981\u626B\u63CF\u5B8C\u6574\u7D22\u5F15\uFF0C\u6548\u7387\u4E5F\u6BD4\u8F83\u4F4E\uFF0C\u4E0D\u5EFA\u8BAE\u4F7F\u7528</p><ul><li>?\uFF1A\u4E00\u4E2A\u5B57\u7B26</li><li>*\uFF1A\u4EFB\u610F\u4E2A\u5B57\u7B26</li></ul><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code>GET /test_a/_search
<span class="token punctuation">{</span>
  <span class="token property">&quot;query&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
    <span class="token property">&quot;wildcard&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
      <span class="token property">&quot;f.keyword&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
        <span class="token property">&quot;value&quot;</span><span class="token operator">:</span><span class="token string">&quot;?e*o*&quot;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><h2 id="\u6B63\u5219\u641C\u7D22" tabindex="-1"><a class="header-anchor" href="#\u6B63\u5219\u641C\u7D22" aria-hidden="true">#</a> \u6B63\u5219\u641C\u7D22</h2><p>\u6B63\u5219\u7D22\u5F15\u4E5F\u662F\u9700\u8981\u626B\u63CF\u5B8C\u6574\u7D22\u5F15\uFF0C\u6548\u7387\u6BD4\u8F83\u4F4E\uFF0C\u4E5F\u4E0D\u5EFA\u8BAE\u4F7F\u7528\u3002</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code>GET /test_a/_search
<span class="token punctuation">{</span>
  <span class="token property">&quot;query&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
    <span class="token property">&quot;regexp&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
      <span class="token property">&quot;f.keyword&quot;</span><span class="token operator">:</span><span class="token string">&quot;[A\u2010z].+&quot;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h2 id="fuzzy\u6A21\u7CCA\u641C\u7D22" tabindex="-1"><a class="header-anchor" href="#fuzzy\u6A21\u7CCA\u641C\u7D22" aria-hidden="true">#</a> fuzzy\u6A21\u7CCA\u641C\u7D22</h2><p>fuzzy\u6A21\u7CCA\u641C\u7D22\u6280\u672F\u662F<strong>\u89E3\u51B3\u62FC\u5199\u9519\u8BEF</strong>\u8FD9\u79CD\u60C5\u51B5\u7684\u3002\u5176\u4E2Dfuzziness\u7684value\u503C\u4EE3\u8868\u641C\u7D22\u7684\u8F93\u5165\u6700\u591A\u53EF\u4EE5\u9519\u8BEF\u591A\u5C11\u4E2A\u5B57\u6BCD\u3002</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code>GET /test_a/_search
<span class="token punctuation">{</span>
  <span class="token property">&quot;query&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
    <span class="token property">&quot;fuzzy&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
      <span class="token property">&quot;f&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
        <span class="token property">&quot;value&quot;</span><span class="token operator">:</span><span class="token string">&quot;word&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;fuzziness&quot;</span><span class="token operator">:</span><span class="token number">2</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><h2 id="\u641C\u7D22\u63A8\u8350" tabindex="-1"><a class="header-anchor" href="#\u641C\u7D22\u63A8\u8350" aria-hidden="true">#</a> \u641C\u7D22\u63A8\u8350</h2><p>\u7C7B\u4F3C\u4E8E\u767E\u5EA6\u641C\u7D22\uFF0C<strong>\u8F93\u5165<strong><strong>\u67D0\u4E2A</strong></strong>\u8BCD\u8FDB\u884C\u5173\u8054\u63D0\u793A</strong>\u3002\u539F\u7406\u4E0Ematch_phrase\u7C7B\u4F3C\uFF0C\u9996\u5148\u4F7F\u7528match\u5BF9\u5DF2\u7ECF\u8F93\u5165\u7684\u5206\u8BCD\u8FDB\u884Cterm\uFF0C\u7136\u540E\u5728\u6307\u5B9A\u7684slop\u79FB\u52A8\u8303\u56F4\u5185\uFF0C\u8FDB\u884C\u524D\u7F00\u5339\u914D\uFF08\u53EA\u6709\u6700\u540E\u4E00\u4E2Aterm\u7684\u5206\u8BCD\u6267\u884C\u524D\u7F00\u5339\u914D\uFF09\u3002max_expansions\u7528\u4E8E\u6307\u5B9A\u6700\u591A\u5339\u914D\u591A\u5C11\u4E2A\u5355\u8BCD\uFF0C\u8D85\u8FC7\u8FD9\u4E2A\u6570\u91CF\u5C31\u4E0D\u518D\u5339\u914D\u4E86\u3002</p><p>\u6548\u7387\u6BD4\u8F83\u4F4E\uFF0C\u5982\u679C\u4E00\u5B9A\u8981\u4F7F\u7528\u7684\u8BDD\uFF0C\u4E00\u5B9A\u914D\u5408max_expansions\u3002</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code>GET /test_a/_search
<span class="token punctuation">{</span>
  <span class="token property">&quot;query&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
    <span class="token property">&quot;match_phrase_prefix&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
      <span class="token property">&quot;f&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
        <span class="token property">&quot;query&quot;</span><span class="token operator">:</span><span class="token string">&quot;java s&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;slop&quot;</span><span class="token operator">:</span><span class="token number">10</span><span class="token punctuation">,</span>
        <span class="token property">&quot;max_expansions&quot;</span><span class="token operator">:</span><span class="token number">10</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><h1 id="\u5206\u9875\u67E5\u8BE2" tabindex="-1"><a class="header-anchor" href="#\u5206\u9875\u67E5\u8BE2" aria-hidden="true">#</a> \u5206\u9875\u67E5\u8BE2</h1><h2 id="from\u548Csize\u5206\u9875" tabindex="-1"><a class="header-anchor" href="#from\u548Csize\u5206\u9875" aria-hidden="true">#</a> from\u548Csize\u5206\u9875</h2><ul><li>from\uFF1A\u6307\u5B9A\u4ECE\u7B2C\u591A\u5C11\u6761\u6570\u636E\u5F00\u59CB\u67E5</li><li>size\uFF1A\u6307\u5B9A\u6BCF\u9875\u591A\u5C11\u6570\u636E</li><li>\u67E5\u8BE2\u6570\u636E\u91CF\u57281w-5w\u5DE6\u53F3\u6BD4\u8F83ok\uFF0C\u5927\u6570\u636E\u91CF\u4E0B\u4E0D\u592A\u884C\uFF0C\u800C\u4E14es\u4E0D\u5141\u8BB8\u4F7F\u7528\u8FD9\u79CD\u65B9\u5F0F\u67E5\u8BE21w\u6761\u4EE5\u540E\u7684\u6570\u636E</li></ul><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code>POST /es_db/_doc/_search
<span class="token punctuation">{</span>
  <span class="token property">&quot;from&quot;</span><span class="token operator">:</span><span class="token number">0</span><span class="token punctuation">,</span>
  <span class="token property">&quot;size&quot;</span><span class="token operator">:</span><span class="token number">2</span><span class="token punctuation">,</span>
  <span class="token property">&quot;query&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
    <span class="token property">&quot;match&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
      <span class="token property">&quot;address&quot;</span><span class="token operator">:</span><span class="token string">&quot;\u5E7F\u5DDE\u5929\u6CB3&quot;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><h2 id="scroll\u5206\u9875" tabindex="-1"><a class="header-anchor" href="#scroll\u5206\u9875" aria-hidden="true">#</a> scroll\u5206\u9875</h2><p>\u5728\u8FDB\u884C\u5927\u91CF\u5206\u9875\u65F6\uFF0C\u6BCF\u6B21\u5206\u9875\u90FD\u9700\u8981\u5C06\u8981\u67E5\u8BE2\u7684\u6570\u636E\u8FDB\u884C\u91CD\u65B0\u6392\u5E8F\uFF0C\u8FD9\u6837\u975E\u5E38\u6D6A\u8D39\u6027\u80FD\u3002scroll\u662F\u5C06\u8981\u7528\u7684\u6570\u636E\u4E00\u6B21\u6027\u6392\u597D\uFF0C\u7136\u540E\u5206\u6279\u53D6\u51FA\uFF0C<strong>scroll\u4E4B\u540E\uFF0C\u6392\u5E8F<strong><strong>\u7684</strong></strong>\u6570\u636E\u4F1A<strong><strong>\u4FDD\u5B58\u4E00\u5B9A</strong></strong>\u7684<strong><strong>\u65F6\u95F4</strong></strong>\uFF0C\u540E\u7EED\u7684\u67E5\u8BE2\u90FD\u662F\u4ECE\u5FEB\u7167\u4E2D\u53D6\u51FA</strong>\u3002<strong>\u7B2C\u4E00\u6B21\u67E5\u8BE2\u540E\uFF0C\u4F1A\u4EA7\u751F\u4E00\u4E2Ascroll_id\uFF0C\u8FD9\u4E2A<strong><strong>\u5C31\u662F\u67E5\u8BE2</strong></strong>\u7684<strong><strong>\u5FEB\u7167\u53F7</strong></strong>\uFF0C\u540E\u7EED<strong><strong>\u7684</strong></strong>\u67E5\u8BE2\u9700\u8981\u57FA\u4E8E\u6B64\u53F7\u8FDB\u884C</strong>\u3002</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code># \u8BA9\u6392\u5E8F\u65F6\u95F4\u4FDD\u63011min
GET /es_db/_search?scroll=1m 
<span class="token punctuation">{</span>
  <span class="token property">&quot;query&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
    <span class="token property">&quot;multi_match&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;query&quot;</span><span class="token operator">:</span><span class="token string">&quot;\u5E7F\u5DDE\u957F\u6C99\u5F20\u4E09&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;fields&quot;</span><span class="token operator">:</span><span class="token punctuation">[</span><span class="token string">&quot;address&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;name&quot;</span><span class="token punctuation">]</span> 
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;size&quot;</span><span class="token operator">:</span><span class="token number">100</span>
<span class="token punctuation">}</span>

# <span class="token property">&quot;_scroll_id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;DXF1ZXJ5QW5kRmV0Y2gBAAAAAAAAAZEWY2VQZXBia1JTVkdhTWkwSl9GaUYtQQ==&quot;</span> 

# \u7B2C\u4E8C\u6B21\u76F4\u63A5\u4F7F\u7528scroll id
GET _search/scroll?scroll=1m
<span class="token punctuation">{</span>
  <span class="token property">&quot;scroll_id&quot;</span><span class="token operator">:</span><span class="token string">&quot;DXF1ZXJ5QW5kRmV0Y2gBAAAAAAAAAZoWY2VQZXBia1JTVkdhTWkwSl9GaUYtQQ==&quot;</span> 
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div><h1 id="\u5EFA\u8BAE\u641C\u7D22" tabindex="-1"><a class="header-anchor" href="#\u5EFA\u8BAE\u641C\u7D22" aria-hidden="true">#</a> \u5EFA\u8BAE\u641C\u7D22</h1><p>\u5EFA\u8BAE\u641C\u7D22\u6307\u7684\u662F\u7C7B\u4F3C\u4E8E\u767E\u5EA6\u90A3\u6837\u7684\u8054\u60F3\u63D0\u793A\u529F\u80FD\uFF0Ces\u5B9E\u73B0\u5EFA\u8BAE\u641C\u7D22\u7684\u6027\u80FD\u975E\u5E38\u7684\u9AD8\uFF0C\u5176\u6784\u5EFA\u7684\u4E0D\u662F\u5012\u6392\u7D22\u5F15\uFF0C\u4E5F\u4E0D\u662F\u6B63\u6392\u7D22\u5F15\uFF0C\u5C31\u662F<strong>\u7EAF\u7CB9\u8FDB\u884C\u524D\u7F00\u641C\u7D22\u7684\u4E00\u79CD\u7279\u6B8A\u6570\u636E\u7ED3\u6784</strong>\uFF0C<strong>\u5E76\u4E14<strong><strong>\u5168\u90E8\u653E\u5728</strong></strong>\u5185\u5B58\u4E2D</strong>\uFF0C\u4F7F\u7528<strong>\u5EFA\u8BAE\u641C\u7D22\uFF08suggest search\uFF09\u505A\u8054\u60F3\u63D0\u793A\u6027\u80FD\u5F88\u597D</strong>\u3002</p><p>\u8981\u4F7F\u7528\u5EFA\u8BAE\u641C\u7D22\uFF0C\u9700\u8981\u5728\u5B9A\u4E49index\u65F6\uFF0C\u6307\u5B9Amapping\u5E76\u4E14\u5F00\u542Fsuggest\uFF1A</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code># \u5F00\u542F\u5EFA\u8BAE\u641C\u7D22
PUT /movie
<span class="token punctuation">{</span>
  <span class="token property">&quot;mappings&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
    <span class="token property">&quot;properties&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;title&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;type&quot;</span><span class="token operator">:</span><span class="token string">&quot;text&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;analyzer&quot;</span><span class="token operator">:</span><span class="token string">&quot;ik_max_word&quot;</span><span class="token punctuation">,</span> 
        <span class="token property">&quot;fields&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
          <span class="token property">&quot;suggest&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;type&quot;</span><span class="token operator">:</span><span class="token string">&quot;completion&quot;</span><span class="token punctuation">,</span> 
            <span class="token property">&quot;analyzer&quot;</span><span class="token operator">:</span><span class="token string">&quot;ik_max_word&quot;</span> 
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token property">&quot;content&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;type&quot;</span><span class="token operator">:</span><span class="token string">&quot;text&quot;</span><span class="token punctuation">,</span> 
        <span class="token property">&quot;analyzer&quot;</span><span class="token operator">:</span><span class="token string">&quot;ik_max_word&quot;</span> 
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
# \u6570\u636E\u51C6\u5907
PUT /movie/_doc/<span class="token number">1</span>
<span class="token punctuation">{</span>
  <span class="token property">&quot;title&quot;</span><span class="token operator">:</span><span class="token string">&quot;\u897F\u6E38\u8BB0\u7535\u5F71\u7CFB\u5217&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;content&quot;</span><span class="token operator">:</span><span class="token string">&quot;\u897F\u6E38\u8BB0\u4E4B\u6708\u5149\u5B9D\u76D2\u5C06\u4E0E2021\u5E74\u8FDB\u884C......&quot;</span>
<span class="token punctuation">}</span>

PUT /movie/_doc/<span class="token number">2</span>
<span class="token punctuation">{</span>
  <span class="token property">&quot;title&quot;</span><span class="token operator">:</span><span class="token string">&quot;\u897F\u6E38\u8BB0\u6587\u5B66\u7CFB\u5217&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;content&quot;</span><span class="token operator">:</span><span class="token string">&quot;\u67D0\u77E5\u540D\u7F51\u7EDC\u5C0F\u8BF4\u4F5C\u5BB6\u5DF2\u7ECF\u5B8C\u6210\u4E86\u5927\u8BDD\u897F\u6E38\u540C\u540D\u5C0F\u8BF4\u7684\u51FA\u7248&quot;</span>
<span class="token punctuation">}</span>

PUT /movie/_doc/<span class="token number">3</span>
<span class="token punctuation">{</span>
  <span class="token property">&quot;title&quot;</span><span class="token operator">:</span><span class="token string">&quot;\u897F\u6E38\u8BB0\u4E4B\u5927\u8BDD\u897F\u6E38\u624B\u6E38&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;content&quot;</span><span class="token operator">:</span><span class="token string">&quot;\u7F51\u6613\u6E38\u620F\u8FD1\u65E5\u51FA\u54C1\u4E86\u5927\u8BDD\u897F\u6E38\u7ECF\u5178IP\u7684\u624B\u6E38\uFF0C\u6B63\u5728\u706B\u7206\u5185\u6D4B\u4E2D&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br></div></div><p>\u5EFA\u8BAE\u641C\u7D22\u5728\u5B9E\u9645\u6267\u884C\u641C\u7D22\u65F6\uFF0C\u4E5F\u9700\u8981\u7528\u5176\u7279\u6B8A\u7684\u8BED\u6CD5</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code>GET /movie/_search
<span class="token punctuation">{</span>
  <span class="token property">&quot;suggest&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
    <span class="token property">&quot;my\u2010suggest&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
      <span class="token property">&quot;prefix&quot;</span><span class="token operator">:</span><span class="token string">&quot;\u897F\u6E38\u8BB0&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;completion&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
        <span class="token property">&quot;field&quot;</span><span class="token operator">:</span><span class="token string">&quot;title.suggest&quot;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div>`,85);function U(B,J){const s=o("RouterLink");return r(),l(u,null,[b,n("nav",k,[n("ul",null,[n("li",null,[a(s,{to:"#\u5339\u914D\u7CBE\u5EA6\u63A7\u5236"},{default:p(()=>[m]),_:1})]),n("li",null,[a(s,{to:"#match\u5E95\u5C42\u8F6C\u6362"},{default:p(()=>[q]),_:1})]),n("li",null,[a(s,{to:"#boost\u6743\u91CD\u63A7\u5236"},{default:p(()=>[d]),_:1})]),n("li",null,[a(s,{to:"#best-fields-\u7B56\u7565\u5B9E\u73B0"},{default:p(()=>[h]),_:1}),n("ul",null,[n("li",null,[a(s,{to:"#\u57FA\u4E8Edis-max\u5B9E\u73B0best-fields\u7B56\u7565\u8FDB\u884C\u591A\u5B57\u6BB5\u641C\u7D22"},{default:p(()=>[g]),_:1})]),n("li",null,[a(s,{to:"#\u57FA\u4E8Etie-breaker\u53C2\u6570\u4F18\u5316dis-max\u641C\u7D22\u6548\u679C"},{default:p(()=>[y]),_:1})]),n("li",null,[a(s,{to:"#\u4F7F\u7528multi-match\u7B80\u5316dis-max-tie-breaker"},{default:p(()=>[_]),_:1})])])]),n("li",null,[a(s,{to:"#cross-fields-\u7B56\u7565\u5B9E\u73B0"},{default:p(()=>[f]),_:1})]),n("li",null,[a(s,{to:"#copy-to-\u7EC4\u5408fields"},{default:p(()=>[v]),_:1})]),n("li",null,[a(s,{to:"#match-phrase-\u5E38\u7528"},{default:p(()=>[x]),_:1}),n("ul",null,[n("li",null,[a(s,{to:"#match-phrase-\u539F\u7406"},{default:p(()=>[j]),_:1})]),n("li",null,[a(s,{to:"#slop\u53C2\u6570"},{default:p(()=>[T]),_:1})]),n("li",null,[a(s,{to:"#match\u548Cproximity-search\u914D\u5408\u5E73\u8861\u53EC\u56DE\u7387\u548C\u7CBE\u51C6\u5EA6"},{default:p(()=>[z]),_:1})])])]),n("li",null,[a(s,{to:"#\u524D\u7F00\u641C\u7D22-prefix-search"},{default:p(()=>[G]),_:1})]),n("li",null,[a(s,{to:"#\u901A\u914D\u7B26\u641C\u7D22"},{default:p(()=>[E]),_:1})]),n("li",null,[a(s,{to:"#\u6B63\u5219\u641C\u7D22"},{default:p(()=>[w]),_:1})]),n("li",null,[a(s,{to:"#fuzzy\u6A21\u7CCA\u641C\u7D22"},{default:p(()=>[A]),_:1})]),n("li",null,[a(s,{to:"#\u641C\u7D22\u63A8\u8350"},{default:p(()=>[P]),_:1})]),n("li",null,[a(s,{to:"#from\u548Csize\u5206\u9875"},{default:p(()=>[S]),_:1})]),n("li",null,[a(s,{to:"#scroll\u5206\u9875"},{default:p(()=>[V]),_:1})])])]),Q],64)}var X=e(i,[["render",U]]);export{X as default};
