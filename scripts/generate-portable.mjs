import { mkdir, readFile, writeFile } from "node:fs/promises";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const scriptDir = dirname(fileURLToPath(import.meta.url));
const root = resolve(scriptDir, "..");
const outputDir = join(root, "portable");
const outputFile = join(outputDir, "index.html");
const oldOfficialUrl =
  "https://stunning-puffpuff-d8b0be.netlify.app";

const mimeTypes = {
  ".docx":
    "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  ".pdf": "application/pdf",
  ".svg": "image/svg+xml",
  ".webp": "image/webp",
};

function extension(path) {
  return path.slice(path.lastIndexOf("."));
}

async function toDataUri(path) {
  const bytes = await readFile(join(root, path));
  return `data:${mimeTypes[extension(path)]};base64,${bytes.toString("base64")}`;
}

const worker = (await import("../dist/server/index.js")).default;
const response = await worker.fetch(new Request("https://portable.invalid/"));

if (!response.ok) {
  throw new Error(`Unable to render portable site: ${response.status}`);
}

let html = await response.text();
const cssPath = html.match(/href="(\/assets\/[^"]+\.css)"/)?.[1];

if (!cssPath) {
  throw new Error("Unable to locate rendered stylesheet");
}

const css = await readFile(join(root, "dist/client", cssPath), "utf8");
const replacements = new Map([
  ["/portrait.webp", await toDataUri("public/portrait.webp")],
  ["/portrait-hd.webp", await toDataUri("public/portrait-hd.webp")],
  ["/favicon.svg", await toDataUri("public/favicon.svg")],
  [
    "/downloads/Peng-Zexi-AI-Native-Resume-2026.pdf",
    await toDataUri("public/downloads/Peng-Zexi-AI-Native-Resume-2026.pdf"),
  ],
  [
    "/downloads/Peng-Zexi-AI-Native-Resume-2026.docx",
    await toDataUri("public/downloads/Peng-Zexi-AI-Native-Resume-2026.docx"),
  ],
]);

html = html
  .replaceAll(
    `${oldOfficialUrl}/portrait.webp`,
    replacements.get("/portrait.webp"),
  )
  .replaceAll(oldOfficialUrl, ".");

html = html
  .replace(/<script\b[\s\S]*?<\/script>/gi, "")
  .replace(/<link[^>]+rel="modulepreload"[^>]*>/gi, "")
  .replace(/<link[^>]+rel="preload"[^>]*>/gi, "")
  .replace(/<link[^>]+rel="stylesheet"[^>]*>/gi, "")
  .replace(
    '<a href=".">.</a>',
    '<a href="./" data-current-url>当前页面即为公开镜像地址</a>',
  )
  .replace(
    /<img src="\/official-homepage-qr\.png"[^>]*>/,
    '<div class="portable-live-badge" aria-label="公开镜像已上线">PUBLIC MIRROR</div>',
  );

const portableMobileNav = `
  <nav class="mobile-nav portable-mobile-nav" aria-label="移动端导航">
    <a href="#about">关于我</a>
    <a href="#capabilities">AI能力</a>
    <a href="#projects">项目案例</a>
    <a href="#journey">成长时间线</a>
    <a href="#thinking">我的思考</a>
    <a href="#contact">联系我</a>
  </nav>`;
html = html.replace("</header>", `${portableMobileNav}</header>`);

for (const [from, to] of replacements) {
  html = html.replaceAll(from, to);
}

const portableCss = `
${css}
.reveal{opacity:1!important;transform:none!important}
.portable-mobile-nav{display:none}
.portable-mobile-nav.is-open{display:grid}
.portable-live-badge{display:grid;place-items:center;width:180px;min-height:180px;padding:18px;border:1px solid rgba(94,234,212,.24);border-radius:22px;background:radial-gradient(circle,rgba(94,234,212,.13),transparent 65%),#091019;color:#5eead4;font:800 13px/1.4 ui-monospace,SFMono-Regular,Menlo,monospace;letter-spacing:.16em;text-align:center}
.portable-toast{position:fixed;z-index:180;right:18px;bottom:18px;max-width:min(360px,calc(100% - 36px));padding:12px 15px;border:1px solid rgba(94,234,212,.25);border-radius:12px;background:#0d1620;color:#d7e2ed;box-shadow:0 18px 50px rgba(0,0,0,.38);font-size:13px}
@media(max-width:480px){.portable-live-badge{width:100%;min-height:92px}}
`;

