const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('.primary-nav');
const navLinks = document.querySelectorAll('.primary-nav a');
const languageToggleButton = document.querySelector('[data-language-toggle]');
const reveals = document.querySelectorAll('.reveal');
const year = document.querySelector('#year');

const translations = {
  en: {
    title: 'RJ Young | Personal Website',
    description: 'A modern personal website for RJ Young with a polished, responsive UI.',
    navAbout: 'About',
    navWork: 'Work',
    navProcess: 'Process',
    navContact: 'Contact',
    heroEyebrow: 'Personal website',
    heroLead: 'I build thoughtful digital experiences with clean visuals, sharp detail, and a calm, modern feel.',
    heroBody:
      'This site is designed as a flexible personal home base — a place to introduce yourself, highlight what you do, and make it easy for people to connect with you.',
    heroPrimaryCta: 'Explore the site',
    heroSecondaryCta: 'Get in touch',
    heroTagsLabel: 'Core strengths',
    heroTag1: 'Modern UI',
    heroTag2: 'Responsive design',
    heroTag3: 'Human-centered',
    panelLabel: 'Focus',
    panelTitle: 'Elegant, useful, memorable.',
    panelBody:
      'A strong personal site should feel like your best first impression: clear, confident, and easy to navigate on every device.',
    panelCard1Title: 'Design',
    panelCard1Body: 'Minimal, premium, and polished — with deliberate spacing and strong hierarchy.',
    panelCard2Title: 'Clarity',
    panelCard2Body: 'Direct language and a clean layout help visitors understand who you are fast.',
    aboutKicker: 'About',
    aboutTitle: 'A personal space that feels intentional.',
    aboutBody1:
      'I designed this layout to work well as a modern personal site for RJ Young. It balances a confident introduction with sections that can easily be adapted for your actual background, skills, projects, and links.',
    aboutBody2:
      'The result is a sleek single-page experience with rich contrast, soft motion, and an editorial feel that still stays highly readable.',
    workKicker: 'What I value',
    workTitle: 'Principles that shape the experience.',
    workCard1Title: 'Clear storytelling',
    workCard1Body: 'A strong website tells visitors who you are and what matters to you without making them work for it.',
    workCard2Title: 'Responsive polish',
    workCard2Body: 'The layout adapts gracefully from desktop to mobile, keeping the structure elegant and usable.',
    workCard3Title: 'Subtle motion',
    workCard3Body: 'Light transitions and hover states add energy while keeping the interface calm and professional.',
    processKicker: 'Process',
    processTitle: 'Simple structure, refined execution.',
    processStep1Title: 'Introduce yourself',
    processStep1Body: 'Open with a clear statement that tells people who you are and what you bring.',
    processStep2Title: 'Show your strengths',
    processStep2Body: 'Use concise sections to highlight your skills, approach, and favorite kinds of work.',
    processStep3Title: 'Invite contact',
    processStep3Body: 'Make it easy for people to reach out, collaborate, or learn more about you.',
    contactKicker: 'Contact',
    contactTitle: 'Ready for the next conversation.',
    contactBody:
      'Replace the placeholder contact details below with your real email, links, and availability when you’re ready.',
    contactEmailLabel: 'Email',
    contactLocationLabel: 'Location',
    contactLocationValue: 'Your city',
    contactAvailabilityLabel: 'Availability',
    contactAvailabilityValue: 'Open to opportunities',
    footerCopy: '© {year} RJ Young',
    footerLink: 'Back to top',
    languageToggle: '中文',
    languageToggleLabel: 'Switch to Chinese',
  },
  zh: {
    title: 'RJ Young | 个人网站',
    description: 'RJ Young 的现代个人网站，拥有精致、响应式的界面。',
    navAbout: '关于',
    navWork: '价值',
    navProcess: '流程',
    navContact: '联系',
    heroEyebrow: '个人网站',
    heroLead: '我专注于打造深思熟虑的数字体验，兼顾简洁视觉、精细细节与沉稳现代的气质。',
    heroBody: '这个页面可以作为你的个人主页：用来介绍自己、展示重点内容，并让别人轻松联系到你。',
    heroPrimaryCta: '浏览网站',
    heroSecondaryCta: '联系我',
    heroTagsLabel: '核心优势',
    heroTag1: '现代界面',
    heroTag2: '响应式设计',
    heroTag3: '以人为本',
    panelLabel: '重点',
    panelTitle: '优雅、实用、令人难忘。',
    panelBody: '优秀的个人网站应该像一次出色的第一印象：清晰、自信，并且在每种设备上都易于浏览。',
    panelCard1Title: '设计',
    panelCard1Body: '极简、高级、精致——通过明确的留白与清晰层级来传达质感。',
    panelCard2Title: '清晰',
    panelCard2Body: '直接的语言和干净的布局，能帮助访客快速了解你是谁。',
    aboutKicker: '关于',
    aboutTitle: '一个有意图感的个人空间。',
    aboutBody1: '我把这个布局设计成适合 RJ Young 的现代个人网站。它既保留了自信的开场，也能轻松扩展成你的背景、技能、项目和链接介绍。',
    aboutBody2: '最终呈现的是一个精致的单页体验：层次丰富、动效轻柔，并带有编辑感，但依然保持良好的可读性。',
    workKicker: '我重视的东西',
    workTitle: '塑造体验的核心原则。',
    workCard1Title: '清晰叙事',
    workCard1Body: '一个好的网站会直接告诉访客你是谁、你关心什么，而不是让他们自己猜。',
    workCard2Title: '响应式细节',
    workCard2Body: '页面在桌面端和移动端之间平滑适配，让结构始终优雅且易用。',
    workCard3Title: '细腻动效',
    workCard3Body: '轻量的过渡和悬停反馈让界面更有活力，同时保持沉稳专业。',
    processKicker: '流程',
    processTitle: '简单结构，精致执行。',
    processStep1Title: '介绍自己',
    processStep1Body: '用一句清晰的话说明你是谁，以及你能带来什么。',
    processStep2Title: '展示优势',
    processStep2Body: '用简洁的内容突出你的技能、方法和擅长的工作类型。',
    processStep3Title: '引导联系',
    processStep3Body: '让别人可以轻松联系你、合作，或者进一步了解你。',
    contactKicker: '联系',
    contactTitle: '准备好迎接下一次对话。',
    contactBody: '当你准备好后，把下面的占位邮箱、链接和状态替换成真实信息。',
    contactEmailLabel: '邮箱',
    contactLocationLabel: '所在地',
    contactLocationValue: '你的城市',
    contactAvailabilityLabel: '状态',
    contactAvailabilityValue: '可接受合作机会',
    footerCopy: '© {year} RJ Young',
    footerLink: '返回顶部',
    languageToggle: 'EN',
    languageToggleLabel: '切换到英文',
  },
};

