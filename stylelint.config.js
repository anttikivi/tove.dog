/** @type {import("stylelint").Config} */
export default {
    extends: ["stylelint-config-standard", "stylelint-config-html"],
    rules: {
        "at-rule-no-unknown": [
            true,
            {
                ignoreAtRules: ["theme", "source", "utility", "variant", "custom-variant", "apply", "reference"],
            },
        ],
        "color-hex-length": "long",
        "custom-property-pattern": null,
        "custom-property-empty-line-before": null,
        "declaration-property-value-no-unknown": [
            true,
            {
                ignoreProperties: {
                    "/.+/": ["/^--spacing\\(.+\\)/"],
                },
            },
        ],
        "import-notation": null,
    },
};
