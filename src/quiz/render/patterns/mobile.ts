import type { OptionVisual } from "../../../types";
import {
  renderActions,
  renderEyebrow,
  renderHelper,
  renderList,
  renderStatus,
  renderSubtitle,
  renderTitle
} from "../common";

export const renderMobileVisual = (visual: OptionVisual): string => `
  <div class="visual-surface visual-surface--mobile">
    ${renderEyebrow(visual.eyebrow)}
    ${renderTitle(visual.title)}
    ${renderSubtitle(visual.subtitle)}
    ${renderList(visual.items)}
    ${renderActions(visual)}
    ${renderStatus(visual.status, visual.statusTone)}
    ${renderHelper(visual.helper)}
  </div>
`;
