<script module lang="ts">
  import type { QuizMeta } from "../engine/types/quiz.types";

  export const meta: QuizMeta = {
    id: "content-on-hinge",
    title: "Hang up on the hinge",
    principle: "Keep key content and controls off the fold",
    scenario: "A designer joins a video call on their unfolded phone and needs to mute their microphone quickly.",
    prompt: "Click the part of the screen placed in the wrong spot for this device.",
    kind: "hotspot",
    regions: [
      { id: "bar", text: "Call info bar" },
      { id: "remote", text: "Remote video" },
      { id: "self", text: "Self view" },
      { id: "controls", text: "Call buttons" },
      { id: "chat", text: "Chat panel" }
    ],
    correct: ["controls"],
    explanation: [
      "The call buttons are centred on the screen, which on an unfolded phone means right on the crease: mute and hang up sit in a dip that distorts touch and reflections, and on dual-screen devices they would fall into the physical gap between the two panels.",
      "Treat the fold as a boundary: detect it (CSS viewport segments, the window segments API or platform fold events) and lay out content on either side, for example video on one panel and controls with chat on the other.",
      "The video, self view and chat each sit inside one half of the screen, which works well on a foldable."
    ]
  };
</script>

<script lang="ts">
  import { BrandTheme, FoldableShell, Hotspot, Icon } from "../mock";
</script>

<BrandTheme brand="fintech">
  <FoldableShell label="Unfolded phone">
    <div class="call">
      <Hotspot id="bar">
        <div class="call__bar"><span>● Design review</span><span>12:48</span></div>
      </Hotspot>
      <div class="call__stage">
        <Hotspot id="remote">
          <div class="remote">
            <span class="remote__avatar">MK</span>
            <span class="remote__name">Mina Kato</span>
          </div>
        </Hotspot>
        <div class="call__side">
          <Hotspot id="self">
            <div class="self"><span>You</span></div>
          </Hotspot>
          <Hotspot id="chat">
            <div class="chat">
              <p class="chat__title">Chat</p>
              <p><strong>Mina:</strong> can you share the v3 file?</p>
              <p><strong>Leo:</strong> on it 👍</p>
            </div>
          </Hotspot>
        </div>
      </div>
      <div class="call__controls">
        <Hotspot id="controls">
          <div class="controls">
            <span class="controls__btn"><Icon name="mic" size={18} /></span>
            <span class="controls__btn"><Icon name="video" size={18} /></span>
            <span class="controls__btn controls__btn--end"><Icon name="phone" size={18} /></span>
            <span class="controls__btn"><Icon name="share" size={18} /></span>
          </div>
        </Hotspot>
      </div>
    </div>
  </FoldableShell>
</BrandTheme>

<style lang="scss">
  .call {
    display: flex;
    flex: 1;
    flex-direction: column;
    gap: 10px;
    padding: 6px 14px 16px;

    &__bar {
      display: flex;
      justify-content: space-between;
      color: var(--mock-muted);
      font-size: 12px;
    }

    &__stage {
      display: grid;
      flex: 1;
      grid-template-columns: 1fr 1fr;
      gap: 36px;
    }

    &__side {
      display: grid;
      grid-template-rows: 150px 1fr;
      gap: 10px;
    }

    &__controls {
      display: flex;
      justify-content: center;
    }
  }

  .remote {
    display: grid;
    place-items: center;
    align-content: center;
    gap: 10px;
    height: 100%;
    border-radius: var(--mock-radius-card);
    background: linear-gradient(160deg, #24384f, #121c2a);

    &__avatar {
      display: grid;
      place-items: center;
      width: 64px;
      height: 64px;
      border-radius: 50%;
      background: #3b6ea8;
      color: #ffffff;
      font-weight: 700;
    }

    &__name {
      color: var(--mock-text);
    }
  }

  .self {
    display: grid;
    place-items: end start;
    height: 100%;
    padding: 8px;
    border-radius: var(--mock-radius-card);
    background: linear-gradient(160deg, #3a2f4f, #1c1626);
    color: var(--mock-text);
    font-size: 11px;
  }

  .chat {
    display: grid;
    align-content: start;
    gap: 6px;
    height: 100%;
    padding: 10px;
    border: 1px solid var(--mock-border);
    border-radius: var(--mock-radius-card);
    background: var(--mock-surface);
    font-size: 12px;

    &__title {
      font-weight: 600;
    }
  }

  .controls {
    display: flex;
    gap: 12px;
    padding: 8px 14px;
    border-radius: 999px;
    background: var(--mock-surface-2);

    &__btn {
      display: grid;
      place-items: center;
      width: 44px;
      height: 44px;
      border-radius: 50%;
      background: var(--mock-fill);
      color: var(--mock-text);

      &--end {
        background: #e5484d;
        color: #ffffff;
      }
    }
  }
</style>
