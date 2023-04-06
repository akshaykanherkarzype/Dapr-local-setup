module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
  },
  extends: ["eslint:recommended", "standard-with-typescript"],
  overrides: [],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    project: ["./tsconfig.json"],
  },
  rules: {
    "consistent-return": 2,
    indent: [1, 2],
    "no-else-return": 1,
    "space-unary-ops": 2,
    "@typescript-eslint/no-var-requires": 0,
  },
};
