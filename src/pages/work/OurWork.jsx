import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import {
  Globe,
  Layers,
  ShoppingCart,
  Settings2,
  LayoutDashboard,
  Users,
} from "lucide-react";
import PageHero from "../../components/common/PageHero";
import FeaturedProject from "../../components/projects/FeaturedProject";
import ProjectFilters from "../../components/projects/ProjectFilters";
import ProjectGrid from "../../components/projects/ProjectGrid";
import ProjectCTA from "../../components/projects/ProjectCTA";
import ProcessJourney from "../../components/sections/ProcessJourney";
import TechMarquee from "../../components/sections/TechMarquee";
import { projects, getFeaturedProject } from "../../data/projects";

const capabilities = [
  { label: "Business Websites", icon: Globe },
  { label: "Web Applications", icon: Layers },
  { label: "Booking Systems", icon: LayoutDashboard },
  { label: "E-Commerce", icon: ShoppingCart },
  { label: "Website Modernization", icon: Settings2 },
  { label: "Admin Dashboards", icon: LayoutDashboard },
  { label: "Client Portals", icon: Users },
  { label: "CRM Systems", icon: Users },
];

const OurWork = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const featured = getFeaturedProject();
  const rest = projects.filter((p) => p.id !== featured.id);

  const filtered = useMemo(
    () => (activeCategory === "all" ? rest : rest.filter((p) => p.category === activeCategory)),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [activeCategory]
  );

  return (
    <div className="w-full overflow-hidden bg-[#060913] text-white">
      <PageHero
        eyebrow="✦ OUR WORK"
        title="Our work: websites and web applications"
        description="Projects designed and built by Codefloor IT in Ahmedabad: a resort website, a hotel booking platform, a CRM dashboard, a law firm website and a doctor appointment system."
        breadcrumbItems={[{ label: "Our Work" }]}
      />

      <FeaturedProject project={featured} />

      <section className="relative border-b border-white/5 bg-[#0A0F1A] py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#D4AF37]/20 bg-[#D4AF37]/5 px-3 py-1 font-mono text-[11px] uppercase tracking-widest text-[#F5D76E]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#D4AF37]" />
              Capabilities
            </span>
            <h2 className="text-3xl font-serif font-bold tracking-wide text-white sm:text-4xl">
              What we build
            </h2>
          </div>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            {capabilities.map(({ label, icon: Icon }) => (
              <div
                key={label}
                className="flex flex-col items-center gap-3 border border-white/5 bg-[#060913] p-5 text-center transition-all hover:border-[#D4AF37]/30"
              >
                <Icon size={22} className="text-[#F5D76E]" />
                <p className="text-sm font-semibold text-white/80">{label}</p>
              </div>
            ))}
          </div>
          <p className="mt-10 text-center text-sm text-white/60">
            Each of these maps to one of our{" "}
            <Link to="/services" className="text-[#F5D76E] hover:underline">web and software development services</Link>.
          </p>
        </div>
      </section>

      <ProcessJourney />

      <section className="relative border-b border-white/5 bg-[#0A0F1A] py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-14 text-center">
            <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#D4AF37]/20 bg-[#D4AF37]/5 px-3 py-1 font-mono text-[11px] uppercase tracking-widest text-[#F5D76E]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#D4AF37]" />
              All Projects
            </span>
            <h2 className="text-3xl font-serif font-bold tracking-wide text-white sm:text-4xl">
              Browse by category
            </h2>
          </div>

          <div className="mb-14">
            <ProjectFilters active={activeCategory} onChange={setActiveCategory} />
          </div>

          {filtered.length ? (
            <ProjectGrid projects={filtered} />
          ) : (
            <p className="text-center font-mono text-sm uppercase tracking-widest text-white/30">
              No projects in this category yet.
            </p>
          )}
        </div>
      </section>

      <TechMarquee />
      <ProjectCTA />
    </div>
  );
};

export default OurWork;
