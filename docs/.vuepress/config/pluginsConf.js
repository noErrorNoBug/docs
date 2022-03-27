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
     * 百度统计功能
     */
    [
        '@renovamen/vuepress-plugin-baidu-tongji', {
            'id': '站点统计'
        }
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
                theme_color: "#F0FFF0",
                background_color: "#ffffff",
                display: "standalone",
                scope: "/docs",
                start_url: "/docs",
                name: "\u540e\u7aef\u6280\u672f\u7b14\u8bb0",
                short_name: "docs",
                description: "\u4e2a\u4eba\u540e\u7aef\u6280\u672f\u7b14\u8bb0",
            },
            favicon: '/favicon.ico',    /* favicon路径，文档说些绝对路径 */
            themeColor: '#F0FFF0',  /* 主题颜色，默认绿色 */
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
                statusBarColor: "white", /* 苹果的状态栏颜色，black | white */
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

    /**
     * 评论插件
     */
    [
        'vuepress-plugin-comment2', {
            type: "giscus", /* 服务提供者，使用 giscus */
            comment: false, /* 是否默认启用评论 */
            /**
               giscus配置
             */
            repo: 'noErrorNoBug/giscus',        /* 存评论的仓库 */
            repoId: 'R_kgDOHErULA',                 /* 仓库 ID */
            category: 'Announcements',              /* Announcements */
            categoryId: 'DIC_kwDOHErULM4COSqq',         /* 讨论分类 ID */
            mapping: 'pathname',        /* 页面 ↔️ discussion 映射关系 */
            reactionsEnabled: '1',       /* 是否启用主帖子上的反应 */
            inputPosition: 'bottom',      /* 输入框的位置 */
        },
    ],

    /**
     * MarkDown 语法增强
     */
    [
        'vuepress-plugin-md-enhance', {
            container: true,                /* 开启 自定义容器 */
            codegroup: true,                /* 开启 代码块分组 */
            sub: true,                      /* 开启 上角标 */
            sup: true,                      /* 开启 下角标 */
            align: true,                    /* 开启 自定义对齐方式 */
            footnote: true,                 /* 开启 脚注及链接 */
            mark: true,                     /* 开启 高亮标记 */
            tasklist: true,                 /* 开启 任务列表 */
            tex: true,                      /* 开启 开启tex公式 */
        },
    ],

    /**
     * toc目录组件
     */
    [
        '@vuepress/plugin-toc', {
            componentName: 'Toc',
        }
    ],

]