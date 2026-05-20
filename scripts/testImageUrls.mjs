import createClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

const projectId = process.env.VITE_SANITY_PROJECT_ID || 'wmd44msw';
const dataset = process.env.VITE_SANITY_DATASET || 'production';
const apiVersion = process.env.VITE_SANITY_API_VERSION || '2024-01-01';

const client = createClient({ projectId, dataset, apiVersion, useCdn: true });
const builder = imageUrlBuilder(client);

(async () => {
  try {
    const blogs = await client.fetch('*[_type=="blog"]{_id, title, image}');
    const properties = await client.fetch('*[_type=="property"]{_id, title, featuredImage, galleryImages}');

    const toUrl = (img) => {
      if (!img) return null;
      try {
        return builder.image(img).width(800).height(600).url();
      } catch (e) {
        return null;
      }
    };

    console.log('Blog images:');
    blogs.forEach(b => console.log(b._id, b.title, '->', toUrl(b.image)));

    console.log('\nProperty images:');
    properties.forEach(p => console.log(p._id, p.title, '->', toUrl(p.featuredImage), 'gallery[0]->', toUrl(Array.isArray(p.galleryImages) ? p.galleryImages[0] : null)));
  } catch (err) {
    console.error(err);
  }
})();
