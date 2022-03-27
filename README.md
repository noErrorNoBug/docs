---
title: 项目介绍
---

## 项目说明

该项目是本人的个人技术笔记（后端技术笔记）的博客项目，项目基于VuePress2.x搭建，笔记内容为个人技术积累，如有转载请注明出处。

## 快速开始
项目已具备本地部署和GitHub Actions自动部署的条件，本地部署可以按照下面的步骤快速开始，由于npm依赖版有事会发生冲突，推荐使用yarn：
```shell
# 项目中已带有package.json和yarn.lock，如果不使用项目中带有的依赖，可以自己初始化
yarn init

# 自行初始化的package.json需要加入以下脚本，如果使用自带的依赖请忽略
"scripts": {
    "docs:dev": "vuepress dev docs",
    "docs:build": "vuepress build docs",
    "deploy": "bash deploy.sh"
},

# 自行初始化的需要安装以下依赖
yarn add -D vuepress@2.0.0-beta.36
yarn add -D  @vuepress/plugin-last-updated@1.9.7
yarn add -D  @vuepress/plugin-search@2.0.0-beta.36
yarn add -D  @vuepress/plugin-back-to-top@2.0.0-beta.36
yarn add -D  @vuepress/plugin-docsearch@2.0.0-beta.36
yarn add -D  @vuepress/plugin-medium-zoom@2.0.0-beta.36
yarn add -D  @vssue/vuepress-plugin-vssue@1.4.8
yarn add -D  @vssue/api-github-v4@1.4.7
yarn add -D increase-memory-limit@1.0.7
yarn add -D vuepress-plugin-copy-code2@2.0.0-beta.27
yarn add @renovamen/vuepress-plugin-baidu-tongji@2.0.0-alpha.17
yarn add -D vuepress-plugin-pwa2@2.0.0-beta.27
yarn add -D vuepress-plugin-comment2@2.0.0-beta.27

# 启动
yarn docs:dev
# 构建
yarn docs:build
# deploy
yarn deploy
```


## 目录说明
```shell 
-- deploy.sh                   # 手动部署脚本，需要修改为自己的仓库地址
-- .gitignore                  # ignore文件
-- LICENSE                     # 开源LICENSE
-- README.md                   # readme
-- package.json                # yarn脚本
-- yarn.lock                   # 依赖版本库
-- .github/workflows
    --  docs.yml               # GitHub Actions 自动部署脚本
-- docs                        # 主目录
    --  .vuepress              # 配置目录
    --  README.md              # 主页
    --  其他文件                # 文章
```