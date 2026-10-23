<script lang="ts">
  import { prefersReducedMotion } from "svelte/motion";
  import { t } from "../shared/locale.svelte";
  import { HINT_DISMISS_MS } from "./const/shortcut-hint.const";
  import IconButton from "./IconButton.svelte";
  import type { ShortcutHintProps } from "./types/shortcut-hint.types";
  import { collapse } from "./utils/collapse.utils";
  import { readHintDismissed, storeHintDismissed } from "./utils/shortcut-hint.utils";

  let { optionCount, ondismiss }: ShortcutHintProps = $props();

  let dismissed: boolean = $state(readHintDismissed());

  /**
   * @private
   * @desc Hides the hint for good and notifies the parent.
   */
  const dismiss = (): void => {
    dismissed = true;
    ondismiss();
    storeHintDismissed();
  };
</script>

{#if !dismissed}
  <div class="hint" out:collapse={{ duration: prefersReducedMotion.current ? 0 : HINT_DISMISS_MS }}>
    <div class="hint__keys">
      <span class="hint__label">{t("Shortcuts", "Raccourcis")}</span>
      {#if optionCount > 0}
        <span><kbd>1</kbd>–<kbd>{optionCount}</kbd> {t("pick", "choisir")}</span>
      {/if}
      <span><kbd>{t("Space", "Espace")}</kbd> {t("select", "sélectionner")}</span>
      <span><kbd>{t("Enter", "Entrée")}</kbd> {t("check", "valider")}</span>
      <span><kbd>←</kbd><kbd>→</kbd> {t("move", "naviguer")}</span>
    </div>
    <IconButton
      icon="x"
      label={t("Hide keyboard shortcuts", "Masquer les raccourcis clavier")}
      variant="ghost"
      onclick={dismiss}
    />
  </div>
{/if}

<style lang="scss">
  @use "$styles/mixins" as *;

  .hint {
    display: none;
    margin-top: var(--space-3);
    align-items: center;
    gap: var(--space-2);
    padding: var(--space-1) var(--space-1) var(--space-1) var(--space-3);
    border-radius: var(--radius-lg);
    background: var(--hint-bg);
    color: var(--text-muted);
    font-size: var(--text-xs);

    @media (pointer: fine) {
      @include up(lg) {
        display: flex;
      }
    }

    &__label {
      color: var(--text);
      font-weight: 600;
    }

    &__keys {
      display: flex;
      flex: 1;
      flex-wrap: wrap;
      align-items: center;
      gap: var(--space-1) var(--space-3);
      white-space: nowrap;
    }

    kbd {
      padding: 0 5px;
      border: 1px solid var(--kbd-border);
      border-radius: 4px;
      background: var(--kbd-bg);
      color: var(--text);
      font: inherit;
      font-weight: 600;
    }
  }
</style>
