// Checks the prerendered site in dist/. Run with `npm run check:seo` after a build.
// Fails (exit 1) on anything that would hurt indexing: missing or duplicate
// titles/descriptions/canonicals, invalid JSON-LD, broken internal links,
// images without alt text, pages missing from the sitemap.
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const dist = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..", "dist");
const SITE = "https://www.codefloorit.com";

const walk = (dir) =>
  fs.readdirSync(dir, { withFileTypes: true }).flatMap((e) => {
    const p = path.join(dir, e.name);
    return e.isDirectory() ? walk(p) : p.endsWith(".html") ? [p] : [];
  });

const toRoute = (file) => {
  const rel = path.relative(dist, file).replace(/\\/g, "/").replace(/\.html$/, "");
  return rel === "index" ? "/" : `/${rel}`;
};

const pages = walk(dist).map((file) => ({ route: toRoute(file), html: fs.readFileSync(file, "utf8") }));
const routes = new Set(pages.map((p) => p.route));
const sitemap = fs.readFileSync(path.join(dist, "sitemap.xml"), "utf8");
const sitemapUrls = new Set([...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map((m) => m[1]));

const all = (html, re) => [...html.matchAll(re)].map((m) => m[1]);
const errors = [];
const warnings = [];
const seen = { title: new Map(), description: new Map() };

for (const { route, html } of pages) {
  const err = (msg) => errors.push(`${route}: ${msg}`);
  const warn = (msg) => warnings.push(`${route}: ${msg}`);
  const is404 = route === "/404";

  const titles = all(html, /<title[^>]*>(.*?)<\/title>/g);
  const descs = all(html, /<meta[^>]*name="description" content="(.*?)"/g);
  const canon = all(html, /<link[^>]*rel="canonical" href="(.*?)"/g);
  const h1s = all(html, /<h1[\s>]([\s\S]*?)<\/h1>/g);

  if (titles.length !== 1) err(`${titles.length} <title> tags`);
  if (descs.length !== 1) err(`${descs.length} meta descriptions`);
  if (h1s.length !== 1) err(`${h1s.length} <h1> tags`);
  if (titles[0]?.length > 65) warn(`title is ${titles[0].length} chars`);
  if (descs[0] && (descs[0].length < 70 || descs[0].length > 175)) warn(`description is ${descs[0].length} chars`);

  if (is404) {
    if (!/name="robots" content="noindex/.test(html)) err("404 page is indexable");
  } else {
    const expected = `${SITE}${route === "/" ? "/" : route}`;
    if (canon.length !== 1 || canon[0] !== expected) err(`canonical is ${canon} (expected ${expected})`);
    if (!sitemapUrls.has(expected)) err("missing from sitemap.xml");
    if (/content="noindex/.test(html)) err("page is noindex");
    for (const [key, value] of [["title", titles[0]], ["description", descs[0]]]) {
      if (seen[key].has(value)) err(`duplicate ${key} (same as ${seen[key].get(value)})`);
      seen[key].set(value, route);
    }
    if (!/property="og:image"/.test(html) || !/name="twitter:card"/.test(html)) err("missing Open Graph / Twitter tags");
  }

  for (const block of all(html, /<script[^>]*type="application\/ld\+json">([\s\S]*?)<\/script>/g)) {
    try {
      const types = JSON.parse(block)["@graph"].map((n) => n["@type"]);
      if (!types.includes("Organization")) err("JSON-LD has no Organization");
    } catch (e) {
      err(`invalid JSON-LD: ${e.message}`);
    }
  }
  if (!/application\/ld\+json/.test(html)) err("no JSON-LD");

  for (const img of all(html, /<img([^>]*)>/g)) {
    if (!/\salt="[^"]+"/.test(img)) err(`image without alt text: ${img.slice(0, 80)}`);
    if (!/\swidth="/.test(img)) warn(`image without width/height: ${img.slice(0, 60)}`);
  }

  for (const href of all(html, /<a[^>]*href="(\/[^"#?]*)/g)) {
    const target = href.length > 1 ? href.replace(/\/$/, "") : href;
    if (!routes.has(target) && !fs.existsSync(path.join(dist, target))) err(`broken internal link ${href}`);
  }
  if (/href="undefined"|href=""/.test(html)) err("link with empty or undefined href");

  // The page body must be real HTML, not an empty app shell.
  const text = html.replace(/<script[\s\S]*?<\/script>|<style[\s\S]*?<\/style>|<[^>]+>/g, " ");
  if (text.split(/\s+/).length < 150) err("page has almost no server-rendered text");
}

for (const u of sitemapUrls) if (!routes.has(u.replace(SITE, "").replace(/\/$/, "") || "/")) errors.push(`sitemap lists ${u} but no page was built`);

// Orphans: every page must be linked from at least one other page.
const linked = new Set(pages.flatMap(({ route, html }) => all(html, /<a[^>]*href="(\/[^"#?]*)/g).filter((h) => h !== route)));
for (const r of routes) if (r !== "/" && r !== "/404" && !linked.has(r)) errors.push(`${r}: orphan page (no internal links point to it)`);

const robots = fs.readFileSync(path.join(dist, "robots.txt"), "utf8");
if (/Disallow: \/\s*$/m.test(robots)) errors.push("robots.txt blocks the whole site");
if (!robots.includes("Sitemap:")) errors.push("robots.txt has no Sitemap line");

warnings.forEach((w) => console.warn(`warn  ${w}`));
errors.forEach((e) => console.error(`ERROR ${e}`));
console.log(`\n${pages.length} pages, ${sitemapUrls.size} sitemap URLs, ${errors.length} errors, ${warnings.length} warnings`);
process.exit(errors.length ? 1 : 0);
