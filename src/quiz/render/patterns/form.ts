import type { OptionVisual } from "../../../types";
import { renderBreadcrumbs, renderCheckboxList, renderTabs, renderToolbar, renderTopbar } from "../kit";
import {
  renderActions,
  renderEyebrow,
  renderFields,
  renderHelper,
  renderLiveStatus,
  renderSubtitle,
  renderTitle
} from "../common";

export const renderFormVisual = (visual: OptionVisual): string => `
  <div class="visual-surface visual-surface--form ${visual.dark ? "visual-surface--dark" : ""}">
    ${visual.breadcrumbs?.length ? renderBreadcrumbs(visual.breadcrumbs) : ""}
    ${visual.topbarTitle ? renderTopbar(visual.topbarTitle, visual.topbarActions ?? []) : ""}
    ${visual.tabs?.length ? renderTabs(visual.tabs, visual.activeTab ?? 0) : ""}
    ${visual.toolbar?.length ? renderToolbar(visual.toolbar) : ""}
    <div class="visual-surface__top">
      ${renderEyebrow(visual.eyebrow)}
      ${renderTitle(visual.title)}
      ${renderSubtitle(visual.subtitle)}
    </div>
    <div class="visual-surface__body">
      ${renderFields(visual.fields)}
      ${renderLiveStatus(visual.status, visual.statusTone, visual.statusLive)}
      ${renderActions(visual)}
      ${visual.checkboxes?.length ? `<div class="visual-switch-stack">${renderCheckboxList(visual.checkboxes)}</div>` : ""}
      ${renderHelper(visual.helper)}
    </div>
  </div>
`;
