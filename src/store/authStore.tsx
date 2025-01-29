import { create } from "zustand";

interface AuthStore {
  token: string;
  username: string;
  password: string;
  setValue: <K extends keyof AuthStore>(key: K, value: AuthStore[K]) => void;
}

const useAuthStore = create<AuthStore>((set) => ({
  token: "",
  username: "",
  password: "",
  setValue: <K extends keyof AuthStore>(key: K, value: AuthStore[K]) =>
    set((state) => ({ ...state, [key]: value })),
}));
export default useAuthStore;
