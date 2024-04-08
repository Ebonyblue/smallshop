# HTML

## DOCTYPE 有什么作用？

DOCTYPE 是一种指示浏览器以何种 HTML 或 XHTML 规范来解析文档的声明。它能够告知浏览器网页文档使用的标记语言的类型以及版本，从而确保浏览器能够正确地展示网页内容。DOCTYPE 声明通常位于 HTML 文档的开头，是 HTML 文档的必须部分。

## img 标签的 title 和 alt 属性有什么区别

`alt`属性用于为图像提供替代文本，即使图像无法加载，也可以描述图像内容，提高网页的可访问性和可用性。`title`属性则提供有关图像的额外信息，可以通过鼠标悬停或使用辅助技术来查看。它通常用于提供更多的上下文或补充描述，但并不是必需的。

## 简述一下 src 与 href 的区别

在 HTML 中，`src` 属性是用来指定外部资源的 URL，如图像、脚本或嵌入式对象的位置。例如，`<img>` 标签中的 `src` 属性指定图像的 URL。

而 `href` 属性则用来指定超文本链接的目标资源的位置，如超链接或 `link` 标记中的外部样式表。例如，`<a>` 标签中的 `href` 属性指定了链接目标的 URL。

## iframe 有哪些优缺点？

`iframe`（内联框架）是一种 HTML 元素，它允许在当前文档中嵌入另一个独立的 HTML 文档。`iframe` 有一些优点和缺点：

优点：

1. **内容隔离**：`iframe` 可以将不同来源的内容隔离开来，使得它们在不同的上下文中运行。这有助于保护当前文档免受潜在的安全风险，并确保不同来源的内容不会互相干扰。
2. **异步加载**：`iframe` 中的内容可以异步加载，这意味着页面主体内容可以在 `iframe` 加载完成之前呈现。这有助于提高页面加载速度。
3. **独立滚动**：`iframe` 内的内容可以独立滚动，而不会影响主页面的滚动。这有助于在需要展示大量内容的情况下，提高用户体验。
4. **跨域资源访问**：在一定程度上，`iframe` 可以用于访问跨域资源，例如嵌入来自其他域的网页或应用。

缺点：

1. **性能影响**：`iframe` 的使用可能会导致性能下降，因为它需要浏览器加载额外的文档资源。每个嵌入的 `iframe` 都需要额外的 HTTP 请求，这可能会延长页面加载时间。
2. **复杂性增加**：`iframe` 的使用可能会使页面结构更加复杂，导致维护困难。而且，在 `iframe` 和主页面之间进行通信可能会涉及到跨域问题，这会增加开发难度。
3. **SEO 不友好**：搜索引擎可能无法完全索引 `iframe` 中的内容，这会影响到网页的搜索引擎优化（SEO）。
4. **可访问性问题**：`iframe` 在某些情况下可能导致可访问性问题。例如，屏幕阅读器可能无法正确解析 `iframe` 中的内容，导致部分用户无法访问这些内容。

综上所述，`iframe` 有一些优点，如内容隔离、异步加载和独立滚动等。然而，它也有一些缺点，如性能影响、复杂性增加、SEO 不友好和可访问性问题等。在使用 `iframe` 时，需要权衡这些优缺点，确保它适用于你的需求。

## 常用的 meta 标签有哪些？

`meta` 标签提供了有关 HTML 文档的元数据，如描述、关键词、作者等。以下是一些常用的 `meta` 标签：

1. **字符集声明**：声明文档使用的字符编码，通常为 UTF-8。

   ```html
   <meta charset="UTF-8" />
   ```

2. **视口设置**：控制页面在移动设备上的显示方式，如缩放级别和页面宽度。

   ```html
   <meta name="viewport" content="width=device-width, initial-scale=1.0" />
   ```

3. **页面描述**：提供页面的简短描述，有助于搜索引擎了解页面内容。

   ```html
   <meta name="description" content="A brief description of the page." />
   ```

4. **关键词**：设置页面关键词，有助于搜索引擎优化（SEO）。但请注意，大多数现代搜索引擎不再使用此标签。

   ```html
   <meta name="keywords" content="keyword1, keyword2, keyword3" />
   ```

5. **作者**：指定页面作者。

   ```html
   <meta name="author" content="Author Name" />
   ```

