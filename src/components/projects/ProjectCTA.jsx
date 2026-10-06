import { useRef } from "react";
import { Link } from "react-router-dom";
import { m, useMotionTemplate, useMotionValue } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

// Premium closing CTA with a subtle gold glow that follows the cursor (desktop only).
const ProjectCTA = () => {
  const ref = useRef(null);
  const mouseX = useMotionValue(50);
  const mouseY = useMotionValue(50);
  const background = useMotionTemplate`radial-gradient(480px circle at ${mouseX}% ${mouseY}%, rgba(212,175,55,0.16), transparent 70%)`;

  const handleMouseMove = (e) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    mouseX.set(((e.clientX - rect.left) / rect.width) * 100);
    mouseY.set(((e.clientY - rect.top) / rect.height) * 100);
  };

  return (
    <section
      ref={ref}
      onMouseMove={handleMouseMove}
      className="relative overflow-hidden border-b border-white/5 bg-[#060913] py-24 sm:py-32"
    >
      <m.div className="pointer-events-none absolute inset-0" style={{ background }} />
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.025] pointer-events-none" />

      <m.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7, ease: [0.25, 1, 0.5, 1] }}
        className="relative z-10 mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8"
      >
        <h2 className="text-4xl font-serif font-bold leading-[1.1] tracking-wide text-white sm:text-6xl">
          Have an idea
          <br />
          <span className="bg-gradient-to-r from-[#D4AF37] to-[#F5D76E] bg-clip-text text-transparent">
            worth building?
          </span>
        </h2>

        <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-white/60 sm:text-lg">
          Let's turn your idea into a digital product your customers will love.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            to="/contact"
            data-cursor="open"
            className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#D4AF37] to-[#F5D76E] px-8 py-4 text-sm font-bold uppercase tracking-widest text-[#060913] shadow-glow transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_50px_-6px_rgba(212,175,55,0.55)] sm:w-auto"
          >
            Start a Project
            <ArrowUpRight size={16} className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
          </Link>
          <Link
            to="/contact"
            data-cursor="open"
            className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/15 bg-white/[0.03] px-8 py-4 text-sm font-bold uppercase tracking-widest text-white transition-all duration-300 hover:border-[#D4AF37]/50 hover:bg-white/[0.06] sm:w-auto"
          >
            Talk to Codefloor
          </Link>
        </div>
      </m.div>
    </section>
  );
};

export default ProjectCTA;
