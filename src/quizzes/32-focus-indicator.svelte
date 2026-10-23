<script lang="ts">
  import type { VisualProps } from "../engine/types/quiz.types";
  import { Switch } from "../mock";
  import { t } from "../shared/locale.svelte";

  let { variant = "a" }: VisualProps = $props();
</script>

<div class="card">
  <p class="title">Notifications</p>
  <div class="list">
    <Switch label={t("Email digest", "Récapitulatif par e-mail")} checked />
    <Switch label={t("Push alerts", "Alertes push")} />
  </div>
  <div class="actions">
    <span class="button">{t("Cancel", "Annuler")}</span>
    <span class="button button--primary button--focus-{variant}">{t("Save", "Enregistrer")}</span>
  </div>
</div>

<style lang="scss">
  .card {
    display: grid;
    gap: 16px;
    width: 300px;
    padding: 20px;
    border: 1px solid var(--mock-border);
    border-radius: 12px;
    background: var(--mock-surface);
    color: var(--mock-text);
    font-size: 13px;
  }

  .title {
    font-size: 16px;
    font-weight: 600;
  }

  .list {
    display: grid;
    gap: 14px;
  }

  .actions {
    display: flex;
    justify-content: flex-end;
    gap: 10px;
  }

  .button {
    padding: 8px 16px;
    border: 1px solid var(--mock-border);
    border-radius: var(--mock-radius);
    font-weight: 500;

    &--primary {
      border-color: transparent;
      background: var(--mock-primary);
      color: var(--mock-on-accent);
    }

    &--focus-a {
      background: #1f57d1;
    }

    &--focus-b {
      outline: 3px solid #1b1d23;
      outline-offset: 3px;
    }
  }
</style>
