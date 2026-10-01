import type { OptionVisual } from "../../../types";
import { renderStepper } from "../kit";
import {
  renderActions,
  renderEyebrow,
  renderHelper,
  renderList,
  renderProgressBar,
  renderSubtitle,
  renderTitle
} from "../common";

export const renderOnboardingVisual = (visual: OptionVisual): string => `
  <div class="visual-onboarding">
    ${visual.stepper?.length ? renderStepper(visual.stepper) : ""}
    <div class="visual-onboarding__panel">
      ${renderEyebrow(visual.eyebrow)}
      ${renderTitle(visual.title)}
      ${renderSubtitle(visual.subtitle)}
      ${renderProgressBar(visual.progressPercent)}
      ${renderList(visual.items)}
      ${renderActions(visual)}
      ${renderHelper(visual.helper)}
    </div>
  </div>
`;