const portableJs = `
(() => {
  const metricValues = ["100+", "1,700+", "10,000+", "40万+"];
  const showToast = (message) => {
    document.querySelector(".portable-toast")?.remove();
    const toast = document.createElement("div");
    toast.className = "portable-toast";
    toast.textContent = message;
    document.body.append(toast);
    setTimeout(() => toast.remove(), 2200);
  };
  const copyText = async (value, label) => {
    try {
      await navigator.clipboard.writeText(value);
      showToast(label + "已复制");
    } catch {
      const area = document.createElement("textarea");
      area.value = value;
      area.style.position = "fixed";
      area.style.opacity = "0";
      document.body.append(area);
      area.select();
      document.execCommand("copy");
      area.remove();
      showToast(label + "已复制");
    }
  };

  document.querySelectorAll(".reveal").forEach((node) => node.classList.add("visible"));
  document.querySelectorAll(".metric strong").forEach((node, index) => {
    if (metricValues[index]) node.textContent = metricValues[index];
  });

  const currentUrl = location.href.split("#")[0];
  const currentLink = document.querySelector("[data-current-url]");
  if (currentLink) {
    currentLink.href = currentUrl;
    currentLink.textContent = currentUrl;
  }

  const menuButton = document.querySelector(".mobile-menu-button");
  const mobileNav = document.querySelector(".mobile-nav");
  menuButton?.addEventListener("click", () => {
    if (!mobileNav) return;
    const open = mobileNav.classList.toggle("is-open");
    menuButton.setAttribute("aria-expanded", String(open));
  });
  mobileNav?.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      mobileNav.classList.remove("is-open");
      menuButton?.setAttribute("aria-expanded", "false");
    });
  });

  document.querySelectorAll(".project-card").forEach((card) => {
    card.addEventListener("click", () => {
      const title = card.querySelector("h3")?.textContent?.trim() || "项目详情";
      const intro = card.querySelector(":scope > p")?.textContent?.trim() || "";
      const proof = card.querySelector(":scope > strong")?.textContent?.trim() || "";
      const facts = [...card.querySelectorAll(".project-facts span")].map((item) => item.textContent?.trim()).filter(Boolean);
      const backdrop = document.createElement("div");
      backdrop.className = "modal-backdrop";
      backdrop.innerHTML = '<article class="project-modal"><button class="icon-button modal-close" type="button" aria-label="关闭">×</button><div class="modal-top"><div><span class="eyebrow">PROJECT DETAIL</span><h3></h3></div></div><p class="modal-intro"></p><strong class="modal-proof"></strong><div class="modal-grid"><div><h4>我如何完成</h4><ol><li>从真实目标和使用场景出发拆解需求。</li><li>调用AI生成内容、方案或产品原型。</li><li>通过测试、反馈和修改推进到可用结果。</li></ol></div><div><h4>项目关键词</h4><div class="fact-list tag-list"></div></div></div></article>';
      backdrop.querySelector("h3").textContent = title;
      backdrop.querySelector(".modal-intro").textContent = intro;
      backdrop.querySelector(".modal-proof").textContent = proof;
      const factList = backdrop.querySelector(".fact-list");
      facts.forEach((fact) => {
        const span = document.createElement("span");
        span.textContent = fact;
        factList.append(span);
      });
      const close = () => {
        backdrop.remove();
        document.body.style.overflow = "";
      };
      backdrop.querySelector(".modal-close").addEventListener("click", close);
      backdrop.addEventListener("click", (event) => {
        if (event.target === backdrop) close();
      });
      document.addEventListener("keydown", function escape(event) {
        if (event.key === "Escape") {
          close();
          document.removeEventListener("keydown", escape);
        }
      });
      document.body.append(backdrop);
      document.body.style.overflow = "hidden";
    });
  });

  document.querySelectorAll(".contact-channel.is-public").forEach((card) => {
    const button = card.querySelector("button");
    const value = card.querySelector(".contact-channel-copy strong, .contact-channel-copy a")?.textContent?.trim();
    const label = card.querySelector(".contact-channel-copy small")?.textContent?.split("·")[0]?.trim() || "联系方式";
    if (button && value) button.addEventListener("click", () => copyText(value, label));
  });

  const shareButtons = document.querySelectorAll(".share-actions button");
  shareButtons[0]?.addEventListener("click", () => copyText(currentUrl, "网址"));
  shareButtons[1]?.addEventListener("click", async () => {
    if (navigator.share) {
      try {
        await navigator.share({ title: document.title, url: currentUrl });
      } catch {}
    } else {
      await copyText(currentUrl, "网址");
    }
  });

  const phoneButton = [...document.querySelectorAll(".contact-actions button")].find((button) => button.textContent?.includes("显示手机号"));
  phoneButton?.addEventListener("click", () => {
    phoneButton.textContent = "181 7280 4552";
  });
})();
`;

html = html.replace(
  "</head>",
  `<style>${portableCss}</style></head>`,
);
html = html.replace(
  "</body>",
  `<script>${portableJs}</script></body>`,
);

await mkdir(outputDir, { recursive: true });
await writeFile(outputFile, html);
console.log(outputFile);
