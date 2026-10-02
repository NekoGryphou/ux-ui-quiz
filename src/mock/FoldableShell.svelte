<script lang="ts">
  import type { FoldableShellProps } from "./types/foldable-shell.types";

  let { width = 560, height = 500, time = "9:41", label, children }: FoldableShellProps = $props();
</script>

<div class="fold-wrap">
  {#if label !== undefined}
    <span class="fold-wrap__label">{label}</span>
  {/if}
  <div class="fold" style:width="{width}px">
    <span class="fold__barrel fold__barrel--top" aria-hidden="true"></span>
    <span class="fold__barrel fold__barrel--bottom" aria-hidden="true"></span>
    <span class="fold__notch fold__notch--top" aria-hidden="true"></span>
    <span class="fold__notch fold__notch--bottom" aria-hidden="true"></span>
    <span class="fold__button" aria-hidden="true"></span>
    <div class="fold__screen" style:height="{height}px">
      <div class="fold__status" aria-hidden="true">
        <span>{time}</span>
        <span class="fold__camera"></span>
        <span class="fold__signal"><i></i><i></i><i></i></span>
      </div>
      <div class="fold__body">{@render children()}</div>
      <span class="fold__light" aria-hidden="true"></span>
      <span class="fold__crease" aria-hidden="true"></span>
    </div>
  </div>
</div>

<style lang="scss">
  .fold-wrap {
    display: grid;
    justify-items: center;
    gap: 14px;

    &__label {
      padding: 3px 10px;
      border-radius: 999px;
      background: var(--pill-bg);
      color: var(--pill-text);
      font: 600 11px/1.4 var(--font-mock);
      letter-spacing: 0.04em;
    }
  }

  .fold {
    position: relative;
    padding: 9px;
    border-radius: 28px;
    background: var(--mock-device);
    box-shadow:
      inset 0 0 0 1px rgb(255 255 255 / 0.08),
      var(--mock-shadow-lg);

    &__barrel {
      position: absolute;
      left: calc(50% - 9px);
      z-index: 1;
      width: 18px;
      height: 16px;
      border-radius: 5px;
      background: var(--mock-fold-ridge), var(--mock-fold-hinge);
      box-shadow: 0 1px 3px rgb(0 0 0 / 0.5);

      &--top {
        top: -9px;
      }

      &--bottom {
        bottom: -9px;
      }
    }

    &__notch {
      position: absolute;
      left: calc(50% - 4px);
      z-index: 2;
      width: 8px;
      height: 9px;
      background: #000000;

      &--top {
        top: 0;
        border-radius: 0 0 4px 4px;
      }

      &--bottom {
        bottom: 0;
        border-radius: 4px 4px 0 0;
      }
    }

    &__button {
      position: absolute;
      top: 70px;
      right: -3px;
      width: 3px;
      height: 46px;
      border-radius: 0 2px 2px 0;
      background: #4a4d56;
    }

    &__screen {
      position: relative;
      display: flex;
      flex-direction: column;
      overflow: hidden;
      border-radius: 20px;
      background: var(--mock-bg);
      color: var(--mock-text);
      font-size: 13px;
      line-height: 1.45;
    }

    &__status {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 10px 22px 4px;
      font-size: 12px;
      font-weight: 600;
    }

    &__camera {
      width: 10px;
      height: 10px;
      margin-left: 40%;
      border-radius: 50%;
      background: var(--mock-device);
      box-shadow: inset 0 0 0 2px #2a2d35;
    }

    &__signal {
      display: inline-flex;
      align-items: flex-end;
      gap: 2px;

      i {
        width: 3px;
        border-radius: 1px;
        background: currentColor;

        &:nth-child(1) {
          height: 5px;
        }

        &:nth-child(2) {
          height: 8px;
        }

        &:nth-child(3) {
          height: 11px;
        }
      }
    }

    &__body {
      display: flex;
      flex: 1;
      flex-direction: column;
      min-height: 0;
    }

    &__light,
    &__crease {
      position: absolute;
      top: 0;
      bottom: 0;
      z-index: 3;
      pointer-events: none;
    }

    &__light {
      right: 0;
      left: 0;
      background: var(--mock-fold-light);
    }

    &__crease {
      left: calc(50% - 18px);
      width: 36px;
      background: var(--mock-fold-crease);
    }
  }
</style>
