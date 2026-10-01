# Yanghe Portfolio

极简个人作品集网站，使用 **React + Tailwind CSS + Vite**。

## 初始化命令

```bash
npm create vite@latest yanghe-portfolio -- --template react
cd yanghe-portfolio
npm install
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

## 运行命令

```bash
npm run dev
```

## 构建命令

```bash
npm run build
```

## 目录说明

- `index.html`：Vite 入口页（开发与构建共用）
- `src/main.jsx`：React 挂载入口
- `src/App.jsx`：核心页面组件
- `src/data.js`：项目、文章、经历与中英文文案
- `src/index.css`：Tailwind 入口样式
- `tailwind.config.js`：Tailwind 配置
- `postcss.config.js`：PostCSS 配置

## 部署

推送到 `main` 后，GitHub Actions（`.github/workflows/deploy.yml`）会自动执行 `npm run build`，并把 `dist/` 发布到 GitHub Pages。构建产物不提交到仓库。

- 仓库 **Settings → Pages → Source** 需设为 **GitHub Actions**。
- 自定义域名 `yanghe.moodex.cc` 由 `public/CNAME` 提供，DNS 为 CNAME `yanghe` → `yanghe1941.github.io`。
- 静态资源（favicon、og-image、robots.txt、sitemap.xml、404.html）放在 `public/`。
