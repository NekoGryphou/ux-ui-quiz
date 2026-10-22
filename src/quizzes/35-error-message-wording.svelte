<script lang="ts">
    import type {VisualProps} from "../engine/types/quiz.types";
    import {BrandTheme, Field, MockButton} from "../mock";

    let { variant = "a" }: VisualProps = $props();
</script>

<BrandTheme brand="brutalist">
  <div class="card">
    <p class="title">Schedule delivery</p>
    <Field
      label="Delivery date"
      value="Today, 14 May"
      state="error"
      message={variant === "a"
        ? "Error 422: invalid input."
        : "Same-day delivery isn’t available. Pick a date from 15 May onwards."}
    />
    <Field label="Time slot" type="select" value="18:00 – 20:00" />
    <MockButton variant="primary" block>Confirm delivery</MockButton>
  </div>
</BrandTheme>

<style lang="scss">
  .card {
    display: grid;
    gap: 14px;
    width: 300px;
    padding: 20px;
    border: 1px solid var(--mock-border);
    border-radius: 12px;
    background: var(--mock-surface);
    color: var(--mock-text);
    font-size: 13px;
  }

  .title {
    font-size: 16px;
    font-weight: 600;
  }
</style>
