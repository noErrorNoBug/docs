import { defineHopeConfig } from "vuepress-theme-hope";
import themeConfig from "./themeConfig";

export default defineHopeConfig({
  base: "/docs/",     /* 基础路径，GitHub Pages需要填写仓库 */

  dest: "./dist",   /* 编译路径 */
  /**
   * head 配置
   */
  head: [
    ['link', { rel: 'icon', href: './favicon.ico' }],    /* favicon */
    ['meta', { name: 'author', content: 'noErrorNoBug' }],  /* author */
    ['meta', { name: 'keywords', content: 'java,JVM,并发,算法,mysql,redis,mongodb,elasticsearch,spring,springboot,netty,mq,kafka,分布式,微服务,商城,秒杀,数据仓储,网络协议,Docker,Linux' }]  /* keywords */
  ],

  /**
   * 语言
   */
  locales: {
    "/": {
      lang: "zh-CN",
      title: "后端技术笔记",
      description: "noErrorNoBug(sunqiang)的后端技术笔记",
    },
  },

  themeConfig,
});
