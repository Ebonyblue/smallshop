import { DefaultTheme } from "vitepress";
export const nav: DefaultTheme.NavItem[] = [
  { text: "主页", link: "/" },
  {
    text: "前端开发",
    items: [
      {
        text: "面试",
        link: "/column/interview/", // 对应docs/column/Algorithm下的idnex.md文件
      },
    ],
  },
  { text: "关于我", link: "/mine" },
];
