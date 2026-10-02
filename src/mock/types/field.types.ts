import type { IconName } from "../../components/types/icons.types";

export interface FieldProps {
  label?: string;
  value?: string;
  placeholder?: string;
  type?: "text" | "password" | "select" | "textarea";
  state?: "default" | "focus" | "error" | "success" | "disabled";
  icon?: IconName;
  required?: boolean;
  hint?: string;
  message?: string;
}
