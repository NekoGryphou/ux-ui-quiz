<script lang="ts">
    import type {VisualProps} from "../engine/types/quiz.types";
    import {RetroButton, RetroField, RetroWindow} from "../mock";

    let { variant = "a" }: VisualProps = $props();
</script>

<div class="bank">
  <div class="bank__header">
    <span class="bank__logo">FIRST UNION</span>
    <span>Online Banking</span>
  </div>
  {#if variant === "a"}
    <div class="bank__body">
      <p class="bank__title">Transfer funds</p>
      <label>To account<RetroField value="FR76 3000 4000 0312" width={190} /></label>
      <label>Amount (EUR)<RetroField value="1,240.00" width={90} /></label>
      <label>Reference<RetroField value="Invoice 2025-" width={190} /></label>
      <div class="dialog">
        <RetroWindow title="Session timeout" width={250}>
          <div class="dialog__body">
            <p>Your session will end in <strong>1:52</strong> because of inactivity.</p>
            <div class="dialog__actions">
              <RetroButton primary>Stay signed in</RetroButton>
              <RetroButton>Log out</RetroButton>
            </div>
          </div>
        </RetroWindow>
      </div>
    </div>
  {:else}
    <div class="bank__body">
      <p class="bank__title">Session expired</p>
      <p>For your security, you have been logged out after a period of inactivity.</p>
      <p>Information you entered has not been saved.</p>
      <span class="bank__link">» Log in again</span>
    </div>
  {/if}
</div>

<style lang="scss">
  .bank {
    width: 320px;
    border: 1px solid #6b7fa8;
    background: #ffffff;
    color: #000000;
    font: 12px/1.45 var(--mock-retro-font);
    box-shadow: var(--mock-shadow-md);

    &__header {
      display: flex;
      align-items: baseline;
      gap: 8px;
      padding: 10px 12px;
      background: linear-gradient(180deg, #2b4f9e, #12306f);
      color: #ffffff;
    }

    &__logo {
      font: 700 15px var(--mock-retro-serif);
      letter-spacing: 1px;
    }

    &__body {
      position: relative;
      display: grid;
      gap: 10px;
      min-height: 250px;
      padding: 14px 12px;
      background: #eef2f8;

      label {
        display: grid;
        gap: 3px;
      }
    }

    &__title {
      color: #12306f;
      font-size: 14px;
      font-weight: 700;
    }

    &__link {
      color: var(--mock-retro-link);
      text-decoration: underline;
    }
  }

  .dialog {
    position: absolute;
    top: 64px;
    left: 34px;

    &__body {
      display: grid;
      gap: 10px;
      padding: 4px;
    }

    &__actions {
      display: flex;
      justify-content: flex-end;
      gap: 6px;
    }
  }
</style>
