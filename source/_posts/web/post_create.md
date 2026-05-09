---
title: 博客创建记
date: 2026-02-10 19:20:30
categories :
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
    - 分类
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

### 六、博客整体结构梳理

这套博客整体上可以理解为 `Hexo + Redefine`：

- `Hexo` 负责把 Markdown 文章生成静态网页
- `Redefine` 负责主题外观、导航、首页 Banner、侧边栏等展示效果
- 平时最常改的内容，主要集中在 `source/` 和两份配置文件中

项目目录大致如下：

```text
Fin0saur.github.io/
├─ _config.yml                 # Hexo 主配置
├─ _config.redefine.yml        # Redefine 主题配置
├─ package.json                # 依赖和常用命令
├─ source/                     # 网站内容源文件
│  ├─ _posts/                  # 博客文章
│  ├─ about/                   # 关于页
│  ├─ categories/              # 分类页
│  ├─ friends/                 # 友链页
│  └─ _data/                   # 页面数据，如 links.yml
├─ scaffolds/                  # 新建文章/页面时使用的模板
├─ layout/                     # 自定义模板覆盖目录
├─ public/                     # 构建后生成的静态站点
├─ node_modules/               # 依赖与主题源码
└─ .github/workflows/          # GitHub Pages 自动部署配置
```

其中几个最常用的目录说明如下：

- `source/_posts/`：真正写文章的地方
- `source/about/`、`source/categories/`、`source/friends/`：独立页面
- `source/_data/links.yml`：友链数据
- `scaffolds/`：执行 `hexo new` 时会套用的默认模板
- `public/`：执行 `hexo generate` 后生成的网页文件，一般不直接手动修改
- `.github/workflows/pages.yml`：推送到 `main` 后自动部署到 GitHub Pages

如果只从“日常维护”角度来看，可以简单记成：

- 改站点基础信息，看 `_config.yml`
- 改主题外观和功能，看 `_config.redefine.yml`
- 写文章，看 `source/_posts/`
- 改独立页面和友链，看 `source/` 下对应页面与 `_data/links.yml`

### 七、联系方式配置

在 `_config.redefine.yml` 中找到并修改：

```yaml
home:
  sidebar:
    contact:
      github: https://github.com/你的用户名
      email: your@email.com
      bilibili: https://bilibili.com/你的B站主页
```

### 八、修改首页 Banner

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
