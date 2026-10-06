import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { Search } from "lucide-react";
import PageHero from "../../components/common/PageHero";
import BlogCard from "../../components/cards/BlogCard";
import CTA from "../../components/sections/CTA";
import { blogCategories, blogPosts } from "../../data/blogPosts";

const Insights = () => {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");

  const filtered = useMemo(() => {
    return blogPosts.filter((p) => {
      const matchesCategory = category === "All" || p.category === category;
      const matchesQuery =
        query.trim() === "" ||
        p.title.toLowerCase().includes(query.toLowerCase()) ||
        p.excerpt.toLowerCase().includes(query.toLowerCase());
      return matchesCategory && matchesQuery;
    });
  }, [query, category]);

  const recentPosts = blogPosts.slice(0, 3);

  return (
    <>
      <PageHero
        eyebrow="Insights"
        title="Insights on websites and web applications"
        description="Practical guides from Codefloor IT on cost, choosing a development partner, booking systems, CRMs and keeping a website fast."
        breadcrumbItems={[{ label: "Insights" }]}
      />

      <section className="section-pad">
        <div className="container-app grid lg:grid-cols-[1fr_320px] gap-12">
          <div>
            {/* Search + filters */}
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <div className="relative flex-1">
                <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted" />
                <input
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  aria-label="Search articles"
                  placeholder="Search articles..."
                  className="w-full rounded-full bg-card border border-line pl-11 pr-4 py-3 text-sm text-ink placeholder:text-muted/70 focus:border-accent/50 outline-none"
                />
              </div>
            </div>
            <div className="flex flex-wrap gap-2.5 mb-10">
              {blogCategories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setCategory(cat)}
                  className={`px-4 py-2 rounded-full text-xs sm:text-sm font-medium border transition-all duration-300 ${
                    category === cat
                      ? "bg-accent-gradient text-primary border-transparent shadow-glow"
                      : "border-line text-muted hover:text-ink hover:border-accent/30"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {filtered.length === 0 ? (
              <p className="text-muted text-sm">No articles match your search. Try a different term.</p>
            ) : (
              <div className="grid sm:grid-cols-2 gap-5 sm:gap-6">
                {filtered.map((post, i) => (
                  <BlogCard key={post.slug} post={post} index={i} />
                ))}
              </div>
            )}
          </div>

          {/* Sidebar */}
          <aside className="flex flex-col gap-8">
            <div className="surface-card p-6">
              <h2 className="font-display font-semibold text-ink mb-4">Recent Posts</h2>
              <ul className="flex flex-col gap-4">
                {recentPosts.map((p) => (
                  <li key={p.slug}>
                    <Link to={`/insights/${p.slug}`} className="text-sm text-muted hover:text-accent transition-colors leading-snug block">
                      {p.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="surface-card p-6">
              <h2 className="font-display font-semibold text-ink mb-2">Get insights monthly</h2>
              <p className="text-sm text-muted mb-4">Straight to your inbox, no spam.</p>
              <form
                onSubmit={(e) => e.preventDefault()}
                className="flex flex-col gap-3"
              >
                <input
                  type="email"
                  required
                  placeholder="you@company.com"
                  className="w-full rounded-full bg-primary border border-line px-4 py-2.5 text-sm text-ink placeholder:text-muted/70 focus:border-accent/50 outline-none"
                />
                <button type="submit" className="btn-primary !py-2.5 text-sm">
                  Subscribe
                </button>
              </form>
            </div>
          </aside>
        </div>
      </section>

      <CTA />
    </>
  );
};

export default Insights;
