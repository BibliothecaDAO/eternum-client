import { create } from 'zustand';

export type Background = 'map' | 'realmView' | 'combat' | 'bastion';

interface UIStore {
    theme: string;
    setTheme: (theme: string) => void;
    sidebarOpen: boolean;
    toggleSidebar: () => void;
    activeBackground: Background;
    setActiveBackground: (background: Background) => void;
}

const useUIStore = create<UIStore>((set) => ({
    theme: 'light',
    setTheme: (theme) => set({ theme }),
    sidebarOpen: false,
    toggleSidebar: () => set((state) => ({ sidebarOpen: !state.sidebarOpen })),
    activeBackground: 'map',
    setActiveBackground: (background) => set({ activeBackground: background }),
}));

export default useUIStore;