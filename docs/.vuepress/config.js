const headConf = require('./config/headConf');  /* head配置 */
const pluginsConf = require('./config/pluginsConf');    /* plugins配置 */
const navbarConf = require('./config/navbarConf');  /* navbar导航栏配置 */
const sidebarConf = require('./config/sidebarConf');    /* sidebar侧边栏配置 */

module.exports = {
    base: "/docs/",    /* title显示在导航栏中 */
    lang: 'zh-CN',      /* 站点语言 */
    title: "后端技术笔记",  /* title显示在导航栏中 */
    description: "热爱生活，科学编码，个人的技术笔记汇总。", /* description以meta形式显示在HTML标签中 */
    theme: '@vuepress/theme-default',   /* 默认主题 */
    head: headConf, /* head配置 */
    plugins: pluginsConf,   /* 插件配置 */

    /* 主题配置 */
    themeConfig: {
        darkMode: true,   /* 开启夜间模式 */
        logo: '/assets/img/logo.jpg',   /* 导航栏logo */
        logoDark: '/assets/img/logoDark.jpeg',  /* 夜间模式logo */
        lastUpdated: true,   /* 开启更新时间 */
        lastUpdatedText: "更新时间",    /* 更新时间前缀 */
        contributors: true, /* 开启撰稿人 */
        contributorsText: "撰稿人",   /* 撰稿人前缀 */
        backToHome: "返回主页", /* 404返回主页提示 */
        notFound: ["页面不见啦！", "地址不正确！"], /* 404提示 */
        repo: 'https://github.com/noErrorNoBug',   /* 导航栏设置仓库地址 */
        repoLabel: "GitHub",  /* 导航栏设置仓库名称 */
        docsRepo: 'https://github.com/noErrorNoBug/docs', /* 文档地址 */
        docsDir: 'docs',    /* 文档目录 */
        docsBranch: 'master',   /* 文档分支 */
        editLinks: true,    /* 是否开启编辑此页 */
        editLinkText: '编辑此页',   /* 编辑此页名字 */
        navbar: navbarConf, /* 导航栏配置 */
        sidebar: sidebarConf, /* 侧边栏配置 */
    }
}