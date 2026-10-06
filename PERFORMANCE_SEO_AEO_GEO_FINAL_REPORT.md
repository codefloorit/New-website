# Codefloor IT — Performance, SEO, AEO and GEO Final Report

Date: 6 October 2026. Companion: `PERFORMANCE_SEO_AEO_GEO_AUDIT.md`.

**Status: implemented and verified locally. Not committed, not deployed.** The live site still serves the previous build, so every "after" number below comes from the new production build served on this machine, not from `www.codefloorit.com`.

## 1. Lighthouse baseline

| Metric | Supplied PageSpeed run | My runs on the live site (Lighthouse 13.5.0, mobile) |
| --- | ---: | ---: |
| Performance | 83 | 83–85 |
| FCP | 3.2 s | 3.2–3.3 s |
| LCP | 3.3 s | 3.5 s |
| TBT | 0 ms | 50–90 ms |
| CLS | 0 | 0 |
| Speed Index | 5.1 s | 3.2–3.5 s |
| Accessibility | 96 | 96 |
| Best Practices | 100 | 100 |
| SEO | 100 | 100 |

My runs reproduce the supplied audit, so the same tool was used for the "after" numbers.

## 2. Before / after

| Metric | Before | After | Target | Status |
| --- | ---: | ---: | ---: | --- |
| Performance | 83 | 87–92 | 90+ | At the threshold: 2 of 5 clean home-page runs were 90 or above |
| FCP | 3.2s | 2.4–2.5s | <=2.0s | **Not met.** Improved by about 0.7 s |
| LCP | 3.3s | 2.9–3.1s | <=2.5s | **Not met.** Improved by about 0.4–0.5 s |
| TBT | 0ms | 30–240ms | <=100ms | Mixed; see note below |
| CLS | 0 | 0 | <=0.1 | Met |
| Speed Index | 5.1s | 2.4–3.1s | <3.5s | Met |
| Accessibility | 96 | 100 | 100 | Met on all 8 pages tested |
| Best Practices | 100 | 100 | 100 | Met |
| SEO | 100 | 100 | 100 | Met |
| Agentic Browsing | 3/3 | not measured | 3/3 | Not re-run; nothing it checks was changed |

How the "after" column was measured, and its limits:

- Five home-page runs of the final build at normal machine speed: 87, 88, 91, 87, 92. One further run scored 57 with a 4.3 s TBT while the machine was under load; I excluded it as an outlier but it happened.
- This machine's CPU benchmark swung by a factor of two between runs, which moves the score by 20+ points. I only compared runs taken at similar benchmark values. Treat the ranges as honest, not precise.
- Local runs have no TLS handshake and no real network distance. PageSpeed Insights on the deployed site may come out slightly worse than these numbers. **The definitive result needs a PageSpeed run after deploy.**
- TBT: the page now paints earlier, so more of the JavaScript start-up falls after first paint and is counted as blocking. The work itself did not grow.

Other pages, one run each on the new build:

| Page | Performance | FCP | LCP | Accessibility |
| --- | ---: | ---: | ---: | ---: |
| `/services` | 90 | 2.6 s | 3.0 s | 100 |
| `/services/custom-web-application-development` | 84 | 2.7 s | 3.0 s | 100 |
| `/work` | 90 | 2.6 s | 3.1 s | 100 |
| `/work/aranya-palace` | 82 | 2.7 s | 3.4 s | 100 |
| `/about` | 90 | 2.7 s | 3.0 s | 100 |
| `/faqs` | 91 | 2.6 s | 2.9 s | 100 |
| `/tax-services/gst-registration` | 90 | 2.7 s | 3.0 s | 100 |

## 3. Problems discovered and root causes

