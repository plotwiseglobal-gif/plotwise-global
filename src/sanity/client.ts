import { createClient } from '@sanity/client';

const projectId = String(import.meta.env.VITE_SANITY_PROJECT_ID ?? '').trim();
const dataset = String(import.meta.env.VITE_SANITY_DATASET ?? 'production').trim();
const apiVersion = String(import.meta.env.VITE_SANITY_API_VERSION ?? '2025-01-01').trim();
const useCdn = import.meta.env.VITE_SANITY_USE_CDN === 'true' || false;

if (import.meta.env.DEV) {
  if (!projectId) console.warn('[Sanity Client] VITE_SANITY_PROJECT_ID is not set.');
  if (!dataset) console.warn('[Sanity Client] VITE_SANITY_DATASET is not set.');
}

export const client = createClient({
  projectId: projectId || 'wmd44msw',
  dataset: dataset || 'production',
  apiVersion: apiVersion || '2025-01-01',
  useCdn: useCdn === true ? true : false,
});

if (import.meta.env.DEV) {
  console.info('[Sanity Client] Using config:', {
    projectId: projectId || 'wmd44msw',
    dataset: dataset || 'production',
    apiVersion: apiVersion || '2025-01-01',
    useCdn: useCdn,
  });
}
