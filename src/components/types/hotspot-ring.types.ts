import type { IconName } from "./icons.types";

export type RingState = "hover" | "selected" | "correct" | "wrong" | "missed";

export type RingTone = "hover" | "select" | "correct" | "wrong";

export type RingLine = "solid" | "dashed";

export type RingSurface = "light" | "dark";

export interface RingStyle {
  tone: RingTone;
  line: RingLine;
  plate: boolean;
  tag: IconName | null;
}

export interface RingGeometry {
  left: number;
  top: number;
  width: number;
  height: number;
  radii: number[];
  surface: RingSurface;
}

export interface RingItem {
  id: string;
  geometry: RingGeometry;
}

export interface HotspotRingProps {
  geometry: RingGeometry;
  state: RingState | null;
  focused: boolean;
}
