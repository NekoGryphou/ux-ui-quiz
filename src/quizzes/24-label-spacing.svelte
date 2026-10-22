<script lang="ts">
  import type { VisualProps } from "../engine/types/quiz.types";
  import { BrandTheme, MockButton } from "../mock";

  let { variant = "a" }: VisualProps = $props();
</script>

<BrandTheme brand="luxury">
  <div class="card card--{variant}">
    <p class="title">Delivery address</p>
    <div class="group">
      <span class="label">Full name</span>
      <span class="input">Camille Durand</span>
    </div>
    <div class="group">
      <span class="label">Street address</span>
      <span class="input">12 rue des Lilas</span>
    </div>
    <div class="pair">
      <div class="group">
        <span class="label">Postcode</span>
        <span class="input">75011</span>
      </div>
      <div class="group">
        <span class="label">City</span>
        <span class="input">Paris</span>
      </div>
    </div>
    <MockButton variant="primary" block>Continue</MockButton>
  </div>
</BrandTheme>

<style lang="scss">
  .card {
    display: grid;
    width: 300px;
    padding: 20px;
    border: 1px solid var(--mock-border);
    border-radius: 12px;
    background: var(--mock-surface);
    color: var(--mock-text);
    font-size: 13px;

    &--a {
      gap: 12px;

      .group {
        gap: 12px;
      }

      .pair {
        grid-template-columns: 1fr;
        gap: 12px;
      }
    }

    &--b {
      gap: 18px;

      .group {
        gap: 5px;
      }

      .pair {
        grid-template-columns: 1fr 1.4fr;
        gap: 10px;
      }
    }
  }

  .title {
    font-size: 16px;
    font-weight: 600;
  }

  .group,
  .pair {
    display: grid;
  }

  .label {
    font-weight: 500;
  }

  .input {
    padding: 8px 10px;
    border: 1px solid var(--mock-border);
    border-radius: var(--mock-radius);
  }
</style>
