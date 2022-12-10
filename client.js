import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = sanityClient({
  projectId: 'qasqfzl0',
  dataset: "production",
  apiVersion: "2022-02-24",
  useCdn: true,
  token:
    'sktdfnuEBImTJ1Y9NJLizmB7uYCFG6PiWc7wS204DSZPMzDuHH255DKLCmEuqJ0QxZGFKL0tiHcOa7m2aJkb0OIzOvhgZTGSpw9bYpvxyrbZcFoRdnzfvM0Bo7EZnefIn3oJ0WyxiTJ9az4h3GD2z32Cj54xzGaFJI8HM5He9O0dytsB2a94',
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
