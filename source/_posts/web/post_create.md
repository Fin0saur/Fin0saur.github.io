---
title: 博客创建记
date: 2026-02-10 19:20:30
categories :
    - 学习
    - 博客技术
tags:
---

博客创建动机与使用指南，包括文章创建、摘要设置、部署命令等。

<!-- more -->

## 创建 Motivation

某~~鱼刺~~ push 我创建的

---

## 本博客使用指南

### 一、创建新文章

在博客根目录运行：

```bash
cd Fin0saur.github.io
hexo new post "文章标题"
```

文章会自动创建在 `source/_posts/` 目录下，文件名格式为 `文章标题.md`。

如果想创建子目录分类的文章：

```bash
hexo new post "folder/name"
```

### 二、编写文章内容

打开生成的 md 文件，顶部的 `front-matter` 格式如下：

```markdown
---
title: 文章标题
date: 2026-05-09 12:00:00
categories :
    - 分类1
    - 分类2
tags:
    - 标签1
    - 标签2
---

文章正文内容...
```

### 三、自定义首页摘要

首页文章列表会显示文章开头的内容作为摘要。

如果想**自定义摘要内容**，在文章中使用 `<!-- more -->` 标记：

```markdown
这是手动设置的摘要内容，会显示在首页文章列表中。
可以写几句介绍性的话。

<!-- more -->

这里是正文内容，只有点进文章详情页才能看到。
```

### 四、本地预览与部署

```bash
# 本地预览
hexo server

# 构建静态文件
hexo generate

# 部署到 GitHub Pages
hexo deploy
```

### 五、配置文件说明

| 配置文件 | 用途 |
|---------|------|
| `_config.yml` | Hexo 主配置（站点信息、URL） |
| `_config.redefine.yml` | 主题配置（配色、功能） |
| `source/_data/links.yml` | 友链页面配置 |

### 六、联系方式配置

在 `_config.redefine.yml` 中找到并修改：

```yaml
home:
  sidebar:
    contact:
      github: https://github.com/你的用户名
      email: your@email.com
      bilibili: https://bilibili.com/你的B站主页
```

### 七、修改首页Banner

Banner 图片位于 `source/images/` 目录，主题配置中可修改：

```yaml
home_banner:
  image:
    light: /images/你的图片.webp
    dark: /images/你的深色图片.webp
```

---

## 创建过程

跟着教程创建的，然后具体的忘了.... OvO
