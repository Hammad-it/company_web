import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
  projectId: 'nd3ybggt',
  dataset: 'production',
  apiVersion: '2022-02-01',
  useCdn: true,
  token: 'skSzC2zKlgLR8hV9gTzTTD9MrOZZXiECywFkJ25emHDTL3hOcuVAEMnYJzmrgkXjwGxv1XQeRoqBHgmbMIGW5JGr2T1eC3vpTenKzt1BjvuWvVQaNbZNTDS1olrhX2laOW0xl3c0bezZxFbhySQUio3ClA4HF33jNo9nbARQWW0XUhT7Y41l',
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
