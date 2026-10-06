import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import ProjectMockup from "./ProjectMockup";
import { projectCategories } from "../../data/projects";

const categoryLabel = (id) => projectCategories.find((c) => c.id === id)?.label || id;

// size: "large" | "small" — drives the asymmetric grid presentation
const ProjectCard = ({ project, size = "small", index = 0 }) => {
  const isLarge = size === "large";
  const isWip = project.status === "In progress";

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      exit={{ opacity: 0, y: -12 }}
      transition={{ duration: 0.5, delay: (index % 6) * 0.05, ease: [0.25, 1, 0.5, 1] }}
      className={isLarge ? "sm:col-span-2" : ""}
    >
      <Link
        to={`/work/${project.slug}`}
        data-cursor="view"
        className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#0A0F1A] transition-all duration-500 hover:border-[#D4AF37]/40 hover:shadow-[0_25px_60px_-20px_rgba(212,175,55,0.25)]"
      >
        <div className="relative overflow-hidden">
          <div className="absolute inset-0 z-10 bg-gradient-to-t from-[#060913] via-[#060913]/10 to-transparent opacity-70 transition-opacity duration-500 group-hover:opacity-90" />
          <div className="transition-transform duration-700 ease-out group-hover:scale-[1.04]">
            <ProjectMockup type={project.mockup} image={project.image} title={project.title} alt={project.imageAlt} compact wip={isWip} />
          </div>
        </div>

        <div className="relative z-10 flex flex-1 flex-col gap-3 p-6">
          <div className="flex items-center justify-between gap-3">
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#D4AF37]">
              {categoryLabel(project.category)}
            </span>
            {project.year && (
              <span className="font-mono text-[10px] uppercase tracking-widest text-white/30">
                {project.year}
              </span>
            )}
          </div>

          <h3 className={`font-serif font-bold text-white tracking-wide ${isLarge ? "text-2xl" : "text-xl"}`}>
            {project.title}
          </h3>

          <p className="text-sm leading-relaxed text-white/60">{project.tagline}</p>

          <div className="mt-auto flex flex-wrap gap-1.5 pt-2">
            {(project.technologies.length ? project.technologies.slice(0, 4) : [project.projectType]).map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-white/10 bg-white/[0.03] px-2.5 py-1 font-mono text-[10px] uppercase tracking-wide text-white/50"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="flex items-center gap-2 pt-3 text-sm font-semibold text-white/80 transition-colors duration-300 group-hover:text-[#F5D76E]">
            View Case Study
            <ArrowUpRight
              size={16}
              className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </div>
        </div>

        <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/0 transition-all duration-500 group-hover:ring-[#D4AF37]/20" />
      </Link>
    </motion.div>
  );
};

export default ProjectCard;
