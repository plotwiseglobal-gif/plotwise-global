import PageHero from "@/components/PageHero";
import { ArrowRight, Clock, User, Tag } from "lucide-react";
import { Link } from "react-router-dom";
import { useSEO } from "@/hooks/useSEO";
import { useBlogPosts } from "@/hooks/useSanityData";
import { urlFor } from "@/lib/sanity";
import LoadingUI from "@/components/LoadingUI";
import EmptyState from "@/components/EmptyState";

const Blog = () => {
  const { posts, loading, error } = useBlogPosts();
  
  useSEO("Blog — PlotWise Global", "Insights, market trends, and expert advice on global real estate from PlotWise Global.");

  if (loading) {
    return (
      <>
        <PageHero title="Insights & Updates" subtitle="Trends, guides, and expert perspectives from our team." />
        <section className="py-12">
          <div className="container-px mx-auto max-w-7xl">
            <LoadingUI message="Loading blog posts..." />
          </div>
        </section>
      </>
    );
  }

  // For both fetch errors and empty results, show a clean empty state.
  if (error || !posts || posts.length === 0) {
    if (import.meta.env.DEV && error) console.error('Blog fetch error:', error);
    return (
      <>
        <PageHero title="Insights & Updates" subtitle="Trends, guides, and expert perspectives from our team." />
        <section className="py-12">
          <div className="container-px mx-auto max-w-7xl">
            <EmptyState
              title="No blog content available yet."
              subtitle="Please check back later for updates."
            />
          </div>
        </section>
      </>
    );
  }

  return (
    <>
      <PageHero title="Insights & Updates" subtitle="Trends, guides, and expert perspectives from our team." />

      <section className="py-16 sm:py-20">
        <div className="container-px mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <article key={post._id ?? post.slug?.current} className="group h-full rounded-2xl border border-border bg-card p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-gold/60 hover:shadow-md sm:p-5">
                <Link to={`/blog/${post.slug?.current}`} className="flex h-full flex-col">
                  {post.image && (
                    <div className="mb-4 aspect-[16/10] overflow-hidden rounded-xl bg-muted">
                      <img
                        src={urlFor(post.image).width(400).height(250).url()}
                        alt={post.title}
                        loading="lazy"
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>
                  )}
                  <div className="flex flex-1 flex-col">
                    <h3 className="mb-2 font-display text-xl font-semibold text-foreground transition-colors group-hover:text-gold line-clamp-2">
                      {post.title}
                    </h3>
                    {post.excerpt && (
                      <p className="mb-4 flex-1 text-sm leading-relaxed text-muted-foreground line-clamp-3">
                        {post.excerpt}
                      </p>
                    )}
                    {post.publishedAt && (
                      <p className="text-xs uppercase tracking-[0.2em] text-gold">{new Date(post.publishedAt).toLocaleDateString()}</p>
                    )}
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog;
