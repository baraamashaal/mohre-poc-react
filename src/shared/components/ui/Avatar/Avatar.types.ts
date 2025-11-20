import { ReactNode } from 'react';

/**
 * Avatar Size Variants
 * Based on AEGOV Design System specifications
 */
export type AvatarSize = 'xs' | 'sm' | 'base' | 'lg' | 'xl' | '2xl' | '3xl';

/**
 * Avatar Shape Variants
 */
export type AvatarVariant = 'square' | 'rounded';

/**
 * Avatar Status Indicator
 */
export type AvatarStatus = 'online' | 'offline' | 'none';

/**
 * Avatar Component Props
 *
 * Following AEGOV Design System Avatar specifications
 *
 * @see https://designsystem.gov.ae/docs/components/avatar
 */
export interface AvatarProps {
  /** Image source URL */
  src?: string;

  /** Alternative text for the image (required for accessibility) */
  alt: string;

  /** Size variant (default: 'base') */
  size?: AvatarSize;

  /** Shape variant (default: 'square') */
  variant?: AvatarVariant;

  /** Status indicator (default: 'none') */
  status?: AvatarStatus;

  /** Additional CSS classes */
  className?: string;

  /** Test ID for testing */
  'data-testid'?: string;

  /** Fallback content when no image is provided */
  fallback?: ReactNode;
}
