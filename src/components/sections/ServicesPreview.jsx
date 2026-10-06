import { Link } from "react-router-dom";
import { ArrowRight, Sparkles } from "lucide-react";
import ServiceCard from "../cards/ServiceCard";
import { itServices } from "../../data/itServices";

const ServicesPreview = () => {
  return (
    <section className="relative overflow-hidden bg-[#0A0F1A] py-24 text-white border-t border-white/5">
      {/* Background Subtle Amience to tie with the Hero */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5 [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,black,transparent)] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-96 w-96 rounded-full bg-[#D4AF37]/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full border border-[#D4AF37]/20 bg-[#D4AF37]/5 text-xs font-bold tracking-widest text-[#F5D76E] uppercase mb-4 select-none">
            <Sparkles size={12} />
            What We Do
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-4">
            Web and software development <span className="bg-gradient-to-r from-[#D4AF37] to-[#F5D76E] bg-clip-text text-transparent">services</span>
          </h2>
          <p className="text-white/60 text-base sm:text-lg max-w-2xl mx-auto font-medium leading-relaxed">
            Five services that cover a website's whole life: building it, extending it into a web
            application or online store, modernizing it, and keeping it running.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {itServices.map((s, i) => (
            <ServiceCard
              key={s.slug}
              icon={s.icon}
              title={s.title}
              shortDesc={s.shortDesc}
              to={`/services/${s.slug}`}
              index={i}
            />
          ))}
        </div>

        <div className="text-center mt-16">
          <Link
            to="/services"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-[#D4AF37]/30 bg-black/40 backdrop-blur-md px-8 py-4 text-sm font-semibold text-white hover:bg-[#D4AF37]/10 hover:border-[#D4AF37] transform hover:-translate-y-0.5 transition-all duration-300 group shadow-lg"
          >
            View All Web Development Services
            <ArrowRight size={16} className="text-[#F5D76E] group-hover:translate-x-1 transition-transform" />
          </Link>
          <p className="mt-6 text-sm text-white/50">
            Looking for GST, income tax or company registration? See our separate{" "}
            <Link to="/tax-services" className="text-[#F5D76E] hover:underline">
              tax and financial services
            </Link>
            .
          </p>
        </div>
      </div>
    </section>
  );
};

export default ServicesPreview;
