import DefaultTheme from "vitepress/theme";
import "./custom.scss";

import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
// import locale from "element-plus/lib/locale/lang/zh-cn";
export default {
  ...DefaultTheme,
  NotFound: () => "404", // <- this is a Vue 3 functional component
  enhanceApp({ app, router, siteData }) {
    // app is the Vue 3 app instance from createApp()
    // router is VitePress' custom router (see `lib/app/router.js`)
    // siteData is a ref of current site-level metadata.
    // 注册ElementPlus
    app.use(ElementPlus, {
      // locale, // 语言设置
    });
  },
};
