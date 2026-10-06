import { ExternalLink } from "lucide-react";
import Breadcrumb from "../common/Breadcrumb";
import ProjectMockup from "./ProjectMockup";

const CaseStudyHero = ({ project }) => {
  const words = project.title.split(" ");

  const meta = [
    { label: "Project type", value: project.projectType },
    { label: "Industry", value: project.industry },
    { label: "Year", value: project.year },
    { label: "Status", value: project.status },
  ].filter((item) => item.value);

  return (
    <section className="relative overflow-hidden border-b border-white/5 bg-[#060913] pb-16 pt-14 sm:pt-16">
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] pointer-events-none" />
      <div className="pointer-events-none absolute -top-40 left-1/2 h-[400px] w-[700px] -translate-x-1/2 rounded-full bg-[#D4AF37]/8 blur-[160px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Breadcrumb items={[{ label: "Our Work", path: "/work" }, { label: project.title }]} />

        <div className="mt-8 max-w-4xl">
          <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#D4AF37]/20 bg-[#D4AF37]/5 px-3 py-1 font-mono text-[11px] uppercase tracking-widest text-[#F5D76E]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#D4AF37]" />
            {project.client ? project.client : "Case Study"}
          </span>

          <h1 className="flex flex-wrap gap-x-3 text-4xl font-serif font-bold leading-[1.1] tracking-wide text-white sm:text-6xl">
            {words.map((word, i) => (
              <span key={i} className="animate-rise" style={{ animationDelay: `${0.04 * i}s` }}>
                {word}
              </span>
            ))}
          </h1>

          <p
            style={{ animationDelay: "0.15s" }}
            className="mt-6 max-w-2xl text-base leading-relaxed text-white/60 sm:text-lg animate-rise"
          >
            {project.tagline}
          </p>

          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#F5D76E] hover:underline"
            >
              Visit live project <ExternalLink size={14} />
            </a>
          )}
        </div>

        <div className="mt-10 grid grid-cols-2 gap-4 border-y border-white/10 py-6 sm:grid-cols-4">
          {meta.map((item) => (
            <div key={item.label}>
              <p className="font-mono text-[10px] uppercase tracking-widest text-white/30">{item.label}</p>
              <p className="mt-1 text-sm font-semibold text-white/85">{item.value}</p>
            </div>
          ))}
        </div>

        <div style={{ animationDelay: "0.15s" }} className="mt-14 animate-rise">
          <ProjectMockup
            type={project.mockup}
            image={project.image}
            srcSet={project.imageSrcSet}
            sizes="(min-width: 1280px) 1216px, 100vw"
            title={project.title}
            alt={project.imageAlt}
            eager
            wip={project.status === "In progress"}
          />
        </div>
      </div>
    </section>
  );
};

export default CaseStudyHero;
