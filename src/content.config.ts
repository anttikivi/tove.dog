import { glob } from "astro/loaders";
import { defineCollection, z } from "astro:content";

const docs = defineCollection({
    loader: glob({ pattern: "**/*.md?(x)", base: "src/content/docs" }),
    schema: z.object({
        title: z.string(),
    }),
});

const pages = defineCollection({
    loader: glob({ pattern: "**/*.md?(x)", base: "src/content/pages" }),
    schema: z.object({
        description: z.string().optional(),
        title: z.string(),
    }),
});

export const collections = {
    docs,
    pages,
};
