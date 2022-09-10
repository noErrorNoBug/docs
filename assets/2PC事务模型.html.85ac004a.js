import{_ as n,r as s,o as r,a as d,d as l,b as e,w as a,F as c,e as o,f as t}from"./app.7eb989d9.js";var p="/docs/images/methodology/2PC\u539F\u7406.png";const h={},_=o('<div class="custom-container info"><p class="custom-container-title">\u76F8\u5173\u4FE1\u606F</p><p>\u2003\u2003\u5728\u8BF4\u5206\u5E03\u5F0F\u4E8B\u52A1\u6A21\u578B\u65F6\uFF0C\u9700\u8981\u7B80\u5355\u56DE\u987E\u4E00\u4E0B\u4E8B\u52A1\u7684ACID\u7279\u6027\uFF1A</p><ul><li>\u539F\u5B50\u6027\uFF1A\u4E00\u4E2A\u4E8B\u52A1\u5C31\u662F\u4E00\u4E2A\u4E0D\u53EF\u5206\u5272\u7684\u6700\u5C0F\u5355\u4F4D\uFF0C\u4E8B\u52A1\u4E2D\u7684\u64CD\u4F5C\u8981\u4E48\u5168\u90E8\u6210\u529F\uFF0C\u8981\u4E48\u5168\u90E8\u5931\u8D25\u3002</li><li>\u4E00\u81F4\u6027\uFF1A\u4E0D\u540C\u7528\u6237\u89C2\u5BDF\u4E8B\u52A1\u7684\u6570\u636E\u53D8\u5316\u5FC5\u987B\u662F\u4E00\u81F4\u7684\uFF0C\u5373\u4ECE\u4E00\u4E2A\u72B6\u6001\u8F6C\u6362\u5230\u53E6\u4E00\u4E2A\u72B6\u6001\uFF0C\u4E2D\u95F4\u72B6\u6001\u4E0D\u80FD\u88AB\u89C2\u5BDF\u5230\u3002</li><li>\u9694\u79BB\u6027\uFF1A\u4E00\u4E2A\u4E8B\u52A1\u7684\u6267\u884C\u4E0D\u80FD\u88AB\u53E6\u4E00\u4E2A\u4E8B\u7269\u5E72\u6270\uFF0C\u56E0\u6B64\u9694\u79BB\u7EA7\u522B\u5206\u4E3A\uFF1A\u8BFB\u672A\u63D0\u4EA4\u3001\u8BFB\u5DF2\u63D0\u4EA4(\u89E3\u51B3\u810F\u8BFB)\u3001\u53EF\u91CD\u590D\u8BFB(\u89E3\u51B3\u865A\u8BFB)\u3001\u4E32\u884C\u5316(\u89E3\u51B3\u5E7B\u8BFB)</li><li>\u6301\u4E45\u6027\uFF1A\u4E8B\u52A1\u4E00\u65E6\u63D0\u4EA4\uFF0C\u5BF9\u6570\u636E\u5E93\u7684\u6539\u53D8\u5E94\u8BE5\u662F\u6301\u4E45\u5316\u7684\u3002</li></ul><p>\u2003\u2003\u4E24\u9636\u6BB5\u63D0\u4EA4\u662F\u4E00\u79CD\u975E\u5E38\u57FA\u7840\u7684\u4FDD\u8BC1\u6570\u636E\u4E00\u81F4\u6027\u7684\u65B9\u6848\uFF0CZAB\u534F\u8BAE\u3001Raft\u534F\u8BAE\u7B49\u90FD\u662F\u901A\u8FC7\u4E24\u9636\u6BB5\u63D0\u4EA4\u4FDD\u8BC1\u6570\u636E\u4E00\u81F4\u6027\u3002</p><p>\u2003\u2003\u4E8B\u52A1\u7684\u63D0\u4EA4\u5206\u4E3A\u4E24\u4E2A\u9636\u6BB5\uFF0C\u9996\u5148\u662F<strong>\u63D0\u4EA4\u4E8B\u52A1\u8BF7\u6C42</strong>\u9636\u6BB5\uFF0C\u4E4B\u540E\u624D\u662F<strong>\u6267\u884C\u4E8B\u52A1\u63D0\u4EA4</strong>\u9636\u6BB5\u3002</p></div>',1),u={class:"table-of-contents"},f=t("\u9636\u6BB5\u4E00\uFF1A\u63D0\u4EA4\u4E8B\u52A1\u8BF7\u6C42"),m=t("\u9636\u6BB5\u4E8C\uFF1A\u6267\u884C\u4E8B\u52A1\u63D0\u4EA4"),g=t("\u6267\u884C\u4E8B\u52A1\u63D0\u4EA4"),k=t("\u4E2D\u65AD\u4E8B\u52A1"),x=t("\u4F18\u7F3A\u70B9"),b=o('<hr><p><img src="'+p+'" alt="2PC\u539F\u7406" loading="lazy"></p><h2 id="\u9636\u6BB5\u4E00-\u63D0\u4EA4\u4E8B\u52A1\u8BF7\u6C42" tabindex="-1"><a class="header-anchor" href="#\u9636\u6BB5\u4E00-\u63D0\u4EA4\u4E8B\u52A1\u8BF7\u6C42" aria-hidden="true">#</a> \u9636\u6BB5\u4E00\uFF1A\u63D0\u4EA4\u4E8B\u52A1\u8BF7\u6C42</h2><ol><li><p>\u4E8B\u52A1\u8BE2\u95EE\uFF1A \u4E8B\u52A1\u534F\u8C03\u8005\u5411\u6240\u6709\u4E8B\u52A1\u53C2\u4E0E\u8005\u53D1\u9001\u4E8B\u52A1\u5185\u5BB9\uFF0C\u8BE2\u95EE\u662F\u5426\u53EF\u4EE5\u6267\u884C\u4E8B\u52A1\u63D0\u4EA4\u64CD\u4F5C\uFF0C\u5E76\u5F00\u59CB\u7B49\u5F85\u5404\u53C2\u4E0E\u8005\u7684\u54CD\u5E94\u3002</p></li><li><p>\u6267\u884C\u4E8B\u52A1\uFF1A \u5404\u53C2\u4E0E\u8005\u8282\u70B9\u6267\u884C\u4E8B\u52A1\u64CD\u4F5C\uFF08\u4E0D\u63D0\u4EA4\uFF0C\u9501\u5B9A\u8D44\u6E90\uFF09\uFF0C\u5E76\u628Aundo\u548Credo\u65E5\u5FD7\u8BB0\u5F55\u5230\u4E8B\u52A1\u65E5\u5FD7\u4E2D\u3002</p></li><li><p>\u5404\u53C2\u4E0E\u8005\u5411\u4E8B\u52A1\u534F\u8C03\u8005\u53CD\u9988\u4E8B\u52A1\u8BE2\u95EE\u54CD\u5E94\uFF1A \u5982\u679C\u53C2\u4E0E\u8005\u6210\u529F\u6267\u884C\u4E86\u5B9E\u52A1\u64CD\u4F5C\uFF0C\u5C31\u53CD\u9988\u7ED9\u4E8B\u52A1\u534F\u8C03\u8005Yes\u54CD\u5E94\uFF0C\u8868\u793A\u4E8B\u52A1\u53EF\u4EE5\u6267\u884C\uFF1B\u5982\u679C\u53C2\u4E0E\u8005\u6CA1\u6709\u6267\u884C\u6210\u529F\u4E8B\u52A1\uFF0C\u53CD\u9988\u7ED9\u534F\u8C03\u8005NO\u54CD\u5E94\uFF0C\u8868\u793A\u4E8B\u52A1\u4E0D\u53EF\u4EE5\u6267\u884C\u3002</p></li></ol><h2 id="\u9636\u6BB5\u4E8C-\u6267\u884C\u4E8B\u52A1\u63D0\u4EA4" tabindex="-1"><a class="header-anchor" href="#\u9636\u6BB5\u4E8C-\u6267\u884C\u4E8B\u52A1\u63D0\u4EA4" aria-hidden="true">#</a> \u9636\u6BB5\u4E8C\uFF1A\u6267\u884C\u4E8B\u52A1\u63D0\u4EA4</h2><p>\u2003\u2003\u9636\u6BB5\u4E8C\u4E5F\u53EB\u505A\u6295\u7968\u9636\u6BB5\uFF0C\u5206\u4E3A\u4E24\u79CD\u7ED3\u679C\uFF1A\u6267\u884C\u4E8B\u52A1\u63D0\u4EA4\u548C\u4E2D\u65AD\u4E8B\u52A1\u3002</p><h3 id="\u6267\u884C\u4E8B\u52A1\u63D0\u4EA4" tabindex="-1"><a class="header-anchor" href="#\u6267\u884C\u4E8B\u52A1\u63D0\u4EA4" aria-hidden="true">#</a> \u6267\u884C\u4E8B\u52A1\u63D0\u4EA4</h3><p>\u2003\u2003\u5982\u679C\u6240\u6709\u7684\u53C2\u4E0E\u8005\u8FD4\u56DE\u7ED9\u534F\u8C03\u8005\u7684\u54CD\u5E94\u90FD\u662FYes\uFF0C\u90A3\u4E48\u5C31\u4F1A\u6267\u884C\u4E8B\u52A1\u63D0\u4EA4\uFF1A</p><ol><li><p>\u53D1\u9001\u63D0\u4EA4\u8BF7\u6C42\uFF1A \u534F\u8C03\u8005\u5411\u6240\u6709\u7684\u53C2\u4E0E\u8005\u8282\u70B9\u53D1\u9001 Commit \u8BF7\u6C42\u3002</p></li><li><p>\u4E8B\u52A1\u63D0\u4EA4\uFF1A \u53C2\u4E0E\u8005\u6536\u5230 Commit \u8BF7\u6C42\u540E\uFF0C\u4F1A\u6B63\u5F0F\u6267\u884C\u4E8B\u52A1\u63D0\u4EA4\u64CD\u4F5C\uFF0C\u5E76\u5728\u5B8C\u6210\u63D0\u4EA4\u4E4B\u540E\u91CA\u653E\u6574\u4E2A\u4E8B\u52A1\u6267\u884C\u671F\u95F4\u5360\u7528\u7684\u4E8B\u52A1\u8D44\u6E90\u3002</p></li><li><p>\u53CD\u9988\u4E8B\u52A1\u63D0\u4EA4\u7ED3\u679C\uFF1A \u53C2\u4E0E\u8005\u5B8C\u6210\u4E8B\u52A1\u63D0\u4EA4\u540E\uFF0C\u5411\u534F\u8C03\u8005\u53D1\u9001 Ack \u6D88\u606F\u3002</p></li><li><p>\u5B8C\u6210\u4E8B\u52A1\uFF1A \u534F\u8C03\u8005\u63A5\u6536\u5230\u6240\u6709\u53C2\u4E0E\u8005\u53CD\u9988\u7684Ack\u6D88\u606F\u540E\uFF0C\u5B8C\u6210\u4E8B\u52A1\u3002</p></li></ol><h3 id="\u4E2D\u65AD\u4E8B\u52A1" tabindex="-1"><a class="header-anchor" href="#\u4E2D\u65AD\u4E8B\u52A1" aria-hidden="true">#</a> \u4E2D\u65AD\u4E8B\u52A1</h3><p>\u2003\u2003\u4EFB\u4F55\u4E00\u4E2A\u53C2\u4E0E\u8005\u5411\u534F\u8C03\u8005\u53CD\u9988\u4E86\u4E00\u4E2ANO\u54CD\u5E94\uFF0C\u6216\u8005\u5728\u7B49\u5F85\u8D85\u65F6\u4E4B\u540E\uFF0C\u534F\u8C03\u8005\u5C1A\u65E0\u6CD5\u6536\u5230\u6240\u6709\u53C2\u4E0E\u8005\u7684\u54CD\u5E94\uFF0C\u90A3\u4E48\u4E8B\u52A1\u5C31\u4F1A\u4E2D\u65AD\uFF1A</p><ol><li><p>\u53D1\u9001\u56DE\u6EDA\u8BF7\u6C42\uFF1A \u534F\u8C03\u8005\u5411\u6240\u6709\u53C2\u4E0E\u8005\u8282\u70B9\u53D1\u51FArollback\u8BF7\u6C42\u3002</p></li><li><p>\u4E8B\u52A1\u56DE\u6EDA\uFF1A \u53C2\u4E0E\u8005\u63A5\u6536\u5230Rollback\u8BF7\u6C42\u540E\uFF0C\u4F1A\u5229\u7528\u5176\u5728\u9636\u6BB5\u4E00\u79CD\u7684Undo\u8BB0\u5F55\u4FE1\u606F\u6765\u6267\u884C\u4E8B\u52A1\u56DE\u6EDA\u64CD\u4F5C\uFF0C\u5E76\u5728\u5B8C\u6210\u56DE\u6EDA\u540E\u91CA\u653E\u6574\u4E2A\u4E8B\u52A1\u5468\u671F\u5360\u7528\u7684\u8D44\u6E90\u3002</p></li><li><p>\u53CD\u9988\u4E8B\u52A1\u56DE\u6EDA\u7ED3\u679C\uFF1A \u53C2\u4E0E\u8005\u5B8C\u6210\u4E8B\u52A1\u56DE\u6EDA\u540E\uFF0C\u5411\u534F\u8C03\u8005\u53D1\u9001Ack\u6D88\u606F\u3002</p></li><li><p>\u4E2D\u65AD\u4E8B\u52A1\uFF1A \u534F\u8C03\u8005\u63A5\u6536\u5230\u6240\u6709\u53C2\u4E0E\u8005\u53CD\u9988\u7684Ack\u6D88\u606F\u540E\uFF0C\u5B8C\u6210\u4E8B\u52A1\u4E2D\u65AD\u3002</p></li></ol><h2 id="\u4F18\u7F3A\u70B9" tabindex="-1"><a class="header-anchor" href="#\u4F18\u7F3A\u70B9" aria-hidden="true">#</a> \u4F18\u7F3A\u70B9</h2><ul><li>\u4F18\u70B9\uFF1A <ul><li>\u539F\u7406\u7B80\u5355\uFF0C\u5B9E\u73B0\u65B9\u4FBF</li></ul></li><li>\u7F3A\u70B9\uFF1A <ul><li>\u540C\u6B65\u963B\u585E\uFF1A\u9636\u6BB5\u4E8C\u63D0\u4EA4\u7684\u6240\u6709\u8FC7\u7A0B\u4E2D\uFF0C\u53C2\u4E0E\u4E8B\u52A1\u64CD\u4F5C\u7684\u903B\u8F91\u90FD\u5904\u4E8E\u963B\u585E\u72B6\u6001\uFF0C\u4E5F\u5C31\u662F\u6240\u6709\u7684\u53C2\u4E0E\u8005\u90FD\u5728\u7B49\u5F85\u5176\u4ED6\u53C2\u4E0E\u8005\u7684\u54CD\u5E94\u3002</li><li>\u5355\u70B9\u95EE\u9898\uFF1A\u534F\u8C03\u8005\u7684\u4F5C\u7528\u975E\u5E38\u91CD\u8981\uFF0C\u4E00\u65E6\u51FA\u73B0\u95EE\u9898\uFF0C\u9636\u6BB5\u4E8C\u7684\u53C2\u4E0E\u8005\u7684\u4E8B\u52A1\u4F1A\u4E00\u76F4\u5904\u4E8E\u9501\u5B9A\u72B6\u6001\u4E2D\u3002</li><li>\u8111\u88C2\u95EE\u9898\uFF1A\u9636\u6BB5\u4E8C\u4E8B\u52A1\u63D0\u4EA4\u65F6\u5982\u679C\u51FA\u73B0\u95EE\u9898\uFF0C\u90A3\u4E48\u4F1A\u51FA\u73B0\u8111\u88C2\u5BFC\u81F4\u6570\u636E\u4E0D\u4E00\u81F4\u3002</li><li>\u8FC7\u4E8E\u4FDD\u5B88\uFF1A\u4EFB\u4F55\u4E00\u4E2A\u53C2\u4E0E\u8005\u8282\u70B9\u7684\u5931\u8D25\u90FD\u4F1A\u5BFC\u81F4\u56DE\u6EDA\u3002</li></ul></li></ul>',14);function C(v,A){const i=s("RouterLink");return r(),d(c,null,[_,l("nav",u,[l("ul",null,[l("li",null,[e(i,{to:"#\u9636\u6BB5\u4E00-\u63D0\u4EA4\u4E8B\u52A1\u8BF7\u6C42"},{default:a(()=>[f]),_:1})]),l("li",null,[e(i,{to:"#\u9636\u6BB5\u4E8C-\u6267\u884C\u4E8B\u52A1\u63D0\u4EA4"},{default:a(()=>[m]),_:1}),l("ul",null,[l("li",null,[e(i,{to:"#\u6267\u884C\u4E8B\u52A1\u63D0\u4EA4"},{default:a(()=>[g]),_:1})]),l("li",null,[e(i,{to:"#\u4E2D\u65AD\u4E8B\u52A1"},{default:a(()=>[k]),_:1})])])]),l("li",null,[e(i,{to:"#\u4F18\u7F3A\u70B9"},{default:a(()=>[x]),_:1})])])]),b],64)}var B=n(h,[["render",C]]);export{B as default};
