/**
 * @export
 * @desc Props of the play and stop animation button.
 *
 * @property playing - Whether the animation runs.
 * @property ontoggle - Called on click.
 */
export interface MotionToggleProps {
  /** Whether the animation runs. */
  playing: boolean;

  /** Called on click. */
  ontoggle: () => void;
}
