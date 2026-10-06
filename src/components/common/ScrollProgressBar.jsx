import { m, useScroll, useSpring } from "framer-motion";

const ScrollProgressBar = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 25, restDelta: 0.001 });

  return (
    <m.div
      style={{ scaleX }}
      className="fixed top-0 left-0 right-0 h-[2.5px] origin-left bg-gradient-to-r from-[#D4AF37] via-[#F5D76E] to-[#D4AF37] z-[60]"
    />
  );
};

export default ScrollProgressBar;