import { m } from "framer-motion";
import { ImageOff } from "lucide-react";

// Masked-reveal screenshot gallery. Shows placeholder tiles when no images exist yet.
const ProjectGallery = ({ images = [], title }) => {
  const slots = images.length ? images : [null, null];

  return (
    <div className="grid gap-6 sm:grid-cols-2">
      {slots.map((src, i) => (
        <m.div
          key={i}
          initial={{ opacity: 0, clipPath: "inset(0 0 100% 0)" }}
          whileInView={{ opacity: 1, clipPath: "inset(0 0 0% 0)" }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, delay: i * 0.1, ease: [0.25, 1, 0.5, 1] }}
          className="relative aspect-[4/3] overflow-hidden rounded-xl border border-white/10 bg-[#0A0F1A]"
        >
          {src ? (
            <img src={src} alt={`${title} screen ${i + 1}`} width={1400} height={680} className="h-full w-full object-cover" loading="lazy" decoding="async" />
          ) : (
            <div className="flex h-full w-full flex-col items-center justify-center gap-3 bg-gradient-to-br from-[#0B1220] to-[#060913]">
              <ImageOff size={20} className="text-[#D4AF37]/40" />
              <span className="font-mono text-[10px] uppercase tracking-widest text-white/25">Gallery image pending</span>
            </div>
          )}
        </m.div>
      ))}
    </div>
  );
};

export default ProjectGallery;
