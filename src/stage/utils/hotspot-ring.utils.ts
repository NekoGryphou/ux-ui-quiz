import type { ChoiceOutcome } from "../../engine/types/quiz.types";
import {
  CORNER_TOLERANCE,
  RING_CORNER_PROPERTIES,
  RING_CORNER_TUCK,
  RING_GAP,
  RING_LINE,
  RING_RIM,
  RING_SURFACE_PROPERTY
} from "../const/hotspot-ring.const";
import type { Corners, RingGeometry, RingItem, RingState, RingSurface } from "../types/hotspot-ring.types";

/**
 * @export
 * @desc Maps each of four corner values.
 *
 * @template T - Input value type.
 * @template U - Output value type.
 *
 * @param corners - Corner values.
 * @param map - Mapper receiving value and corner index.
 *
 * @returns Mapped corners.
 */
export const mapCorners = <T, U>(corners: Corners<T>, map: (value: T, corner: number) => U): Corners<U> => [
  map(corners[0], 0),
  map(corners[1], 1),
  map(corners[2], 2),
  map(corners[3], 3)
];

/**
 * @private
 * @desc Whether two edges align within {@link CORNER_TOLERANCE}.
 *
 * @param a - First coordinate.
 * @param b - Second coordinate.
 *
 * @returns True if aligned.
 */
const near = (a: number, b: number): boolean => Math.abs(a - b) <= CORNER_TOLERANCE;

/**
 * @private
 * @desc Background brightness declared through {@link RING_SURFACE_PROPERTY}.
 *
 * @param element - Hotspot element.
 *
 * @returns Dark if declared, else light.
 */
const surfaceOf = (element: Element): RingSurface =>
  getComputedStyle(element).getPropertyValue(RING_SURFACE_PROPERTY).trim() === "dark" ? "dark" : "light";

/**
 * @private
 * @desc First rendered child of an element, skipping display contents wrappers.
 *
 * @param element - Container element.
 *
 * @returns Visible root, or the element itself.
 */
const visibleRoot = (element: Element): Element => {
  const child: Element | null = element.firstElementChild;
  if (child === null) return element;
  return getComputedStyle(child).display === "contents" ? visibleRoot(child) : child;
};

/**
 * @private
 * @desc Computed border radii of an element.
 *
 * @param element - Element to read.
 *
 * @returns Radii in pixels, 0 when unparsable.
 */
const cornerRadii = (element: Element): Corners<number> => {
  const style: CSSStyleDeclaration = getComputedStyle(element);
  return mapCorners(RING_CORNER_PROPERTIES, (property: string): number => {
    const value: number = Number.parseFloat(style.getPropertyValue(property));
    return Number.isNaN(value) ? 0 : value;
  });
};

/**
 * @private
 * @desc Which corners of a rect sit on the matching viewport corners.
 *
 * @param rect - Hotspot box.
 * @param viewport - Preview root box.
 *
 * @returns Per-corner flags.
 */
const sharedCorners = (rect: DOMRect, viewport: DOMRect): Corners<boolean> => [
  near(rect.top, viewport.top) && near(rect.left, viewport.left),
  near(rect.top, viewport.top) && near(rect.right, viewport.right),
  near(rect.bottom, viewport.bottom) && near(rect.right, viewport.right),
  near(rect.bottom, viewport.bottom) && near(rect.left, viewport.left)
];

/**
 * @private
 * @desc Visible corner radii of a hotspot, widened to the preview root's clipping on shared corners.
 *
 * @param element - Hotspot element.
 * @param viewport - Preview root element.
 *
 * @returns Radii in pixels.
 */
const visibleRadii = (element: HTMLElement, viewport: Element): Corners<number> => {
  const own: Corners<number> = cornerRadii(element.firstElementChild ?? element);
  const clip: Corners<number> = cornerRadii(viewport);
  const shared: Corners<boolean> = sharedCorners(element.getBoundingClientRect(), viewport.getBoundingClientRect());
  return mapCorners(own, (radius: number, corner: number): number =>
    shared[corner] === true ? Math.max(radius, clip[corner] ?? 0) : radius
  );
};

/**
 * @export
 * @desc Radius of the ring stroke inside its outer rim.
 *
 * @param outer - Outer radius.
 *
 * @returns Inner radius, never negative.
 */
export const lineRadius = (outer: number): number => Math.max(0, outer - RING_RIM);

/**
 * @export
 * @desc Ring state of a hotspot; a scored outcome wins over selection and hover.
 *
 * @param outcome - Scored outcome.
 * @param selected - Whether selected.
 * @param hovered - Whether hovered.
 *
 * @returns Ring state, or null when hidden.
 */
export const ringState = (outcome: ChoiceOutcome, selected: boolean, hovered: boolean): RingState | null => {
  if (outcome !== "neutral") return outcome;
  if (selected) return "selected";
  if (hovered) return "hover";
  return null;
};

/**
 * @private
 * @desc Ring geometry around a hotspot, in the frame's unscaled pixels.
 *
 * @param frame - Preview frame element.
 * @param element - Hotspot element.
 *
 * @returns Ring geometry.
 */
const measureRing = (frame: HTMLElement, element: HTMLElement): RingGeometry => {
  const box: DOMRect = frame.getBoundingClientRect();
  const scale: number = frame.offsetWidth > 0 ? box.width / frame.offsetWidth : 1;
  const rect: DOMRect = element.getBoundingClientRect();
  return {
    left: (rect.left - box.left) / scale - RING_GAP,
    top: (rect.top - box.top) / scale - RING_GAP,
    width: rect.width / scale + RING_GAP * 2,
    height: rect.height / scale + RING_GAP * 2,
    radii: mapCorners(
      visibleRadii(element, visibleRoot(frame)),
      (radius: number): number => radius + RING_CORNER_TUCK + RING_GAP
    ),
    surface: surfaceOf(element)
  };
};

/**
 * @export
 * @desc Ring geometries of all hotspots in a frame.
 *
 * @param frame - Preview frame element.
 * @param targets - Hotspot id and element pairs.
 *
 * @returns One ring per target.
 */
export const measureRings = (frame: HTMLElement, targets: readonly (readonly [string, HTMLElement])[]): RingItem[] =>
  targets.map(([id, element]): RingItem => ({ id, geometry: measureRing(frame, element) }));

/**
 * @export
 * @desc CSS border-radius value from four radii.
 *
 * @param values - Radii in pixels.
 *
 * @returns Space-separated pixel list.
 */
export const cornerList = (values: Corners<number>): string =>
  values.map((value: number): string => `${String(value)}px`).join(" ");

/**
 * @export
 * @desc Inset that centers the ring tag on a rounded corner's stroke.
 *
 * @param outer - Outer corner radius.
 *
 * @returns Inset in pixels.
 */
export const tagInset = (outer: number): number => {
  const offset: number = RING_RIM + RING_LINE / 2;
  return offset + Math.max(0, outer - offset) * (1 - Math.SQRT1_2);
};
