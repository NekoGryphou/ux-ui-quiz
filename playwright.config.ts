import { existsSync } from "node:fs";
import { defineConfig, devices } from "@playwright/test";
import { portFrom } from "./scripts/utils/env.utils.ts";

for (const file of [".env.local", ".env"]) if (existsSync(file)) process.loadEnvFile(file);

/**
 * @private
 * @desc Port of the dev server started for the browser tests, from E2E_PORT.
 */
const PORT: number = portFrom(process.env, "E2E_PORT");

// used by playwright test
// noinspection JSUnusedGlobalSymbols
export default defineConfig({
  testDir: "e2e",
  testMatch: "**/*.e2e.ts",
  fullyParallel: true,
  forbidOnly: process.env["CI"] !== undefined,
  reporter: "list",
  use: { baseURL: `http://localhost:${String(PORT)}`, trace: "retain-on-failure" },
  projects: [{ name: "chromium", use: { ...devices["Desktop Chrome"] } }],
  webServer: {
    command: `pnpm exec vite --port ${String(PORT)} --strictPort`,
    url: `http://localhost:${String(PORT)}`,
    reuseExistingServer: false
  }
});
