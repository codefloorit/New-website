import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

// Resets scroll position to top whenever the route changes.
// Skips the first render: a freshly loaded page is already at the top, and
// scrolling there would force a layout right after hydration.
const ScrollToTop = () => {
  const { pathname } = useLocation();
  const first = useRef(true);

  useEffect(() => {
    if (first.current) {
      first.current = false;
      return;
    }
    window.scrollTo({ top: 0, behavior: "instant" in window ? "instant" : "auto" });
  }, [pathname]);

  return null;
};

export default ScrollToTop;
