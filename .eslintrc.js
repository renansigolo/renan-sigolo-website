/** @type {import('eslint').Linter.Config} */
module.exports = {
  ignorePatterns: [
    "dist",
    "scripts",
    "cypress",
    "env.d.ts",
    "node_modules",
    "package-lock.json",
    "package.json"
  ],
  parserOptions: {
    sourceType: "module",
    ecmaVersion: 2020,
    ecmaFeatures: {
      jsx: true
    }
  },
  env: {
    browser: true,
    es2020: true
  },
  extends: ["plugin:astro/recommended"],
  overrides: [
    {
      // Define the configuration for `.astro` file.
      files: ["*.astro"],
      parser: "astro-eslint-parser",
      parserOptions: {
        parser: "@typescript-eslint/parser",
        extraFileExtensions: [".astro"]
      },
      extends: ["plugin:astro/recommended"]
    }
  ]
}
