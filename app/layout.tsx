import type { Metadata, Viewport } from "next";
import "./globals.css";

const siteUrl = "https://stunning-puffpuff-d8b0be.netlify.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "彭泽曦｜AI 原生实践者",
  description:
    "彭泽曦的个人品牌官网：不是传统程序员，而是持续利用AI完成内容、产品、网页与工作流的AI原生实践者。",
  keywords: [
    "彭泽曦",
    "AI原生实践者",
    "AI产品实践",
    "AI内容创作",
    "AIGC",
    "AI驱动开发",
    "AI自动化",
  ],
  authors: [{ name: "彭泽曦" }],
  creator: "彭泽曦",
  applicationName: "彭泽曦｜AI 原生实践者",
  manifest: "/manifest.webmanifest",
  alternates: {
    canonical: "/",
  },
  other: {
    "theme-color": "#05070c",
    "codex-preview": "development",
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
  openGraph: {
    title: "彭泽曦｜AI 原生实践者",
    description: "把AI变成生产工具，把模糊想法一步一步变成真正可用的成果。",
    url: siteUrl,
    siteName: "彭泽曦个人官方主页",
    type: "website",
    locale: "zh_CN",
    images: [
      {
        url: "/portrait-hd.webp",
        width: 1080,
        height: 1440,
        alt: "彭泽曦个人肖像",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "彭泽曦｜AI 原生实践者",
    description: "把AI变成生产工具，把模糊想法一步一步变成真正可用的成果。",
    images: ["/portrait-hd.webp"],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#05070c",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "彭泽曦",
    url: siteUrl,
    image: `${siteUrl}/portrait-hd.webp`,
    jobTitle: "AI 原生实践者",
    email: "mailto:3163206216@qq.com",
    telephone: "+86 181 7280 4552",
    description:
      "AI产品实践者、AI内容创作者与AI驱动开发实践者，擅长借助AI把想法转化为可测试、可使用的成果。",
  };

  return (
    <html lang="zh-CN">
      <body>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </body>
    </html>
  );
}
