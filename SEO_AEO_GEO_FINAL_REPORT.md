# Codefloor IT — SEO / AEO / GEO Final Report

Date: 6 October 2026. Companion documents: `SEO_AEO_GEO_AUDIT.md`, `COMPETITOR_GAP_ANALYSIS.md`.

## 1. Executive summary

The live site was invisible to search and AI crawlers as anything more than one URL: it used hash routing (`/#/about`), returned an empty HTML shell, and had no robots.txt, sitemap, per-page metadata or structured data. It also carried template content that could not be verified (awards, "11+ years" for a company founded in 2025, named testimonials, staff and case studies).

The site now builds to **48 static, indexable HTML pages plus a real 404**, each with its own title, description, canonical URL, Open Graph tags and JSON-LD. The unverifiable claims are removed. The site is positioned as a web and software development company in Ahmedabad with five services, and Tax & Financial is kept as a separate secondary section.

Nothing is deployed and nothing is committed. All changes are in the working tree for review.

**No ranking or traffic improvement is claimed.** There is no before/after search data; that starts once the site is deployed and Search Console is connected.

## 2. Before vs after

| Area | Before | After | Status |
| --- | --- | --- | --- |
| Technical SEO | Hash routing, one indexable URL, empty HTML shell, soft 404s | Clean URLs, 48 prerendered pages, real 404 with `noindex`, redirects from old paths | Done; verified locally |
| Metadata | One title and description for the whole site; no canonical, OG or Twitter tags | Unique title, description, canonical, OG and Twitter tags on every page | Done; 0 duplicates in check |
| Schema | None | Organization on every page; WebSite, Service, FAQPage, BreadcrumbList, Article, CreativeWork, AboutPage, ContactPage, ItemList where they match visible content | Done; JSON parses on all pages. Not yet run through Google's Rich Results Test |
| Sitemap | 404 | `sitemap.xml` generated at build, 48 canonical URLs | Done |
| Robots | 404 | `robots.txt` allows all crawlers and points to the sitemap | Done |
| Local SEO | "Ahmedabad" only in the footer and a stat tile | City, state and country in titles, H1s, intro copy, About, Contact and Organization schema | Partly done; Google Business Profile and street address are still missing |
| AEO | FAQ answers removed from the DOM when collapsed; no question-led content | 22 general FAQs plus 23 service FAQs, all in the HTML; six question-led articles that open with a direct answer | Done |
| GEO | Company read as IT + tax + marketing + design + security | One clear entity statement repeated consistently; `llms.txt`; server-rendered content | Done |
| Internal linking | Blog, FAQs and testimonials orphaned; services and projects not connected | Services ↔ projects ↔ insights ↔ contact; fuller footer; 0 orphan pages in check | Done |
| Performance | 647 KB JS, 7.5 MB of PNG, 900 ms forced loader, headings hidden until JS ran | 592 KB JS (181 KB gzip), 270 KB of WebP, no loader, headings paint with the HTML | Improved; JS bundle still large. No Lighthouse or field data yet |
| Accessibility | Unlabeled icon links, links with `href="undefined"`, misused tab roles, images without dimensions | Labels added, broken links removed, native `<details>` FAQs, width/height on images | Improved; no full WCAG audit done |

## 3. Technical SEO fixes

- **Routing**: `HashRouter` → `BrowserRouter`. Old `/#/…` links are forwarded to the real path on load.
- **Prerendering**: `npm run build` now builds the client, builds a server bundle, and runs `scripts/prerender.mjs`, which writes one HTML file per route and hydrates in the browser. No new dependencies.
- **URLs**: `/it-services` → `/services`, `/case-studies` → `/work`, `/blog` → `/insights`. Permanent redirects for the old paths are in `vercel.json`.
- **`vercel.json`** (new): clean URLs, no trailing slash, redirects, long-lived caching for hashed assets, and basic security headers.
- **404**: unknown URLs render the Not Found page; `404.html` is generated so Vercel returns a real 404 status.
- **robots.txt, sitemap.xml, llms.txt**: generated at build from the same route list, so they cannot drift from the pages.
- **Favicon and manifest**: the 1.5 MB PNG favicon is replaced by 48/192/512 px icons, an Apple touch icon and `site.webmanifest`.
- **`npm run check:seo`** (new): fails the build check on missing or duplicate titles, descriptions or canonicals, invalid JSON-LD, broken internal links, images without alt text, orphan pages or pages missing from the sitemap. It found and I fixed a pre-existing broken link (`/book-consultation`) on all 15 tax pages.

## 4. On-page SEO fixes

