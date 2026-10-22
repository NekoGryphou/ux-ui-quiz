<script lang="ts">
  import { AppBar, BrandTheme, PhoneShell, Photo, TabBar } from "../mock";
  import { PHOTO_PASTA, PHOTO_SALMON, PHOTO_SHAKSHUKA } from "./const/photo.const";
  import type { Recipe } from "./types/quiz-mocks.types";

  const recipes: Recipe[] = [
    { name: "Lemon ricotta pasta", meta: "20 min · 4.8 ★" },
    { name: "Miso glazed salmon", meta: "25 min · 4.6 ★" },
    { name: "Green shakshuka", meta: "30 min · 4.7 ★" }
  ];
</script>

<BrandTheme brand="playful">
  <PhoneShell>
    <AppBar title="Discover" large />
    <div class="feed">
      {#each recipes as recipe, i (recipe.name)}
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
        { icon: "home", label: "Home", active: true },
        { icon: "search", label: "Search" },
        { icon: "plus", label: "New" },
        { icon: "heart", label: "Likes" },
        { icon: "star", label: "Saved" },
        { icon: "bell", label: "Activity", badge: "3" },
        { icon: "user", label: "Profile" }
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
