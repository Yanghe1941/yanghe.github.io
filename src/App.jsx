const projects = [
  {
    title: 'Moodex',
    type: 'iOS App',
    description: '一款 AI 驱动的个人知识库与情绪追踪工具，帮助记录和分析内在状态。',
  },
  {
    title: 'MyVault',
    type: 'iOS App',
    description: '实体资产与纪念品管理应用，将数字化的秩序带入物理世界。',
  },
  {
    title: 'MyGuard',
    type: 'iOS App',
    description: '个人生活状态监控与守护应用。',
  },
  {
    title: 'CircleCast / CircleStory',
    type: '产品企划',
    description: '一档探索个人的播客平台，以及衍生的个人故事引导录制应用。',
  },
  {
    title: 'Adaptive Eta',
    type: 'AI Agent 技能',
    description: '为 OpenClaw 智能体开发的自定义技能，提升 AI 执行特定任务的效率。',
  },
];

const navItems = [
  { href: '#about', label: '关于' },
  { href: '#projects', label: '项目' },
  { href: '#experience', label: '个人经历' },
  { href: '#contact', label: '联系方式' },
];

const experiences = [
  {
    period: '2023 至今',
    role: '独立开发者 & AI 探索者',
    company: 'Personal Projects',
    detail: '致力于将技术融入生活。开发了 Moodex、MyVault 等多款 iOS 应用。',
  },
  {
    period: '2023 - 至今',
    role: '联合创始人',
    company: 'Damus Lab',
    detail: '负责东南亚出海、MCN 相关工作。',
  },
  {
    period: '2021 - 2022',
    role: '品牌运营经理',
    company: 'WOOK',
    detail: '参与品牌增长与运营体系建设。',
  },
  {
    period: '2020 - 2021',
    role: '运营经理',
    company: 'WeGene 微基因',
    detail: '负责消费级基因检测产品的电商运营与用户增长。',
  },
  {
    period: '2019 - 2020',
    role: '用户增长运营经理',
    company: 'MOTI 魔笛',
    detail: '参与用户增长与转化效率优化。',
  },
  {
    period: '2017 - 2018',
    role: '商务经理',
    company: '大象公会',
    detail: '参与“故事FM”“回形针”等内容项目合作。',
  },
  {
    period: '2013 - 2017',
    role: '河北工业大学',
    company: '学习经历',
    detail: '打下长期而扎实的基础。',
  },
];

