import { useRef } from "react";
import { Link } from "react-router-dom";
import { m, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import ProjectMockup from "./ProjectMockup";
import TechnologyTags from "./TechnologyTags";
import { projectCategories } from "../../data/projects";

const categoryLabel = (id) => projectCategories.find((c) => c.id === id)?.label || id;

const FeaturedProject = ({ project, eyebrowLabel = "Featured Case Study", ctaLabel = "View Case Study", externalUrl }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [40, -40]);

  if (!project) return null;

  return (
    <section ref={ref} className="relative overflow-hidden border-b border-white/5 bg-[#060913] py-20 sm:py-28">
      <div className="absolute inset-0 bg-[radial-gradient(#d4af37_1px,transparent_1px)] [background-size:26px_26px] opacity-[0.025] pointer-events-none" />
      <div className="pointer-events-none absolute -top-32 left-1/2 h-[420px] w-[720px] -translate-x-1/2 rounded-full bg-[#D4AF37]/10 blur-[160px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <m.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mb-12 inline-flex items-center gap-2 rounded-full border border-[#D4AF37]/25 bg-[#D4AF37]/5 px-4 py-1.5 font-mono text-[11px] uppercase tracking-[0.25em] text-[#F5D76E]"
        >
          {eyebrowLabel}
        </m.div>

        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <m.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: [0.25, 1, 0.5, 1] }}
            className="order-2 space-y-6 lg:order-1"
          >
            <div className="flex flex-wrap items-center gap-3 font-mono text-[11px] uppercase tracking-widest text-white/40">
              <span className="text-[#D4AF37]">{categoryLabel(project.category)}</span>
              <span className="h-1 w-1 rounded-full bg-white/20" />
              <span>{project.industry}</span>
              {project.year && (
                <>
                  <span className="h-1 w-1 rounded-full bg-white/20" />
                  <span>{project.year}</span>
                </>
              )}
            </div>

            <h2 className="text-3xl font-serif font-bold leading-[1.1] tracking-wide text-white sm:text-5xl">
              {project.title}
            </h2>

            <p className="max-w-lg text-base leading-relaxed text-white/60 sm:text-lg">{project.tagline}</p>

            <TechnologyTags items={project.technologies} size="lg" />

            <div className="pt-4">
              {externalUrl ? (
                <a
                  href={externalUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cursor="explore"
                  className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#D4AF37] to-[#F5D76E] px-7 py-3.5 text-sm font-bold uppercase tracking-wider text-[#060913] shadow-glow transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_45px_-6px_rgba(212,175,55,0.55)]"
                >
                  {ctaLabel}
                  <ArrowUpRight size={16} />
                </a>
              ) : (
                <Link
                  to={`/work/${project.slug}`}
                  data-cursor="explore"
                  className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#D4AF37] to-[#F5D76E] px-7 py-3.5 text-sm font-bold uppercase tracking-wider text-[#060913] shadow-glow transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_45px_-6px_rgba(212,175,55,0.55)]"
                >
                  {ctaLabel}
                  <ArrowUpRight size={16} />
                </Link>
              )}
            </div>
          </m.div>

          <m.div style={{ y }} className="order-1 lg:order-2">
            <m.div
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
            >
              <ProjectMockup
                type={project.mockup}
                image={project.image}
                srcSet={project.imageSrcSet}
                title={project.title}
                alt={project.imageAlt}
                wip={project.status === "In progress"}
              />
            </m.div>
          </m.div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProject;
