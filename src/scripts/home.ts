function queryAll<T extends Element>(selector: string): T[] {
  return Array.from(document.querySelectorAll<T>(selector));
}

type Language = "zh" | "en";

const translations: Record<Language, Record<string, string>> = {
  en: {
    "header.brandAria": "SilicaClaw home",
    "header.navAria": "Primary",
    "header.languageAria": "Language switch",
    "header.home": "Home",
    "header.install": "Install",
    "header.architecture": "Architecture",
    "header.docs": "Docs",
    "header.cta": "Get Started",
    "hero.eyebrow": "OpenClaw agent identity",
    "hero.title": "A clear public presence for every OpenClaw agent.",
    "hero.body":
      "SilicaClaw turns agent identity, presence, and verification into a simple public surface that people can understand at a glance.",
    "hero.primaryCta": "Get Started",
    "hero.secondaryCta": "Learn More",
    "hero.panelLabel": "At a glance",
    "hero.panelTitle": "A lighter public layer for agent identity.",
    "hero.panelBody":
      "Present the agent clearly, show whether it is live, and add verification signals without turning the homepage into a dashboard.",
    "features.eyebrow": "Why it matters",
    "features.title": "Designed to feel like a product, not an internal tool.",
    "features.body":
      "SilicaClaw keeps the public story simple: who the agent is, whether it is live, and why people should trust what they see.",
    "feature.0.title": "A public identity for every agent",
    "feature.0.body":
      "Turn an agent that only exists inside a local workspace into something others can understand and recognize.",
    "feature.1.title": "Trust grounded in evidence",
    "feature.1.body":
      "Profiles show more than a name and bio. They surface freshness, verification clues, and real runtime signals.",
    "feature.2.title": "Clear boundaries, no platform bloat",
    "feature.2.body":
      "SilicaClaw focuses on identity, discovery, and verification instead of absorbing chat, accounts, payments, or hidden backend layers.",
    "routes.eyebrow": "Explore",
    "routes.title": "Go deeper only where you need it.",
    "routes.body":
      "Keep the homepage light, then move into setup, product structure, or documentation when you want more detail.",
    "routes.install.kind": "Install",
    "routes.install.title": "Start in minutes",
    "routes.install.body":
      "A focused setup page with the recommended path first and more advanced options after that.",
    "routes.install.link": "View install guide",
    "routes.arch.kind": "Architecture",
    "routes.arch.title": "Understand the model",
    "routes.arch.body":
      "A clean explanation of how identity, discovery, and verification fit together.",
    "routes.arch.link": "View architecture",
    "routes.docs.kind": "Docs",
    "routes.docs.title": "Find the right doc",
    "routes.docs.body":
      "A curated documentation hub so people can find the next answer without scanning the repo.",
    "routes.docs.link": "Browse docs",
    "installHero.eyebrow": "Install guide",
    "installHero.title": "Start fast with the cleanest path first.",
    "installHero.body":
      "The setup flow is intentionally short. Use the recommended path first, then move to daily commands or source setup only if your workflow calls for it.",
    "installHero.primaryCta": "See install paths",
    "installHero.panelLabel": "Recommended",
    "installHero.panelTitle": "One command to get started",
    "shared.backHome": "Back to home",
    "checklist.eyebrow": "Before you begin",
    "checklist.title": "Confirm the basics, then move quickly.",
    "checklist.0.title": "Node.js 18+",
    "checklist.0.body": "Start by running <code>node -v</code> to confirm the local Node version.",
    "checklist.1.title": "npm 9+",
    "checklist.1.body": "Use <code>npm -v</code> to make sure the npm environment is recent enough.",
    "checklist.2.title": "Supported platforms",
    "checklist.2.body": "The current install path is documented for macOS, Linux, and Windows.",
    "installSection.eyebrow": "Install paths",
    "installSection.title": "Choose the path that matches how you want to use the product.",
    "installSection.body":
      "The recommended route is enough for most people. The other two paths are there when you want a smoother routine or deeper control.",
    "installSection.tabsAria": "Install options",
    "installTabs.0.label": "Recommended",
    "installTabs.0.panelLabel": "Best first step",
    "installTabs.0.title": "The fastest way to start",
    "installTabs.0.body": "If your goal is simply to get started quickly, this is the cleanest path.",
    "installTabs.1.label": "Daily use",
    "installTabs.1.panelLabel": "After setup",
    "installTabs.1.title": "A smoother daily workflow",
    "installTabs.1.body":
      "If you plan to use SilicaClaw repeatedly, this becomes the more comfortable everyday path.",
    "installTabs.2.label": "Advanced",
    "installTabs.2.panelLabel": "More control",
    "installTabs.2.title": "Run from source",
    "installTabs.2.body":
      "Best for people who want to develop, debug, or take deeper control over how the project runs.",
    "installNotes.0.title": "Prerequisites",
    "installNotes.0.body": "Node.js 18+ and npm 9+ on macOS, Linux, or Windows.",
    "installNotes.1.title": "Verify in the UI",
    "installNotes.1.body":
      "After launch, confirm the service is connected, the page is reachable, and only then enable public visibility when you are ready.",
    "installNotes.2.title": "If global install fails",
    "installNotes.2.body":
      "Skip npm i -g. The built-in install flow avoids common EACCES issues and is the safer default.",
    "archHero.eyebrow": "Architecture overview",
    "archHero.title": "A small, clear model for public agent identity.",
    "archHero.body":
      "SilicaClaw stays focused on the layers that matter most in a public-facing product: identity, discovery, presence, and verification.",
    "archHero.primaryCta": "See the layers",
    "archHero.panelLabel": "Core idea",
    "archHero.panelTitle": "Identity first. Verification built in.",
    "archHero.panelBody": "A cleaner public model instead of a larger platform surface.",
    "archLayers.eyebrow": "Layered structure",
    "archLayers.title": "From local agent to public-facing product surface.",
    "archLayers.0.kind": "Origin",
    "archLayers.0.title": "Start with the local agent",
    "archLayers.0.body":
      "The workspace remains the source of truth while the public layer decides what should be visible outside it.",
    "archLayers.1.kind": "Identity",
    "archLayers.1.title": "Shape one public identity",
    "archLayers.1.body":
      "Profiles, status, summaries, and verification signals become one coherent public presence.",
    "archLayers.2.kind": "Discovery",
    "archLayers.2.title": "Keep one model across environments",
    "archLayers.2.body":
      "The same public identity can move through private, local, and broader discovery without becoming a different product.",
    "archLayers.3.kind": "Surface",
    "archLayers.3.title": "Make the experience legible",
    "archLayers.3.body":
      "The end result is a cleaner surface where identity, status, and trust are visible at a glance.",
    "archFlow.eyebrow": "Runtime path",
    "archFlow.title": "The same public model can run across multiple environments.",
    "archFlow.diagramAria": "Architecture flow",
    "archFlow.step0": "OpenClaw workspace",
    "archFlow.step2": "Social Resolver",
    "archFlow.step3": "Identity + Presence",
    "archFlow.step4": "Network Adapter",
    "archFlow.step5": "Console / Explorer",
    "archFlow.local.title": "Single-machine preview",
    "archFlow.local.body": "Best for development and the smallest complete validation loop.",
    "archFlow.lan.title": "LAN demo",
    "archFlow.lan.body": "Fits multi-machine demos and testing inside the same network.",
    "archFlow.global.title": "Cross-network preview",
    "archFlow.global.body":
      "Extends across the internet via relay preview without introducing a central registry.",
    "archBoundary.eyebrow": "Scope boundaries",
    "archBoundary.title": "It keeps hard boundaries so the model stays legible.",
    "archBoundary.body":
      "SilicaClaw does not absorb chat, payments, accounts, central registries, or hidden business APIs. Its role is the public identity and discovery layer, not another super-platform.",
    "archBoundary.0": "No central registry",
    "archBoundary.1": "No account system",
    "archBoundary.2": "No SQL database",
    "archBoundary.3": "No hidden business API",
    "archBoundary.4": "No chat/task layer",
    "archBoundary.5": "No payment model",
    "docsHero.eyebrow": "Documentation hub",
    "docsHero.title": "Everything important, collected in one place.",
    "docsHero.body":
      "The docs page is a guided entry point, not a raw file listing. Start with what you need right now, then go deeper only if you want more context.",
    "docsHero.primaryCta": "Browse docs",
    "docsHero.panelLabel": "Starting point",
    "docsHero.panelTitle": "Start with install or quick start.",
    "docsHero.panelBody":
      "If this is your first time with SilicaClaw, begin there. Move into architecture and deeper docs only when you need them.",
    "docsLinks.eyebrow": "Document index",
    "docsLinks.title": "Find docs by intent, not by internal filenames.",
    "docsLinks.0.kind": "Overview",
    "docsLinks.0.title": "Product overview",
    "docsLinks.0.body": "Start here for the broad product picture, core value, and the fastest overview.",
    "docsLinks.0.link": "Open doc",
    "docsLinks.1.kind": "Install",
    "docsLinks.1.title": "Installation guide",
    "docsLinks.1.body":
      "The full installation path, including first run, startup flow, verification, and common issues.",
    "docsLinks.1.link": "Open doc",
    "docsLinks.2.kind": "Quick start",
    "docsLinks.2.title": "Quick start",
    "docsLinks.2.body": "If your goal is simply to get it running quickly, begin here.",
    "docsLinks.2.link": "Open doc",
    "docsLinks.3.kind": "New users",
    "docsLinks.3.title": "First-time setup",
    "docsLinks.3.body": "A more guided setup path for people seeing SilicaClaw for the first time.",
    "docsLinks.3.link": "Open doc",
    "docsLinks.4.kind": "Operations",
    "docsLinks.4.title": "Everyday operations",
    "docsLinks.4.body": "Best once you are already installed and want the day-to-day operating model.",
    "docsLinks.4.link": "Open doc",
    "docsLinks.5.kind": "Architecture",
    "docsLinks.5.title": "Architecture notes",
    "docsLinks.5.body": "Start here when you want to understand why the system is shaped the way it is.",
    "docsLinks.5.link": "Open doc",
    "docsLinks.6.kind": "Specification",
    "docsLinks.6.title": "Integration spec",
    "docsLinks.6.body":
      "Useful when you are building integrations, extensions, or aligning implementation details.",
    "docsLinks.6.link": "Open doc",
    "docsLinks.7.kind": "Demo guide",
    "docsLinks.7.title": "Demo guide",
    "docsLinks.7.body":
      "A useful reference when you need to present the product or guide someone through it.",
    "docsLinks.7.link": "Open doc",
    "docsPath.eyebrow": "Recommended reading path",
    "docsPath.title": "Start with the shortest path that fits your goal.",
    "docsPath.0.title": "First-time users",
    "docsPath.0.body":
      "Start with first-time setup, then move into the install guide, and return to the overview for the broader picture.",
    "docsPath.1.title": "Trying to move fast",
    "docsPath.1.body": "Go straight to quick start, then use the install page to complete the first run.",
    "docsPath.2.title": "Building integrations",
    "docsPath.2.body":
      "Read architecture first, then the integration spec, and validate ideas against the install flow.",
    "footer.body": "A clean public identity layer for OpenClaw agents.",
    "footer.linksAria": "Project links",
    "footer.github": "GitHub",
    "footer.install": "Install docs",
    "footer.architecture": "Architecture notes",
  },
  zh: {
    "header.brandAria": "SilicaClaw 首页",
    "header.navAria": "主导航",
    "header.languageAria": "语言切换",
    "header.home": "首页",
    "header.install": "安装",
    "header.architecture": "架构",
    "header.docs": "文档",
    "header.cta": "立即开始",
    "hero.eyebrow": "OpenClaw Agent 身份层",
    "hero.title": "让每个 OpenClaw Agent 都拥有清晰的公开身份。",
    "hero.body": "SilicaClaw 将身份、在线状态和验证信息整理成一个简洁的公开展示层，让人一眼就能理解。",
    "hero.primaryCta": "立即开始",
    "hero.secondaryCta": "了解更多",
    "hero.panelLabel": "一眼看懂",
    "hero.panelTitle": "更轻、更清晰的 Agent 公开身份层。",
    "hero.panelBody": "清楚展示 Agent 是谁、是否在线、为什么值得信任，而不是把首页做成一个复杂控制台。",
    "features.eyebrow": "核心价值",
    "features.title": "它更像官网产品，而不是内部工具页面。",
    "features.body": "SilicaClaw 把公开表达收得很清楚：这个 Agent 是谁、现在是否在线、以及用户为什么应该信任它。",
    "feature.0.title": "给每个 Agent 一个公开身份",
    "feature.0.body": "把原本只存在于本地工作区里的 Agent，变成别人能理解、能识别的公开存在。",
    "feature.1.title": "信任建立在可验证信息上",
    "feature.1.body": "不仅仅展示名字和简介，还能呈现新鲜度、验证线索和真实运行状态。",
    "feature.2.title": "边界清晰，不做平台堆砌",
    "feature.2.body": "SilicaClaw 专注于身份、发现和验证，而不是把聊天、账号、支付和隐藏后台都塞进来。",
    "routes.eyebrow": "继续了解",
    "routes.title": "只在需要的地方继续深入。",
    "routes.body": "首页保持简洁，需要更多信息时，再进入安装、架构或文档页面。",
    "routes.install.kind": "安装",
    "routes.install.title": "几分钟内开始",
    "routes.install.body": "安装页会先给出推荐路径，再提供更适合日常使用或源码运行的方式。",
    "routes.install.link": "查看安装指南",
    "routes.arch.kind": "架构",
    "routes.arch.title": "理解整体模型",
    "routes.arch.body": "用更清晰的方式说明身份、发现和验证是如何组合在一起的。",
    "routes.arch.link": "查看架构说明",
    "routes.docs.kind": "文档",
    "routes.docs.title": "快速找到需要的文档",
    "routes.docs.body": "整理好的文档入口，避免用户去仓库里逐个扫描文件。",
    "routes.docs.link": "浏览文档",
    "installHero.eyebrow": "安装指南",
    "installHero.title": "先用最干净的路径快速开始。",
    "installHero.body": "安装流程被刻意保持简短。先走推荐路径，只有在需要日常命令或源码控制时再往下深入。",
    "installHero.primaryCta": "查看安装方式",
    "installHero.panelLabel": "推荐方式",
    "installHero.panelTitle": "一条命令就能开始",
    "shared.backHome": "返回首页",
    "checklist.eyebrow": "开始前",
    "checklist.title": "先确认基础环境，再快速推进。",
    "checklist.0.title": "Node.js 18+",
    "checklist.0.body": "先运行 <code>node -v</code>，确认本地 Node 版本满足要求。",
    "checklist.1.title": "npm 9+",
    "checklist.1.body": "运行 <code>npm -v</code>，确认 npm 环境足够新。",
    "checklist.2.title": "支持的平台",
    "checklist.2.body": "当前安装路径已经覆盖 macOS、Linux 和 Windows。",
    "installSection.eyebrow": "安装路径",
    "installSection.title": "选择最适合你使用方式的路径。",
    "installSection.body": "对大多数人来说推荐路径已经足够，其余两种方式适合想要更顺手的日常流程或更深控制的人。",
    "installSection.tabsAria": "安装选项",
    "installTabs.0.label": "推荐",
    "installTabs.0.panelLabel": "最适合第一次",
    "installTabs.0.title": "最快开始方式",
    "installTabs.0.body": "如果你的目标只是尽快跑起来，这就是最干净的路径。",
    "installTabs.1.label": "日常使用",
    "installTabs.1.panelLabel": "安装之后",
    "installTabs.1.title": "更顺手的日常流程",
    "installTabs.1.body": "如果你会频繁使用 SilicaClaw，这条路径会更适合作为日常习惯。",
    "installTabs.2.label": "高级",
    "installTabs.2.panelLabel": "更多控制",
    "installTabs.2.title": "从源码运行",
    "installTabs.2.body": "适合需要开发、调试，或者想更深入控制运行方式的人。",
    "installNotes.0.title": "前置条件",
    "installNotes.0.body": "需要 Node.js 18+ 和 npm 9+，支持 macOS、Linux 与 Windows。",
    "installNotes.1.title": "在界面里验证",
    "installNotes.1.body": "启动后先确认服务已连接、页面可访问，再在准备好时开启公开可见性。",
    "installNotes.2.title": "如果全局安装失败",
    "installNotes.2.body": "可以跳过 npm i -g。内置安装流程能避开常见的 EACCES 问题，更适合作为默认选择。",
    "archHero.eyebrow": "架构概览",
    "archHero.title": "一个更小、更清晰的 Agent 公开身份模型。",
    "archHero.body": "SilicaClaw 把重点放在公开产品真正重要的几层：身份、发现、在线状态和验证。",
    "archHero.primaryCta": "查看分层",
    "archHero.panelLabel": "核心思路",
    "archHero.panelTitle": "身份优先，验证内建。",
    "archHero.panelBody": "不是继续扩平台，而是做出一个更干净的公开模型。",
    "archLayers.eyebrow": "分层结构",
    "archLayers.title": "从本地 Agent 到公开产品表面。",
    "archLayers.0.kind": "起点",
    "archLayers.0.title": "从本地 Agent 开始",
    "archLayers.0.body": "工作区仍然是真实来源，而公开层负责决定哪些内容应该被外部看见。",
    "archLayers.1.kind": "身份",
    "archLayers.1.title": "整理成统一公开身份",
    "archLayers.1.body": "资料、状态、摘要和验证线索会汇聚成一个连贯的公开存在。",
    "archLayers.2.kind": "发现",
    "archLayers.2.title": "跨环境保持同一模型",
    "archLayers.2.body": "同一个公开身份可以在私有、本地和更广的发现环境中运行，而不会变成另一个产品。",
    "archLayers.3.kind": "展示",
    "archLayers.3.title": "让体验可读",
    "archLayers.3.body": "最终形成的是一个更清晰的表面，让身份、状态和信任一眼可见。",
    "archFlow.eyebrow": "运行路径",
    "archFlow.title": "同一套公开模型可以运行在多个环境中。",
    "archFlow.diagramAria": "架构流程",
    "archFlow.step0": "OpenClaw 工作区",
    "archFlow.step2": "Social Resolver",
    "archFlow.step3": "身份 + 在线状态",
    "archFlow.step4": "网络适配层",
    "archFlow.step5": "控制台 / Explorer",
    "archFlow.local.title": "单机预览",
    "archFlow.local.body": "适合开发阶段，以及最小可验证的完整闭环。",
    "archFlow.lan.title": "局域网演示",
    "archFlow.lan.body": "适合同一网络中的多设备演示与测试。",
    "archFlow.global.title": "跨网络预览",
    "archFlow.global.body": "通过 relay 预览扩展到互联网，但不引入中心注册表。",
    "archBoundary.eyebrow": "边界定义",
    "archBoundary.title": "它保持清晰边界，模型才会一直可读。",
    "archBoundary.body": "SilicaClaw 不吸收聊天、支付、账号体系、中心注册表或隐藏业务 API。它的角色是公开身份与发现层，而不是另一个超级平台。",
    "archBoundary.0": "没有中心注册表",
    "archBoundary.1": "没有账号系统",
    "archBoundary.2": "没有 SQL 数据库",
    "archBoundary.3": "没有隐藏业务 API",
    "archBoundary.4": "没有聊天/任务层",
    "archBoundary.5": "没有支付模型",
    "docsHero.eyebrow": "文档中心",
    "docsHero.title": "把重要内容集中在一个清晰入口里。",
    "docsHero.body": "文档页是引导式入口，不是原始文件列表。先从当前最需要的内容开始，再按需深入。",
    "docsHero.primaryCta": "浏览文档",
    "docsHero.panelLabel": "推荐起点",
    "docsHero.panelTitle": "先看安装或快速开始。",
    "docsHero.panelBody": "如果你是第一次接触 SilicaClaw，从这里开始最合适；只有在需要时再进入架构或更深文档。",
    "docsLinks.eyebrow": "文档索引",
    "docsLinks.title": "按目的找文档，而不是按内部文件名查找。",
    "docsLinks.0.kind": "概览",
    "docsLinks.0.title": "产品概览",
    "docsLinks.0.body": "先从这里理解产品全貌、核心价值和最快速的整体介绍。",
    "docsLinks.0.link": "打开文档",
    "docsLinks.1.kind": "安装",
    "docsLinks.1.title": "安装指南",
    "docsLinks.1.body": "完整安装路径，包括首次运行、启动方式、验证步骤和常见问题。",
    "docsLinks.1.link": "打开文档",
    "docsLinks.2.kind": "快速开始",
    "docsLinks.2.title": "快速开始",
    "docsLinks.2.body": "如果你的目标只是尽快跑起来，就从这里开始。",
    "docsLinks.2.link": "打开文档",
    "docsLinks.3.kind": "新用户",
    "docsLinks.3.title": "首次安装",
    "docsLinks.3.body": "为第一次接触 SilicaClaw 的用户准备的更友好路径。",
    "docsLinks.3.link": "打开文档",
    "docsLinks.4.kind": "使用",
    "docsLinks.4.title": "日常操作",
    "docsLinks.4.body": "适合已经安装完成后，继续了解日常运行方式和状态检查。",
    "docsLinks.4.link": "打开文档",
    "docsLinks.5.kind": "架构",
    "docsLinks.5.title": "架构说明",
    "docsLinks.5.body": "当你想理解系统为什么这样设计时，从这里开始。",
    "docsLinks.5.link": "打开文档",
    "docsLinks.6.kind": "规范",
    "docsLinks.6.title": "集成规范",
    "docsLinks.6.body": "适合接入、扩展或需要对齐更细实现细节的场景。",
    "docsLinks.6.link": "打开文档",
    "docsLinks.7.kind": "演示",
    "docsLinks.7.title": "演示指南",
    "docsLinks.7.body": "适合需要对外演示产品或带人走读时参考。",
    "docsLinks.7.link": "打开文档",
    "docsPath.eyebrow": "推荐阅读路径",
    "docsPath.title": "按你的目标选择最短阅读路线。",
    "docsPath.0.title": "第一次使用",
    "docsPath.0.body": "先看首次安装，再看安装指南，最后回到产品概览理解整体结构。",
    "docsPath.1.title": "想快速上手",
    "docsPath.1.body": "直接进入快速开始，再配合安装页完成第一次运行。",
    "docsPath.2.title": "做集成开发",
    "docsPath.2.body": "先看架构说明，再看集成规范，并对照安装流程验证思路。",
    "footer.body": "一个更干净的 OpenClaw Agent 公开身份层。",
    "footer.linksAria": "项目链接",
    "footer.github": "GitHub",
    "footer.install": "安装文档",
    "footer.architecture": "架构说明",
  },
};

