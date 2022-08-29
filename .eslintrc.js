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
  plugins: ["jsx-a11y"],
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react/jsx-runtime"
  ],
  overrides: [
    {
      // Define the configuration for `.js/.jsx` file.
      files: ["*.js", "*.jsx"],
      extends: ["plugin:jsx-a11y/recommended"],
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
      parser: "astro-eslint-parser",
      extends: ["plugin:astro/recommended", "plugin:astro/jsx-a11y-strict"]
    }
  ]
}