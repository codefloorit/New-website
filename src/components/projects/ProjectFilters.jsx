import { projectCategories } from "../../data/projects";

const ProjectFilters = ({ active, onChange }) => {
  return (
    <div className="flex flex-wrap justify-center gap-2 sm:gap-3" role="group" aria-label="Filter projects by category">
      {projectCategories.map((cat) => {
        const isActive = active === cat.id;
        return (
          <button
            key={cat.id}
            type="button"
            aria-pressed={isActive}
            onClick={() => onChange(cat.id)}
            className={`rounded-full border px-4 py-2 font-mono text-[11px] uppercase tracking-widest transition-all duration-300 sm:px-5 ${
              isActive
                ? "border-[#D4AF37] bg-gradient-to-r from-[#D4AF37] to-[#F5D76E] text-[#060913] shadow-[0_0_20px_rgba(212,175,55,0.3)]"
                : "border-white/10 bg-white/[0.02] text-white/60 hover:border-[#D4AF37]/40 hover:text-white"
            }`}
          >
            {cat.label}
          </button>
        );
      })}
    </div>
  );
};

export default ProjectFilters;
