import { create } from "zustand";

interface AppState {
  username: string;
  setUsername: (username: string) => void;
}

const useAppStore = create<AppState>((set) => ({
  username: "",
  setUsername: (username) => set({ username }),
}));

export default useAppStore;
