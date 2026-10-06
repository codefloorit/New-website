import { useEffect, useState } from "react";
import { m, useMotionValue, useSpring } from "framer-motion";

// Subtle custom cursor for desktop (fine-pointer, non-touch) devices only.
// Elements can opt in to a label via a `data-cursor="view" | "explore" | "open"` attribute.
const LABELS = { view: "VIEW PROJECT", explore: "EXPLORE", open: "OPEN" };

const CustomCursor = () => {
  const [enabled, setEnabled] = useState(false);
  const [label, setLabel] = useState(null);
  const [expanded, setExpanded] = useState(false);

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const springX = useSpring(x, { damping: 30, stiffness: 400, mass: 0.4 });
  const springY = useSpring(y, { damping: 30, stiffness: 400, mass: 0.4 });

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)").matches;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!fine || reduced) return;

    setEnabled(true);
    document.documentElement.classList.add("custom-cursor");

    const move = (e) => {
      x.set(e.clientX);
      y.set(e.clientY);
      const target = e.target.closest("[data-cursor], a, button");
      if (!target) {
        setLabel(null);
        setExpanded(false);
        return;
      }
      const cursorType = target.getAttribute("data-cursor");
      setLabel(LABELS[cursorType] || null);
      setExpanded(Boolean(cursorType) || target.tagName === "A" || target.tagName === "BUTTON");
    };

    window.addEventListener("mousemove", move);
    return () => {
      window.removeEventListener("mousemove", move);
      document.documentElement.classList.remove("custom-cursor");
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!enabled) return null;

  return (
    <m.div
      aria-hidden="true"
      className={`pointer-events-none fixed left-0 top-0 z-[9999] flex items-center justify-center whitespace-nowrap rounded-full border border-[#D4AF37]/50 bg-[#D4AF37]/10 mix-blend-difference ${
        label ? "px-4 py-2.5" : ""
      }`}
      style={{ x: springX, y: springY, translateX: "-50%", translateY: "-50%" }}
      animate={{
        width: label ? "auto" : expanded ? 44 : 14,
        height: label ? "auto" : expanded ? 44 : 14,
      }}
      transition={{ duration: 0.25, ease: [0.25, 1, 0.5, 1] }}
    >
      {label && (
        <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-[#F5D76E]">{label}</span>
      )}
    </m.div>
  );
};

export default CustomCursor;
