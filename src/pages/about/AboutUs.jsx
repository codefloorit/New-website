import { Link } from "react-router-dom";
import { Target, Eye, Heart, Rocket, Award as AwardIcon } from "lucide-react";
import PageHero from "../../components/common/PageHero";
import SectionTitle from "../../components/common/SectionTitle";
import Reveal from "../../components/common/Reveal";
import CTA from "../../components/sections/CTA";
import { siteConfig } from "../../data/siteConfig";
import { itServices } from "../../data/itServices";
import { projects } from "../../data/projects";

// Everything on this page must be verifiable. Do not add awards, client
// counts, team size or milestones unless they are real and can be evidenced.
const values = [
  { icon: Target, title: "Precision", desc: "Every page and every line of code is checked and reviewed before it reaches you." },
  { icon: Heart, title: "Integrity", desc: "Clear pricing and honest timelines, even when the honest answer isn't the easy one." },
  { icon: Rocket, title: "Momentum", desc: "Work is released in stages so you see progress early and can use the core sooner." },
  { icon: AwardIcon, title: "Craft", desc: "We take pride in work that holds up technically and visually long after launch." },
];

const facts = [
  { label: "Registered name", value: siteConfig.name },
  { label: "Brand name", value: siteConfig.shortName },
  { label: "Founded", value: siteConfig.founded },
  { label: "Location", value: siteConfig.address },
  { label: "Service area", value: "Ahmedabad, Gujarat and across India" },
  { label: "Working hours", value: siteConfig.businessHours },
];

const clientWork = projects.filter((p) => p.category !== "venture");
const link = "text-[#F5D76E] hover:underline";

const AboutUs = () => {
  return (
    <div className="bg-[#060913] text-white overflow-hidden w-full">
      <PageHero
        eyebrow="About"
        title={`About ${siteConfig.name}`}
        description="A web and software development company based in Ahmedabad, Gujarat, India."
        breadcrumbItems={[{ label: "About" }]}
      />

      {/* Who we are */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8 border-b border-white/5 bg-[#060913]">
        <div className="absolute inset-0 bg-[radial-gradient(#d4af37_1px,transparent_1px)] [background-size:24px_24px] opacity-[0.02] pointer-events-none" />

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-start relative z-10">
          <div className="space-y-6">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold tracking-wide text-white">Who we are</h2>
            <p className="text-white/70 text-sm sm:text-base leading-relaxed">
              {siteConfig.name}, known as {siteConfig.shortName}, is a web and software development
              company founded in {siteConfig.founded} and based in Ahmedabad, Gujarat. We design,
              build and maintain websites and web applications for businesses and organizations in
              Ahmedabad, across Gujarat and elsewhere in India.
            </p>
            <p className="text-white/70 text-sm sm:text-base leading-relaxed border-l-2 border-[#D4AF37]/40 pl-4 bg-white/[0.01] py-2">
              We work as a solution-focused technology partner. That means starting with the
              business problem, recommending the smallest build that solves it, agreeing the scope
              in writing, and staying available after launch, rather than competing purely on the
              lowest price.
            </p>
            <p className="text-white/70 text-sm sm:text-base leading-relaxed">
              Alongside its web and software work, the company offers a separate line of{" "}
              <Link to="/tax-services" className={link}>tax and financial services</Link> for small
              businesses.
            </p>
          </div>

          <dl className="grid grid-cols-1 sm:grid-cols-2 gap-5 w-full">
            {facts.map((f) => (
              <div key={f.label} className="relative bg-[#0A0F1A] border border-white/5 p-6 shadow-xl">
                <dt className="text-[10px] font-mono uppercase tracking-widest text-[#D4AF37]/70 mb-2">{f.label}</dt>
                <dd className="font-serif font-bold text-white tracking-wide">{f.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* What we do */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-[#0A0F1A] border-b border-white/5">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-serif font-bold tracking-wide text-white mb-6">What we do</h2>
            <ul className="flex flex-col gap-4">
              {itServices.map((s) => (
                <li key={s.slug} className="text-sm sm:text-base text-white/70 leading-relaxed">
                  <Link to={`/services/${s.slug}`} className={`font-semibold ${link}`}>{s.title}</Link>: {s.shortDesc}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-3xl font-serif font-bold tracking-wide text-white mb-6">What we have built</h2>
            <ul className="flex flex-col gap-4">
              {clientWork.map((p) => (
                <li key={p.slug} className="text-sm sm:text-base text-white/70 leading-relaxed">
                  <Link to={`/work/${p.slug}`} className={`font-semibold ${link}`}>{p.title}</Link>: {p.projectType} ({p.industry})
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Mission & vision */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-[#060913] border-b border-white/5">
        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-5">
          <Reveal delay={0.1} className="relative bg-[#0A0F1A] border border-white/5 p-6 group transition-all hover:border-[#D4AF37]/30 shadow-xl">
            <Target size={22} className="text-[#F5D76E] mb-4 bg-[#0B1220] p-1 box-content border border-white/10" />
            <h2 className="font-serif font-bold text-lg text-white mb-2 tracking-wide">Mission</h2>
            <p className="text-sm text-white/60 leading-relaxed">
              Give growing businesses well-built websites and web applications without enterprise
              overhead.
            </p>
          </Reveal>
          <Reveal delay={0.18} className="relative bg-[#0A0F1A] border border-white/5 p-6 group transition-all hover:border-[#D4AF37]/30 shadow-xl">
            <Eye size={22} className="text-[#F5D76E] mb-4 bg-[#0B1220] p-1 box-content border border-white/10" />
            <h2 className="font-serif font-bold text-lg text-white mb-2 tracking-wide">Vision</h2>
            <p className="text-sm text-white/60 leading-relaxed">
              To be a technology partner businesses in Gujarat trust for clear advice and dependable
              delivery.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Values */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-[#0A0F1A] border-b-2 border-[#D4AF37]">
        <div className="max-w-7xl mx-auto relative z-10">
          <SectionTitle eyebrow="Our values" title="What guides how we work" />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 0.08}>
                <div className="relative bg-[#060913] border border-white/5 p-6 h-full text-center group transition-all hover:border-[#D4AF37]/30 shadow-2xl">
                  <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-[#D4AF37]/20 group-hover:border-[#D4AF37]" />
                  <span className="inline-flex h-12 w-12 items-center justify-center bg-[#0A0F1A] border border-white/10 text-[#F5D76E] mb-5 group-hover:bg-[#D4AF37]/10 group-hover:border-[#D4AF37]/40 transition-all duration-300">
                    <v.icon size={22} />
                  </span>
                  <h3 className="font-serif font-bold text-lg text-white mb-3 tracking-wide group-hover:text-[#F5D76E] transition-colors">{v.title}</h3>
                  <p className="text-xs sm:text-sm text-white/60 leading-relaxed font-normal">{v.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTA
        title="Have a website or web application in mind?"
        description={`Talk to ${siteConfig.shortName}. We reply within one business day.`}
        primaryLabel="Talk to Codefloor IT"
        secondaryLabel="View Our Work"
        secondaryTo="/work"
      />
    </div>
  );
};

export default AboutUs;
