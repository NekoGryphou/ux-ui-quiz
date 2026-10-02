<script module lang="ts">
  import type { QuizMeta } from "../engine/types/quiz.types";

  export const meta: QuizMeta = {
    id: "font-salad",
    title: "Six fonts, no hierarchy",
    principle: "Limit typefaces and sizes to build a clear hierarchy",
    scenario: "A couple looks up a neighbourhood bistro to check tonight’s set menu and its price.",
    prompt: "What is the main issue with this page?",
    kind: "single",
    choices: [
      { id: "a", text: "Six typefaces and sizes compete, so nothing reads as the title and the price gets lost." },
      { id: "b", text: "The menu sits in a single column, where two columns would fit more dishes on screen." },
      { id: "c", text: "The page uses a cream background, where plain white would make the text look sharper." },
      { id: "d", text: "Dish names come before the descriptions, where the reverse would build more appetite." }
    ],
    correct: ["a"],
    explanation: [
      "A script, a slab, a typewriter face, a condensed display font and two sans serifs all fight for attention. With no consistent scale, the restaurant name, the menu title and the price look equally important, and the €38 hides in the middle.",
      "One or two typefaces are enough: a distinctive one for headings and a readable one for text. Build hierarchy with a small set of sizes and weights, used the same way everywhere.",
      "A single column suits a short menu, a cream background is a classic restaurant choice, and leading with dish names is how menus are read."
    ]
  };
</script>

<div class="menu">
  <p class="menu__name">Chez Margot</p>
  <p class="menu__tag">BISTRO · SINCE 1987</p>
  <p class="menu__title">Tonight’s Set Menu</p>
  <p class="menu__price">3 courses — €38 per person, wine pairing +€18</p>
  <div class="menu__dish">
    <span class="menu__course">STARTER</span>
    <span class="menu__item">Leek & potato velouté, chive oil</span>
  </div>
  <div class="menu__dish">
    <span class="menu__course">MAIN</span>
    <span class="menu__item">Duck confit, Puy lentils, red wine jus</span>
  </div>
  <div class="menu__dish">
    <span class="menu__course">DESSERT</span>
    <span class="menu__item">Tarte Tatin, crème fraîche</span>
  </div>
  <p class="menu__book">Book a table → 01 42 00 00 00</p>
</div>

<style lang="scss">
  .menu {
    display: grid;
    gap: 10px;
    width: 420px;
    padding: 28px;
    background: #fbf3e4;
    color: #2b1d12;
    box-shadow: var(--mock-shadow-md);

    &__name {
      font:
        italic 400 38px/1 "Brush Script MT",
        "Segoe Script",
        cursive;
      color: #7a1f1f;
    }

    &__tag {
      font:
        700 13px/1 "Space Grotesk",
        "Arial Narrow",
        sans-serif;
      letter-spacing: 0.3em;
      color: #4b6b3a;
    }

    &__title {
      font:
        700 22px/1.2 "Playfair Display",
        "Courier New",
        serif;
    }

    &__price {
      font:
        400 14px/1.4 "Courier New",
        monospace;
      color: #6b5a4a;
    }

    &__dish {
      display: grid;
      gap: 2px;
      padding-top: 8px;
      border-top: 1px dashed #d9c6a5;
    }

    &__course {
      font:
        700 11px/1 "Arial Black",
        sans-serif;
      color: #b0471f;
    }

    &__item {
      font:
        400 17px/1.3 "Comic Sans MS",
        "Comic Neue",
        cursive;
    }

    &__book {
      margin-top: 6px;
      font:
        600 15px/1.3 "Nunito",
        sans-serif;
      color: #7a1f1f;
    }
  }
</style>
