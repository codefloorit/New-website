# Codefloor IT — Performance, SEO, AEO and GEO Audit

Date: 6 October 2026. Written before any change in this pass. Baseline is the supplied PageSpeed Insights mobile run, reproduced locally with Lighthouse 13.5.0 against `https://www.codefloorit.com/`.

## Baseline

| Metric | Supplied audit | My run (same Lighthouse version) |
| --- | ---: | ---: |
| Performance | 83 | 85 |
| FCP | 3.2 s | 3.2 s |
| LCP | 3.3 s | 3.5 s |
| TBT | 0 ms | 50 ms |
| CLS | 0 | 0 |
| Speed Index | 5.1 s | 3.2 s |
| Accessibility | 96 | 96 |
| Best Practices | 100 | 100 |
| SEO | 100 | 100 |

The two runs agree closely enough that local Lighthouse is a valid way to measure the fixes. Speed Index varies most between runs.

## The core finding

**FCP and LCP are nearly the same number (3.2 s and 3.3 s).** Nothing at all paints for about three seconds, and the LCP element appears almost immediately after. So this is a first-paint problem, and the logo is only the symptom.

## P0 — first paint and LCP

| # | Current implementation | Actual cause | Fix | Files | Expected impact |
| --- | --- | --- | --- | --- | --- |
| 1 | `index.html` links a Google Fonts stylesheet for three families and 13 weights. | A stylesheet `<link>` blocks rendering. On slow 4G the browser must open a connection to `fonts.googleapis.com`, download the CSS, then discover font files on a third host. This is the 1,191 ms critical chain. | Self-host the fonts as four WOFF2 files with `font-display: swap`; remove the Google Fonts link and both `preconnect`s; preload only Inter. | `index.html`, `src/index.css`, `public/fonts/*`, `vercel.json` | Removes the largest render-blocking request and a whole origin. |
| 2 | The build emits `/assets/index-*.css` (54 KB, 9.6 KB gzipped) as a blocking stylesheet. | A second render-blocking round trip before first paint. | Inline the CSS into each prerendered page at build time. | `scripts/prerender.mjs` | Removes the last render-blocking request. First paint needs only the HTML. |
| 3 | Hero badge, every headline word, the intro paragraph and the buttons use `animate-rise`, which starts at `opacity: 0`, with delays up to 0.7 s. | Chrome does not treat content that starts at `opacity: 0` as an LCP candidate, and does not reconsider it when a compositor animation fades it in. The headline is therefore never eligible, and **the logo becomes LCP by default**. The fade also holds back Speed Index. | Keep the entrance motion but animate `transform` only, so the text is painted in the first frame. Shorten the stagger. | `tailwind.config.js`, `Hero.jsx`, `PageHero.jsx`, `CaseStudyHero.jsx` | Headline becomes the LCP element and paints with FCP. Speed Index improves. |
| 4 | Logo: 320×320 WebP (17.4 KB) shown at 80 CSS px on mobile, 112 px on desktop. | One oversized source for all screens. | Add a 160 px variant and `srcset`/`sizes`. | `Navbar.jsx`, `Footer.jsx`, `src/assets/*` | About 12–14 KB less on mobile. No longer the LCP element. |

Not the cause, so not changed: TTFB (0 ms), preload of the logo (already discoverable with `fetchpriority="high"`), hydration (the HTML is prerendered and the script is a non-blocking module).

## P1 — JavaScript, images, request chain

Bundle composition, measured from a source-mapped build (578 KB raw, 181 KB gzipped):

| Part | Raw size | Needed for first view of the home page? |
| --- | ---: | --- |
| react-dom | 176 KB | Yes |
| motion-dom + framer-motion | 129 KB | No. Used for scroll reveals, hover and menu transitions. |
| `src/data` (all services, 11 full articles, all FAQs, 15 tax pages) | 76 KB | Mostly no |
| `src/components` | 65 KB | Partly |
| `src/pages` (every route) | 48 KB | Only the current route |
| react-router | 40 KB | Yes |
| lucide-react | 15 KB | Partly |
| react-icons | 5 KB | Yes (four icons, tree-shaken correctly) |

