import { ReactNode } from 'react';

export type CardSize = 'sm' | 'base' | 'lg';

export interface CardProps {
  /** Card content */
  children: ReactNode;
  /** Adds border styling */
  bordered?: boolean;
  /** Adds glow/shadow effect on hover */
  glow?: boolean;
  /** Card size variant */
  size?: CardSize;
  /** Additional CSS classes */
  className?: string;
  /** Test ID for E2E testing */
  'data-testid'?: string;
}
