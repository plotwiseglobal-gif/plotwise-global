import PageHero from "@/components/PageHero";
import { ArrowRight, Clock, User, Tag } from "lucide-react";
import { Link } from "react-router-dom";
import { useSEO } from "@/hooks/useSEO";
import { useBlogPosts } from "@/hooks/useSanityData";
import { urlFor } from "@/lib/sanity";

const Blog = () => {
  const { posts, loading, error } = useBlogPosts();
  
  useSEO("Blog — Plot Wise Global", "Insights, market trends, and expert advice on global real estate from Plot Wise Global.");

  if (loading) {
    return (
      <>
        <PageHero title="Insights & Updates" subtitle="Trends, guides, and expert perspectives from our team." />
        <section className="py-12">
          <div className="container-px mx-auto max-w-7xl">
            <div className="text-center py-12">
              <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-gold"></div>
              <p className="mt-4 text-muted-foreground">Loading blog posts...</p>
            </div>
          </div>
        </section>
      </>
    );
  }

  if (error) {
    return (
      <>
        <PageHero title="Insights & Updates" subtitle="Trends, guides, and expert perspectives from our team." />
        <section className="py-12">
          <div className="container-px mx-auto max-w-7xl">
            <div className="text-center py-12">
              <p className="text-red-500">Error loading blog posts. Please try again later.</p>
            </div>
          </div>
        </section>
      </>
    );
  }

  if (!posts || posts.length === 0) {
    return (
      <>
        <PageHero title="Insights & Updates" subtitle="Trends, guides, and expert perspectives from our team." />
        <section className="py-12">
          <div className="container-px mx-auto max-w-7xl">
            <div className="text-center py-12">
              <p className="text-muted-foreground">No blog posts available at the moment.</p>
            </div>
          </div>
        </section>
      </>
    );
  }

  return (
    <>
      <PageHero title="Insights & Updates" subtitle="Trends, guides, and expert perspectives from our team." />
      
      {/* Featured Posts Section */}
      <section className="py-12 border-b border-border">
        <div className="container-px mx-auto max-w-7xl">
          <h2 className="font-display font-bold text-2xl mb-8">Featured Posts</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {posts.slice(0, 3).map((post) => (
              <article key={post._id ?? post.slug?.current} className="group cursor-pointer">
                <Link to={`/blog/${post.slug?.current}`} className="block">
                  <div className="aspect-[16/10] overflow-hidden bg-muted mb-4 border border-border rounded-lg">
                    {post.image && (
                      <img 
                        src={urlFor(post.image).width(400).height(250).url()} 
                        alt={post.title} 
                        loading="lazy" 
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" 
                      />
                    )}
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-display font-semibold text-lg group-hover:text-gold transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    {post.excerpt && (
                      <p className="text-sm text-muted-foreground line-clamp-2 mb-2">
                        {post.excerpt}
                      </p>
                    )}
                    <div className="flex items-center gap-4 text-xs text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <User size={12} />
                        <span>Plot Wise Team</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock size={12} />
                        <span>{new Date(post.publishedAt).toLocaleDateString()}</span>
                      </div>
                    </div>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-8 border-b border-border">
        <div className="container-px mx-auto max-w-7xl">
          <div className="flex flex-wrap gap-3">
            {['Market Analysis', 'Investment Tips', 'Property Guides', 'Legal Updates'].map((category, index) => (
              <span
                key={index}
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-border hover:border-gold transition-colors cursor-pointer"
              >
                <span className="text-sm font-medium">{category}</span>
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Main Blog Posts Section */}
      <section className="py-20">
        <div className="container-px mx-auto max-w-7xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <article key={post._id ?? post.slug?.current} className="group cursor-pointer">
                <Link to={`/blog/${post.slug?.current}`} className="block">
                  <div className="aspect-[16/10] overflow-hidden bg-muted mb-5 border border-border rounded-lg">
                    {post.image && (
                      <img 
                        src={urlFor(post.image).width(400).height(250).url()} 
                        alt={post.title} 
                        loading="lazy" 
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" 
                      />
                    )}
                  </div>
                  
                  <div className="space-y-3">
                    <h3 className="font-display font-semibold text-xl mb-2 group-hover:text-gold transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    {post.excerpt && (
                      <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
                        {post.excerpt}
                      </p>
                    )}
                    {/* Meta information */}
                    <div className="flex items-center justify-between text-xs text-muted-foreground">
                      <div className="flex items-center gap-3">
                        <div className="flex items-center gap-1">
                          <User size={12} />
                          <span>Plot Wise Team</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock size={12} />
                          <span>{new Date(post.publishedAt).toLocaleDateString()}</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-1 text-gold font-medium">
                        <span>Read more</span>
                        <ArrowRight size={14} />
                      </div>
                    </div>
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
