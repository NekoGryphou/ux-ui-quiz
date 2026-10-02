<script module lang="ts">
  import type { QuizMeta } from "../engine/types/quiz.types";
  import { wcag } from "./utils/wcag.utils";

  export const meta: QuizMeta = {
    id: "filename-alt-text",
    title: "An image named after its file",
    principle: "Give meaningful images a meaningful text alternative",
    scenario: "A developer asks for a quick accessibility review of a product card before it ships.",
    prompt: "Click the part of the markup that fails screen reader users.",
    kind: "hotspot",
    regions: [
      { id: "image", text: "Line 2: image" },
      { id: "name", text: "Line 3: product name" },
      { id: "price", text: "Line 4: price" },
      { id: "size", text: "Lines 5–9: size field" },
      { id: "button", text: "Line 10: button" }
    ],
    correct: ["image"],
    links: [wcag("1.1.1", "Non-text Content", "non-text-content")],
    explanation: [
      "The alt text is the file name, so a screen reader announces “IMG_2041.jpg”: noise instead of information (WCAG 1.1.1 Non-text Content).",
      'Describe what the image adds: alt="Trail Runner 2 in blue, side view". If the image only repeats the heading, an empty alt="" tells assistive tech to skip it.',
      "The rest is solid: a real heading, a label tied to its select with for/id, and a native button with visible text."
    ]
  };
</script>

<script lang="ts">
  import { CodeEditor, CodeLines, Hotspot } from "../mock";

  const opening: string = '<article class="product-card">';
  const image: string = '  <img src="/img/trail-runner-blue.jpg" alt="IMG_2041.jpg">';
  const name: string = "  <h3>Trail Runner 2</h3>";
  const price: string = '  <p class="price">€79.90</p>';
  const size: string =
    '  <label for="size">Size</label>\n  <select id="size" name="size">\n    <option>41</option>\n    <option>42</option>\n  </select>';
  const button: string = '  <button type="submit">Add to cart</button>';
  const closing: string = "</article>";
</script>

<CodeEditor filename="ProductCard.html">
  <CodeLines code={opening} start={1} />
  <Hotspot id="image"><CodeLines code={image} start={2} /></Hotspot>
  <Hotspot id="name"><CodeLines code={name} start={3} /></Hotspot>
  <Hotspot id="price"><CodeLines code={price} start={4} /></Hotspot>
  <Hotspot id="size"><CodeLines code={size} start={5} /></Hotspot>
  <Hotspot id="button"><CodeLines code={button} start={10} /></Hotspot>
  <CodeLines code={closing} start={11} />
</CodeEditor>
