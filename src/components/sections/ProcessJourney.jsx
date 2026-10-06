import { m } from "framer-motion";
import { Lightbulb, PenTool, Code2, FlaskConical, Rocket, TrendingUp } from "lucide-react";

const stages = [
  { label: "Discover", icon: Lightbulb },
  { label: "Design", icon: PenTool },
  { label: "Build", icon: Code2 },
  { label: "Test", icon: FlaskConical },
  { label: "Launch", icon: Rocket },
  { label: "Scale", icon: TrendingUp },
];

const ProcessJourney = () => {
  return (
    <section className="relative overflow-hidden border-b border-white/5 bg-[#060913] py-20 sm:py-24">
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.025] pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#D4AF37]/20 bg-[#D4AF37]/5 px-3 py-1 font-mono text-[11px] uppercase tracking-widest text-[#F5D76E]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#D4AF37]" />
            From Idea to Production
          </span>
          <h2 className="text-3xl font-serif font-bold tracking-wide text-white sm:text-4xl">
            How a Codefloor IT project moves
          </h2>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {stages.map((stage, i) => {
            const Icon = stage.icon;
            return (
              <m.div
                key={stage.label}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: i * 0.08, ease: [0.25, 1, 0.5, 1] }}
                className="group relative flex flex-col items-center gap-4 border border-white/5 bg-[#0A0F1A] p-6 text-center transition-all hover:border-[#D4AF37]/30"
              >
                <div className="absolute top-0 left-0 h-2 w-2 border-l border-t border-[#D4AF37]/30 transition-colors group-hover:border-[#D4AF37]" />
                <span className="font-mono text-[10px] uppercase tracking-widest text-white/25">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-[#060913] text-[#F5D76E] transition-all group-hover:border-[#D4AF37]/40 group-hover:bg-[#D4AF37]/10">
                  <Icon size={20} />
                </div>
                <p className="font-serif text-base font-bold tracking-wide text-white">{stage.label}</p>
              </m.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProcessJourney;
