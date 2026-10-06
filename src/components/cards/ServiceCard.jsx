import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { m } from "framer-motion";

// Reusable luxury card for both IT and Tax service listings.
const ServiceCard = ({ icon: Icon, title, shortDesc, to, index = 0 }) => {
  return (
    <m.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, delay: (index % 6) * 0.06, ease: [0.22, 1, 0.36, 1] }}
      className="h-full"
    >
      <Link
        to={to}
        className="relative bg-[#0A0F1A] border border-white/5 group flex flex-col justify-between h-full p-6 sm:p-7 transition-all duration-300 hover:border-[#D4AF37]/30 hover:bg-[#0c1424] shadow-2xl overflow-hidden"
      >
        {/* Heritage Geometric Corner Line Accent */}
        <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-[#D4AF37]/20 group-hover:border-[#D4AF37] transition-colors duration-300" />
        <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-white/0 group-hover:border-[#D4AF37]/40 transition-colors duration-300" />

        <div>
          {/* Top Operational Hub */}
          <div className="flex items-center justify-between mb-6">
            <span className="flex h-12 w-12 items-center justify-center bg-[#060913] border border-white/10 text-[#F5D76E] group-hover:border-[#D4AF37]/40 group-hover:bg-gradient-to-r group-hover:from-[#D4AF37] group-hover:to-[#F5D76E] group-hover:text-[#0A0F1A] transition-all duration-300 shadow-md">
              {Icon && <Icon size={22} strokeWidth={1.8} />}
            </span>
            <div className="flex h-8 w-8 items-center justify-center bg-[#060913] border border-white/5 text-white/40 group-hover:text-[#F5D76E] group-hover:border-[#D4AF37]/30 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300">
              <ArrowUpRight size={15} className="stroke-[2.5]" />
            </div>
          </div>

          {/* Core Service Title */}
          <h3 className="font-serif text-lg font-bold text-white mb-2 tracking-wide group-hover:text-[#F5D76E] transition-colors duration-300">
            {title}
          </h3>

          {/* Core Service Short Description */}
          <p className="text-xs sm:text-sm text-white/60 leading-relaxed font-normal font-sans group-hover:text-white/80 transition-colors duration-300">
            {shortDesc}
          </p>
        </div>
      </Link>
    </m.div>
  );
};

export default ServiceCard;