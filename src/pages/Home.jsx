import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Hero from "../components/sections/Hero";
import ServicesPreview from "../components/sections/ServicesPreview";
import AboutPreview from "../components/sections/AboutPreview";
import WhyChooseUs from "../components/sections/WhyChooseUs";
import TechMarquee from "../components/sections/TechMarquee";
import FeaturedProject from "../components/projects/FeaturedProject";
import ProjectCTA from "../components/projects/ProjectCTA";
import SectionTitle from "../components/common/SectionTitle";
import FAQAccordion from "../components/common/FAQAccordion";
import { getFeaturedProject, getProjectBySlug } from "../data/projects";
import { generalFaqs } from "../data/generalFaqs";

const bharatFundAxis = getProjectBySlug("bharatfundaxis");

const Home = () => {
  return (
    <>
      <Hero />
      <ServicesPreview />
      <FeaturedProject project={getFeaturedProject()} />
      <AboutPreview />
      <WhyChooseUs />
      <TechMarquee />

      <section className="relative border-b border-white/5 bg-[#060913] py-24 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <SectionTitle eyebrow="Quick answers" title="About Codefloor IT" align="left" />
          <div className="mt-12">
            <FAQAccordion items={generalFaqs[0].items} />
          </div>
          <Link
            to="/faqs"
            className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-[#F5D76E] hover:underline"
          >
            More answers on cost, timelines and process <ArrowRight size={14} />
          </Link>
        </div>
      </section>

      {bharatFundAxis && (
        <FeaturedProject
          project={bharatFundAxis}
          eyebrowLabel="Group Venture"
          ctaLabel="Visit Venture"
          externalUrl={bharatFundAxis.liveUrl}
        />
      )}
      <ProjectCTA />
    </>
  );
};

export default Home;
