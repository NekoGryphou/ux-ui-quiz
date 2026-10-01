import type { OptionVisual } from "../../../types";
import {
  renderActions,
  renderEyebrow,
  renderHelper,
  renderList,
  renderSubtitle,
  renderTitle
} from "../common";

export const renderModalVisual = (visual: OptionVisual): string => `
  <div class="visual-overlay">
    <div class="visual-modal">
      <button class="visual-modal__close" type="button" aria-label="Close dialog">×</button>
      ${renderEyebrow(visual.eyebrow)}
      ${renderTitle(visual.title)}
      ${renderSubtitle(visual.subtitle)}
      ${renderList(visual.items)}
      ${renderActions(visual)}
      ${renderHelper(visual.helper)}
    </div>
  </div>
`;
