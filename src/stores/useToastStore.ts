import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';
import { nanoid } from 'nanoid';

export interface Toast {
  id: string;
  type: 'success' | 'error' | 'info' | 'warning';
  title?: string;
  message: string;
  duration?: number;
  action?: {
    label: string;
    onClick: () => void;
  };
}

interface ToastState {
  toasts: Toast[];
  addToast: (toast: Omit<Toast, 'id'>) => string;
  removeToast: (id: string) => void;
  clearAll: () => void;
}

export const useToastStore = create<ToastState>()(
  immer((set) => ({
    toasts: [],

    addToast: (toast) => {
      const id = nanoid();

      set((state) => {
        state.toasts.push({ ...toast, id });
      });

      // Auto-remove after duration (unless duration is 0 for persistent toast)
      if (toast.duration !== 0) {
        setTimeout(() => {
          set((state) => {
            state.toasts = state.toasts.filter((t) => t.id !== id);
          });
        }, toast.duration || 5000);
      }

      return id;
    },

    removeToast: (id) =>
      set((state) => {
        state.toasts = state.toasts.filter((t) => t.id !== id);
      }),

    clearAll: () =>
      set((state) => {
        state.toasts = [];
      }),
  }))
);
