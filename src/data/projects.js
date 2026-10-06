// Codefloor project / case-study showcase data.
//
// Every project below is real work or a real product Codefloor has built.
// Fields left as "" or [] are genuinely unverified/unavailable — do not fill
// them with invented numbers, ratings, integrations, or client claims.
// `metrics` stays [] until a result has been verified; the case-study page
// only renders a Results section when metrics/impact actually exist.

import aranyaPalaceImg from "../assets/aranya-palace-resort-website-homepage.webp";
import hotelBookingImg from "../assets/stayfarer-hotel-booking-platform-homepage.webp";
import leadHunterImg from "../assets/leadhunter-crm-dashboard.webp";
import oracleImg from "../assets/oracle-legal-consultancy-website-homepage.webp";
import bharatFundAxisImg from "../assets/bharatfundaxis-website-homepage.webp";
import aranyaPalaceImgSmall from "../assets/aranya-palace-resort-website-homepage-800.webp";
import hotelBookingImgSmall from "../assets/stayfarer-hotel-booking-platform-homepage-800.webp";
import leadHunterImgSmall from "../assets/leadhunter-crm-dashboard-800.webp";
import oracleImgSmall from "../assets/oracle-legal-consultancy-website-homepage-800.webp";
import bharatFundAxisImgSmall from "../assets/bharatfundaxis-website-homepage-800.webp";

// Screenshots ship at 800px and 1400px; the browser picks one via srcset.
const srcSet = (small, large) => `${small} 800w, ${large} 1400w`;

export const projectCategories = [
  { id: "all", label: "All" },
  { id: "hospitality", label: "Hospitality" },
  { id: "healthcare", label: "Healthcare" },
  { id: "booking", label: "Booking" },
  { id: "crm", label: "CRM" },
  { id: "legal", label: "Legal Services" },
  { id: "venture", label: "Group Venture" },
];

