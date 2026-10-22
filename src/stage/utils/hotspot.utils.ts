import { getContext, hasContext, setContext } from "svelte";
import { HOTSPOT_CONTEXT_KEY, HOTSPOT_LAYER_KEY } from "../const/hotspot.const";
import type { HotspotLayer } from "../hotspot-layer.svelte";
import type { HotspotContext } from "../types/hotspot-context.types";

/**
 * @export
 * @desc Shares the hotspot answer context with descendant components.
 * Must be called during component initialization.
 *
 * @param context - Hotspot context.
 */
export const provideHotspotContext = (context: HotspotContext): void => {
  setContext(HOTSPOT_CONTEXT_KEY, context);
};

/**
 * @export
 * @desc Hotspot answer context from an ancestor.
 *
 * @returns The context, or undefined outside a quiz.
 */
export const readHotspotContext = (): HotspotContext | undefined =>
  hasContext(HOTSPOT_CONTEXT_KEY) ? getContext<HotspotContext>(HOTSPOT_CONTEXT_KEY) : undefined;

/**
 * @export
 * @desc Shares a preview's {@link HotspotLayer} with descendant components.
 * Must be called during component initialization.
 *
 * @param layer - Hotspot layer.
 */
export const provideHotspotLayer = (layer: HotspotLayer): void => {
  setContext(HOTSPOT_LAYER_KEY, layer);
};

/**
 * @export
 * @desc {@link HotspotLayer} of the enclosing preview.
 *
 * @returns The layer, or undefined outside a preview frame.
 */
export const readHotspotLayer = (): HotspotLayer | undefined =>
  hasContext(HOTSPOT_LAYER_KEY) ? getContext<HotspotLayer>(HOTSPOT_LAYER_KEY) : undefined;