function App() {
  const year = new Date().getFullYear();

  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-900 antialiased">
      <header className="sticky top-0 z-50 border-b border-zinc-200/80 bg-zinc-50/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <a href="#about" className="text-sm font-semibold tracking-[0.2em] text-zinc-950 uppercase">
            Yanghe
          </a>

          <nav aria-label="Primary" className="flex items-center gap-3 text-sm text-zinc-600 sm:gap-4">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="transition-colors duration-200 hover:text-zinc-950"
              >
                {item.label}
              </a>
            ))}
            <a
              href="https://quaily.com/yanghe"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center rounded-full border border-zinc-300 bg-white px-3 py-1.5 text-sm font-medium text-zinc-900 transition-colors duration-200 hover:border-zinc-400 hover:text-zinc-950"
            >
              博客
            </a>
          </nav>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <section
          id="about"
          className="grid gap-10 py-16 sm:py-20 lg:grid-cols-[1.15fr_0.85fr] lg:items-end lg:py-24"
        >
          <div className="space-y-6">
            <p className="text-sm font-medium uppercase tracking-[0.24em] text-accent">
              Portfolio
            </p>
            <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-zinc-950 sm:text-5xl lg:text-6xl">
              <span className="block">杨鹤，个人开发者、美股交易员。</span>
              <span className="mt-4 block">分享关于美股、区块链、AI、市场、品牌相关信息。</span>
            </h1>

            <div className="flex flex-wrap gap-3">
              <a
                href="#projects"
                className="inline-flex items-center justify-center rounded-full bg-zinc-950 px-5 py-3 text-sm font-medium text-white transition-transform duration-200 hover:-translate-y-0.5 hover:bg-zinc-800"
              >
                查看项目
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-full border border-zinc-300 bg-white px-5 py-3 text-sm font-medium text-zinc-900 transition-transform duration-200 hover:-translate-y-0.5 hover:border-zinc-400"
              >
                联系方式
              </a>
            </div>
          </div>

          <aside className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-soft">
            <div className="space-y-5">
              <div>
                <p className="text-xs font-medium uppercase tracking-[0.24em] text-zinc-400">Focus</p>
                <p className="mt-2 text-lg font-semibold text-zinc-950">Product / AI / Trading</p>
              </div>

              <div className="grid gap-3 text-sm text-zinc-600">
                <div className="rounded-2xl bg-zinc-50 px-4 py-3">注重信息层级与阅读效率</div>
                <div className="rounded-2xl bg-zinc-50 px-4 py-3">关注产品与生活方式的结合点</div>
              </div>
            </div>
          </aside>
        </section>

        <section id="projects" className="py-12 sm:py-16">
          <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.24em] text-accent">Projects</p>
              <h2 className="mt-2 text-2xl font-semibold tracking-tight text-zinc-950 sm:text-3xl">
                核心项目
              </h2>
            </div>
          </div>

          <div className="grid gap-4 sm:gap-5 md:grid-cols-2 xl:grid-cols-3">
            {projects.map((project, index) => (
              <article
                key={project.title}
                className="group flex h-full flex-col rounded-3xl border border-zinc-200 bg-white p-6 shadow-soft transition-transform duration-200 hover:-translate-y-0.5 hover:border-zinc-300"
              >
                <div className="mb-6 flex items-center justify-between gap-4">
                  <span className="inline-flex rounded-full bg-zinc-100 px-3 py-1 text-xs font-medium text-zinc-600">
                    {project.type}
                  </span>
                  <span className="text-xs font-medium tracking-[0.2em] text-zinc-400">
                    0{index + 1}
                  </span>
                </div>

                <h3 className="text-xl font-semibold text-zinc-950">{project.title}</h3>
                <p className="mt-3 text-sm leading-6 text-zinc-600">{project.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="experience" className="py-12 sm:py-16">
          <div className="mb-8">
            <p className="text-sm font-medium uppercase tracking-[0.24em] text-accent">Experience</p>
            <h2 className="mt-2 text-2xl font-semibold tracking-tight text-zinc-950 sm:text-3xl">
              个人经历
            </h2>
          </div>

          <div className="grid gap-4">
            {experiences.map((item) => (
              <article
                key={`${item.period}-${item.role}`}
                className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-soft"
              >
                <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between md:gap-6">
                  <div className="max-w-3xl space-y-2">
                    <div className="flex flex-wrap items-center gap-3">
                      <h3 className="text-lg font-semibold text-zinc-950">{item.role}</h3>
                      <span className="inline-flex rounded-full bg-zinc-100 px-3 py-1 text-xs font-medium text-zinc-600">
                        {item.company}
                      </span>
                    </div>
                    <p className="text-sm leading-6 text-zinc-600">{item.detail}</p>
                  </div>

                  <p className="text-sm font-medium tracking-[0.18em] text-zinc-400 md:text-right">
                    {item.period}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>

      <footer id="contact" className="border-t border-zinc-200 bg-white">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-8 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <p className="text-sm text-zinc-500">© {year} Yanghe. All rights reserved.</p>

          <div className="flex flex-wrap items-center gap-4 text-sm">
            <a
              href="https://github.com/Yanghe1941"
              target="_blank"
              rel="noreferrer"
              className="text-zinc-600 transition-colors duration-200 hover:text-zinc-950"
            >
              GitHub
            </a>
            <a
              href="mailto:hello@yanghe.moodex.cc"
              className="text-zinc-600 transition-colors duration-200 hover:text-zinc-950"
            >
              Email
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
