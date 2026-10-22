// noinspection NpmUsedModulesInstalled
import js from "@eslint/js";
import { defineConfig } from "eslint/config";
import prettier from "eslint-config-prettier";
import jsdoc from "eslint-plugin-jsdoc";
import simpleImportSort from "eslint-plugin-simple-import-sort";
// noinspection NpmUsedModulesInstalled
import svelte from "eslint-plugin-svelte";
import globals from "globals";
// noinspection NpmUsedModulesInstalled
import ts from "typescript-eslint";
import svelteConfig from "./svelte.config.js";

// noinspection JSCheckFunctionSignatures
export default defineConfig(
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
    plugins: { "simple-import-sort": simpleImportSort },
    rules: {
      eqeqeq: "error",
      "simple-import-sort/imports": ["error", { groups: [["^\\u0000", "^node:", "^@?\\w", "^\\.\\./", "^\\./"]] }],
      "@typescript-eslint/member-ordering": [
        "error",
        {
          default: ["field", "constructor", ["get", "set"], "public-method", "protected-method", "private-method"]
        }
      ],
      "no-console": "error",
      "@typescript-eslint/consistent-type-imports": "error",
      "@typescript-eslint/explicit-function-return-type": ["error", { allowExpressions: false }],
      "@typescript-eslint/explicit-module-boundary-types": "error",
      "@typescript-eslint/explicit-member-accessibility": ["error", { accessibility: "explicit" }],
      "no-restricted-syntax": [
        "error",
        {
          selector: "PrivateIdentifier",
          message: "Use the TypeScript private modifier instead of an ECMAScript #private member."
        }
      ],
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
    files: ["src/**/*.ts", "src/**/*.svelte", "scripts/**/*.ts", "e2e/**/*.ts"],
    ignores: ["**/tests/**", "e2e/*.e2e.ts", "src/quizzes/meta/**", "src/mock/index.ts"],
    plugins: { jsdoc },
    settings: { jsdoc: { mode: "typescript", tagNamePreference: { description: "desc", returns: "returns" } } },
    rules: {
      "jsdoc/require-jsdoc": [
        "error",
        {
          publicOnly: false,
          require: { ClassDeclaration: true, FunctionDeclaration: true, MethodDefinition: true },
          contexts: [
            "TSInterfaceDeclaration",
            "TSTypeAliasDeclaration",
            "TSInterfaceBody > TSPropertySignature",
            "TSTypeAliasDeclaration > TSTypeLiteral > TSPropertySignature",
            "PropertyDefinition",
            "Program > VariableDeclaration",
            "Program > ExportNamedDeclaration[declaration.type='VariableDeclaration']"
          ],
          checkConstructors: true,
          checkGetters: true
        }
      ],
      "jsdoc/check-tag-names": ["error", { definedTags: ["desc", "export"] }],
      "jsdoc/check-access": "error",
      "jsdoc/check-param-names": ["error", { checkDestructured: false }],
      "jsdoc/require-param": ["error", { checkDestructured: false }],
      "jsdoc/require-param-description": "error",
      "jsdoc/require-hyphen-before-param-description": ["error", "always"],
      "jsdoc/require-returns": ["error", { checkGetters: false }],
      "jsdoc/require-returns-description": "error",
      "jsdoc/require-description": ["error", { descriptionStyle: "tag" }],
      "jsdoc/no-types": "error",
      "jsdoc/no-blank-blocks": "error",
      "jsdoc/sort-tags": [
        "error",
        {
          linesBetween: 1,
          tagSequence: [
            { tags: ["public", "private", "export", "desc"] },
            { tags: ["template"] },
            { tags: ["param"] },
            { tags: ["property"] },
            { tags: ["returns"] },
            { tags: ["example"] }
          ]
        }
      ]
    }
  },
  {
    files: ["src/**/*.svelte"],
    rules: {
      "jsdoc/require-jsdoc": [
        "error",
        {
          publicOnly: false,
          require: { FunctionDeclaration: true },
          contexts: ["VariableDeclaration > VariableDeclarator > ArrowFunctionExpression"]
        }
      ]
    }
  },
  {
    files: ["src/engine/**/*.ts"],
    ignores: ["src/engine/tests/**"],
    rules: {
      "no-restricted-imports": [
        "error",
        {
          patterns: [
            {
              group: [
                "**/app/**",
                "**/components/**",
                "**/stage/**",
                "**/screens/**",
                "**/mock/**",
                "**/quizzes",
                "**/quizzes/**"
              ],
              message: "The engine must not depend on UI or content; inject what it needs from src/app/session.ts."
            }
          ]
        }
      ]
    }
  },
  {
    files: ["src/components/**/*.ts", "src/components/**/*.svelte"],
    ignores: ["src/components/tests/**"],
    rules: {
      "no-restricted-imports": [
        "error",
        {
          patterns: [
            {
              group: [
                "**/app/**",
                "**/stage/**",
                "**/screens/**",
                "**/mock/**",
                "**/quizzes",
                "**/quizzes/**",
                "**/engine/session.svelte",
                "**/engine/run.svelte"
              ],
              message:
                "Shared components must not depend on app state, screens or content; pass what they need as props."
            }
          ]
        }
      ]
    }
  },
  {
    files: ["src/shared/**/*.ts"],
    rules: {
      "no-restricted-imports": [
        "error",
        {
          patterns: [
            {
              group: [
                "**/app/**",
                "**/components/**",
                "**/stage/**",
                "**/engine/**",
                "**/screens/**",
                "**/mock/**",
                "**/quizzes/**"
              ],
              message: "Shared helpers must not depend on application modules."
            }
          ]
        }
      ]
    }
  },
  {
    files: ["src/mock/**/*.ts", "src/mock/**/*.svelte", "src/quizzes/**/*.ts", "src/quizzes/**/*.svelte"],
    rules: {
      "no-restricted-imports": [
        "error",
        {
          patterns: [
            {
              group: ["**/app/session", "**/engine/session.svelte", "**/engine/run.svelte", "**/app/router.svelte"],
              message: "Previews must not reach into session or routing state."
            }
          ]
        }
      ]
    }
  },
  {
    files: ["e2e/**/*.ts", "playwright.config.ts", "knip.ts"],
    languageOptions: { globals: { ...globals.node } }
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