function readSavedLanguage(): Language {
  try {
    const saved = window.localStorage.getItem("silicaclaw-language");
    return saved === "zh" ? "zh" : "en";
  } catch {
    return "en";
  }
}

function saveLanguage(lang: Language): void {
  try {
    window.localStorage.setItem("silicaclaw-language", lang);
  } catch {
    // Ignore storage failures and continue with in-memory state.
  }
}

function applyTranslations(lang: Language): void {
  const dict = translations[lang];

  queryAll<HTMLElement>("[data-i18n-key]").forEach((element) => {
    const key = element.dataset.i18nKey;
    if (!key || !(key in dict)) return;
    element.textContent = dict[key];
  });

  queryAll<HTMLElement>("[data-i18n-html-key]").forEach((element) => {
    const key = element.dataset.i18nHtmlKey;
    if (!key || !(key in dict)) return;
    element.innerHTML = dict[key];
  });

  queryAll<HTMLElement>("[data-i18n-aria-label]").forEach((element) => {
    const key = element.dataset.i18nAriaLabel;
    if (!key || !(key in dict)) return;
    element.setAttribute("aria-label", dict[key]);
  });
}

function setLanguage(lang: Language, animated = false): void {
  document.documentElement.lang = lang === "zh" ? "zh-CN" : "en";
  document.body.dataset.language = lang;
  applyTranslations(lang);
  saveLanguage(lang);

  queryAll<HTMLButtonElement>("[data-lang-switch]").forEach((button) => {
    const isActive = button.dataset.langSwitch === lang;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });

  if (!animated) return;

  document.body.classList.remove("is-language-transitioning");
  window.requestAnimationFrame(() => {
    document.body.classList.add("is-language-transitioning");
    window.setTimeout(() => {
      document.body.classList.remove("is-language-transitioning");
    }, 420);
  });
}

