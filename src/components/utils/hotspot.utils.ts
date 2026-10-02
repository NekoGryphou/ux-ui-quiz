import { getContext, hasContext, setContext } from "svelte";
import { HOTSPOT_CONTEXT_KEY, HOTSPOT_LAYER_KEY } from "../const/hotspot.const";
import type { HotspotLayer } from "../hotspot-layer.svelte";
import type { HotspotContext } from "../types/hotspot-context.types";

export const provideHotspotContext = (context: HotspotContext): void => {
  setContext(HOTSPOT_CONTEXT_KEY, context);
};

export const readHotspotContext = (): HotspotContext | undefined =>
  hasContext(HOTSPOT_CONTEXT_KEY) ? getContext<HotspotContext>(HOTSPOT_CONTEXT_KEY) : undefined;

export const provideHotspotLayer = (layer: HotspotLayer): void => {
  setContext(HOTSPOT_LAYER_KEY, layer);
};

export const readHotspotLayer = (): HotspotLayer | undefined =>
  hasContext(HOTSPOT_LAYER_KEY) ? getContext<HotspotLayer>(HOTSPOT_LAYER_KEY) : undefined;
