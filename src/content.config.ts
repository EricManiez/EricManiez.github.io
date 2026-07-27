import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const projects = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    date: z.coerce.date(),
    tags: z.array(z.string()).default([]),
    cover: z.string().optional(),
    repo: z.string().url().optional(),
    url: z.string().url().optional(),
    featured: z.boolean().default(false),
    draft: z.boolean().default(false),
  }),
});

const music = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/music' }),
  schema: z.object({
    title: z.string(),
    years: z.string(),
    genre: z.string(),
    role: z.string(),
    order: z.number(),
    accent: z.string(),
    embed: z
      .object({
        provider: z.enum(['bandcamp', 'soundcloud', 'spotify', 'youtube']),
        url: z.string().url(),
        height: z.number().optional(),
      })
      .optional(),
    link: z
      .object({
        label: z.string(),
        url: z.string().url(),
      })
      .optional(),
    summary: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { projects, music };
