<script lang="ts">
    import type {TerminalScreenProps} from "./types/terminal-screen.types";

    let { lines, prompt, model = "DISPLAY STATION 3180", width = 640 }: TerminalScreenProps = $props();
</script>

<div class="crt" style:width="{width}px">
  <div class="crt__case">
    <div class="crt__bezel">
      <div class="crt__screen">
        <div class="crt__text">
          {#each lines as line, i (i)}
            <span class="crt__line" class:crt__line--bright={line.bright === true}>{line.text}</span>
          {/each}
          {#if prompt !== undefined}
            <span class="crt__line crt__line--bright">{prompt}<span class="crt__cursor">█</span></span>
          {/if}
        </div>
      </div>
    </div>
    <div class="crt__panel">
      <span class="crt__model">{model}</span>
      <span class="crt__controls" aria-hidden="true">
        <i class="crt__knob"></i>
        <i class="crt__knob"></i>
        <i class="crt__led"></i>
      </span>
    </div>
  </div>
  <div class="crt__stand" aria-hidden="true"></div>
</div>

<style lang="scss">
  .crt {
    display: grid;
    justify-items: center;

    &__case {
      width: 100%;
      padding: 26px 28px 14px;
      border: 1px solid var(--mock-crt-case-edge);
      border-radius: 30px 30px 22px 22px;
      background: var(--mock-crt-case);
      box-shadow:
        inset 0 2px 0 var(--mock-crt-case-light),
        inset 0 -6px 12px rgb(0 0 0 / 0.12),
        var(--mock-shadow-lg);
    }

    &__bezel {
      padding: 16px;
      border-radius: 26px;
      background: var(--mock-crt-bezel);
      box-shadow:
        inset 0 4px 10px rgb(0 0 0 / 0.7),
        0 1px 0 var(--mock-crt-case-light);
    }

    &__screen {
      position: relative;
      overflow: hidden;
      border-radius: 34px / 26px;
      background:
        repeating-linear-gradient(0deg, var(--mock-terminal-scanline) 0 1px, transparent 1px 3px),
        radial-gradient(ellipse at center, #0b1a10 0%, var(--mock-terminal-bg) 75%);
      box-shadow: var(--mock-terminal-vignette);
      animation: flicker 4s steps(2) infinite;

      &::after {
        content: "";
        position: absolute;
        inset: 0;
        border-radius: inherit;
        background: var(--mock-crt-glare);
        box-shadow: inset 0 0 60px rgb(0 0 0 / 0.85);
        pointer-events: none;
      }
    }

    &__text {
      padding: 22px 26px;
      color: var(--mock-terminal-text);
      font: 13px/1.55 var(--mock-terminal-font);
      text-shadow: var(--mock-terminal-glow);
    }

    &__line {
      display: block;
      min-height: 1.55em;
      white-space: pre;

      &--bright {
        color: var(--mock-terminal-bright);
      }
    }

    &__cursor {
      animation: blink 1s steps(1) infinite;
    }

    &__panel {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 12px 6px 0;
    }

    &__model {
      color: var(--mock-crt-label);
      font: 700 10px/1 var(--mock-retro-font);
      letter-spacing: 0.18em;
      text-shadow: 0 1px 0 var(--mock-crt-case-light);
    }

    &__controls {
      display: flex;
      align-items: center;
      gap: 10px;
    }

    &__knob {
      width: 14px;
      height: 14px;
      border-radius: 50%;
      background: var(--mock-crt-knob);
      box-shadow: 0 1px 2px rgb(0 0 0 / 0.35);
    }

    &__led {
      width: 8px;
      height: 8px;
      margin-left: 6px;
      border-radius: 50%;
      background: var(--mock-crt-led);
      box-shadow: 0 0 8px var(--mock-crt-led);
    }

    &__stand {
      width: 34%;
      height: 26px;
      clip-path: polygon(14% 0, 86% 0, 100% 100%, 0 100%);
      background: var(--mock-crt-case);
      box-shadow: inset 0 6px 8px rgb(0 0 0 / 0.25);
    }
  }

  @keyframes blink {
    50% {
      opacity: 0;
    }
  }

  @keyframes flicker {
    50% {
      filter: brightness(1.04);
    }
  }
</style>
