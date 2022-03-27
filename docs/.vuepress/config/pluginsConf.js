// const secret = require('./secret');
const { copyCode } = require("vuepress-plugin-copy-code2"); /* 代码一键复制 */
module.exports = [
    /**
     * vssue 评论
     */
    //  [
    //     '@vssue/vuepress-plugin-vssue', {
    //         platform: 'github-v4',
    //         owner: 'noErrorNoBug',
    //         repo: 'docs',
    //         clientId: secret.clientId,
    //         clientSecret: secret.clientSecret,
    //         autoCreateIssue: true, /* 自动创建评论 */
    //     }
    // ],
    /**
     * 内置搜索插件
     */
    [
        '@vuepress/plugin-search',
        {
            locales: {
                '/': {
                    placeholder: '搜索',
                },
            },
            maxSuggestions: 8, /* 最大搜索条数 */
        },
    ],

    /**
     * 返回顶部插件
     */
    ['@vuepress/plugin-back-to-top', true],

    /**
     * 图片缩放插件
     */
    [
        '@vuepress/plugin-medium-zoom',
        {
            selector: ':not(a) > img',  /* 除了<a>标签的所有 img标签图片都可以缩放 */
        }
    ],

    /**
     * 代码一键复制插件
     */
    [
        "vuepress-plugin-copy-code2",
        {
            showInMobile: true, /* 在移动端展示 */
            pure: false, /* 使用样式纯净的小而简单的复制按钮 */

        },
    ],

    /**
     * 百度统计功能
     */
    [
        '@renovamen/vuepress-plugin-baidu-tongji', {
            'ba': '站点统计'
        }
    ]

]