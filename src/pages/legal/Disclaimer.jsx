import LegalPageLayout from "../LegalPageLayout";
import { siteConfig } from "../../data/siteConfig";

const sections = [
  {
    heading: "General Information Only",
    body: "The content on this website — including blog articles, service descriptions, FAQs, and pricing indications — is provided for general informational purposes only and does not constitute professional legal, tax, financial, or technical advice.",
  },
  {
    heading: "No Client Relationship Implied",
    body: "Viewing this website or its content does not create a client relationship with Codefloor IT Tech LLP. A formal engagement begins only upon signed agreement or confirmed proposal.",
  },
  {
    heading: "Tax & Regulatory Information",
    body: "Tax rates, compliance timelines, and regulatory requirements referenced on this site are accurate as of the stated update date but are subject to change based on government notifications. Always confirm current requirements with our team before acting.",
  },
  {
    heading: "Third-Party Links",
    body: "Our website may contain links to third-party websites for reference purposes. We are not responsible for the content, accuracy, or practices of external sites.",
  },
  {
    heading: "No Guarantee of Results",
    body: "While we strive for excellent outcomes on every engagement, specific results (such as SEO rankings, sales growth, or approval timelines for registrations) cannot be guaranteed, as they depend on factors outside our direct control.",
  },
  {
    heading: "Contact for Clarifications",
    body: `If anything on this site is unclear or you'd like it verified before relying on it, please contact us directly at ${siteConfig.email}.`,
  },
];

const Disclaimer = () => (
  <LegalPageLayout
    title="Disclaimer"
    updated="July 2026"
    breadcrumbLabel="Disclaimer"
    sections={sections}
  />
);

export default Disclaimer;
