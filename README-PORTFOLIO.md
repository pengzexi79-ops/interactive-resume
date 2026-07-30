# 彭泽曦｜AI 原生实践者｜个人品牌官网

这是官网的完整可编辑源代码。页面使用 React + TypeScript 构建，包含响应式布局、滚动动画、数字动画、项目详情弹窗、AI观察标签切换、公开联系方式、打印模式和简历下载。

- 正式官网：<https://stunning-puffpuff-d8b0be.netlify.app>
- 开源仓库：<https://github.com/pengzexi79-ops/pengzexi-ai-portfolio>

## 本地运行

需要 Node.js 22 或更高版本。

```bash
npm install
npm run dev
```

打开终端显示的本地网址即可查看。

## 生产构建

```bash
npm run build
```

当前版本同时支持 Cloudflare / Sites 与 Netlify。Netlify 会按照仓库中的 `netlify.toml` 自动生成独立静态版本。

## 最常修改的位置

- `app/page.tsx`：姓名、文案、项目、时间线、联系方式与交互
- `app/globals.css`：颜色、字体、动画、桌面与移动端布局
- `app/layout.tsx`：SEO标题、描述和分享信息
- `public/downloads/`：PDF 与 Word 简历
- `public/manifest.webmanifest`：安装到桌面/手机后的名称与主题

## 隐私说明

公开版没有写入身份证、精确家庭住址、第二手机号或个人健康细节。发布新版本前，建议继续检查公开联系方式与个人经历的暴露范围。
