import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const music = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/music' }),
  schema: ({ image }) => z.object({
    title: z.string(),
    years: z.string(),
    genre: z.string(),
    role: z.string(),
    order: z.number(),
    accent: z.string(),
    tags: z.array(z.string()).optional(),
    cover: image().optional(),
    coverAlt: z.string().optional(),
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
  schema: ({ image }) => z.object({
    title: z.string(),
    years: z.string(),
    category: z.string(),
    format: z.string(),
    order: z.number(),
    accent: z.string(),
    inProgress: z.boolean().default(false),
    tags: z.array(z.string()).optional(),
    cover: image().optional(),
    coverAlt: z.string().optional(),
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
  schema: ({ image }) => z.object({
    title: z.string(),
    years: z.string(),
    category: z.string(),
    role: z.string(),
    order: z.number(),
    accent: z.string(),
    ongoing: z.boolean().default(false),
    stack: z.array(z.string()).optional(),
    cover: image().optional(),
    coverAlt: z.string().optional(),
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
  schema: ({ image }) => z.object({
    title: z.string(),
    years: z.string(),
    category: z.string(),
    role: z.string(),
    order: z.number(),
    accent: z.string(),
    ongoing: z.boolean().default(false),
    tags: z.array(z.string()).optional(),
    cover: image().optional(),
    coverAlt: z.string().optional(),
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

const teaching = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/teaching' }),
  schema: ({ image }) => z.object({
    title: z.string(),
    meta1: z.string(),
    meta2: z.string(),
    role: z.string(),
    order: z.number(),
    accent: z.string(),
    tags: z.array(z.string()).optional(),
    cover: image().optional(),
    coverAlt: z.string().optional(),
    summary: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { music, oddities, engineering, sports, teaching };
