"use client";

import {
  AtSign,
  ArrowDown,
  ArrowRight,
  Bot,
  BrainCircuit,
  BriefcaseBusiness,
  Check,
  ChevronRight,
  CodeXml,
  Copy,
  Download,
  ExternalLink,
  Eye,
  FileText,
  Film,
  GitBranch,
  Layers3,
  Lightbulb,
  LockKeyhole,
  Mail,
  Menu,
  MessageCircle,
  MousePointer2,
  Network,
  Orbit,
  PackageOpen,
  Phone,
  Play,
  Quote,
  QrCode,
  RefreshCw,
  Rocket,
  Route,
  Send,
  Share2,
  Sparkles,
  Target,
  TestTube2,
  TrendingUp,
  WandSparkles,
  Workflow,
  X,
  Zap,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";

const OFFICIAL_SITE_URL =
  "https://stunning-puffpuff-d8b0be.netlify.app";
const GITHUB_REPOSITORY_URL =
  "https://github.com/pengzexi79-ops/ui-";

const contactChannels = [
  {
    label: "微信",
    value: "m3414548486",
    note: "优先联系",
    icon: MessageCircle,
    copyable: true,
  },
  {
    label: "QQ",
    value: "3163206216",
    note: "在线沟通",
    icon: MessageCircle,
    copyable: true,
  },
  {
    label: "QQ邮箱",
    value: "3163206216@qq.com",
    note: "简历与合作",
    icon: Mail,
    copyable: true,
    href: "mailto:3163206216@qq.com",
  },
  {
    label: "推特 / X",
    value: "不予透露",
    note: "隐私保护",
    icon: AtSign,
    copyable: false,
  },
  {
    label: "谷歌邮箱",
    value: "不予透露",
    note: "隐私保护",
    icon: Mail,
    copyable: false,
  },
  {
    label: "GitHub",
    value: "pengzexi79-ops/ui-",
    note: "官网开源代码",
    icon: GitBranch,
    copyable: true,
    href: GITHUB_REPOSITORY_URL,
  },
  {
    label: "Telegram",
    value: "不予透露",
    note: "隐私保护",
    icon: Send,
    copyable: false,
  },
] as const;

const navItems = [
  { label: "关于我", href: "#about" },
  { label: "AI能力", href: "#capabilities" },
  { label: "项目案例", href: "#projects" },
  { label: "成长时间线", href: "#journey" },
  { label: "AI观察", href: "#insights" },
  { label: "联系我", href: "#contact" },
];

const capabilities = [
  {
    icon: BrainCircuit,
    index: "01",
    title: "理解与拆解问题",
    text: "把模糊想法拆成目标、功能、步骤和验收标准，让AI真正知道要解决什么。",
    tags: ["需求拆解", "产品策划", "问题定义"],
  },
  {
    icon: WandSparkles,
    index: "02",
    title: "AI内容创作",
    text: "从选题、脚本和分镜，到图片、视频、角色一致性与剪辑，完成整条内容链路。",
    tags: ["AI图片", "AI视频", "AI短剧"],
  },
  {
    icon: CodeXml,
    index: "03",
    title: "AI驱动开发",
    text: "提出需求、让AI生成、自己测试、反馈异常、推动修复；重点是产品可用，而不是冒充工程师。",
    tags: ["网页", "应用原型", "AI辅助调试"],
  },
  {
    icon: Workflow,
    index: "04",
    title: "工具与工作流",
    text: "组合模型、Agent、SKILL、API与插件，减少重复步骤，探索可复用的交付流程。",
    tags: ["Agent", "SKILL", "自动化"],
  },
  {
    icon: TrendingUp,
    index: "05",
    title: "内容与运营",
    text: "在抖音、私域、闲鱼、小红书、快手与Ozon等平台做过真实运营与转化。",
    tags: ["内容增长", "私域", "电商"],
  },
  {
    icon: Network,
    index: "06",
    title: "项目与资源整合",
    text: "组织团队、连接多方、处理变化，也经历过失败；对履约、风险和现金流有真实认识。",
    tags: ["团队协同", "活动组织", "项目复盘"],
  },
];

const workflowSteps = [
  { icon: Lightbulb, title: "提出想法", text: "先说清楚想解决谁的什么问题" },
  { icon: Route, title: "拆成步骤", text: "目标、功能、内容与验收逐层拆解" },
  { icon: Bot, title: "与AI共创", text: "组合模型、提示词、工具与上下文" },
  { icon: TestTube2, title: "测试反馈", text: "自己动手试，记录错误与不合理之处" },
  { icon: RefreshCw, title: "修复迭代", text: "反复调整，直到成果真正可用" },
  { icon: Rocket, title: "完成交付", text: "沉淀可展示、可下载、可复用的作品" },
];

type Project = {
  id: string;
  icon: typeof Film;
  category: string;
  title: string;
  intro: string;
  proof: string;
  accent: string;
  facts: string[];
  process: string[];
  reflection: string;
};

const projects: Project[] = [
  {
    id: "ai-product",
    icon: Layers3,
    category: "AI 产品",
    title: "从想法到可用原型",
    intro: "不独立手写代码，通过AI协作完成网页与应用原型，并持续测试、修复和迭代。",
    proof: "需求 → 生成 → 测试 → 修复",
    accent: "cyan",
    facts: ["产品需求拆解", "AI辅助开发", "Bug反馈与修复", "持续迭代"],
    process: [
      "先用自然语言说清目标用户、使用场景和核心功能。",
      "让AI拆解页面、数据、交互与验收标准，再分步骤生成。",
      "亲自测试每条路径，把异常、截图和预期反馈给AI。",
      "不断修复，直到产品达到“能打开、能理解、能使用”。",
    ],
    reflection:
      "我的价值不是背代码，而是保持产品判断和测试闭环，让AI生成的东西从“看起来可以”走到“真的可以用”。",
  },
  {
    id: "ai-film",
    icon: Film,
    category: "AI 内容出海",
    title: "AI漫剧创作与海外分发",
    intro: "用AI制作漫剧并运营Instagram账号，梳理作品未来发展方向，在持续更新中验证海外内容表达。",
    proof: "漫剧制作 · Instagram · 持续更新",
    accent: "violet",
    facts: ["世界观与剧情", "人物一致性", "AI视频与剪辑", "Instagram运营"],
    process: [
      "把故事拆成情绪节点、人物行动与镜头节奏。",
      "先稳定角色、服装、年代和场景，再生成关键帧。",
      "按镜头生成、剪辑并检查连续性，再整理适合海外账号持续更新的内容。",
      "结合Instagram发布反馈，持续调整作品定位与未来发展方向。",
    ],
    reflection:
      "出海不只是翻译或搬运。作品必须同时解决角色连续性、节奏、视觉理解和账号持续更新的问题。",
  },
  {
    id: "ai-relay",
    icon: Network,
    category: "AI 商业实践",
    title: "AI模型中转站短期运营",
    intro: "参与搭建并运营AI模型中转服务，用约一周时间验证用户获取、付费转化和基础服务链路。",
    proof: "一周 100+ 用户 · 起步变现 1,700+ 元",
    accent: "blue",
    facts: ["用户获取", "付费转化", "模型服务", "合作终止复盘"],
    process: [
      "围绕模型访问需求整理产品入口、使用路径和基础服务说明。",
      "在短周期内进行推广、承接用户并收集实际使用反馈。",
      "约一周获得100+用户，起步阶段一周变现1700+元。",
      "后因合作及其他现实原因终止，没有把短期结果包装成长期成功。",
    ],
    reflection:
      "这次经历证明我能快速把AI需求转成有人使用、有人付费的服务，也让我认识到合作边界和长期稳定性同样重要。",
  },
  {
    id: "ai-soft-ad",
    icon: WandSparkles,
    category: "AI 商业交付",
    title: "AI软广产品交付",
    intro: "使用AI完成能够真正交付给甲方的软广产品，把创意、内容生成、修改反馈和最终交付连成闭环。",
    proof: "从需求到甲方可接收成果",
    accent: "cyan",
    facts: ["甲方需求理解", "软广策划", "AI内容生产", "修改与交付"],
    process: [
      "先理解甲方目标、受众、产品信息与内容边界。",
      "使用AI辅助完成创意方向、脚本或素材方案。",
      "根据实际反馈持续修改，而不是停留在一次生成。",
      "整理为甲方可以接收、查看和继续使用的交付成果。",
    ],
    reflection:
      "真正的AI产品不是“生成过”，而是有人提出要求、有人验收，最终成果能够进入真实业务场景。",
  },
  {
    id: "douyin",
    icon: Play,
    category: "内容增长",
    title: "抖音账号增长与变现",
    intro: "在约两个月内把内容账号做到万粉，并完成第一阶段商业转化。",
    proof: "10,000+ 粉丝 · 5,000+ 元",
    accent: "blue",
    facts: ["选题判断", "视频钩子", "连续输出", "用户兴趣"],
    process: [
      "观察平台内容与用户反馈，筛选更容易被理解的选题。",
      "强化开头钩子、信息密度与情绪节奏。",
      "持续输出并根据数据调整内容方向。",
      "把流量转成实际收入，验证内容不只停留在播放量。",
    ],
    reflection:
      "这段经历让我明白：创意只有被用户看懂、愿意停留并采取行动，才真正产生商业价值。",
  },
  {
    id: "private-domain",
    icon: MessageCircle,
    category: "商业实践",
    title: "多平台私域经营",
    intro: "长期经营微信、QQ与多个内容、电商平台，经历获客、信任、成交、复购与项目合作。",
    proof: "累计业务流水约 40 万元",
    accent: "amber",
    facts: ["私域获客", "信任建设", "资源匹配", "成交与复购"],
    process: [
      "从校园和兼职场景积累第一批真实用户与合作资源。",
      "通过多个账号和平台连接需求、项目与执行人员。",
      "不断尝试微商、内容、电商、拉新与项目型业务。",
      "经历增长与失败后，开始重视边界、履约与现金流。",
    ],
    reflection:
      "流水不是全部。真正留下来的，是对人、需求、信任、风险和项目兑现的理解。",
  },
  {
    id: "event",
    icon: BriefcaseBusiness,
    category: "项目组织",
    title: "大型活动人员组织",
    intro: "多次组织数百人级活动招募，也经历甲方缩编、合作失效与项目失败。",
    proof: "300+ 人组织 · 176 人项目",
    accent: "rose",
    facts: ["30+人核心团队", "多方协调", "突发缩编", "失败复盘"],
    process: [
      "搭建代理与招募网络，在短时间内完成大规模人员组织。",
      "协调学生、代理、合作公司与项目甲方的信息。",
      "面对临时缩编与履约变化，处理通知、解释和资源调度。",
      "从失败中补课合同、押金、备选方案与风险隔离。",
    ],
    reflection:
      "我不回避失败。它让我很早就知道：组织到人不等于项目成功，真正困难的是让每一方都按约定完成交付。",
  },
  {
    id: "entrepreneurship-network",
    icon: BriefcaseBusiness,
    category: "创业与资源",
    title: "两次公司尝试与社会资源连接",
    intro: "在校期间先后开过两家用于承接项目、但未形成稳定业务的公司；失败之外，也建立了较深的社会连接。",
    proof: "2 家公司尝试 · 真实失败复盘",
    accent: "amber",
    facts: ["项目承接", "创业者与老板", "校园与社会资源", "能力边界"],
    process: [
      "尝试以公司主体承接项目，连接校园团队与社会需求。",
      "接触社会创业者、校园创业者、经纪从业者及不同领域的老板。",
      "在沟通、资源匹配和项目推进中理解不同角色的利益与判断方式。",
      "因年少与个人能力不足未能持续，把失败转化为对边界、履约和管理的认识。",
    ],
    reflection:
      "这两次公司经历不是成功案例。真正留下的是更早接触真实商业关系，以及知道自己当时为什么做不成。",
  },
  {
    id: "ozon",
    icon: PackageOpen,
    category: "跨境电商",
    title: "Ozon店铺探索",
    intro: "结合跨境电商专业，在创业公司学习全链路并完成店铺开设。",
    proof: "2026 · 俄语市场",
    accent: "green",
    facts: ["平台逻辑", "店铺开设", "选品框架", "运营观察"],
    process: [
      "在创业公司观察Ozon跨境电商完整业务链路。",
      "完成店铺开设，理解平台、市场与基础运营框架。",
      "梳理选品、内容、履约与资金之间的关系。",
      "因资金与阶段目标限制暂未深度投入，如实保留能力边界。",
    ],
    reflection:
      "我会明确区分“接触过、实践过、独立做成”。真实的能力边界比堆砌技术名词更重要。",
  },
];

const timeline = [
  {
    year: "2019",
    track: "成长 / 商业",
    title: "成长被迫暂停",
    text: "一次意外让生活与学习节奏中断，也让我很早开始思考：未来要靠什么建立自己的方向。",
    tone: "quiet",
  },
  {
    year: "2020 - 2021",
    track: "成长 / 商业",
    title: "第一次走进真实商业",
    text: "做过服务员与工厂流水线，也主动靠近劳务与项目资源。不是为了把打工写得漂亮，而是拿到理解业务的第一张入场券。",
    tone: "blue",
  },
  {
    year: "2021 - 2022",
    track: "成长 / 商业",
    title: "团队、项目与第一次大失败",
    text: "组建团队、组织数百人项目、接触多方资源；也因疫情、合作方与履约问题损失预期收入，开始理解商业的另一面。",
    tone: "rose",
  },
  {
    year: "2022",
    track: "AI 进阶",
    title: "第一次接触并了解AI",
    text: "开始认识AI及其可能性，当时以了解和轻度尝试为主，还没有进入深度使用阶段。",
    tone: "amber",
  },
  {
    year: "2022 - 2024",
    track: "成长 / 商业",
    title: "持续折腾，也持续受挫",
    text: "在私域、校园、活动、电商与内容之间反复尝试；在校期间先后开过两家用于承接项目、但未形成稳定业务的公司，也持续接触创业者、经纪从业者和老板。成绩、社会连接与失败同时存在。",
    tone: "rose",
  },
  {
    year: "2024",
    track: "AI 进阶",
    title: "AI进入真实创作实践",
    text: "开始把AI用于跑剧情、写世界书和设置AI智能体，从“知道AI”走向用AI辅助创作与搭建设定。",
    tone: "violet",
  },
  {
    year: "2025",
    track: "成长 / 商业",
    title: "停滞、低谷与重新观察",
    text: "长期高压和连续受挫后进入停滞期。没有把这段时间删掉，因为暂停与迷茫同样构成后来重新选择AI方向的背景。",
    tone: "quiet",
  },
  {
    year: "2026.05",
    track: "AI 进阶",
    title: "浅入研究",
    text: "开始更有意识地研究模型、工具与实际用法，逐步把零散尝试整理成项目驱动的学习路径。",
    tone: "blue",
  },
  {
    year: "2026.06",
    track: "AI 进阶",
    title: "中度研究",
    text: "把研究范围扩展到AI图片、视频、短剧、网页与应用原型，并开始重视工作流、测试和结果修复。",
    tone: "violet",
  },
  {
    year: "2026.07",
    track: "AI 进阶",
    title: "高强度深度研究",
    text: "密集使用国内外模型与AI工具，研究Agent、SKILL、API与自动化；不包装成程序员，而是把自己定位为能与AI协作落地结果的实践者。",
    tone: "cyan",
  },
  {
    year: "2026 / 持续",
    track: "AI 商业实践",
    title: "从研究走向用户、甲方与海外平台",
    text: "完成AI中转站短期运营，一周获得100+用户、起步阶段变现1700+元；同时推进AI软广交付、AI漫剧出海与Instagram账号持续更新。中转站后因合作等原因终止，真实保留结果与边界。",
    tone: "green",
  },
];

const observations = {
  growth: {
    label: "成长轨迹",
    title: "从“我该押哪条路”到“我能完成什么”",
    text: "最初的问题是方向、趋势和翻身机会；后来开始疯狂探索模型、部署与工具；真正的变化发生在开始持续制作图片、视频、剧情、网页和产品之后。",
    points: ["迷茫与焦虑", "密集探索", "开始做作品", "建立个人方法"],
  },
  strength: {
    label: "能力结构",
    title: "创意和抽象能力，是比工具更稳定的资产",
    text: "你不只看“好不好看”，还会追问镜头、节奏、情绪与连续性为什么成立。这个能力更接近导演、策划与产品判断，而不是单一软件操作。",
    points: ["创意策划", "审美判断", "需求拆解", "项目驱动学习"],
  },
  risk: {
    label: "真实短板",
    title: "最大的风险不是不会代码，而是无限准备",
    text: "新工具每天都在出现。今天研究A，明天发现B更强，作品就可能永远留在准备阶段。更适合你的方法，是先定交付节点，再允许工具进入。",
    points: ["技术基础仍需补齐", "容易追逐新工具", "下一步不清楚时会卡住", "用交付约束探索"],
  },
};

function AnimatedMetric({
  value,
  suffix,
  label,
}: {
  value: number;
  suffix: string;
  label: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    let started = false;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || started) return;
        started = true;
        const start = performance.now();
        const duration = 1100;
        const tick = (now: number) => {
          const progress = Math.min((now - start) / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          setDisplay(Math.round(value * eased));
          if (progress < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      },
      { threshold: 0.5 },
    );
    observer.observe(element);
    return () => observer.disconnect();
  }, [value]);

  return (
    <div className="metric" ref={ref}>
      <strong>
        {display.toLocaleString("zh-CN")}
        {suffix}
      </strong>
      <span>{label}</span>
    </div>
  );
}

