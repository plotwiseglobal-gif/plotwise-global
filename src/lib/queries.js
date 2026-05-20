// Blog Posts Query - only published blog posts with valid slugs
// Include blog posts that are scheduled/published or missing a publishedAt value
export const BLOG_POSTS_QUERY = '*[_type == "blog" && defined(slug.current) && (publishedAt <= now() || !defined(publishedAt))] | order(publishedAt desc) { _id, title, slug, excerpt, content, image, publishedAt }';

// Single Blog Post Query
export const BLOG_POST_SLUG_QUERY = '*[_type == "blog" && slug.current == $slug && (publishedAt <= now() || !defined(publishedAt))][0] { _id, title, slug, excerpt, content, image, publishedAt }';

// Testimonials Query
export const TESTIMONIALS_QUERY = '*[_type == "testimonial"] { _id, name, message, role }';
