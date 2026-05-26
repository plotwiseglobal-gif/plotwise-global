import { client } from '@/lib/sanity';

const propertyFields = `
  _id,
  title,
  location,
  price,
  description,
  featuredImage,
  galleryImages,
  propertyType,
  bedrooms,
  bathrooms,
  area,
  isFeatured,
  publishedAt,
  amenities,
  "slug": slug.current
`;

// Include properties that either have a publishedAt in the past or do not have a publishedAt set.
const ALL_PROPERTIES_QUERY = `*[_type == "property" && defined(slug.current) && (publishedAt <= now() || !defined(publishedAt))] | order(publishedAt desc) { ${propertyFields} }`;
const FEATURED_PROPERTIES_QUERY = `*[_type == "property" && isFeatured == true && defined(slug.current) && (publishedAt <= now() || !defined(publishedAt))] | order(publishedAt desc) { ${propertyFields} }`;
const PROPERTY_BY_SLUG_QUERY = `*[_type == "property" && slug.current == $slug && (publishedAt <= now() || !defined(publishedAt))][0] { ${propertyFields} }`;

export const fetchAllProperties = async () => {
  try {
    const data = await client.fetch(ALL_PROPERTIES_QUERY);
    return Array.isArray(data) ? data : [];
  } catch (err) {
    if (import.meta.env.DEV) console.error('fetchAllProperties error:', err);
    return [];
  }
};

export const fetchFeaturedProperties = async () => {
  try {
    const data = await client.fetch(FEATURED_PROPERTIES_QUERY);
    return Array.isArray(data) ? data : [];
  } catch (err) {
    if (import.meta.env.DEV) console.error('fetchFeaturedProperties error:', err);
    return [];
  }
};

export const fetchPropertyBySlug = async (slug) => {
  if (!slug) return null;
  try {
    const data = await client.fetch(PROPERTY_BY_SLUG_QUERY, { slug });
    return data ?? null;
  } catch (err) {
    if (import.meta.env.DEV) console.error('fetchPropertyBySlug error:', err);
    return null;
  }
};
