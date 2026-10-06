const TechnologyTags = ({ items = [], size = "sm" }) => {
  if (!items.length) return null;

  const pad = size === "lg" ? "px-3.5 py-1.5 text-xs" : "px-2.5 py-1 text-[11px]";

  return (
    <div className="flex flex-wrap gap-2">
      {items.map((tech) => (
        <span
          key={tech}
          className={`rounded-full border border-[#D4AF37]/20 bg-[#D4AF37]/5 font-mono uppercase tracking-wide text-[#F5D76E]/90 ${pad}`}
        >
          {tech}
        </span>
      ))}
    </div>
  );
};

export default TechnologyTags;
