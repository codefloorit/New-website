import { Plus } from "lucide-react";

// items: [{ q, a }]
// Native <details> keeps every answer in the HTML (readable by crawlers and
// assistive tech, usable without JavaScript); only the open state is visual.
const FAQAccordion = ({ items = [], defaultOpen = 0 }) => {
  return (
    <div className="flex flex-col gap-3.5">
      {items.map((item, index) => (
        <details
          key={item.q}
          open={index === defaultOpen}
          className="group relative bg-[#0A0F1A] border border-white/5 overflow-hidden transition-colors duration-300 hover:border-white/10 open:border-[#D4AF37]/50 open:shadow-xl"
        >
          <summary className="flex w-full cursor-pointer list-none items-center justify-between gap-4 px-5 sm:px-6 py-4 sm:py-5 text-left [&::-webkit-details-marker]:hidden">
            <h3 className="font-serif font-bold text-[15px] sm:text-base tracking-wide text-white transition-colors duration-300 group-hover:text-[#D4AF37] group-open:text-[#F5D76E]">
              {item.q}
            </h3>
            <span className="flex-shrink-0 flex h-8 w-8 items-center justify-center border border-white/10 bg-[#060913] text-white/40 transition-all duration-300 group-open:rotate-45 group-open:border-[#D4AF37] group-open:bg-[#D4AF37]/10 group-open:text-[#F5D76E]">
              <Plus size={14} className="stroke-[2.5]" />
            </span>
          </summary>
          <p className="px-5 sm:px-6 pb-5 sm:pb-6 text-sm text-white/70 leading-relaxed font-sans border-t border-white/5 pt-4">
            {item.a}
          </p>
        </details>
      ))}
    </div>
  );
};

export default FAQAccordion;
