import { create } from "zustand";

interface DashboardStore {
  setValue: <K extends keyof DashboardStore>(
    key: K,
    value: DashboardStore[K]
  ) => void;
}

const useDashboardStore = create<DashboardStore>((set) => ({
  setValue: <K extends keyof DashboardStore>(
    key: K,
    value: DashboardStore[K]
  ) => set((state) => ({ ...state, [key]: value })),
}));
export default useDashboardStore;
