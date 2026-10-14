# Codefloor IT: SEO and GEO Implementation Record

Date: 14 October 2026. Branch: `seo-aeo-geo-optimization`.
Earlier passes are recorded in `SEO_AEO_GEO_FINAL_REPORT.md` and `PERFORMANCE_SEO_AEO_GEO_FINAL_REPORT.md`. This document covers the current pass and is the main reference for what remains.

Status labels: **Verified** = implemented and checked here. **Unverified** = implemented, not independently confirmed. **Owner** = needs account access. **Investigate** = needs a decision or more information.

## 1. Audit: the starting state

| Area | Finding |
| --- | --- |
| Stack | React 19, Vite 8 (Rolldown), React Router 7, Tailwind 3, Framer Motion. npm. Hosted on Vercel. |
| Rendering | Every route is prerendered to static HTML (`scripts/prerender.mjs`) with full content, head tags and JSON-LD, then hydrated. Crawlers that do not run JavaScript see the whole page. |
| Routes | 48 indexable pages: home, services (5), work (6), insights (11), about, contact, FAQs, tax services (16), 3 legal pages. 404 is `noindex`. |
| Metadata | One source (`src/seo.js`): unique title, description, canonical, robots, Open Graph and Twitter tags per page. |
| Structured data | One `@graph` per page: Organization (shared `@id`), WebSite, WebPage, BreadcrumbList, plus Service, FAQPage, Article, CreativeWork, ItemList, AboutPage, ContactPage where relevant. No reviews or ratings. |
| robots.txt | `User-agent: * / Allow: /` plus sitemap. No AI crawler is blocked. |
| Sitemap | Generated from the route list; only canonical, indexable URLs. |
| Search integrations | None in the repository: no Search Console, Bing or Analytics tags. |
| Checks | `npm run check:seo` (titles, descriptions, canonicals, H1, JSON-LD, links, alt text, sitemap) passed with 0 errors and 1 warning. |

### Production checks (live HTTP requests, 14 Oct 2026)

| Request | Result |
| --- | --- |
| `http://codefloorit.com/` | 308 to `https://codefloorit.com/` |
| `https://codefloorit.com/` | **307** to `https://www.codefloorit.com/` |
| `http://www.codefloorit.com/` | 308 to `https://www.codefloorit.com/` |
| `https://www.codefloorit.com/` | 200 |
| `/about/` (trailing slash) | 308 to `/about` |
| Unknown URL | 404 |
| Home page as Googlebot, OAI-SearchBot, GPTBot, PerplexityBot, ClaudeBot user agents | 200 for all |
| LinkedIn, Instagram, Facebook profiles in `sameAs` | All exist and belong to "CodeFloor IT" |

**Canonical host decision.** The brief proposed `https://codefloorit.com/` as the canonical origin, to be adopted only after checking production. Production serves the site on `www` and redirects the bare domain to it. A canonical pointing at a URL that redirects away is a contradictory signal, so the canonical origin stays `https://www.codefloorit.com`. To switch to the bare domain, change the Vercel domain redirect first, then `siteConfig.url` and `SITE` in `scripts/check-seo.mjs`.

### Prioritised issues

| Priority | Issue | Outcome |
| --- | --- | --- |
| Critical | None found. Pages are crawlable, indexable, canonical and in the sitemap. | n/a |
| High | Bare domain to `www` redirect is **307 (temporary)**, so the bare domain may be treated as a separate URL | **Owner** (Vercel domain setting) |
| High | No Search Console or Bing Webmaster verification, so indexing and queries cannot be measured | **Owner** |
| High | No Google Business Profile, which matters most for local searches such as "web development company Ahmedabad" | **Owner** |
| Medium | Footer newsletter form showed "Thanks for subscribing" but sent the address nowhere | **Verified** fixed |
| Medium | Terms & Conditions name courts in **Jaipur, Rajasthan**, while the company is in Ahmedabad | **Investigate** (legal text; not changed) |
| Medium | Tax and financial services (16 pages, 3 articles) sit beside web development and dilute topical focus | **Investigate** (business decision) |
| Low | Organization schema had no `ContactPoint`; `sameAs` used non-canonical profile URLs | **Verified** fixed |
| Low | Project schema did not say whether a project is live or in progress | **Verified** fixed |
| Low | 404 description shorter than the check's minimum | **Verified** fixed |
| Low | Four projects have no public `liveUrl`; only BharatFundAxis links out | **Investigate** (add URLs for launched client sites if the clients agree) |