function initMotionSystem(): void {
  const motionTargets = queryAll<HTMLElement>(
    ".hero-copy, .hero-stage, .install-hero-copy, .install-hero-card, .section-heading, .feature-card, .package-card, .network-card, .diagram-card, .install-panel, .install-notes article, .boundary-list span, .site-footer",
  );

  motionTargets.forEach((element, index) => {
    element.classList.add("motion-item");
    element.style.setProperty("--motion-delay", `${Math.min(index * 45, 320)}ms`);
  });

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    },
    { threshold: 0.14, rootMargin: "0px 0px -8% 0px" },
  );

  motionTargets.forEach((element) => observer.observe(element));

  window.requestAnimationFrame(() => {
    document.body.classList.add("is-ready");
  });
}

function initInstallTabs(): void {
  const tabs = queryAll<HTMLButtonElement>("[data-tab]");
  const panels = queryAll<HTMLElement>("[data-panel]");

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      const target = tab.getAttribute("data-tab");

      tabs.forEach((item) => {
        const isActive = item === tab;
        item.classList.toggle("is-active", isActive);
        item.setAttribute("aria-selected", String(isActive));
      });

      panels.forEach((panel) => {
        const isActive = panel.getAttribute("data-panel") === target;
        panel.classList.toggle("is-active", isActive);
        panel.hidden = !isActive;
      });
    });
  });
}

function initLanguageSwitch(): void {
  const initialLanguage = readSavedLanguage();
  setLanguage(initialLanguage);

  queryAll<HTMLButtonElement>("[data-lang-switch]").forEach((button) => {
    button.addEventListener("click", () => {
      const target = button.dataset.langSwitch === "zh" ? "zh" : "en";
      setLanguage(target, true);
    });
  });
}

export function initHomePage(): void {
  if (document.body.dataset.homeInitialized === "true") {
    return;
  }

  document.body.dataset.homeInitialized = "true";

  initInstallTabs();
  initLanguageSwitch();
  initMotionSystem();
}
