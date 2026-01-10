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
    },
};
