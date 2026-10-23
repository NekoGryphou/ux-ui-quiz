<script lang="ts">
  import { BrandTheme, BrowserShell, Icon, MockButton, Title } from "../mock";
  import { t } from "../shared/locale.svelte";
  import type { PricingPlan } from "./types/quiz-mocks.types";

  const plans: PricingPlan[] = $derived([
    {
      name: "Starter",
      price: t("€9", "9 €"),
      features: [
        t("3 projects", "3 projets"),
        t("Export to PNG and PDF", "Export PNG et PDF"),
        t("Email support", "Support par e-mail")
      ],
      primary: false
    },
    {
      name: "Pro",
      price: t("€19", "19 €"),
      features: [
        t("Unlimited projects", "Projets illimités"),
        t("Shared libraries", "Bibliothèques partagées"),
        t("Priority support", "Support prioritaire")
      ],
      primary: true
    }
  ]);
</script>

<BrandTheme brand="luxury">
  <BrowserShell url="pixelkit.app/pricing">
    <div class="page">
      <div class="intro">
        <Title>{t("Choose your plan", "Choisissez votre offre")}</Title>
        <p>{t("Everything you need to design faster.", "Tout ce qu’il faut pour concevoir plus vite.")}</p>
      </div>
      <div class="plans">
        {#each plans as plan (plan.name)}
          <div class="plan" class:plan--primary={plan.primary}>
            <strong class="plan__name">{plan.name}</strong>
            <p class="plan__price"><span>{plan.price}</span>{t("/month*", "/mois*")}</p>
            <ul>
              {#each plan.features as feature (feature)}
                <li><Icon name="check" size={14} /> {feature}</li>
              {/each}
            </ul>
            <MockButton variant={plan.primary ? "primary" : "secondary"} block
              >{t(`Choose ${plan.name}`, `Choisir ${plan.name}`)}</MockButton
            >
          </div>
        {/each}
      </div>
      <p class="note">
        {t(
          "*Billed annually. A one-time setup fee applies at checkout.",
          "*Facturé annuellement. Des frais de mise en service uniques s’appliquent au paiement."
        )}
      </p>
    </div>
  </BrowserShell>
</BrandTheme>

<style lang="scss">
  .page {
    display: grid;
    gap: 18px;
    padding: 26px 32px 22px;
  }

  .intro {
    display: grid;
    gap: 4px;
    text-align: center;

    p {
      color: var(--mock-muted);
    }
  }

  .plans {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 16px;
  }

  .plan {
    display: grid;
    gap: 12px;
    padding: 18px;
    border: 1px solid var(--mock-border);
    border-radius: 12px;
    background: var(--mock-surface);

    &--primary {
      border-color: var(--mock-primary);
      box-shadow: 0 0 0 1px var(--mock-primary);
    }

    &__name {
      font-size: 14px;
    }

    &__price {
      color: var(--mock-muted);

      span {
        color: var(--mock-text);
        font-size: 30px;
        font-weight: 700;
      }
    }

    ul {
      display: grid;
      gap: 6px;
      margin: 0;
      padding: 0;
      list-style: none;
    }

    li {
      display: flex;
      align-items: center;
      gap: 6px;
      color: var(--mock-success);

      :global(*) {
        flex: none;
      }
    }
  }

  .note {
    color: var(--mock-muted);
    font-size: 12px;
    text-align: center;
  }
</style>
