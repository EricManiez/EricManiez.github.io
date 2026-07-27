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
        provider: z.enum(['bandcamp', 'soundcloud', 'spotify', 'youtube', 'googledrive']),
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

const oddities = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/oddities' }),
  schema: z.object({
    title: z.string(),
    years: z.string(),
    category: z.string(),
    format: z.string(),
    order: z.number(),
    accent: z.string(),
    inProgress: z.boolean().default(false),
    embed: z
      .object({
        provider: z.enum(['bandcamp', 'soundcloud', 'spotify', 'youtube', 'googledrive']),
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

const engineering = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/engineering' }),
  schema: z.object({
    title: z.string(),
    years: z.string(),
    category: z.string(),
    role: z.string(),
    order: z.number(),
    accent: z.string(),
    ongoing: z.boolean().default(false),
    stack: z.array(z.string()).optional(),
    embed: z
      .object({
        provider: z.enum(['bandcamp', 'soundcloud', 'spotify', 'youtube', 'googledrive']),
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

const sports = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/sports' }),
  schema: z.object({
    title: z.string(),
    years: z.string(),
    category: z.string(),
    role: z.string(),
    order: z.number(),
    accent: z.string(),
    ongoing: z.boolean().default(false),
    tags: z.array(z.string()).optional(),
    embed: z
      .object({
        provider: z.enum(['bandcamp', 'soundcloud', 'spotify', 'youtube', 'googledrive']),
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

export const collections = { projects, music, oddities, engineering, sports };
