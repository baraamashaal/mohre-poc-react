import { ReactNode } from 'react';

export type ToastType = 'success' | 'error' | 'info' | 'warning';

export interface ToastAction {
    label: string;
    onClick: () => void;
}

export interface ToastProps {
    id: string;
    type: 'success' | 'error' | 'info' | 'warning';
    title?: string;
    message: string;
    action?: ToastAction;
    onDismiss: (id: string) => void;
    className?: string;
}

export interface ToasterProps {
    position?: 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left';
}
