import { SvelteMap } from "svelte/reactivity";

/**
 * @export
 * @desc Per-preview registry of hotspot elements and their hover and focus state, used to draw rings.
 */
export class HotspotLayer {
  /**
   * @public
   * @desc Registered hotspot elements by id.
   */
  public readonly elements: SvelteMap<string, HTMLElement> = new SvelteMap();
  /**
   * @public
   * @desc Id of the hovered hotspot.
   */
  public hovered: string | null = $state(null);
  /**
   * @public
   * @desc Id of the keyboard-focused hotspot.
   */
  public focused: string | null = $state(null);

  /**
   * @public
   * @desc Registers a hotspot element.
   *
   * @param id - Hotspot id.
   * @param element - Hotspot element.
   */
  public register(id: string, element: HTMLElement): void {
    this.elements.set(id, element);
  }

  /**
   * @public
   * @desc Removes a hotspot element.
   *
   * @param id - Hotspot id.
   */
  public unregister(id: string): void {
    this.elements.delete(id);
  }

  /**
   * @public
   * @desc Sets the hovered hotspot.
   *
   * @param id - Hotspot id, or null.
   */
  public hover(id: string | null): void {
    this.hovered = id;
  }

  /**
   * @public
   * @desc Sets the keyboard-focused hotspot.
   *
   * @param id - Hotspot id, or null.
   */
  public focus(id: string | null): void {
    this.focused = id;
  }
}
