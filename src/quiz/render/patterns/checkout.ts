import type { OptionVisual } from "../../../types";
import { renderBreadcrumbs, renderToolbar } from "../kit";
import { renderActions, renderHelper, renderList, renderSectionHeader } from "../common";

export const renderCheckoutVisual = (visual: OptionVisual): string => `
  <div class="visual-surface visual-surface--checkout">
    ${visual.breadcrumbs?.length ? renderBreadcrumbs(visual.breadcrumbs) : ""}
    ${visual.toolbar?.length ? renderToolbar(visual.toolbar) : ""}
    <div class="visual-surface__top">
      ${renderSectionHeader({
        eyebrow: visual.eyebrow,
        title: visual.title,
        subtitle: visual.subtitle,
        actions: visual.headerActions ?? visual.topbarActions
      })}
    </div>
    <div class="visual-surface__body">
      ${renderList(visual.items)}
      ${renderActions(visual)}
      ${
        visual.promoOverlay
          ? `<div class="visual-promo-sheet visual-promo-sheet--${visual.promoOverlay.tone ?? "warning"}">
              <strong>${visual.promoOverlay.title}</strong>
              ${visual.promoOverlay.body ? `<span>${visual.promoOverlay.body}</span>` : ""}
            </div>`
          : ""
      }
      ${renderHelper(visual.helper)}
    </div>
  </div>
`;