| Page | Primary intent | Title |
| --- | --- | --- |
| `/` | Web development company in Ahmedabad | Web Development Company in Ahmedabad \| Codefloor IT |
| `/services` | Service overview | Web & Software Development Services \| Codefloor IT |
| `/services/business-website-development` | Business website development | Business Website Development in Ahmedabad \| Codefloor IT |
| `/services/custom-web-application-development` | Custom web apps, booking systems, CRM | Custom Web Application Development in Ahmedabad \| Codefloor IT |
| `/services/ecommerce-development` | E-commerce websites | E-commerce Website Development in Ahmedabad \| Codefloor IT |
| `/services/website-modernization` | Redesign and modernization | Website Modernization & Redesign Services \| Codefloor IT |
| `/services/website-maintenance-support` | Maintenance | Website Maintenance & Support Services \| Codefloor IT |
| `/work` | Portfolio | Our Work: Websites & Web Applications \| Codefloor IT |
| `/insights` | Guides | Insights on Websites & Web Applications \| Codefloor IT |
| `/about` | Brand / entity | About Codefloor IT Tech LLP \| Ahmedabad, Gujarat |
| `/contact` | Contact | Contact Codefloor IT \| Web Development, Ahmedabad |
| `/faqs` | Question answers | Web Development FAQs: Cost, Timelines, Process \| Codefloor IT |

- Home H1 is now "We build websites & web apps that move businesses." with a location badge and a plain statement of who, what and where.
- Each service page has: a definition sentence, what the service involves, who it is for, what is included, process, related projects, FAQs, related guides, other services, and one contextual CTA.
- One H1 per page on all 49 pages. Decorative labels such as "THE SOVEREIGN CHARTER" and "VECTOR // 01 — Office Registry Address" are replaced with plain ones on the pages I rewrote.
- CTAs now read "Discuss Your Project", "Talk to Codefloor IT", "View Our Work".

## 5. Local SEO fixes

- Consistent name: **Codefloor IT Tech LLP** (registered) and **Codefloor IT** (brand). The previous "Codefloor It Tech LLP" and the README's "Private Limited" are corrected.
- Ahmedabad, Gujarat, India appears in the home title, hero, service titles and intros, About, Contact, footer and schema.
- Organization schema carries city, region, country, phone, email, service area and the three profiles you confirmed.
- `LocalBusiness` schema was **not** added: there is no public street address, and I did not invent one, a Google Business Profile, ratings or opening-hours markup.

## 6. AEO improvements

- FAQs use native `<details>`, so every answer is in the HTML.
- `/faqs` answers the ten target questions from the brief, each with a direct first sentence.
- Service FAQs cover cost, timelines, website vs web application, payments, ownership of updates, and migration risk.
- Every article starts with a highlighted direct answer, then headed sections.
- **Cost answers contain no rupee figures.** I had no real Codefloor IT prices and would not invent market statistics. They explain what drives cost and how Codefloor IT quotes.

## 7. GEO improvements

- All content is in the server HTML, so crawlers that do not run JavaScript can read it.
- One entity statement is used consistently in the hero, About page, footer, FAQ, schema and `llms.txt`.
- `llms.txt` summarises the company, services, projects and guides with links.
- `robots.txt` blocks no crawler.

## 8. Structured data implemented

| Type | Where |
| --- | --- |
| Organization | Every page |
| WebSite | Home |
| BreadcrumbList | Every page except home and 404 |
| Service | 5 service pages |
| FAQPage | 5 service pages, `/faqs`, 15 tax pages (matching the visible FAQs) |
| Article | 11 insight articles, author and publisher set to the organization |
| CreativeWork | 6 project pages |
| ItemList | `/services` |
| AboutPage, ContactPage | `/about`, `/contact` |

Google now shows FAQ rich results only for a narrow set of sites, so expect the FAQ markup to help machine understanding rather than produce rich snippets.

## 9. Content improvements

**Removed** (unverifiable): four awards, the timeline of client and project milestones, "11+ years", "96% retention", "25+ cities", "10+ team", "24/7 support", "certified" staff claims on the home page, six testimonials and the `/testimonials` page, twelve named team members, four case studies with revenue figures, the client-name list, and invented article authors.

**Removed** (services not in the confirmed catalogue): mobile app development, UI/UX design, graphic design, digital marketing, social media marketing, cyber security and cloud services pages, plus one social media article.

**Added**: five full service pages, six new articles, a factual About page, 22 general FAQs.

**Kept**: all 15 tax service pages, five existing articles (re-attributed to Codefloor IT, one unverifiable phrase removed), all six project pages.

