import { defineCollection, z } from 'astro:content';

export const collections = {
	work: defineCollection({
		schema: z.object({
			title: z.string(),
			description: z.string(),
			publishDate: z.coerce.date(),
			tags: z.array(z.string()),
			img: z.string(),
			img_alt: z.string().optional(),
			category: z.enum(['Personal', 'Work']),
			status: z.enum(['live', 'archived', 'in_development']).default('live'),
			project_url: z.string().url().optional(),
			github_url: z.string().url().optional(),
			demo_url: z.string().url().optional(),
		}),
	}),
};
