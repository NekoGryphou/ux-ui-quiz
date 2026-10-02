export interface MetricProps {
  label: string;
  value: string;
  delta?: string;
  trend?: "up" | "down" | "flat";
  featured?: boolean;
}