| Finding | Root cause |
| --- | --- |
| LCP element was the logo | The headline, badge, intro and buttons all started at `opacity: 0` (my own entrance animation from the previous pass). Chrome ignores content that starts invisible when choosing the LCP element, so the 112 px logo won by default. |
| 1.6 s element render delay | Not the logo. Nothing could paint until two render-blocking stylesheets arrived: Google Fonts CSS (a second origin, then font files on a third) and the site's own CSS file. |
| ~99 KiB of Google Fonts | Three families requested in 13 weights. Only two mono weights are used; Inter and Plus Jakarta Sans are available as single variable files. |
| 87 KiB unused JavaScript | Every route's code and all content (11 articles, all FAQs, 15 tax pages) shipped in one bundle. `Layout.jsx` imported the metadata module, which imports all content, just to set head tags that are already in the HTML. The animation runtime (129 KB raw) loaded up front. |
| Oversized images | One 1400 px screenshot and one 320 px logo for every screen size. |
| Low-contrast marquee | `text-white/40` on `#0A0F1A` is about 3.9:1. |
| Forced reflow | `ScrollToTop` called `window.scrollTo` on first mount, when the page is already at the top. |

## 4. Files changed

- **Fonts**: `index.html`, `src/index.css`, `public/fonts/` (4 WOFF2 files, 106 KB total), `vercel.json`
- **First paint**: `scripts/prerender.mjs` (CSS inlining), `tailwind.config.js`, `Hero.jsx`, `CaseStudyHero.jsx`, `src/index.css`
- **JavaScript**: `src/App.jsx`, `src/main.jsx`, `src/entry-server.jsx`, `Layout.jsx`, `src/motionFeatures.js` (new), `vite.config.js`, and 18 components switched from `motion.*` to `m.*`
- **Images**: `src/data/projects.js`, `ProjectMockup.jsx`, `ProjectCard.jsx`, `FeaturedProject.jsx`, `CaseStudyHero.jsx`, `Navbar.jsx`, `Footer.jsx`, six new image files
- **Accessibility**: `TechMarquee.jsx`, `ProjectMockup.jsx`, `ITServiceDetail.jsx`, `ProjectDetail.jsx`
- **Reflow**: `ScrollToTop.jsx`
- **SEO / AEO / GEO**: `src/seo.js`, `src/data/itServices.js`
- **Verification**: `scripts/check-seo.mjs`

## 5. Performance fixes

1. **No render-blocking requests.** Fonts are self-hosted with `font-display: swap`, and the stylesheet is inlined into each prerendered page. First paint now needs only the HTML document (23 KB gzipped). The Google Fonts origins are gone entirely.
2. **Headline is the LCP element.** Hero content keeps its slide-in but no longer fades from invisible, so it is painted in the first frame. The stagger was shortened from 0.7 s to 0.2 s.
3. **Fonts cut to four files.** Inter and Plus Jakarta Sans as variable fonts, IBM Plex Mono in the two weights actually used. Latin subset only.
4. **Layout-stable font swap.** A fallback face sized to Inter's metrics prevents paragraphs from re-wrapping when Inter arrives. CLS stayed at 0.
5. **Below-the-fold rendering deferred.** Sections after the first, and the footer, use `content-visibility: auto`, so the browser only styles and paints the hero up front. In the A/B below this was worth about five points.
6. **JavaScript split by route.** Initial script went from 181 KB to 138 KB gzipped. Lighthouse's "unused JavaScript" estimate fell from 87 KiB to 30 KiB. The animation runtime (22 KB gzipped) now loads after first paint, and the metadata module only loads on in-site navigation.
7. **Responsive images.** Screenshots ship at 800 px and 1400 px; the logo at 160 px and 320 px. On a phone the Aranya Palace image is 36 KB instead of 92 KB and the logo 8 KB instead of 18 KB.
8. **One avoidable forced layout removed** (`ScrollToTop`).

**One instruction I did not follow, with the reason.** The brief asked to preload the most important font. I tested it: three builds served side by side, three Lighthouse runs each.

| Variant | Runs at normal machine speed |
| --- | --- |
| Inter preloaded, no deferred rendering | 91 (other two runs were on a slowed machine) |
| No preload | 84, 83, 79 |
| No preload, deferred rendering (shipped) | 90, 86 |

Preload showed no reliable benefit, and in a separate throttled test it appeared to hold back first paint, though that test was too noisy to be conclusive. Since `swap` already lets text paint without the font, I left the preload out. It is a one-line change in `index.html` if a PageSpeed run on the deployed site says otherwise.

