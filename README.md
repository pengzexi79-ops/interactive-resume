# 彭泽曦 · AI 原生实践者

彭泽曦的个人品牌官网与交互式网页简历。这个项目展示一个没有传统编程背景的人，如何借助 AI 完成需求拆解、产品策划、内容创作、网页开发、测试与持续迭代。

## 在线访问

- 个人品牌官网：https://stunning-puffpuff-d8b0be.netlify.app
- 开源仓库：https://github.com/pengzexi79-ops/ui-

## 项目特点

- React + TypeScript
- 深色科技感与玻璃拟态视觉
- 桌面、手机和平板响应式布局
- 滚动动画、数字动画、项目详情弹窗
- 微信、QQ、邮箱和 GitHub 联系方式
- PDF 与 Word 简历下载
- SEO、站点地图和结构化数据
- 可生成完全独立的单文件静态版本
- 支持 Netlify 自动构建部署

## 本地运行

需要 Node.js 22.13.0 或更高版本。

```bash
npm install
npm run dev
```

## 生产构建

```bash
npm run build
```

生成可脱离框架运行的单文件版本：

```bash
npm run portable
```

输出位置为 `portable/index.html`。

## Netlify 部署

仓库已经包含 `netlify.toml`。在 Netlify 中连接本仓库后，平台会自动执行构建并发布 `portable` 目录。

## 主要文件

- `app/page.tsx`：页面内容、项目、时间线、联系方式与交互
- `app/globals.css`：视觉系统、动画和响应式布局
- `app/layout.tsx`：SEO、分享信息与结构化数据
- `scripts/generate-portable.mjs`：独立单文件网站生成器
- `public/downloads/`：PDF 与 Word 简历

## 开源许可

源代码采用 MIT License。

个人肖像、简历、个人经历、联系方式和个人品牌素材仍归彭泽曦本人所有，不授权冒充身份或复用个人形象。
