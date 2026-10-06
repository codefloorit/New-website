// Single source of truth for per-route metadata and structured data.
// Used by the client (useSeo hook) to update <head> on navigation, and by
// scripts/prerender.mjs to write the same tags into static HTML and to build
// sitemap.xml. Structured data here must only describe what the page shows.
import { siteConfig } from "./data/siteConfig";
import { itServices } from "./data/itServices";
import { taxServices } from "./data/taxServices";
import { projects } from "./data/projects";
import { blogPosts } from "./data/blogPosts";
import { generalFaqs } from "./data/generalFaqs";

const SITE = siteConfig.url;
const BRAND = siteConfig.shortName;
const abs = (path) => `${SITE}${path === "/" ? "/" : path}`;
const ORG_ID = `${SITE}/#organization`;

export const organizationSchema = {
  "@type": "Organization",
  "@id": ORG_ID,
  name: BRAND,
  legalName: siteConfig.name,
  alternateName: ["Codefloor", siteConfig.name],
  url: `${SITE}/`,
  logo: `${SITE}/codefloor-it-logo.png`,
  image: `${SITE}/og-image.png`,
  description: siteConfig.description,
  foundingDate: String(siteConfig.founded),
  email: siteConfig.email,
  telephone: siteConfig.phone.replace(/\s+/g, ""),
  address: {
    "@type": "PostalAddress",
    addressLocality: siteConfig.city,
    addressRegion: siteConfig.region,
    addressCountry: siteConfig.country,
  },
  areaServed: [
    { "@type": "City", name: "Ahmedabad" },
    { "@type": "State", name: "Gujarat" },
    { "@type": "Country", name: "India" },
  ],
  knowsAbout: [
    "Web development",
    "Website development",
    "Custom web application development",
    "Software development",
    "E-commerce development",
    "Website modernization",
    "Website maintenance",
  ],
  sameAs: Object.values(siteConfig.social),
};

const websiteSchema = {
  "@type": "WebSite",
  "@id": `${SITE}/#website`,
  url: `${SITE}/`,
  name: BRAND,
  publisher: { "@id": ORG_ID },
  inLanguage: "en-IN",
};

const breadcrumbSchema = (crumbs) => ({
  "@type": "BreadcrumbList",
  itemListElement: [{ name: "Home", path: "/" }, ...crumbs].map((c, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: c.name,
    item: abs(c.path),
  })),
});

const faqSchema = (faqs) => ({
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
});

// Keep search snippets intact: cut long descriptions at a word boundary,
// and drop the brand suffix from titles that would otherwise be truncated.
const clip = (text, max = 170) => (text.length <= max ? text : `${text.slice(0, text.lastIndexOf(" ", max - 1)).replace(/[,;:.]$/, "")}…`);
const fit = (title) => (title.length <= 62 ? title : title.replace(` | ${BRAND}`, ""));

const page = (path, title, description, extra = {}) => ({ path, title: fit(title), description: clip(description), ...extra });

const staticPages = [
  page(
    "/",
    `Web Development Company in Ahmedabad | ${BRAND}`,
    "Codefloor IT is a web and software development company in Ahmedabad, Gujarat. Business websites, custom web applications, e-commerce, modernization and support.",
    { schema: [websiteSchema] }
  ),
  page(
    "/services",
    `Web & Software Development Services | ${BRAND}`,
    "Web and software development services from Codefloor IT, Ahmedabad: business websites, custom web applications, e-commerce, website modernization and maintenance.",
    {
      crumbs: [{ name: "Services", path: "/services" }],
      schema: [
        {
          "@type": "ItemList",
          name: "Web and software development services",
          itemListElement: itServices.map((s, i) => ({
            "@type": "ListItem",
            position: i + 1,
            name: s.title,
            url: abs(`/services/${s.slug}`),
          })),
        },
      ],
    }
  ),
  page(
    "/work",
    `Our Work: Websites & Web Applications | ${BRAND}`,
    "Projects by Codefloor IT, Ahmedabad: a resort website, a hotel booking platform, a CRM dashboard, a law firm website and a doctor appointment system.",
    { crumbs: [{ name: "Our Work", path: "/work" }] }
  ),
  page(
    "/insights",
    `Insights on Websites & Web Applications | ${BRAND}`,
    "Practical guides from Codefloor IT on website cost, choosing a development company, booking systems, CRMs, website speed and modernization.",
    { crumbs: [{ name: "Insights", path: "/insights" }] }
  ),
  page(
    "/about",
    `About ${siteConfig.name} | Ahmedabad, Gujarat`,
    "Codefloor IT Tech LLP is a web and software development company founded in 2025 and based in Ahmedabad, Gujarat, India. What we do and how we work.",
    {
      crumbs: [{ name: "About", path: "/about" }],
      schema: [{ "@type": "AboutPage", name: `About ${siteConfig.name}`, url: abs("/about"), about: { "@id": ORG_ID } }],
    }
  ),
  page(
    "/contact",
    `Contact ${BRAND} | Web Development, Ahmedabad`,
    "Talk to Codefloor IT about a website or web application. Based in Ahmedabad, Gujarat. Call, WhatsApp or send a message and get a reply within one business day.",
    {
      crumbs: [{ name: "Contact", path: "/contact" }],
      schema: [{ "@type": "ContactPage", name: `Contact ${BRAND}`, url: abs("/contact"), about: { "@id": ORG_ID } }],
    }
  ),
  page(
    "/faqs",
    `Web Development FAQs: Cost, Timelines, Process | ${BRAND}`,
    "Direct answers on website and web application development: cost in India, timelines, website vs web application, booking systems and how Codefloor IT works.",
    {
      crumbs: [{ name: "FAQs", path: "/faqs" }],
      schema: [faqSchema(generalFaqs.flatMap((g) => g.items))],
    }
  ),
  page(
    "/tax-services",
    `Tax & Financial Services | ${BRAND}`,
    "Tax and financial services from Codefloor IT, Ahmedabad: GST registration and filing, income tax returns, company registration and ongoing compliance.",
    { crumbs: [{ name: "Tax & Financial Services", path: "/tax-services" }] }
  ),
  page("/privacy-policy", `Privacy Policy | ${BRAND}`, "How Codefloor IT Tech LLP collects, uses and protects personal information.", {
    crumbs: [{ name: "Privacy Policy", path: "/privacy-policy" }],
  }),
  page("/terms-and-conditions", `Terms & Conditions | ${BRAND}`, "Terms and conditions for using the Codefloor IT Tech LLP website and services.", {
    crumbs: [{ name: "Terms & Conditions", path: "/terms-and-conditions" }],
  }),
  page("/disclaimer", `Disclaimer | ${BRAND}`, "Disclaimer for information published on the Codefloor IT Tech LLP website.", {
    crumbs: [{ name: "Disclaimer", path: "/disclaimer" }],
  }),
];

