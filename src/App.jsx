import { useEffect, useState } from 'react';

const projects = [
  {
    title: 'Moodex',
    type: { en: 'iOS App', zh: 'iOS App' },
    description: {
      en: 'An AI-powered personal knowledge base and mood tracking app that helps record and analyze inner states.',
      zh: '一款 AI 驱动的个人知识库与情绪追踪工具，帮助记录和分析内在状态。',
    },
    href: 'https://moodex.cc',
  },
  {
    title: 'MyVault',
    type: { en: 'iOS App', zh: 'iOS App' },
    description: {
      en: 'A real-world asset (RWA) management app that brings digital order into the physical world.',
      zh: '真实世界资产RWA管理应用，将数字化的秩序带入物理世界。',
    },
    href: 'https://myvault.moodex.cc',
  },
  {
    title: 'CircleCast',
    type: { en: 'Podcast', zh: '播客' },
    description: {
      en: 'A podcast platform exploring personal stories, plus a companion app for guided story recording.',
      zh: '一档探索个人的播客平台，以及衍生的个人故事引导录制应用。',
    },
    href: 'https://podcasts.apple.com/cn/podcast/circlecast/id1859906660',
  },
  {
    title: 'Adaptive Eta',
    type: { en: 'AI Agent Skill', zh: 'AI Agent 技能' },
    description: {
      en: 'A custom skill built for the OpenClaw agent to improve task-specific execution efficiency.',
      zh: '为 OpenClaw 智能体开发的自定义技能，提升 AI 执行特定任务的效率。',
    },
    href: 'https://clawhub.ai/yanghe1941/adaptive-eta',
  },
];

const experiences = [
  {
    date: { en: '2023 - Present', zh: '2023 至今' },
    company: { en: 'Personal Projects', zh: 'Personal Projects' },
    position: { en: 'Independent Developer & AI Explorer', zh: '独立开发者 & AI 探索者' },
    content: {
      en: 'Dedicated to bringing technology into everyday life. Built iOS apps including Moodex and MyVault.',
      zh: '致力于将技术融入生活。开发了 Moodex、MyVault 等多款 iOS 应用。',
    },
  },
  {
    date: { en: '2023 - Present', zh: '2023 - 至今' },
    company: { en: 'Damus Lab', zh: 'Damus Lab' },
    position: { en: 'Co-founder', zh: '联合创始人' },
    content: {
      en: 'Focused on Southeast Asia outbound growth and MCN operations.',
      zh: '负责东南亚出海、MCN 相关工作。',
    },
  },
  {
    date: { en: '2021 - 2022', zh: '2021 - 2022' },
    company: { en: 'WOOK', zh: 'WOOK' },
    companyHref: 'https://home.wook.cn/id',
    position: { en: 'Brand Operations Manager', zh: '品牌运营经理' },
    content: {
      en: 'Contributed to brand growth and operating system improvements.',
      zh: '参与品牌增长与运营体系建设。',
    },
  },
  {
    date: { en: '2020 - 2021', zh: '2020 - 2021' },
    company: { en: 'WeGene', zh: 'WeGene 微基因' },
    companyHref: 'https://www.wegene.com/en/',
    position: { en: 'Operations Manager', zh: '运营经理' },
    content: {
      en: 'Responsible for e-commerce operations and user growth for consumer genetic testing products.',
      zh: '负责消费级基因检测产品的电商运营与用户增长。',
    },
  },
  {
    date: { en: '2019 - 2020', zh: '2019 - 2020' },
    company: { en: 'MOTI', zh: 'MOTI 魔笛' },
    companyHref: 'https://motiplanet.com/',
    position: { en: 'User Growth Operations Manager', zh: '用户增长运营经理' },
    content: {
      en: 'Focused on growth and conversion optimization.',
      zh: '参与用户增长与转化效率优化。',
    },
  },
  {
    date: { en: '2017 - 2018', zh: '2017 - 2018' },
    company: { en: 'Elephant Club', zh: '大象公会' },
    companyHref: 'https://zh.wikipedia.org/zh-cn/%E5%A4%A7%E8%B1%A1%E5%85%AC%E4%BC%9A',
    position: { en: 'Business Manager', zh: '商务经理' },
    content: {
      en: 'Worked on content project partnerships for StoryFM and Paperclip.',
      zh: '参与“故事FM”“回形针”等内容项目合作。',
    },
  },
  {
    date: { en: '2013 - 2017', zh: '2013 - 2017' },
    company: { en: 'Hebei University of Technology', zh: '河北工业大学' },
    position: { en: '—', zh: '—' },
    content: {
      en: 'Built a solid long-term foundation.',
      zh: '打下长期而扎实的基础。',
    },
  },
];

