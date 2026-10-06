import { Phone } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { siteConfig } from "../../data/siteConfig";
import { whatsappLink } from "../../utils/whatsapp";

const FloatingButtons = () => {
  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3.5">
      {/* WhatsApp Premium Floating Anchor */}
      <a
        href={whatsappLink("Hi, I'd like to know more about your services.")}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="group relative flex h-12 w-12 items-center justify-center rounded-none bg-[#0A0F1A] border border-white/5 text-[#25D366] shadow-2xl transition-all duration-300 hover:border-[#25D366]/40 hover:scale-105 focus:outline-none"
      >
        {/* Subtle internal structural layout markers */}
        <div className="absolute top-0 left-0 w-1 h-1 border-t border-l border-[#25D366]/40 opacity-0 group-hover:opacity-100 transition-opacity" />
        <FaWhatsapp size={20} className="transition-transform group-hover:scale-110" />
      </a>

      {/* Corporate Gold Architectural Call Anchor */}
      <a
        href={`tel:${siteConfig.phone.replace(/\s+/g, "")}`}
        aria-label="Call Codefloor IT"
        className="group relative flex h-12 w-12 items-center justify-center rounded-none bg-gradient-to-br from-[#D4AF37] to-[#F5D76E] text-[#0A0F1A] shadow-xl transition-all duration-300 hover:brightness-110 hover:scale-105 focus:outline-none"
      >
        {/* Heritage blueprints corners */}
        <div className="absolute bottom-0 right-0 w-1 h-1 border-b border-r border-[#0A0F1A]/40" />
        <Phone size={18} className="stroke-[2.5] transition-transform group-hover:scale-110" />
      </a>
    </div>
  );
};

export default FloatingButtons;