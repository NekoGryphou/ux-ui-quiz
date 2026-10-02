<script module lang="ts">
  import type { QuizMeta } from "../engine/types/quiz.types";

  export const meta: QuizMeta = {
    id: "hidden-price",
    title: "€9 a month, €108 today",
    principle: "Show the full price upfront",
    scenario: "A freelancer compares plans for a design tool and picks the one that fits their monthly budget.",
    prompt: "Which issues make these prices hard to trust?",
    kind: "multiple",
    choices: [
      { id: "a", text: "The big €9 is a monthly rate on a yearly bill, so the charge today is €108, not €9." },
      { id: "b", text: "A setup fee is mentioned but not priced, so the real total only shows at checkout." },
      { id: "c", text: "The plans sit side by side, where a comparison table would line up every feature." },
      { id: "d", text: "The prices end in 9 instead of round numbers, which can make plans feel less premium." }
    ],
    correct: ["a", "b"],
    explanation: [
      "The headline €9 isn’t what the freelancer pays: the plan is billed yearly (€108 today), and a setup fee of unknown size is added at checkout. The price they budgeted for is not the price they’ll be charged.",
      "Lead with the amount charged and its period (“€108 billed yearly”, with “€9/month” as a helper), and include every mandatory fee upfront. Many consumer laws require the total price, unavoidable fees included, to be shown before purchase.",
      "Side-by-side cards are fine for two plans, and prices ending in 9 are a marketing choice, not a usability flaw."
    ]
  };
</script>

<script lang="ts">
  import { BrandTheme, BrowserShell, Icon, MockButton, Title } from "../mock";
  import type { PricingPlan } from "./types/quiz-mocks.types";

  const plans: PricingPlan[] = [
    {
      name: "Starter",
      price: "€9",
      features: ["3 projects", "Export to PNG and PDF", "Email support"],
      primary: false
    },
    {
      name: "Pro",
      price: "€19",
      features: ["Unlimited projects", "Shared libraries", "Priority support"],
      primary: true
    }
  ];
</script>

<BrandTheme brand="luxury">
  <BrowserShell url="pixelkit.app/pricing">
    <div class="page">
      <div class="intro">
        <Title>Choose your plan</Title>
        <p>Everything you need to design faster.</p>
      </div>
      <div class="plans">
        {#each plans as plan (plan.name)}
          <div class="plan" class:plan--primary={plan.primary}>
            <strong class="plan__name">{plan.name}</strong>
            <p class="plan__price"><span>{plan.price}</span>/month*</p>
            <ul>
              {#each plan.features as feature (feature)}
                <li><Icon name="check" size={14} /> {feature}</li>
              {/each}
            </ul>
            <MockButton variant={plan.primary ? "primary" : "secondary"} block>Choose {plan.name}</MockButton>
          </div>
        {/each}
      </div>
      <p class="note">*Billed annually. A one-time setup fee applies at checkout.</p>
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
