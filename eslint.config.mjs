import eslintPluginAstro from "eslint-plugin-astro";

export default [
  {
    ignores: [
      "**/dist",
      "**/scripts",
      "**/cypress",
      "**/env.d.ts",
      "**/node_modules",
      "**/package-lock.json",
      "**/package.json",
    ],
  },
  ...eslintPluginAstro.configs.recommended,
];
