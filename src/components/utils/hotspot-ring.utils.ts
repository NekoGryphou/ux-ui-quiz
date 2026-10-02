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
import type { RingGeometry, RingState, RingSurface } from "../types/hotspot-ring.types";

export const ringState = (outcome: ChoiceOutcome, selected: boolean, hovered: boolean): RingState | null => {
  if (outcome !== "neutral") return outcome;
  if (selected) return "selected";
  if (hovered) return "hover";
  return null;
};

const cornerRadii = (element: Element): number[] => {
  const style: CSSStyleDeclaration = getComputedStyle(element);
  return RING_CORNER_PROPERTIES.map((property: string): number => {
    const value: number = Number.parseFloat(style.getPropertyValue(property));
    return Number.isNaN(value) ? 0 : value;
  });
};

const surfaceOf = (element: Element): RingSurface =>
  getComputedStyle(element).getPropertyValue(RING_SURFACE_PROPERTY).trim() === "dark" ? "dark" : "light";

const visibleRoot = (element: Element): Element => {
  const child: Element | null = element.firstElementChild;
  if (child === null) return element;
  return getComputedStyle(child).display === "contents" ? visibleRoot(child) : child;
};

const near = (a: number, b: number): boolean => Math.abs(a - b) <= CORNER_TOLERANCE;

const sharedCorners = (rect: DOMRect, viewport: DOMRect): boolean[] => [
  near(rect.top, viewport.top) && near(rect.left, viewport.left),
  near(rect.top, viewport.top) && near(rect.right, viewport.right),
  near(rect.bottom, viewport.bottom) && near(rect.right, viewport.right),
  near(rect.bottom, viewport.bottom) && near(rect.left, viewport.left)
];

const visibleRadii = (element: HTMLElement, viewport: Element): number[] => {
  const own: number[] = cornerRadii(element.firstElementChild ?? element);
  const clip: number[] = cornerRadii(viewport);
  const shared: boolean[] = sharedCorners(element.getBoundingClientRect(), viewport.getBoundingClientRect());
  return own.map((radius: number, corner: number): number =>
    shared[corner] === true ? Math.max(radius, clip[corner] ?? 0) : radius
  );
};

export const measureRing = (frame: HTMLElement, element: HTMLElement): RingGeometry => {
  const box: DOMRect = frame.getBoundingClientRect();
  const scale: number = frame.offsetWidth > 0 ? box.width / frame.offsetWidth : 1;
  const rect: DOMRect = element.getBoundingClientRect();
  return {
    left: (rect.left - box.left) / scale - RING_GAP,
    top: (rect.top - box.top) / scale - RING_GAP,
    width: rect.width / scale + RING_GAP * 2,
    height: rect.height / scale + RING_GAP * 2,
    radii: visibleRadii(element, visibleRoot(frame)).map(
      (radius: number): number => radius + RING_CORNER_TUCK + RING_GAP
    ),
    surface: surfaceOf(element)
  };
};

export const lineRadius = (outer: number): number => Math.max(0, outer - RING_RIM);

export const cornerList = (values: number[]): string =>
  values.map((value: number): string => `${String(value)}px`).join(" ");

export const tagInset = (outer: number): number => {
  const offset: number = RING_RIM + RING_LINE / 2;
  return offset + Math.max(0, outer - offset) * (1 - Math.SQRT1_2);
};
