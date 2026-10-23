<script lang="ts">
  import { AppBar, BrandTheme, PhoneShell, Photo, TabBar } from "../mock";
  import { t } from "../shared/locale.svelte";
  import { PHOTO_PASTA, PHOTO_SALMON, PHOTO_SHAKSHUKA } from "./const/photo.const";
  import type { Recipe } from "./types/quiz-mocks.types";

  const recipes: Recipe[] = $derived([
    { name: t("Lemon ricotta pasta", "Pâtes ricotta citron"), meta: t("20 min · 4.8 ★", "20 min · 4,8 ★") },
    { name: t("Miso glazed salmon", "Saumon laqué au miso"), meta: t("25 min · 4.6 ★", "25 min · 4,6 ★") },
    { name: t("Green shakshuka", "Shakshuka verte"), meta: t("30 min · 4.7 ★", "30 min · 4,7 ★") }
  ]);
</script>

<BrandTheme brand="playful">
  <PhoneShell>
    <AppBar title={t("Discover", "Découvrir")} large />
    <div class="feed">
      {#each recipes as recipe, i (i)}
        <div class="card">
          <span class="photo"><Photo src={[PHOTO_PASTA, PHOTO_SALMON, PHOTO_SHAKSHUKA][i]?.url ?? ""} /></span>
          <strong>{recipe.name}</strong>
          <small>{recipe.meta}</small>
        </div>
      {/each}
    </div>
    <TabBar
      iconsOnly
      tabs={[
        { icon: "home", label: t("Home", "Accueil"), active: true },
        { icon: "search", label: t("Search", "Rechercher") },
        { icon: "plus", label: t("New", "Nouveau") },
        { icon: "heart", label: t("Likes", "J’aime") },
        { icon: "star", label: t("Saved", "Enregistrées") },
        { icon: "bell", label: t("Activity", "Activité"), badge: "3" },
        { icon: "user", label: t("Profile", "Profil") }
      ]}
    />
  </PhoneShell>
</BrandTheme>

<style lang="scss">
  .feed {
    display: grid;
    gap: 12px;
    padding: 4px 16px 12px;
    overflow: hidden;
  }

  .card {
    display: grid;
    gap: 2px;
    padding: 8px;
    border-radius: 14px;
    background: var(--mock-surface);

    strong {
      margin-top: 6px;
      font-weight: 600;
    }

    small {
      color: var(--mock-muted);
      font-size: 11px;
    }
  }

  .photo {
    overflow: hidden;
    height: 74px;
    border-radius: 10px;
  }
</style>