**A problem I introduced and caught.** The first version of route splitting made React serialize page content in its streaming format: the content sat in a hidden element and a script moved it into place. That would have hidden content from crawlers that do not run JavaScript and caused a layout shift of 0.88. The fix loads the page chunk before rendering on both server and client. `npm run check:seo` now fails the build if that format, a blocking stylesheet link, or a third-party font request ever reappears.

## 6. SEO fixes

Lighthouse SEO was 100 and is still 100. All 48 pages still pass `npm run check:seo`: unique title and description, self-referencing canonical, one H1, valid JSON-LD, no broken internal links, no orphan pages, every URL in the sitemap.

- Added a `WebPage` node to every page and the `WebSite` node to every page (previously home only), so each page is explicitly tied to the site and the organization.

## 7. AEO fixes

Four direct-definition questions added to the service pages, each visible on the page and mirrored in FAQPage schema:

- What is business website development?
- What is custom web application development?
- What is custom CRM development?
- What is website modernization?

The other questions in the brief (what a web development company in Ahmedabad does, cost, timelines, when a custom application is needed, booking system features) were already answered on `/faqs`, the service pages and the Insights articles. I did not add more FAQ volume.

## 8. GEO fixes

- Entity statement, location and the five service names were already consistent across the home page, About, Services, Work, Contact, metadata, schema and `llms.txt`; no changes were needed.
- All content remains in the server HTML. The streaming-format regression described above would have broken this and is now guarded by the build check.
- Nothing fabricated: no reviews, awards, clients, statistics, certifications, rankings, addresses or profiles were added.

## 9. Accessibility fixes

- Technology marquee labels raised from 40% to 60% white (about 7:1).
- The duplicated half of the marquee is hidden from screen readers, so each technology is announced once.
- Project mockup title bar text raised to 60% white.
- Process step numbers ("01"–"04") are a deliberately faint watermark. They are now drawn from CSS and hidden from assistive technology; the ordered list already conveys the order. Their appearance is unchanged.
- Result: 100 on the home page and on all seven inner pages tested (was 96).

## 10. Remaining opportunities

Why FCP and LCP are still above target: with nothing left blocking the network path, the remaining time under Lighthouse's 4× CPU slowdown is the browser parsing, styling and laying out the page, plus React start-up. Options, in order of expected value:

1. **Verify on the deployed site first.** Local numbers may not match PageSpeed.
2. **Lighten the above-the-fold effects.** The hero uses several large blurred glows (up to 160 px blur) and a `backdrop-blur` navigation bar. These are expensive to paint on a low-end phone. Reducing blur radius on small screens is a visual trade-off, so I did not do it without your say.
3. **Smaller framework footprint.** React, React Router and the animation core are about 100 KB gzipped of the remaining 138 KB. Moving to a framework with partial hydration (Astro, or Next.js with server components) would cut this substantially, but that is a rebuild, which the brief ruled out.
4. **Trim navigation data.** The menu imports the full service and tax data (about 12 KB gzipped) to read titles only.
5. `scroll-behavior: smooth` is applied to every element with `*`; it only needs to be on `html`.

## 11. Things to know

- **Visible change**: hero text now slides in without fading. Everything else looks the same.
- **Full-page screenshot tools** may show blank lower sections, because off-screen sections are not painted until scrolled near. Real scrolling is unaffected: tested on four pages at phone and desktop sizes with no errors and a scroll CLS of 0.01 or less.
- **The rupee sign** and a few symbols fall outside the Latin subset and render in the system font.
- **Lint**: one warning in `src/App.jsx` about React fast refresh in development. It does not affect the build.
- Still open from the previous report: the Terms jurisdiction (Jaipur), the non-functional newsletter forms, the 307 apex redirect, and the lack of a Google Business Profile and street address.

## 12. Recommended next steps

1. Review the diff, then commit and deploy.
2. Run PageSpeed Insights on the deployed home page three times and take the median. Compare with the table in section 2.
3. If FCP is still above 2.0 s there, decide on option 2 above (lighter blur effects on mobile).
4. Watch Core Web Vitals in Search Console over the following 28 days. Field data from real visitors, not the lab score, is what Google uses.
