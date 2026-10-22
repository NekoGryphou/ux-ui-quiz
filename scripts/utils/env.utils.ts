import type { EnvVars } from "../types/env.types.ts";

/**
 * @export
 * @desc Reads a TCP port from the environment.
 *
 * @param env - Environment variables.
 * @param key - Variable name.
 *
 * @returns The port number. Throws when the variable is missing or not a valid port.
 */
export const portFrom = (env: EnvVars, key: string): number => {
  const port: number = Number(env[key]);
  if (!Number.isInteger(port) || port < 1 || port > 65535)
    throw new Error(`${key} must be a port number, set it in .env.`);
  return port;
};
