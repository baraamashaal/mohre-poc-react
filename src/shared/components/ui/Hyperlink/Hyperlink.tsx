import clsx from 'clsx';
import type { HyperlinkProps } from './Hyperlink.types';

/**
 * Default arrow icon for CTA links
 * RTL-aware using rtl:-scale-x-100
 */
const DefaultIcon = () => (
  <svg
    className="link-icon rtl:-scale-x-100"
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <path
      d="M6 3L11 8L6 13"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

/**
 * Hyperlink Component
 *
 * A link component following AEGOV Design System patterns.
 * Supports multiple variants: default, CTA, soft, and button-styled links.
 *
 * @example
 * ```tsx
 * // Default inline link
 * <Hyperlink href="/about">Learn more</Hyperlink>
 *
 * // CTA block link with icon
 * <Hyperlink href="/services" variant="cta" icon>
 *   Find out more
 * </Hyperlink>
 *
 * // External link
 * <Hyperlink href="https://example.com" external>
 *   External site
 * </Hyperlink>
 *
 * // Soft variant
 * <Hyperlink href="/contact" variant="soft">
 *   Contact us
 * </Hyperlink>
 * ```
 */
export const Hyperlink = ({
  href,
  children,
  variant = 'default',
  external = false,
  icon,
  className,
  'data-testid': dataTestId,
  ...rest
}: HyperlinkProps) => {
  // Determine if we should show an icon
  const showIcon = variant === 'cta' && icon !== false;
  const iconElement = icon === true || icon === undefined ? <DefaultIcon /> : icon;

  // Build class names based on variant
  const linkClasses = clsx(
    {
      'aegov-link': variant === 'cta',
      'link-soft': variant === 'soft',
      'aegov-btn btn-outline': variant === 'secondary',
      'aegov-btn btn-soft': variant === 'secondary-soft',
    },
    className
  );

  // External link attributes
  const externalProps = external
    ? {
        target: '_blank',
        rel: 'noopener noreferrer',
      }
    : {};

  return (
    <a
      href={href}
      className={linkClasses || undefined}
      data-testid={dataTestId}
      {...externalProps}
      {...rest}
    >
      {children}
      {showIcon && iconElement}
    </a>
  );
};
