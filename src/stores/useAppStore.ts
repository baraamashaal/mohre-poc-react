import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';

interface AppState {
  // UI State
  sidebarOpen: boolean;
  language: 'en' | 'ar';
  theme: 'light' | 'dark';

  // Actions
  toggleSidebar: () => void;
  setSidebarOpen: (open: boolean) => void;
  setLanguage: (lang: 'en' | 'ar') => void;
  setTheme: (theme: 'light' | 'dark') => void;
}

export const useAppStore = create<AppState>()(
  devtools(
    persist(
      immer((set) => ({
        // Initial State
        sidebarOpen: false,
        language: 'en',
        theme: 'light',

        // Actions
        toggleSidebar: () =>
          set((state) => {
            state.sidebarOpen = !state.sidebarOpen;
          }),

        setSidebarOpen: (open) =>
          set((state) => {
            state.sidebarOpen = open;
          }),

        setLanguage: (lang) =>
          set((state) => {
            state.language = lang;
            // Update document attributes for RTL support
            document.documentElement.setAttribute('lang', lang);
            document.documentElement.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');
          }),

        setTheme: (theme) =>
          set((state) => {
            state.theme = theme;
            // Could update document class for theme
            document.documentElement.classList.toggle('dark', theme === 'dark');
          }),
      })),
      {
        name: 'mohre-app-storage',
        // Only persist language and theme
        partialize: (state) => ({
          language: state.language,
          theme: state.theme,
        }),
      }
    ),
    { name: 'AppStore' }
  )
);
