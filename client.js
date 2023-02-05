import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
  projectId: process.env.NEXT_PUBLIC_REACT_APP_SANITY_PROJECT_ID ,
  dataset: 'production',
  apiVersion: '2022-02-24',
  useCdn: false,
  token: process.env.NEXT_PUBLIC_REACT_APP_SANITY_TOKEN,
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);