## 2. Brand identity

Checked: home title, description, hero badge and intro, About, Contact, footer, Organization schema, Open Graph, logo alt text, `llms.txt`.

- Brand "Codefloor IT" and legal name "Codefloor IT Tech LLP" are used consistently; "Codefloor" is an `alternateName`.
- One phone number (+91 76984 75791) and one email (info@codefloorit.com) across the site and schema. No conflicts found.
- Location is "Ahmedabad, Gujarat, India" everywhere. No street address is published or invented; `PostalAddress` contains only locality, region and country.
- The social profiles spell the name "CodeFloor IT". Search treats this as the same name; aligning the casing on the profiles is optional.
- No awards, client counts, statistics, testimonials or certifications are claimed anywhere.

## 3. Keyword map

No search volume or difficulty figures are given: no reliable data source was available.

| Group | Keywords | Intent | Page | Gap / action |
| --- | --- | --- | --- | --- |
| Brand | Codefloor, Codefloor IT, Codefloor IT Tech LLP, Codefloor Ahmedabad | Find the company | `/`, `/about`, `/contact` | Covered in titles, H1 area, schema and `alternateName`. Brand results depend mostly on Search Console verification, a Google Business Profile and consistent external profiles. |
| Service, local | Website development company in Ahmedabad; web development company Ahmedabad | Hire locally | `/`, `/services` | Covered. A Google Business Profile is the largest remaining lever. |
| Service | Business website development | Hire | `/services/business-website-development` | Covered, with FAQ. |
| Service | Custom web application development; booking system; CRM development | Hire | `/services/custom-web-application-development` | Covered. Linked from LeadHunter, Stayfarer and doctor appointment case studies. |
| Service | E-commerce development | Hire | `/services/ecommerce-development` | No e-commerce project in the portfolio. Add one when a real project exists. |
| Service | Website modernization; website redesign | Hire | `/services/website-modernization` | Covered. |
| Service | Website maintenance services | Hire | `/services/website-maintenance-support` | Covered. |
| Niche (from Codefloor positioning) | Hotel / resort website development Ahmedabad; clinic appointment system; school admission system | Hire, niche | Aranya Palace, Stayfarer, doctor appointment case studies; booking-system article | Hotel and clinic are covered by real projects. Education has no project yet, so no page was created for it. |
| Informational | How to choose a web development company; website cost; custom vs template; website vs web app; speed | Learn | `/insights/*`, `/faqs` | Covered by six articles. "Custom website vs template website" and "website security basics" are not yet covered; see the content plan. |
| Generic, high competition | code, software development, web development, IT company | Broad | Home | Long-term only. Not targeted by any page. No ranking for "code" should be expected. |

## 4. Changes in this pass

| File | Change | Status |
| --- | --- | --- |
| `src/components/layout/Footer.jsx` | Removed the newsletter form, which faked a successful subscription. The strip now links to `/insights`. Same styling. | Verified in build HTML; not visually checked in a browser |
| `src/data/siteConfig.js` | `sameAs` / footer social links now use the canonical profile URLs the platforms redirect to | Verified (live requests) |
| `src/seo.js` | Organization gains a `ContactPoint` (phone, email, India) using the visible contact details | Verified (JSON parsed) |
| `src/seo.js` | Project `CreativeWork` gains `creativeWorkStatus` ("Live" / "In progress"), matching the status shown on the page | Verified (JSON parsed) |
| `src/seo.js` | Longer 404 description | Verified |
| `SEO_IMPLEMENTATION.md` | This document | n/a |

