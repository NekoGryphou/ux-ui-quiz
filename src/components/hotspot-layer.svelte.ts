import { SvelteMap } from "svelte/reactivity";

export class HotspotLayer {
  readonly elements: SvelteMap<string, HTMLElement> = new SvelteMap();
  hovered: string | null = $state(null);
  focused: string | null = $state(null);

  register(id: string, element: HTMLElement): void {
    this.elements.set(id, element);
  }

  unregister(id: string): void {
    this.elements.delete(id);
  }

  hover(id: string | null): void {
    this.hovered = id;
  }

  focus(id: string | null): void {
    this.focused = id;
  }
}
