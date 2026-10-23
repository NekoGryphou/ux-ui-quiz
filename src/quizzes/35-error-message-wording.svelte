<script lang="ts">
  import type { VisualProps } from "../engine/types/quiz.types";
  import { BrandTheme, Field, MockButton } from "../mock";
  import { t } from "../shared/locale.svelte";

  let { variant = "a" }: VisualProps = $props();
</script>

<BrandTheme brand="brutalist">
  <div class="card">
    <p class="title">{t("Schedule delivery", "Planifier la livraison")}</p>
    <Field
      label={t("Delivery date", "Date de livraison")}
      value={t("Today, 14 May", "Aujourd’hui, 14 mai")}
      state="error"
      message={variant === "a"
        ? t("Error 422: invalid input.", "Erreur 422 : saisie invalide.")
        : t(
            "Same-day delivery isn’t available. Pick a date from 15 May onwards.",
            "La livraison le jour même n’est pas disponible. Choisissez une date à partir du 15 mai."
          )}
    />
    <Field label={t("Time slot", "Créneau")} type="select" value={t("18:00 – 20:00", "18 h – 20 h")} />
    <MockButton variant="primary" block>{t("Confirm delivery", "Confirmer la livraison")}</MockButton>
  </div>
</BrandTheme>

<style lang="scss">
  .card {
    display: grid;
    gap: 14px;
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
</style>
