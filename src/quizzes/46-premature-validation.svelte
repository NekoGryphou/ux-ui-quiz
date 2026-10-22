<script lang="ts">
    import type {VisualProps} from "../engine/types/quiz.types";
    import {BrandTheme, Field, MockButton} from "../mock";

    let { variant = "a" }: VisualProps = $props();
</script>

<BrandTheme brand="editorial">
  <div class="card">
    <p class="title">Create your account</p>
    <Field label="Full name" value="Camille Durand" />
    {#if variant === "a"}
      <Field label="Email" value="camille.du" state="error" message="Enter a valid email address." />
    {:else}
      <Field label="Email" value="camille.du" state="focus" />
    {/if}
    <Field label="Password" type="password" placeholder="At least 8 characters" />
    <MockButton variant="primary" block>Create account</MockButton>
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
