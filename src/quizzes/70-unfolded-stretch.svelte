<script lang="ts">
    import type {VisualProps} from "../engine/types/quiz.types";
    import {FoldableShell} from "../mock";
    import type {MailItem} from "./types/quiz-mocks.types";

    let { variant = "a" }: VisualProps = $props();

  const mails: MailItem[] = [
    { from: "Priya", subject: "Budget Q3 — final numbers", preview: "Here are the figures we agreed on yesterday…" },
    { from: "Lukas", subject: "Workshop room change", preview: "We moved to room 4B because the projector…" },
    { from: "Sales", subject: "Weekly pipeline", preview: "Four deals moved to negotiation this week…" },
    { from: "Ana", subject: "Re: hiring plan", preview: "Sounds good, let’s open the two roles…" }
  ];
</script>

<FoldableShell width={330} height={300} label="Unfolded phone">
  <div class="mail" class:mail--split={variant === "b"}>
    <div class="list">
      <p class="list__title">Inbox</p>
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
        <p class="detail__subject">Budget Q3 — final numbers</p>
        <p class="detail__from">Priya · 09:12</p>
        <p>Here are the figures we agreed on yesterday. Marketing stays at €40k, events move to Q4.</p>
        <span class="detail__reply">Reply</span>
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
