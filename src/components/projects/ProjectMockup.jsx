import { useState } from "react";
import { ImageOff, Construction } from "lucide-react";

// Renders a project's visual inside a device/browser frame. Falls back to an
// elegant placeholder panel when no real screenshot has been provided yet —
// or, for projects still in development, a "work in progress" badge.
const PlaceholderFill = ({ label = "Screenshot coming soon", wip = false }) => (
  <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-gradient-to-br from-[#0B1220] via-[#0A0F1A] to-[#060913]">
    <div className="absolute inset-0 bg-[radial-gradient(#d4af37_1px,transparent_1px)] [background-size:22px_22px] opacity-[0.04]" />
    <div
      className={`relative flex h-12 w-12 items-center justify-center rounded-full border text-[#D4AF37] ${
        wip ? "border-[#D4AF37]/50 bg-[#D4AF37]/10" : "border-[#D4AF37]/25 bg-[#D4AF37]/5 text-[#D4AF37]/60"
      }`}
    >
      {wip ? <Construction size={18} /> : <ImageOff size={18} />}
    </div>
    <span
      className={`relative font-mono text-[10px] uppercase tracking-[0.2em] ${
        wip ? "font-bold text-[#F5D76E]" : "text-white/30"
      }`}
    >
      {wip ? "Work in progress" : label}
    </span>
  </div>
);

// Wraps an <img> with a graceful fallback to PlaceholderFill if the source
// fails to load at runtime (e.g. a broken or unreachable external URL) —
// not just when no image was provided at all.
const MockupImage = ({ image, srcSet, sizes, title, alt, eager, wip, label }) => {
  const [failed, setFailed] = useState(false);

  if (!image || failed) return <PlaceholderFill label={label} wip={wip} />;

  return (
    <img
      src={image}
      srcSet={srcSet}
      sizes={srcSet ? sizes : undefined}
      alt={alt || `${title} screenshot`}
      width={1400}
      height={680}
      className="h-full w-full object-cover"
      loading={eager ? "eager" : "lazy"}
      fetchPriority={eager ? "high" : undefined}
      decoding="async"
      onError={() => setFailed(true)}
    />
  );
};

const BrowserFrame = ({ image, title, wip, ...img }) => (
  <div className="relative w-full overflow-hidden rounded-xl border border-white/10 bg-[#0A0F1A] shadow-2xl">
    <div className="flex items-center gap-2 border-b border-white/10 bg-[#060913] px-4 py-3">
      <div className="flex gap-1.5">
        <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
        <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
        <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
      </div>
      <div className="ml-3 flex-1 truncate rounded-full bg-white/5 px-3 py-1 text-center font-mono text-[10px] text-white/60">
        {title || "your-project.com"}
      </div>
    </div>
    <div className="relative aspect-[16/10] w-full">
      <MockupImage image={image} title={title} wip={wip} {...img} />
    </div>
  </div>
);

const MobileFrame = ({ image, title, compact, wip, ...img }) => {
  const phone = (
    <div
      className={`relative mx-auto w-full overflow-hidden rounded-[2rem] border-[6px] border-[#0A0F1A] bg-[#0A0F1A] shadow-2xl ring-1 ring-white/10 ${
        compact ? "max-w-[150px]" : "max-w-[240px]"
      }`}
    >
      <div className="absolute left-1/2 top-0 z-10 h-4 w-24 -translate-x-1/2 rounded-b-xl bg-[#0A0F1A]" />
      <div className="relative aspect-[9/19]">
        <MockupImage image={image} title={title} wip={wip} label="Preview coming soon" {...img} />
      </div>
    </div>
  );

  if (!compact) return phone;

  // Keep the card the same height as browser/dashboard mockups in grid contexts.
  return (
    <div className="relative flex aspect-[16/10] w-full items-center justify-center overflow-hidden rounded-xl border border-white/10 bg-gradient-to-br from-[#0B1220] to-[#060913] py-4">
      {phone}
    </div>
  );
};

const DashboardFrame = ({ image, title, wip, ...img }) => (
  <div className="relative w-full overflow-hidden rounded-xl border border-white/10 bg-[#0A0F1A] shadow-2xl">
    <div className="flex">
      <div className="hidden w-14 flex-col gap-3 border-r border-white/10 bg-[#060913] p-3 sm:flex">
        {[...Array(4)].map((_, i) => (
          <span key={i} className="h-2 w-full rounded-full bg-white/10" />
        ))}
      </div>
      <div className="relative aspect-[16/10] flex-1">
        <MockupImage image={image} title={title} wip={wip} {...img} />
      </div>
    </div>
  </div>
);

// sizes: the rendered width of the mockup, so the browser can pick the right srcset entry.
const ProjectMockup = ({ type = "browser", image, srcSet, sizes = "(min-width: 1024px) 600px, 100vw", title, alt, eager = false, className = "", compact = false, wip = false }) => {
  const Frame = type === "mobile" ? MobileFrame : type === "dashboard" ? DashboardFrame : BrowserFrame;
  return (
    <div className={className}>
      <Frame image={image} srcSet={srcSet} sizes={sizes} title={title} alt={alt} eager={eager} compact={compact} wip={wip} />
    </div>
  );
};

export default ProjectMockup;
