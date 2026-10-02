import type { IconName } from "./icons.types";

export interface IconButtonProps {
  icon: IconName;
  label: string;
  variant?: "outline" | "ghost";
  onclick: (event: MouseEvent & { currentTarget: HTMLButtonElement }) => void;
}
