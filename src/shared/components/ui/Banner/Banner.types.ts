import { ReactNode } from 'react';

/**
 * Banner Position Variants
 */
export type BannerPosition = 'top' | 'bottom';

/**
 * Banner Color/Style Variants
 */
export type BannerVariant = 'default' | 'camel' | 'red' | 'dark' | 'notice';

/**
 * Banner Action Configuration
 */
export interface BannerAction {
  /** Action button text */
  text: string;
  /** Action click handler */
  onClick: () => void;
}

/**
 * Banner Component Props
 *
 * Following AEGOV Design System Banner specifications
 *
 * @see https://designsystem.gov.ae/docs/components/banner
 */
export interface BannerProps {
  /** Banner content */
  children: ReactNode;

  /** Position on the page (default: 'top') */
  position?: BannerPosition;

  /** Color/style variant (default: 'default') */
  variant?: BannerVariant;

  /** Whether the banner can be dismissed (default: false) */
  isDismissible?: boolean;

  /** Center the content (default: false) */
  centered?: boolean;

  /** Banner title */
  title?: string;

  /** Dismiss callback */
  onDismiss?: () => void;

  /** Action button configuration */
  action?: BannerAction;

  /** Additional CSS classes */
  className?: string;

  /** Test ID for testing */
  'data-testid'?: string;

  /** ARIA label for the banner region */
  ariaLabel?: string;

  /** ARIA role (default: 'region') */
  role?: 'banner' | 'status' | 'alert' | 'region';
}
