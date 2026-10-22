<script lang="ts">
  import { BrandTheme, BrowserShell, KeyboardSandbox, KeyTarget, MockButton } from "../mock";
  import type { KeyStop } from "../mock/types/keyboard.types";

  const links: string[] = [
    "Product",
    "Features",
    "Pricing",
    "Customers",
    "Integrations",
    "Docs",
    "API",
    "Blog",
    "Events",
    "Careers",
    "Press",
    "Status",
    "Log in",
    "Sign up"
  ];

  const stops: KeyStop[] = [
    ...links.map((link): KeyStop => ({ id: link, label: `${link} link` })),
    { id: "email", label: "Email field" },
    { id: "send", label: "Send button" },
    { id: "name", label: "Name field" },
    { id: "company", label: "Company field" },
    { id: "message", label: "Message field" }
  ];
</script>

<BrandTheme brand="corporate">
  <KeyboardSandbox {stops}>
    <BrowserShell url="www.relaykit.io/contact">
      <div class="header">
        <span class="brand">Relaykit</span>
        <div class="links">
          {#each links as link (link)}
            <KeyTarget id={link} inline><span class="link">{link}</span></KeyTarget>
          {/each}
        </div>
      </div>
      <div class="page">
        <p class="title">Contact sales</p>
        <div class="row">
          <KeyTarget id="name"><span class="field">Name</span></KeyTarget>
          <KeyTarget id="company"><span class="field">Company</span></KeyTarget>
        </div>
        <KeyTarget id="email"><span class="field">Email</span></KeyTarget>
        <KeyTarget id="message"><span class="field field--area">Message</span></KeyTarget>
        <KeyTarget id="send" inline><MockButton variant="primary">Send</MockButton></KeyTarget>
      </div>
    </BrowserShell>
  </KeyboardSandbox>
</BrandTheme>

<style lang="scss">
  .header {
    display: grid;
    gap: 8px;
    padding: 12px 18px;
    border-bottom: 1px solid var(--mock-border);
    background: var(--mock-surface);
  }

  .brand {
    font-weight: 700;
  }

  .links {
    display: flex;
    flex-wrap: wrap;
    gap: 6px 14px;
  }

  .link {
    color: var(--mock-muted);
    font-size: 12px;
  }

  .page {
    display: grid;
    gap: 12px;
    max-width: 420px;
    padding: 20px 24px 26px;
  }

  .title {
    font-size: 18px;
    font-weight: 600;
  }

  .row {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 12px;
  }

  .field {
    display: block;
    padding: 9px 11px;
    border: 1px solid var(--mock-border);
    border-radius: var(--mock-radius);
    background: var(--mock-surface);
    color: var(--mock-muted);

    &--area {
      height: 60px;
    }
  }
</style>
