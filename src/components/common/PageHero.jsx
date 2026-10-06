import Breadcrumb from "../common/Breadcrumb";

const PageHero = ({ eyebrow, title, description, breadcrumbItems = [] }) => {
  return (
    <section className="relative pt-14 pb-16 sm:pt-16 sm:pb-20 overflow-hidden bg-[#060913] border-b border-white/5">
      {/* Luxury gold gradient radial layer - No Blue */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,rgba(212,175,55,0.07),transparent)] pointer-events-none" />
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <Breadcrumb items={breadcrumbItems} />
        
        <div className="mt-6 max-w-3xl animate-rise">
          {eyebrow && (
            <span className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-[#F5D76E] mb-4 bg-[#D4AF37]/10 border border-[#D4AF37]/20 px-3 py-1 rounded-full">
              <span className="h-1.5 w-1.5 rounded-full bg-[#D4AF37]" />
              {eyebrow}
            </span>
          )}
          
          <h1 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-serif font-bold text-white leading-[1.15] tracking-wide">
            {title}
          </h1>
          
          {description && (
            <p className="mt-4 text-white/70 font-sans text-base sm:text-lg leading-relaxed max-w-2xl">
              {description}
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default PageHero;