Deliberately not done:
- No canonical host change (see section 1).
- No `availableLanguage` in `ContactPoint`: the languages spoken are not documented anywhere.
- No new pages. Each service, niche and question with a real project or answer already has a page; more pages would be thin.
- No search-engine verification tags: none were supplied, and placeholders must not ship.
- `llms.txt` already existed; it is generated from the same data as the site, so it cannot drift. It is kept as optional and is not assumed to affect visibility.

## 5. AI crawler access

- `robots.txt` allows all agents. OAI-SearchBot (ChatGPT Search) and GPTBot (training) are both allowed by the wildcard rule; nothing was changed for either. Blocking GPTBot while allowing OAI-SearchBot is possible with a separate group, if the owner wants that.
- Live requests with Googlebot, OAI-SearchBot, GPTBot, PerplexityBot and ClaudeBot user-agent strings all returned 200. This tests user-agent handling only; it cannot test IP-based firewall rules on Vercel.
- No `X-Robots-Tag` header; `vercel.json` sets only security and cache headers.
- All business information (who, where, services, projects, contact) is in the prerendered HTML.

## 6. Tests run

| Command | Result |
| --- | --- |
| `npm run build` | Pass. 49 pages, sitemap, robots.txt, llms.txt. One pre-existing Rolldown notice (`INEFFECTIVE_DYNAMIC_IMPORT` for `src/seo.js`), harmless. |
| `npm run check:seo` | Pass. 49 pages, 48 sitemap URLs, **0 errors, 0 warnings** (was 1 warning). |
| `npm run lint` | Pass. One pre-existing warning in `src/App.jsx` (fast refresh), unrelated. |
| JSON-LD | Parsed by `check:seo` on every page; the new nodes were inspected directly. |
| Type check / unit tests | Not configured in this project. |
| Browser / responsive | Not run in this pass. The footer change should be checked visually at phone and desktop widths before deploy. |

## 7. Owner actions (need account access)

1. **Vercel → Project → Settings → Domains.** Set `codefloorit.com` to redirect to `www.codefloorit.com` with **308 Permanent** (currently 307).
2. **Google Search Console.** Add a *Domain* property for `codefloorit.com` and verify with the DNS TXT record (covers both hosts and needs no code change). Submit `https://www.codefloorit.com/sitemap.xml`. Use URL Inspection on `/`, `/services` and `/about`.
3. **Bing Webmaster Tools.** Import the site from Search Console and submit the same sitemap. Bing's index also feeds several AI assistants.
4. **Google Business Profile.** Create or claim a profile for Codefloor IT in Ahmedabad. If there is no public office, set it up as a service-area business without showing an address. Use the same name, phone, website and category ("Website designer" / "Software company") as the site.
5. **Social profiles.** Make sure LinkedIn, Instagram and Facebook link to `https://www.codefloorit.com/` and use the same description and location.
6. **Terms & Conditions.** Confirm the governing jurisdiction (currently Jaipur, Rajasthan).
7. After deploy: run PageSpeed Insights on the home page three times and watch Core Web Vitals in Search Console for 28 days.

## 8. Content plan (write only from real experience)

| Topic | Target page it supports | Why |
| --- | --- | --- |
| Custom website vs template website | Business website development | Common pre-purchase question; not yet covered |
| Website security basics for small businesses | Maintenance & support | Supports the maintenance service; cite OWASP and official sources |
| What to plan before building an online store | E-commerce development | The e-commerce service has no supporting article |
| Hotel website and direct booking: what to include | Aranya Palace, Stayfarer, custom web apps | Fits the hotel niche with real projects behind it |
| Clinic appointment system case study (once launched) | Doctor appointment project | Turn the in-progress project into a full result story |

Add genuine client case studies with links to live sites as they are approved; they are the strongest evidence for both search and AI answers. Do not buy links or publish mass-produced articles.
