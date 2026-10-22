<script lang="ts">
  import type { PhoneShellProps } from "./types/phone-shell.types";

  let { time = "9:41", children }: PhoneShellProps = $props();
</script>

<div class="phone">
  <div class="phone__screen">
    <div class="phone__status" aria-hidden="true">
      <span>{time}</span>
      <span class="phone__island"></span>
      <span class="phone__signal"><i></i><i></i><i></i></span>
    </div>
    <div class="phone__body">
      {@render children()}
    </div>
    <span class="phone__home" aria-hidden="true"></span>
  </div>
</div>

<style lang="scss">
  .phone {
    width: 300px;
    padding: 10px;
    border-radius: 44px;
    background: var(--mock-device);
    box-shadow: var(--mock-shadow-lg);

    &__screen {
      position: relative;
      display: flex;
      flex-direction: column;
      height: 600px;
      overflow: hidden;
      border-radius: 34px;
      background: var(--mock-bg);
      color: var(--mock-text);
      font-size: 13px;
      line-height: 1.45;
    }

    &__status {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 14px 24px 6px;
      font-size: 12px;
      font-weight: 600;
    }

    &__island {
      width: 84px;
      height: 24px;
      border-radius: 999px;
      background: var(--mock-device);
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

    &__home {
      position: absolute;
      bottom: 8px;
      left: 50%;
      width: 110px;
      height: 4px;
      border-radius: 999px;
      background: rgb(0 0 0 / 0.35);
      transform: translateX(-50%);
    }
  }
</style>
