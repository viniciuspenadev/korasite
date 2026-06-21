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
    ogImage: z.string().optional(), // capa do link (OG) — use JPG/PNG p/ máxima compatibilidade (WhatsApp)
    tags: z.array(z.string()).default([]),
  }),
});

export const collections = {
  'blog': blogCollection,
};
