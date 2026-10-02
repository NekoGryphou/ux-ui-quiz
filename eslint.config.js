import js from "@eslint/js";
import prettier from "eslint-config-prettier";
import svelte from "eslint-plugin-svelte";
import globals from "globals";
import ts from "typescript-eslint";
import svelteConfig from "./svelte.config.js";

export default ts.config(
  { ignores: ["dist/", "node_modules/"] },
  js.configs.recommended,
  ts.configs.strictTypeChecked,
  ts.configs.stylisticTypeChecked,
  svelte.configs.recommended,
  prettier,
  svelte.configs.prettier,
  {
    languageOptions: {
      globals: { ...globals.browser },
      parserOptions: {
        projectService: { allowDefaultProject: ["vite.config.ts", "*.js"] },
        extraFileExtensions: [".svelte"],
        tsconfigRootDir: import.meta.dirname
      }
    }
  },
  {
    files: ["**/*.svelte", "**/*.svelte.ts"],
    languageOptions: {
      parserOptions: { parser: ts.parser, svelteConfig }
    }
  },
  {
    rules: {
      eqeqeq: "error",
      "no-console": "error",
      "@typescript-eslint/consistent-type-imports": "error",
      "@typescript-eslint/explicit-function-return-type": ["error", { allowExpressions: false }],
      "@typescript-eslint/explicit-module-boundary-types": "error",
      "@typescript-eslint/no-explicit-any": "error",
      "@typescript-eslint/prefer-readonly": "error",
      "@typescript-eslint/strict-boolean-expressions": [
        "error",
        { allowString: false, allowNumber: false, allowNullableObject: false }
      ],
      "@typescript-eslint/switch-exhaustiveness-check": "error",
      "@typescript-eslint/no-inferrable-types": "off",
      "@typescript-eslint/consistent-generic-constructors": ["error", "type-annotation"],
      "@typescript-eslint/typedef": [
        "error",
        {
          variableDeclaration: true,
          variableDeclarationIgnoreFunction: true,
          memberVariableDeclaration: true,
          propertyDeclaration: true,
          parameter: true,
          arrowParameter: false,
          arrayDestructuring: false,
          objectDestructuring: false
        }
      ]
    }
  },
  {
    files: ["scripts/**/*.ts"],
    languageOptions: { globals: { ...globals.node } },
    rules: { "no-console": "off" }
  },
  {
    files: ["**/*.js"],
    extends: [ts.configs.disableTypeChecked],
    languageOptions: { globals: { ...globals.node } }
  }
);
