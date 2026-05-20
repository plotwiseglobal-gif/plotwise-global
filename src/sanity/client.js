import { createClient } from '@sanity/client';

const projectId = import.meta.env.VITE_SANITY_PROJECT_ID ?? 'wmd44msw';
const dataset = import.meta.env.VITE_SANITY_DATASET ?? 'production';
const apiVersion = import.meta.env.VITE_SANITY_API_VERSION ?? '2024-01-01';
const rawApiHost = import.meta.env.VITE_SANITY_API_HOST;
const defaultApiHost = `https://${projectId}.api.sanity.io`;

let apiHost = defaultApiHost;
if (typeof rawApiHost === 'string' && rawApiHost.length > 0) {
  if (rawApiHost.startsWith('http://') || rawApiHost.startsWith('https://')) {
    apiHost = rawApiHost;
  } else if (rawApiHost.startsWith('/') && typeof window !== 'undefined' && window.location.origin) {
    apiHost = `${window.location.origin}${rawApiHost}`;
  } else {
    apiHost = defaultApiHost;
  }
}

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  apiHost,
  useCdn: false,
  ignoreBrowserTokenWarning: true,
});

if (import.meta.env.DEV) {
  console.info('[Sanity Client] Using config:', {
    projectId,
    dataset,
    apiVersion,
    rawApiHost,
    apiHost,
    useCdn: false,
  });
  if (rawApiHost && rawApiHost !== apiHost) {
    console.warn('[Sanity Client] Transformed VITE_SANITY_API_HOST to a valid host:', rawApiHost, '=>', apiHost);
  }
}
