import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';

interface ModalState {
  modals: Record<string, boolean>;
  openModal: (id: string) => void;
  closeModal: (id: string) => void;
  toggleModal: (id: string) => void;
  isModalOpen: (id: string) => boolean;
  closeAll: () => void;
}

export const useModalStore = create<ModalState>()(
  immer((set, get) => ({
    modals: {},

    openModal: (id) =>
      set((state) => {
        state.modals[id] = true;
      }),

    closeModal: (id) =>
      set((state) => {
        state.modals[id] = false;
      }),

    toggleModal: (id) =>
      set((state) => {
        state.modals[id] = !state.modals[id];
      }),

    isModalOpen: (id) => get().modals[id] || false,

    closeAll: () =>
      set((state) => {
        state.modals = {};
      }),
  }))
);
