import { create } from "zustand";

interface AppState {
  username: string;
  setUser: (username: string) => void;
}

const useAppStore = create<AppState>((set) => ({
  username: "",
  setUser: (username) => set({ username }),
}));

export default useAppStore;
