/**
 * @export
 * @desc Props of the mock initials Avatar.
 *
 * @property name - Person's full name.
 * @property size - Diameter in pixels.
 */
export interface AvatarProps {
  /** Person's full name, source of the initials and color. */
  name: string;

  /** Diameter in pixels, 28 by default. */
  size?: number;
}