const navItems = [
  { href: '#about', key: 'about' },
  { href: '#projects', key: 'projects' },
  { href: '#experience', key: 'experience' },
  { href: '#contact', key: 'contact' },
];

const siteCopy = {
  en: {
    title: 'Yanghe | Portfolio',
    description: 'Yanghe\'s minimalist portfolio, built with React, Tailwind CSS, and Vite.',
    nav: {
      about: 'About',
      projects: 'Projects',
      experience: 'Experience',
      contact: 'Contact',
    },
    blog: 'Blog',
    heroEyebrow: 'Portfolio',
    heroLead: 'Yanghe, an independent developer and US stock trader.',
    heroBody: 'Sharing thoughts on US stocks, blockchain, AI, markets, and branding.',
    heroPrimary: 'View projects',
    heroSecondary: 'Contact',
    focusLabel: 'Focus',
    focusTitle: 'Product / AI / Trading',
    focusPoints: ['Designing for clarity, hierarchy, and fast reading.', 'Exploring the overlap between products and everyday life.'],
    projectsKicker: 'Projects',
    projectsTitle: 'Selected projects',
    experienceKicker: 'Experience',
    experienceTitle: 'Career timeline',
    table: {
      date: 'Date',
      company: 'Company',
      position: 'Role',
      content: 'Details',
    },
    footer: '© {year} Yanghe. All rights reserved.',
    languageToggle: '中文',
    languageToggleLabel: 'Switch to Chinese',
  },
  zh: {
    title: '杨鹤 | Portfolio',
    description: '杨鹤的极简个人作品集网站，使用 React、Tailwind CSS 与 Vite 构建。',
    nav: {
      about: '关于',
      projects: '项目',
      experience: '经历',
      contact: '联系方式',
    },
    blog: '博客',
    heroEyebrow: '作品集',
    heroLead: '杨鹤，个人开发者、美股交易员。',
    heroBody: '分享美股、区块链、AI、市场与品牌相关内容。',
    heroPrimary: '查看项目',
    heroSecondary: '联系方式',
    focusLabel: '重点',
    focusTitle: 'Product / AI / Trading',
    focusPoints: ['注重信息层级与阅读效率。', '关注产品与生活方式的结合点。'],
    projectsKicker: '项目',
    projectsTitle: '精选项目',
    experienceKicker: '经历',
    experienceTitle: '职业经历',
    table: {
      date: '日期',
      company: '公司',
      position: '职位',
      content: '内容',
    },
    footer: '© {year} Yanghe. All rights reserved.',
    languageToggle: 'EN',
    languageToggleLabel: '切换到英文',
  },
};

const getInitialLanguage = () => {
  if (typeof window === 'undefined') {
    return 'en';
  }

  try {
    const savedLanguage = window.localStorage.getItem('site-language');
    if (savedLanguage === 'en' || savedLanguage === 'zh') {
      return savedLanguage;
    }
  } catch {
    // Ignore storage access failures.
  }

  const browserLanguage = window.navigator.languages?.[0] ?? window.navigator.language ?? 'en';
  return browserLanguage.toLowerCase().startsWith('zh') ? 'zh' : 'en';
};

const translate = (value, language) => {
  if (value && typeof value === 'object' && !Array.isArray(value)) {
    return value[language] ?? value.en ?? value.zh ?? '';
  }

  return value ?? '';
};

