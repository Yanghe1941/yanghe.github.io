const projects = [
  {
    title: 'Moodex',
    type: 'iOS App',
    description: '一款 AI 驱动的个人知识库与情绪追踪工具，帮助记录和分析内在状态。',
    href: 'https://moodex.cc',
  },
  {
    title: 'MyVault',
    type: 'iOS App',
    description: '真实世界资产RWA管理应用，将数字化的秩序带入物理世界。',
    href: 'https://myvault.moodex.cc',
  },
  {
    title: 'CircleCast',
    type: '播客',
    description: '一档探索个人的播客平台，以及衍生的个人故事引导录制应用。',
    href: 'https://podcasts.apple.com/cn/podcast/circlecast/id1859906660',
  },
  {
    title: 'Adaptive Eta',
    type: 'AI Agent 技能',
    description: '为 OpenClaw 智能体开发的自定义技能，提升 AI 执行特定任务的效率。',
    href: 'https://clawhub.ai/yanghe1941/adaptive-eta',
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
    date: '2023 至今',
    company: 'Personal Projects',
    position: '独立开发者 & AI 探索者',
    content: '致力于将技术融入生活。开发了 Moodex、MyVault 等多款 iOS 应用。',
  },
  {
    date: '2023 - 至今',
    company: 'Damus Lab',
    position: '联合创始人',
    content: '负责东南亚出海、MCN 相关工作。',
  },
  {
    date: '2021 - 2022',
    company: 'WOOK',
    position: '品牌运营经理',
    content: '参与品牌增长与运营体系建设。',
  },
  {
    date: '2020 - 2021',
    company: 'WeGene 微基因',
    position: '运营经理',
    content: '负责消费级基因检测产品的电商运营与用户增长。',
  },
  {
    date: '2019 - 2020',
    company: 'MOTI 魔笛',
    position: '用户增长运营经理',
    content: '参与用户增长与转化效率优化。',
  },
  {
    date: '2017 - 2018',
    company: '大象公会',
    position: '商务经理',
    content: '参与“故事FM”“回形针”等内容项目合作。',
  },
  {
    date: '2013 - 2017',
    company: '河北工业大学',
    position: '—',
    content: '—',
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

          <nav aria-label="Primary" className="flex items-center gap-2 text-[13px] text-zinc-600 sm:gap-3">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-full px-2 py-1.5 transition-colors duration-200 hover:bg-zinc-100 hover:text-zinc-950"
              >
                {item.label}
              </a>
            ))}
            <a
              href="https://quaily.com/yanghe"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-3 py-2 text-[13px] font-medium text-zinc-700 transition-colors duration-200 hover:border-zinc-300 hover:text-zinc-950"
            >
              <span>博客</span>
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
          className="grid gap-10 py-16 sm:py-20 lg:grid-cols-[1.15fr_0.85fr] lg:items-end lg:py-24"
        >
          <div className="space-y-6">
            <p className="text-sm font-medium uppercase tracking-[0.24em] text-accent">
              Portfolio
            </p>
            <div className="max-w-2xl space-y-2 text-base leading-7 text-zinc-600">
              <p>杨鹤，个人开发者、美股交易员。</p>
              <p>分享关于美股、区块链、AI、市场、品牌相关信息。</p>
            </div>

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

          <div className="overflow-x-auto pb-2">
            <div className="grid min-w-[1120px] grid-cols-4 gap-4 sm:gap-5">
              {projects.map((project) => (
                <a
                  key={project.title}
                  href={project.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`${project.title} ${project.type}`}
                  className="group block h-full rounded-3xl border border-zinc-200 bg-white p-5 shadow-soft transition-all duration-200 hover:-translate-y-1 hover:border-zinc-300 hover:shadow-md"
                >
                  <div className="mb-5 flex items-center justify-between gap-4">
                    <span className="inline-flex rounded-full bg-zinc-100 px-2.5 py-1 text-[11px] font-medium uppercase tracking-[0.16em] text-zinc-600">
                      {project.type}
                    </span>
                    <span className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-zinc-200 text-zinc-400 transition-colors duration-200 group-hover:border-zinc-300 group-hover:text-zinc-950">
                      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-3.5 w-3.5 fill-none stroke-current stroke-[1.8]">
                        <path d="M7 17 17 7" />
                        <path d="M9 7h8v8" />
                      </svg>
                    </span>
                  </div>

                  <h3 className="text-[17px] font-semibold tracking-tight text-zinc-950">{project.title}</h3>
                  <p className="mt-2.5 text-sm leading-6 text-zinc-600">{project.description}</p>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section id="experience" className="py-12 sm:py-16">
          <div className="mb-8">
            <p className="text-sm font-medium uppercase tracking-[0.24em] text-accent">Experience</p>
            <h2 className="mt-2 text-2xl font-semibold tracking-tight text-zinc-950 sm:text-3xl">
              经历
            </h2>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-zinc-200 bg-white shadow-soft">
            <table className="min-w-[760px] w-full border-separate border-spacing-0 text-left">
              <thead className="bg-zinc-50">
                <tr>
                  <th className="border-b border-zinc-200 px-4 py-3 text-[11px] font-semibold uppercase tracking-[0.16em] text-zinc-500">
                    日期
                  </th>
                  <th className="border-b border-zinc-200 px-4 py-3 text-[11px] font-semibold uppercase tracking-[0.16em] text-zinc-500">
                    公司
                  </th>
                  <th className="border-b border-zinc-200 px-4 py-3 text-[11px] font-semibold uppercase tracking-[0.16em] text-zinc-500">
                    职位
                  </th>
                  <th className="border-b border-zinc-200 px-4 py-3 text-[11px] font-semibold uppercase tracking-[0.16em] text-zinc-500">
                    内容
                  </th>
                </tr>
              </thead>
              <tbody>
                {experiences.map((item, index) => (
                  <tr key={`${item.date}-${item.company}`} className={index % 2 === 0 ? 'bg-white' : 'bg-zinc-50/60'}>
                    <td className="border-b border-zinc-100 px-4 py-3.5 align-top text-sm text-zinc-600">
                      {item.date}
                    </td>
                    <td className="border-b border-zinc-100 px-4 py-3.5 align-top text-sm font-medium text-zinc-950">
                      {item.company}
                    </td>
                    <td className="border-b border-zinc-100 px-4 py-3.5 align-top text-sm text-zinc-600">
                      {item.position}
                    </td>
                    <td className="border-b border-zinc-100 px-4 py-3.5 align-top text-sm leading-6 text-zinc-600">
                      {item.content}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </main>

      <footer id="contact" className="border-t border-zinc-200 bg-white">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-8 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <p className="text-sm text-zinc-500">© {year} Yanghe. All rights reserved.</p>

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
