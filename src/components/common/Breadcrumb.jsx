import { Link } from "react-router-dom";
import { ChevronRight, Home } from "lucide-react";

// items: [{ label, path }] — last item renders as the current (non-link) page
const Breadcrumb = ({ items = [] }) => {
  return (
    <nav aria-label="Breadcrumb" className="flex items-center flex-wrap gap-2 text-[11px] sm:text-xs font-mono uppercase tracking-wider bg-[#060913]/60 border border-white/5 px-4 py-2 self-start backdrop-blur-sm">
      <Link 
        to="/" 
        aria-label="Home"
        className="flex items-center gap-1 text-white/40 hover:text-[#F5D76E] focus:outline-none transition-colors duration-300"
      >
        <Home size={13} className="stroke-[1.8]" />
      </Link>
      
      {items.map((item, i) => {
        const isLast = i === items.length - 1;
        return (
          <span key={item.label} className="flex items-center gap-2">
            <ChevronRight size={11} className="text-[#D4AF37]/40 stroke-[2.5]" />
            {isLast || !item.path ? (
              <span className="text-[#F5D76E] font-bold tracking-widest bg-[#D4AF37]/10 px-1.5 py-0.5 border border-[#D4AF37]/20">
                {item.label}
              </span>
            ) : (
              <Link 
                to={item.path} 
                className="text-white/60 hover:text-[#D4AF37] focus:outline-none transition-colors duration-300"
              >
                {item.label}
              </Link>
            )}
          </span>
        );
      })}
    </nav>
  );
};

export default Breadcrumb;