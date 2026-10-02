<script module lang="ts">
  import type { QuizMeta } from "../engine/types/quiz.types";
  import { wcag } from "./utils/wcag.utils";

  export const meta: QuizMeta = {
    id: "links-like-text",
    title: "Hidden in plain text",
    principle: "Make links look like links",
    scenario: "A reader wants to open the guides this travel article mentions to plan their own trip.",
    prompt: "Which version works better?",
    kind: "compare",
    correct: ["a"],
    links: [wcag("1.4.1", "Use of Color", "use-of-color")],
    explanation: [
      "Links styled exactly like the surrounding text (same color, no underline) are invisible until you happen to hover them, and touch screens have no hover at all. The reader can’t tell which phrases lead somewhere.",
      "Give links a cue beyond color that works at a glance: an underline is the clearest. If links differ from text only by color, they need 3:1 contrast with the text plus another cue on focus and hover (WCAG 1.4.1 Use of Color).",
      "Both versions use the same typeface, colors and links; only the link styling differs."
    ]
  };
</script>

<script lang="ts">
  import type { VisualProps } from "../engine/types/quiz.types";

  let { variant = "a" }: VisualProps = $props();
</script>

<article class="article" class:article--plain={variant === "b"}>
  <p class="article__kicker">SLOW TRAVEL</p>
  <p class="article__title">Three weeks by train, one backpack</p>
  <p>
    We started in Lisbon with the <span class="link">rail pass guide</span> open on our phones, then followed the coast
    north. Booking the night trains early mattered more than anything; the
    <span class="link">seat reservation tips</span> saved us twice.
  </p>
  <p>
    For packing, we stuck to the <span class="link">one-bag checklist</span> and never regretted it.
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
