import { Link, Navigate, useParams } from "react-router-dom";
import { ArrowRight, CheckCircle2, TrendingUp } from "lucide-react";
import PageHero from "../../components/common/PageHero";
import SectionTitle from "../../components/common/SectionTitle";
import FAQAccordion from "../../components/common/FAQAccordion";
import Reveal from "../../components/common/Reveal";
import ServiceCard from "../../components/cards/ServiceCard";
import BlogCard from "../../components/cards/BlogCard";
import ProjectCard from "../../components/projects/ProjectCard";
import CTA from "../../components/sections/CTA";
import { getItServiceBySlug, itServices } from "../../data/itServices";
import { getProjectBySlug } from "../../data/projects";
import { getPostBySlug } from "../../data/blogPosts";

const panel = "relative bg-[#0A0F1A] border border-white/5 p-8 group transition-all hover:border-[#D4AF37]/30 shadow-xl";
const textLink = "text-[#F5D76E] hover:underline";

const ITServiceDetail = () => {
  const { slug } = useParams();
  const service = getItServiceBySlug(slug);

  if (!service) return <Navigate to="/services" replace />;

  const others = itServices.filter((s) => s.slug !== slug).slice(0, 3);
  const relatedProjects = service.relatedProjects.map(getProjectBySlug).filter(Boolean);
  const relatedInsights = service.relatedInsights.map(getPostBySlug).filter(Boolean);
  const Icon = service.icon;

  return (
    <div className="bg-[#060913] text-white overflow-hidden w-full">
      <PageHero
        eyebrow={service.category}
        title={service.seoTitle}
        description={service.heroDesc}
        breadcrumbItems={[{ label: "Services", path: "/services" }, { label: service.title }]}
      />

      {/* Overview + who it is for */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-[#060913] border-b border-white/5">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-[1.4fr_1fr] gap-10 lg:gap-16">
          <div className="space-y-5">
            <h2 className="text-2xl sm:text-3xl font-serif font-bold tracking-wide text-white">
              What {service.title.toLowerCase()} involves
            </h2>
            {service.intro.map((p) => (
              <p key={p} className="text-white/70 leading-relaxed">{p}</p>
            ))}
          </div>
          <div className={panel}>
            <h2 className="text-xl font-serif font-bold tracking-wide text-white mb-5">Who it is for</h2>
            <ul className="flex flex-col gap-3">
              {service.audience.map((a) => (
                <li key={a} className="flex items-start gap-3 text-sm text-white/70 leading-relaxed">
                  <CheckCircle2 size={18} className="text-[#D4AF37] flex-shrink-0 mt-0.5" />
                  <span>{a}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Features & Benefits */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-[#0A0F1A] border-b border-white/5">
        <div className="absolute inset-0 bg-[radial-gradient(#d4af37_1px,transparent_1px)] [background-size:24px_24px] opacity-[0.02] pointer-events-none" />

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 lg:gap-16 relative z-10">
          <Reveal direction="left" className={panel}>
            <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-[#D4AF37]/30 group-hover:border-[#D4AF37]" />
            <span className="flex h-12 w-12 items-center justify-center bg-[#060913] border border-white/10 text-[#F5D76E] mb-6">
              {Icon && <Icon size={22} />}
            </span>
            <h2 className="text-2xl font-serif font-bold tracking-wide text-white mb-6">What's included</h2>
            <ul className="flex flex-col gap-4">
              {service.features.map((f) => (
                <li key={f} className="flex items-start gap-3 text-sm text-white/70 leading-relaxed font-normal">
                  <CheckCircle2 size={18} className="text-[#D4AF37] flex-shrink-0 mt-0.5" />
                  <span>{f}</span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal direction="right" delay={0.1} className={panel}>
            <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-[#D4AF37]/30 group-hover:border-[#D4AF37]" />
            <span className="flex h-12 w-12 items-center justify-center bg-[#060913] border border-white/10 text-[#F5D76E] mb-6">
              <TrendingUp size={22} />
            </span>
            <h2 className="text-2xl font-serif font-bold tracking-wide text-white mb-6">What you get</h2>
            <ul className="flex flex-col gap-4">
              {service.benefits.map((b) => (
                <li key={b} className="flex items-start gap-3 text-sm text-white/70 leading-relaxed font-normal">
                  <CheckCircle2 size={18} className="text-[#F5D76E] flex-shrink-0 mt-0.5" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* Specific solutions (booking systems, CRM) */}
      {service.solutions && (
        <section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-[#060913] border-b border-white/5">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-8">
            {service.solutions.map((sol) => {
              const insight = getPostBySlug(sol.insight);
              return (
                <div key={sol.heading} className={panel}>
                  <h2 className="text-2xl font-serif font-bold tracking-wide text-white mb-4">{sol.heading}</h2>
                  <p className="text-sm text-white/70 leading-relaxed">{sol.body}</p>
                  <p className="mt-5 text-sm text-white/60">
                    Related work:{" "}
                    {sol.projects.map(getProjectBySlug).map((p, i) => (
                      <span key={p.slug}>
                        {i > 0 && ", "}
                        <Link to={`/work/${p.slug}`} className={textLink}>{p.title}</Link>
                      </span>
                    ))}
                  </p>
                  {insight && (
                    <p className="mt-2 text-sm text-white/60">
                      Guide: <Link to={`/insights/${insight.slug}`} className={textLink}>{insight.title}</Link>
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        </section>
      )}

      {/* Process */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-[#0A0F1A] border-b border-white/5">
        <div className="max-w-7xl mx-auto relative z-10">
          <SectionTitle eyebrow="How we work" title="Our process, start to finish" />

          <ol className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
            {service.process.map((step, i) => (
              <li key={step} className="relative bg-[#060913] border border-white/5 p-6 h-full group transition-all hover:border-[#D4AF37]/30 shadow-2xl">
                <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-[#D4AF37]/20 group-hover:border-[#D4AF37]" />
                {/* Decorative watermark number, drawn from CSS; the <ol> carries the order. */}
                <span
                  aria-hidden="true"
                  data-step={String(i + 1).padStart(2, "0")}
                  className="font-mono text-4xl font-black text-[#D4AF37]/10 mb-4 block group-hover:text-[#D4AF37]/25 transition-colors before:content-[attr(data-step)]"
                />
                <h3 className="font-serif font-bold text-white text-base leading-snug tracking-wide">{step}</h3>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Related work */}
      {relatedProjects.length > 0 && (
        <section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-[#060913] border-b border-white/5">
          <div className="max-w-7xl mx-auto">
            <SectionTitle eyebrow="Our work" title={`${service.title} projects`} />
            <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {relatedProjects.map((p, i) => (
                <ProjectCard key={p.id} project={p} index={i} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FAQs */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-[#0A0F1A] border-b border-white/5">
        <div className="max-w-3xl mx-auto relative z-10">
          <SectionTitle eyebrow="FAQs" title={`Common questions about ${service.title.toLowerCase()}`} align="left" />
          <div className="mt-12">
            <FAQAccordion items={service.faqs} />
          </div>
        </div>
      </section>

      {/* Related insights */}
      {relatedInsights.length > 0 && (
        <section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-[#060913] border-b border-white/5">
          <div className="max-w-7xl mx-auto">
            <SectionTitle eyebrow="Insights" title="Guides to read before you decide" />
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-14">
              {relatedInsights.map((p, i) => (
                <BlogCard key={p.slug} post={p} index={i} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Other services */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-[#0A0F1A] border-b border-white/5">
        <div className="max-w-7xl mx-auto relative z-10">
          <SectionTitle eyebrow="Related services" title="You might also need" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
            {others.map((s, i) => (
              <ServiceCard key={s.slug} icon={s.icon} title={s.title} shortDesc={s.shortDesc} to={`/services/${s.slug}`} index={i} />
            ))}
          </div>
          <p className="mt-10 text-center">
            <Link to="/services" className="inline-flex items-center gap-2 text-sm font-semibold text-[#F5D76E] hover:underline">
              All web and software development services <ArrowRight size={14} />
            </Link>
          </p>
        </div>
      </section>

      <CTA
        eyebrow="Get started"
        title={`Ready to talk about ${service.title.toLowerCase()}?`}
        description="Tell us what you need. We reply within one business day and follow up with a written scope and quote."
        primaryLabel="Discuss Your Project"
        primaryTo="/contact"
        secondaryLabel="View Our Work"
        secondaryTo="/work"
      />
    </div>
  );
};

export default ITServiceDetail;
