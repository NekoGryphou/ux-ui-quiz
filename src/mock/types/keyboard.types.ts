import type { Snippet } from "svelte";

export interface KeyStop {
  id: string;
  label: string;
}

export interface KeyboardSandboxProps {
  stops: KeyStop[];
  children: Snippet;
}

export interface KeyTargetProps {
  id: string;
  inline?: boolean;
  children: Snippet;
}

export interface KeyboardContext {
  readonly focusedId: string | null;
}
