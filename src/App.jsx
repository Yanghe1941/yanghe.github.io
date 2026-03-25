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
  { href: '#contact', label: '联系方式' },
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

          <nav aria-label="Primary" className="flex items-center gap-4 text-sm text-zinc-600 sm:gap-6">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="transition-colors duration-200 hover:text-zinc-950"
              >
                {item.label}
              </a>
            ))}
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
              你好，我是 Yanghe。致力于开发提升生活效率与体验的应用程序。
            </h1>
            <p className="max-w-2xl text-base leading-7 text-zinc-600 sm:text-lg">
              我偏好极简、清晰、可靠的产品体验，把注意力留给内容本身，让每个界面都尽量轻、准、稳。
            </p>

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
                <p className="mt-2 text-lg font-semibold text-zinc-950">Product / iOS / AI / Minimal UI</p>
              </div>

              <div className="grid gap-3 text-sm text-zinc-600">
                <div className="rounded-2xl bg-zinc-50 px-4 py-3">注重信息层级与阅读效率</div>
                <div className="rounded-2xl bg-zinc-50 px-4 py-3">偏爱稳定、克制、可维护的设计</div>
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
            <p className="max-w-xl text-sm leading-6 text-zinc-500">
              以下内容已直接硬编码到页面中，每张卡片都只保留最核心的信息。
            </p>
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
