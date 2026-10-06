# Codefloor IT — SEO / AEO / GEO Audit

Audit date: 6 October 2026. Scope: the `alysian-website` codebase (Vite + React 19 SPA) and the live deployment at `https://www.codefloorit.com` (Vercel). Written before any change was made.

Severity: **P0** blocks indexing, **P1** high impact, **P2** content and linking, **P3** nice to have.

## How the site was measured

| Check | Result |
| --- | --- |
| `GET https://codefloorit.com/` | 307 (temporary) redirect to `https://www.codefloorit.com/` |
| `GET https://www.codefloorit.com/` | 200, 668 bytes of HTML, empty `<div id="root">` |
| `GET /robots.txt` | 404 |
| `GET /sitemap.xml` | 404 |
| `GET /about`, `/it-services/website-development` | 404 (pages only exist as `/#/about`) |
| Production JS bundle | one 647 KB chunk |
| Images shipped | 7.5 MB of PNG (largest 2.6 MB), no WebP/AVIF |

## P0 — indexing blockers

| # | Current issue | Why it matters | Recommended solution | Files | Expected benefit |
| --- | --- | --- | --- | --- | --- |
| 1 | `HashRouter`: every page is `/#/…`. Search engines treat everything after `#` as the same URL. | The whole site is one indexable URL. No service, project or article page can rank or be cited. | Switch to `BrowserRouter` with real paths. | `src/main.jsx` | Every page becomes individually indexable. |
| 2 | No server HTML. The response body is an empty `<div id="root">`. | GPTBot, ClaudeBot, PerplexityBot and Bing's first pass do not run JavaScript. They see no content at all. | Prerender every route to static HTML at build time and hydrate on the client. | `src/entry-server.jsx`, `scripts/prerender.mjs`, `package.json` | Content is readable by AI crawlers and search engines without JS. |
| 3 | No `robots.txt`, no `sitemap.xml`. | No discovery path for crawlers; no sitemap to submit to Search Console or Bing. | Generate both at build time from the route list. | `scripts/prerender.mjs` | Faster, complete discovery. |
| 4 | One static `<title>` and description for all pages; no canonical, Open Graph, Twitter card or structured data. Five pages patch `document.title` in a `useEffect` only. | No page-level relevance signal, no rich results, poor link previews, no entity data. | Central per-route metadata rendered into the prerendered `<head>` and kept in sync on navigation. | `src/seo.js`, `index.html` | Page-level targeting, entity clarity, share previews. |
| 5 | Unknown URLs redirect to the home page (`<Route path="*" → Navigate "/">`); deep links return a bare Vercel 404. | Soft 404s and a dead experience for mistyped or stale links. | Real 404 page with a 404 status and `noindex`. | `src/App.jsx`, `vercel.json` | Clean crawl signals. |
| 6 | Published claims that cannot be verified and contradict each other: founded 2025 but "11+ years", "a decade of growing", four named awards, "96% retention", "25+ cities", "120+ projects", "10+ team", six named testimonials, twelve named staff used as article authors, four case studies with revenue figures. | Unsupported claims are an E-E-A-T and legal risk, and AI systems repeat them as fact. Putting them in schema would be misleading markup. | Remove all of them (confirmed by the owner). Attribute articles to the company. | `src/data/testimonials.js`, `teamData.js`, `caseStudies.js`, `blogPosts.js`, `AboutUs.jsx`, `AboutPreview.jsx`, `WhyChooseUs.jsx`, related components | A site whose every statement can be stood behind. |

## P1 — high impact

