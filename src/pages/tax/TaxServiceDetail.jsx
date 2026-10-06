import { Link, Navigate, useParams } from "react-router-dom";
import { ArrowRight, CheckCircle2, FileText, IndianRupee } from "lucide-react";
import PageHero from "../../components/common/PageHero";
import SectionTitle from "../../components/common/SectionTitle";
import FAQAccordion from "../../components/common/FAQAccordion";
import Reveal from "../../components/common/Reveal";
import ServiceCard from "../../components/cards/ServiceCard";
import CTA from "../../components/sections/CTA";
import { getTaxServiceBySlug, taxServices } from "../../data/taxServices";

const TaxServiceDetail = () => {
  const { slug } = useParams();
  const service = getTaxServiceBySlug(slug);

  if (!service) return <Navigate to="/tax-services" replace />;

  const related = taxServices.filter((s) => s.slug !== slug).slice(0, 3);
  const Icon = service.icon;

  return (
    <div className="bg-[#060913] text-white overflow-hidden w-full">
      {/* Luxury Configured PageHero */}
      <PageHero
        eyebrow="Tax & Financial Services"
        title={service.title}
        description={service.overview}
        breadcrumbItems={[{ label: "Tax & Financial Services", path: "/tax-services" }, { label: service.title }]}
      />

      {/* Process & Documents Section */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-[#060913] border-b border-white/5">
        <div className="absolute inset-0 bg-[radial-gradient(#d4af37_1px,transparent_1px)] [background-size:24px_24px] opacity-[0.02] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 lg:gap-16 relative z-10">
          
          {/* Process Mapping Panel */}
          <Reveal direction="left" className="relative bg-[#0A0F1A] border border-white/5 p-8 group transition-all hover:border-[#D4AF37]/30 shadow-xl">
            <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-[#D4AF37]/30 group-hover:border-[#D4AF37]" />
            <span className="flex h-12 w-12 items-center justify-center bg-[#060913] border border-white/10 text-[#F5D76E] mb-6">
              {Icon && <Icon size={22} />}
            </span>
            <h2 className="text-2xl font-serif font-bold tracking-wide text-white mb-6">Our process</h2>
            <div className="flex flex-col gap-5">
              {service.process.map((step, i) => (
                <div key={step} className="flex items-center gap-4 group/step">
                  <span className="flex-shrink-0 h-9 w-9 border border-[#D4AF37]/40 bg-[#060913] flex items-center justify-center font-mono text-xs font-bold text-[#F5D76E] shadow-md group-hover/step:bg-[#D4AF37] group-hover/step:text-[#060913] transition-all duration-300">
                    {i + 1}
                  </span>
                  <p className="text-sm text-white/70 leading-relaxed font-normal">{step}</p>
                </div>
              ))}
            </div>
          </Reveal>

          {/* Documentation Protocols Panel */}
          <Reveal direction="right" delay={0.1} className="relative bg-[#0A0F1A] border border-white/5 p-8 group transition-all hover:border-[#D4AF37]/30 shadow-xl flex flex-col justify-between">
            <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-[#D4AF37]/30 group-hover:border-[#D4AF37]" />
            <div>
              <span className="flex h-12 w-12 items-center justify-center bg-[#060913] border border-white/10 text-[#F5D76E] mb-6">
                <FileText size={20} />
              </span>
              <h2 className="text-2xl font-serif font-bold tracking-wide text-white mb-6">Documents required</h2>
              <ul className="flex flex-col gap-4 mb-8">
                {service.documents.map((d) => (
                  <li key={d} className="flex items-start gap-3 text-sm text-white/70 leading-relaxed font-normal">
                    <CheckCircle2 size={18} className="text-[#D4AF37] flex-shrink-0 mt-0.5" />
                    <span>{d}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Fiscal Pricing Compliance Framework Banner */}
            <div className="bg-[#060913] p-5 flex items-start gap-3 border border-[#D4AF37]/20 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1.5 h-full bg-[#D4AF37]" />
              <IndianRupee size={18} className="text-[#F5D76E] flex-shrink-0 mt-0.5" />
              <p className="text-xs sm:text-sm text-white/80 font-normal leading-relaxed">{service.pricingNote}</p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Strategic Operational Benefits Grid */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-[#0A0F1A] border-b border-white/5">
        <div className="max-w-7xl mx-auto relative z-10">
          <SectionTitle eyebrow="✦ COMPLIANCE MATRIX" title="What you gain" />
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
            {service.benefits.map((b, i) => (
              <Reveal key={b} delay={i * 0.08}>
                <div className="relative bg-[#060913] border border-white/5 p-6 h-full flex gap-4 group transition-all hover:border-[#D4AF37]/30 shadow-2xl">
                  <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-[#D4AF37]/20 group-hover:border-[#D4AF37]" />
                  <CheckCircle2 size={18} className="text-[#F5D76E] flex-shrink-0 mt-1" />
                  <p className="text-xs sm:text-sm text-white/60 leading-relaxed font-normal group-hover:text-white/90 transition-colors">{b}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Sovereign FAQ Accordion Framework */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-[#060913] border-b border-white/5">
        <div className="max-w-3xl mx-auto relative z-10">
          <SectionTitle eyebrow="✦ FINANCIAL AUDIT FAQS" title={`Common questions about ${service.title}`} align="left" />
          <div className="mt-12 bg-[#0A0F1A] border border-white/5 p-2 shadow-2xl">
            <FAQAccordion items={service.faqs} />
          </div>
        </div>
      </section>

      {/* Relational Cross-Linked Financial Architecture */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-[#0A0F1A] border-b border-white/5">
        <div className="max-w-7xl mx-auto relative z-10">
          <SectionTitle eyebrow="✦ LINKED REGISTRIES" title="Other services you might need" />
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
            {related.map((s, i) => (
              <ServiceCard
                key={s.slug}
                icon={s.icon}
                title={s.title}
                shortDesc={s.shortDesc}
                to={`/tax-services/${s.slug}`}
                index={i}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Luxury Dynamic System Call To Action Banner */}
      <CTA
        eyebrow="GET STARTED"
        title={`Ready to get your ${service.title.toLowerCase()} sorted?`}
        description="Get a free, no-obligation quote — most engagements start within 48 hours."
      />

      {/* Professional Advisory Desk Segment */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#060913] border-b-4 border-[#D4AF37]">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="relative bg-[#0A0F1A] border border-white/10 p-8 sm:p-12 text-center max-w-2xl mx-auto shadow-2xl group">
            <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-[#D4AF37]" />
            <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-[#D4AF37]" />
            
            <h3 className="font-serif text-xl sm:text-2xl font-bold text-white mb-3 tracking-wide">
              Have questions before you commit?
            </h3>
            <p className="text-white/60 text-sm mb-8 max-w-md mx-auto leading-relaxed font-normal">
              Speak with one of our certified Chartered Accountants — free of fiscal obligation.
            </p>
            
            <Link 
              to="/contact" 
              className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#D4AF37] to-[#F5D76E] text-[#0A0F1A] font-bold text-xs uppercase font-mono tracking-widest px-8 py-4 shadow-xl hover:brightness-110 active:scale-[0.98] transition-all duration-300 w-full sm:w-auto"
            >
              <span>Book a Consultation</span> 
              <ArrowRight size={14} className="stroke-[2.5]" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TaxServiceDetail;