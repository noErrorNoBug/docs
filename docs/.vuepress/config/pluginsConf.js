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
    ]
]