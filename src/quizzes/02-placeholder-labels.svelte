<script lang="ts">
  import { BrandMark, BrowserShell, MockButton, Title } from "../mock";
</script>

<BrowserShell url="app.ledgerly.com/sign-in">
  <div class="page">
    <div class="panel">
      <BrandMark name="Ledgerly" size={36} />
      <Title>Welcome back</Title>
      <p class="muted">Sign in to your workspace</p>
      <div class="input input--typing">camille.durand@</div>
      <div class="input input--placeholder">Password</div>
      <MockButton variant="primary" block>Sign in</MockButton>
      <span class="forgot">Forgot your password?</span>
    </div>
  </div>
</BrowserShell>

<style lang="scss">
  .page {
    display: grid;
    place-items: center;
    padding: 40px 20px;
    background: linear-gradient(180deg, #f2f5ff, var(--mock-bg));
  }

  .panel {
    display: grid;
    gap: 12px;
    width: min(100%, 320px);
    padding: 28px;
    border: 1px solid var(--mock-border);
    border-radius: 14px;
    background: var(--mock-surface);
    box-shadow: 0 8px 24px rgb(15 18 32 / 0.06);
  }

  .muted {
    margin: -8px 0 6px;
    color: var(--mock-muted);
  }

  .input {
    display: flex;
    align-items: center;
    height: 38px;
    padding: 0 12px;
    border: 1px solid var(--mock-border);
    border-radius: var(--mock-radius);

    &--typing {
      border-color: var(--mock-primary);
      box-shadow: 0 0 0 3px rgb(37 99 235 / 0.15);

      &::after {
        content: "";
        width: 1px;
        height: 16px;
        margin-left: 1px;
        background: var(--mock-text);
      }
    }

    &--placeholder {
      color: #c9ccd3;
    }
  }

  .forgot {
    color: var(--mock-primary);
    font-size: 12px;
    text-align: center;
  }
</style>
