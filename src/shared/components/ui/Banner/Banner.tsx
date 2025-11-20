import clsx from 'clsx';
import type { BannerProps } from './Banner.types';

/**
 * Banner Component
 *
 * A prominent notification or announcement bar that spans the width of the page.
 * Follows AEGOV Design System patterns for banners.
 *
 * @example
 * ```tsx
 * // Basic banner
 * <Banner>Important announcement here</Banner>
 *
 * // Banner with title and action
 * <Banner
 *   title="Notice"
 *   variant="camel"
 *   action={{ text: 'Learn More', onClick: handleClick }}
 * >
 *   New features are available
 * </Banner>
 *
 * // Dismissible banner
 * <Banner
 *   isDismissible
 *   onDismiss={handleDismiss}
 *   variant="notice"
 * >
 *   This can be closed
 * </Banner>
 * ```
 */
export const Banner = ({
  children,
  position = 'top',
  variant = 'default',
  isDismissible = false,
  centered = false,
  title,
  onDismiss,
  action,
  className,
  'data-testid': dataTestId,
  ariaLabel,
  role = 'region',
}: BannerProps) => {
  // Variant color classes following AEGOV specification
  const variantClasses = {
    default: '',
    camel: 'bg-camel-600 border-camel-500',
    red: 'bg-aered-50 border-aered-500',
    dark: 'bg-slate-700',
    notice: 'banner-notice bg-slate-50 border-slate-700',
  };

  // Text color classes for variants
  const textClasses = {
    default: '',
    camel: 'text-camel-50',
    red: 'text-aered-600',
    dark: 'text-slate-50',
    notice: 'text-aeblack-800',
  };

  // Link classes for variants
  const linkClasses = {
    default: 'aegov-link link-underline',
    camel: 'aegov-link link-underline text-camel-50 hover:text-camel-100 focus-visible:ring-camel-400 focus-visible:ring-offset-camel-600',
    red: 'aegov-link link-underline text-aered-600 hover:text-aered-700 focus-visible:ring-aered-400 focus-visible:ring-offset-aered-50',
    dark: 'aegov-link link-underline text-slate-50 hover:text-slate-100 focus-visible:ring-slate-400 focus-visible:ring-offset-slate-700',
    notice: 'aegov-btn btn-secondary',
  };

  // Position classes
  const positionClasses = {
    top: 'banner-top',
    bottom: 'banner-bottom',
  };

  // Determine if it's a notice variant (different structure)
  const isNotice = variant === 'notice';

  // For dark variant with dismissible, use rounded-xl
  const darkDismissibleClasses = variant === 'dark' && isDismissible ? 'rounded-xl' : '';

  return (
    <div
      className={clsx(
        'aegov-banner',
        positionClasses[position],
        variantClasses[variant],
        darkDismissibleClasses,
        className
      )}
      role={role}
      aria-label={ariaLabel}
      aria-live={variant === 'dark' ? 'polite' : undefined}
      data-testid={dataTestId}
    >
      {isDismissible && variant === 'dark' ? (
        // Dark dismissible variant structure
        <div className="flex items-center justify-between gap-3">
          <div className={clsx(
            'banner-content flex flex-col md:flex-row md:items-center gap-3',
            textClasses[variant]
          )}>
            {title && <strong className="font-bold">{title}</strong>}
            {children}
            {action && (
              <button
                type="button"
                className={linkClasses[variant]}
                onClick={action.onClick}
              >
                {action.text}
                <svg className="link-icon w-5 h-5 rtl:-scale-x-100" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd" />
                </svg>
              </button>
            )}
          </div>
          <button
            type="button"
            className="banner-dismiss text-slate-50"
            onClick={onDismiss}
            aria-label="Close"
          >
            <svg viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
              <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z"/>
            </svg>
          </button>
        </div>
      ) : isNotice ? (
        // Notice variant structure
        <>
          <div className={clsx('py-4 banner-content max-w-screen-lg', textClasses[variant])}>
            {title && <h2 className="mb-4 text-xl font-bold">{title}</h2>}
            <p className="font-normal mb-0">{children}</p>
          </div>
          {action && (
            <div className="flex items-center flex-shrink-0">
              <button
                type="button"
                className={linkClasses[variant]}
                onClick={action.onClick}
              >
                {action.text}
              </button>
            </div>
          )}
          {isDismissible && (
            <button
              type="button"
              className="banner-dismiss"
              onClick={onDismiss}
              aria-label="Close"
            >
              <svg viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z"/>
              </svg>
            </button>
          )}
        </>
      ) : (
        // Default/camel/red variant structure
        <div className="container">
          <div className={clsx(
            'banner-content flex flex-wrap md:flex-nowrap items-center gap-3',
            textClasses[variant],
            {
              'md:justify-center': centered,
            }
          )}>
            {title && <strong className="font-bold">{title}</strong>}
            {children}
            {action && (
              <button
                type="button"
                className={linkClasses[variant]}
                onClick={action.onClick}
              >
                {action.text}
                <svg className="link-icon w-5 h-5 rtl:-scale-x-100" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd" />
                </svg>
              </button>
            )}
            {isDismissible && (
              <button
                type="button"
                className="banner-dismiss"
                onClick={onDismiss}
                aria-label="Close"
              >
                <svg viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                  <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z"/>
                </svg>
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
