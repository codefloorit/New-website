# Codefloor IT Tech LLP — Website

A premium, dark-themed, fully responsive corporate website for **Codefloor IT Tech LLP**, built with React 19, Vite, Tailwind CSS, Framer Motion, React Router, Swiper, and EmailJS.

## Getting Started

```bash
npm install
npm run dev
```
Open the printed local URL (usually `http://localhost:5173`).

To build for production:
```bash
npm run build
npm run preview   # preview the production build locally
```

## Before going live — 3 things to configure

1. **EmailJS (contact/quote/consultation/support forms)**
   Edit `src/utils/emailjsConfig.js` with your EmailJS Service ID, Public Key, and Template IDs from https://www.emailjs.com. Until configured, forms work in a demo mode (simulated success) so you can showcase the UI immediately.

2. **Google Map embed**
   Replace `mapEmbed` in `src/data/siteConfig.js` with your real Google Maps "Embed a map" iframe `src` URL for your exact office address.

3. **Company details**
   All contact info, social links, address, and business hours live in one place: `src/data/siteConfig.js`.

## Build, routing and SEO

`npm run build` does three things: builds the client, builds a server bundle, and runs `scripts/prerender.mjs`, which writes one static HTML file per route into `dist/` together with `sitemap.xml`, `robots.txt` and `llms.txt`. Run `npm run check:seo` afterwards to verify titles, canonicals, structured data, internal links and image alt text.

- Routes are declared in `src/App.jsx`. Their titles, descriptions and JSON-LD live in `src/seo.js`; a route missing from `src/seo.js` is not prerendered and is not in the sitemap.
- Hosting is Vercel. `vercel.json` sets clean URLs, redirects from the old paths, caching and security headers.
- Only publish facts that are true: no invented clients, reviews, awards, statistics or addresses.

## Editing content

Almost all text content is centralized in `src/data/`:
- `siteConfig.js`: company name, contact details, official social profiles (also used in structured data)
- `itServices.js`: the web and software services (routes like `/services/business-website-development`)
- `taxServices.js`: tax and financial services (`/tax-services/...`)
- `projects.js`: portfolio projects (`/work/...`)
- `blogPosts.js`: Insights articles (`/insights/...`)
- `generalFaqs.js`, `navData.js`

Adding an object to one of these files creates the page, its metadata and its sitemap entry automatically.

## Design system

Colors, fonts, and effects are defined in `tailwind.config.js` and `src/index.css`.
