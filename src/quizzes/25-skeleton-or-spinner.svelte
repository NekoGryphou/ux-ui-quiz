<script lang="ts">
  import type { VisualProps } from "../engine/types/quiz.types";
  import { AppBar, BrandTheme, PhoneShell, Skeleton, Spinner, TabBar } from "../mock";
  import { t } from "../shared/locale.svelte";

  let { variant = "a" }: VisualProps = $props();
</script>

<BrandTheme brand="playful">
  <PhoneShell>
    <AppBar title={t("Today", "Aujourd’hui")} large />
    {#if variant === "a"}
      <div class="feed">
        {#each [1, 2, 3] as item (item)}
          <div class="card">
            <span class="image" aria-hidden="true"></span>
            <Skeleton lines={2} />
          </div>
        {/each}
      </div>
    {:else}
      <div class="loading"><Spinner size={30} /></div>
    {/if}
    <TabBar
      tabs={[
        { icon: "home", label: t("Today", "Aujourd’hui"), active: true },
        { icon: "search", label: t("Search", "Rechercher") },
        { icon: "star", label: t("Saved", "Favoris") },
        { icon: "user", label: t("Profile", "Profil") }
      ]}
    />
  </PhoneShell>
</BrandTheme>

<style lang="scss">
  .feed {
    display: grid;
    gap: 12px;
    padding: 4px 16px;
    overflow: hidden;
  }

  .card {
    display: grid;
    gap: 10px;
    padding: 10px;
    border-radius: 14px;
    background: var(--mock-surface);
  }

  .image {
    height: 80px;
    border-radius: 10px;
    background: var(--mock-track);
  }

  .loading {
    display: grid;
    flex: 1;
    place-items: center;
  }
</style>
