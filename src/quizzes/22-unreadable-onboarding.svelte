<script lang="ts">
  import { Hotspot, MockButton, PhoneShell } from "../mock";
  import { t } from "../shared/locale.svelte";
</script>

<PhoneShell>
  <div class="screen">
    <Hotspot id="skip"><span class="skip">{t("Skip", "Passer")}</span></Hotspot>
    <Hotspot id="illustration"
      ><div class="art" aria-hidden="true"><span></span><span></span><span></span></div></Hotspot
    >
    <Hotspot id="headline"
      ><p class="headline">{t("See where every euro goes", "Voyez où part chaque euro")}</p></Hotspot
    >
    <Hotspot id="body">
      <p class="body">
        {t(
          "Pennywise automatically sorts every transaction from all of your linked accounts into clear categories, builds a monthly budget from your real spending patterns, warns you before you go over a limit, and lets you set savings goals that adjust themselves as your income and expenses change over time.",
          "Pennywise classe automatiquement chaque transaction de tous vos comptes liés dans des catégories claires, établit un budget mensuel à partir de vos dépenses réelles, vous prévient avant que vous ne dépassiez une limite et vous permet de fixer des objectifs d’épargne qui s’ajustent d’eux-mêmes à mesure que vos revenus et vos dépenses évoluent."
        )}
      </p>
    </Hotspot>
    <Hotspot id="progress"><div class="dots"><i class="on"></i><i></i><i></i><i></i></div></Hotspot>
    <Hotspot id="next"><MockButton variant="primary" size="lg" block>{t("Next", "Suivant")}</MockButton></Hotspot>
  </div>
</PhoneShell>

<style lang="scss">
  .screen {
    display: grid;
    flex: 1;
    align-content: start;
    gap: 16px;
    padding: 8px 22px 30px;
  }

  .skip {
    display: block;
    color: var(--mock-primary);
    font-weight: 500;
    text-align: right;
  }

  .art {
    position: relative;
    height: 170px;
    border-radius: 20px;
    background: linear-gradient(160deg, #dbeafe, #ede9fe);

    span {
      position: absolute;
      bottom: 24px;
      width: 34px;
      border-radius: 8px 8px 0 0;
      background: var(--mock-primary);

      &:nth-child(1) {
        left: 70px;
        height: 50px;
        opacity: 0.5;
      }
      &:nth-child(2) {
        left: 118px;
        height: 90px;
      }
      &:nth-child(3) {
        left: 166px;
        height: 66px;
        opacity: 0.7;
      }
    }
  }

  .headline {
    font-size: 22px;
    font-weight: 700;
    line-height: 1.2;
  }

  .body {
    color: #a3a8b3;
    font-size: 10px;
    line-height: 1.35;
    text-align: justify;
  }

  .dots {
    display: flex;
    justify-content: center;
    gap: 6px;

    i {
      width: 7px;
      height: 7px;
      border-radius: 50%;
      background: var(--mock-control-track);
    }

    .on {
      width: 20px;
      border-radius: 999px;
      background: var(--mock-primary);
    }
  }
</style>
