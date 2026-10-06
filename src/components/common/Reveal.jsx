import { m } from "framer-motion";

// Reusable scroll-reveal wrapper aligned with premium luxury site mechanics. 
// direction controls the entry animation: "up" | "left" | "right" | "zoom" | "fade"
const variantsFor = (direction, distance) => {
  switch (direction) {
    case "left":
      return { hidden: { opacity: 0, x: -distance }, visible: { opacity: 1, x: 0 } };
    case "right":
      return { hidden: { opacity: 0, x: distance }, visible: { opacity: 1, x: 0 } };
    case "zoom":
      return { hidden: { opacity: 0, scale: 0.94 }, visible: { opacity: 1, scale: 1 } };
    case "fade":
      return { hidden: { opacity: 0 }, visible: { opacity: 1 } };
    case "up":
    default:
      return { hidden: { opacity: 0, y: distance }, visible: { opacity: 1, y: 0 } };
  }
};

const Reveal = ({
  children,
  direction = "up",
  distance = 28, // Refined tighter motion threshold for architectural premium aesthetics
  delay = 0,
  duration = 0.7, // Slightly prolonged fluid timing characteristic of heritage design
  className = "",
  once = true,
  amount = 0.15,
}) => {
  const variants = variantsFor(direction, distance);
  return (
    <m.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount }}
      variants={variants}
      transition={{ 
        duration, 
        delay, 
        ease: [0.25, 1, 0.5, 1] // Fluid luxury architectural ease profile
      }}
    >
      {children}
    </m.div>
  );
};

export default Reveal;