import { fileURLToPath, URL } from "node:url";
import { svelte } from "@sveltejs/vite-plugin-svelte";
import { defineConfig, loadEnv } from "vite";
import { portFrom } from "./scripts/utils/env.utils.ts";

export default defineConfig(({ command, mode, isPreview }) => ({
  base: "./",
  server:
    command === "serve" && isPreview !== true
      ? { port: portFrom({ DEV_PORT: "4201", ...loadEnv(mode, process.cwd(), "") }, "DEV_PORT"), strictPort: true }
      : undefined,
  plugins: [svelte()],
  optimizeDeps: {
    include: [
      "shiki/core",
      "shiki/engine/javascript",
      "shiki/langs/css.mjs",
      "shiki/langs/html.mjs",
      "shiki/langs/javascript.mjs",
      "shiki/themes/one-dark-pro.mjs"
    ]
  },
  resolve: {
    alias: {
      $styles: fileURLToPath(new URL("./src/styles", import.meta.url))
    }
  },
  build: {
    rolldownOptions: {
      output: {
        entryFileNames: "assets/[hash].js",
        chunkFileNames: "assets/[hash].js",
        assetFileNames: "assets/[hash][extname]"
      }
    }
  }
}));
