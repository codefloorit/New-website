import { Suspense, useEffect, useRef } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { LazyMotion } from "framer-motion";
import Navbar from "./Navbar";
import Footer from "./Footer";
import BackToTop from "../common/BackToTop";
import FloatingButtons from "../common/FloatingButtons";
import ScrollToTop from "../common/ScrollToTop";
import ScrollProgressBar from "../common/ScrollProgressBar";
import CustomCursor from "../common/CustomCursor";

// The animation runtime is loaded after first paint instead of shipping in the
// main bundle. Components must use `m.*` (not `motion.*`) for this to work.
const loadMotionFeatures = () => import("../../motionFeatures").then((mod) => mod.default);

// Keeps <title>, meta, canonical and JSON-LD in step with the current route.
// The first page view already has these tags from prerendering, so seo.js
// (and the content data it pulls in) is only fetched on client-side navigation
// or on the dev server, where nothing is prerendered.
const useSeo = () => {
  const { pathname } = useLocation();
  const prerendered = useRef(true);

  useEffect(() => {
    const hasTags = document.head.querySelector("[data-seo]");
    if (prerendered.current && hasTags) {
      prerendered.current = false;
      return;
    }
    prerendered.current = false;

    let stale = false;
    import("../../seo").then(({ getSeo, headTags }) => {
      if (stale) return;
      document.head.querySelectorAll("[data-seo]").forEach((el) => el.remove());
      document.head.insertAdjacentHTML("beforeend", headTags(getSeo(pathname)));
    });
    return () => {
      stale = true;
    };
  }, [pathname]);
};

const Layout = () => {
  useSeo();

  return (
    <LazyMotion features={loadMotionFeatures} strict>
      <div className="min-h-screen flex flex-col bg-primary">
        <CustomCursor />
        <ScrollToTop />
        <ScrollProgressBar />
        <Navbar />
        <main className="flex-1 pt-[96px]">
          {/* Pages are code-split per route (see App.jsx). */}
          <Suspense fallback={null}>
            <Outlet />
          </Suspense>
        </main>
        <Footer />
        <BackToTop />
        <FloatingButtons />
      </div>
    </LazyMotion>
  );
};

export default Layout;
