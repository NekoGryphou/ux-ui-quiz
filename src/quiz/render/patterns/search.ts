import type { OptionVisual } from "../../../types";
import { renderEmptyState, renderTopbar } from "../kit";
import {
  renderActions,
  renderBadgeRow,
  renderEyebrow,
  renderFields,
  renderHelper,
  renderList,
  renderSubtitle,
  renderTitle
} from "../common";

export const renderSearchVisual = (visual: OptionVisual): string => `
  <div class="visual-surface visual-surface--search">
    ${visual.topbarTitle ? renderTopbar(visual.topbarTitle, visual.topbarActions ?? []) : ""}
    <div class="visual-search__bar">
      ${renderEyebrow(visual.eyebrow)}
      ${renderTitle(visual.title)}
      ${renderSubtitle(visual.subtitle)}
    </div>
    <div class="visual-search__controls">
      ${renderFields(visual.fields)}
      ${visual.iconAction ? `<span class="visual-icon-action" aria-label="${visual.iconAction}">⌕</span>` : ""}
    </div>
    ${
      visual.tags?.length
        ? `<div class="visual-search__filters">
            <p class="visual-eyebrow">Active filters</p>
            ${renderBadgeRow(visual.tags)}
          </div>`
        : ""
    }
    ${visual.emptyState ? renderEmptyState(visual.emptyState.title, visual.emptyState.body, visual.emptyState.action) : ""}
    ${renderList(visual.items)}
    ${renderActions(visual)}
    ${renderHelper(visual.helper)}
  </div>
`;
