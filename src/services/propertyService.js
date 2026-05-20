import { client } from '@/sanity/client';

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
  const data = await client.fetch(ALL_PROPERTIES_QUERY);
  return Array.isArray(data) ? data : [];
};

export const fetchFeaturedProperties = async () => {
  const data = await client.fetch(FEATURED_PROPERTIES_QUERY);
  return Array.isArray(data) ? data : [];
};

export const fetchPropertyBySlug = async (slug) => {
  if (!slug) return null;
  return client.fetch(PROPERTY_BY_SLUG_QUERY, { slug });
};