function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="section-heading reveal">
      <span className="eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      {description ? <p>{description}</p> : null}
    </div>
  );
}

function ProjectModal({
  project,
  onClose,
}: {
  project: Project;
  onClose: () => void;
}) {
  useEffect(() => {
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener("keydown", onKey);
    };
  }, [onClose]);

  const Icon = project.icon;
  return (
    <div className="modal-backdrop" role="presentation" onMouseDown={onClose}>
      <article
        className={`project-modal accent-${project.accent}`}
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-modal-title"
        onMouseDown={(event) => event.stopPropagation()}
      >
        <button className="icon-button modal-close" onClick={onClose} aria-label="关闭项目详情">
          <X size={20} />
        </button>
        <div className="modal-top">
          <div className="project-icon">
            <Icon size={25} />
          </div>
          <div>
            <span className="project-category">{project.category}</span>
            <h3 id="project-modal-title">{project.title}</h3>
          </div>
        </div>
        <p className="modal-intro">{project.intro}</p>
        <div className="modal-proof">{project.proof}</div>
        <div className="modal-grid">
          <section>
            <h4>我的做法</h4>
            <ol>
              {project.process.map((step) => (
                <li key={step}>{step}</li>
              ))}
            </ol>
          </section>
          <section>
            <h4>能力证据</h4>
            <div className="fact-list">
              {project.facts.map((fact) => (
                <span key={fact}>
                  <Check size={14} /> {fact}
                </span>
              ))}
            </div>
            <h4 className="reflection-title">我的复盘</h4>
            <p className="reflection">{project.reflection}</p>
          </section>
        </div>
      </article>
    </div>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [observation, setObservation] =
    useState<keyof typeof observations>("growth");
  const [phoneVisible, setPhoneVisible] = useState(false);
  const [shareStatus, setShareStatus] = useState("");
  const [contactStatus, setContactStatus] = useState("");
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const onScroll = () => {
      const next = window.scrollY > 24;
      setScrolled((current) => (current === next ? current : next));
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const revealObserver = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) entry.target.classList.add("visible");
        }
      },
      { threshold: 0.12 },
    );
    document.querySelectorAll(".reveal").forEach((element) => revealObserver.observe(element));

    const sectionObserver = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target.id) setActiveSection(visible.target.id);
      },
      { rootMargin: "-25% 0px -60% 0px", threshold: [0.05, 0.2, 0.4] },
    );
    document
      .querySelectorAll("main section[id]")
      .forEach((section) => sectionObserver.observe(section));

    return () => {
      revealObserver.disconnect();
      sectionObserver.disconnect();
    };
  }, []);

  const currentObservation = observations[observation];

  const copyOfficialLink = async () => {
    try {
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(OFFICIAL_SITE_URL);
      } else {
        const input = document.createElement("textarea");
        input.value = OFFICIAL_SITE_URL;
        input.setAttribute("readonly", "");
        input.style.position = "fixed";
        input.style.opacity = "0";
        document.body.appendChild(input);
        input.select();
        document.execCommand("copy");
        input.remove();
      }
      setShareStatus("网址已复制，可以粘贴到任意设备或聊天软件。");
      window.setTimeout(() => setShareStatus(""), 2800);
    } catch {
      setShareStatus("复制失败，请长按网址手动复制。");
    }
  };

  const shareOfficialLink = async () => {
    if (!navigator.share) {
      await copyOfficialLink();
      return;
    }
    try {
      await navigator.share({
        title: "彭泽曦｜AI 原生实践者",
        text: "彭泽曦个人官方主页",
        url: OFFICIAL_SITE_URL,
      });
      setShareStatus("已调起系统分享。");
    } catch (error) {
      if (error instanceof DOMException && error.name === "AbortError") return;
      setShareStatus("当前浏览器无法分享，可使用复制网址。");
    }
  };

  const copyContact = async (label: string, value: string) => {
    try {
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(value);
      } else {
        const input = document.createElement("textarea");
        input.value = value;
        input.setAttribute("readonly", "");
        input.style.position = "fixed";
        input.style.opacity = "0";
        document.body.appendChild(input);
        input.select();
        document.execCommand("copy");
        input.remove();
      }
      setContactStatus(`${label}已复制：${value}`);
      window.setTimeout(() => setContactStatus(""), 2800);
    } catch {
      setContactStatus(`复制失败，请长按${label}手动复制。`);
    }
  };

  return (
    <main id="home" className="site-shell">

      <header className={`site-header ${scrolled ? "is-scrolled" : ""}`}>
        <a className="brand" href="#home" aria-label="彭泽曦个人品牌官网首页">
          <span className="brand-mark">PZ</span>
          <span>
            <strong>彭泽曦</strong>
            <small>PERSONAL OFFICIAL HOMEPAGE</small>
          </span>
        </a>
        <nav className="desktop-nav" aria-label="主导航">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={activeSection === item.href.slice(1) ? "active" : ""}
            >
              {item.label}
            </a>
          ))}
        </nav>
        <div className="header-actions">
          <a className="button button-small button-ghost" href="/downloads/Peng-Zexi-AI-Native-Resume-2026.pdf" download>
            <Download size={15} />
            简历
          </a>
          <button
            className="icon-button mobile-menu-button"
            onClick={() => setMenuOpen((value) => !value)}
            aria-label={menuOpen ? "关闭菜单" : "打开菜单"}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
        {menuOpen ? (
          <nav className="mobile-nav" aria-label="移动端导航">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} onClick={() => setMenuOpen(false)}>
                {item.label}
                <ChevronRight size={16} />
              </a>
            ))}
          </nav>
        ) : null}
      </header>

      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-copy">
          <div className="status-pill reveal visible">
            <span />
            PERSONAL OFFICIAL HOMEPAGE · PUBLIC
          </div>
          <p className="hero-kicker reveal visible">AI 原生实践者 · 内容 / 产品 / 运营</p>
          <h1 id="hero-title" className="reveal visible">
            我不会独立手写代码，
            <br />
            但我能和AI一起
            <span>把想法做出来。</span>
          </h1>
          <p className="hero-lead reveal visible">
            我不是传统程序员。我的能力是理解问题、拆解需求、调用AI、持续测试，
            再把生成结果一步一步修到真正可用。
          </p>
          <div className="hero-actions reveal visible">
            <a className="button button-primary" href="#projects">
              看我做过什么
              <ArrowRight size={17} />
            </a>
            <a className="button button-secondary" href="/downloads/Peng-Zexi-AI-Native-Resume-2026.pdf" download>
              <FileText size={17} />
              下载正式简历
            </a>
          </div>
          <div className="hero-principle reveal visible">
            <Quote size={18} />
            <p>未来重要的不是记住多少代码，而是学会与AI协作，创造真正的价值。</p>
          </div>
        </div>

        <div className="hero-visual reveal visible" aria-label="彭泽曦个人肖像与AI能力视觉">
          <div className="orbit orbit-one" />
          <div className="orbit orbit-two" />
          <div className="orbit orbit-three" />
          <span className="orbit-node node-one">
            <BrainCircuit size={15} /> THINK
          </span>
          <span className="orbit-node node-two">
            <TestTube2 size={15} /> TEST
          </span>
          <span className="orbit-node node-three">
            <Rocket size={15} /> SHIP
          </span>
          <div className="portrait-card">
            <div className="portrait-grid" aria-hidden="true" />
            <img
              className="portrait-image"
              src="/portrait.webp"
              srcSet="/portrait.webp 720w, /portrait-hd.webp 1080w"
              sizes="(max-width: 480px) 240px, 285px"
              alt="彭泽曦个人肖像"
              width="1080"
              height="1440"
              loading="eager"
              decoding="async"
              fetchPriority="high"
            />
            <span className="portrait-label">PORTRAIT / 彭泽曦</span>
            <p>彭泽曦</p>
            <small>普通起点 · AI 放大器 · 真实执行</small>
          </div>
          <div className="floating-card floating-card-one">
            <Sparkles size={17} />
            <span>
              <small>CORE</small>
              创意 × 抽象能力
            </span>
          </div>
          <div className="floating-card floating-card-two">
            <MousePointer2 size={17} />
            <span>
              <small>METHOD</small>
              项目驱动学习
            </span>
          </div>
        </div>

        <div className="scroll-cue">
          <span>SCROLL TO EXPLORE</span>
          <ArrowDown size={15} />
        </div>
      </section>

      <section className="metrics-section" aria-label="核心数据">
        <div className="metrics-grid reveal">
          <AnimatedMetric value={100} suffix="+" label="中转站短期用户" />
          <AnimatedMetric value={1700} suffix="+" label="起步阶段一周变现" />
          <AnimatedMetric value={10000} suffix="+" label="内容账号粉丝" />
          <AnimatedMetric value={40} suffix="万+" label="累计业务流水" />
        </div>
        <p className="data-note">数据来自本人提供的履历资料，作为经历说明，不替代第三方审计。</p>
      </section>

      <section id="about" className="content-section about-section">
        <SectionHeading
          eyebrow="01 / About me"
          title="不包装成技术大神，展示真实的成长能力"
          description="普通学历、没有编程基础，并不等于不能做产品。我的方法，是把AI当作长期协作伙伴和生产工具。"
        />
        <div className="about-layout">
          <div className="about-manifesto reveal">
            <span className="large-index">AI / HUMAN</span>
            <h3>
              我擅长的不是
              <br />
              <del>独立写代码</del>
              <br />
              而是让AI和我一起
              <br />
              <em>完成结果。</em>
            </h3>
          </div>
          <div className="about-story reveal">
            <p>
              我很早就进入真实商业环境：做过服务员、进过工厂、组织过团队、经营过私域，
              也经历过甲方缩编、项目失效和现金流压力。成功与失败都构成了我的判断。
            </p>
            <p>
              2022年，我第一次接触并了解AI，但当时没有深度使用。2024年，我开始用AI跑剧情、
              写世界书和设置智能体。2026年5月浅入研究、6月进入中度研究、7月开始高强度深度研究，
              逐步扩展到AI图片、视频、短剧、网页、应用原型与工作流。
            </p>
            <div className="truth-grid">
              <div>
                <Check size={16} />
                <span>
                  <strong>我会说清能力边界</strong>
                  接触过、实践过、独立做成，是三件不同的事
                </span>
              </div>
              <div>
                <Check size={16} />
                <span>
                  <strong>我重视真实可用</strong>
                  不满足于生成出来，更关心是否能被使用
                </span>
              </div>
              <div>
                <Check size={16} />
                <span>
                  <strong>我保留失败经历</strong>
                  因为风险、履约与复盘同样是能力
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="capabilities" className="content-section capability-section">
        <SectionHeading
          eyebrow="02 / AI capabilities"
          title="不是“技术栈”，是我如何借助AI解决问题"
          description="能力的重点不在软件名，而在从问题到交付的完整链路。"
        />
        <div className="capability-grid">
          {capabilities.map((item) => {
            const Icon = item.icon;
            return (
              <article key={item.index} className="capability-card reveal">
                <div className="card-topline">
                  <div className="capability-icon">
                    <Icon size={22} />
                  </div>
                  <span>{item.index}</span>
                </div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
                <div className="tag-list">
                  {item.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              </article>
            );
          })}
        </div>

        <div className="workflow-panel reveal">
          <div className="workflow-heading">
            <span>
              <Orbit size={19} />
              MY AI WORKFLOW
            </span>
            <h3>一个想法，如何变成真正可用的成果</h3>
          </div>
          <div className="workflow-grid">
            {workflowSteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div className="workflow-step" key={step.title}>
                  <span className="step-number">0{index + 1}</span>
                  <Icon size={22} />
                  <h4>{step.title}</h4>
                  <p>{step.text}</p>
                  {index < workflowSteps.length - 1 ? (
                    <ArrowRight className="step-arrow" size={17} />
                  ) : null}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section id="projects" className="content-section projects-section">
        <SectionHeading
          eyebrow="03 / Selected work"
          title="真实经历，不虚构案例"
          description="这里展示的是已在资料中出现的项目类型与结果。点击每张卡片，可以查看方法、证据和复盘。"
        />
        <div className="project-grid">
          {projects.map((project) => {
            const Icon = project.icon;
            return (
              <button
                className={`project-card accent-${project.accent} reveal`}
                key={project.id}
                onClick={() => setSelectedProject(project)}
                aria-label={`查看项目：${project.title}`}
              >
                <div className="project-card-head">
                  <div className="project-icon">
                    <Icon size={23} />
                  </div>
                  <span className="project-category">{project.category}</span>
                  <ExternalLink className="project-open" size={17} />
                </div>
                <h3>{project.title}</h3>
                <p>{project.intro}</p>
                <strong>{project.proof}</strong>
                <div className="project-facts">
                  {project.facts.slice(0, 3).map((fact) => (
                    <span key={fact}>{fact}</span>
                  ))}
                </div>
              </button>
            );
          })}
        </div>
      </section>

      <section id="journey" className="content-section journey-section">
        <SectionHeading
          eyebrow="04 / Journey"
          title="商业成长与AI进阶，两条真实发生的线"
          description="创业尝试、项目失败、停滞与重新开始没有被AI经历覆盖；同一年发生的商业实践和AI探索，会分别保留。"
        />
        <div className="timeline">
          {timeline.map((item, index) => (
            <article
              className={`timeline-item tone-${item.tone} reveal`}
              key={`${item.year}-${item.track}`}
            >
              <div className="timeline-marker">
                <span>{String(index + 1).padStart(2, "0")}</span>
              </div>
              <div className="timeline-year">{item.year}</div>
              <div className="timeline-content">
                <span className="timeline-track">{item.track}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="insights" className="content-section insight-section">
        <SectionHeading
          eyebrow="05 / AI observation"
          title="GPT长期对话中的人物观察"
          description="这不是心理诊断，也不是夸奖文案，而是对一年多对话里反复出现的模式做的摘要。"
        />
        <div className="insight-layout reveal">
          <div className="insight-tabs" role="tablist" aria-label="AI观察分类">
            {(Object.keys(observations) as Array<keyof typeof observations>).map((key) => (
              <button
                key={key}
                className={observation === key ? "active" : ""}
                onClick={() => setObservation(key)}
                role="tab"
                aria-selected={observation === key}
              >
                <span>0{(Object.keys(observations) as string[]).indexOf(key) + 1}</span>
                {observations[key].label}
              </button>
            ))}
          </div>
          <div className="insight-card" role="tabpanel">
            <Quote size={34} />
            <span className="insight-label">{currentObservation.label}</span>
            <h3>{currentObservation.title}</h3>
            <p>{currentObservation.text}</p>
            <div className="insight-points">
              {currentObservation.points.map((point) => (
                <span key={point}>
                  <Check size={14} /> {point}
                </span>
              ))}
            </div>
          </div>
          <aside className="ability-radar" aria-label="能力结构概览">
            <span className="ability-title">ABILITY PROFILE</span>
            {[
              ["创意与想象", 92],
              ["抽象与策划", 88],
              ["审美判断", 84],
              ["执行推进", 78],
              ["技术基础", 42],
            ].map(([label, value]) => (
              <div className="ability-row" key={String(label)}>
                <div>
                  <span>{label}</span>
                  <small>{value}</small>
                </div>
                <div className="ability-track">
                  <i style={{ width: `${value}%` }} />
                </div>
              </div>
            ))}
            <p>分值是长期对话中的相对画像，用于表达结构，不是标准化测评结果。</p>
          </aside>
        </div>
      </section>

      <section className="content-section thinking-section" aria-labelledby="thinking-title">
        <SectionHeading eyebrow="06 / What I believe" title="我对AI与成长的三个判断" />
        <div className="thinking-grid" id="thinking-title">
          <article className="thinking-card reveal">
            <span>01</span>
            <Target size={22} />
            <h3>先解决问题，再谈工具</h3>
            <p>模型排名会变，工具会过时。稳定的能力，是判断问题、拆解目标和验证结果。</p>
          </article>
          <article className="thinking-card reveal">
            <span>02</span>
            <Zap size={22} />
            <h3>普通人也能获得杠杆</h3>
            <p>AI让没有科班基础的人，也能跨过第一道门槛；前提是愿意测试、修正和承担结果。</p>
          </article>
          <article className="thinking-card reveal">
            <span>03</span>
            <Eye size={22} />
            <h3>真实比“全都会”更可信</h3>
            <p>我不会把AI生成的代码说成自己精通，也不会删除失败。能力边界越清楚，合作越可靠。</p>
          </article>
        </div>
      </section>

      <section id="contact" className="content-section contact-section">
        <div className="contact-panel reveal">
          <div className="contact-copy">
            <span className="eyebrow">07 / Contact</span>
            <h2>
              如果你需要一个
              <br />
              真正会把AI
              <span>用起来的人。</span>
            </h2>
            <p>
              我希望加入能用到AI能力、允许持续成长、并且需要把事情真正落地的团队。
            </p>
            <div className="contact-actions">
              <a className="button button-primary" href="mailto:3163206216@qq.com">
                <Mail size={17} />
                发邮件联系
              </a>
              <button className="button button-secondary" onClick={() => setPhoneVisible((value) => !value)}>
                <Phone size={17} />
                {phoneVisible ? "181 7280 4552" : "显示手机号"}
              </button>
            </div>
          </div>
          <div className="contact-side">
            <aside className="contact-directory" aria-label="完整联系方式">
              <div className="contact-directory-heading">
                <span>
                  <strong>完整联系方式</strong>
                  <small>公开账号可一键复制，未公开平台明确标注</small>
                </span>
                <span className="contact-availability">
                  <span aria-hidden="true" />
                  可联系
                </span>
              </div>
              <div className="contact-channel-grid">
                {contactChannels.map((channel) => {
                  const Icon = channel.icon;
                  return (
                    <article
                      className={`contact-channel ${channel.copyable ? "is-public" : "is-private"}`}
                      key={channel.label}
                    >
                      <span className="contact-channel-icon">
                        {channel.copyable ? <Icon size={17} /> : <LockKeyhole size={16} />}
                      </span>
                      <span className="contact-channel-copy">
                        <small>
                          {channel.label} · {channel.note}
                        </small>
                        {"href" in channel ? (
                          <a
                            href={channel.href}
                            target={channel.label === "GitHub" ? "_blank" : undefined}
                            rel={channel.label === "GitHub" ? "noreferrer" : undefined}
                          >
                            {channel.value}
                          </a>
                        ) : (
                          <strong>{channel.value}</strong>
                        )}
                      </span>
                      {channel.copyable ? (
                        <button
                          type="button"
                          onClick={() => copyContact(channel.label, channel.value)}
                          aria-label={`复制${channel.label}`}
                        >
                          <Copy size={15} />
                        </button>
                      ) : null}
                    </article>
                  );
                })}
              </div>
              <p className="contact-status" role="status" aria-live="polite">
                {contactStatus || "微信、QQ、QQ邮箱与GitHub为当前公开联系方式。"}
              </p>
            </aside>

            <aside className="official-link-card" aria-label="个人官方主页分享">
              <div className="official-link-main">
                <div className="official-link-heading">
                  <QrCode size={22} />
                  <span>
                    <strong>个人官方主页</strong>
                    <small>公开访问 · 无需登录 · 多平台通用</small>
                  </span>
                </div>
                <a href={OFFICIAL_SITE_URL}>{OFFICIAL_SITE_URL}</a>
                <div className="share-actions">
                  <button onClick={copyOfficialLink}>
                    <Copy size={16} />
                    复制网址
                  </button>
                  <button onClick={shareOfficialLink}>
                    <Share2 size={16} />
                    系统分享
                  </button>
                </div>
                <p className="share-status" role="status" aria-live="polite">
                  {shareStatus || "电脑可扫码，手机可直接分享或复制。"}
                </p>
              </div>
              <img
                src="/official-homepage-qr.png"
                alt="彭泽曦个人官方主页二维码"
                width="240"
                height="240"
                loading="lazy"
                decoding="async"
              />
            </aside>

            <div className="download-card">
              <div className="download-card-top">
                <FileText size={25} />
                <span>
                  <strong>下载我的简历</strong>
                  <small>PDF便于投递 · DOCX便于继续修改</small>
                </span>
              </div>
              <a href="/downloads/Peng-Zexi-AI-Native-Resume-2026.pdf" download>
                <span>
                  <FileText size={17} />
                  PDF 正式版
                </span>
                <Download size={17} />
              </a>
              <a href="/downloads/Peng-Zexi-AI-Native-Resume-2026.docx" download>
                <span>
                  <FileText size={17} />
                  Word 可编辑版
                </span>
                <Download size={17} />
              </a>
              <a
                href={GITHUB_REPOSITORY_URL}
                target="_blank"
                rel="noreferrer"
              >
                <span>
                  <PackageOpen size={17} />
                  查看开源代码
                </span>
                <ExternalLink size={17} />
              </a>
              <button onClick={() => window.print()}>
                <span>
                  <FileText size={17} />
                  打印 / 保存为PDF
                </span>
                <ExternalLink size={17} />
              </button>
            </div>
          </div>
        </div>
      </section>

      <footer className="site-footer">
        <div className="footer-brand">
          <span className="brand-mark">PZ</span>
          <span>
            <strong>彭泽曦 · AI 原生实践者</strong>
            <small>把AI变成生产工具，把想法变成真实成果。</small>
          </span>
        </div>
        <div className="footer-links">
          <a href="mailto:3163206216@qq.com" aria-label="发送邮件">
            <Mail size={17} />
          </a>
          <a href="#contact" aria-label="查看微信号 m3414548486">
            <MessageCircle size={17} />
          </a>
          <a href="#contact" aria-label="查看QQ号 3163206216">
            <MessageCircle size={17} />
          </a>
          <a
            href={GITHUB_REPOSITORY_URL}
            target="_blank"
            rel="noreferrer"
            aria-label="查看GitHub开源仓库"
          >
            <GitBranch size={17} />
          </a>
        </div>
        <p>
          © 2026 彭泽曦 · 内容基于本人资料整理 ·{" "}
          <a href={OFFICIAL_SITE_URL}>个人官方主页</a> · Made with AI, directed by human judgment.
        </p>
      </footer>

      {selectedProject ? (
        <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
      ) : null}
    </main>
  );
}
