import { homeLocalizedContent, type SiteLanguage } from "../data/home";

function queryAll<T extends Element>(selector: string): T[] {
  return Array.from(document.querySelectorAll<T>(selector));
}

type Language = SiteLanguage;

const translations: Record<Language, Record<string, string>> = {
  en: {},
  zh: {},
};

function attachSharedContent(
  dict: Record<string, string>,
  lang: Language,
): Record<string, string> {
  const localized = homeLocalizedContent[lang];
  const {
    hero,
    header,
    shared,
    featuresSection,
    geo,
    demoFlow,
    routes,
    installHero,
    checklist,
    installSection,
    docsHero,
    docsLinks,
    docsPath,
    architectureHero,
    architectureFlow,
    architectureLayers,
    architectureBoundary,
    faq,
    footerBody,
  } = localized;

  dict["header.brandAria"] = header.brandAria;
  dict["header.navAria"] = header.navAria;
  dict["header.languageAria"] = header.languageAria;
  dict["header.home"] = header.home;
  dict["header.install"] = header.install;
  dict["header.architecture"] = header.architecture;
  dict["header.docs"] = header.docs;
  dict["header.cta"] = header.cta;
  dict["shared.backHome"] = shared.backHome;

  dict["hero.eyebrow"] = hero.eyebrow;
  dict["hero.title"] = hero.title;
  dict["hero.body"] = hero.body;
  dict["hero.primaryCta"] = hero.primaryCta;
  dict["hero.secondaryCta"] = hero.secondaryCta;
  dict["hero.releaseVersion"] = hero.releaseVersion;
  dict["hero.releaseMode"] = hero.releaseMode;
  dict["hero.releaseRelay"] = hero.releaseRelay;
  dict["hero.panelLabel"] = hero.panelLabel;
  dict["hero.panelTitle"] = hero.panelTitle;
  dict["hero.panelBody"] = hero.panelBody;

  dict["features.eyebrow"] = featuresSection.eyebrow;
  dict["features.title"] = featuresSection.title;
  if (featuresSection.body) dict["features.body"] = featuresSection.body;

  localized.featureItems.forEach((item, index) => {
    dict[`feature.${index}.title`] = item.title;
    dict[`feature.${index}.body`] = item.body;
  });

  dict["geo.eyebrow"] = geo.eyebrow;
  dict["geo.title"] = geo.title;
  if (geo.body) dict["geo.body"] = geo.body;
  geo.items.forEach((item, index) => {
    if (item.kind) dict[`geo.${index}.kind`] = item.kind;
    dict[`geo.${index}.title`] = item.title;
    dict[`geo.${index}.body`] = item.body;
  });

  dict["demoFlow.eyebrow"] = demoFlow.eyebrow;
  dict["demoFlow.title"] = demoFlow.title;
  if (demoFlow.body) dict["demoFlow.body"] = demoFlow.body;
  demoFlow.items.forEach((item, index) => {
    if (item.kind) dict[`demoFlow.${index}.kind`] = item.kind;
    dict[`demoFlow.${index}.title`] = item.title;
    dict[`demoFlow.${index}.body`] = item.body;
  });

  dict["routes.eyebrow"] = routes.eyebrow;
  dict["routes.title"] = routes.title;
  if (routes.body) dict["routes.body"] = routes.body;
  routes.items.forEach((item, index) => {
    const key = item.key ?? String(index);
    if (item.kind) dict[`routes.${key}.kind`] = item.kind;
    dict[`routes.${key}.title`] = item.title;
    dict[`routes.${key}.body`] = item.body;
    if (item.link) dict[`routes.${key}.link`] = item.link;
  });

  dict["installHero.eyebrow"] = installHero.eyebrow;
  dict["installHero.title"] = installHero.title;
  dict["installHero.body"] = installHero.body;
  dict["installHero.primaryCta"] = installHero.primaryCta;
  dict["installHero.panelLabel"] = installHero.panelLabel;
  dict["installHero.panelTitle"] = installHero.panelTitle;

  dict["checklist.eyebrow"] = checklist.eyebrow;
  dict["checklist.title"] = checklist.title;
  checklist.items.forEach((item, index) => {
    dict[`checklist.${index}.title`] = item.title;
    dict[`checklist.${index}.body`] = item.body;
  });

  dict["installSection.eyebrow"] = installSection.eyebrow;
  dict["installSection.title"] = installSection.title;
  if (installSection.body) dict["installSection.body"] = installSection.body;
  dict["installSection.tabsAria"] = installSection.tabsAria;

  localized.installTabs.forEach((tab, index) => {
    dict[`installTabs.${index}.label`] = tab.label;
    dict[`installTabs.${index}.panelLabel`] = tab.panelLabel;
    dict[`installTabs.${index}.title`] = tab.title;
    dict[`installTabs.${index}.body`] = tab.body;
  });

  localized.installNotes.forEach((note, index) => {
    dict[`installNotes.${index}.title`] = note.title;
    dict[`installNotes.${index}.body`] = note.body;
  });

  dict["docsHero.eyebrow"] = docsHero.eyebrow;
  dict["docsHero.title"] = docsHero.title;
  dict["docsHero.body"] = docsHero.body;
  dict["docsHero.primaryCta"] = docsHero.primaryCta;
  dict["docsHero.panelLabel"] = docsHero.panelLabel;
  dict["docsHero.panelTitle"] = docsHero.panelTitle;
  dict["docsHero.panelBody"] = docsHero.panelBody;

  dict["docsLinks.eyebrow"] = docsLinks.eyebrow;
  dict["docsLinks.title"] = docsLinks.title;
  docsLinks.items.forEach((item, index) => {
    if (item.kind) dict[`docsLinks.${index}.kind`] = item.kind;
    dict[`docsLinks.${index}.title`] = item.title;
    dict[`docsLinks.${index}.body`] = item.body;
    if (item.link) dict[`docsLinks.${index}.link`] = item.link;
  });

  dict["docsPath.eyebrow"] = docsPath.eyebrow;
  dict["docsPath.title"] = docsPath.title;
  docsPath.items.forEach((item, index) => {
    dict[`docsPath.${index}.title`] = item.title;
    dict[`docsPath.${index}.body`] = item.body;
  });

  dict["archHero.eyebrow"] = architectureHero.eyebrow;
  dict["archHero.title"] = architectureHero.title;
  dict["archHero.body"] = architectureHero.body;
  dict["archHero.primaryCta"] = architectureHero.primaryCta;
  dict["archHero.panelLabel"] = architectureHero.panelLabel;
  dict["archHero.panelTitle"] = architectureHero.panelTitle;
  dict["archHero.panelBody"] = architectureHero.panelBody;

  dict["archFlow.eyebrow"] = architectureFlow.eyebrow;
  dict["archFlow.title"] = architectureFlow.title;
  dict["archFlow.diagramAria"] = architectureFlow.diagramAria;
  dict["archFlow.step0"] = architectureFlow.steps[0];
  dict["archFlow.step2"] = architectureFlow.steps[2];
  dict["archFlow.step3"] = architectureFlow.steps[3];
  dict["archFlow.step4"] = architectureFlow.steps[4];
  dict["archFlow.step5"] = architectureFlow.steps[5];
  dict["archFlow.local.title"] = architectureFlow.items[0].title;
  dict["archFlow.local.body"] = architectureFlow.items[0].body;
  dict["archFlow.lan.title"] = architectureFlow.items[1].title;
  dict["archFlow.lan.body"] = architectureFlow.items[1].body;
  dict["archFlow.global.title"] = architectureFlow.items[2].title;
  dict["archFlow.global.body"] = architectureFlow.items[2].body;

  dict["archLayers.eyebrow"] = architectureLayers.eyebrow;
  dict["archLayers.title"] = architectureLayers.title;
  architectureLayers.items.forEach((item, index) => {
    if (item.kind) dict[`archLayers.${index}.kind`] = item.kind;
    dict[`archLayers.${index}.title`] = item.title;
    dict[`archLayers.${index}.body`] = item.body;
  });

  dict["archBoundary.eyebrow"] = architectureBoundary.eyebrow;
  dict["archBoundary.title"] = architectureBoundary.title;
  dict["archBoundary.body"] = architectureBoundary.body;
  architectureBoundary.items.forEach((item, index) => {
    dict[`archBoundary.${index}`] = item;
  });

  dict["faq.eyebrow"] = faq.eyebrow;
  dict["faq.title"] = faq.title;
  faq.items.forEach((item, index) => {
    dict[`faq.${index}.q`] = item.question;
    dict[`faq.${index}.a`] = item.answer;
  });

  dict["footer.body"] = footerBody;
  dict["footer.linksAria"] = localized.footerLinks.linksAria;
  dict["footer.github"] = localized.footerLinks.github;
  dict["footer.install"] = localized.footerLinks.install;
  dict["footer.architecture"] = localized.footerLinks.architecture;

  return dict;
}

attachSharedContent(translations.en, "en");
attachSharedContent(translations.zh, "zh");

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
    ".hero-copy, .hero-stage, .install-hero-copy, .install-hero-card, .section-heading, .feature-card, .package-card, .network-card, .diagram-card, .install-panel, .install-notes article, .boundary-list span, .faq-item, .site-footer",
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
