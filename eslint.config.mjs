import globals from "globals";
import pluginJs from "@eslint/js";
import pluginReact from "eslint-plugin-react";

/** @type {import('eslint').Linter.Config[]} */
export default [
  { files: ["**/*.{js,mjs,cjs,jsx}"] },
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        test: "readonly",
        reject: "readonly",
        expect: "readonly",
        require: "readonly",
        module: "readonly",
        __dirname: "readonly",
        exports: "readonly",
      },
    },
  },
  {
    plugins: {
      react: pluginReact,
    },
    settings: {
      react: {
        version: "detect", 
      },
    },
  },
  pluginJs.configs.recommended,
  pluginReact.configs.flat.recommended,
];
