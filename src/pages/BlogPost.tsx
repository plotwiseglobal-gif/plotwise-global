import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Calendar, Clock, User, Tag, Share2 } from "lucide-react";
import { useSEO } from "@/hooks/useSEO";
import PageHero from "@/components/PageHero";
import { useBlogPost } from "@/hooks/useSanityData";
import { urlFor } from "@/lib/sanity";
import PortableTextRenderer from "@/components/PortableTextRenderer";
import LoadingUI from "@/components/LoadingUI";
import EmptyState from "@/components/EmptyState";

const BlogPost = () => {
  const { slug } = useParams();
  const { post, loading, error } = useBlogPost(slug);

  // Set SEO meta tags
  const seoTitle = post ? `${post.title} — Plot Wise Global` : "Post Not Found — Plot Wise Global";
  const seoDescription = post ? (post.excerpt || `Read ${post.title} on Plot Wise Global`) : "The blog post you're looking for doesn't exist.";
  
  useSEO(seoTitle, seoDescription);

  if (loading) {
    return (
      <>
        <PageHero title="Loading..." subtitle="Please wait while we load the blog post." />
        <section className="py-20">
          <div className="container-px mx-auto max-w-4xl">
            <LoadingUI message="Loading blog post..." />
          </div>
        </section>
      </>
    );
  }

  if (error || !post) {
    if (import.meta.env.DEV && error) console.error('BlogPost fetch error:', error);
    return (
      <>
        <PageHero title="Post Not Found" subtitle="The blog post you're looking for doesn't exist." />
        <section className="py-20">
          <div className="container-px mx-auto max-w-4xl">
            <EmptyState
              title="The blog post you're looking for doesn't exist."
              subtitle="Browse our blog for other insights."
              actionLabel="Browse all posts"
              actionHref="/blog"
            />
          </div>
        </section>
      </>
    );
  }

  return (
    <>
      <PageHero title={post.title} subtitle="Read our latest insights and updates." />
      <article className="py-20">
        <div className="container-px mx-auto max-w-4xl">
          {/* Back to blog link */}
          <Link 
            to="/blog" 
            className="inline-flex items-center gap-2 text-gold hover:underline mb-8 transition-colors"
          >
            <ArrowLeft size={16} />
            Back to Blog
          </Link>

          {/* Blog post header */}
          <header className="mb-12">
            
            <h1 className="font-display font-bold text-4xl md:text-5xl mb-6 leading-tight">
              {post.title}
            </h1>

            {/* Author and meta information */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-3">
                  <div>
                    <div className="font-medium">Plot Wise Team</div>
                    <div className="text-sm text-muted-foreground">Real Estate Experts</div>
                  </div>
                </div>
              </div>
              
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <Calendar size={14} />
                  <time dateTime={post.publishedAt}>
                    {new Date(post.publishedAt).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </time>
                </div>
                <div className="flex items-center gap-1">
                  <Clock size={14} />
                  <span>5 min read</span>
                </div>
              </div>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-8">
              {['Investment', 'Market Analysis', 'Property Tips', 'Legal'].map((tag, index) => (
                <span
                  key={index}
                  className="inline-flex items-center gap-1 px-2 py-1 bg-muted text-muted-foreground text-xs rounded-full"
                >
                  <Tag size={12} />
                  {tag}
                </span>
              ))}
            </div>

            {/* Main image */}
            <div className="aspect-[16/9] overflow-hidden rounded-lg mb-12">
              {post.image && (
                <img
                  src={urlFor(post.image).width(800).height(450).url()}
                  alt={post.title}
                  className="w-full h-full object-cover"
                />
              )}
            </div>
          </header>

          {/* Blog post body content */}
          <div className="mb-16">
            <PortableTextRenderer blocks={post.content} />
          </div>

          {/* Share buttons */}
          <div className="mb-16 pb-8 border-b border-border">
            <div className="flex items-center gap-4">
              <span className="font-medium">Share this post:</span>
              <button
                onClick={() => {
                  navigator.share?.({
                    title: post.title,
                    text: post.excerpt,
                    url: window.location.href,
                  });
                }}
                className="inline-flex items-center gap-2 px-4 py-2 border border-border rounded-lg hover:border-gold transition-colors"
              >
                <Share2 size={16} />
                Share
              </button>
            </div>
          </div>

          
          {/* Back to blog link at bottom */}
          <div className="mt-16 pt-8 border-t border-border">
            <Link 
              to="/blog" 
              className="inline-flex items-center gap-2 text-gold hover:underline transition-colors"
            >
              <ArrowLeft size={16} />
              Back to Blog
            </Link>
          </div>
        </div>
      </article>
    </>
  );
};

export default BlogPost;
