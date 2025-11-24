import { clsx } from 'clsx';
import { motion, AnimatePresence } from 'framer-motion';
import type {ToastProps} from './Toast.types';

/**
 * Toast Component Icons
 *
 * Icons for different toast types following AEGOV design system
 */
const icons = {
    success: (
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" viewBox="0 0 256 256">
            <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm16-40a8,8,0,0,1-8,8,16,16,0,0,1-16-16V128a8,8,0,0,1,0-16,16,16,0,0,1,16,16v40A8,8,0,0,1,144,176ZM112,84a12,12,0,1,1,12,12A12,12,0,0,1,112,84Z"></path>
        </svg>
    ),
    error: (
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" viewBox="0 0 256 256">
            <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm-8-80V80a8,8,0,0,1,16,0v56a8,8,0,0,1-16,0Zm20,36a12,12,0,1,1-12-12A12,12,0,0,1,140,172Z"></path>
        </svg>
    ),
    warning: (
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" viewBox="0 0 256 256">
            <path d="M236.8,188.09,149.35,36.22h0a24.76,24.76,0,0,0-42.7,0L19.2,188.09a23.51,23.51,0,0,0,0,23.72A24.35,24.35,0,0,0,40.55,224h174.9a24.35,24.35,0,0,0,21.33-12.19A23.51,23.51,0,0,0,236.8,188.09ZM120,104a8,8,0,0,1,16,0v40a8,8,0,0,1-16,0Zm8,88a12,12,0,1,1,12-12A12,12,0,0,1,128,192Z"></path>
        </svg>
    ),
    info: (
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" viewBox="0 0 256 256">
            <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm16-40a8,8,0,0,1-8,8,16,16,0,0,1-16-16V128a8,8,0,0,1,0-16,16,16,0,0,1,16,16v40A8,8,0,0,1,144,176ZM112,84a12,12,0,1,1,12,12A12,12,0,0,1,112,84Z"></path>
        </svg>
    ),
};

/**
 * Toast Icon Color Classes
 *
 * Following AEGOV Color System semantic mappings:
 * - success: text-aegreen-600 (AEGreen #3F8E50) - Success/positive states
 * - error: text-aered-600 (AERed #D83731) - Error/alert signaling
 * - warning: text-camel-600 (Camel Yellow #D67909) - Primary support/warnings
 * - info: text-seablue-600 (Sea Blue #0090D4) - Secondary support/information
 *
 * All colors meet WCAG 2.1 AA accessibility standards.
 */
const typeStyles = {
    success: 'text-aegreen-600',
    error: 'text-aered-600',
    warning: 'text-camel-600',
    info: 'text-seablue-600',
};

/**
 * Action button styling based on toast type
 * Warning toasts use warning button style (aegov-btn btn-warning)
 */
const actionButtonStyles = {
    success: 'aegov-btn btn-xs',
    error: 'aegov-btn btn-xs',
    warning: 'aegov-btn btn-xs btn-warning',
    info: 'aegov-btn btn-xs',
};

export const Toast = ({ id, type, title, message, action, onDismiss, className }: ToastProps) => {
    return (
        <motion.div
            layout
            initial={{ opacity: 0, y: 50, scale: 0.3 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5, transition: { duration: 0.2 } }}
            className={clsx(
                'w-full max-w-xs aegov-toast relative z-10',
                className
            )}
            role="alert"
        >
            <div className="flex items-start">
                <div className={clsx('toast-icon', typeStyles[type])}>{icons[type]}</div>
                <div className="toast-body">
                    {title && <span className="mb-1 text-base font-semibold text-aeblack-900">{title}</span>}
                    <div className="mb-2 font-normal">{message}</div>
                    {action && (
                        <button
                            onClick={action.onClick}
                            className={actionButtonStyles[type]}
                        >
                            {action.label}
                        </button>
                    )}
                </div>
                <button
                    type="button"
                    onClick={() => onDismiss(id)}
                    className="toast-dismiss"
                    aria-label="Close"
                >
                    <span className="sr-only">Close</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" viewBox="0 0 256 256">
                        <path d="M205.66,194.34a8,8,0,0,1-11.32,11.32L128,139.31,61.66,205.66a8,8,0,0,1-11.32-11.32L116.69,128,50.34,61.66A8,8,0,0,1,61.66,50.34L128,116.69l66.34-66.35a8,8,0,0,1,11.32,11.32L139.31,128Z"></path>
                    </svg>
                </button>
            </div>
        </motion.div>
    );
};
