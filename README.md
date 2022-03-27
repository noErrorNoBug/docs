# docs
技术文档


```javascripts 
// 下载下来后首先执行
yarn init

// 再局部安装VuePress
yarn add -D vuepress@2.0.0-beta.36

// 再局部安装moment
yarn add -D  @vuepress/plugin-last-updated@1.9.7
yarn add -D  @vuepress/plugin-search@2.0.0-beta.36
yarn add -D  @vuepress/plugin-back-to-top@2.0.0-beta.36
yarn add -D  @vuepress/plugin-docsearch@2.0.0-beta.36
yarn add -D  @vuepress/plugin-medium-zoom@2.0.0-beta.36
yarn add -D  @vssue/vuepress-plugin-vssue@1.4.8
yarn add -D  @vssue/api-github-v4@1.4.7

// 在package.json加入下面脚本
"scripts": {
    "docs:dev": "vuepress dev docs",
    "docs:build": "vuepress build docs",
    "deploy": "bash deploy.sh"
  },


// 启动
yarn docs:dev
```