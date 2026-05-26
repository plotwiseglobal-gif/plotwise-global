import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

const projectId = import.meta.env.VITE_SANITY_PROJECT_ID;
const dataset = import.meta.env.VITE_SANITY_DATASET;
const apiVersion = import.meta.env.VITE_SANITY_API_VERSION;

if (import.meta.env.DEV) {
  if (!projectId) console.warn('[Sanity] VITE_SANITY_PROJECT_ID is not set');
  if (!dataset) console.warn('[Sanity] VITE_SANITY_DATASET is not set');
}

export const client = createClient({
  projectId: projectId,
  dataset: dataset,
  apiVersion: apiVersion,
  useCdn: false,
});

export const urlFor = (source: any) => {
  if (!source) return null;
  const builder = imageUrlBuilder(client);
  return builder.image(source);
};

export default client;
