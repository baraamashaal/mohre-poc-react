import clsx from 'clsx';
import type { CardProps } from './Card.types';

/**
 * Card Component
 *
 * AEGOV Design System card component following exact HTML structure.
 * A flexible container component with border, glow, and size variants.
 *
 * @example
 * ```tsx
 * <Card bordered glow size="lg">
 *   <h3>Card Title</h3>
 *   <p>Card content goes here</p>
 * </Card>
 * ```
 */
export const Card = ({
  children,
  bordered = false,
  glow = false,
  size = 'base',
  className,
  'data-testid': dataTestId,
}: CardProps) => {
  return (
    <div
      className={clsx(
        'aegov-card',
        {
          'card-bordered': bordered,
          'card-glow': glow,
          'card-sm': size === 'sm',
          'card-base': size === 'base',
          'card-lg': size === 'lg',
        },
        className
      )}
      data-testid={dataTestId}
    >
      {children}
    </div>
  );
};
