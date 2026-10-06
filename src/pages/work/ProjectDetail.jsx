import { Link, Navigate, useParams } from "react-router-dom";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import CaseStudyHero from "../../components/projects/CaseStudyHero";
import CaseStudySection from "../../components/projects/CaseStudySection";
import ProjectGallery from "../../components/projects/ProjectGallery";
import TechnologyTags from "../../components/projects/TechnologyTags";
import RelatedProjects from "../../components/projects/RelatedProjects";
import ProjectCTA from "../../components/projects/ProjectCTA";
import { getProjectBySlug, getRelatedProjects } from "../../data/projects";
import { getItServiceBySlug } from "../../data/itServices";

const ProjectDetail = () => {
  const { slug } = useParams();
  const project = getProjectBySlug(slug);

  if (!project) return <Navigate to="/work" replace />;

  const service = getItServiceBySlug(project.service);

  const related = getRelatedProjects(slug, 3);
  const hasResults = project.metrics && project.metrics.length > 0;

  // Sequential step numbering + alternating section background, both
  // derived from one counter so they stay correct regardless of which
  // optional sections (Client Context, Features, Results) render for a
  // given project — existing projects are unaffected since they simply
  // don't set clientContext.
  let n = 0;
  const next = () => {
    n += 1;
    return { index: n, tone: n % 2 === 0 ? "secondary" : "primary" };
  };

  return (
    <div className="w-full overflow-hidden bg-[#060913] text-white">
      <CaseStudyHero project={project} />

      <CaseStudySection {...next()} eyebrow="✦ OVERVIEW" title="Project overview">
        <p>{project.description}</p>
      </CaseStudySection>

      {project.clientContext && (
        <CaseStudySection {...next()} eyebrow="✦ CLIENT CONTEXT" title="Client & business context">
          <p>{project.clientContext}</p>
        </CaseStudySection>
      )}

      {project.challenge && (
        <CaseStudySection {...next()} eyebrow="✦ THE CHALLENGE" title="The challenge">
          <p>{project.challenge}</p>
        </CaseStudySection>
      )}

      {project.approach && (
        <CaseStudySection {...next()} eyebrow="✦ OUR APPROACH" title="Our approach">
          <p>{project.approach}</p>
        </CaseStudySection>
      )}

      {project.solution && (
        <CaseStudySection {...next()} eyebrow="✦ THE SOLUTION" title="The solution">
          <p>{project.solution}</p>
        </CaseStudySection>
      )}

      {project.features.length > 0 && (
        <CaseStudySection {...next()} eyebrow="✦ CAPABILITIES" title="Key features">
          <ul className="grid gap-4 sm:grid-cols-2">
            {project.features.map((f) => (
              <li key={f} className="flex items-start gap-3">
                <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-[#D4AF37]" />
                <span>{f}</span>
              </li>
            ))}
          </ul>
        </CaseStudySection>
      )}

      {project.ux && (
        <CaseStudySection {...next()} eyebrow="✦ USER EXPERIENCE" title="User experience">
          <p>{project.ux}</p>
        </CaseStudySection>
      )}

      {project.technologies.length > 0 && (
        <CaseStudySection {...next()} eyebrow="✦ TECH STACK" title="Technology">
          <TechnologyTags items={project.technologies} size="lg" />
        </CaseStudySection>
      )}

      {project.gallery.length > 1 && (
        <CaseStudySection {...next()} eyebrow="✦ SCREENS" title="Product gallery">
          <ProjectGallery images={project.gallery} title={project.title} />
        </CaseStudySection>
      )}

      {project.process.length > 0 && (
        <CaseStudySection {...next()} eyebrow="✦ PROCESS" title="Development process">
          <div className="grid gap-4 sm:grid-cols-2">
            {project.process.map((step, i) => (
              <div
                key={step}
                className="relative border border-white/5 bg-[#0A0F1A] p-5 shadow-xl transition-all hover:border-[#D4AF37]/30"
              >
                <span className="mb-2 block font-mono text-2xl font-black text-[#D4AF37]/20">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="font-serif font-bold tracking-wide text-white">{step}</p>
              </div>
            ))}
          </div>
        </CaseStudySection>
      )}

      {hasResults && (
        <CaseStudySection {...next()} eyebrow="✦ RESULTS" title="Outcome">
          <div className="grid gap-4 sm:grid-cols-3">
            {project.metrics.map((m) => (
              <div key={m.label} className="border border-white/5 bg-[#0A0F1A] p-5">
                <p className="font-serif text-2xl font-bold text-[#F5D76E]">{m.value}</p>
                <p className="mt-1 text-sm text-white/50">{m.label}</p>
              </div>
            ))}
          </div>
        </CaseStudySection>
      )}

      {service && (
        <CaseStudySection {...next()} eyebrow="✦ SERVICE" title="Need something similar?">
          <p>
            This project falls under our {service.title.toLowerCase()} service. {service.shortDesc}
          </p>
          <Link
            to={`/services/${service.slug}`}
            className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#F5D76E] hover:underline"
          >
            {service.title} by Codefloor IT <ArrowRight size={14} />
          </Link>
        </CaseStudySection>
      )}

      <RelatedProjects projects={related} />
      <ProjectCTA />
    </div>
  );
};

export default ProjectDetail;
