import { readFileSync, writeFileSync, mkdirSync, rmSync } from 'node:fs';
import { pathToFileURL } from 'node:url';
import { resolve } from 'node:path';

const SITE_URL = 'https://yanghe.moodex.cc';
const pages = [
  { language: 'en', path: '/', file: 'dist/index.html', htmlLang: 'en', ogLocale: 'en_US' },
  { language: 'zh', path: '/zh/', file: 'dist/zh/index.html', htmlLang: 'zh-Hans', ogLocale: 'zh_CN' },
];

const { render, siteCopy } = await import(pathToFileURL(resolve('dist-ssr/entry-server.js')).href);
const template = readFileSync('dist/index.html', 'utf8');
const beaconToken = process.env.CF_BEACON_TOKEN?.trim();

const escapeAttr = (value) => value.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;');

const setMeta = (html, attr, key, value) => {
  const pattern = new RegExp(`(<meta ${attr}="${key}" content=")[^"]*(")`);
  if (!pattern.test(html)) throw new Error(`Missing <meta ${attr}="${key}"> in index.html`);
  return html.replace(pattern, `$1${escapeAttr(value)}$2`);
};

const alternateLinks = [
  ...pages.map((page) => `<link rel="alternate" hreflang="${page.htmlLang}" href="${SITE_URL}${page.path}" />`),
  `<link rel="alternate" hreflang="x-default" href="${SITE_URL}/" />`,
].join('\n    ');

const beaconScript = beaconToken
  ? `<script type="module" src="https://static.cloudflareinsights.com/beacon.min.js" data-cf-beacon='${JSON.stringify({ token: beaconToken })}'></script>`
  : '';

for (const page of pages) {
  const copy = siteCopy[page.language];
  const url = `${SITE_URL}${page.path}`;
  let html = template
    .replace('<html lang="en">', `<html lang="${page.htmlLang}">`)
    .replace(/<title>[^<]*<\/title>/, `<title>${copy.title}</title>`)
    .replace(/(<link rel="canonical" href=")[^"]*(")/, `$1${url}$2`)
    .replace('<!--head-links-->', alternateLinks)
    .replace('<!--analytics-->', beaconScript)
    .replace('<!--app-html-->', render(page.language));

  html = setMeta(html, 'name', 'description', copy.description);
  html = setMeta(html, 'property', 'og:title', copy.title);
  html = setMeta(html, 'property', 'og:description', copy.description);
  html = setMeta(html, 'property', 'og:url', url);
  html = setMeta(html, 'property', 'og:locale', page.ogLocale);
  html = setMeta(html, 'name', 'twitter:title', copy.title);
  html = setMeta(html, 'name', 'twitter:description', copy.description);

  mkdirSync(resolve(page.file, '..'), { recursive: true });
  writeFileSync(page.file, html);
}

const today = new Date().toISOString().slice(0, 10);
const sitemapAlternates = pages
  .map((page) => `    <xhtml:link rel="alternate" hreflang="${page.htmlLang}" href="${SITE_URL}${page.path}" />`)
  .join('\n');
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${pages
  .map(
    (page) => `  <url>
    <loc>${SITE_URL}${page.path}</loc>
    <lastmod>${today}</lastmod>
${sitemapAlternates}
  </url>`,
  )
  .join('\n')}
</urlset>
`;
writeFileSync('dist/sitemap.xml', sitemap);
rmSync('dist-ssr', { recursive: true, force: true });

console.log(`Prerendered ${pages.map((page) => page.path).join(', ')}${beaconToken ? ' with Cloudflare Web Analytics' : ''}.`);
