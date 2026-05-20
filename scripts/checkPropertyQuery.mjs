import createClient from '@sanity/client';

const projectId = process.env.VITE_SANITY_PROJECT_ID || 'wmd44msw';
const dataset = process.env.VITE_SANITY_DATASET || 'production';
const apiVersion = process.env.VITE_SANITY_API_VERSION || '2024-01-01';

const client = createClient({ projectId, dataset, apiVersion, useCdn: true });

(async () => {
  try {
    const q = '*[_type == "property" && defined(slug.current) && (publishedAt <= now() || !defined(publishedAt))] | order(publishedAt desc) { _id, title, "slug": slug.current, publishedAt }';
    const res = await client.fetch(q);
    console.log('Query returned', res.length, 'properties');
    console.log(JSON.stringify(res, null, 2));
  } catch (err) {
    console.error(err);
  }
})();
