import{_ as n,r as u,o,a as r,d as l,b as e,w as t,F as s,e as d,f as a}from"./app.7eb989d9.js";const h={},c=l("div",{class:"custom-container info"},[l("p",{class:"custom-container-title"},"\u76F8\u5173\u4FE1\u606F"),l("p",null,"\u6587\u7AE0\u4ECB\u7ECD")],-1),p={class:"table-of-contents"},_=a("\u7F51\u7EDC\u72B6\u6001\u67E5\u770B"),f=a("\u7F51\u7EDC\u6545\u969C\u6392\u9664"),m=a("\u8FDB\u7A0B\u67E5\u770B"),x=a("\u4FE1\u53F7"),b=a("\u5185\u5B58\u4F7F\u7528\u67E5\u770B"),g=a("\u78C1\u76D8\u4F7F\u7528\u67E5\u770B"),k=d('<hr><h1 id="\u7F51\u7EDC\u7BA1\u7406" tabindex="-1"><a class="header-anchor" href="#\u7F51\u7EDC\u7BA1\u7406" aria-hidden="true">#</a> \u7F51\u7EDC\u7BA1\u7406</h1><h2 id="\u7F51\u7EDC\u72B6\u6001\u67E5\u770B" tabindex="-1"><a class="header-anchor" href="#\u7F51\u7EDC\u72B6\u6001\u67E5\u770B" aria-hidden="true">#</a> \u7F51\u7EDC\u72B6\u6001\u67E5\u770B</h2><p>\u7F51\u7EDC\u72B6\u6001\u67E5\u770B\u6709\u4E24\u5957\u5DE5\u5177\uFF0Cnet-tools\u548Ciproute</p><ul><li>net-tools <ul><li>ifconfig <ul><li>eth0\uFF1A\u7B2C\u4E00\u5757\u7F51\u5361\uFF08\u7F51\u7EDC\u63A5\u53E3\uFF09\uFF0C\u53EF\u80FD\u662F\u4EE5\u4E0B\u540D\u5B57 <ul><li>eno1\uFF1A\u677F\u8F7D\u7F51\u5361</li><li>ens33\uFF1APCI-E\u7F51\u5361</li><li>enp0s3\uFF1A\u65E0\u6CD5\u83B7\u53D6\u7269\u7406\u4FE1\u606F\u7684PCI-E\u7F51\u5361</li><li>\u4EE5\u4E0A\u90FD\u4E0D\u5339\u914D\u5219\u4F7F\u7528\u901A\u7528\u540Deth0</li></ul></li><li>inet\uFF1A\u7F51\u5361\u7684ip\u5730\u5740</li><li>ether\uFF1A\u7F51\u5361\u7684mac\u5730\u5740</li></ul></li><li>mii-tool eth0\uFF1A\u67E5\u770B\u7F51\u5361\u7684\u7269\u7406\u8FDE\u63A5\u60C5\u51B5</li><li>route -n\uFF1A\u67E5\u770B\u7F51\u5173\uFF0C-n\u53C2\u6570\u4E0D\u89E3\u6790\u4E3B\u673A\u540D <ul><li>Destination\uFF1A\u76EE\u7684\u5730\u5730\u5740 <ul><li>default\uFF1A\u9ED8\u8BA4\u7F51\u5173</li></ul></li></ul></li></ul></li></ul><h2 id="\u7F51\u7EDC\u6545\u969C\u6392\u9664" tabindex="-1"><a class="header-anchor" href="#\u7F51\u7EDC\u6545\u969C\u6392\u9664" aria-hidden="true">#</a> \u7F51\u7EDC\u6545\u969C\u6392\u9664</h2><ul><li>ping\uFF1A\u68C0\u6D4B\u5F53\u524D\u4E3B\u673A\u548C\u76EE\u6807\u4E3B\u673A\u662F\u5426\u7545\u901A <ul><li>ping \u57DF\u540D</li><li>ping ip</li></ul></li><li>traceroute\uFF1A\u68C0\u6D4B\u5F53\u524D\u4E3B\u673A\u548C\u76EE\u6807\u4E3B\u673A\u7684\u7F51\u7EDC\u72B6\u51B5\uFF0C\u8F85\u52A9ping\uFF0C\u8FFD\u8E2A\u8DEF\u7531\uFF0C\u8FFD\u8E2A\u6BCF\u4E00\u7968\u7684\u7F51\u7EDC\u8D28\u91CF <ul><li>-w\uFF1A\u8D85\u65F6\u7B49\u5F85\u65F6\u95F4\uFF0C\u8D85\u65F6\u540E\u4E0D\u518D\u7B49\u5F85</li><li>traceroute -w 1 \u57DF\u540D/ip</li></ul></li><li>mtr\uFF1A\u68C0\u6D4B\u5F53\u524D\u4E3B\u673A\u548C\u76EE\u6807\u4E3B\u673A\u7684\u7F51\u7EDC\u72B6\u51B5\uFF0C\u8F85\u52A9ping\uFF0C\u68C0\u67E5\u662F\u5426\u6709\u4E22\u5305 <ul><li>\u76F4\u63A5\u6267\u884C\uFF0C\u663E\u793A\u81EA\u5DF1\u4E3B\u673A\u7684\u66F4\u8BE6\u7EC6\u4FE1\u606F</li></ul></li><li>nslookup\uFF1A\u67E5\u770B\u57DF\u540D\u5BF9\u5E94\u7684ip <ul><li>nslookup \u57DF\u540D</li></ul></li><li>telnet\uFF1A\u68C0\u67E5\u7AEF\u53E3\u7684\u8FDE\u63A5\u72B6\u6001 <ul><li>telnet \u57DF\u540D/ip \u7AEF\u53E3\u53F7</li></ul></li><li>tcpdump\uFF1A\u5206\u6790tcp\u6570\u636E\u5305 <ul><li>tcpdump -i any -n port\uFF1A\u6293\u53D6\u5168\u90E8\u7F51\u5361(-i)\u7684\u4EFB\u610F\u57DF\u540D(any)\u5E76\u4E14\u89E3\u6790\u4E3Aip(-n)\u7684\u6307\u5B9Aport\u7684\u5305</li><li>tcpdump -i any -n host\uFF1A\u6293\u53D6\u5168\u90E8\u7F51\u5361(-i)\u7684\u4EFB\u610F\u57DF\u540D(any)\u5E76\u4E14\u89E3\u6790\u4E3Aip(-n)\u7684\u6307\u5B9Ahost\u7684\u5305</li></ul></li><li>netstat -ntpl\uFF1A\u67E5\u770B\u76D1\u542C\u5730\u5740\u72B6\u6001 <ul><li>-n\uFF1A\u663E\u793A\u5730\u5740\u4E0D\u663E\u793A\u57DF\u540D</li><li>-t\uFF1Atcp\u7684\u65B9\u5F0F</li><li>-p\uFF1A\u663E\u793A\u7AEF\u53E3\u5BF9\u5E94\u7684\u8FDB\u7A0B\u53F7</li><li>-l\uFF1Atcp\u72B6\u6001\u4E3A\u76D1\u542C\u7684</li></ul></li></ul><h1 id="\u8FDB\u7A0B\u7BA1\u7406" tabindex="-1"><a class="header-anchor" href="#\u8FDB\u7A0B\u7BA1\u7406" aria-hidden="true">#</a> \u8FDB\u7A0B\u7BA1\u7406</h1><h2 id="\u8FDB\u7A0B\u67E5\u770B" tabindex="-1"><a class="header-anchor" href="#\u8FDB\u7A0B\u67E5\u770B" aria-hidden="true">#</a> \u8FDB\u7A0B\u67E5\u770B</h2><ul><li>ps\uFF1A\u67E5\u770B\u8FDB\u7A0B\u72B6\u6001 <ul><li>ps -eLf | greb \u67E5\u8BE2\u6761\u4EF6\uFF1A\u67E5\u627E\u7279\u5B9A\u8FDB\u7A0B\u7684\u8FDB\u7A0B\u548C\u7EBF\u7A0B\u4FE1\u606F <ul><li>PID\uFF1A\u8FDB\u7A0B\u7F16\u53F7</li><li>PPID\uFF1A\u7531-f\u53C2\u6570\u63A7\u5236\uFF0C\u7236\u8FDB\u7A0B\u7F16\u53F7</li><li>LWP\uFF1A\u7531-L\u53C2\u6570\u63A7\u5236\uFF0C\u663E\u793A\u8F7B\u91CF\u7EA7\u8FDB\u7A0B\u7F16\u53F7\uFF0C\u5373\u7EBF\u7A0B\u4E2A\u6570</li></ul></li></ul></li><li>pstree\uFF1A\u67E5\u770B\u8FDB\u7A0B\u7684\u6811\u5F62\u7ED3\u6784</li><li>top\uFF1A\u663E\u793A\u8FDB\u7A0B\u4FE1\u606F\u548C\u7CFB\u7EDF\u4FE1\u606F <ul><li>top -p pid\u7F16\u53F7\uFF1A\u67E5\u770B\u67D0\u4E2A\u8FDB\u7A0B\u7684\u72B6\u6001</li><li>xxx min\uFF1A\u6700\u8FD1\u4E00\u6B21\u5F00\u673A\u5230\u73B0\u5728\u7684\u65F6\u95F4</li><li>xxx users\uFF1A\u7528\u6237\u4E2A\u6570</li><li>load average\uFF1A\u5E73\u5747\u8D1F\u8F7D\uFF0C\u767E\u5206\u6BD4\uFF0C\u5206\u522B\u4E3A1min\uFF0C5min\uFF0C15min\u7684\u5E73\u5747\u8D1F\u8F7D</li><li>tasks\uFF1A\u8FDB\u7A0B\u6570\u7EDF\u8BA1</li><li>CPU\uFF1Acpu\u72B6\u6001</li><li>men\uFF1A\u5185\u5B58\u72B6\u6001</li><li>swap\uFF1A\u78C1\u76D8\u72B6\u6001</li></ul></li></ul><h2 id="\u4FE1\u53F7" tabindex="-1"><a class="header-anchor" href="#\u4FE1\u53F7" aria-hidden="true">#</a> \u4FE1\u53F7</h2><ul><li>kill\uFF1A <ul><li>-l\uFF1A\u67E5\u770B\u6240\u6709\u4FE1\u53F7</li><li>-9 PID\uFF1A\u7ED3\u675F\u8FDB\u7A0B</li></ul></li></ul><h1 id="\u78C1\u76D8\u548C\u5185\u5B58\u7BA1\u7406" tabindex="-1"><a class="header-anchor" href="#\u78C1\u76D8\u548C\u5185\u5B58\u7BA1\u7406" aria-hidden="true">#</a> \u78C1\u76D8\u548C\u5185\u5B58\u7BA1\u7406</h1><h2 id="\u5185\u5B58\u4F7F\u7528\u67E5\u770B" tabindex="-1"><a class="header-anchor" href="#\u5185\u5B58\u4F7F\u7528\u67E5\u770B" aria-hidden="true">#</a> \u5185\u5B58\u4F7F\u7528\u67E5\u770B</h2><ul><li>free\uFF1A\u67E5\u770B\u6574\u4F53\u5185\u5B58\u72B6\u51B5 <ul><li>-m\uFF1A\u4EE5M\u4E3A\u5355\u4F4D\u663E\u793A</li><li>-g\uFF1A\u4EE5G\u4E3A\u5355\u4F4D\u663E\u793A</li></ul></li><li>top\uFF1A\u4F7F\u7528\u65B9\u6CD5\u5982\u4E0A\uFF0C\u53EF\u4EE5\u67E5\u770B\u5177\u4F53\u67D0\u4E2A\u8FDB\u7A0B\u7684\u4F7F\u7528\u72B6\u51B5</li></ul><h2 id="\u78C1\u76D8\u4F7F\u7528\u67E5\u770B" tabindex="-1"><a class="header-anchor" href="#\u78C1\u76D8\u4F7F\u7528\u67E5\u770B" aria-hidden="true">#</a> \u78C1\u76D8\u4F7F\u7528\u67E5\u770B</h2><ul><li>fdisk\uFF1A\u65E2\u53EF\u4EE5\u67E5\u770B\u78C1\u76D8\uFF0C\u53C8\u53EF\u4EE5\u8FDB\u884C\u78C1\u76D8\u5206\u533A\uFF0C\u4E00\u822C\u522B\u7528 <ul><li>-l\uFF1A\u67E5\u770B\u78C1\u76D8\u72B6\u51B5</li></ul></li><li>df\uFF1A <ul><li>-f\uFF1A\u6309\u7167\u6587\u4EF6\u7CFB\u7EDF\u67E5\u770B\u78C1\u76D8\u4F7F\u7528</li></ul></li><li>du\uFF1A\u67E5\u770B\u6587\u4EF6\u5B9E\u9645\u5360\u7528\u7A7A\u95F4</li></ul>',17);function P(v,w){const i=u("RouterLink");return o(),r(s,null,[c,l("nav",p,[l("ul",null,[l("li",null,[e(i,{to:"#\u7F51\u7EDC\u72B6\u6001\u67E5\u770B"},{default:t(()=>[_]),_:1})]),l("li",null,[e(i,{to:"#\u7F51\u7EDC\u6545\u969C\u6392\u9664"},{default:t(()=>[f]),_:1})]),l("li",null,[e(i,{to:"#\u8FDB\u7A0B\u67E5\u770B"},{default:t(()=>[m]),_:1})]),l("li",null,[e(i,{to:"#\u4FE1\u53F7"},{default:t(()=>[x]),_:1})]),l("li",null,[e(i,{to:"#\u5185\u5B58\u4F7F\u7528\u67E5\u770B"},{default:t(()=>[b]),_:1})]),l("li",null,[e(i,{to:"#\u78C1\u76D8\u4F7F\u7528\u67E5\u770B"},{default:t(()=>[g]),_:1})])])]),k],64)}var I=n(h,[["render",P]]);export{I as default};
