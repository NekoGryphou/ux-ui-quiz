<script lang="ts">
  import { t } from "../shared/locale.svelte";
  import Icon from "./Icon.svelte";
  import type { AnswerRevealProps, RevealSegment } from "./types/answer-reveal.types";
  import { outcomeSentence } from "./utils/answer-reveal.utils";

  let { quiz, correct, results, several }: AnswerRevealProps = $props();

  const sentence: RevealSegment[] = $derived(results === null ? [] : outcomeSentence(results, several));
</script>

<section class="reveal" class:reveal--correct={correct} aria-label={t("Explanation", "Explication")}>
  <div class="reveal__head">
    <span class="reveal__icon"><Icon name={correct ? "check" : "x"} size={16} strokeWidth={3} /></span>
    <div class="reveal__verdict">
      <strong class="reveal__status"
        >{correct ? t("Correct", "Bonne réponse") : t("Not quite", "Pas tout à fait")}</strong
      >
      {#if sentence.length > 0}
        <p class="reveal__outcome">
          {#each sentence as segment, i (i)}{#if segment.strong}<strong>{segment.text}</strong
              >{:else}{segment.text}{/if}{/each}
        </p>
      {/if}
    </div>
  </div>

  <div class="reveal__body">
    <h2 class="reveal__title">{quiz.principle}</h2>
    <ul class="reveal__list">
      {#each quiz.explanation as line, i (i)}
        <li>{line}</li>
      {/each}
    </ul>
  </div>

  {#if quiz.links !== undefined && quiz.links.length > 0}
    <div class="reveal__links">
      <h3 class="reveal__links-title">{t("Learn more", "En savoir plus")}</h3>
      <ul class="reveal__list">
        {#each quiz.links as link (link.url)}
          <li>
            <a class="reveal__link" href={link.url} target="_blank" rel="noopener noreferrer">
              {link.label}
              <Icon name="external" size={13} />
              <span class="visually-hidden">(opens in a new tab)</span>
            </a>
          </li>
        {/each}
      </ul>
    </div>
  {/if}
</section>

<style lang="scss">
  @use "$styles/mixins" as *;

  .reveal {
    &__links {
      display: grid;
      gap: var(--space-2);
      padding-top: var(--space-4);
      border-top: 1px solid var(--border);
    }

    &__links-title {
      color: var(--text-muted);
      // noinspection CssNoGenericFontName
      font-family: var(--font-sans);
      font-size: var(--text-sm);
      font-weight: 600;
    }

    &__link {
      display: inline-flex;
      align-items: center;
      gap: var(--space-1);
      color: var(--primary-ink);
      font-weight: 500;
      text-underline-offset: 3px;
    }

    --tone: var(--danger);
    --tone-soft: var(--danger-soft);
    --on-tone: var(--on-danger);
    display: grid;
    gap: var(--space-4);
    padding: var(--space-4) var(--space-5) var(--space-5);
    border: var(--card-border) solid var(--tone);
    border-radius: var(--radius-lg);
    background: var(--surface);
    animation: rise var(--duration-slow) var(--ease);

    &--correct {
      --tone: var(--success);
      --tone-soft: var(--success-soft);
      --on-tone: var(--on-success);
    }

    &__head {
      display: flex;
      align-items: flex-start;
      gap: var(--space-3);
      padding-bottom: var(--space-4);
      border-bottom: 1px solid var(--border);
    }

    &__verdict {
      display: grid;
      gap: var(--space-1);
      padding-top: 3px;
    }

    &__status {
      color: var(--tone);
      font-size: var(--text-lg);
      line-height: 1.2;
    }

    &__outcome {
      font-size: var(--text-sm);
      line-height: 1.5;
    }

    &__icon {
      @include chip;
      background: var(--tone);
      color: var(--on-tone);
    }

    &__body {
      display: grid;
      gap: var(--space-3);
    }

    &__title {
      font-size: var(--text-lg);
      font-weight: 600;
      line-height: 1.3;
    }

    &__list {
      display: grid;
      gap: var(--space-2);
      margin: 0;
      padding-left: var(--space-5);
      font-size: var(--text-sm);
      line-height: 1.55;

      li::marker {
        color: var(--tone);
      }
    }
  }

  @keyframes rise {
    from {
      opacity: 0;
      transform: translateY(6px);
    }
  }
</style>
