import { AnimatePresence, m } from "framer-motion";
import ProjectCard from "./ProjectCard";

// Asymmetric editorial layout: every 5th item (index 0, 5, 10…) spans large.
const ProjectGrid = ({ projects }) => {
  return (
    <m.div layout className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      <AnimatePresence mode="popLayout">
        {projects.map((project, i) => (
          <ProjectCard key={project.id} project={project} size={i % 5 === 0 ? "large" : "small"} index={i} />
        ))}
      </AnimatePresence>
    </m.div>
  );
};

export default ProjectGrid;
