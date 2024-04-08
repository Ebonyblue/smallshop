---
# 提供三种布局，doc、page和home
# 官方文档相关配置：https://vitepress.dev/reference/default-theme-layout
layout: home
home: true

# 官方文档相关配置：https://vitepress.dev/reference/default-theme-home-page
title: 小张小铺
# titleTemplate: Hi，终于等到你
editLink: true
lastUpdated: true

hero:
  name: 小张小铺
  text: The first wealth is health.
  tagline: /INTP/社恐/自由/
  image:
    # 首页右边的图片
    src: /img/header.jpg
    # 图片的描述
    alt: avatar
  # 按钮相关
  actions:
    - theme: brand
      text: 开始刷题
      link: /interview
    - theme: alt
      text: 了解一下
      link: /column/interview/index.md
# 按钮下方的描述
features:
  - icon: 💻
    title: 前端
    details: 纯🐮🐴，国内某互联网厂搬砖。
    # link: /about
  - icon: 🚀
    title: 爱国青年
    details: 是个平平无奇但是又很热爱学习的爱国青年。
    # link: /about
  - icon: 🐷
    title: 喜美
    details: 热爱一切美图。
    # link: /about
---

<!-- 自定义组件 -->
<script setup>
import home from './.vitepress/components/home.vue';
</script>

<home />
