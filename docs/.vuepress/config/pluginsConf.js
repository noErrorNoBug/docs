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
            platform: 'gitee',
            owner: 'noErrorNoBug',
            repo: 'docs',
            clientId: '987f917aeee2cdea01d2084dd5435a0feffd48b1c2a01692eb20b233169f5d67',
            clientSecret: 'cc0120a513d4a6069fb395677920476a3f362063dd391ab319fc4aa55a321020',
            autoCreateIssue: true, /* 自动创建评论 */
        }
    ],
]