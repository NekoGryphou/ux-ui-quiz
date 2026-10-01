import type { OptionVisual } from "../../../types";
import { renderBanner, renderSwitchRow } from "../kit";
import { escapeHtml, renderHelper, renderSectionHeader } from "../common";

const renderSettingRows = (items?: string[]): string =>
  items && items.length
    ? `<div class="visual-settings__rows">${items
        .map(
          (item) => `
            <div class="visual-settings__row">
              <span>${escapeHtml(item)}</span>
              <span class="visual-settings__chevron">›</span>
            </div>`
        )
        .join("")}</div>`
    : "";

export const renderSettingsVisual = (visual: OptionVisual): string => `
  <div class="visual-surface visual-surface--settings">
    ${visual.banner ? renderBanner(visual.banner.title, visual.banner.body, visual.banner.tone) : ""}
    <div class="visual-surface__body">
      ${renderSectionHeader({
        eyebrow: visual.eyebrow,
        title: visual.title,
        subtitle: visual.subtitle,
        actions: visual.headerActions ?? visual.topbarActions
      })}
      ${
        visual.switches?.length
          ? `<div class="visual-switch-stack">${visual.switches
              .map((item) => renderSwitchRow(item.label, item.checked, item.hint, item.subtle))
              .join("")}</div>`
          : ""
      }
      ${renderSettingRows(visual.items)}
      ${renderHelper(visual.helper)}
    </div>
  </div>
`;
