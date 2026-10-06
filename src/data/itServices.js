// Web and software development services. Powers /services, the dynamic
// /services/:slug pages, navigation, footer, meta tags and Service/FAQ schema.
//
// Content rules: describe what Codefloor IT actually does. No invented
// prices, client counts, rankings or guarantees. FAQ answers are rendered
// visibly on the page and mirrored into FAQPage structured data, so the two
// can never drift apart.
import { Globe, AppWindow, ShoppingCart, RefreshCw, Wrench } from "lucide-react";

export const itServices = [
  {
    slug: "business-website-development",
    icon: Globe,
    category: "Websites",
    title: "Business Website Development",
    seoTitle: "Business Website Development in Ahmedabad",
    metaDescription:
      "Codefloor IT designs and builds fast, responsive business websites for companies in Ahmedabad and across India, with clean SEO foundations and post-launch support.",
    shortDesc: "Fast, responsive company websites that explain what you do and bring in enquiries.",
    heroDesc:
      "Codefloor IT designs and builds business websites for companies in Ahmedabad, Gujarat and across India: responsive, fast to load, easy to update, and structured so search engines and customers can both understand what you offer.",
    intro: [
      "A business website is usually the first place a prospective customer checks before they call. It has to answer three questions quickly: what you do, whether you can be trusted, and how to get in touch.",
      "We plan the pages and content with you, design the interface, build it on a modern front-end stack, and launch it with the technical basics in place: clean URLs, page titles and descriptions, structured data, compressed images, and analytics.",
    ],
    audience: [
      "Companies launching their first professional website",
      "Professional services firms such as legal, consulting and healthcare practices",
      "Hotels, resorts and hospitality brands that need a site to drive direct enquiries",
      "Businesses whose current site no longer reflects what they do",
    ],
    features: [
      "Page and content planning based on what your customers look for",
      "Custom responsive design for mobile, tablet and desktop",
      "Performance-first build with optimized images and fonts",
      "On-page SEO foundations: titles, descriptions, headings, schema, sitemap",
      "Enquiry forms with WhatsApp or email delivery",
      "Content management so your team can update pages without a developer",
      "Analytics and conversion tracking setup",
    ],
    benefits: [
      "A credible first impression for people researching your business",
      "Pages that load quickly on mobile networks",
      "A clear path from landing on the site to sending an enquiry",
      "A codebase that can grow into a web application later",
    ],
    process: ["Discovery & Requirement Mapping", "Wireframing & UI Design", "Development & QA", "Launch & Post-Launch Support"],
    relatedProjects: ["aranya-palace", "oracle-legal-consultancy"],
    relatedInsights: ["website-vs-web-application", "website-development-cost-factors-india", "how-to-choose-web-development-company-ahmedabad"],
    faqs: [
      { q: "How long does it take to build a business website?", a: "Most business websites are delivered in 3–6 weeks. The timeline depends on the number of pages, how much content is ready, and any integrations such as booking or payment." },
      { q: "How much does a business website cost?", a: "The cost depends on the number of pages, whether the design is fully custom, the amount of content to be written, and integrations. Codefloor IT gives a clear written quote after a short scoping call, before any work starts." },
      { q: "Will the website work on mobile phones?", a: "Yes. Every website is built responsive and tested on mobile, tablet and desktop screen sizes before launch." },
      { q: "Can we update the content ourselves?", a: "Yes. Where content changes often, we connect a content management system so your team can edit text, images and pages without touching code." },
      { q: "Do you provide support after launch?", a: "Yes. Every project includes a support window after launch, and an ongoing website maintenance plan is available for updates, backups and monitoring." },
    ],
  },
  {
    slug: "custom-web-application-development",
    icon: AppWindow,
    category: "Web Applications",
    title: "Custom Web Application Development",
    seoTitle: "Custom Web Application Development in Ahmedabad",
    metaDescription:
      "Codefloor IT builds custom web applications in Ahmedabad: booking systems, CRMs, dashboards and client portals designed around how your business actually works.",
    shortDesc: "Booking systems, CRMs, dashboards and portals built around your own process.",
    heroDesc:
      "Codefloor IT builds custom web applications for businesses in Ahmedabad and across India: booking systems, CRMs, admin dashboards and customer portals that run in the browser and are designed around the way your team already works.",
    intro: [
      "A web application is software your staff or customers log in to and use: they book, pay, search, manage records or track work. Unlike a website, it stores data and has different views for different kinds of user.",
      "A custom build makes sense when off-the-shelf software forces you to change your process, when you are paying for many features you never use, or when the tool you need simply does not exist. We map the workflow first, agree the scope in writing, then build and release in stages so you can use the core early.",
    ],
    audience: [
      "Hotels, clinics and service businesses that take bookings or appointments",
      "Sales teams that have outgrown spreadsheets",
      "Operations teams that need one dashboard instead of several tools",
      "Founders building a first version of a software product",
    ],
    features: [
      "Workflow and data mapping before any code is written",
      "Role-based access for customers, staff and administrators",
      "Dashboards, search, filters and reporting",
      "Online booking, scheduling and payment flows",
      "Integrations with payment gateways, email, SMS and WhatsApp",
      "Data import from existing spreadsheets",
      "Hosting setup, backups and monitoring",
    ],
    benefits: [
      "Software that matches your process instead of bending it",
      "One source of truth instead of scattered spreadsheets and chats",
      "No per-user licence fees for a tool you own",
      "A foundation you can extend as the business changes",
    ],
    solutions: [
      {
        heading: "Booking system development",
        body: "A custom booking system lets customers check availability, choose a date and time, and confirm, while your team manages the calendar from an admin view. Our booking work spans hospitality and healthcare: a homepage booking search for a resort, a hotel search-and-book platform, and a doctor appointment system (in progress) with separate patient, doctor and admin interfaces.",
        projects: ["aranya-palace", "hotel-booking", "doctor-appointment-booking"],
        insight: "custom-booking-system-features",
      },
      {
        heading: "Custom CRM development",
        body: "A custom CRM tracks leads and customers in the stages your sales team actually uses, with the fields, follow-up reminders and reports you need and nothing else. LeadHunter is a CRM product we built around company discovery, lead status and follow-ups.",
        projects: ["leadhunter"],
        insight: "custom-crm-vs-ready-made-crm",
      },
    ],
    process: ["Discovery & Workflow Mapping", "System Design & Prototype", "Staged Development & QA", "Launch, Training & Support"],
    relatedProjects: ["leadhunter", "doctor-appointment-booking", "hotel-booking"],
    relatedInsights: ["website-vs-web-application", "custom-booking-system-features", "custom-crm-vs-ready-made-crm"],
    faqs: [
      { q: "What is the difference between a website and a web application?", a: "A website mainly presents information. A web application lets users do something: log in, book, pay, or manage data. If people need accounts or your team needs a dashboard, you need a web application." },
      { q: "When should a business build a custom web application?", a: "When ready-made software does not fit your process, when licence costs grow with every user, or when the workflow itself is your competitive advantage. If a standard tool already covers what you need, we will say so." },
      { q: "How much does a custom web application cost?", a: "Cost is driven by the number of user roles, screens, integrations and business rules. Codefloor IT scopes the first release with you, then gives a clear written quote for that scope. Later phases are quoted separately." },
      { q: "How long does a custom web application take?", a: "A first release typically takes 8–16 weeks depending on scope. We release in stages so the core workflow is usable before every feature is finished." },
      { q: "What technologies do you use?", a: "We choose the stack per project. A typical build uses React on the front end, Node.js on the back end and a PostgreSQL database, hosted on a cloud platform." },
    ],
  },
  {
    slug: "ecommerce-development",
    icon: ShoppingCart,
    category: "E-commerce",
    title: "E-commerce Development",
    seoTitle: "E-commerce Website Development in Ahmedabad",
    metaDescription:
      "Codefloor IT builds e-commerce websites for businesses in Ahmedabad and across India: product catalogue, cart, online payments, order management and a fast checkout.",
    shortDesc: "Online stores with a clear catalogue, secure payments and simple order management.",
    heroDesc:
      "Codefloor IT builds e-commerce websites for businesses in Ahmedabad and across India: a product catalogue customers can browse easily, a short checkout, online payments, and an admin panel to manage orders and stock.",
    intro: [
      "An online store has to do two jobs. For the customer it must make finding a product and paying for it effortless. For you it must make adding products, tracking orders and managing stock a routine task rather than a daily headache.",
      "We help you choose between a custom-built store and an established e-commerce platform based on catalogue size, how unusual your pricing or delivery rules are, and who will run the store day to day.",
    ],
    audience: [
      "Retailers and manufacturers starting to sell online",
      "Brands that want their own store alongside marketplaces",
      "Businesses with pricing, bundles or delivery rules a template store cannot handle",
    ],
    features: [
      "Product catalogue with categories, variants, search and filters",
      "Cart and a short, mobile-friendly checkout",
      "Payment gateway integration (UPI, cards, net banking, wallets)",
      "Order, stock and customer management panel",
      "Order confirmation and status notifications",
      "GST-ready invoices",
      "Product structured data for search engines",
    ],
    benefits: [
      "A store you control, without marketplace commission on every sale",
      "A checkout designed to lose fewer customers at the payment step",
      "Order and stock information in one place",
      "Product pages search engines can read and list",
    ],
    process: ["Catalogue & Requirement Mapping", "Store Design", "Development, Payment Setup & QA", "Launch & Support"],
    relatedProjects: ["hotel-booking"],
    relatedInsights: ["website-development-cost-factors-india", "why-your-website-speed-affects-revenue"],
    faqs: [
      { q: "Should we use a ready-made platform or a custom-built store?", a: "A ready-made platform suits a standard catalogue and a quick launch. A custom store suits unusual pricing, bundles, delivery rules or integrations. We recommend one after reviewing your catalogue and operations." },
      { q: "How do e-commerce websites handle online payments?", a: "The store connects to a payment gateway. The gateway collects card, UPI or net-banking details on its own secure page, confirms the payment to the store, and settles the money to your bank account. Card details are never stored on your website." },
      { q: "Which payment gateways can you integrate?", a: "We integrate gateways that operate in India, such as Razorpay, and can work with the provider your bank or accountant prefers." },
      { q: "Can we manage products and orders ourselves?", a: "Yes. The admin panel lets your team add and edit products, update stock and prices, and process orders without a developer." },
      { q: "How long does an e-commerce website take to build?", a: "It depends mainly on catalogue size, payment and delivery setup, and whether the store is custom or platform-based. We confirm a timeline in the written quote after scoping." },
    ],
  },
  {
    slug: "website-modernization",
    icon: RefreshCw,
    category: "Websites",
    title: "Website Modernization",
    seoTitle: "Website Modernization & Redesign Services",
    metaDescription:
      "Codefloor IT modernizes outdated websites: redesign, rebuild on a current stack, speed and mobile fixes, and a migration that keeps your existing search visibility.",
    shortDesc: "Redesign and rebuild an outdated website without losing content or search visibility.",
    heroDesc:
      "Codefloor IT modernizes outdated websites for businesses in Ahmedabad and across India. We redesign and rebuild slow, hard-to-update or non-mobile-friendly sites on a current stack, and migrate content and URLs carefully so existing search visibility is kept.",
    intro: [
      "Websites age. A site built several years ago may be slow, awkward on a phone, difficult to update, or running on software that no longer receives security fixes. Each of those costs enquiries quietly.",
      "Modernization does not always mean starting again. We audit the current site first, then recommend the smallest change that fixes the real problems: a performance and mobile overhaul, a redesign on the existing platform, or a full rebuild.",
    ],
    audience: [
      "Businesses whose website looks or feels dated next to competitors",
      "Sites that are slow or hard to use on mobile",
      "Teams that cannot update their own website",
      "Sites on unsupported or insecure software",
    ],
    features: [
      "Audit of speed, mobile usability, SEO and security",
      "Redesign aligned with your current brand and services",
      "Rebuild on a modern, maintainable stack where needed",
      "Content and URL migration with redirects from every old page",
      "Core Web Vitals and image optimization",
      "Accessibility improvements",
    ],
    benefits: [
      "A site that represents the business as it is today",
      "Faster pages and a better experience on mobile",
      "Existing search visibility protected through the move",
      "Updates your own team can make",
    ],
    process: ["Audit of the Current Site", "Redesign & Migration Plan", "Rebuild, Redirects & QA", "Launch & Monitoring"],
    relatedProjects: ["oracle-legal-consultancy", "aranya-palace"],
    relatedInsights: ["when-to-replace-old-website", "why-your-website-speed-affects-revenue"],
    faqs: [
      { q: "Why should a business modernize an old website?", a: "An outdated website loads slowly, works poorly on phones, is harder to keep secure, and makes the business look less active than it is. Modernizing fixes those problems and usually makes the site easier to update." },
      { q: "When should a website be rebuilt rather than patched?", a: "Rebuild when the platform is unsupported, when small changes need a developer every time, or when the structure no longer matches what the business offers. If the foundation is sound, targeted fixes are cheaper and we will recommend them." },
      { q: "Will we lose our Google rankings in a redesign?", a: "A careless redesign can. We keep existing URLs where possible, redirect every changed URL to its new address, and carry over titles, content and structured data, which is what protects search visibility during a migration." },
      { q: "Can you keep our existing content?", a: "Yes. We migrate existing pages, images and documents, and help rewrite the parts that are out of date." },
    ],
  },
  {
    slug: "website-maintenance-support",
    icon: Wrench,
    category: "Support",
    title: "Website Maintenance & Support",
    seoTitle: "Website Maintenance & Support Services",
    metaDescription:
      "Codefloor IT provides website and web application maintenance: updates, backups, security patches, uptime monitoring, bug fixes and small changes on a monthly plan.",
    shortDesc: "Updates, backups, monitoring and fixes so your site keeps working after launch.",
    heroDesc:
      "Codefloor IT maintains websites and web applications for businesses in Ahmedabad and across India: software updates, backups, security patches, uptime monitoring, bug fixes and small content or feature changes, handled on a monthly plan.",
    intro: [
      "A website is not finished on launch day. Software needs updates, forms stop delivering, certificates expire, and content goes out of date. Maintenance is the routine work that prevents those small failures from becoming lost enquiries.",
      "We maintain sites and applications we built, and we take over existing ones after an initial review of the code and hosting.",
    ],
    audience: [
      "Businesses without an in-house developer",
      "Sites built by a freelancer or agency that is no longer available",
      "Web applications that need regular fixes and small improvements",
    ],
    features: [
      "Software, plugin and dependency updates",
      "Scheduled backups with restore testing",
      "Security patches and SSL certificate renewal",
      "Uptime and form-delivery monitoring",
      "Bug fixes",
      "Content updates and small feature changes",
      "Periodic speed checks",
    ],
    benefits: [
      "Problems found before customers report them",
      "A recent backup always available",
      "One team to contact when something needs changing",
      "Predictable monthly cost",
    ],
    process: ["Review of Site & Hosting", "Plan & Access Setup", "Monthly Maintenance", "Reporting & Improvements"],
    relatedProjects: [],
    relatedInsights: ["why-your-website-speed-affects-revenue", "when-to-replace-old-website"],
    faqs: [
      { q: "What does website maintenance include?", a: "Software updates, backups, security patches, uptime monitoring, bug fixes and small content or feature changes. The exact scope is listed in your plan." },
      { q: "Can you maintain a website you did not build?", a: "Yes. We start with a review of the code, hosting and access, fix anything urgent, and then move the site onto a regular maintenance plan." },
      { q: "How quickly do you respond to issues?", a: "We respond within one business day, Monday to Saturday. Response and resolution targets for urgent issues are agreed in your plan." },
      { q: "Is maintenance billed monthly?", a: "Yes. Maintenance is a monthly plan sized to your site. Larger changes outside the plan are quoted separately before work starts." },
    ],
  },
];

export const getItServiceBySlug = (slug) => itServices.find((s) => s.slug === slug);