| # | Current issue | Why it matters | Recommended solution | Files | Expected benefit |
| --- | --- | --- | --- | --- | --- |
| 7 | Positioning is split evenly between IT and tax ("full-stack IT and financial consulting"), plus pages for graphic design, digital marketing, social media, cyber security (pen-testing, ISO 27001) and cloud (AWS/Azure/GCP). | The business reads as several unrelated companies. Neither people nor AI systems can say what Codefloor IT is. | Lead with five web/software services; keep Tax & Financial as a clearly separate secondary section (confirmed by the owner). | `src/data/itServices.js`, `siteConfig.js`, home sections, nav, footer | Clear entity: web and software development company in Ahmedabad. |
| 8 | Company name is written "Codefloor It Tech LLP" (lower-case "t"), "Codefloor", and in the README "Private Limited". | Inconsistent naming weakens entity recognition. | Use "Codefloor IT Tech LLP" (legal) and "Codefloor IT" (brand) everywhere. | all files using the name | Consistent entity across titles, footer, schema. |
| 9 | Home H1 is "We build digital products that move businesses forward." Hero badge reads "Software Development · IT Consulting · Tax & Compliance". No mention of Ahmedabad above the fold. | The most important heading carries no topic or location. | H1 that names websites and web applications; intro sentence stating who, what and where. | `Hero.jsx` | Stronger relevance for the primary query and for AI summaries. |
| 10 | Service pages are thin: two bullet lists, four process labels, three FAQs. No intro copy, no links to projects or articles. `/it-services` says "20 services" while eight exist. | Thin pages rarely rank for commercial queries and give answer engines nothing to quote. | Rewrite each service page: direct definition, who it is for, what is included, process, related work, related insights, FAQs. | `itServices.js`, `ITServiceDetail.jsx`, `ITServices.jsx` | Rankable commercial pages. |
| 11 | FAQ answers are removed from the DOM when collapsed (`AnimatePresence`). | Only the open answer exists in HTML; the rest is invisible to crawlers. | Native `<details>/<summary>` so every answer is in the HTML. | `FAQAccordion.jsx` | All Q&A extractable; FAQPage schema matches visible content. |
| 12 | Headline text is hidden (`opacity: 0`) until JavaScript runs: every page H1 is wrapped in a Framer Motion reveal, and a full-screen loader covers the page for a fixed 900 ms. | LCP cannot be faster than JS download + 900 ms. | Remove the artificial loader; run hero entrance animations in CSS so text paints with the HTML. | `main.jsx`, `Hero.jsx`, `PageHero.jsx`, `CaseStudyHero.jsx` | Large LCP improvement. |
| 13 | Images: 2.6 MB, 1.5 MB, 1.4 MB and 0.9 MB PNG screenshots; a 1.5 MB PNG used as the favicon; a 520 KB PNG logo rendered at about 110 px tall. Filenames contain spaces and a typo ("Aranya Place"). No `width`/`height`. Alt text is the bare project title. | Slow pages, wasted crawl bytes, weak image search signals. | Convert to WebP at display size, descriptive kebab-case filenames, descriptive alt text, explicit dimensions, small PNG favicons. | `src/assets/*`, `public/*`, `projects.js`, `ProjectMockup.jsx`, `Navbar.jsx`, `Footer.jsx` | Roughly 95% less image weight. |
| 14 | Google Fonts loaded through a CSS `@import`. | The font request is only discovered after the CSS downloads, delaying text render. | `preconnect` + `<link rel="stylesheet">` in the HTML head. | `index.html`, `src/index.css` | Faster first render. |
| 15 | Contact email is `infor@codefloorit.com` (typo, confirmed). Footer and contact page render Twitter and YouTube icons whose `href` is `undefined`. | Lost enquiries; broken links on every page. | Fix the address; render only configured profiles. | `siteConfig.js`, `Footer.jsx`, `ContactUs.jsx` | Working contact paths; clean `sameAs`. |

## P2 — content and internal linking

| # | Current issue | Why it matters | Recommended solution | Files | Expected benefit |
| --- | --- | --- | --- | --- | --- |
| 16 | Articles are five short paragraphs with no headings, written under invented author names; `/blog` is not linked from the navigation or footer (orphan). Topics do not match the services. | No answer-style content for the questions buyers ask; orphan pages are rarely crawled. | Move to `/insights`, add it to the navigation, attribute to Codefloor IT, add structured articles on buyer questions. | `blogPosts.js`, `Blog.jsx`, `BlogDetail.jsx`, `navData.js` | Informational and AI-answer coverage. |
| 17 | `/faqs`, `/testimonials`, `/disclaimer` have no or minimal inbound links; service pages never link to projects; projects never link to services. | Link equity and context do not flow between related pages. | Home → Services → Service → related Work and Insights → Contact, with descriptive anchors; fuller footer. | service, project, article pages; `Footer.jsx` | Stronger topical clusters; shallower click depth. |
| 18 | URL names: `/it-services`, `/case-studies`, `/blog`. | Fine technically, but `/services`, `/work`, `/insights` are clearer. No URL has ranking history (all were hash URLs), so the change is free now. | Rename with redirects from the old paths. | `App.jsx`, `vercel.json`, all links | Cleaner, lasting URL structure. |
| 19 | Project pages: bare titles, "Year: TBD", "Tech stack — TBD", filter tabs for categories with no projects (Mobile, SaaS, E-Commerce). | Placeholder text on public pages reads as unfinished. | Hide empty fields and empty categories; add project type and a link to the relevant service. | `projects.js`, `CaseStudyHero.jsx`, `ProjectDetail.jsx`, `ProjectCard.jsx`, `TechnologyTags.jsx` | More credible portfolio pages. |
| 20 | Decorative jargon as labels: "THE SOVEREIGN CHARTER", "CAPABILITY DEPLOYMENT", "VECTOR // 01 — Office Registry Address", "Secure Communications Processing". | Hard for people and machines to understand what a section is. | Plain labels. | `AboutUs.jsx`, `ITServices.jsx`, `ContactUs.jsx`, `ITServiceDetail.jsx` | Clearer pages. |
| 21 | About page tells an origin story ("started as a two-person tax consultancy") with an invented timeline. | Conflicts with the web/software positioning and cannot be verified. | Factual About page: who, what, where, services, how the team works. | `AboutUs.jsx` | Trustworthy entity page. |

