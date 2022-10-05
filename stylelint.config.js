/** @type {import('stylelint').Config} */
module.exports = {
  extends: [
    "stylelint-config-recommended-scss",
    "stylelint-config-sass-guidelines",
    "stylelint-config-prettier"
  ],
  defaultSeverity: "error",
  customSyntax: "postcss-html"
}
