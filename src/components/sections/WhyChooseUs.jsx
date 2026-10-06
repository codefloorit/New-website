import { Target, FileText, Gauge, Search, MessagesSquare, LifeBuoy } from "lucide-react";
import { m } from "framer-motion";

// How Codefloor IT works. Keep these to practices, not unverifiable numbers.
const whyChooseUs = [
  { title: "Solution First", desc: "We start from the business problem and recommend the smallest build that solves it, even when that is less work for us." },
  { title: "Written Scope & Quote", desc: "Pages, features, timeline and cost are agreed in writing before work starts, so there are no surprises later." },
  { title: "Built for Speed", desc: "Optimized images, lean code and tested mobile layouts, because slow pages lose visitors." },
  { title: "Search-Ready Structure", desc: "Clean URLs, page titles, headings and structured data are part of the build, not an add-on." },
  { title: "Direct Communication", desc: "You talk to the people building your project, with progress shared at each milestone." },
  { title: "Support After Launch", desc: "A support window after launch and an optional maintenance plan for updates, backups and fixes." },
];

const icons = [Target, FileText, Gauge, Search, MessagesSquare, LifeBuoy];

const WhyChooseUs = ({ compact = false }) => {
  return (
    <section className={`relative overflow-hidden w-full border-b border-white/5 ${compact ? "py-12" : "bg-[#060913] py-24 px-4 sm:px-6 lg:px-8"}`}>
      
      {/* Heritage Spatial Canvas Overlays */}
      {!compact && (
        <>
          <div className="absolute inset-0 bg-[radial-gradient(#d4af37_1px,transparent_1px)] [background-size:24px_24px] opacity-[0.02] pointer-events-none" />
          <div className="absolute top-1/4 left-10 h-[500px] w-[500px] rounded-full bg-[#D4AF37]/5 blur-[160px] pointer-events-none" />
        </>
      )}

      <div className="max-w-7xl mx-auto w-full relative z-10">
        
        {/* Heritage Section Title Integration */}
        {!compact && (
          <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 border border-[#D4AF37]/20 bg-[#D4AF37]/5 text-[10px] font-mono font-bold tracking-[0.25em] text-[#F5D76E] uppercase">
              Why Codefloor IT
            </div>
            <h2 className="text-3xl sm:text-5xl font-serif font-bold text-white tracking-tight leading-tight">
              A solution-focused technology partner
            </h2>
            <p className="text-white/60 text-sm sm:text-base max-w-xl mx-auto font-normal">
              How we work on every website and web application project.
            </p>
            <div className="w-36 h-[1px] bg-[#D4AF37]/30 mx-auto pt-1" />
          </div>
        )}

        {/* Vintage Structural Matrix Grid */}
        <div className={`grid sm:grid-cols-2 lg:grid-cols-3 gap-6 ${!compact ? "mt-12" : ""}`}>
          {whyChooseUs.map((item, i) => {
            const IconComponent = icons[i];
            
            return (
              <m.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="relative p-6 bg-[#0A0F1A]/80 border border-white/5 shadow-xl group transition-all duration-300 hover:border-[#D4AF37]/30"
              >
                {/* Classical Corner Accents */}
                <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-[#D4AF37]/30 group-hover:border-[#D4AF37] transition-colors" />
                <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-[#D4AF37]/10 group-hover:border-[#D4AF37]/50 transition-colors" />

                {/* Dynamic Vector Icon Box */}
                <div className="mb-6 inline-flex p-3 bg-[#0B1220] border border-white/10 text-[#F5D76E] transition-all duration-300 group-hover:bg-[#D4AF37]/10 group-hover:border-[#D4AF37]/40">
                  <IconComponent size={22} />
                </div>

                {/* Content Alignment */}
                <div className="space-y-3">
                  <span className="block font-mono text-[9px] text-[#D4AF37]/60 tracking-widest uppercase">
                    0{i + 1}
                  </span>
                  <h3 className="text-lg font-serif font-bold text-white group-hover:text-[#F5D76E] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-white/60 leading-relaxed font-normal">
                    {item.desc}
                  </p>
                </div>
              </m.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default WhyChooseUs;