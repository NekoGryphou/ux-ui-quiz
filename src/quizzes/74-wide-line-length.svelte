<script module lang="ts">
  import type { QuizMeta } from "../engine/types/quiz.types";

  export const meta: QuizMeta = {
    id: "wide-line-length",
    title: "One line, one head turn",
    principle: "Keep line length readable on wide screens",
    scenario: "A reader opens a long help article on a 27-inch monitor to follow a setup guide.",
    prompt: "Which version reads better on this screen?",
    kind: "compare",
    layout: "stacked",
    correct: ["b"],
    explanation: [
      "When text fills the whole width of a large monitor, each line runs over 200 characters: the eye loses its place jumping back to the start of the next line, and long guides become tiring.",
      "Cap the reading column at around 60–80 characters (max-width in ch or rem) and use the extra space for margins, a table of contents or a side panel.",
      "Both versions show the same article, font and size; only the width of the text column differs."
    ]
  };
</script>

<script lang="ts">
  import type { VisualProps } from "../engine/types/quiz.types";
  import { BrandTheme, BrowserShell, ViewportBadge } from "../mock";

  let { variant = "a" }: VisualProps = $props();
</script>

<BrandTheme brand="corporate">
  <div class="wrap">
    <ViewportBadge label="1920 px" />
    <BrowserShell url="help.cloudbox.io/setup-sync">
      <div class="doc" class:doc--narrow={variant === "b"}>
        <p class="doc__title">Set up file sync on a new computer</p>
        <p>
          Install the desktop app and sign in with the account you use on your other devices. Sync starts once you
          choose a folder; keep the computer online until the menu bar shows that everything is up to date.
        </p>
      </div>
    </BrowserShell>
  </div>
</BrandTheme>

<style lang="scss">
  .wrap {
    display: grid;
    justify-items: start;
    gap: 10px;
  }

  .doc {
    display: grid;
    gap: 12px;
    padding: 18px 22px;
    font-size: 12px;
    line-height: 1.6;

    &--narrow {
      max-width: 62ch;
      margin-inline: auto;
    }

    &__title {
      font-size: 17px;
      font-weight: 600;
      line-height: 1.2;
    }
  }
</style>
