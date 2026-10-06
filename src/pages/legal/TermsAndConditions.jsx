import LegalPageLayout from "../LegalPageLayout";
import { siteConfig } from "../../data/siteConfig";

const sections = [
  {
    heading: "Acceptance of Terms",
    body: `By accessing or using the ${siteConfig.name} website and engaging our services, you agree to be bound by these Terms & Conditions. If you do not agree, please discontinue use of our website and services.`,
  },
  {
    heading: "Scope of Services",
    body: "Services described on this website, including website and software development and tax/financial services, are subject to a separate engagement agreement or proposal outlining specific scope, timelines, and pricing for each client.",
  },
  {
    heading: "Payments & Pricing",
    body: "Pricing shown on service pages (where applicable) reflects starting rates and is subject to change based on project complexity. A formal quote will be shared before any engagement begins, and payment terms will be defined in the corresponding agreement.",
  },
  {
    heading: "Intellectual Property",
    body: "Upon full payment for a development project, ownership of custom-built deliverables (code, designs) transfers to the client, unless otherwise specified in the engagement agreement. Pre-existing tools, frameworks, and internal methodologies remain the property of Codefloor IT Tech LLP.",
  },
  {
    heading: "Client Responsibilities",
    body: "Clients are responsible for providing accurate information, timely feedback, and required documentation (particularly for tax and compliance services) to enable us to deliver services effectively and on schedule.",
  },
  {
    heading: "Limitation of Liability",
    body: "While we exercise due care and professional diligence in all engagements, Codefloor IT Tech LLP shall not be liable for indirect, incidental, or consequential damages arising from the use of our services, to the extent permitted by applicable law.",
  },
  {
    heading: "Governing Law",
    body: "These Terms are governed by the laws of India, with disputes subject to the exclusive jurisdiction of the courts in Jaipur, Rajasthan.",
  },
  {
    heading: "Changes to These Terms",
    body: "We may update these Terms periodically. Continued use of our website or services after changes are posted constitutes acceptance of the revised Terms.",
  },
];

const TermsAndConditions = () => (
  <LegalPageLayout
    title="Terms & Conditions"
    updated="July 2026"
    breadcrumbLabel="Terms & Conditions"
    sections={sections}
  />
);

export default TermsAndConditions;
