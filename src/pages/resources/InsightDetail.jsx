import { Link, Navigate, useParams } from "react-router-dom";
import { ArrowRight, Calendar, Clock, User } from "lucide-react";
import PageHero from "../../components/common/PageHero";
import BlogCard from "../../components/cards/BlogCard";
import SectionTitle from "../../components/common/SectionTitle";
import CTA from "../../components/sections/CTA";
import { blogPosts, getPostBySlug } from "../../data/blogPosts";
import { getItServiceBySlug } from "../../data/itServices";

const InsightDetail = () => {
  const { slug } = useParams();
  const post = getPostBySlug(slug);

  if (!post) return <Navigate to="/insights" replace />;

  const formattedDate = new Date(post.date).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  });

  const service = post.service && getItServiceBySlug(post.service);
  const related = blogPosts.filter((p) => p.slug !== slug && p.category === post.category).slice(0, 3);

  return (
    <>
      <PageHero
        eyebrow={post.category}
        title={post.title}
        breadcrumbItems={[{ label: "Insights", path: "/insights" }, { label: post.title }]}
      />

      <article className="section-pad !pt-14">
        <div className="container-app max-w-3xl">
          <div className="flex flex-wrap items-center gap-5 text-sm text-muted font-mono mb-10 pb-8 border-b border-line">
            <span className="flex items-center gap-1.5"><User size={14} /> By <Link to="/about" className="hover:text-accent">{post.author}</Link></span>
            <span className="flex items-center gap-1.5"><Calendar size={14} /> <time dateTime={post.date}>{formattedDate}</time></span>
            <span className="flex items-center gap-1.5"><Clock size={14} /> {post.readTime}</span>
          </div>

          {/* Direct answer first, supporting detail after */}
          {post.answer && (
            <p className="mb-10 border-l-2 border-accent/60 bg-white/[0.02] py-4 pl-5 pr-4 text-ink text-base sm:text-lg leading-relaxed">
              {post.answer}
            </p>
          )}

          <div className="flex flex-col gap-5 text-ink/85 leading-relaxed text-[15px] sm:text-base">
            {(post.content || []).map((para) => (
              <p key={para}>{para}</p>
            ))}

            {(post.sections || []).map((section) => (
              <section key={section.heading} className="flex flex-col gap-4 pt-4">
                <h2 className="font-display text-xl sm:text-2xl font-semibold text-ink">{section.heading}</h2>
                {(section.paragraphs || []).map((para) => (
                  <p key={para}>{para}</p>
                ))}
                {section.list && (
                  <ul className="flex list-disc flex-col gap-2 pl-5 marker:text-accent">
                    {section.list.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                )}
              </section>
            ))}
          </div>

          {service && (
            <aside className="mt-14 border border-accent/30 bg-card p-6 sm:p-8">
              <h2 className="font-display text-lg font-semibold text-ink mb-2">Need help with this?</h2>
              <p className="text-sm text-muted leading-relaxed mb-5">{service.shortDesc}</p>
              <Link to={`/services/${service.slug}`} className="inline-flex items-center gap-2 text-sm font-semibold text-accent hover:underline">
                {service.title} by Codefloor IT <ArrowRight size={14} />
              </Link>
            </aside>
          )}
        </div>
      </article>

      {related.length > 0 && (
        <section className="section-pad bg-secondary/40 border-y border-line">
          <div className="container-app">
            <SectionTitle eyebrow="Keep Reading" title="More on this topic" />
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 mt-12">
              {related.map((p, i) => (
                <BlogCard key={p.slug} post={p} index={i} />
              ))}
            </div>
          </div>
        </section>
      )}

      <CTA />
    </>
  );
};

export default InsightDetail;
