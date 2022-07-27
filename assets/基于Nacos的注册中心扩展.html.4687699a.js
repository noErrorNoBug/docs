import{_ as s,e as n}from"./app.f91ceced.js";const a={},e=n(`<div class="custom-container info"><p class="custom-container-title">\u76F8\u5173\u4FE1\u606F</p><p>\u6587\u7AE0\u4ECB\u7ECD</p></div><nav class="table-of-contents"><ul></ul></nav><hr><h1 id="client\u914D\u7F6E\u9879" tabindex="-1"><a class="header-anchor" href="#client\u914D\u7F6E\u9879" aria-hidden="true">#</a> Client\u914D\u7F6E\u9879</h1><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>spring<span class="token operator">:</span>
  application<span class="token operator">:</span>
    name<span class="token operator">:</span> pearl<span class="token operator">-</span>test
  cloud<span class="token operator">:</span>
    nacos<span class="token operator">:</span>
      discovery<span class="token operator">:</span>
        # \u662F\u5426\u5F00\u542F<span class="token class-name">Nacos</span>\u6CE8\u518C
        enabled<span class="token operator">:</span> <span class="token boolean">true</span>
        # <span class="token class-name">Nacos</span>\u670D\u52A1\u6CE8\u518C\u5730\u5740
        server<span class="token operator">-</span>addr<span class="token operator">:</span> localhost<span class="token operator">:</span><span class="token number">8848</span>
        # <span class="token class-name">Nacos</span> \u8BA4\u8BC1\u7528\u6237
        username<span class="token operator">:</span> nacos
        # <span class="token class-name">Nacos</span> \u8BA4\u8BC1\u5BC6\u7801
        password<span class="token operator">:</span> <span class="token number">123456</span>
        # \u914D\u7F6E\u547D\u540D\u7A7A\u95F4ID
        namespace<span class="token operator">:</span> ba42e722<span class="token operator">-</span><span class="token number">81</span>aa<span class="token operator">-</span><span class="token number">48f</span><span class="token number">1</span><span class="token operator">-</span><span class="token number">9944</span><span class="token operator">-</span><span class="token number">9d</span>ca57d5f396
        # \u5206\u7EC4\u540D\u79F0
        group<span class="token operator">:</span> PEARL_GROUP
        # \u8FDE\u63A5<span class="token class-name">Nacos</span> <span class="token class-name">Server</span>\u6307\u5B9A\u7684\u8FDE\u63A5\u70B9
        #endpoint<span class="token operator">:</span> localhost
        # \u8BBE\u7F6E\u6CE8\u518C\u65F6\u672C\u670D\u52A1IP\u5730\u5740
        #ip<span class="token operator">:</span> <span class="token number">127.0</span><span class="token number">.0</span><span class="token number">.1</span>
        # nacos\u5BA2\u6237\u7AEF\u5411\u670D\u52A1\u7AEF\u53D1\u9001\u5FC3\u8DF3\u7684\u65F6\u95F4\u95F4\u9694\uFF0C\u5355\u4F4Ds
        #heart<span class="token operator">-</span>beat<span class="token operator">-</span>interval<span class="token operator">:</span> <span class="token number">5</span>
        # \u96C6\u7FA4\u540D\u79F0
        #cluster<span class="token operator">-</span>name<span class="token operator">:</span> DEFAULT
        # \u5FC3\u8DF3\u8D85\u65F6\u65F6\u95F4\uFF0C\u5355\u4F4Ds
        #heart<span class="token operator">-</span>beat<span class="token operator">-</span>timeout<span class="token operator">:</span> <span class="token number">15</span>
        # \u662F\u5426\u6CE8\u518C\u670D\u52A1\uFF0C\u9ED8\u8BA4\u4E3A<span class="token boolean">true</span>
        #register<span class="token operator">-</span>enabled<span class="token operator">:</span> <span class="token boolean">true</span>
        # \u5F53\u8981\u4E0A\u963F\u91CC\u4E91\u65F6\uFF0C\u963F\u91CC\u4E91\u4E0A\u9762\u7684\u4E00\u4E2A\u4E91\u8D26\u53F7\u540D
        #access<span class="token operator">-</span>key<span class="token operator">:</span>
        # \u5F53\u8981\u4E0A\u963F\u91CC\u4E91\u65F6\uFF0C\u963F\u91CC\u4E91\u4E0A\u9762\u7684\u4E00\u4E2A\u4E91\u8D26\u53F7\u5BC6\u7801
        #secret<span class="token operator">-</span>key<span class="token operator">:</span>
        # nacos\u5BA2\u6237\u7AEF\u65E5\u5FD7\u540D\uFF0C\u9ED8\u8BA4naming<span class="token punctuation">.</span>log<span class="token operator">:</span>
        #log<span class="token operator">-</span>name<span class="token operator">:</span>
        # \u670D\u52A1\u5143\u6570\u636E\u6807\u7B7E
        #metadata<span class="token operator">:</span>
        # \u670D\u52A1\u8D85\u65F6\u65F6\uFF0C\u591A\u5C11\u79D2\u540E\u5220\u9664
        #ip<span class="token operator">-</span>delete<span class="token operator">-</span>timeout<span class="token operator">:</span> <span class="token number">30</span>
        # \u8D1F\u8F7D\u5747\u8861\u6743\u91CD\uFF0C\u9ED8\u8BA4<span class="token number">1</span><span class="token punctuation">,</span>\u53D6\u503C\u8303\u56F4 <span class="token number">1</span> \u5230 <span class="token number">100</span>\uFF0C\u6570\u503C\u8D8A\u5927\uFF0C\u6743\u91CD\u8D8A\u5927
        #weight<span class="token operator">:</span> <span class="token number">1</span>
        # \u76D1\u89C6\u5EF6\u8FDF\uFF0C\u4ECEnacos\u670D\u52A1\u5668\u62C9\u53D6\u65B0\u670D\u52A1\u7684\u6301\u7EED\u65F6\u95F4<span class="token punctuation">,</span>\u5355\u4F4Dms
        #watch<span class="token operator">-</span>delay<span class="token operator">:</span> <span class="token number">30000</span>
        # \u6CE8\u518C\u670D\u52A1\u65F6\u7684\u670D\u52A1\u540D<span class="token punctuation">,</span>\u9ED8\u8BA4$<span class="token punctuation">{</span>spring<span class="token punctuation">.</span>application<span class="token punctuation">.</span>name<span class="token punctuation">}</span>
        #service<span class="token operator">:</span> pearl<span class="token operator">-</span>service
        # \u670D\u52A1\u662F\u5426\u662Fhttps
        #secure<span class="token operator">:</span> <span class="token boolean">false</span>
        # \u6CE8\u518C\u65F6\u672C\u670D\u52A1\u7684\u7AEF\u53E3\uFF0C\u65E0\u9700\u8BBE\u7F6E\uFF0C\u81EA\u52A8\u63A2\u6D4B
        #port<span class="token operator">:</span> <span class="token number">8088</span>
        # \u9009\u62E9\u56FA\u5B9A\u7F51\u5361
        #network<span class="token operator">-</span><span class="token keyword">interface</span><span class="token operator">:</span> eth0
        # \u662F\u5426\u4ECE\u672C\u5730\u7F13\u5B58\u4E2D\uFF0C\u9ED8\u8BA4<span class="token boolean">false</span>
        #naming<span class="token operator">-</span>load<span class="token operator">-</span>cache<span class="token operator">-</span>at<span class="token operator">-</span>start<span class="token operator">:</span> <span class="token boolean">false</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br></div></div><hr><p>\u53C2\u8003</p><ul><li>Spring Cloud Alibaba \u5FAE\u670D\u52A1\u539F\u7406\u4E0E\u5B9E\u6218[\u8C2D\u5CF0(mic)]. \u4E2D\u56FD\u5DE5\u4FE1\u51FA\u7248\u793E,\u7535\u5B50\u5DE5\u4E1A\u51FA\u7248\u793E</li></ul>`,8);function p(r,o){return e}var t=s(a,[["render",p]]);export{t as default};
