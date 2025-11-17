import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import clsx from 'clsx';
import type { AlertProps } from './Alert.types';

/**
 * AEGOV Alert component
 *
 * Displays important messages, notifications, and feedback to users.
 * Supports multiple types (info, error, success, warning) and variants (solid, soft).
 *
 * @example
 * Basic usage:
 * ```tsx
 * <Alert type="info">
 *   This is an informational message
 * </Alert>
 * ```
 *
 * @example
 * Dismissible alert:
 * ```tsx
 * <Alert type="success" dismissible onDismiss={() => console.log('Dismissed')}>
 *   Operation completed successfully!
 * </Alert>
 * ```
 *
 * @example
 * With custom icon:
 * ```tsx
 * <Alert type="warning" icon={<Icon />}>
 *   Warning message with custom icon
 * </Alert>
 * ```
 */
export const Alert: React.FC<AlertProps> = ({
  children,
  type,
  variant = 'solid',
  dismissible = false,
  onDismiss,
  icon,
  role = 'alert',
  'aria-live': ariaLive,
  className,
}) => {
  const [isVisible, setIsVisible] = useState(true);

  const handleDismiss = () => {
    setIsVisible(false);
    onDismiss?.();
  };

  // Determine aria-live value based on alert type
  const defaultAriaLive = type === 'error' ? 'assertive' : 'polite';
  const ariaLiveValue = ariaLive || defaultAriaLive;

  const alertClasses = clsx(
    'aegov-alert',
    `alert-${type}`,
    {
      'alert-soft': variant === 'soft',
    },
    className
  );

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className={alertClasses}
          role={role}
          aria-live={ariaLiveValue}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.2 }}
        >
          {icon && <span className="alert-icon">{icon}</span>}

          <div className="alert-content">{children}</div>

          {dismissible && (
            <button
              type="button"
              onClick={handleDismiss}
              className="alert-dismiss"
              aria-label="Dismiss alert"
            >
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

Alert.displayName = 'Alert';
