import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";

export default [
  { languageOptions: { globals: globals.node } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  {
    rules: {
      "no-console": "warn", // Example: Warn on console statements
      "quotes": ["error", "double"], // Example: Enforce double quotes
      "@typescript-eslint/no-unused-vars": ["error", { "argsIgnorePattern": "^_" }], // Example: TypeScript rule
      // Add more rules here
    },
  },
];
