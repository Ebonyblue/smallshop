import { defineConfig } from "vitepress";
import { nav, sidebar } from "./relaConf";
// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "小张小铺",
  description: "A VitePress Site",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: "/img/logo_circle.png",
    // 右上角导航
    nav: nav,
    // 左边侧边栏
    sidebar: sidebar,
    socialLinks: [{ icon: "github", link: "https://github.com/Ebonyblue" }],
    // 右侧锚点导航
    outline: {
      level: [2, 6],
      label: "大纲",
    },
    // 搜索
    search: {
      provider: "local",
      options: {
        locales: {
          zh: {
            translations: {
              button: {
                buttonText: "搜索文档",
                buttonAriaLabel: "搜索文档",
              },
              modal: {
                noResultsText: "无法找到相关结果",
                resetButtonTitle: "清除查询条件",
                footer: {
                  selectText: "选择",
                  navigateText: "切换",
                },
              },
            },
          },
        },
      },
    },
  },
});
