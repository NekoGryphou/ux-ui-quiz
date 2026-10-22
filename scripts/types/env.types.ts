/**
 * @export
 * @desc Environment variables keyed by name, as returned by Vite's loadEnv or Node's process.env.
 */
export type EnvVars = Readonly<Record<string, string | undefined>>;
