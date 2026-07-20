---
title: Hello World — 我的第一篇博客
description: 这是一篇示例文章，展示了博客支持的各种 Markdown 语法和功能。
date: 2026-07-19
tags: [nuxt, markdown, hello-world]
image: /images/hello-world.jpg
published: true
---

# 欢迎来到 CodexList Blog

这是博客的第一篇文章，用来展示各种 Markdown 语法和博客功能。

## 代码高亮

### JavaScript

```javascript
function fibonacci(n) {
  if (n <= 1) return n
  const dp = [0, 1]
  for (let i = 2; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2]
  }
  return dp[n]
}

console.log(fibonacci(10)) // 55
```

### Python

```python
def fibonacci(n: int) -> int:
    if n <= 1:
        return n
    a, b = 0, 1
    for _ in range(2, n + 1):
        a, b = b, a + b
    return b

print(fibonacci(10))  # 55
```

### TypeScript

```typescript
interface BlogPost {
  title: string
  description: string
  date: string
  tags: string[]
  published: boolean
}

function createPost(title: string): BlogPost {
  return {
    title,
    description: '',
    date: new Date().toISOString(),
    tags: [],
    published: false,
  }
}
```

## 列表

### 无序列表

- Nuxt.js 框架
  - 文件系统路由
  - 自动导入组件
  - 模块化设计
- Tailwind CSS 样式
  - 工具类优先
  - 暗色模式支持
- Nuxt Content
  - Markdown 驱动
  - 代码高亮
  - 目录生成

### 有序列表

1. 安装 Nuxt 项目
2. 配置模块
3. 编写 Markdown 内容
4. 生成静态站点
5. 部署到 Vercel

## 引用

> 编程不是关于你知道什么，而是关于你能想出什么。
>
> — Chris Pine

## 表格

| 功能 | 状态 | 备注 |
|------|------|------|
| 文章列表 | ✅ | 支持分页 |
| 标签系统 | ✅ | 多标签关联 |
| 全文搜索 | ✅ | 实时搜索 |
| 暗色模式 | ✅ | 跟随系统 |
| RSS Feed | 🚧 | 开发中 |
| 评论区 | 🚧 | 开发中 |

## 其他格式

**粗体文本** 和 *斜体文本* 以及 ~~删除线文本~~。

行内代码：使用 `nuxt generate` 命令生成静态站点。

水平分割线：

---

## 结语

欢迎来到我的博客！后续会持续更新技术文章，包括但不限于：

- Vue.js / Nuxt.js 开发实践
- 前端工程化与性能优化
- 开源项目分享
- 编程学习心得

感谢阅读！
