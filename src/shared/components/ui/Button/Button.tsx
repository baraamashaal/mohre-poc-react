import { forwardRef } from 'react';
import { motion } from 'framer-motion';
import clsx from 'clsx';
import type {ButtonProps} from './Button.types.ts';

// Loading spinner component - defined outside render for performance
const LoadingSpinner = () => (
  <span
    role="status"
    className="inline-block w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin"
    aria-label="Loading"
  />
);

/**
 * AEGOV Button Component
 *
 * Fully accessible, animated button component based on UAE Government Design System.
 *
 * @example
 * ```tsx
 * <Button variant="solid" size="lg" onClick={() => console.log('clicked')}>
 *   Click me
 * </Button>
 * ```
 */
export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      variant = 'solid',
      size = 'base',
      color = 'primary',
      disabled = false,
      type = 'button',
      iconOnly = false,
      leftIcon,
      rightIcon,
      loading = false,
      className,
      fullWidth = false,
      onClick,
      ...rest
    },
    ref
  ) => {
    // Determine if button should be disabled
    const isDisabled = disabled || loading;

    // Build class names using clsx
    const buttonClasses = clsx(
      // Base class
      'aegov-btn',
      // Variant classes
      {
        'btn-outline': variant === 'outline',
        'btn-soft': variant === 'soft',
        'btn-link': variant === 'link',
      },
      // Size classes
      {
        'btn-xs': size === 'xs',
        'btn-sm': size === 'sm',
        'btn-lg': size === 'lg',
        // base is default, no class needed
      },
      // Color classes
      {
        'btn-secondary': color === 'secondary',
      },
      // Special classes
      {
        'btn-icon': iconOnly,
        'w-full': fullWidth,
      },
      // Custom className
      className
    );

    // Handle click with loading/disabled check
    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
      if (isDisabled) {
        e.preventDefault();
        return;
      }
      onClick?.(e);
    };

    // Filter out props that conflict with Framer Motion
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { onDrag, onDragEnd, onDragStart, onAnimationStart, onAnimationEnd, ...safeRest } =
      rest as Record<string, unknown>;

    return (
      <motion.button
        ref={ref}
        type={type}
        className={buttonClasses}
        disabled={isDisabled}
        aria-disabled={isDisabled}
        onClick={handleClick}
        // Framer Motion animations
        whileHover={isDisabled ? undefined : { scale: 1.02 }}
        whileTap={isDisabled ? undefined : { scale: 0.98 }}
        transition={{
          type: 'spring',
          stiffness: 400,
          damping: 17,
        }}
        {...safeRest}
      >
        {/* Loading spinner - shown only when loading */}
        {loading && (
          <span className="inline-flex items-center gap-2">
            <LoadingSpinner />
          </span>
        )}

        {/* Left icon */}
        {!loading && leftIcon && (
          <span className="inline-flex items-center">{leftIcon}</span>
        )}

        {/* Button content */}
        {!loading && (
          <span className="inline-flex items-center">{children}</span>
        )}

        {/* Right icon */}
        {!loading && rightIcon && (
          <span className="inline-flex items-center">{rightIcon}</span>
        )}
      </motion.button>
    );
  }
);

Button.displayName = 'Button';