// mockup: how the project visual is framed — "browser" | "mobile" | "dashboard"
export const projects = [
  {
    id: "aranya-palace",
    slug: "aranya-palace",
    projectType: "Resort & hotel website",
    seoTitle: "Aranya Palace Resort Website Case Study",
    metaDescription: "How Codefloor IT built the Aranya Palace Resort & Spa website in Ahmedabad: room showcase, gallery, offers and a homepage booking search.",
    imageAlt: "Aranya Palace Resort & Spa website homepage with booking search",
    service: "business-website-development",
    title: "Aranya Palace",
    client: "Aranya Palace Resort & Spa",
    tagline: "A digital experience built for hospitality.",
    category: "hospitality",
    industry: "Hospitality / Hotel",
    year: "",
    status: "Live",
    mockup: "browser",
    featured: true,
    description:
      "Aranya Palace is a restored haveli resort and spa in Ahmedabad, Gujarat, set among fifteen acres of mango orchard. Codefloor IT built a hospitality website that presents the property, its rooms, and its setting with the same care as an in-person stay.",
    challenge:
      "A hospitality brand's website is often the first impression a guest forms, well before check-in. Aranya Palace needed a site that could showcase the property, its rooms, and its setting persuasively, while making it simple for a prospective guest to check availability and get in touch.",
    approach:
      "We treated the site as a guided tour rather than a brochure — leading visitors from a cinematic first impression through the rooms, offers, and gallery, toward a direct booking path.",
    solution:
      "A fully responsive hospitality website covering the homepage experience, a room showcase, gallery, offers, and a direct check-in/check-out/guests booking search — built for fast loading and a smooth experience on any device.",
    ux:
      "Large-format imagery and generous spacing carry the hospitality feel, with a booking search surfaced directly on the homepage so a prospective guest can check availability without hunting for it.",
    features: [
      "Cinematic homepage with property storytelling",
      "Rooms & Suites showcase",
      "Visual gallery",
      "Offers section",
      "Homepage booking search (check-in, check-out, guests)",
      "Contact section",
      "Guest sign-in",
      "Fully responsive experience",
    ],
    technologies: [],
    process: [
      "Discovery & Content Planning",
      "UI/UX Design",
      "Development & QA",
      "Launch & Support",
    ],
    metrics: [],
    liveUrl: "",
    githubUrl: "",
    image: aranyaPalaceImg,
    imageSrcSet: srcSet(aranyaPalaceImgSmall, aranyaPalaceImg),
    gallery: [aranyaPalaceImg],
  },
  {
    id: "doctor-appointment-booking",
    slug: "doctor-appointment-booking",
    projectType: "Appointment booking web application",
    seoTitle: "Doctor Appointment Booking System Case Study",
    metaDescription: "A doctor appointment booking web application by Codefloor IT: doctor search, date and time booking, and dashboards for doctors and admins.",
    imageAlt: "",
    service: "custom-web-application-development",
    title: "Doctor Appointment Booking",
    client: "",
    tagline: "A complete healthcare appointment management platform.",
    category: "healthcare",
    industry: "Healthcare",
    year: "",
    status: "In progress",
    mockup: "dashboard",
    featured: false,
    description:
      "A platform connecting patients with doctors — covering discovery, booking, and day-to-day appointment management for both sides of the visit.",
    challenge:
      "Booking a doctor's appointment is often still a phone call. Patients need a fast way to find the right specialist and a time that works; clinics need a manageable way to run their calendar.",
    approach:
      "We designed around two distinct users at once — the patient booking a visit, and the doctor/admin managing a full calendar of them — so each gets an interface suited to their task.",
    solution:
      "A booking platform spanning doctor discovery and profiles by specialization, a guided date/time booking flow for patients, and dedicated doctor and admin dashboards for managing appointments.",
    ux:
      "The patient-facing booking flow is kept to a few clear steps — find a doctor, pick a slot, confirm — while the doctor and admin dashboards prioritize a clear day-by-day view of upcoming appointments.",
    features: [
      "Doctor discovery & search",
      "Doctor profiles with specialization",
      "Appointment booking with date/time selection",
      "Patient booking flow",
      "Doctor dashboard",
      "Admin dashboard",
      "Appointment & booking management",
      "Notifications",
      "Responsive mobile experience",
    ],
    technologies: [],
    process: [
      "Discovery & Requirement Mapping",
      "UI/UX Design",
      "Development & QA",
      "Launch & Support",
    ],
    metrics: [],
    liveUrl: "",
    githubUrl: "",
    image: "",
    gallery: [],
  },
  {
    id: "hotel-booking",
    slug: "hotel-booking",
    projectType: "Hotel booking web application",
    seoTitle: "Stayfarer Hotel Booking Platform Case Study",
    metaDescription: "Stayfarer is a hotel search and booking platform built by Codefloor IT: destination search, listings, room selection and booking confirmation.",
    imageAlt: "Stayfarer hotel booking platform homepage with destination and date search",
    service: "custom-web-application-development",
    title: "Stayfarer",
    client: "Stayfarer",
    tagline: "A complete hotel search and booking product.",
    category: "booking",
    industry: "Travel / Hospitality",
    year: "",
    status: "Live",
    mockup: "browser",
    featured: false,
    description:
      "Stayfarer is a hotel booking platform built around transparent, direct pricing — helping travellers find and book a stay without hidden fees.",
    challenge:
      "Travellers expect to search, compare, and book a hotel in one continuous flow — without switching tools, and without pricing surprises between search and checkout.",
    approach:
      "We mapped the full traveller journey — search, discover, compare, book — and designed each step to hand off cleanly into the next, with pricing kept transparent throughout.",
    solution:
      "A booking platform covering destination, date, and guest search, popular-destination browsing, hotel listings, a booking flow through to confirmation, and user accounts.",
    ux:
      "The homepage leads with a single search bar — destination, check-in, check-out, guests — so a traveller can start comparing stays immediately, backed by a 'book direct, pay what you see' pricing promise.",
    features: [
      "Destination, date & guest search",
      "Popular destinations showcase",
      "Hotel listings",
      "Hotel detail pages",
      "Room selection",
      "Booking flow through to confirmation",
      "User accounts (login & sign up)",
      "Transparent, direct pricing",
    ],
    technologies: [],
    process: [
      "Discovery & Requirement Mapping",
      "UI/UX Design",
      "Development & QA",
      "Launch & Support",
    ],
    metrics: [],
    liveUrl: "",
    githubUrl: "",
    image: hotelBookingImg,
    imageSrcSet: srcSet(hotelBookingImgSmall, hotelBookingImg),
    gallery: [hotelBookingImg],
  },
  {
    id: "leadhunter",
    slug: "leadhunter",
    projectType: "CRM web application",
    seoTitle: "LeadHunter CRM Dashboard Case Study",
    metaDescription: "LeadHunter is a CRM web application built by Codefloor IT: company discovery, lead pipeline, follow-ups, CSV import and reporting.",
    imageAlt: "LeadHunter CRM dashboard showing company counts and lead pipeline",
    service: "custom-web-application-development",
    title: "LeadHunter",
    client: "LeadHunter CRM",
    tagline: "New-company intelligence and a lead pipeline, in one dashboard.",
    category: "crm",
    industry: "Business Automation / SaaS",
    year: "",
    status: "Live",
    mockup: "dashboard",
    featured: false,
    description:
      "LeadHunter is a CRM product built around new-company intelligence — surfacing newly registered companies and buying signals, then carrying them through a sales pipeline from first contact to close.",
    challenge:
      "Growing sales teams need a single place to discover promising new companies and track them through a pipeline, without losing follow-ups to spreadsheets or scattered notes.",
    approach:
      "We designed LeadHunter around a dashboard-first view of pipeline health — company discovery and buying signals feeding straight into lead status, with follow-up and reporting layered on top.",
    solution:
      "A CRM dashboard combining company discovery, automatic lead generation, buying-signal tracking, a lead status pipeline (hot/warm/medium), search by name, CIN, or city, tasks & follow-ups, notes, CSV import, and reporting on new companies by day, industry, and state.",
    ux:
      "The dashboard opens on a pipeline overview — company counts, lead temperature, and active buying signals at a glance — with company discovery and detailed lead records a click away.",
    features: [
      "Company discovery",
      "Automatic lead generation",
      "Buying signals tracking",
      "Lead status pipeline (hot / warm / medium)",
      "Search by company name, CIN, or city",
      "Tasks & follow-ups",
      "Notes",
      "CSV import",
      "Reporting by day, industry & state",
    ],
    technologies: [],
    process: [
      "Discovery & Strategy",
      "System Architecture",
      "Development & QA",
      "Launch & Iteration",
    ],
    metrics: [],
    liveUrl: "",
    githubUrl: "",
    image: leadHunterImg,
    imageSrcSet: srcSet(leadHunterImgSmall, leadHunterImg),
    gallery: [leadHunterImg],
  },
  {
    id: "oracle-legal-consultancy",
    slug: "oracle-legal-consultancy",
    projectType: "Law firm website",
    seoTitle: "Oracle Legal Consultancy Website Case Study",
    metaDescription: "How Codefloor IT built a professional website for Oracle Legal Consultancy, with services, team, insights and a consultation booking path.",
    imageAlt: "Oracle Legal Consultancy website homepage with consultation call to action",
    service: "business-website-development",
    title: "Oracle Legal Consultancy",
    client: "Oracle Legal Consultancy",
    tagline: "Modern digital experience for a professional legal consultancy.",
    category: "legal",
    industry: "Legal / Professional Services",
    year: "",
    status: "Live",
    mockup: "browser",
    featured: false,
    description:
      "Oracle Legal Consultancy needed a digital presence that reflects the trust and professionalism expected of a legal practice. Codefloor IT developed a modern, premium website — built around the message 'Protecting Your Rights. Strengthening Your Future.' — to represent the consultancy online.",
    clientContext:
      "Oracle Legal Consultancy provides legal consultancy and advisory services to individuals, businesses, and organizations navigating complex legal matters.",
    challenge:
      "A legal consultancy's website is often a prospective client's first point of contact — it needs to convey credibility and professionalism before any conversation happens.",
    approach:
      "We approached the project with a restrained, professional visual language — prioritising clarity and credibility over decoration, in line with what a legal audience expects.",
    solution:
      "A modern, professional website for Oracle Legal Consultancy, structured around Home, About, Services, Our Team, Insights, FAQ, Contact, and Vision sections, with a consultation-booking path built into the homepage.",
    ux:
      "The homepage leads directly with the firm's trust proposition and a 'Book a Consultation' path, alongside a route to explore services in more depth — a clear choice between acting now and learning more first.",
    features: [
      "Trust-led homepage messaging",
      "About section",
      "Services overview",
      "Our Team section",
      "Insights section",
      "FAQ section",
      "Contact section",
      "Vision statement",
      "Consultation booking CTA",
    ],
    technologies: [],
    process: [
      "Discovery & Requirement Mapping",
      "UI/UX Design",
      "Development & QA",
      "Launch & Support",
    ],
    metrics: [],
    liveUrl: "",
    githubUrl: "",
    image: oracleImg,
    imageSrcSet: srcSet(oracleImgSmall, oracleImg),
    gallery: [oracleImg],
  },
  {
    // Recovered from the original pre-redesign Hero.jsx (git history,
    // commit 57c2779 and earlier) — a sister venture within the Codefloor
    // group, not a Codefloor-built client project. Content, stat, image,
    // and CTA below are reused verbatim from that original implementation.
    id: "bharatfundaxis",
    slug: "bharatfundaxis",
    projectType: "Group venture website",
    seoTitle: "BharatFundAxis: Codefloor Group Venture",
    metaDescription: "BharatFundAxis is a sister venture of Codefloor IT offering MSME funding guidance, licensing and compliance support.",
    imageAlt: "BharatFundAxis website homepage",
    service: "",
    title: "BharatFundAxis",
    client: "BharatFundAxis",
    tagline: "Capital Access & Enterprise Growth Advisory",
    category: "venture",
    industry: "Financial Services / MSME Funding",
    year: "",
    status: "Live",
    mockup: "browser",
    featured: false,
    description:
      "Providing institutional funding assistance, business loan guidance, statutory licensing, and compliance frameworks for scaling enterprises and MSMEs.",
    clientContext:
      "BharatFundAxis is a sister venture within the Codefloor IT group — a 'Sovereign Capital & Growth' initiative supporting MSMEs and scaling enterprises, alongside Codefloor's own software and compliance services.",
    challenge: "",
    approach: "",
    solution: "",
    ux: "",
    features: [
      "MSME loan guidance & capital access",
      "Statutory business certifications & licensing",
      "Institutional investment structuring",
    ],
    technologies: [],
    process: [],
    metrics: [{ label: "Funding Guidance Threshold", value: "Up to ₹10Cr*" }],
    liveUrl: "https://www.bharatfundaxis.com",
    githubUrl: "",
    image: bharatFundAxisImg,
    imageSrcSet: srcSet(bharatFundAxisImgSmall, bharatFundAxisImg),
    gallery: [bharatFundAxisImg],
  },
];

export const getProjectBySlug = (slug) => projects.find((p) => p.slug === slug);
export const getFeaturedProject = () => projects.find((p) => p.featured) || projects[0];
export const getRelatedProjects = (slug, limit = 3) => {
  const current = getProjectBySlug(slug);
  const others = projects.filter((p) => p.slug !== slug);
  if (!current) return others.slice(0, limit);

  const sameCategory = others.filter((p) => p.category === current.category);
  const rest = others.filter((p) => p.category !== current.category);
  return [...sameCategory, ...rest].slice(0, limit);
};
