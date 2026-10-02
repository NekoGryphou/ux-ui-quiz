import type { Snippet } from "svelte";

export interface ModalProps {
  title: string;
  closable?: boolean;
  floating?: boolean;
  children?: Snippet;
  actions?: Snippet;
}
