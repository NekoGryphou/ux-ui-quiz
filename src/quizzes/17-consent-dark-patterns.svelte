<script lang="ts">
    import {BrandTheme, BrowserShell, Checkbox, Field, MockButton, Title} from "../mock";
</script>

<BrandTheme brand="playful">
  <BrowserShell url="app.billfold.io/signup">
    <div class="page">
      <div class="form">
        <Title>Create your account</Title>
        <Field label="Full name" value="Priya Nair" />
        <Field label="Work email" value="priya@nairstudio.com" />
        <Field label="Password" type="password" value="correcthorse" />
        <div class="consents">
          <Checkbox checked label="Send me product tips and offers from partners" />
          <Checkbox checked label="Share my usage data to improve recommendations" />
        </div>
        <MockButton variant="primary" block>Create account</MockButton>
        <p class="terms">By creating an account you agree to our Terms and Privacy Policy.</p>
      </div>
    </div>
  </BrowserShell>
</BrandTheme>

<style lang="scss">
  .page {
    display: grid;
    place-items: center;
    padding: 26px 20px;
  }

  .form {
    display: grid;
    gap: 12px;
    width: min(100%, 360px);
  }

  .consents {
    display: grid;
    gap: 10px;
    padding: 4px 0;
  }

  .terms {
    color: var(--mock-muted);
    font-size: 11px;
    text-align: center;
  }
</style>
