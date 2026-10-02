import type { Snippet } from "svelte";

export type CodeTokenKind = "tag" | "attr" | "value" | "punct" | "text";

export interface CodeToken {
  kind: CodeTokenKind;
  text: string;
}

export interface CodeEditorProps {
  filename: string;
  compact?: boolean;
  children: Snippet;
}

export interface CodeLinesProps {
  code: string;
  start: number;
}
