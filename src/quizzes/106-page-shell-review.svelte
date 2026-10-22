<script lang="ts">
  import { CodeEditor, CodeLines, Hotspot } from "../mock";

  const html: string = "<html>";
  const head: string = '<head>\n  <meta charset="utf-8">\n  <title>Your orders – Order portal</title>\n</head>';
  const body: string = "<body>";
  const nav: string =
    '  <nav aria-label="Main">\n    <a href="/orders">Orders</a>\n    <a href="/invoices">Invoices</a>\n  </nav>';
  const main: string = "  <main>\n    <h1>Your orders</h1>";
  const image: string = '    <img src="/img/divider.svg" alt="">';
  const promo: string =
    '    <div class="promo" aria-hidden="true">\n      <p>Free delivery on orders over €50</p>\n      <button type="button">Dismiss</button>\n    </div>';
  const closing: string = '    <table class="orders">…</table>\n  </main>\n</body>\n</html>';
</script>

<CodeEditor filename="layout.html">
  <Hotspot id="html"><CodeLines code={html} start={1} /></Hotspot>
  <Hotspot id="head"><CodeLines code={head} start={2} /></Hotspot>
  <CodeLines code={body} start={6} />
  <Hotspot id="nav"><CodeLines code={nav} start={7} /></Hotspot>
  <Hotspot id="main"><CodeLines code={main} start={11} /></Hotspot>
  <Hotspot id="image"><CodeLines code={image} start={13} /></Hotspot>
  <Hotspot id="promo"><CodeLines code={promo} start={14} /></Hotspot>
  <CodeLines code={closing} start={18} />
</CodeEditor>
