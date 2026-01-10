/** @type {import("prettier").Config} */
const config = {
    plugins: [
        "prettier-plugin-astro",
        "prettier-plugin-packagejson",
        "prettier-plugin-organize-imports",
        "prettier-plugin-astro-organize-imports",
        "prettier-plugin-tailwindcss",
    ],
    arrowParens: "always",
    bracketSpacing: true,
    printWidth: 120,
    semi: true,
    singleQuote: false,
    tabWidth: 4,
    trailingComma: "all",
    useTabs: false,
    tailwindStylesheet: "./src/styles/global.css",
    overrides: [
        {
            files: ["*.astro"],
            options: {
                parser: "astro",
            },
        },
        {
            files: ["*.md", "*.mdx"],
            options: {
                proseWrap: "always",
                printWidth: 80,
            },
        },
    ],
};

export default config;
