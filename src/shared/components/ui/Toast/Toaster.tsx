import { useToastStore } from '@/stores/useToastStore';
import { AnimatePresence } from 'framer-motion';
import { Toast } from './Toast';
import type {ToasterProps} from './Toast.types';
import { clsx } from 'clsx';
import * as Portal from '@radix-ui/react-portal';

const positionStyles = {
    'top-right': 'top-4 right-4 flex-col',
    'top-left': 'top-4 left-4 flex-col',
    'bottom-right': 'bottom-4 right-4 flex-col-reverse',
    'bottom-left': 'bottom-4 left-4 flex-col-reverse',
};

export const Toaster = ({ position = 'top-right' }: ToasterProps) => {
    const { toasts, removeToast } = useToastStore();

    return (
        <Portal.Root>
            <div
                className={clsx(
                    'fixed z-[100] flex gap-2 w-full max-w-xs pointer-events-none',
                    positionStyles[position]
                )}
            >
                <AnimatePresence mode="popLayout">
                    {toasts.map((toast) => (
                        <div key={toast.id} className="pointer-events-auto w-full">
                            <Toast
                                id={toast.id}
                                type={toast.type}
                                title={toast.title}
                                message={toast.message}
                                action={toast.action}
                                onDismiss={removeToast}
                            />
                        </div>
                    ))}
                </AnimatePresence>
            </div>
        </Portal.Root>
    );
};
