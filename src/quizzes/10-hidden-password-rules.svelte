<script lang="ts">
  import { BrandTheme, BrowserShell, Field, MockButton, Title } from "../mock";
</script>

<BrandTheme brand="playful">
  <BrowserShell url="accounts.fitnest.app/create">
    <div class="page">
      <div class="form">
        <Title>Create your password</Title>
        <p class="account">Signing up as <strong>sam.ortiz@mail.com</strong></p>
        <Field
          label="Password"
          type="password"
          value="sunsetrun"
          state="error"
          message="Password doesn’t meet requirements."
        />
        <Field label="Confirm password" type="password" value="sunsetrun" />
        <MockButton variant="primary" block>Create account</MockButton>
      </div>
    </div>
  </BrowserShell>
</BrandTheme>

<style lang="scss">
  .account {
    margin: -6px 0 2px;
    color: var(--mock-muted);

    strong {
      color: var(--mock-text);
      font-weight: 500;
    }
  }

  .page {
    display: grid;
    place-items: center;
    padding: 32px 20px;
  }

  .form {
    display: grid;
    gap: 14px;
    width: min(100%, 340px);
  }
</style>
