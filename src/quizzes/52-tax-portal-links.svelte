<script module lang="ts">
  import type { QuizMeta } from "../engine/types/quiz.types";

  export const meta: QuizMeta = {
    id: "tax-portal-links",
    title: "Forty links, one task",
    principle: "Make frequent tasks stand out and every link label specific",
    scenario: "A café owner logs in to the tax portal to pay this quarter’s VAT before tonight’s deadline.",
    prompt: "Which issues make this task harder than it needs to be?",
    kind: "multiple",
    choices: [
      {
        id: "a",
        text: "“VAT” appears under both Declare and Pay with the same label, so the link doesn’t say what it does."
      },
      {
        id: "b",
        text: "Dozens of services share one style and weight, so the frequent tasks don’t stand out from rare ones."
      },
      {
        id: "c",
        text: "Each link starts with an orange arrow, where plain bullets would make the long lists look calmer."
      },
      {
        id: "d",
        text: "The account number shows in the side panel, where hiding it behind a menu would save some space."
      }
    ],
    correct: ["a", "b"],
    explanation: [
      "Every service gets the same small link, so paying VAT (the task most visitors come for) hides among property duty and cross-border payments. Worse, “VAT” exists twice with identical labels: only the small heading above says which one pays and which one declares.",
      "Bring the few frequent tasks forward (“Pay VAT”, “File VAT return”) and make each label specific on its own, so it works when scanned, read by a screen reader or found by search.",
      "The arrows are the portal’s link style, and showing the account number helps people check they’re in the right account."
    ]
  };
</script>

<script lang="ts">
  import type { PortalSection } from "./types/quiz-mocks.types";

  const services: PortalSection[] = [
    { title: "Consult", links: ["Tax account [+]", "Property notices"] },
    {
      title: "Declare",
      links: [
        "VAT",
        "Corporate tax",
        "Payroll tax",
        "Business rates",
        "Property duty",
        "Cross-border payments [+]",
        "Result [+]"
      ]
    },
    {
      title: "Pay",
      links: ["VAT", "Corporate tax", "Payroll tax", "Business rates", "Property duty", "Withholding tax", "Fines [+]"]
    },
    { title: "Requests", links: ["VAT refund", "Payment plan", "Change of address [+]"] }
  ];
  const boxes: PortalSection[] = [
    { title: "MY FILES", links: ["Choose a file", "See all my files"] },
    { title: "MY SPACE", links: ["Manage services", "Manage bank accounts [+]", "Manage direct debit mandates"] },
    { title: "OTHER SERVICES", links: ["Tax calendar", "Declarant tests", "Contact details of your office"] }
  ];
</script>

<div class="portal">
  <div class="portal__head">
    <span class="portal__logo">RTS<small>republic tax service</small></span>
    <span class="portal__space">PROFESSIONALS</span>
    <nav class="portal__nav">
      {#each ["FILE", "MANAGE", "CONSULT", "DECLARE", "PAY", "REQUESTS", "MESSAGES"] as item (item)}
        <span>{item}</span>
      {/each}
    </nav>
  </div>
  <div class="portal__body">
    <aside class="side">
      <p><strong>Mrs ROSEMONT Lea</strong></p>
      <p>Subscriber<br />26101570101919</p>
      <p>Password expires:<br /><strong>10/11/2026</strong></p>
      <p class="side__links">› Pro space<br />› taxes portal<br />› Log out</p>
    </aside>
    <div class="middle">
      {#each boxes as box (box.title)}
        <section class="box">
          <p class="box__title">{box.title}</p>
          {#each box.links as link (link)}
            <span class="link">{link}</span>
          {/each}
        </section>
      {/each}
    </div>
    <section class="services">
      <p class="box__title">MY SERVICES</p>
      {#each services as section (section.title)}
        <p class="services__group">{section.title}</p>
        {#each section.links as link, i (`${section.title}-${String(i)}`)}
          <span class="link">{link}</span>
        {/each}
      {/each}
    </section>
  </div>
</div>

<style lang="scss">
  .portal {
    width: 640px;
    border: 1px solid #b9c4d6;
    background: #ffffff;
    color: #1c2b4a;
    font:
      11px/1.45 Verdana,
      Tahoma,
      sans-serif;
    box-shadow: var(--mock-shadow-md);

    &__head {
      display: grid;
      grid-template-columns: auto 1fr;
      align-items: center;
      gap: 0 14px;
      padding: 8px 12px 0;
      background: linear-gradient(180deg, #14397a, #0b2758);
      color: #ffffff;
    }

    &__logo {
      display: grid;
      font:
        700 18px/1 Georgia,
        serif;

      small {
        font:
          9px/1.2 Verdana,
          sans-serif;
        letter-spacing: 0.04em;
      }
    }

    &__space {
      font-weight: 700;
      letter-spacing: 0.08em;
    }

    &__nav {
      display: flex;
      grid-column: 1 / -1;
      gap: 2px;
      margin-top: 8px;

      span {
        padding: 4px 8px;
        border-radius: 6px 6px 0 0;
        background: #b85400;
        font-size: 9px;
        font-weight: 700;
      }
    }

    &__body {
      display: grid;
      grid-template-columns: 120px 1fr 190px;
      gap: 12px;
      padding: 12px;
      background: #f2f5fa;
    }
  }

  .side {
    display: grid;
    align-content: start;
    gap: 8px;
    padding: 8px;
    border-radius: 0 0 10px 0;
    background: linear-gradient(180deg, #1d4b93, #133a78);
    color: #ffffff;
    font-size: 10px;

    &__links {
      color: #ffcf7a;
    }
  }

  .middle {
    display: grid;
    align-content: start;
    gap: 10px;
  }

  .box {
    display: grid;
    gap: 3px;
    padding: 8px 10px;
    border: 1px solid #f0b072;
    background: #ffffff;

    &__title {
      margin-bottom: 4px;
      padding-bottom: 3px;
      border-bottom: 1px solid #f0b072;
      color: #b5530a;
      font-weight: 700;
    }
  }

  .services {
    display: grid;
    align-content: start;
    gap: 2px;
    padding: 8px 10px;
    border: 1px solid #b9c4d6;
    background: #ffffff;

    &__group {
      margin-top: 6px;
      color: #b5530a;
      font-weight: 700;
    }
  }

  .link {
    color: #14397a;

    &::before {
      content: "› ";
      color: #e8780a;
      font-weight: 700;
    }
  }
</style>