const langKeyMap = {
  'nav-about': 'navAbout',
  'nav-work': 'navWork',
  'nav-process': 'navProcess',
  'nav-contact': 'navContact',
  'hero-eyebrow': 'heroEyebrow',
  'hero-lead': 'heroLead',
  'hero-body': 'heroBody',
  'hero-primary-cta': 'heroPrimaryCta',
  'hero-secondary-cta': 'heroSecondaryCta',
  'hero-tags-label': 'heroTagsLabel',
  'hero-tag-1': 'heroTag1',
  'hero-tag-2': 'heroTag2',
  'hero-tag-3': 'heroTag3',
  'panel-label': 'panelLabel',
  'panel-title': 'panelTitle',
  'panel-body': 'panelBody',
  'panel-card-1-title': 'panelCard1Title',
  'panel-card-1-body': 'panelCard1Body',
  'panel-card-2-title': 'panelCard2Title',
  'panel-card-2-body': 'panelCard2Body',
  'about-kicker': 'aboutKicker',
  'about-title': 'aboutTitle',
  'about-body-1': 'aboutBody1',
  'about-body-2': 'aboutBody2',
  'work-kicker': 'workKicker',
  'work-title': 'workTitle',
  'work-card-1-title': 'workCard1Title',
  'work-card-1-body': 'workCard1Body',
  'work-card-2-title': 'workCard2Title',
  'work-card-2-body': 'workCard2Body',
  'work-card-3-title': 'workCard3Title',
  'work-card-3-body': 'workCard3Body',
  'process-kicker': 'processKicker',
  'process-title': 'processTitle',
  'process-step-1-title': 'processStep1Title',
  'process-step-1-body': 'processStep1Body',
  'process-step-2-title': 'processStep2Title',
  'process-step-2-body': 'processStep2Body',
  'process-step-3-title': 'processStep3Title',
  'process-step-3-body': 'processStep3Body',
  'contact-kicker': 'contactKicker',
  'contact-title': 'contactTitle',
  'contact-body': 'contactBody',
  'contact-email-label': 'contactEmailLabel',
  'contact-location-label': 'contactLocationLabel',
  'contact-location-value': 'contactLocationValue',
  'contact-availability-label': 'contactAvailabilityLabel',
  'contact-availability-value': 'contactAvailabilityValue',
  'footer-copy': 'footerCopy',
  'footer-link': 'footerLink',
};

