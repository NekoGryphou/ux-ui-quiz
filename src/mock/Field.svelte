<script lang="ts">
  import type { FieldProps } from "./types/field.types";
  import Icon from "../components/Icon.svelte";

  let {
    label,
    value,
    placeholder,
    type = "text",
    state = "default",
    icon,
    required = false,
    hint,
    message
  }: FieldProps = $props();

  const shown: string = $derived(type === "password" && value !== undefined ? "•".repeat(value.length) : (value ?? ""));
</script>

<div class="field field--{state}">
  {#if label}
    <span class="field__label"
      >{label}{#if required}<span class="field__required"> *</span>{/if}</span
    >
  {/if}
  <span class="field__control" class:field__control--textarea={type === "textarea"}>
    {#if icon}<Icon name={icon} size={15} />{/if}
    <span class="field__value" class:field__value--placeholder={shown === ""}
      >{shown === "" ? (placeholder ?? "") : shown}</span
    >
    {#if state === "focus"}<span class="field__caret" aria-hidden="true"></span>{/if}
    {#if type === "select"}<Icon name="chevron-down" size={15} />{/if}
    {#if type === "password"}<Icon name="eye" size={15} />{/if}
  </span>
  {#if message}
    <span class="field__message">
      {#if state === "error"}<Icon name="alert-triangle" size={13} />{/if}
      {message}
    </span>
  {:else if hint}
    <span class="field__hint">{hint}</span>
  {/if}
</div>

<style lang="scss">
  .field {
    display: grid;
    gap: 6px;

    &__label {
      font-weight: 500;
    }

    &__required {
      color: var(--mock-danger);
    }

    &__control {
      display: flex;
      align-items: center;
      gap: 8px;
      min-height: 36px;
      padding: 0 11px;
      border: var(--mock-border-width) solid var(--mock-border);
      border-radius: var(--mock-radius);
      background: var(--mock-surface);
      color: var(--mock-muted);

      &--textarea {
        align-items: flex-start;
        min-height: 72px;
        padding-block: 8px;
      }
    }

    &__value {
      flex: 1;
      min-width: 0;
      overflow: hidden;
      color: var(--mock-text);
      white-space: nowrap;
      text-overflow: ellipsis;

      &--placeholder {
        color: var(--mock-muted);
      }
    }

    &__caret {
      width: 1px;
      height: 16px;
      margin-left: -8px;
      background: var(--mock-text);
      animation: blink 1s steps(1) infinite;
    }

    &__hint,
    &__message {
      display: flex;
      align-items: center;
      gap: 5px;
      font-size: 12px;
      color: var(--mock-muted);
    }

    &--focus &__control {
      border-color: var(--mock-primary);
      box-shadow: 0 0 0 3px var(--mock-focus);
    }

    &--error &__control {
      border-color: var(--mock-danger);
    }

    &--error &__message {
      color: var(--mock-danger);
    }

    &--success &__control {
      border-color: var(--mock-success);
    }

    &--disabled &__control {
      background: var(--mock-fill);
    }

    &--disabled &__value {
      color: var(--mock-muted);
    }
  }

  @keyframes blink {
    50% {
      opacity: 0;
    }
  }
</style>
