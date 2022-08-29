module.exports = {
  ignorePatterns: ["dist", "scripts", "cypress"],
  parserOptions: {
    sourceType: "module",
    ecmaVersion: 2020,
    ecmaFeatures: {
      jsx: true
    }
  },
  globals: {
    dataLayer: true
  },
  env: {
    browser: true,
    node: true,
    es6: true
  },
  settings: {
    react: {
      version: "detect"
    }
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
    "plugin:astro/recommended"
  ],
  overrides: [
    {
      // Define the configuration for `.js/.jsx` file.
      files: ["*.js", "*.jsx"],
      rules: {
        "react/jsx-sort-props": [
          1,
          {
            reservedFirst: true,
            shorthandFirst: true,
            callbacksLast: true,
            multiline: "last"
          }
        ]
      }
    },
    {
      // Define the configuration for `.astro` file.
      files: ["*.astro"],
      parser: "astro-eslint-parser"
    }
  ]
}
