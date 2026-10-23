<script lang="ts">
  import type { VisualProps } from "../engine/types/quiz.types";
  import { FoldableShell } from "../mock";
  import { t } from "../shared/locale.svelte";
  import type { MailItem } from "./types/quiz-mocks.types";

  let { variant = "a" }: VisualProps = $props();

  const mails: MailItem[] = $derived([
    {
      from: "Priya",
      subject: t("Budget Q3 — final numbers", "Budget T3 — chiffres définitifs"),
      preview: t("Here are the figures we agreed on yesterday…", "Voici les chiffres validés hier…")
    },
    {
      from: "Lukas",
      subject: t("Workshop room change", "Changement de salle pour l’atelier"),
      preview: t("We moved to room 4B because the projector…", "On passe en salle 4B parce que le projecteur…")
    },
    {
      from: t("Sales", "Ventes"),
      subject: t("Weekly pipeline", "Pipeline hebdo"),
      preview: t("Four deals moved to negotiation this week…", "Quatre affaires passées en négociation cette semaine…")
    },
    {
      from: "Ana",
      subject: t("Re: hiring plan", "RE : plan de recrutement"),
      preview: t("Sounds good, let’s open the two roles…", "Ça me va, ouvrons les deux postes…")
    }
  ]);
</script>

<FoldableShell width={330} height={300} label={t("Unfolded phone", "Téléphone déplié")}>
  <div class="mail" class:mail--split={variant === "b"}>
    <div class="list">
      <p class="list__title">{t("Inbox", "Boîte de réception")}</p>
      {#each mails as mail, i (mail.subject)}
        <div class="row" class:row--active={variant === "b" && i === 0}>
          <strong>{mail.from}</strong>
          <span>{mail.subject}</span>
          <small>{mail.preview}</small>
        </div>
      {/each}
    </div>
    {#if variant === "b"}
      <div class="detail">
        <p class="detail__subject">{t("Budget Q3 — final numbers", "Budget T3 — chiffres définitifs")}</p>
        <p class="detail__from">Priya · 09:12</p>
        <p>
          {t(
            "Here are the figures we agreed on yesterday. Marketing stays at €40k, events move to Q4.",
            "Voici les chiffres validés hier. Le marketing reste à 40 k€, les événements passent au T4."
          )}
        </p>
        <span class="detail__reply">{t("Reply", "Répondre")}</span>
      </div>
    {/if}
  </div>
</FoldableShell>

<style lang="scss">
  .mail {
    display: grid;
    flex: 1;
    min-height: 0;
    padding: 4px 10px 10px;
    font-size: 10px;

    &--split {
      grid-template-columns: 1fr 1fr;
      gap: 18px;
    }
  }

  .list {
    display: grid;
    align-content: start;
    gap: 4px;

    &__title {
      font-size: 13px;
      font-weight: 700;
    }
  }

  .row {
    display: grid;
    padding: 6px 8px;
    border-radius: 6px;
    background: var(--mock-surface);

    small {
      overflow: hidden;
      color: var(--mock-muted);
      white-space: nowrap;
      text-overflow: ellipsis;
    }

    &--active {
      background: var(--mock-primary-soft);
    }
  }

  .detail {
    display: grid;
    align-content: start;
    gap: 6px;
    padding: 8px;
    border-radius: 6px;
    background: var(--mock-surface);

    &__subject {
      font-size: 12px;
      font-weight: 700;
    }

    &__from {
      color: var(--mock-muted);
    }

    &__reply {
      justify-self: start;
      padding: 4px 10px;
      border-radius: 6px;
      background: var(--mock-primary);
      color: var(--mock-primary-text);
      font-weight: 600;
    }
  }
</style>