## P3 — nice to have

| # | Current issue | Why it matters | Recommended solution | Files |
| --- | --- | --- | --- | --- |
| 22 | `CookieConsent.jsx` contains a copy of the Breadcrumb component, so every page ends with a second, empty breadcrumb `<nav>`. | Duplicate landmark, unlabeled link. | Remove from the layout. | `Layout.jsx` |
| 23 | No security or caching headers beyond HSTS. | Missed hardening and repeat-visit speed. | `vercel.json` headers. | `vercel.json` |
| 24 | Apex → `www` redirect is a 307 (temporary). | A permanent redirect consolidates signals more reliably. | Set to 308 in the Vercel dashboard (not controllable from code). | Vercel project settings |
| 25 | Breadcrumb home link and several icon buttons have no accessible name; filter buttons use `role="tab"` without tab panels. | Screen-reader usability. | `aria-label`s; plain buttons with `aria-pressed`. | `Breadcrumb.jsx`, `ProjectFilters.jsx` |
| 26 | Unused code: Swiper, EmailJS, unrouted pages imported in `App.jsx`. | Bundle weight and confusion. | Remove imports of unused pages and the fabricated-content components. | `App.jsx` |

## Not changed, flagged for the owner

- **Newsletter forms** (footer and insights sidebar) show "Thanks for subscribing" but do not send the address anywhere.
- **Tax pages** state that work is "reviewed by qualified Chartered Accountants and Company Secretaries" and list starting prices. These are business representations I cannot verify; they are left as written.
- **No street address** is published, so `LocalBusiness` schema is not appropriate yet. `Organization` with city, region and country is used instead.
- **`mapEmbed`** in the site config is a Google Maps short link that no page uses. If a Google Business Profile exists, its URL should be added to the site and to `sameAs`.
- **Social profiles** (LinkedIn, Instagram, Facebook) were confirmed as official by the owner; I did not verify that the pages are live.
- **Timelines** ("3–6 weeks" for a business website, "8–16 weeks" for custom software) come from the existing FAQ and are kept as the company's own estimates.

## Keyword and intent strategy

Geographic focus: Ahmedabad first, then Gujarat, then India. One primary intent per page.

| Cluster | Example queries | Target page |
| --- | --- | --- |
| Commercial, company level | web development company in Ahmedabad; software development company Ahmedabad; web development company Gujarat | `/` |
| Commercial, service list | web development services; website and web application development services | `/services` |
| Transactional | business website development Ahmedabad; website design and development for small business | `/services/business-website-development` |
| Transactional | custom web application development Ahmedabad; custom CRM development; booking system development; business web applications | `/services/custom-web-application-development` |
| Transactional | ecommerce website development Ahmedabad; online store development with Razorpay | `/services/ecommerce-development` |
| Transactional | website redesign; website modernization services; migrate old website | `/services/website-modernization` |
| Transactional | website maintenance company Ahmedabad; website support retainer | `/services/website-maintenance-support` |
| Local / niche (portfolio) | hotel website development Ahmedabad; resort website design; doctor appointment booking system; law firm website design | `/work/*` project pages |
| Informational | website vs web application; how to choose a web development company in Ahmedabad; when to redesign a website; custom CRM vs ready-made | `/insights/*` |
| AI-answer | what does a web development company do; how long does a website take; what does a website cost in India and what drives it | `/faqs`, service FAQs, insights |
| Brand / entity | Codefloor IT; Codefloor IT Tech LLP; Codefloor Ahmedabad | `/about`, `/contact` |

Per the Codefloor priorities, niche and location-modified terms (hotel and resort booking, clinic appointment systems) are the realistic early wins; broad "web development company in Ahmedabad" is dominated by long-established agencies and directories and is a long-term target.

## Implementation plan

1. **P0**: `BrowserRouter`, build-time prerender, per-route head tags and JSON-LD, `robots.txt`, `sitemap.xml`, `llms.txt`, real 404, `vercel.json`, removal of unverified claims.
2. **P1**: five-service catalogue with full page content, entity naming, home hero, crawlable FAQs, LCP fixes, image conversion, font loading, contact fixes.
3. **P2**: `/insights` with buyer-question articles, internal linking, URL renames, portfolio clean-up, plain labels, factual About page.
4. **P3**: headers, accessibility labels, dead-code removal.
5. Validate: build, lint, crawl of the prerendered output (titles, canonicals, JSON-LD parse, internal links, image alts).