function App() {
  const [language, setLanguage] = useState(getInitialLanguage());
  const copy = siteCopy[language] ?? siteCopy.en;
  const year = new Date().getFullYear();

  useEffect(() => {
    const title = copy.title;
    const description = copy.description;

    document.documentElement.lang = language === 'zh' ? 'zh-Hans' : 'en';
    document.title = title;

    const metaDescription = document.querySelector('meta[name="description"]');
    const ogDescription = document.querySelector('meta[property="og:description"]');

    if (metaDescription) {
      metaDescription.setAttribute('content', description);
    }

    if (ogDescription) {
      ogDescription.setAttribute('content', description);
    }

    try {
      window.localStorage.setItem('site-language', language);
    } catch {
      // Ignore storage write failures.
    }
  }, [language, copy.description, copy.title]);

  const toggleLanguage = () => {
    setLanguage((current) => (current === 'en' ? 'zh' : 'en'));
  };

  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-900 antialiased">
      <header className="sticky top-0 z-50 border-b border-zinc-200/80 bg-zinc-50/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
          <a href="#about" className="text-sm font-semibold tracking-[0.2em] text-zinc-950 uppercase">
            Yanghe
          </a>

          <nav aria-label="Primary" className="flex flex-wrap items-center gap-2 text-[13px] text-zinc-600 sm:justify-end sm:gap-3">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-full px-2 py-1.5 transition-colors duration-200 hover:bg-zinc-100 hover:text-zinc-950"
              >
                {copy.nav[item.key]}
              </a>
            ))}

            <button
              type="button"
              onClick={toggleLanguage}
              aria-label={copy.languageToggleLabel}
              aria-pressed={language === 'zh'}
              className="inline-flex items-center rounded-full border border-zinc-200 bg-white px-3 py-2 text-[13px] font-medium text-zinc-700 transition-colors duration-200 hover:border-zinc-300 hover:text-zinc-950"
            >
              {copy.languageToggle}
            </button>

            <a
              href="https://quaily.com/yanghe"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-3 py-2 text-[13px] font-medium text-zinc-700 transition-colors duration-200 hover:border-zinc-300 hover:text-zinc-950"
            >
              <span>{copy.blog}</span>
              <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4 fill-none stroke-current stroke-[1.8]">
                <path d="M14 3h7v7" />
                <path d="M21 3 10 14" />
                <path d="M21 14v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h4" />
              </svg>
            </a>
          </nav>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <section
          id="about"
          className="scroll-mt-24 grid gap-8 py-12 sm:py-16 lg:grid-cols-[1.15fr_0.85fr] lg:items-end lg:py-24"
        >
          <div className="space-y-5">
            <p className="text-sm font-medium uppercase tracking-[0.24em] text-accent">
              {copy.heroEyebrow}
            </p>
            <div className="max-w-2xl space-y-2 text-[15px] leading-7 text-zinc-600 sm:text-base sm:leading-8">
              <p>{copy.heroLead}</p>
              <p>{copy.heroBody}</p>
            </div>

            <div className="flex flex-wrap gap-3">
              <a
                href="#projects"
                className="inline-flex items-center justify-center rounded-full bg-zinc-950 px-5 py-3 text-sm font-medium text-white transition-transform duration-200 hover:-translate-y-0.5 hover:bg-zinc-800"
              >
                {copy.heroPrimary}
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-full border border-zinc-300 bg-white px-5 py-3 text-sm font-medium text-zinc-900 transition-transform duration-200 hover:-translate-y-0.5 hover:border-zinc-400"
              >
                {copy.heroSecondary}
              </a>
            </div>
          </div>

          <aside className="rounded-3xl border border-zinc-200 bg-white p-5 shadow-soft sm:p-6">
            <div className="space-y-5">
              <div>
                <p className="text-xs font-medium uppercase tracking-[0.24em] text-zinc-400">{copy.focusLabel}</p>
                <p className="mt-2 text-lg font-semibold text-zinc-950">{copy.focusTitle}</p>
              </div>

              <div className="grid gap-3 text-sm text-zinc-600">
                {copy.focusPoints.map((point) => (
                  <div key={point} className="rounded-2xl bg-zinc-50 px-4 py-3">
                    {point}
                  </div>
                ))}
              </div>
            </div>
          </aside>
        </section>

        <section id="projects" className="scroll-mt-24 py-12 sm:py-16">
          <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.24em] text-accent">{copy.projectsKicker}</p>
              <h2 className="mt-2 text-2xl font-semibold tracking-tight text-zinc-950 sm:text-3xl">
                {copy.projectsTitle}
              </h2>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4 sm:gap-5">
            {projects.map((project) => (
              <a
                key={project.title}
                href={project.href}
                target="_blank"
                rel="noreferrer"
                aria-label={`${project.title} ${translate(project.type, language)}`}
                className="group block h-full rounded-3xl border border-zinc-200 bg-white p-4 shadow-soft transition-all duration-200 hover:-translate-y-1 hover:border-zinc-300 hover:shadow-md sm:p-5"
              >
                <div className="mb-4 flex items-center justify-between gap-4 sm:mb-5">
                  <span className="inline-flex rounded-full bg-zinc-100 px-2.5 py-1 text-[11px] font-medium uppercase tracking-[0.16em] text-zinc-600">
                    {translate(project.type, language)}
                  </span>
                  <span className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-zinc-200 text-zinc-400 transition-colors duration-200 group-hover:border-zinc-300 group-hover:text-zinc-950">
                    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-3.5 w-3.5 fill-none stroke-current stroke-[1.8]">
                      <path d="M7 17 17 7" />
                      <path d="M9 7h8v8" />
                    </svg>
                  </span>
                </div>

                <h3 className="text-[16px] font-semibold tracking-tight text-zinc-950 sm:text-[17px]">{project.title}</h3>
                <p className="mt-2.5 text-sm leading-6 text-zinc-600">{translate(project.description, language)}</p>
              </a>
            ))}
          </div>
        </section>

        <section id="experience" className="scroll-mt-24 py-12 sm:py-16">
          <div className="mb-8">
            <p className="text-sm font-medium uppercase tracking-[0.24em] text-accent">{copy.experienceKicker}</p>
            <h2 className="mt-2 text-2xl font-semibold tracking-tight text-zinc-950 sm:text-3xl">
              {copy.experienceTitle}
            </h2>
          </div>

          <div className="space-y-4 sm:hidden">
            {experiences.map((item) => (
              <article key={`${translate(item.date, language)}-${translate(item.company, language)}`} className="rounded-2xl border border-zinc-200 bg-white p-4 shadow-soft">
                <div className="flex flex-col gap-3">
                  <div className="flex items-start justify-between gap-3">
                    <div className="space-y-1">
                      <p className="text-xs font-medium uppercase tracking-[0.16em] text-zinc-400">{copy.table.date}</p>
                      <p className="text-sm font-medium text-zinc-600">{translate(item.date, language)}</p>
                    </div>
                    <div className="rounded-full bg-zinc-100 px-2.5 py-1 text-[11px] font-medium uppercase tracking-[0.16em] text-zinc-600">
                      {translate(item.position, language)}
                    </div>
                  </div>

                  <div className="space-y-1">
                    <p className="text-xs font-medium uppercase tracking-[0.16em] text-zinc-400">{copy.table.company}</p>
                    {item.companyHref ? (
                      <a
                        href={item.companyHref}
                        target="_blank"
                        rel="noreferrer"
                        className="text-sm font-semibold text-zinc-950 underline decoration-zinc-300 decoration-1 underline-offset-4"
                      >
                        {translate(item.company, language)}
                      </a>
                    ) : (
                      <p className="text-sm font-semibold text-zinc-950">{translate(item.company, language)}</p>
                    )}
                  </div>

                  <div className="space-y-1">
                    <p className="text-xs font-medium uppercase tracking-[0.16em] text-zinc-400">{copy.table.content}</p>
                    <p className="text-sm leading-6 text-zinc-600">{translate(item.content, language)}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="hidden overflow-x-auto rounded-2xl border border-zinc-200 bg-white shadow-soft [-webkit-overflow-scrolling:touch] sm:block">
            <table className="min-w-[760px] w-full border-separate border-spacing-0 text-left">
              <thead className="bg-zinc-50">
                <tr>
                  <th className="border-b border-zinc-200 px-4 py-3 text-[11px] font-semibold uppercase tracking-[0.16em] text-zinc-500">
                    {copy.table.date}
                  </th>
                  <th className="border-b border-zinc-200 px-4 py-3 text-[11px] font-semibold uppercase tracking-[0.16em] text-zinc-500">
                    {copy.table.company}
                  </th>
                  <th className="border-b border-zinc-200 px-4 py-3 text-[11px] font-semibold uppercase tracking-[0.16em] text-zinc-500">
                    {copy.table.position}
                  </th>
                  <th className="border-b border-zinc-200 px-4 py-3 text-[11px] font-semibold uppercase tracking-[0.16em] text-zinc-500">
                    {copy.table.content}
                  </th>
                </tr>
              </thead>
              <tbody>
                {experiences.map((item, index) => (
                  <tr key={`${translate(item.date, language)}-${translate(item.company, language)}`} className={index % 2 === 0 ? 'bg-white' : 'bg-zinc-50/60'}>
                    <td className="border-b border-zinc-100 px-4 py-3.5 align-top text-sm text-zinc-600">
                      {translate(item.date, language)}
                    </td>
                    <td className="border-b border-zinc-100 px-4 py-3.5 align-top text-sm font-medium text-zinc-950">
                      {item.companyHref ? (
                        <a
                          href={item.companyHref}
                          target="_blank"
                          rel="noreferrer"
                          className="underline decoration-zinc-300 decoration-1 underline-offset-4 transition-colors duration-200 hover:decoration-zinc-500"
                        >
                          {translate(item.company, language)}
                        </a>
                      ) : (
                        translate(item.company, language)
                      )}
                    </td>
                    <td className="border-b border-zinc-100 px-4 py-3.5 align-top text-sm text-zinc-600">
                      {translate(item.position, language)}
                    </td>
                    <td className="border-b border-zinc-100 px-4 py-3.5 align-top text-sm leading-6 text-zinc-600">
                      {translate(item.content, language)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </main>

      <footer id="contact" className="scroll-mt-24 border-t border-zinc-200 bg-white">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-8 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <p className="text-sm text-zinc-500">{copy.footer.replace('{year}', String(year))}</p>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href="https://github.com/Yanghe1941"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-zinc-200 bg-white text-zinc-600 transition-colors duration-200 hover:border-zinc-300 hover:text-zinc-950"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5 fill-current">
                <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.17 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.866-.013-1.7-2.782.605-3.37-1.343-3.37-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.004.071 1.532 1.032 1.532 1.032.893 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.27.098-2.646 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.376.202 2.393.1 2.646.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.481A10.014 10.014 0 0 0 22 12.017C22 6.484 17.523 2 12 2Z" />
              </svg>
              <span className="sr-only">GitHub</span>
            </a>
            <a
              href="mailto:hello@yanghe.moodex.cc"
              aria-label="Email"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-zinc-200 bg-white text-zinc-600 transition-colors duration-200 hover:border-zinc-300 hover:text-zinc-950"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5 fill-none stroke-current stroke-[1.8]">
                <path d="M4 6.75A1.75 1.75 0 0 1 5.75 5h12.5A1.75 1.75 0 0 1 20 6.75v10.5A1.75 1.75 0 0 1 18.25 19H5.75A1.75 1.75 0 0 1 4 17.25V6.75Z" />
                <path d="m5.5 7.5 6.5 5 6.5-5" />
              </svg>
              <span className="sr-only">Email</span>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
