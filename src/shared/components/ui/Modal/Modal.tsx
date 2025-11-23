import * as DialogPrimitive from '@radix-ui/react-dialog';
import { clsx } from 'clsx';
import type { ModalProps, ModalSize, ModalPlacement } from './Modal.types';

/**
 * Get size classes for modal
 */
const getSizeClasses = (size: ModalSize = 'md'): string => {
  const sizeMap: Record<ModalSize, string> = {
    sm: 'sm:max-w-sm',
    md: 'md:max-w-2xl',
    lg: 'lg:max-w-xl',
    xl: 'xl:max-w-2xl',
    '2xl': '2xl:max-w-3xl',
    '3xl': 'sm:max-w-4xl',
    '4xl': 'sm:max-w-5xl',
    full: 'max-w-full',
  };
  return sizeMap[size];
};

/**
 * Get placement classes for modal positioning
 */
const getPlacementClasses = (placement: ModalPlacement = 'center'): string => {
  const placementMap: Record<ModalPlacement, string> = {
    'top-left': 'items-start justify-start',
    'top-center': 'items-start justify-center',
    'top-right': 'items-start justify-end',
    'center-left': 'items-center justify-start',
    'center': 'items-center justify-center',
    'center-right': 'items-center justify-end',
    'bottom-left': 'items-end justify-start',
    'bottom-center': 'items-end justify-center',
    'bottom-right': 'items-end justify-end',
  };
  return placementMap[placement];
};

/**
 * Get icon styling based on variant
 */
const getIconStyles = (variant: ModalProps['variant']) => {
  switch (variant) {
    case 'success':
      return {
        bgColor: 'bg-aegreen-100',
        textColor: 'text-aegreen-600',
      };
    case 'alert':
      return {
        bgColor: 'bg-primary-100',
        textColor: 'text-primary-600',
      };
    case 'danger':
      return {
        bgColor: 'bg-aered-100',
        textColor: 'text-aered-600',
      };
    default:
      return {
        bgColor: 'bg-aeblack-100',
        textColor: 'text-aeblack-600',
      };
  }
};

/**
 * Get wrapper background classes based on variant
 */
const getWrapperBgClasses = (variant: ModalProps['variant']): string => {
  if (variant === 'alert') {
    return 'bg-primary-50';
  }
  return 'bg-whitely-100';
};

/**
 * Modal Component
 *
 * A dialog overlay component for displaying focused content that requires user attention.
 * Built on Radix UI Dialog with AEGOV design system styling.
 *
 * Features:
 * - Multiple variants (default, alert, danger, success)
 * - Flexible sizing (sm to full)
 * - 9 placement positions
 * - Optional backdrop click dismiss
 * - Focus trap and keyboard navigation
 * - Scrollable content support
 * - Customizable actions and icons
 *
 * @example
 * ```tsx
 * <Modal
 *   open={isOpen}
 *   onOpenChange={setIsOpen}
 *   title="Confirm Action"
 *   variant="alert"
 *   size="md"
 *   actions={[
 *     { label: 'Confirm', onClick: handleConfirm, primary: true },
 *     { label: 'Cancel', autoClose: true }
 *   ]}
 * >
 *   <p>Are you sure you want to proceed?</p>
 * </Modal>
 * ```
 */