Statements I wrote that describe how Codefloor IT works and that **you should confirm**: a written scope and quote before work starts; a reply within one business day; a support window after launch; progress shared at milestones; React, Node.js and PostgreSQL as a typical stack; the technology marquee (React, Next.js, Node.js, PostgreSQL, Tailwind CSS, Vite, Razorpay, Figma).

## 10. Internal linking improvements

- Navigation: Services (with the five pages), Our Work, Insights, About, Tax & Financial, Contact.
- Footer: Services, Company (About, Work, Insights, FAQs, Contact), Tax & Financial, Contact.
- Service pages link to related projects, related guides and other services.
- Project pages link to the service they fall under.
- Articles end with a link to the relevant service.
- The check reports 0 orphan pages and 0 broken internal links.

## 11. Performance improvements

| Item | Before | After |
| --- | --- | --- |
| Images shipped | 7.5 MB PNG | 270 KB WebP |
| Largest image | 2.6 MB | 92 KB |
| Favicon | 1.5 MB PNG | 48 px PNG |
| JavaScript | 647 KB | 592 KB (181 KB gzip) |
| Forced loader | 900 ms on every visit | Removed |
| Heading visibility | Hidden until JS ran | In the HTML, CSS entrance animation |
| Fonts | CSS `@import` | `preconnect` + stylesheet link |

Local headless-browser measurement on the production build, 11 pages at desktop and mobile widths: no console errors, no failed requests, no horizontal overflow, CLS at or below 0.006. Local LCP figures are not meaningful for real users and are not quoted as results. **Lighthouse and PageSpeed Insights were not run**; run them against the deployed site.

## 12. Remaining issues

- **Terms & Conditions name "the courts in Jaipur, Rajasthan"** as the jurisdiction. That looks like a template leftover for an Ahmedabad LLP. It is a legal term, so I left it for you to decide.
- **Newsletter forms** (footer and Insights sidebar) say "Thanks for subscribing" but send the email nowhere.
- **Tax pages** still say work is handled by "certified professionals" and reviewed by Chartered Accountants and Company Secretaries, with starting prices. Not verified, not changed.
- **Privacy Policy** mentions cookies, analytics and a cookie banner. The site has none of these. (The `CookieConsent` component actually contained a copy of the breadcrumb and rendered a stray breadcrumb at the bottom of every page; I removed it.)
- **JavaScript bundle** is still a single 592 KB file. Route-level code splitting is the next step.
- **Scroll-reveal sections** start at `opacity: 0` until JavaScript runs. The text is in the HTML, but a visitor with JavaScript disabled would see blank sections below the hero.
- **Apex redirect** (`codefloorit.com` → `www`) is a 307. Change it to permanent in the Vercel domain settings.
- **Social profiles** were added to schema on your confirmation; I did not check that the pages are live.
- **Project pages** have no technologies, year or live URLs because the data is empty. Filling those in would strengthen them.
- **Removed design elements**: the 900 ms logo loader and the home statistics strip. Home sections were reordered so services come directly after the hero.

## 13. Recommended next steps

1. Review the diff, especially the service copy and the statements listed in section 9.
2. Deploy to a Vercel preview and confirm `/about`, `/services/...`, an unknown URL (should be 404) and an old `/#/about` link.
3. Add the site to Google Search Console and Bing Webmaster Tools; submit `sitemap.xml`.
4. Run the Rich Results Test and PageSpeed Insights on the deployed home page, one service page and one article.
5. Create or claim a Google Business Profile, then add its link and a street address to `src/data/siteConfig.js`. That unlocks `LocalBusiness` schema.
6. Create profiles on Clutch, DesignRush, GoodFirms and TechBehemoths with the same name, city and services.
7. Fix or remove the newsletter forms; decide the Terms jurisdiction.
8. Collect real testimonials with permission, and add them only then.

## 14. Future content opportunities

- **Hotel & resort website and booking system development** landing page, backed by Aranya Palace and Stayfarer. This is the clearest gap in the Ahmedabad results.
- **Clinic and doctor appointment system** landing page once that project is live.
- **Website cost in Ahmedabad with real price ranges**, if you are willing to publish starting prices.
- How long does it take to build a website: a stage-by-stage timeline.
- How e-commerce websites handle online payments in India (gateways, UPI, settlements, refunds).
- Core Web Vitals explained for business owners.
- How to modernize a legacy website without losing search traffic: a migration checklist.
- Deeper case studies: add the technologies used, more screenshots and, with client permission, measured outcomes.
