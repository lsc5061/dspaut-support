import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const manuals = defineCollection({
  // 최신 Astro 6 방식: glob 로더를 사용하여 마크다운 파일을 불러옵니다.
  loader: glob({ pattern: "**/*.md", base: "./src/content/manuals" }),
  schema: z.object({
    title: z.string().optional(),
    description: z.string().optional(),
    publishDate: z.coerce.date().optional(),
    author: z.string().optional(),
    image: z.string().optional(),
    category: z.string().optional(),
  }),
});

const blog = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/blog" }),
  schema: z.object({
    title: z.string(),
    publishDate: z.coerce.date(),
    description: z.string().optional(),
    tags: z.array(z.string()).optional(),
    category: z.string().optional(),
    image: z.string().optional(),
  }),
});

const study = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/study" }),
  schema: z.object({
    title: z.string(),
    publishDate: z.coerce.date().optional(),
    description: z.string().optional(),
    tags: z.array(z.string()).optional(),
    category: z.string().optional(),
    image: z.string().optional(),
    order: z.number().optional(),
  }),
});

export const collections = { manuals, blog, study };

