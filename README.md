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

- `index.html`：Vite 入口页
- `src/main.jsx`：React 挂载入口
- `src/App.jsx`：核心页面组件
- `src/index.css`：Tailwind 入口样式
- `tailwind.config.js`：Tailwind 配置
- `postcss.config.js`：PostCSS 配置

## 部署提示

如果你要继续使用 `yanghe.moodex.cc`：

1. 在 GitHub 仓库的 **Settings → Pages** 中启用 Pages。
2. 在 **Custom domain** 中填写 `yanghe.moodex.cc`。
3. 在域名服务商处添加一条 **CNAME**：
   - **Host**：`yanghe`
   - **Target**：`yanghe1941.github.io`
4. 等待 DNS 传播和 HTTPS 证书签发完成。
