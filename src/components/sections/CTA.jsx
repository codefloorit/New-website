import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowUpRight, ShieldAlert } from "lucide-react";

const CTA = ({
  eyebrow = "GET STARTED",
  title = "Ready to start your project?",
  description = "Talk to Codefloor IT about your website or web application. We reply within one business day.",
  primaryLabel = "Discuss Your Project",
  primaryTo = "/contact",
  secondaryLabel = "Our Services",
  secondaryTo = "/services",
}) => {
  return (
    <section className="relative overflow-hidden bg-[#060913] py-24 px-4 sm:px-6 lg:px-8 text-white w-full border-b-4 border-[#D4AF37]">
      {/* Heritage Architecture Canvas Textures */}
      <div className="absolute inset-0 bg-[radial-gradient(#d4af37_1px,transparent_1px)] [background-size:20px_20px] opacity-[0.02] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full bg-[#D4AF37]/5 blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto w-full relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="relative overflow-hidden border-2 border-[#D4AF37]/30 bg-[#0A0F1A] px-6 py-16 sm:px-14 sm:py-20 text-center shadow-[0_30px_65px_rgba(0,0,0,0.8)]"
        >
          {/* Heritage Frame Corner Overlays */}
          <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-[#D4AF37]" />
          <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-[#D4AF37]" />
          <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-[#D4AF37]" />
          <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-[#D4AF37]" />

          {/* Internal Geometric Grid Overlay */}
          <div className="absolute inset-2 border border-dashed border-[#D4AF37]/10 pointer-events-none" />

          <div className="relative z-10 max-w-3xl mx-auto space-y-6">
            
            {/* Sovereign Identity Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 border border-[#D4AF37]/20 bg-[#D4AF37]/5 text-[10px] font-mono font-bold tracking-[0.25em] text-[#F5D76E] uppercase">
              <ShieldAlert size={12} className="text-[#D4AF37]" />
              <span>{eyebrow}</span>
            </div>

            {/* Premium Gold Typography */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold tracking-wide text-white leading-tight">
              {title}
            </h2>

            {/* Strategic Description Block */}
            <p className="text-white/70 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto font-normal">
              {description}
            </p>

            <div className="w-24 h-[1px] bg-[#D4AF37]/40 mx-auto pt-2" />

            {/* Solid Non-Interactive Rigid Custom Buttons */}
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto">
              
              <Link 
                to={primaryTo} 
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#D4AF37] to-[#F5D76E] text-[#0A0F1A] font-bold text-xs uppercase font-mono tracking-widest px-8 py-4 shadow-xl transition-all duration-300 hover:brightness-110 active:scale-[0.98]"
              >
                <span>{primaryLabel}</span>
                <ArrowUpRight size={14} className="stroke-[2.5]" />
              </Link>

              <Link 
                to={secondaryTo} 
                className="w-full sm:w-auto inline-flex items-center justify-center bg-[#060913] text-white border border-white/10 font-bold text-xs uppercase font-mono tracking-widest px-8 py-4 transition-all duration-300 hover:bg-white/5 hover:border-white/20 active:scale-[0.98]"
              >
                {secondaryLabel}
              </Link>
              
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;