const servicePages = itServices.map((s) =>
  page(`/services/${s.slug}`, `${s.seoTitle} | ${BRAND}`, s.metaDescription, {
    crumbs: [
      { name: "Services", path: "/services" },
      { name: s.title, path: `/services/${s.slug}` },
    ],
    schema: [
      {
        "@type": "Service",
        name: s.title,
        serviceType: s.title,
        description: s.heroDesc,
        url: abs(`/services/${s.slug}`),
        provider: { "@id": ORG_ID },
        areaServed: organizationSchema.areaServed,
      },
      faqSchema(s.faqs),
    ],
  })
);

const taxPages = taxServices.map((s) =>
  page(`/tax-services/${s.slug}`, `${s.title} | ${BRAND}`, s.overview, {
    crumbs: [
      { name: "Tax & Financial Services", path: "/tax-services" },
      { name: s.title, path: `/tax-services/${s.slug}` },
    ],
    schema: [faqSchema(s.faqs)],
  })
);

const projectPages = projects.map((p) =>
  page(`/work/${p.slug}`, `${p.seoTitle} | ${BRAND}`, p.metaDescription, {
    image: p.image || undefined,
    crumbs: [
      { name: "Our Work", path: "/work" },
      { name: p.title, path: `/work/${p.slug}` },
    ],
    schema: [
      {
        "@type": "CreativeWork",
        name: p.title,
        headline: p.tagline,
        description: p.description,
        genre: p.projectType,
        url: abs(`/work/${p.slug}`),
        creator: { "@id": ORG_ID },
        ...(p.image ? { image: abs(p.image) } : {}),
      },
    ],
  })
);

const articlePages = blogPosts.map((p) =>
  page(`/insights/${p.slug}`, `${p.title} | ${BRAND}`, p.excerpt, {
    type: "article",
    lastmod: p.date,
    crumbs: [
      { name: "Insights", path: "/insights" },
      { name: p.title, path: `/insights/${p.slug}` },
    ],
    schema: [
      {
        "@type": "Article",
        headline: p.title,
        description: p.excerpt,
        datePublished: p.date,
        dateModified: p.date,
        articleSection: p.category,
        mainEntityOfPage: abs(`/insights/${p.slug}`),
        image: `${SITE}/og-image.png`,
        author: { "@id": ORG_ID },
        publisher: { "@id": ORG_ID },
        inLanguage: "en-IN",
      },
    ],
  })
);

// Every canonical, indexable URL on the site. Drives prerendering and the sitemap.
export const routes = [...staticPages, ...servicePages, ...projectPages, ...articlePages, ...taxPages];

const notFound = page("/404", `Page Not Found | ${BRAND}`, "The page you are looking for does not exist.", { noindex: true });

const normalize = (pathname) => (pathname.length > 1 ? pathname.replace(/\/+$/, "") : pathname);

export const getSeo = (pathname) => routes.find((r) => r.path === normalize(pathname)) || notFound;

const esc = (s) => String(s).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

// Returns the full set of route-specific <head> tags as an HTML string.
// Every tag carries data-seo so the client can swap the set on navigation.
export const headTags = (seo) => {
  const url = abs(seo.path);
  const image = seo.image ? abs(seo.image) : `${SITE}/og-image.png`;
  const graph = [organizationSchema, ...(seo.schema || []), ...(seo.crumbs ? [breadcrumbSchema(seo.crumbs)] : [])];
  const jsonLd = JSON.stringify({ "@context": "https://schema.org", "@graph": graph }).replace(/</g, "\\u003c");
  const m = (attr, key, content) => `<meta data-seo ${attr}="${key}" content="${esc(content)}">`;

  return [
    `<title data-seo>${esc(seo.title)}</title>`,
    m("name", "description", seo.description),
    m("name", "robots", seo.noindex ? "noindex, follow" : "index, follow, max-image-preview:large"),
    seo.noindex ? "" : `<link data-seo rel="canonical" href="${url}">`,
    m("property", "og:type", seo.type || "website"),
    m("property", "og:site_name", BRAND),
    m("property", "og:locale", "en_IN"),
    m("property", "og:title", seo.title),
    m("property", "og:description", seo.description),
    m("property", "og:url", url),
    m("property", "og:image", image),
    m("name", "twitter:card", "summary_large_image"),
    m("name", "twitter:title", seo.title),
    m("name", "twitter:description", seo.description),
    m("name", "twitter:image", image),
    `<script data-seo type="application/ld+json">${jsonLd}</script>`,
  ]
    .filter(Boolean)
    .join("\n    ");
};
