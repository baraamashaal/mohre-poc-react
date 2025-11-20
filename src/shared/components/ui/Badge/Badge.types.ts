/**
 * Badge Component Types
 * Based on AEGOV Design System Badge specifications
 */

export type BadgeType = 'info' | 'error' | 'success' | 'warning';
export type BadgeVariant = 'soft' | 'solid';
export type BadgeSize = 'default' | 'lg';

export interface BadgeProps {
  /**
   * Badge content
   */
  children: React.ReactNode;

  /**
   * Badge color type
   * @default 'info'
   */
  type?: BadgeType;

  /**
   * Badge style variant
   * @default 'soft'
   */
  variant?: BadgeVariant;

  /**
   * Badge size
   * @default 'default'
   */
  size?: BadgeSize;

  /**
   * Optional icon to display on the left
   */
  leftIcon?: React.ReactNode;

  /**
   * Optional icon to display on the right
   */
  rightIcon?: React.ReactNode;

  /**
   * Additional CSS classes
   */
  className?: string;

  /**
   * ARIA label for accessibility
   */
  'aria-label'?: string;
}
