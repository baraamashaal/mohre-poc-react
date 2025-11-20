import { AnchorHTMLAttributes, ReactNode } from 'react';

/**
 * Hyperlink variants based on AEGOV Design System
 */
export type HyperlinkVariant = 'default' | 'cta' | 'soft' | 'secondary' | 'secondary-soft';

/**
 * Props for the Hyperlink component
 * Following AEGOV Design System hyperlink patterns
 */
export interface HyperlinkProps extends Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'rel'> {
  /** The URL to link to */
  href: string;
  /** Link text content */
  children: ReactNode;
  /** Visual variant of the hyperlink */
  variant?: HyperlinkVariant;
  /** Whether this is an external link (adds target="_blank" and rel="noopener noreferrer") */
  external?: boolean;
  /** Icon to display with the link (for CTA variant) */
  icon?: ReactNode | boolean;
  /** Additional CSS classes */
  className?: string;
  /** Test ID for E2E testing */
  'data-testid'?: string;
}