export const Modal = ({
  open,
  defaultOpen,
  onOpenChange,
  title,
  description,
  children,
  variant = 'default',
  size = 'md',
  placement = 'center',
  staticBackdrop = false,
  showCloseButton = true,
  icon,
  actions = [],
  wrapperClassName,
  contentClassName,
  headerClassName,
  bodyClassName,
  footerClassName,
  backdropClassName,
  scrollable = false,
  maxHeight,
  footer,
  onClose,
  'data-testid': dataTestId = 'modal',
  modal = true,
}: ModalProps) => {
  const sizeClasses = getSizeClasses(size);
  const placementClasses = getPlacementClasses(placement);
  const wrapperBgClasses = getWrapperBgClasses(variant);

  // Get icon styles from variant, then override with custom colors if provided
  const variantIconStyles = getIconStyles(variant);
  const iconStyles = icon
    ? {
        bgColor: icon.bgColor || variantIconStyles.bgColor,
        textColor: icon.textColor || variantIconStyles.textColor,
      }
    : variantIconStyles;

  // Handle close action
  const handleClose = () => {
    onClose?.();
    onOpenChange?.(false);
  };

  // Handle backdrop interaction
  const handlePointerDownOutside = (e: Event) => {
    if (staticBackdrop) {
      e.preventDefault();
    }
  };

  const handleEscapeKeyDown = (e: Event) => {
    if (staticBackdrop) {
      e.preventDefault();
    }
  };

  // Container classes for overlay positioning
  const containerClasses = clsx(
    'fixed inset-0 z-50 flex',
    'aegov-modal',
    placementClasses,
    'p-4 sm:p-6',
    contentClassName
  );

  // Backdrop classes
  const overlayClasses = clsx(
    'fixed inset-0 bg-aeblack-900/50 backdrop-blur-sm',
    'data-[state=open]:animate-in data-[state=closed]:animate-out',
    'data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0',
    'z-50',
    backdropClassName
  );

  // Content wrapper classes
  const wrapperClasses = clsx(
    'aegov-modal-wrapper',
    'relative w-full max-h-full',
    sizeClasses,
    wrapperBgClasses,
    'rounded-lg shadow-lg',
    'p-4 md:p-5 xl:p-6',
    'data-[state=open]:animate-in data-[state=closed]:animate-out',
    'data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0',
    'data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95',
    wrapperClassName
  );

  // Body classes with scrollable support
  const contentBodyClasses = clsx(
    'mt-4',
    {
      'overflow-auto': scrollable,
      [maxHeight || 'max-h-80 sm:max-h-48 md:max-h-[450px]']: scrollable,
    },
    bodyClassName
  );

  // Check if we should show header with icon
  const hasIcon = icon !== undefined;
  const hasActions = actions.length > 0 || footer;

  return (
    <DialogPrimitive.Root
      open={open}
      defaultOpen={defaultOpen}
      onOpenChange={onOpenChange}
      modal={modal}
    >
      <DialogPrimitive.Portal>
        <DialogPrimitive.Overlay className={overlayClasses} />
        <div className={containerClasses}>
          <DialogPrimitive.Content
            className={wrapperClasses}
            onPointerDownOutside={handlePointerDownOutside}
            onEscapeKeyDown={handleEscapeKeyDown}
            data-testid={dataTestId}
            aria-describedby={description ? `${dataTestId}-description` : undefined}
          >
            {/* Close Button */}
            {showCloseButton && (
              <DialogPrimitive.Close
                className="aegov-modal-close absolute top-2 end-2 inline-flex h-10 w-10 items-center justify-center rounded-full hover:bg-aeblack-100/50 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
                onClick={handleClose}
                aria-label="Close modal"
              >
                <svg
                  aria-hidden="true"
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
              </DialogPrimitive.Close>
            )}

            {/* Modal Content */}
            <div>
              <div className={clsx('sm:flex sm:items-start', { 'text-center sm:text-left': hasIcon })}>
                {/* Icon */}
                {hasIcon && icon && (
                  <div
                    className={clsx(
                      'mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full sm:mx-0',
                      iconStyles.bgColor
                    )}
                  >
                    <div className={clsx('h-8 w-8', iconStyles.textColor)}>{icon.icon}</div>
                  </div>
                )}

                {/* Header and Body */}
                <div className={clsx('mt-3 sm:mt-0', { 'sm:ms-8': hasIcon }, headerClassName)}>
                  {/* Title */}
                  {title && (
                    <DialogPrimitive.Title
                      className={clsx(
                        'text-lg font-bold',
                        variant === 'alert' ? 'text-primary-800' : 'text-aeblack-950',
                        { 'text-center sm:text-left': hasIcon }
                      )}
                    >
                      {title}
                    </DialogPrimitive.Title>
                  )}

                  {/* Description for screen readers */}
                  {description && (
                    <DialogPrimitive.Description className="sr-only" id={`${dataTestId}-description`}>
                      {description}
                    </DialogPrimitive.Description>
                  )}

                  {/* Body Content */}
                  <div className={contentBodyClasses}>{children}</div>
                </div>
              </div>

              {/* Footer with Actions */}
              {hasActions && (
                <div
                  className={clsx(
                    'mt-6 md:mt-7 xl:mt-8',
                    {
                      'sm:flex sm:flex-row-reverse sm:gap-3': actions.length > 0,
                      'sm:grid sm:grid-flow-row-dense sm:grid-cols-2 sm:gap-3': actions.length === 2,
                    },
                    footerClassName
                  )}
                >
                  {/* Custom Footer Content */}
                  {footer}

                  {/* Action Buttons */}
                  {actions.map((action, index) => {
                    const isPrimary = action.primary ?? index === 0;
                    const shouldAutoClose = action.autoClose ?? !isPrimary;

                    const buttonClasses = clsx(
                      'aegov-btn w-full sm:w-auto',
                      action.variant || (isPrimary ? '' : 'btn-soft'),
                      {
                        'mt-3 sm:mt-0': !isPrimary,
                        'sm:col-start-2': actions.length === 2 && isPrimary,
                        'sm:col-start-1': actions.length === 2 && !isPrimary,
                      },
                      action.className
                    );

                    const handleClick = () => {
                      action.onClick?.();
                      if (shouldAutoClose) {
                        handleClose();
                      }
                    };

                    if (shouldAutoClose) {
                      return (
                        <DialogPrimitive.Close key={index} asChild>
                          <button type="button" className={buttonClasses} onClick={handleClick}>
                            {action.label}
                          </button>
                        </DialogPrimitive.Close>
                      );
                    }

                    return (
                      <button key={index} type="button" className={buttonClasses} onClick={handleClick}>
                        {action.label}
                      </button>
                    );
                  })}
                </div>
              )}
            </div>
          </DialogPrimitive.Content>
        </div>
      </DialogPrimitive.Portal>
    </DialogPrimitive.Root>
  );
};

Modal.displayName = 'Modal';
