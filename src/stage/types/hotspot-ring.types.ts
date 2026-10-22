import type { IconName } from "../../components/types/icons.types";

/**
 * @export
 * @desc Visible state of a hotspot ring.
 */
export type RingState = "hover" | "selected" | "correct" | "wrong" | "missed";

/**
 * @export
 * @desc Color tone of a ring.
 */
export type RingTone = "hover" | "select" | "correct" | "wrong";

/**
 * @export
 * @desc Stroke style of a ring.
 */
export type RingLine = "solid" | "dashed";

/**
 * @export
 * @desc Background brightness under a ring.
 */
export type RingSurface = "light" | "dark";

/**
 * @export
 * @desc Four per-corner values, clockwise from top-left.
 *
 * @template T - Value type.
 */
export type Corners<T> = readonly [T, T, T, T];

/**
 * @export
 * @desc Look of a ring for one {@link RingState}.
 *
 * @property tone - Color tone.
 * @property line - Stroke style.
 * @property plate - Whether a backing band is drawn.
 * @property tag - Corner icon, or null.
 */
export interface RingStyle {
  /** Color tone. */
  tone: RingTone;

  /** Stroke style. */
  line: RingLine;

  /** Whether a backing band is drawn. */
  plate: boolean;

  /** Corner icon, or null. */
  tag: IconName | null;
}

/**
 * @export
 * @desc Position, size and corners of a ring, in unscaled frame pixels.
 *
 * @property left - Left offset.
 * @property top - Top offset.
 * @property width - Outer width.
 * @property height - Outer height.
 * @property radii - Outer corner radii.
 * @property surface - Background brightness.
 */
export interface RingGeometry {
  /** Left offset. */
  left: number;

  /** Top offset. */
  top: number;

  /** Outer width. */
  width: number;

  /** Outer height. */
  height: number;

  /** Outer corner radii. */
  radii: Corners<number>;

  /** Background brightness. */
  surface: RingSurface;
}

/**
 * @export
 * @desc Measured ring of one hotspot.
 *
 * @property id - Hotspot id.
 * @property geometry - Ring geometry.
 */
export interface RingItem {
  /** Hotspot id. */
  id: string;

  /** Ring geometry. */
  geometry: RingGeometry;
}

/**
 * @export
 * @desc Props of a hotspot ring.
 *
 * @property geometry - Ring geometry.
 * @property state - Visible state, or null when hidden.
 * @property focused - Whether the hotspot has keyboard focus.
 */
export interface HotspotRingProps {
  /** Ring geometry. */
  geometry: RingGeometry;

  /** Visible state, or null when hidden. */
  state: RingState | null;

  /** Whether the hotspot has keyboard focus. */
  focused: boolean;
}
