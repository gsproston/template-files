/* eslint-env node */
module.exports = {
  extends: [
    'eslint:recommended', 
    'plugin:@typescript-eslint/recommended-type-checked',
    'plugin:@typescript-eslint/stylistic-type-checked',
    'plugin:@typescript-eslint/strict-type-checked',
    'prettier',
  ],
  plugins: ['@typescript-eslint'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: true,
    tsconfigRootDir: __dirname,
  },
  root: true,
  ignorePatterns: ["dist/*", "node_modules/*"],
  rules: {
    "@typescript-eslint/init-declarations": "error",
    "@typescript-eslint/no-misused-promises": [
      "error",
      {
        "checksVoidReturn": false,
      },
    ],

    "comma-dangle": ["error", "always-multiline"],
    "prefer-template": "error",
  },
};
