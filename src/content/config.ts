import { defineCollection, z, reference } from 'astro:content';
import { glob, file } from 'astro/loaders';

const categories = defineCollection({
  loader: file("src/content/categories.json"),
  schema: z.object({
    id: z.string(),
    name: z.string(),
    icon: z.string(),
    description: z.string().optional(),
  }),
});

const services = defineCollection({
  loader: glob({ pattern: "**/*.json", base: "./src/content/services" }),
  schema: z.object({
    category: reference('categories'),
    items: z.array(z.object({
      feature: z.string(),
      aws: z.string(),
      azure: z.string(),
      gcp: z.string(),
      formerly: z.object({
        aws: z.string().optional(),
        azure: z.string().optional(),
        gcp: z.string().optional(),
      }).optional(),
    })),
  }),
});

export const collections = {
  categories,
  services,
};
