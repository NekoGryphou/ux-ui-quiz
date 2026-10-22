import type { Step } from "./mock.types";

/**
 * @export
 * @desc Props of the mock Stepper.
 *
 * @property steps - Steps in order.
 */
export interface StepperProps {
  /** Steps in order. */
  steps: Step[];
}
