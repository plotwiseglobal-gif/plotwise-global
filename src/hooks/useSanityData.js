import { useState, useEffect } from 'react';
import { client } from '@/lib/sanity';
import { BLOG_POSTS_QUERY, BLOG_POST_SLUG_QUERY, TESTIMONIALS_QUERY } from '@/lib/queries';

const dedupeById = (items) => {
  if (!Array.isArray(items)) return items;
  return [...new Map(items.map((item) => [item._id, item])).values()];
};

export const useBlogPosts = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const data = await client.fetch(BLOG_POSTS_QUERY);

        if (!Array.isArray(data)) {
          throw new Error('Unexpected Sanity response: blog post list must be an array');
        }

        setPosts(dedupeById(data));
      } catch (err) {
        if (import.meta.env.DEV) {
          console.error('Error fetching blog posts:', err);
        }
        setError(err?.message ?? String(err));
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  return { posts, loading, error };
};

export const useBlogPost = (slug) => {
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!slug) {
      setLoading(false);
      return;
    }

    const fetchPost = async () => {
      try {
        const data = await client.fetch(BLOG_POST_SLUG_QUERY, { slug });
        setPost(data);
      } catch (err) {
        if (import.meta.env.DEV) {
          console.error('Error fetching blog post:', err);
        }
        setError(err?.message ?? String(err));
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [slug]);

  return { post, loading, error };
};

export const useTestimonials = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const data = await client.fetch(TESTIMONIALS_QUERY);
        setTestimonials(dedupeById(data));
      } catch (err) {
        if (import.meta.env.DEV) {
          console.error('Error fetching testimonials:', err);
        }
        setError(err?.message ?? String(err));
      } finally {
        setLoading(false);
      }
    };

    fetchTestimonials();
  }, []);

  return { testimonials, loading, error };
};
