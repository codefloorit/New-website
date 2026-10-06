import { Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";

import Home from "./pages/Home";
import AboutUs from "./pages/about/AboutUs";

import ITServices from "./pages/services/ITServices";
import ITServiceDetail from "./pages/services/ITServiceDetail";

import OurWork from "./pages/work/OurWork";
import ProjectDetail from "./pages/work/ProjectDetail";

import TaxServices from "./pages/tax/TaxServices";
import TaxServiceDetail from "./pages/tax/TaxServiceDetail";

import Insights from "./pages/resources/Insights";
import InsightDetail from "./pages/resources/InsightDetail";
import FAQs from "./pages/resources/FAQs";

import ContactUs from "./pages/contact/ContactUs";

import PrivacyPolicy from "./pages/legal/PrivacyPolicy";
import TermsAndConditions from "./pages/legal/TermsAndConditions";
import Disclaimer from "./pages/legal/Disclaimer";

import NotFound from "./pages/NotFound";

// Every route here must also exist in src/seo.js (metadata, prerender, sitemap).
// Redirects from the old /it-services, /case-studies and /blog paths live in vercel.json.
function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />

        <Route path="/services" element={<ITServices />} />
        <Route path="/services/:slug" element={<ITServiceDetail />} />

        <Route path="/work" element={<OurWork />} />
        <Route path="/work/:slug" element={<ProjectDetail />} />

        <Route path="/insights" element={<Insights />} />
        <Route path="/insights/:slug" element={<InsightDetail />} />
        <Route path="/faqs" element={<FAQs />} />

        <Route path="/tax-services" element={<TaxServices />} />
        <Route path="/tax-services/:slug" element={<TaxServiceDetail />} />

        <Route path="/contact" element={<ContactUs />} />

        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
        <Route path="/disclaimer" element={<Disclaimer />} />

        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
