# 交互式个人简历 / Peng Zexi Interactive Resume

彭泽曦的单页个人品牌网站与交互式网页简历，以真实经历为内容主线，展示 AI 实践、内容与运营能力、项目案例、成长时间线和公开联系渠道。

> 仓库名称为 `interactive-resume`。本次文档升级不改变应用代码与线上展示内容。

## 在线演示

- [彭泽曦个人官方主页](https://stunning-puffpuff-d8b0be.netlify.app)

该地址已于 2026-08-04 验证可访问，无需登录。

## 实际功能

- 单页分区导航：关于我、AI 能力、项目案例、成长时间线、AI 观察与联系信息
- 响应式桌面和移动端导航，并根据滚动位置高亮当前分区
- 进入视口时触发内容与核心数据动画
- 项目卡片弹窗，展示项目方法、能力证据和复盘；支持点击遮罩或按 `Esc` 关闭
- AI 观察标签页与能力结构可视化
- 公开联系方式复制、系统分享、手机号按需显示
- PDF 与 DOCX 简历下载，以及浏览器打印/另存为 PDF
- SEO 元数据、Open Graph、Twitter Card、Person 结构化数据、Web App Manifest、`robots.txt` 与站点地图
- 可生成内嵌样式、图片和简历文件的独立单文件版本
- Cloudflare Worker/Vinext 构建产物校验，以及 Netlify 静态部署配置

## 技术栈

| 类别 | 技术 |
| --- | --- |
| UI | React 19、TypeScript、Lucide React |
| 应用框架 | Next.js App Router 16 |
| 构建与运行 | Vinext、Vite 8、Cloudflare Vite Plugin、Wrangler |
| 样式 | 原生 CSS、Tailwind CSS 4（通过 PostCSS 导入） |
| 数据工具 | Drizzle ORM / Drizzle Kit（仓库保留数据库示例与脚手架，当前简历主页内容直接定义在页面中） |
| 质量检查 | ESLint 9、Node.js 内置测试运行器、自定义构建产物校验脚本 |
| 部署 | Cloudflare Worker 兼容产物、Netlify 单文件静态发布 |

## 环境要求

- Node.js `>= 22.13.0`
- npm（随 Node.js 安装）
- Bash 与 GNU `timeout`

项目脚本使用 Bash，并由 `scripts/sites-env.sh` 准备隔离的构建环境。在 Windows 上请使用 WSL 或提供 Bash 与 GNU coreutils 的兼容环境。

## 本地运行

推荐使用锁文件进行可复现安装：

```bash
npm ci
npm run dev
```

开发服务器由 Vite/Vinext 启动，默认监听所有网络接口；请仅在可信网络中运行。终端会显示实际访问地址。

生产模式预览需要先完成构建：

```bash
npm run build
npm start
```

## 构建与测试

```bash
# 受超时保护的 Vinext 生产构建，并校验 Worker 与托管清单
npm run build

# 构建后运行渲染 HTML 测试
npm test

# 静态检查
npm run lint

# 单独校验已有构建产物
npm run validate:artifact
```

`npm test` 会先执行完整构建，再使用 Node.js 内置测试运行器请求生成的 Worker，确认首页成功返回 HTML，并包含项目要求的预览元数据。

### 生成独立单文件版本

```bash
npm run build
npm run portable
```

输出为 `portable/index.html`。生成器会把 CSS、肖像、图标及 PDF/DOCX 简历资源嵌入页面，并为主要交互提供原生 JavaScript 版本。`portable/` 为生成目录，不纳入版本控制。

## 项目结构

```text
.
├─ app/
│  ├─ page.tsx                 # 页面内容、数据与交互
│  ├─ globals.css              # 视觉系统、动画、响应式与打印样式
│  └─ layout.tsx               # SEO、分享元数据与结构化数据
├─ public/
│  ├─ downloads/               # PDF 与 DOCX 简历
│  ├─ manifest.webmanifest     # Web App Manifest
│  ├─ robots.txt               # 搜索引擎抓取规则
│  └─ sitemap.xml              # 站点地图
├─ worker/index.ts             # Cloudflare/Vinext Worker 入口
├─ build/                      # Sites 构建插件
├─ scripts/                    # 构建、产物校验与单文件生成脚本
├─ tests/                      # 渲染产物测试
├─ db/、drizzle/、examples/    # 数据库脚手架、迁移元数据与 D1 示例
├─ netlify.toml                # Netlify 构建、发布与安全响应头
├─ vite.config.ts              # Vinext、Vite 与 Cloudflare 配置
└─ package.json                # 脚本、依赖与项目元数据
```

## 项目亮点

- **内容可信**：明确区分接触、实践与独立完成，保留项目失败和能力边界说明。
- **交互完整**：导航、动画、弹窗、标签页、复制、分享、下载和打印覆盖简历浏览的主要路径。
- **响应式与可访问性基础**：提供语义化分区、ARIA 标签、键盘关闭弹窗、状态播报和移动端布局。
- **双构建形态**：既可运行完整 React 应用，也可输出便于归档和分发的单 HTML 文件。
- **可发现性**：包含规范链接、社交分享元数据、结构化数据、Manifest、站点地图和抓取规则。
- **构建可验证**：生产构建受时间限制保护，并在结束后检查 Worker 导出和托管清单。

## 部署说明

仓库中的 `netlify.toml` 会执行：

```bash
npm run build && npm run portable
```

随后发布 `portable/` 目录，并配置基础安全响应头。部署前应检查站点 URL、二维码、SEO 元数据、站点地图及公开资料是否仍然有效。

## 隐私与内容使用

- 网站会公开展示个人履历、肖像、简历文件及部分联系方式；部署或派生版本前，请逐项审核公开范围。
- 项目未在前端实现联系表单、用户账户或分析脚本，当前仓库也未描述对访问者主动收集个人数据的功能。
- 浏览器的下载、剪贴板、系统分享和打印能力仅在用户操作时调用；具体行为仍受浏览器及托管平台策略影响。
- 请勿在 Issue、Pull Request、截图或日志中提交私人邮箱、住址、证件信息、密码、令牌或其他敏感数据。
- 源代码采用 MIT License；个人肖像、简历文档、履历文本、联系方式和个人品牌素材不因源代码开源而授权冒充身份或复用个人形象。

## 贡献

欢迎修正文档、无障碍、兼容性和工程质量问题。提交前请阅读 [CONTRIBUTING.md](CONTRIBUTING.md)，并至少运行与改动相关的检查。

如需复用本项目，请先将姓名、肖像、简历、经历、联系方式、二维码、站点 URL 和品牌素材替换为你有权使用的内容。

## 许可证

源代码依据 [MIT License](LICENSE) 发布。许可证文件末尾进一步说明了个人资料与品牌素材的使用边界。第三方依赖分别适用其自身许可证。
