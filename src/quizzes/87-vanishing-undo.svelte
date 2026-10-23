<script lang="ts">
  import { BrandTheme, PhoneShell } from "../mock";
  import { t } from "../shared/locale.svelte";
  import type { MailItem } from "./types/quiz-mocks.types";

  const mails: MailItem[] = $derived([
    {
      from: t("Landlord", "Propriétaire"),
      subject: t("Rent receipt — November", "Quittance de loyer — novembre"),
      preview: t("Please find attached your receipt…", "Veuillez trouver ci-joint votre quittance…")
    },
    {
      from: t("Mum", "Maman"),
      subject: t("Sunday lunch?", "Déjeuner dimanche ?"),
      preview: t("Are you coming this weekend? Dad’s…", "Tu viens ce week-end ? Papa a…")
    },
    {
      from: t("Bank", "Banque"),
      subject: t("Your statement is ready", "Votre relevé est disponible"),
      preview: t("Your monthly statement for…", "Votre relevé mensuel de…")
    },
    {
      from: t("Gym", "Salle de sport"),
      subject: t("New classes in December", "Nouveaux cours en décembre"),
      preview: t("Try our new spin and yoga…", "Essayez nos nouveaux cours de spinning et de yoga…")
    }
  ]);
</script>

<BrandTheme brand="corporate">
  <PhoneShell>
    <div class="inbox">
      <p class="inbox__title">{t("Inbox", "Boîte de réception")}</p>
      <div class="inbox__swiped">
        <div class="row row--gone">
          <strong>{t("HR Team", "Service RH")}</strong><span
            >{t("Your contract renewal — please sign", "Renouvellement de votre contrat — à signer")}</span
          >
        </div>
      </div>
      {#each mails as mail (mail.subject)}
        <div class="row"><strong>{mail.from}</strong><span>{mail.subject}</span><small>{mail.preview}</small></div>
      {/each}
      <div class="toast">
        <span>{t("Conversation archived", "Conversation archivée")}</span><strong>{t("UNDO", "ANNULER")}</strong>
      </div>
    </div>
  </PhoneShell>
</BrandTheme>

<style lang="scss">
  $loop: 6s;

  .inbox {
    position: relative;
    display: grid;
    align-content: start;
    gap: 2px;
    min-height: 530px;
    padding: 8px 12px;

    &__title {
      margin: 4px 4px 8px;
      font-size: 22px;
      font-weight: 700;
    }

    &__swiped {
      overflow: hidden;
      border-radius: var(--mock-radius);
      background: #2e7d32;
      animation: collapse $loop ease-in-out infinite;
    }
  }

  .row {
    display: grid;
    padding: 10px;
    border-radius: var(--mock-radius);
    background: var(--mock-surface);

    small {
      color: var(--mock-muted);
    }

    &--gone {
      animation: swipe $loop ease-in infinite;
    }
  }

  .toast {
    position: absolute;
    right: 14px;
    bottom: 26px;
    left: 14px;
    display: flex;
    justify-content: space-between;
    padding: 12px 14px;
    border-radius: var(--mock-radius);
    background: #1f2933;
    color: #ffffff;
    opacity: 0;
    animation: toast $loop ease-out infinite;

    strong {
      color: #8ab4ff;
    }
  }

  @keyframes swipe {
    0%,
    15% {
      transform: translateX(0);
    }
    25%,
    100% {
      transform: translateX(-110%);
    }
  }

  @keyframes collapse {
    0%,
    25% {
      max-height: 70px;
    }
    32%,
    94% {
      max-height: 0;
    }
    100% {
      max-height: 70px;
    }
  }

  @keyframes toast {
    0%,
    28% {
      opacity: 0;
      transform: translateY(16px);
    }
    31%,
    62% {
      opacity: 1;
      transform: translateY(0);
    }
    65%,
    100% {
      opacity: 0;
      transform: translateY(16px);
    }
  }
</style>
