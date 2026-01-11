// @ts-check
import mdx from "@astrojs/mdx";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";
import browserslist from "browserslist";
import { browserslistToTargets } from "lightningcss";

// https://astro.build/config
export default defineConfig({
    site: import.meta.env.PROD ? "https://tove.dog" : "http://localhost:4321",
    trailingSlash: "always",
    output: "static",
    compressHTML: import.meta.env.PROD,
    vite: {
        plugins: [tailwindcss()],
        css: {
            transformer: "lightningcss",
            lightningcss: {
                targets: browserslistToTargets(browserslist(">= 0.01%, last 2 versions, Firefox ESR, not dead")),
            },
        },
        build: {
            cssMinify: "lightningcss",
        },
    },
    build: {
        format: "directory",
        assets: "_assets",
    },
    integrations: [mdx()],
});
