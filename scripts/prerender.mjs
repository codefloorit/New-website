// Build step: renders every route in src/seo.js to static HTML so search
// engines and AI crawlers get full content without running JavaScript, then
// writes sitemap.xml, robots.txt and llms.txt from the same data.
// Runs after `vite build` and `vite build --ssr` (see package.json).
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const dist = path.join(root, "dist");
const server = await import(pathToFileURL(path.join(root, "dist-ssr", "entry-server.js")).href);
const { routes, getSeo, headTags, render, siteConfig, itServices, projects, blogPosts } = server;

const template = fs.readFileSync(path.join(dist, "index.html"), "utf8");
if (!template.includes("<!--seo-->") || !template.includes('<div id="root"></div>')) {
  throw new Error("index.html is missing the <!--seo--> or #root placeholder");
}

const write = (file, contents) => {
  const out = path.join(dist, file);
  fs.mkdirSync(path.dirname(out), { recursive: true });
  fs.writeFileSync(out, contents);
};

const html = (pathname) =>
  template
    .replace("<!--seo-->", () => headTags(getSeo(pathname)))
    .replace('<div id="root"></div>', () => `<div id="root">${render(pathname)}</div>`);

// "/" -> index.html, "/about" -> about.html (served at /about via cleanUrls in vercel.json)
for (const r of routes) write(r.path === "/" ? "index.html" : `${r.path.slice(1)}.html`, html(r.path));
write("404.html", html("/404"));

const url = (p) => `${siteConfig.url}${p === "/" ? "/" : p}`;

write(
  "sitemap.xml",
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${routes
    .map((r) => `  <url><loc>${url(r.path)}</loc>${r.lastmod ? `<lastmod>${r.lastmod}</lastmod>` : ""}</url>`)
    .join("\n")}\n</urlset>\n`
);

write("robots.txt", `User-agent: *\nAllow: /\n\nSitemap: ${siteConfig.url}/sitemap.xml\n`);

const list = (items) => items.map(([title, p, desc]) => `- [${title}](${url(p)}): ${desc}`).join("\n");
write(
  "llms.txt",
  `# ${siteConfig.shortName}

> ${siteConfig.name} (brand name: ${siteConfig.shortName}) is a web and software development company based in ${siteConfig.address}, founded in ${siteConfig.founded}. It builds business websites, custom web applications and e-commerce stores, modernizes outdated websites, and provides maintenance and support. It serves businesses in Ahmedabad, across Gujarat and elsewhere in India.

Contact: ${siteConfig.email}, ${siteConfig.phone}. Hours: ${siteConfig.businessHours}.

## Services
${list(itServices.map((s) => [s.title, `/services/${s.slug}`, s.shortDesc]))}

## Work
${list(projects.map((p) => [p.title, `/work/${p.slug}`, `${p.projectType}. ${p.tagline}`]))}

## Insights
${list(blogPosts.map((p) => [p.title, `/insights/${p.slug}`, p.excerpt]))}

## Company
${list([
  ["About", "/about", "Who Codefloor IT is and how it works."],
  ["FAQs", "/faqs", "Direct answers on cost, timelines and process."],
  ["Contact", "/contact", "Phone, WhatsApp, email and enquiry form."],
  ["Tax & Financial Services", "/tax-services", "A separate service line: GST, income tax, company registration and compliance."],
])}
`
);

fs.rmSync(path.join(root, "dist-ssr"), { recursive: true, force: true });
console.log(`prerendered ${routes.length + 1} pages, sitemap.xml, robots.txt, llms.txt`);
