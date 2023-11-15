/** @type {import("eslint").Linter.Config} */
const config = {
  extends: ["@next/eslint-plugin-next/recommended"],
  rules: {
    "@next/next/no-html-link-for-pages": "off",
  },
};

module.exports = config;
