import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
	type: 'content',
	schema: z.object({
		title: z.string().optional(),
		publishDate: z.any().optional(),
		description: z.string().optional(),
		tags: z.array(z.string()).optional(),
		category: z.string().optional(),
		image: z.string().optional(),
	}),
});

const manuals = defineCollection({
	type: 'content',
});

const study = defineCollection({
	type: 'content',
	schema: z.object({
		title: z.string().optional(),
		publishDate: z.any().optional(),
		description: z.string().optional(),
		tags: z.array(z.string()).optional(),
		category: z.string().optional(),
		image: z.string().optional(),
		order: z.number().optional(),
	}),
});

export const collections = {
	'blog': blog,
	'manuals': manuals,
	'study': study,
};
