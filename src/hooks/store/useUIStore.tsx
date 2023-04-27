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
    cameraPosition: any,
    setCameraPosition: (position: any) => void,
    cameraTarget: any,
    setCameraTarget: (target: any) => void,
}

const useUIStore = create<UIStore & PopupsStore>((set) => ({
    theme: 'light',
    setTheme: (theme) => set({ theme }),
    sidebarOpen: false,
    toggleSidebar: () => set((state) => ({ sidebarOpen: !state.sidebarOpen })),
    activeScene: 'map',
    setActiveScene: (scene) => set({ activeScene: scene }),
    cameraPosition: { x: 0, y: 175, z: 0 },
    setCameraPosition: (position) => set({ cameraPosition: position }),
    cameraTarget: { x: 0, y: 0, z: 0 },
    setCameraTarget: (target) => set({ cameraTarget: target }),
    ...createPopupsSlice(set),
}));

export default useUIStore;