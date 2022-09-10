import{_ as a,r,o,a as s,d as l,b as i,w as t,F as d,e as h,f as n}from"./app.7eb989d9.js";const u={},c=l("div",{class:"custom-container info"},[l("p",{class:"custom-container-title"},"\u76F8\u5173\u4FE1\u606F"),l("p",null,"\u6587\u7AE0\u4ECB\u7ECD")],-1),g={class:"table-of-contents"},f=n("\u8868\u5355\u63D0\u4EA4\u65F6\u7684\u5173\u952E\u5C5E\u6027\uFF08\u524D\u7AEF\u63A7\u4EF6\uFF09"),p=n("\u6B65\u9AA4"),_=n("HTTP Range\u89C4\u8303"),b=n("Range \u6761\u4EF6\u8BF7\u6C42"),m=h('<hr><h1 id="\u4E0D\u80FD\u643A\u5E26\u5305\u4F53\u7684\u65B9\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u4E0D\u80FD\u643A\u5E26\u5305\u4F53\u7684\u65B9\u6CD5" aria-hidden="true">#</a> \u4E0D\u80FD\u643A\u5E26\u5305\u4F53\u7684\u65B9\u6CD5</h1><ul><li>HEAD\u65B9\u6CD5</li><li>1xx\uFF0C204\uFF0C304\u54CD\u5E94</li><li>CONNECT\u5BF9\u5E94\u76842xx\u7684\u54CD\u5E94</li></ul><h1 id="\u5B9A\u957F\u5305\u4F53\u4F20\u8F93" tabindex="-1"><a class="header-anchor" href="#\u5B9A\u957F\u5305\u4F53\u4F20\u8F93" aria-hidden="true">#</a> \u5B9A\u957F\u5305\u4F53\u4F20\u8F93</h1><p><strong>\u5982\u679C\u53D1\u9001Http\u8BF7\u6C42\u4E4B\u524D\u80FD\u591F\u786E\u5B9A\u5305\u4F53\u7684\u957F\u5EA6\uFF0C\u90A3\u4E48\u53EF\u4EE5\u91C7\u7528\u5B9A\u957F\u5305\u4F53\u53D1\u9001\u7684\u65B9\u5F0F\uFF0C\u9700\u8981\u5728Header-field\u4E2D\u6307\u660E\u5B57\u6BB5Content-Length\u6765\u8BF4\u660E\u5305\u4F53\u957F\u5EA6</strong>\u3002</p><ul><li>Content-Length = 1*DIGIT <ul><li>\u6CE8\u610F\u662F10\u8FDB\u5236\u7684\uFF0C\u8868\u793A\u5B57\u8282\u4E2A\u6570</li><li><strong>\u957F\u5EA6\u5FC5\u987B\u8981\u4E0E\u5305\u4F53\u957F\u5EA6\u4E00\u81F4\uFF0C\u5982\u679CContent-Length\u5C0F\u4E8E\u5B9E\u9645\u957F\u5EA6\uFF0CTCP\u5C42\u9762\u4F1A\u4F20\u9012\u5B8C\u6574\u7684\u6570\u636E\uFF0C\u4F46\u662FHttp\u5C42\u9762\u53EA\u4F1A\u89E3\u6790\u8BBE\u7F6E\u957F\u5EA6\u7684\u6570\u636E\uFF0C\u9020\u6210\u6570\u636E\u4E22\u5931\uFF1B\u5982\u679C\u8BBE\u7F6E\u7684\u957F\u5EA6\u5927\u4E8E\u5B9E\u9645\u957F\u5EA6\uFF0C\u5C06\u65E0\u6CD5\u89E3\u6790Http\u8BF7\u6C42</strong>\u3002 \u4F18\u70B9\u662F\u63A5\u6536\u7AEF\u5904\u7406\u6BD4\u8F83\u7B80\u5355\u3002</li></ul></li></ul><h1 id="\u4E0D\u5B9A\u957F\u5305\u4F53\u4F20\u8F93" tabindex="-1"><a class="header-anchor" href="#\u4E0D\u5B9A\u957F\u5305\u4F53\u4F20\u8F93" aria-hidden="true">#</a> \u4E0D\u5B9A\u957F\u5305\u4F53\u4F20\u8F93</h1><p><strong>\u5982\u679C\u53D1\u9001\u65F6\u4E0D\u80FD\u786E\u5B9A\u957F\u5EA6\uFF0C\u90A3\u4E48\u4F7F\u7528Transfer-Encoding\u5934\u90E8\u6307\u660E\u4F7F\u7528Chunk\u65B9\u5F0F\uFF0C\u540C\u65F6\u542B\u6709Transfer-Encoding\u5934\u90E8\u7684\u8BF7\u6C42\u4F1A\u81EA\u52A8\u5FFD\u7565\u6389Content-Length\u5934\u90E8</strong>\u3002</p><p>\u4E0D\u5B9A\u957F\u5305\u4F53\u4F20\u8F93\u6709\u4EE5\u4E0B\u7684\u597D\u5904\uFF1A</p><ul><li>\u57FA\u4E8E\u957F\u8FDE\u63A5\u6301\u7EED\u63A8\u9001\u4FE1\u606F</li><li>\u538B\u7F29\u4EA4\u5927\u7684\u5305\u4F53\u65F6\uFF0C\u53EF\u4EE5\u8BA1\u7B97\u51FA\u5934\u90E8\u540E\uFF0C\u4E00\u8FB9\u53D1\u9001\u4E00\u8FB9\u7EE7\u7EED\u538B\u7F29</li><li>\u4F20\u9012\u5FC5\u987B\u5728\u5305\u4F53\u4F20\u8F93\u5B8C\u6210\u624D\u80FD\u8BA1\u7B97\u51FATrailer\u5934\u90E8</li></ul><h1 id="html-form\u8868\u5355\u63D0\u4EA4\u5305\u4F53\u683C\u5F0F" tabindex="-1"><a class="header-anchor" href="#html-form\u8868\u5355\u63D0\u4EA4\u5305\u4F53\u683C\u5F0F" aria-hidden="true">#</a> HTML form\u8868\u5355\u63D0\u4EA4\u5305\u4F53\u683C\u5F0F</h1><h2 id="\u8868\u5355\u63D0\u4EA4\u65F6\u7684\u5173\u952E\u5C5E\u6027-\u524D\u7AEF\u63A7\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u8868\u5355\u63D0\u4EA4\u65F6\u7684\u5173\u952E\u5C5E\u6027-\u524D\u7AEF\u63A7\u4EF6" aria-hidden="true">#</a> \u8868\u5355\u63D0\u4EA4\u65F6\u7684\u5173\u952E\u5C5E\u6027\uFF08\u524D\u7AEF\u63A7\u4EF6\uFF09</h2><ul><li><strong>action\uFF1A\u63D0\u4EA4Http\u8BF7\u6C42\u7684uri</strong></li><li><strong>method\uFF1AHttp\u8BF7\u6C42\u7684method</strong><ul><li><strong>GET\uFF1A\u8868\u5355\u901A\u8FC7URI\u53C2\u6570\u7684\u65B9\u5F0F\u63D0\u4EA4</strong></li><li><strong>POST\uFF1A\u5C06\u8868\u5355\u653E\u5728\u8BF7\u6C42\u4F53\u4E2D\u63D0\u4EA4</strong></li></ul></li><li><strong>enctype\uFF1A\u5728POST\u65B9\u6CD5\u4E0B\uFF0C\u6307\u5B9A\u8868\u5355\u5185\u5BB9\u5728\u8BF7\u6C42\u4F53\u4E2D\u7684\u7F16\u7801\u65B9\u5F0F</strong><ul><li>application/x-www-form-urlencoded\uFF1A\u7528&quot;&amp;&quot;\u5206\u5272\u7684\u952E\u503C\u5BF9\uFF0C\u4EE5URL\u7F16\u7801\u65B9\u5F0F\u8FDB\u884C\u7F16\u7801</li><li>multipart/form-data\uFF1A\u4F7F\u7528boundary\u5206\u9694\u7B26\uFF0C\u6BCF\u4E00\u4E2A\u90E8\u5206\u90FD\u6709\u4E00\u4E2AHTTP\u5934\u90E8\u63CF\u8FF0\u7684\u5B50\u5305\u4F53\uFF0C\u7528last-boundary\u7ED3\u5C3E</li><li>application/json\uFF1A\u4EE5json\u65B9\u5F0F\u8FDB\u884C\u7F16\u7801</li></ul></li></ul><h1 id="range\u8BF7\u6C42-\u65AD\u70B9\u7EED\u4F20\u3001\u591A\u7EBF\u7A0B\u3001\u968F\u673A\u70B9\u64AD\u573A\u666F" tabindex="-1"><a class="header-anchor" href="#range\u8BF7\u6C42-\u65AD\u70B9\u7EED\u4F20\u3001\u591A\u7EBF\u7A0B\u3001\u968F\u673A\u70B9\u64AD\u573A\u666F" aria-hidden="true">#</a> Range\u8BF7\u6C42\uFF08\u65AD\u70B9\u7EED\u4F20\u3001\u591A\u7EBF\u7A0B\u3001\u968F\u673A\u70B9\u64AD\u573A\u666F\uFF09</h1><h2 id="\u6B65\u9AA4" tabindex="-1"><a class="header-anchor" href="#\u6B65\u9AA4" aria-hidden="true">#</a> \u6B65\u9AA4</h2><ol><li>\u5BA2\u6237\u7AEF\u660E\u786E\u4EFB\u52A1\uFF1A\u4ECE\u54EA\u513F\u5F00\u59CB\u4E0B\u8F7D\uFF1F <ul><li>\u672C\u5730\u662F\u5426\u5DF2\u6709\u90E8\u5206\u6587\u4EF6\uFF1F</li><li>\u672C\u5730\u5DF2\u6709\u7684\u6587\u4EF6\u5728\u670D\u52A1\u7AEF\u662F\u5426\u53D1\u751F\u6539\u53D8\uFF1F</li><li>\u4F7F\u7528\u51E0\u4E2A\u7EBF\u7A0B\u5E76\u53D1\u4E0B\u8F7D\uFF1F</li></ul></li><li>\u4E0B\u8F7D\u6587\u4EF6\u7684\u6307\u5B9A\u90E8\u5206\u5185\u5BB9</li><li>\u4E0B\u8F7D\u5B8C\u6210\u540E\u7EDF\u4E00\u62FC\u88C5</li></ol><h2 id="http-range\u89C4\u8303" tabindex="-1"><a class="header-anchor" href="#http-range\u89C4\u8303" aria-hidden="true">#</a> HTTP Range\u89C4\u8303</h2><ul><li>\u5141\u8BB8\u670D\u52A1\u5668\u57FA\u4E8E\u5BA2\u6237\u7AEF\u7684\u8BF7\u6C42\u53EA\u53D1\u9001\u54CD\u5E94\u5305\u4F53\u7684\u4E00\u90E8\u5206\u5230\u5BA2\u6237\u7AEF\uFF0C\u5BA2\u6237\u7AEF\u81EA\u52A8\u5C06\u591A\u4E2A\u7247\u6BB5\u7684\u5305\u4F53\u7EC4\u5408\u6210\u66F4\u5927\u7684\u5B8C\u6574\u7684\u5305\u4F53\u3002 <ul><li>\u652F\u6301\u65AD\u70B9\u7EED\u4F20</li><li>\u652F\u6301\u591A\u7EBF\u7A0B\u4E0B\u8F7D</li><li>\u652F\u6301\u89C6\u9891\u64AD\u653E\u5668\u5B9E\u65F6\u62D6\u52A8</li></ul></li><li><strong>\u901A\u8FC7Accept-Range\u5934\u90E8\u8868\u8FF0\u662F\u5426\u652F\u6301Range\u8BF7\u6C42</strong><ul><li>Accept-Range = acceptable-ranges</li><li>\u4F8B\u5982\uFF1AAccept-Range : bytes \u8868\u793A\u652F\u6301\uFF0CAccept-Ranges:none \u8868\u793A\u4E0D\u652F\u6301</li></ul></li><li>\u53EF\u4EE5\u901A\u8FC7\u4EE5\u4E0B\u7684\u65B9\u5F0F\u8868\u793A\u8BF7\u6C42\u5305\u4F53\u7684\u8303\u56F4\uFF08\u5047\u8BBE\u957F\u5EA610000\u5B57\u8282\uFF09\uFF1A <ul><li>\u7B2C1\u4E2A500\u5B57\u8282\uFF1Abytes=0-499</li><li>\u7B2C2\u4E2A500\u5B57\u8282\uFF1A <ul><li>bytes=500-999</li><li>bytes=500-600,601-999</li><li>bytes=500-700,601-999</li></ul></li><li>\u6700\u540E\u4E00\u4E2A500\u5B57\u8282\uFF1A <ul><li>bytes=-500</li><li>bytes=9500-</li></ul></li><li>\u4EC5\u4EC5\u7B2C\u4E00\u4E2A\u548C\u6700\u540E\u4E00\u4E2A\u5B57\u8282\uFF1Abytes=0-0,-1</li></ul></li><li><strong>\u901A\u8FC7Range\u5934\u90E8\u8FDB\u884C\u5B57\u8282\u957F\u5EA6\u7684\u4F20\u9012</strong>\uFF1A <ul><li>\u5982Range:bytes=0-499</li></ul></li></ul><h2 id="range-\u6761\u4EF6\u8BF7\u6C42" tabindex="-1"><a class="header-anchor" href="#range-\u6761\u4EF6\u8BF7\u6C42" aria-hidden="true">#</a> Range \u6761\u4EF6\u8BF7\u6C42</h2><ul><li>\u5982\u679C\u5BA2\u6237\u7AEF\u5DF2\u7ECF\u5F97\u5230\u4E86Range\u54CD\u5E94\u7684\u4E00\u90E8\u5206\uFF0C\u5E76\u4E14\u60F3\u5728\u8FD9\u4E2A\u54CD\u5E94\u672A\u8FC7\u671F\u7684\u60C5\u51B5\u4E0B\uFF0C\u83B7\u53D6\u5176\u4ED6\u90E8\u5206\u7684\u54CD\u5E94\uFF1A <ul><li>\u5E38\u4E0E<strong>If-Unmodified-Since</strong> \u6216\u8005 <strong>If-Match \u5934\u90E8</strong>\u5171\u540C\u4F7F\u7528</li></ul></li><li><strong>If-Range = entity-tag / HTTP-date</strong><ul><li>\u53EF\u4EE5\u4F7F\u7528Etag\u6216\u8005Last-Modify</li></ul></li><li>\u5982\u679C\u5728\u6761\u4EF6\u83B7\u53D6\u8FC7\u7A0B\u4E2D\u51FA\u73B0412\u9519\u8BEF\uFF0C\u90A3\u4E48\u5C31\u662F\u54CD\u5E94\u5728\u670D\u52A1\u7AEF\u53D1\u751F\u4E86\u53D8\u5316\uFF0C\u5C31\u9700\u8981\u91CD\u65B0\u83B7\u53D6\u54CD\u5E94\u3002</li><li>\u5982\u679C\u53EA\u83B7\u53D6\u4E00\u90E8\u5206\u54CD\u5E94\uFF0C\u90A3\u4E48<strong>\u670D\u52A1\u7AEF\u8FD4\u56DE\u7684\u662F206\uFF0C\u5E76\u4E14\u8FD4\u56DEContent-Range\u5934\u90E8\uFF0C\u663E\u793A\u5F53\u524D\u7247\u6BB5\u5728\u5B8C\u6574\u5305\u4F53\u4E2D\u7684\u4F4D\u7F6E</strong>\u3002 <ul><li>\u4F8B\u5982\uFF1AContent-Range: bytes 42-1233/1234 \u8868\u793A42-1233\u5B57\u8282\uFF0C\u5B8C\u6574\u5305\u4F531234\u5B57\u8282</li></ul></li></ul>',20);function R(x,T){const e=r("RouterLink");return o(),s(d,null,[c,l("nav",g,[l("ul",null,[l("li",null,[i(e,{to:"#\u8868\u5355\u63D0\u4EA4\u65F6\u7684\u5173\u952E\u5C5E\u6027-\u524D\u7AEF\u63A7\u4EF6"},{default:t(()=>[f]),_:1})]),l("li",null,[i(e,{to:"#\u6B65\u9AA4"},{default:t(()=>[p]),_:1})]),l("li",null,[i(e,{to:"#http-range\u89C4\u8303"},{default:t(()=>[_]),_:1})]),l("li",null,[i(e,{to:"#range-\u6761\u4EF6\u8BF7\u6C42"},{default:t(()=>[b]),_:1})])])]),m],64)}var H=a(u,[["render",R]]);export{H as default};
