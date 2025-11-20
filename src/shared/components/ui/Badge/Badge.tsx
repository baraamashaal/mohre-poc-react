import clsx from 'clsx';
import type { BadgeProps } from './Badge.types';

/**
 * Badge Component
 * Based on AEGOV Design System Badge specifications
 *
 * @example
 * ```tsx
 * // Basic badge
 * <Badge>New</Badge>
 *
 * // Error badge with solid variant
 * <Badge type="error" variant="solid">Error</Badge>
 *
 * // Large success badge with icon
 * <Badge type="success" size="lg" leftIcon={<CheckIcon />}>Approved</Badge>
 * ```
 */
export const Badge: React.FC<BadgeProps> = ({
  children,
  type = 'info',
  variant = 'soft',
  size = 'default',
  leftIcon,
  rightIcon,
  className,
  'aria-label': ariaLabel,
}) => {
  const badgeClasses = clsx(
    'aegov-badge',
    `badge-${type}`,
    {
      'badge-solid': variant === 'solid',
      'badge-lg': size === 'lg',
    },
    className
  );

  return (
    <span className={badgeClasses} aria-label={ariaLabel}>
      {leftIcon && <span className="w-3 h-3 me-1">{leftIcon}</span>}
      {children}
      {rightIcon && <span className="w-3 h-3 ms-1">{rightIcon}</span>}
    </span>
  );
};
