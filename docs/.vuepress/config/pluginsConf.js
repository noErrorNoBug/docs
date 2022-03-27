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
     * 代码一键复制插件
     */
    [
        "vuepress-plugin-copy-code2",
        {
            showInMobile: true, /* 在移动端展示 */
            pure: true, /* 使用样式纯净的小而简单的复制按钮 */
        },
    ],

    /**
     * 渐进式pwa插件
     */
    [
        'vuepress-plugin-pwa2', {
            showInstall: true,  /* 第一次注册成功后弹窗提示 */
            /* 会被填充成 manifest.webmanifest */
            manifest: {
                lang: "zh-CN",
                theme_color: "#46bd87",
                background_color: "#ffffff",
                display: "standalone",
                scope: "/docs",
                start_url: "/docs",
                name: "\u540e\u7aef\u6280\u672f\u7b14\u8bb0",
                short_name: "docs",
                description: "\u4e2a\u4eba\u540e\u7aef\u6280\u672f\u7b14\u8bb0",
            }, 
            favicon: '/favicon.ico',    /* favicon路径，文档说些绝对路径 */
            themeColor: '#46bd87',  /* 主题颜色，默认绿色 */
            maxSize: 40960, /* 缓存最大值，大文档多的话调大，这里给个40M，单位KB */
            cacheHTML: false,   /* 不缓存主页和 404 错误页之外的 HTML 文件 */
            cachePic: false,    /* 不缓存图片 */
            maxPicSize: 30720,  /* 图片最大缓存大小，30M，单位KB */
            /*
                发现新内容时的控制逻辑，
                disabled：即使有新的 service worker 也不做任何事情 ，
                          新的 service work 开始等待后，会在用户下次访问时接管页面，让用户获得新内容。
                available：仅当新的 service worker 可用时才显示更新弹出窗口。
                hint：显示更新内容可用提示，并允许用户立即刷新。当新的 SW 成功注册后，将转为更新内容就绪弹窗。
                force：立即注销当前 Service Worker 然后刷新以获取新内容。
                hit、force比较影响阅读体验
             */
            update: 'available',

            /*
                apple 精细化配置
             */
            apple: {
                icon: '/icons/icon-192x192.png',   /* 苹果使用的图标地址，推荐 152×152 大小 */
                statusBarColor: "black", /* 苹果的状态栏颜色，black | white */
                maskIcon: '/icons/icon-256x256.png',   /* Safari 图标 */
            },

            /**
                windows 精细化配置
             */
            msTile: {
                image: '/icons/icon-384x384.png',  /* 磁贴图标 */
                color: '#46bd87',  /* 磁贴颜色，缺省会自动回退到主题色。 */
            },
        },
    ],

]