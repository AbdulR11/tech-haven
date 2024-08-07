module.exports = {
  root: true,
  extends: ["plugin:@next/next/recommended", "@payloadcms"],
  ignorePatterns: ["**"],
  plugins: ["prettier"],
  rules: {
    "prettier/prettier": [
      "error",
      {
        endOfLine: "auto",
      },
    ],
    "no-console": "off",
  },
};