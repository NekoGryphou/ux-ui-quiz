/**
 * @export
 * @desc Props of the mock Breadcrumbs trail.
 *
 * @property items - Labels from root to current page.
 */
export interface BreadcrumbsProps {
  /** Labels from root to current page; the last is the current page. */
  items: string[];
}
