import { Link } from "react-router-dom";
import { ArrowUpRight, Calendar, Clock } from "lucide-react";
import Reveal from "../common/Reveal";

const BlogCard = ({ post, index = 0 }) => {
  const formattedDate = new Date(post.date).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
    timeZone: "UTC",
  });

  return (
    <Reveal delay={(index % 3) * 0.08}>
      <Link 
        to={`/insights/${post.slug}`} 
        className="relative bg-[#0A0F1A] border border-white/5 group flex flex-col h-full p-6 sm:p-7 transition-all duration-300 hover:border-[#D4AF37]/30 hover:bg-[#0c1424] shadow-xl overflow-hidden"
      >
        {/* Heritage Corner Accent - Only lights up fully on card hover */}
        <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-[#D4AF37]/20 group-hover:border-[#D4AF37] transition-colors duration-300" />
        
        {/* Top Meta Hub */}
        <div className="flex items-center justify-between mb-5">
          <span className="text-[10px] font-mono font-bold tracking-[0.15em] text-[#D4AF37] uppercase bg-[#060913] border border-white/5 px-2.5 py-1">
            {post.category}
          </span>
          <div className="flex h-7 w-7 items-center justify-center rounded-none bg-[#060913] border border-white/5 text-white/40 group-hover:text-[#F5D76E] group-hover:border-[#D4AF37]/30 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300">
            <ArrowUpRight size={14} className="stroke-[2.5]" />
          </div>
        </div>

        {/* Post Title */}
        <h3 className="font-serif text-lg font-bold text-white mb-3 leading-snug tracking-wide group-hover:text-[#F5D76E] transition-colors duration-300">
          {post.title}
        </h3>

        {/* Post Excerpt Description */}
        <p className="text-xs sm:text-sm text-white/60 leading-relaxed mb-6 flex-1 font-normal font-sans group-hover:text-white/80 transition-colors duration-300">
          {post.excerpt}
        </p>

        {/* Premium Footprint Metrics Dashboard */}
        <div className="flex items-center gap-4 text-[11px] text-white/40 font-mono tracking-wider pt-4 border-t border-white/5">
          <span className="flex items-center gap-1.5 group-hover:text-white/60 transition-colors">
            <Calendar size={12} className="text-[#D4AF37]" /> 
            {formattedDate}
          </span>
          <span className="flex items-center gap-1.5 group-hover:text-white/60 transition-colors">
            <Clock size={12} className="text-[#F5D76E]" /> 
            {post.readTime}
          </span>
        </div>
      </Link>
    </Reveal>
  );
};

export default BlogCard;