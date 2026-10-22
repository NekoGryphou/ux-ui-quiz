<script lang="ts">
  import { CodeEditor, CodeLines } from "../mock";

  const code: string = [
    '<form action="/checkout/address" method="post">',
    '  <label for="name">Full name</label>',
    '  <input id="name" name="name" type="text" required>',
    "",
    '  <label for="email">Email</label>',
    '  <input id="email" name="email" type="text" required',
    '         aria-describedby="email-hint">',
    '  <p id="email-hint">We’ll send your receipt here.</p>',
    "",
    '  <label for="street">Street address</label>',
    '  <input id="address" name="address" type="text" required>',
    "",
    '  <label for="postcode">Postcode</label>',
    '  <input id="postcode" name="postcode" type="text" required>',
    "",
    '  <label for="city">City</label>',
    '  <input id="city" name="city" type="text" required>',
    "",
    '  <label for="country">Country</label>',
    '  <select id="country" name="country" required>…</select>',
    "",
    '  <button type="submit">Continue to payment</button>',
    "</form>"
  ].join("\n");
</script>

<CodeEditor filename="AddressStep.html">
  <CodeLines {code} start={1} />
</CodeEditor>
