import { Socket } from "socket.io-client";
import { create } from "zustand";

interface AppState {
  username: string;
  setUsername: (username: string) => void;
  socket: Socket | null;
  setSocket: (socket: Socket) => void;
}

const useAppStore = create<AppState>((set) => ({
  username: "",
  setUsername: (username) => set({ username }),
  socket: null,
  setSocket: (socket) => set({ socket }),
}));

export default useAppStore;