const localizedNodes = document.querySelectorAll('[data-i18n]');
const ariaLocalizedNodes = document.querySelectorAll('[data-i18n-aria]');

const getInitialLanguage = () => {
  const savedLanguage = window.localStorage.getItem('site-language');
  if (savedLanguage === 'en' || savedLanguage === 'zh') {
    return savedLanguage;
  }

  return 'en';
};

let currentLanguage = getInitialLanguage();

const applyLanguage = (language) => {
  const dictionary = translations[language] ?? translations.en;

  document.documentElement.lang = language === 'zh' ? 'zh-Hans' : 'en';
  document.title = dictionary.title;

  const metaDescription = document.querySelector('meta[name="description"]');
  if (metaDescription) {
    metaDescription.setAttribute('content', dictionary.description);
  }

  localizedNodes.forEach((node) => {
    const key = langKeyMap[node.dataset.i18n];
    if (!key) {
      return;
    }

    const value = dictionary[key];
    if (typeof value === 'string') {
      if (node.id === 'year') {
        node.textContent = value.replace('{year}', String(new Date().getFullYear()));
        return;
      }

      node.textContent = value.replace('{year}', String(new Date().getFullYear()));
    }
  });

  ariaLocalizedNodes.forEach((node) => {
    const ariaKey = node.dataset.i18nAria;
    if (ariaKey === 'hero-tags-label') {
      node.setAttribute('aria-label', dictionary.heroTagsLabel);
    }
  });

  if (languageToggleButton) {
    languageToggleButton.textContent = dictionary.languageToggle;
    languageToggleButton.setAttribute('aria-label', dictionary.languageToggleLabel);
    languageToggleButton.setAttribute('aria-pressed', String(language === 'zh'));
  }

  window.localStorage.setItem('site-language', language);
};

if (year) {
  year.textContent = new Date().getFullYear();
}

applyLanguage(currentLanguage);

if (languageToggleButton) {
  languageToggleButton.addEventListener('click', () => {
    currentLanguage = currentLanguage === 'en' ? 'zh' : 'en';
    applyLanguage(currentLanguage);
  });
}

if (menuButton && nav) {
  menuButton.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('is-open');
    menuButton.setAttribute('aria-expanded', String(isOpen));
  });

  navLinks.forEach((link) => {
    link.addEventListener('click', () => {
      nav.classList.remove('is-open');
      menuButton.setAttribute('aria-expanded', 'false');
    });
  });
}

if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  reveals.forEach((element) => observer.observe(element));
} else {
  reveals.forEach((element) => element.classList.add('is-visible'));
}
