import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import BackToTop from "../common/BackToTop";
import FloatingButtons from "../common/FloatingButtons";
import ScrollToTop from "../common/ScrollToTop";
import ScrollProgressBar from "../common/ScrollProgressBar";
import CustomCursor from "../common/CustomCursor";
import { getSeo, headTags } from "../../seo";

// Keeps <title>, meta, canonical and JSON-LD in step with the current route.
// The first page view already has these tags from prerendering; this swaps
// them on client-side navigation (and fills them in on the dev server).
const useSeo = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    document.head.querySelectorAll("[data-seo]").forEach((el) => el.remove());
    document.head.insertAdjacentHTML("beforeend", headTags(getSeo(pathname)));
  }, [pathname]);
};

const Layout = () => {
  useSeo();

  return (
    <div className="min-h-screen flex flex-col bg-primary">
      <CustomCursor />
      <ScrollToTop />
      <ScrollProgressBar />
      <Navbar />
      <main className="flex-1 pt-[96px]">
        <Outlet />
      </main>
      <Footer />
      <BackToTop />
      <FloatingButtons />
    </div>
  );
};

export default Layout;
