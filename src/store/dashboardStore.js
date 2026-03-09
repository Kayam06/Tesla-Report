import { create } from "zustand";

export const useDashboardStore = create((set) => ({
  activeSection: "overview",
  setActiveSection: (section) => set({ activeSection: section }),
  theme: "dark",
  setTheme: (theme) => set({ theme }),
}));
