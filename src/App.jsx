import { lazy } from "react";
import { Routes, Route, matchPath } from "react-router-dom";
import Layout from "./components/layout/Layout";

// One chunk per page, so a visitor only downloads the route they open.
// The HTML for every route is still prerendered (scripts/prerender.mjs).
//
// Once a page's chunk has loaded it renders synchronously instead of through
// React.lazy. main.jsx preloads the current page before hydrating, so the
// prerendered HTML is hydrated in place; a still-suspended lazy page would be
// thrown away and re-rendered (a large layout shift) on the first state update.
const page = (load) => {
  let Loaded;
  const remember = (mod) => {
    Loaded = mod.default;
    return mod;
  };
  const Lazy = lazy(() => load().then(remember));
  const Page = (props) => (Loaded ? <Loaded {...props} /> : <Lazy {...props} />);
  Page.preload = () => load().then(remember);
  return Page;
};

const NotFound = page(() => import("./pages/NotFound"));

// Every route here must also exist in src/seo.js (metadata, prerender, sitemap).
// Redirects from the old /it-services, /case-studies and /blog paths live in vercel.json.
const pages = [
  ["/", page(() => import("./pages/Home"))],
  ["/about", page(() => import("./pages/about/AboutUs"))],
  ["/services", page(() => import("./pages/services/ITServices"))],
  ["/services/:slug", page(() => import("./pages/services/ITServiceDetail"))],
  ["/work", page(() => import("./pages/work/OurWork"))],
  ["/work/:slug", page(() => import("./pages/work/ProjectDetail"))],
  ["/insights", page(() => import("./pages/resources/Insights"))],
  ["/insights/:slug", page(() => import("./pages/resources/InsightDetail"))],
  ["/faqs", page(() => import("./pages/resources/FAQs"))],
  ["/tax-services", page(() => import("./pages/tax/TaxServices"))],
  ["/tax-services/:slug", page(() => import("./pages/tax/TaxServiceDetail"))],
  ["/contact", page(() => import("./pages/contact/ContactUs"))],
  ["/privacy-policy", page(() => import("./pages/legal/PrivacyPolicy"))],
  ["/terms-and-conditions", page(() => import("./pages/legal/TermsAndConditions"))],
  ["/disclaimer", page(() => import("./pages/legal/Disclaimer"))],
];

// Loads the chunk for the page at `pathname`. Called before hydration.
export const preloadPage = (pathname) => {
  const match = pages.find(([path]) => matchPath({ path, end: true }, pathname));
  return (match ? match[1] : NotFound).preload();
};

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        {pages.map(([path, Page]) => (
          <Route key={path} path={path} element={<Page />} />
        ))}
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
