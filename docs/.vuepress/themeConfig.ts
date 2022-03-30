import { defineThemeConfig } from "vuepress-theme-hope";
import navbar from "./navbar";
import sidebar from "./sidebar";

export default defineThemeConfig({
  hostname: "https://github.com/noErrorNoBug/docs/",  /** hostname */
  /** 默认作者信息 */
  author: {
    name: "noErrorNoBug(sunqiang)",
    url: "https://noerrornobug.github.io/docs/",
  },
  logo: "/logo.svg",  /** logo 图标 */
  logoDark: "/logoDark.svg",  /** 夜间模式 logo图标 */
  darkmode: "switch", /** "auto-switch": "关闭 | 自动 | 打开" 的三段式开关,"switch": "关闭 | 打开" 的切换式开关,"auto": 自动根据用户设备主题或当前时间决定是否应用深色模式,"force-dark": 强制深色模式,"disable": 禁用深色模式 */
  themeColor: false, /** 主题颜色配置，false禁用,{ blue: "#2196f3", red: "#f26d6d", green: "#3eaf7c", orange: "#fb9b5f" } */
  fullscreen: false,  /** 全屏按钮 */
  backToTop: true,  /** 是否显示返回顶部按钮。 */

  repoDisplay: true,  /** 导航栏中显示仓库链接 */
  repoLabel: "GitHub",  /** 仓库标识 */
  repo: "https://github.com/noErrorNoBug",  /** 仓库地址 */
  docsRepo: "https://github.com/noErrorNoBug/docs", /** 文档仓库 */
  docsBranch: "master",/** 文档分支 */
  docsDir: "/docs", /** 文档项目目录 */

  navbarAutoHide: "none", /** 导航栏是否自动隐藏："always" | "mobile" | "none" */
  hideSiteNameonMobile: false, /** 移动视图时是否隐藏站点名称 */
  navbar: navbar,  /** 导航栏配置 */

  sidebarIcon: false, /** 侧边栏是否显示图标 */
  headingDepth: 2,  /** 侧边栏嵌套的标题深度 */
  sidebar: sidebar, /** 侧边栏配置 */

  breadcrumb: false, /** 是否启用全局路径导航 */
  breadcrumbIcon: false, /** 是否在全局导航显示图标 */

  titleIcon: false, /** 标题是否显示图标 */
  pageInfo: ["Author", "Date"],  /** 文章显示的信息，Author-作者，Date-创作日期，Original-是否原创，Category-分类，Tag-标签，ReadingTime-预计阅读时间，Word-字数，PageView-页面浏览量 */
  lastUpdated: true,  /** 是否显示最后更新时间 */
  contributors: true, /** 是否显示贡献者 */
  editLink: true, /** 是否显示编辑此页 */
  copyright: false, /** 拷贝版权信息 */

  toc: true, /** 是否在桌面模式下右侧展示标题列表 */
  home: "", /** 点击导航栏返回的主页位置 */
  displayFooter: true,  /** 是否显示默认页脚 */
  footer: "Apache License 2.0 | Copyright © 2018-present noErrorNoBug(sunqiang)", /** 默认页脚内容 */


  /** 加密设置，todo：为项目和个人相关的路径加密 */
  encrypt: {
    global: false,  /** 是否全局加密 */
    admin: ["sq201240600255"],  /** 最高权限密码 */
    config: {
      "/management/": ["sq201240600255"],  /** 加密技术管理下所有的信息 */
      "/interests/": ["sq201240600255"],  /** 加密兴趣爱好下的所有信息 */
      "/Examinations/": ["sq201240600255"],  /** 加密考试下面的所有信息 */
    },
  },

  /** 插件设置 */
  plugins: {
    blog: false,  /** 禁用作者信息 */

    /** 评论插件 */
    comment: {
      type: "giscus", /* 服务提供者，使用 giscus */
      comment: false, /* 是否默认启用评论 */
      repo: "noErrorNoBug/giscus",        /* 存评论的仓库 */
      repoId: "R_kgDOHErULA",                 /* 仓库 ID */
      category: "Announcements",              /* Announcements */
      categoryId: "DIC_kwDOHErULM4COSqq",         /* 讨论分类 ID */
      mapping: "pathname",        /* 页面 ↔️ discussion 映射关系 */
      reactionsEnabled: true,       /* 是否启用主帖子上的反应 */
      inputPosition: "bottom",      /* 输入框的位置 */
    },

    /** 语法增强 */
    mdEnhance: {
      enableAll: true,
      presentation: {
        plugins: ["highlight", "math", "search", "notes", "zoom"],
      },
    },

    /** 本地搜索插件 */
    search: {
      locales: {
        "/": {
          placeholder: "搜索",
        },
      },
      maxSuggestions: 8, /* 最大搜索条数 */
    },

    /** 图片预览插件 */
    // photoSwipe: {
    //   selector: ".theme-default-content :not(a) > img", /* 除了<a>标签的所有 img标签图片都可以缩放和预览 */
    // },

    /** 代码一键复制 */
    copyCode: {
      showInMobile: true, /* 在移动端展示 */
      pure: true, /* 使用样式纯净的小而简单的复制按钮 */
    },

    /** pwa插件 */
    pwa: {
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
      favicon: "/favicon.ico",    /* favicon路径，文档说些绝对路径 */
      themeColor: "#F0FFF0",  /* 主题颜色，默认绿色 */
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
      update: "availble",

      /*
          apple 精细化配置
       */
      apple: {
        icon: "/icons/icon-192x192.png",   /* 苹果使用的图标地址，推荐 152×152 大小 */
        statusBarColor: "white", /* 苹果的状态栏颜色，black | white */
        maskIcon: "/icons/icon-256x256.png",   /* Safari 图标 */
      },

      /**
          windows 精细化配置
       */
      msTile: {
        image: "/icons/icon-384x384.png",  /* 磁贴图标 */
        color: "#46bd87",  /* 磁贴颜色，缺省会自动回退到主题色。 */
      },
    },
    
  },
});
