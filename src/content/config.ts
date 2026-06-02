import { defineCollection, z } from 'astro:content';

const blogCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    author: z.string().default('Equipe Kora'),
    category: z.string().default('Geral'),
    image: z.string().optional(),
    tags: z.array(z.string()).default([]),
  }),
});

export const collections = {
  'blog': blogCollection,
};
