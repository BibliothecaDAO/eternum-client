import { create } from 'zustand';
import { createPopupsSlice, PopupsStore } from './_popups';
export type Background = 'map' | 'realmView' | 'combat' | 'bastion';

interface UIStore {
    theme: string;
    setTheme: (theme: string) => void;
    sidebarOpen: boolean;
    toggleSidebar: () => void;
    activeScene: Background;
    setActiveScene: (background: Background) => void;
}

const useUIStore = create<UIStore & PopupsStore>((set) => ({
    theme: 'light',
    setTheme: (theme) => set({ theme }),
    sidebarOpen: false,
    toggleSidebar: () => set((state) => ({ sidebarOpen: !state.sidebarOpen })),
    activeScene: 'map',
    setActiveScene: (scene) => set({ activeScene: scene }),
    ...createPopupsSlice(set),
}));

export default useUIStore;