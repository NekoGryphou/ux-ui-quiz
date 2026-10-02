import type { IconName } from "../../components/types/icons.types";
import type { Snippet } from "svelte";

export interface EmptyStateProps {
  icon?: IconName;
  title: string;
  body?: string;
  children?: Snippet;
}
