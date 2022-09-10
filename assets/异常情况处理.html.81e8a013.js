const e={key:"v-5be0e558",path:"/db/redis/%E5%BC%82%E5%B8%B8%E6%83%85%E5%86%B5%E5%A4%84%E7%90%86.html",title:"title",lang:"zh-CN",frontmatter:{title:"title",prev:{text:"\u56DE\u5230\u9996\u9875",link:"/README.md"},next:{text:"\u56DE\u5230\u9996\u9875",link:"/README.md"},summary:"\u6587\u7AE0\u4ECB\u7ECD [[toc]] * \u591A\u7EA7\u7F13\u5B58 \u4E0A\u56FE\u7701\u7565\u4E86\u7F51\u5173\u5C42\u7B49\u4E00\u7CFB\u5217\u4E0E\u4E09\u7EA7\u7F13\u5B58\u67B6\u6784\u65E0\u5173\u7684\u4E1C\u897F\uFF0C\u4E09\u7EA7\u7F13\u5B58\u4E00\u822C\u6307\u7684\u662FNginx\u672C\u5730\u7F13\u5B58\u4F5C\u4E3A\u7B2C\u4E00\u7EA7\u7F13\u5B58\uFF0C\u5B58\u50A8\u6700\u6700\u9891\u7E41\u548C\u5E38\u7528\u7684\u8D44\u6E90\uFF1BWeb\u5C42\u672C\u5730\u7F13\u5B58\u5176\u81EA\u8EAB\u5E38\u7528\u6570\u636E\u4F5C\u4E3A\u7B2C\u4E8C\u7EA7\u7F13\u5B58\uFF1BRedis\u96C6\u7FA4\u4F5C\u4E3A\u9AD8\u8BFB\u5199\u6027\u80FD\u7684Nosql\u6570\u636E\u5E93\u4F5C\u4E3A\u7B2C\u4E09\u7EA7\u7F13\u5B58\u3002 \u6570\u636E\u5E93-\u7F13\u5B58\u53CC\u5199\u4E0D\u4E00\u81F4 \u53CC\u5199\u4E0D\u4E00\u81F4 \u8BFB\u5199\u5E76\u53D1\u4E0D\u4E00\u81F4 \u89E3\u51B3\u65B9\u6848 \u5E76\u53D1\u5F88\u5C0F\u7684\u6570\u636E\u51E0\u4E4E\u4E0D",head:[["meta",{property:"og:url",content:"https://github.com/noErrorNoBug/docs/docs/db/redis/%E5%BC%82%E5%B8%B8%E6%83%85%E5%86%B5%E5%A4%84%E7%90%86.html"}],["meta",{property:"og:site_name",content:"\u540E\u7AEF\u6280\u672F\u7B14\u8BB0"}],["meta",{property:"og:title",content:"title"}],["meta",{property:"og:type",content:"article"}],["meta",{property:"og:locale",content:"zh-CN"}]]},excerpt:"",headers:[{level:2,title:"\u53CC\u5199\u4E0D\u4E00\u81F4",slug:"\u53CC\u5199\u4E0D\u4E00\u81F4",children:[]},{level:2,title:"\u8BFB\u5199\u5E76\u53D1\u4E0D\u4E00\u81F4",slug:"\u8BFB\u5199\u5E76\u53D1\u4E0D\u4E00\u81F4",children:[]},{level:2,title:"\u89E3\u51B3\u65B9\u6848",slug:"\u89E3\u51B3\u65B9\u6848",children:[]},{level:2,title:"\u73B0\u8C61",slug:"\u73B0\u8C61",children:[]},{level:2,title:"\u65B9\u68481\uFF1A\u7F13\u5B58\u7A7A\u5BF9\u8C61",slug:"\u65B9\u68481-\u7F13\u5B58\u7A7A\u5BF9\u8C61",children:[]},{level:2,title:"\u65B9\u68482\uFF1A\u5E03\u9686\u8FC7\u6EE4\u5668",slug:"\u65B9\u68482-\u5E03\u9686\u8FC7\u6EE4\u5668",children:[{level:3,title:"\u539F\u7406",slug:"\u539F\u7406",children:[]},{level:3,title:"Redisson\u5B9E\u73B0",slug:"redisson\u5B9E\u73B0",children:[]}]},{level:2,title:"\u73B0\u8C61",slug:"\u73B0\u8C61-1",children:[]},{level:2,title:"\u65B9\u6848\uFF1A\u968F\u673A\u8FC7\u671F\u65F6\u95F4",slug:"\u65B9\u6848-\u968F\u673A\u8FC7\u671F\u65F6\u95F4",children:[]},{level:2,title:"\u73B0\u8C61",slug:"\u73B0\u8C61-2",children:[]},{level:2,title:"\u5904\u7406\u601D\u8DEF",slug:"\u5904\u7406\u601D\u8DEF",children:[]},{level:2,title:"\u73B0\u8C61",slug:"\u73B0\u8C61-3",children:[]},{level:2,title:"\u89E3\u51B3\u65B9\u6848\uFF1A\u4E92\u65A5\u9501\u907F\u514D\u540C\u65F6\u91CD\u5EFA\u7F13\u5B58",slug:"\u89E3\u51B3\u65B9\u6848-\u4E92\u65A5\u9501\u907F\u514D\u540C\u65F6\u91CD\u5EFA\u7F13\u5B58",children:[]},{level:2,title:"\u73B0\u8C61",slug:"\u73B0\u8C61-4",children:[{level:3,title:"\u53CC\u5199\u4E0D\u4E00\u81F4",slug:"\u53CC\u5199\u4E0D\u4E00\u81F4-1",children:[]},{level:3,title:"\u8BFB\u5199\u5E76\u53D1\u4E0D\u4E00\u81F4",slug:"\u8BFB\u5199\u5E76\u53D1\u4E0D\u4E00\u81F4-1",children:[]}]},{level:2,title:"\u89E3\u51B3\u65B9\u6848",slug:"\u89E3\u51B3\u65B9\u6848-1",children:[]},{level:2,title:"\u73B0\u8C61",slug:"\u73B0\u8C61-5",children:[]},{level:2,title:"\u89E3\u51B3\u65B9\u6848",slug:"\u89E3\u51B3\u65B9\u6848-2",children:[]}],git:{createdTime:1648313574e3,updatedTime:1648641805e3,contributors:[{name:"sunqiang",email:"749922109@qq.com",commits:2}]},readingTime:{minutes:63.23,words:18969},filePathRelative:"db/redis/\u5F02\u5E38\u60C5\u51B5\u5904\u7406.md"};export{e as data};
