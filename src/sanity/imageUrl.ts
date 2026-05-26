import imageUrlBuilder from '@sanity/image-url';
import { client } from '@/lib/sanity';

const builder = imageUrlBuilder(client);

export const urlFor = (source: any) => {
  if (!source) return null;
  return builder.image(source);
};

export default urlFor;
