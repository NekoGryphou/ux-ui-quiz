<script lang="ts">
    import Button from "../components/Button.svelte";
    import IconButton from "../components/IconButton.svelte";
    import {ENLARGE_BELOW_SCALE} from "./const/stage.const";
    import MockFrame from "./MockFrame.svelte";
    import type {VisualStageProps} from "./types/visual-stage.types";

    let { visual: Visual, label, variant = "a", compact = false }: VisualStageProps = $props();

  let available: number = $state(0);
  let naturalWidth: number = $state(0);
  let naturalHeight: number = $state(0);
  let frame: HTMLDivElement | undefined = $state();
  let scaler: HTMLDivElement | undefined = $state();
  let dialog: HTMLDialogElement | undefined = $state();
  let enlarged: boolean = $state(false);

  const scale: number = $derived(available > 0 && naturalWidth > available ? available / naturalWidth : 1);

  /**
   * @private
   * @desc Reads the available width and the preview's natural size.
   */
  const measure = (): void => {
    if (frame === undefined || scaler === undefined) return;
    available = frame.clientWidth;
    naturalWidth = scaler.clientWidth;
    naturalHeight = scaler.clientHeight;
  };

  /**
   * @private
   * @desc Closes the actual-size viewer.
   */
  const closeViewer = (): void => {
    dialog?.close();
  };

  /**
   * @private
   * @desc Unmounts the viewer preview once the dialog closes.
   */
  const onViewerClose = (): void => {
    enlarged = false;
  };

  /**
   * @private
   * @desc Opens the actual-size viewer.
   */
  const openViewer = (): void => {
    enlarged = true;
    dialog?.showModal();
  };

  $effect(() => {
    if (frame === undefined || scaler === undefined) return;
    measure();
    let request: number = 0;
    const observer: ResizeObserver = new ResizeObserver((): void => {
      cancelAnimationFrame(request);
      request = requestAnimationFrame(measure);
    });
    observer.observe(frame);
    observer.observe(scaler);
    return (): void => {
      cancelAnimationFrame(request);
      observer.disconnect();
    };
  });
</script>

<figure class="stage" class:stage--compact={compact} aria-label="Interface under review">
  <div class="stage__canvas">
    <div class="stage__frame" bind:this={frame} style:height="{naturalHeight * scale}px">
      <div class="stage__scaler" bind:this={scaler} style:transform="translateX(-50%) scale({scale})">
        <MockFrame visual={Visual} {variant} />
      </div>
    </div>
  </div>

  {#if scale < ENLARGE_BELOW_SCALE}
    <div class="stage__footer">
      <Button iconStart="maximize" onclick={openViewer}>Enlarge</Button>
    </div>
  {/if}
</figure>

<dialog class="viewer" bind:this={dialog} aria-label="{label}, actual size" onclose={onViewerClose}>
  <div class="viewer__bar">
    <span><strong>{label}</strong> · Actual size</span>
    <IconButton icon="x" label="Close" variant="ghost" onclick={closeViewer} />
  </div>
  <!-- svelte-ignore a11y_no_noninteractive_tabindex -->
  <div class="viewer__canvas" tabindex="0" role="region" aria-label="Interface, scrollable">
    {#if enlarged}<MockFrame visual={Visual} {variant} />{/if}
  </div>
</dialog>

<style lang="scss">
  @use "$styles/mixins" as *;

  .stage {
    display: grid;
    margin: 0;
    overflow: hidden;
    border-radius: var(--radius-xl);
    @include dot-grid;

    &:not(&--compact) {
      box-shadow:
        -10px 10px 0 var(--brand-violet),
        0 14px 32px color-mix(in srgb, var(--brand-violet) 28%, transparent);
    }

    &__canvas {
      display: grid;
      align-items: center;
      padding: var(--space-4) var(--space-2);
      cursor: default;
      user-select: none;

      @include up(md) {
        min-height: 560px;
        padding: var(--space-7) var(--space-6);
      }

      @include up(lg) {
        padding: var(--space-7) var(--space-5);
      }
    }

    &--compact {
      grid-template-rows: 1fr auto;
      border-radius: var(--radius-lg);
    }

    &--compact &__canvas {
      min-height: 0;
      padding: var(--space-4) var(--space-2);
    }

    &__frame {
      position: relative;
      width: 100%;
    }

    &__scaler {
      position: absolute;
      top: 0;
      left: 50%;
      width: max-content;
      transform-origin: top center;
    }

    &__footer {
      display: flex;
      justify-content: center;
      padding: 0 var(--space-3) var(--space-3);
    }
  }

  .viewer {
    inset: 0;
    width: 100%;
    max-width: none;
    height: 100%;
    max-height: none;
    margin: 0;
    padding: 0;
    border: 0;
    color: var(--text);
    @include dot-grid;

    &[open] {
      display: flex;
      flex-direction: column;
    }

    &::backdrop {
      background: rgb(0 0 0 / 0.5);
    }

    &__bar {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: var(--space-3);
      padding: var(--space-2) var(--space-2) var(--space-2) var(--space-4);
      border-bottom: 1px solid var(--border);
      background: var(--surface);
      color: var(--text-muted);
      font-size: var(--text-sm);

      strong {
        color: var(--text);
      }
    }

    &__canvas {
      flex: 1;
      overflow: auto;
      padding: var(--space-5);

      &:focus-visible {
        outline-offset: -4px;
      }

      > :global(*) {
        margin-inline: auto;
      }
    }
  }
</style>
