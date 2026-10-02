import type { IconName } from "../../components/types/icons.types";
import type { AlertTone } from "../types/alert.types";

export const ALERT_ICONS: Record<AlertTone, IconName> = {
  info: "info",
  success: "check",
  warning: "alert-triangle",
  danger: "alert-triangle"
};
