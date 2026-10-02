import type { Snippet } from "svelte";

export type AlertTone = "info" | "success" | "warning" | "danger";

export interface AlertProps {
  tone?: AlertTone;
  title: string;
  body?: string;
  toast?: boolean;
  action?: Snippet;
}
