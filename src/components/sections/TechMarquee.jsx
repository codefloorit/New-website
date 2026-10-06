// Technologies named on the service pages. Add a tool only once it is used on real work.
const techStack = ["React", "Next.js", "Node.js", "PostgreSQL", "Tailwind CSS", "Vite", "Razorpay", "Figma"];

// Infinite CSS marquee of the technologies Codefloor builds with.
const TechMarquee = () => {
  const doubled = [...techStack, ...techStack];

  return (
    <section aria-label="Technologies we work with" className="relative overflow-hidden border-y border-white/5 bg-[#0A0F1A] py-10">
      <div className="relative z-10 w-full select-none overflow-hidden py-2">
        <div className="absolute left-0 top-0 bottom-0 z-10 w-24 bg-gradient-to-r from-[#0A0F1A] via-[#0A0F1A]/80 to-transparent pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 z-10 w-24 bg-gradient-to-l from-[#0A0F1A] via-[#0A0F1A]/80 to-transparent pointer-events-none" />

        <div className="motion-reduce:animate-none flex w-max items-center animate-marquee">
          {doubled.map((name, i) => (
            <div key={`${name}-${i}`} className="group flex items-center whitespace-nowrap">
              <span className="mx-6 font-mono text-sm uppercase tracking-widest text-white/40 transition-colors duration-300 group-hover:text-[#F5D76E] sm:mx-8">
                {name}
              </span>
              <span className="h-1.5 w-1.5 rotate-45 border border-[#D4AF37]/30 bg-[#D4AF37]/10 opacity-40" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechMarquee;
