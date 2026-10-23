<script lang="ts">
  import type { VisualProps } from "../engine/types/quiz.types";
  import { t } from "../shared/locale.svelte";

  let { variant = "a" }: VisualProps = $props();
</script>

<article class="article" class:article--plain={variant === "b"}>
  <p class="article__kicker">{t("SLOW TRAVEL", "VOYAGE LENT")}</p>
  <p class="article__title">{t("Three weeks by train, one backpack", "Trois semaines en train, un seul sac à dos")}</p>
  <p>
    {t("We started in Lisbon with the", "Nous sommes partis de Lisbonne avec le")}
    <span class="link">{t("rail pass guide", "guide du pass ferroviaire")}</span>
    {t(
      "open on our phones, then followed the coast north. Booking the night trains early mattered more than anything; the",
      "ouvert sur nos téléphones, puis nous avons longé la côte vers le nord. Réserver tôt les trains de nuit a compté plus que tout ; les"
    )}
    <span class="link">{t("seat reservation tips", "conseils de réservation de places")}</span>
    {t("saved us twice.", "nous ont sauvés deux fois.")}
  </p>
  <p>
    {t("For packing, we stuck to the", "Pour les bagages, nous avons suivi la")}
    <span class="link">{t("one-bag checklist", "checklist « un seul sac »")}</span>
    {t("and never regretted it.", "sans jamais le regretter.")}
  </p>
</article>

<style lang="scss">
  .article {
    display: grid;
    gap: 10px;
    width: 300px;
    padding: 22px;
    background: #fbf8f2;
    color: #1d1b17;
    font:
      14px/1.6 Georgia,
      "Times New Roman",
      serif;
    box-shadow: var(--mock-shadow-md);

    &__kicker {
      color: #8a3b12;
      font:
        700 11px/1 "IBM Plex Sans",
        sans-serif;
      letter-spacing: 0.14em;
    }

    &__title {
      font:
        700 20px/1.2 "Playfair Display",
        Georgia,
        serif;
    }
  }

  .link {
    color: #8a3b12;
    text-decoration: underline;
    text-decoration-thickness: 1px;
    text-underline-offset: 3px;
  }

  .article--plain .link {
    color: inherit;
    text-decoration: none;
  }
</style>
