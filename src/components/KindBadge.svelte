<script lang="ts">
    import Icon from "./Icon.svelte";
    import type {KindBadgeLook, KindBadgeProps} from "./types/kind-badge.types";
    import {kindBadgeLook} from "./utils/kind-badge.utils";

    let { kind, several }: KindBadgeProps = $props();

  const look: KindBadgeLook = $derived(kindBadgeLook(kind, several));
</script>

<span class="kind kind--{look.tone}">
  <Icon name={look.icon} size={16} strokeWidth={2.25} />
  {look.text}
</span>

<style lang="scss">
  .kind {
    --fill: var(--badge-single);
    display: inline-flex;
    align-items: center;
    gap: var(--space-2);
    padding: var(--space-1) var(--space-3);
    border-radius: var(--radius-full);
    background: var(--fill);
    color: var(--brand-navy-ink);
    font-size: var(--text-sm);
    font-weight: 700;
    white-space: nowrap;

    &--multiple {
      --fill: var(--badge-multiple);
    }

    &--hotspot {
      --fill: var(--badge-hotspot);
    }

    &--compare {
      --fill: var(--badge-compare);
    }
  }
</style>