6. **禁止缓存**：告诉浏览器不要缓存页面。

   ```html
   <meta
     http-equiv="Cache-Control"
     content="no-cache, no-store, must-revalidate"
   />
   <meta http-equiv="Pragma" content="no-cache" />
   <meta http-equiv="Expires" content="0" />
   ```

7. **自动刷新**：设置页面在特定时间间隔后自动刷新。

   ```html
   <meta http-equiv="refresh" content="30" />
   ```

8. **跳转到其他页面**：在指定的时间间隔后，自动将用户重定向到其他页面。

   ```html
   <meta
     http-equiv="refresh"
     content="5; URL=https://example.com/new-page.html"
   />
   ```

9. **兼容模式**：指定浏览器（如 Internet Explorer）使用特定的渲染模式。

   ```html
   <meta http-equiv="X-UA-Compatible" content="IE=edge" />
   ```

10. **搜索引擎索引控制**：指示搜索引擎是否应索引页面和跟踪链接。

    ```html
    <meta name="robots" content="index, follow" />
    ```

这些常用的 `meta` 标签可以帮助你控制页面的显示、搜索引擎优化和其他功能。根据页面需求，可以根据需要添加更多的 `meta` 标签。

## H5 和 H4 有什么不同？

- 语义化标签: `header`、`footer`、`nav`、`section`、`article`、`aside` 等
- 增强型表单：`date`(从一个日期选择器选择一个日期) 、`email`(包含 e-mail 地址的输入域) 、`number`(数值的输入域) 、`range`(一定范围内数字值的输入域) 、`search`(用于搜索域) 、`tel`(定义输入电话号码字段) 等
- 视频和音频：`audio`、`video`
- `Canvas`绘图、 `SVG`绘图
- 地理定位：`Geolocation`
- 拖放 API：`drag`
- `web worker`：是运行在后台的 `JavaScript`，独立于其他脚本，不会影响页面的性能
- `web storage`: `localStorage`、`sessionStorage`
- `WebSocket`: `HTML5` 开始提供的一种在单个 `TCP` 连接上进行全双工通讯的协议

## SVG 和 CANVAS 的区别？

SVG 和 Canvas 都是用于在 web 上绘制图形的技术，但它们有几个主要区别:

1. SVG 是基于矢量图的，而 Canvas 是基于像素图的。
2. 在 SVG 中，每个绘制的元素都是一个独立的 DOM 对象，并且可以轻松地与 JavaScript 交互。 在 Canvas 中，所有绘制都被放置在一个画布中，并且只能与像素级别进行交互。
3. SVG 通常适用于静态图形，而 Canvas 适用于动态图形，例如游戏和数据可视化。

简而言之，SVG 适用于需要与 DOM 交互并具有复杂动画和交互的情况，而 Canvas 则适用于创建大量图形对象和复杂动画。

## defer 和 async 的区别 ?

defer 和 async 都是用于脚本加载和执行的关键字，两者的主要区别如下：

1. defer 脚本会在 HTML 文档解析完成后执行，而 async 脚本会在下载完毕后立即执行。
2. defer 脚本会按照它们在文档中的顺序执行，而 async 脚本是在下载完成后尽快执行，可能会打乱它们在文档中的顺序。
3. defer 脚本会在 DOMContentLoaded 事件之后运行，而 async 脚本则不一定。

因此，如果需要按顺序执行脚本并且不想阻塞 DOM 的解析，可以使用 defer。如果脚本的执行不依赖于其他脚本或 DOM，可以使用 async 加快加载速度。

## style 标签 prefetch 和 preload 区别？

`<style>`标签的`prefetch`和`preload`属性都用于优化 CSS 资源的加载，但它们有不同的行为和目的：

- `prefetch`属性告诉浏览器这个 CSS 资源可能在未来的某个时刻需要被加载，但并不需要立即加载。浏览器会在空闲时间异步加载这个资源，以便在需要时能够立即使用。`prefetch`适用于那些当前不需要但是可能在未来会需要使用的资源。
- `preload`属性则告诉浏览器这个 CSS 资源在当前页面中必须被使用，因此应该立即加载和执行。浏览器会在主 HTML 文档下载和解析完成之前加载这个资源。`preload`适用于那些当前需要使用的资源。

<hr />
