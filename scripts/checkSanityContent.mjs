import createClient from '@sanity/client';

const projectId = process.env.VITE_SANITY_PROJECT_ID || 'wmd44msw';
const dataset = process.env.VITE_SANITY_DATASET || 'production';
const apiVersion = process.env.VITE_SANITY_API_VERSION || '2024-01-01';

const client = createClient({ projectId, dataset, apiVersion, useCdn: true });

async function check() {
  try {
    const blogCount = await client.fetch('count(*[_type == "blog"])');
    const testimonialCount = await client.fetch('count(*[_type == "testimonial"])');
    const propertyCount = await client.fetch('count(*[_type == "property"])');

    const blogs = await client.fetch('*[_type == "blog"] { _id, title, "slug": slug.current, image, publishedAt }');
    const testimonials = await client.fetch('*[_type == "testimonial"] { _id, name, message }');
    const properties = await client.fetch('*[_type == "property"] { _id, title, "slug": slug.current, featuredImage, galleryImages, publishedAt, price }');

    console.log('projectId:', projectId, 'dataset:', dataset);
    console.log('Counts -> blogs:', blogCount, 'testimonials:', testimonialCount, 'properties:', propertyCount);
    console.log('Sample docs:');
    console.log('blogs:', JSON.stringify(blogs.slice(0,5), null, 2));
    console.log('testimonials:', JSON.stringify(testimonials.slice(0,5), null, 2));
    console.log('properties:', JSON.stringify(properties.slice(0,5), null, 2));
  } catch (err) {
    console.error('Error checking Sanity content:', err);
    process.exit(1);
  }
}

check();
