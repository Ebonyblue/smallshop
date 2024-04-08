import { DefaultTheme } from "vitepress";
const list = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "Node",
  "浏览器",
  "计算机网络",
  "MVVM框架",
  "前端工程化",
  "前端性能优化",
  "前端监控",
  "前端安全",
  "跨端开发",
  "数据结构",
  "测试",
  "运维",
  "算法",
  "设计模式",
  "操作系统",
  "编程题",
];
function formatNumber(num: number) {
  // 将数字转换为字符串
  let str = num.toString();
  // 判断字符串长度是否小于3，如果是，则在字符串前面补0，直到长度为3
  while (str.length < 3) {
    str = "0" + str;
  }
  return str;
}
export const sidebar: DefaultTheme.Sidebar = {
  // /column/Algothm/表示对这个文件夹下的所有md文件做侧边栏配置
  "/column/interview/": [
    // 第一部分
    {
      text: "面试题目录",
      items: [
        {
          text: "面试经验谈",
          link: "/column/interview/index.md",
        },
        ...list.map((item, index) => {
          return {
            text: item,
            link: `/column/interview/${formatNumber(index + 1)}_${item}`,
          };
        }),
      ],
      // [
      //   {
      //     text: "HTML",
      //     link: "/column/interview/001_html",
      //   },
      //   {
      //     text: "CSS",
      //     link: "/column/interview/002_css",
      //   },
      // ],
    },
  ],
};
