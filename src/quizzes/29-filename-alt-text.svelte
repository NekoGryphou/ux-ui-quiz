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