| # | Current implementation | Actual cause | Fix | Files | Expected impact |
| --- | --- | --- | --- | --- | --- |
| 5 | `App.jsx` imports every page statically. | Every route's code and content ships to every visitor. | `React.lazy` per route. Prerender with `react-dom/static` so lazy routes are still in the HTML, and emit a `modulepreload` for the current route's chunk. | `App.jsx`, `entry-server.jsx`, `scripts/prerender.mjs`, `vite.config.js` | Smaller initial script; other routes load on demand. |
| 6 | `Layout.jsx` imports `seo.js`, which imports all content data. | Pulls every article and FAQ into the main chunk just to set head tags that are already in the prerendered HTML. | Load `seo.js` only when the route changes on the client. | `Layout.jsx` | Removes most of `src/data` from the initial script. |
| 7 | 20 components import `motion` from framer-motion. | The full animation runtime is in the initial script. | `LazyMotion` with the `m` component; the feature bundle loads asynchronously. Animations are unchanged. | all components using `motion`, `Layout.jsx` | Animation runtime leaves the critical script. |
| 8 | Project screenshots: one 1400 px WebP each, used at every size. Aranya Palace is 92 KB. | No responsive sources. | Generate an 800 px variant and serve with `srcset`/`sizes`. Keep `loading="lazy"`, because the image is below the fold on mobile. | `projects.js`, `ProjectMockup.jsx`, `src/assets/*` | Roughly half the bytes on phones. |

## P2 — accessibility, reflow, animation, DOM

| # | Current implementation | Actual cause | Fix | Files | Expected impact |
| --- | --- | --- | --- | --- | --- |
| 9 | Technology marquee labels use `text-white/40` on `#0A0F1A`. | Contrast is about 3.9:1; WCAG AA needs 4.5:1. | `text-white/60` (about 7:1). | `TechMarquee.jsx` | Accessibility 100 if this is the only failure. |
| 10 | `ScrollToTop` calls `window.scrollTo` on first mount; the navbar reads `window.scrollY` on mount. | A layout read/write straight after hydration, when the page is already at the top. This is the likely source of the 44 ms forced reflow. Framer Motion's `useScroll` also measures on mount. | Skip the scroll reset on first render. | `ScrollToTop.jsx` | Removes an avoidable forced layout. |
| 11 | Animations. | Reviewed: all use `transform` and `opacity`, except FAQ and mobile-menu height transitions, which are user-triggered. Reduced motion is respected globally in `index.css`. | No change beyond item 3. | — | — |
| 12 | DOM is about 593 elements. | The marquee duplicates its eight items once for a seamless loop (16 items). No hidden duplicate content. | No change. Mark the duplicate half `aria-hidden` so screen readers hear each technology once. | `TechMarquee.jsx` | Small accessibility gain. |

## P3 — SEO, AEO, GEO

Lighthouse SEO is 100 and stays untouched: titles, descriptions, canonicals, robots, sitemap, headings and JSON-LD are generated from `src/seo.js` and verified by `npm run check:seo`.

| # | Gap | Fix | Files |
| --- | --- | --- | --- |
| 13 | Service FAQs answer cost and timeline questions but not the plain definition questions ("What is custom web application development?", "What is website modernization?", "What is custom CRM development?"). | Add one direct-definition question to the relevant service pages. They flow into the visible FAQ and the FAQPage schema together. | `src/data/itServices.js` |
| 14 | Schema has Organization, WebSite (home only), Service, FAQPage, Article, BreadcrumbList, but no `WebPage` node tying each page to the site and the organization. | Add a `WebPage` node per page and include `WebSite` on every page. | `src/seo.js` |

Deliberately not done: city landing pages, extra FAQ volume, any review, rating, award, address or statistic that does not exist.

## Things that cannot be fixed in code

- `codefloorit.com` → `www.codefloorit.com` is still a 307. Set it to permanent in the Vercel domain settings.
- A Google Business Profile and a public street address are still the biggest missing local signals.
