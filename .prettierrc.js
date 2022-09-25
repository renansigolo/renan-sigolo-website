/** @type {import('prettier').Config} */
module.exports = {
  overrides: [
    {
      files: ["*.html"],
      options: {
        parser: "go-template",
      },
    },
  ],
};
