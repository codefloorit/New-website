import { Link } from "react-router-dom";
import PageHero from "../../components/common/PageHero";
import ServiceCard from "../../components/cards/ServiceCard";
import SectionTitle from "../../components/common/SectionTitle";
import CTA from "../../components/sections/CTA";
import { itServices } from "../../data/itServices";

const ITServices = () => {
  return (
    <div className="bg-[#060913] text-white overflow-hidden w-full">
      <PageHero
        eyebrow="Services"
        title="Web and software development services"
        description="Codefloor IT, based in Ahmedabad, builds business websites, custom web applications and e-commerce stores, modernizes outdated websites, and maintains them after launch."
        breadcrumbItems={[{ label: "Services" }]}
      />

      <section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-[#060913] border-b border-white/5">
        <div className="absolute inset-0 bg-[radial-gradient(#d4af37_1px,transparent_1px)] [background-size:24px_24px] opacity-[0.02] pointer-events-none" />
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 h-[500px] w-[600px] rounded-full bg-[#D4AF37]/5 blur-[160px] pointer-events-none" />

        <div className="max-w-7xl mx-auto w-full relative z-10">
          <SectionTitle
            eyebrow="What we build"
            title="Five services, one team"
            description="Each service is scoped in writing before work starts. If you are not sure which one you need, tell us the problem and we will recommend the right starting point."
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
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

          <p className="mt-14 text-center text-sm text-white/60">
            See these services in practice in{" "}
            <Link to="/work" className="text-[#F5D76E] hover:underline">our website and web application projects</Link>
            , or read{" "}
            <Link to="/faqs" className="text-[#F5D76E] hover:underline">answers on cost, timelines and process</Link>.
          </p>
        </div>
      </section>

      <CTA
        eyebrow="Not sure where to start?"
        title="Tell us the problem. We'll recommend the service."
        description="A short call is enough to understand what you need and whether we are the right team for it."
        primaryLabel="Discuss Your Project"
        primaryTo="/contact"
        secondaryLabel="View Our Work"
        secondaryTo="/work"
      />
    </div>
  );
};

export default ITServices;
