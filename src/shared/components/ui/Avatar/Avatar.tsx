import clsx from 'clsx';
import type { AvatarProps } from './Avatar.types';

/**
 * Avatar Component
 *
 * A visual representation of a user with support for images, fallback content,
 * size variants, shape variants, and status indicators.
 * Follows AEGOV Design System patterns for avatars.
 *
 * @example
 * ```tsx
 * // Basic avatar with image
 * <Avatar src="/user.jpg" alt="John Doe" />
 *
 * // Avatar with size and shape
 * <Avatar
 *   src="/user.jpg"
 *   alt="John Doe"
 *   size="lg"
 *   variant="rounded"
 * />
 *
 * // Avatar with status indicator
 * <Avatar
 *   src="/user.jpg"
 *   alt="John Doe"
 *   status="online"
 * />
 *
 * // Avatar with fallback initials
 * <Avatar
 *   alt="John Doe"
 *   fallback="JD"
 *   size="xl"
 *   variant="rounded"
 * />
 * ```
 */
export const Avatar = ({
  src,
  alt,
  size = 'base',
  variant = 'square',
  status = 'none',
  className,
  'data-testid': dataTestId,
  fallback,
}: AvatarProps) => {
  const hasImage = Boolean(src);
  const showStatus = status !== 'none';

  // Status indicator colors
  const statusColors = {
    online: 'bg-green-500',
    offline: 'bg-gray-400',
    none: '',
  };

  return (
    <div
      className={clsx(
        'aegov-avatar',
        `avatar-${size}`,
        {
          'avatar-rounded': variant === 'rounded',
        },
        className
      )}
      role="img"
      data-testid={dataTestId}
    >
      {hasImage ? (
        <img src={src} alt={alt} />
      ) : (
        // AEGOV spec: .no-user class on img tag with empty src
        <img className="no-user" src="" alt={alt} />
      )}

      {/* Custom fallback content rendered alongside the no-user img */}
      {!hasImage && fallback && (
        <span className="avatar-fallback">{fallback}</span>
      )}

      {showStatus && (
        <span
          className={clsx(
            'alert-indicator',
            'ring-whitely-50',
            statusColors[status]
          )}
          aria-label={status}
          data-testid="avatar-status"
        />
      )}
    </div>
  );
};
