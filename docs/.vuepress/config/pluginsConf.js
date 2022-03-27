const secret = require('./secret');
module.exports = [

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
     * vssue 评论
     */
    [
        '@vssue/vuepress-plugin-vssue', {
            platform: 'github-v4',
            owner: 'noErrorNoBug',
            repo: 'docs',
            clientId: secret.clientId,
            clientSecret: secret.clientSecret,
            autoCreateIssue: true, /* 自动创建评论 */
        }
    ],
]