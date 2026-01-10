import { glob } from "astro/loaders";
import { defineCollection, z } from "astro:content";

const pages = defineCollection({
    loader: glob({ pattern: "**/*.md", base: "src/content/pages" }),
    schema: z.object({
        description: z.string().optional(),
        title: z.string(),
    }),
});

export const collections = {
    pages,
};
