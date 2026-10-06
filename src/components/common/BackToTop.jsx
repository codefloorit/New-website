import { useEffect, useState } from "react";
import { AnimatePresence, m } from "framer-motion";
import { ArrowUp } from "lucide-react";

const BackToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 480);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <AnimatePresence>
      {visible && (
        <m.button
          type="button"
          onClick={scrollToTop}
          aria-label="Back to top"
          initial={{ opacity: 0, y: 16, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 16, scale: 0.8 }}
          whileHover={{ y: -4, borderColor: "rgba(245, 215, 110, 0.5)" }}
          transition={{ duration: 0.3, ease: [0.25, 1, 0.5, 1] }}
          className="fixed bottom-6 left-6 z-40 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-[#0A0F1A] to-[#060913] text-[#F5D76E] border border-[#D4AF37]/30 shadow-2xl backdrop-blur-md focus:outline-none cursor-pointer group"
        >
          {/* Subtle inside circular accent layer */}
          <span className="absolute inset-0.5 rounded-full border border-white/5 pointer-events-none" />
          
          <ArrowUp 
            size={18} 
            className="stroke-[2.5] text-[#F5D76E] transition-transform duration-300 group-hover:-translate-y-0.5" 
          />
        </m.button>
      )}
    </AnimatePresence>
  );
};

export default BackToTop;