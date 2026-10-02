export type MarkShape = "circle" | "square" | "hex" | "leaf" | "spark";

export interface BrandMarkProps {
  name: string;
  size?: number;
}

export interface MarkStyle {
  shape: MarkShape;
  hue: number;
  initial: string;
}
