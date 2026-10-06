// Insights articles. Powers /insights, /insights/:slug, Article schema and the sitemap.
//
// Every article opens with `answer`: a direct, self-contained answer to the
// question in the title. `sections` hold the supporting explanation.
// `service` is the slug of the service page the article should link to.
// Do not add statistics, prices or client results that cannot be sourced.
export const blogAuthor = "Codefloor IT";

const posts = [
  {
    slug: "website-vs-web-application",
    title: "Website vs Web Application: Which Does Your Business Need?",
    category: "Web Development",
    date: "2026-10-06",
    service: "custom-web-application-development",
    excerpt:
      "A website presents information. A web application lets people do something. Here is how to tell which one your business actually needs.",
    answer:
      "A website mainly presents information to visitors: who you are, what you offer and how to contact you. A web application lets users do something: log in, book, pay, or manage records. If your visitors only need to read and enquire, you need a website. If customers or staff need accounts, bookings, payments or a dashboard, you need a web application.",
    sections: [
      {
        heading: "The practical difference",
        paragraphs: [
          "The clearest test is whether the system has to remember things about individual users. A company website shows the same pages to everyone. A web application shows each person their own bookings, orders, leads or reports, which means it needs a database, user accounts and rules about who can see what.",
        ],
        list: [
          "Website: pages, images, an enquiry form, perhaps a blog. Content changes when you edit it.",
          "Web application: logins, forms that save data, search, dashboards, payments. Content changes as people use it.",
        ],
      },
      {
        heading: "Signs you need a website",
        paragraphs: [
          "Most businesses start here. A website is the right choice when the goal is to be found, to look credible, and to turn a visitor into a phone call, a WhatsApp message or a form submission. A resort presenting its rooms, or a law firm presenting its services and team, are typical examples.",
        ],
      },
      {
        heading: "Signs you need a web application",
        paragraphs: [
          "You are moving into application territory when the work itself happens online. Common triggers are customers booking and paying without calling you, staff managing those bookings from a calendar, a sales team tracking leads through stages, or managers wanting one screen that shows today's numbers.",
          "Booking systems, CRMs, patient or customer portals and admin dashboards are all web applications.",
        ],
      },
      {
        heading: "Many businesses need both",
        paragraphs: [
          "The two are often combined. A hotel can have a marketing website that explains the property and a booking application behind the \"Check availability\" button. Building the website first and adding the application later is a sensible way to spread cost, provided the website is built on a stack that can be extended.",
        ],
      },
      {
        heading: "What changes in cost and time",
        paragraphs: [
          "A website is priced mostly by the number of pages and the level of design. A web application is priced by the number of user roles, screens, integrations and business rules, and it needs ongoing hosting, backups and maintenance. That is why an application takes longer to build and should be scoped in writing before work starts.",
        ],
      },
    ],
  },
  {
    slug: "how-to-choose-web-development-company-ahmedabad",
    title: "How to Choose a Web Development Company in Ahmedabad",
    category: "Web Development",
    date: "2026-10-06",
    service: "business-website-development",
    excerpt:
      "Ahmedabad has hundreds of agencies and freelancers. These are the checks that separate a reliable development partner from a risky one.",
    answer:
      "Choose a web development company in Ahmedabad by checking five things: work you can actually open and use, a written scope and quote, who will build and who you will talk to, what happens after launch, and who owns the code and accounts. Price matters, but only when you are comparing quotes for the same scope.",
    sections: [
      {
        heading: "1. Look at real work, not a list of logos",
        paragraphs: [
          "Ask for links to live projects similar to yours and open them on your phone. Check how quickly they load, whether the menus and forms work, and whether the content is clear. A portfolio that explains the problem and what was built tells you more than a wall of client names.",
        ],
      },
      {
        heading: "2. Insist on a written scope",
        paragraphs: [
          "A good quote lists pages or screens, features, integrations, the number of design revisions, the timeline, and what is not included. Vague quotes are the main cause of disputes later. If two quotes differ widely, the scope behind them is almost always different.",
        ],
      },
      {
        heading: "3. Know who does the work",
        paragraphs: [
          "Ask whether the work is done in-house or outsourced, and who your point of contact will be. For a local company, an in-person or video meeting before you sign is a reasonable request.",
        ],
      },
      {
        heading: "4. Ask about life after launch",
        paragraphs: [
          "Every site needs updates, backups and fixes. Find out whether a support period is included, what a maintenance plan costs, and how quickly issues are answered.",
        ],
      },
      {
        heading: "5. Confirm ownership",
        paragraphs: [
          "The domain, hosting account, source code and analytics should be in your company's name or transferred to you. Get this in writing. Businesses most often get stuck when a vendor controls the domain or hosting login.",
        ],
      },
      {
        heading: "Questions worth asking before you sign",
        list: [
          "Can you show two projects similar to ours?",
          "What exactly is included in this quote, and what is extra?",
          "How will we see progress during the build?",
          "Will the site be fast and usable on mobile, and how do you test that?",
          "What do you need from us, and by when?",
          "Who will have the logins after launch?",
        ],
      },
      {
        heading: "Be careful with guarantees",
        paragraphs: [
          "No company can guarantee a first-page Google ranking or a fixed number of leads. A developer can promise a technically sound, fast, well-structured website. Rankings depend on competition, content and time.",
        ],
      },
    ],
  },
  {
    slug: "custom-booking-system-features",
    title: "What Features Should a Custom Booking System Have?",
    category: "Web Applications",
    date: "2026-10-06",
    service: "custom-web-application-development",
    excerpt:
      "The features a booking system for a hotel, clinic or service business needs, and how the pieces fit together.",
    answer:
      "A custom booking system needs live availability, a short booking flow, confirmations and reminders, an admin calendar, rules for cancellations and changes, and reporting. Online payment, user accounts and staff roles are added depending on the business. The customer side should take a few steps; the admin side should make a full day's bookings visible at a glance.",
    sections: [
      {
        heading: "How a custom booking system works",
        paragraphs: [
          "Every booking system is built on the same idea: a set of things that can be booked (rooms, doctors, time slots, tables), a calendar that knows which are free, and a rule that stops two people booking the same slot. The customer sees available options, picks one, and confirms. The business sees every booking in a calendar or list and can add, move or cancel them.",
        ],
      },
      {
        heading: "Customer-facing features",
        list: [
          "Search by date, time, location or provider",
          "Real-time availability, so nothing can be double-booked",
          "A booking flow of three or four steps that works well on a phone",
          "Confirmation by email, SMS or WhatsApp",
          "Reminders before the booking",
          "Self-service rescheduling and cancellation within your rules",
        ],
      },
      {
        heading: "Admin features",
        list: [
          "Calendar and list views of upcoming bookings",
          "Manual bookings for phone and walk-in customers",
          "Availability, working hours, holidays and blocked dates",
          "Pricing, seasonal rates or consultation fees",
          "Roles for owners, managers and front-desk staff",
          "Reports on bookings, cancellations and revenue",
        ],
      },
      {
        heading: "What changes by industry",
        paragraphs: [
          "A hotel books rooms by night and needs room types, occupancy and rate rules. A clinic books a doctor's time in fixed slots and needs specializations, doctor profiles and separate views for patient, doctor and admin. A service business books staff or resources and may need travel time between jobs. The core is the same; the rules differ, which is where a custom build earns its place over a generic tool.",
        ],
      },
      {
        heading: "Payments",
        paragraphs: [
          "Decide early whether customers pay in full, pay a deposit, or pay on arrival. Online payment reduces no-shows but adds refund handling, so the cancellation policy and the payment setup should be designed together.",
        ],
      },
      {
        heading: "Start with the core",
        paragraphs: [
          "The first release should cover search, booking, confirmation and the admin calendar. Loyalty points, coupons and channel integrations can follow once real bookings are flowing through the system.",
        ],
      },
    ],
  },
  {
    slug: "when-to-replace-old-website",
    title: "When Should a Business Replace Its Old Website?",
    category: "Web Development",
    date: "2026-10-06",
    service: "website-modernization",
    excerpt:
      "Seven signs a website has reached the end of its useful life, and when a smaller fix is enough.",
    answer:
      "Replace an old website when it is slow or awkward on mobile, when your team cannot update it, when it runs on unsupported software, or when it no longer describes what the business does. If the structure and platform are sound, a targeted update is cheaper than a rebuild. Age alone is not the reason; lost enquiries and rising maintenance effort are.",
    sections: [
      {
        heading: "Signs it is time",
        list: [
          "Pages take several seconds to load on a mobile connection",
          "Text is tiny or layouts break on a phone",
          "Every small change needs a developer",
          "The platform, theme or plugins no longer receive security updates",
          "Services, prices or team shown on the site are out of date",
          "Enquiry forms fail or arrive in spam",
          "Competitors' sites make yours look dated",
        ],
      },
      {
        heading: "Rebuild or repair?",
        paragraphs: [
          "Repair when the design still fits the brand and the platform is supported: compress images, fix mobile layouts, update content and tidy the page structure. Rebuild when the platform is at the end of its life, when the site's structure no longer matches the business, or when the list of fixes is longer than a fresh build.",
          "An honest audit should tell you which case you are in. If a vendor recommends a rebuild without looking at the current site, ask why.",
        ],
      },
      {
        heading: "How to replace a site without losing search visibility",
        paragraphs: [
          "Most ranking losses after a redesign come from changed URLs and removed content. Before launch, list every existing URL, keep the address where you can, and redirect each changed URL to its closest new page. Carry over page titles and the content that already brings visitors, and check Search Console for errors in the weeks after launch.",
        ],
      },
      {
        heading: "What to prepare",
        list: [
          "Logins for the domain, hosting and analytics",
          "A list of pages that bring the most enquiries",
          "Updated text for services, team and contact details",
          "Current photos and brand files",
        ],
      },
    ],
  },
  {
    slug: "custom-crm-vs-ready-made-crm",
    title: "Custom CRM vs Ready-Made CRM: How to Decide",
    category: "Web Applications",
    date: "2026-10-06",
    service: "custom-web-application-development",
    excerpt:
      "Ready-made CRMs are quick to start and cheap at first. Custom CRMs fit your process exactly. Here is how to choose.",
    answer:
      "Choose a ready-made CRM when your sales process is standard, your team is small, and you need to start this week. Choose a custom CRM when your process has steps a standard tool cannot model, when per-user fees keep rising, or when you need the CRM joined to your own systems. Many businesses are best served by starting ready-made and moving to custom once they know exactly what they need.",
    sections: [
      {
        heading: "What a ready-made CRM does well",
        paragraphs: [
          "Subscription CRMs give you contacts, a deal pipeline, reminders and email integration on day one. There is nothing to build, the vendor handles hosting and updates, and the monthly cost is low for a small team.",
        ],
      },
      {
        heading: "Where ready-made CRMs fall short",
        list: [
          "The pipeline stages and fields are designed for a generic sales team",
          "Cost rises with every user and every add-on",
          "Reports answer the vendor's questions, not always yours",
          "Connecting to your booking, billing or lead-source systems can be limited",
          "Your data lives in the vendor's format",
        ],
      },
      {
        heading: "What a custom CRM changes",
        paragraphs: [
          "A custom CRM is built around your own stages, fields and reports. It can pull leads automatically from the sources you use, score them by your own rules, and show each role only what it needs. You pay to build and maintain it instead of paying per user.",
          "The trade-off is an upfront cost and a build period, and you need a development partner for ongoing changes.",
        ],
      },
      {
        heading: "A simple way to decide",
        list: [
          "Fewer than a handful of users and a standard process: ready-made",
          "A process the tool keeps fighting, or heavy manual work around it: custom",
          "Lead sources or data unique to your business: custom",
          "Not sure yet: start ready-made, note every workaround, and use that list as the scope for a custom build",
        ],
      },
    ],
  },
  {
    slug: "website-development-cost-factors-india",
    title: "What Decides the Cost of a Website in India?",
    category: "Web Development",
    date: "2026-10-06",
    service: "business-website-development",
    excerpt:
      "Quotes for the same website can differ several times over. These are the factors that actually move the price.",
    answer:
      "The cost of a website in India is decided by six things: the number of pages, whether the design is custom or template-based, who writes the content, the features and integrations required, the platform it is built on, and the support included after launch. Two quotes are only comparable when they describe the same scope, so ask every vendor to list what is included.",
    sections: [
      {
        heading: "1. Size",
        paragraphs: [
          "A five-page company site and a fifty-page site with service, location and article pages are different projects. Count the page types as well as the pages: each new layout needs design and build time.",
        ],
      },
      {
        heading: "2. Design",
        paragraphs: [
          "A template adapted to your brand is the cheapest route. A fully custom design costs more because every page type is designed from scratch, but it is the only way to get a site that does not look like many others.",
        ],
      },
      {
        heading: "3. Content",
        paragraphs: [
          "Text, photography and translations are often left out of quotes. If the vendor writes the copy, expect it as a separate line. If you supply it, the project waits until it arrives, which is the most common cause of delays.",
        ],
      },
      {
        heading: "4. Features and integrations",
        paragraphs: [
          "Enquiry forms are simple. Online booking, payments, user accounts, multi-language support and CRM integration each add design, development and testing. At some point the project becomes a web application rather than a website and should be scoped as one.",
        ],
      },
      {
        heading: "5. Platform",
        paragraphs: [
          "A site on a ready-made platform is quick to launch. A custom-coded site takes longer but is usually faster and easier to extend. Ask what the choice means for speed, future changes and hosting cost.",
        ],
      },
      {
        heading: "6. After launch",
        paragraphs: [
          "Hosting, domain renewal, SSL, backups and maintenance are recurring costs. Check whether the first year is included and what the yearly cost will be afterwards.",
        ],
      },
      {
        heading: "How to compare quotes",
        list: [
          "Ask each vendor for the same written scope",
          "Check the number of design revisions included",
          "Confirm who provides content and images",
          "Ask what the yearly running cost will be",
          "Confirm that the domain, hosting and code will be in your name",
        ],
      },
      {
        heading: "How Codefloor IT quotes",
        paragraphs: [
          "We do not publish a price list because scope varies too much. After a short call to understand the pages, features and timeline, we send a clear written quote that lists what is included, so you can compare it line by line.",
        ],
      },
    ],
  },
  {
    slug: "why-your-website-speed-affects-revenue",
    title: "Why Your Website's Loading Speed Affects Enquiries and Sales",
    category: "Web Development",
    date: "2026-05-28",
    service: "website-modernization",
    excerpt:
      "Slow pages lose visitors before they read a word. Here is what usually causes slow sites and how to fix it.",
    answer:
      "Website speed affects revenue because visitors leave slow pages before they see your offer, and because search engines use page experience as a ranking signal. The usual causes are oversized images, render-blocking scripts and third-party embeds, all of which can be fixed without a full rebuild.",
    content: [
      "Speed isn't a technical vanity metric. It is tied to bounce rate, conversion rate and search visibility. Users decide whether to stay within the first few seconds.",
      "The most common culprits are unoptimised images, render-blocking scripts, and third-party embeds that were added once and never audited again.",
      "Modern frameworks help through image optimisation and code splitting, but architecture choices only get you halfway. Content and scripts added later are where most sites slow down.",
      "A quarterly performance audit that checks Core Web Vitals, image weight and third-party scripts catches regressions before they cost you conversions.",
      "Treat site speed as an ongoing discipline, not a one-time launch checklist item.",
    ],
  },
  {
    slug: "choosing-the-right-tech-stack-for-your-startup",
    title: "Choosing the Right Tech Stack for Your Startup in 2026",
    category: "Web Applications",
    date: "2026-06-25",
    service: "custom-web-application-development",
    excerpt:
      "The 'best' tech stack doesn't exist. The right one depends on your team, your timeline, and how fast you actually need to move.",
    answer:
      "The right tech stack for a startup is the one your team can ship and maintain reliably within your timeline and budget. For most early-stage web products, a React or Next.js front end with a Node.js back end and a PostgreSQL database is a safe, widely supported choice.",
    content: [
      "Founders often ask which framework is 'best', but the better question is which stack lets your specific team ship reliably within your timeline and budget.",
      "For most early-stage products, a React or Next.js frontend paired with a Node.js backend offers a fast path from idea to working product, backed by a large hiring pool.",
      "Database choice matters more than people think. PostgreSQL suits relational, transaction-heavy products; document stores like MongoDB fit rapidly evolving data models better.",
      "Resist the urge to over-engineer for scale you don't have yet. Build for today's problem, and architect so tomorrow's isn't blocked.",
      "Whatever you choose, prioritise a stack your team can maintain confidently over one that merely looks impressive on a slide.",
    ],
  },
  {
    slug: "gst-filing-mistakes-to-avoid",
    title: "7 GST Filing Mistakes That Are Costing Small Businesses Money",
    category: "Tax & Compliance",
    date: "2026-07-02",
    excerpt:
      "Late filings, mismatched invoices, and missed input credit claims are more common, and more expensive, than most business owners realise.",
    content: [
      "GST compliance looks straightforward on paper, but small errors compound quickly into notices, blocked credit, and penalties. A handful of mistakes show up again and again.",
      "The most frequent issue is invoice mismatch between GSTR-1 and GSTR-3B, usually caused by manual data entry across disconnected systems. Reconciling both before filing catches this early.",
      "A close second is missing the input tax credit window entirely. Many businesses simply forget to claim credit they're legally entitled to, effectively overpaying tax every cycle.",
      "Late filing is the most avoidable of all. Setting a compliance calendar with reminders, or handing filings to a dedicated team, removes the risk almost entirely.",
      "Getting the fundamentals right consistently is worth more than any single optimisation.",
    ],
  },
  {
    slug: "company-registration-checklist-india",
    title: "The Complete Company Registration Checklist for India (2026)",
    category: "Tax & Compliance",
    date: "2026-06-12",
    excerpt:
      "Documents, timelines, and post-incorporation steps to prepare before you start your Private Limited Company registration.",
    content: [
      "Incorporating a company involves more moving parts than most first-time founders expect. Getting the sequence right saves weeks of back-and-forth with the Registrar of Companies.",
      "Start with digital signature certificates for all proposed directors; nothing else can proceed without them. Name approval follows, and having two or three backup names speeds this up considerably.",
      "Once the name is approved, MOA and AOA drafting begins alongside address proof and identity documentation collection for every director and shareholder.",
      "After the Certificate of Incorporation is issued, don't stop there. PAN, TAN, and a current bank account are needed before you can legally start operating.",
      "Keep a compliance calendar running from day one to avoid early ROC penalties.",
    ],
  },
  {
    slug: "msme-benefits-every-founder-should-know",
    title: "5 MSME Registration Benefits Most Founders Don't Know About",
    category: "Tax & Compliance",
    date: "2026-05-14",
    excerpt:
      "Udyam registration unlocks more than a certificate, from delayed payment protection to reduced trademark fees.",
    content: [
      "MSME (Udyam) registration is often treated as a formality, but it carries real financial protections that many registered businesses never actually use.",
      "One of the strongest is protection against delayed payments: buyers are legally required to pay registered MSMEs within a specified period, with interest applicable on delays.",
      "Registered MSMEs also gain access to collateral-free lending schemes through priority sector lending guidelines.",
      "Fee reductions extend beyond loans too. Trademark and patent filing fees are discounted for registered MSMEs, lowering the cost of protecting your brand.",
      "If you're eligible and not yet registered, it's one of the lowest-effort compliance steps available to a small business.",
    ],
  },
];

const wordCount = (p) =>
  [p.answer, ...(p.content || []), ...(p.sections || []).flatMap((s) => [s.heading, ...(s.paragraphs || []), ...(s.list || [])])]
    .filter(Boolean)
    .join(" ")
    .split(/\s+/).length;

export const blogPosts = posts
  .map((p) => ({
    ...p,
    author: blogAuthor,
    readTime: `${Math.max(1, Math.round(wordCount(p) / 200))} min read`,
  }))
  .sort((a, b) => b.date.localeCompare(a.date));

export const blogCategories = ["All", ...new Set(posts.map((p) => p.category))];

export const getPostBySlug = (slug) => blogPosts.find((p) => p.slug === slug);
