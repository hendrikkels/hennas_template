import { create } from "zustand";

interface State {
    accessToken: string | null,
    user: any | null,
    setAccessToken: (input: string) => void;
    removeAccessToken: () => void;
    setUser: (input: any) => void;
    removeUser: () => void;
}

export const useStore = create<State>((set) => ({
    accessToken: null,
    user: {},
    setAccessToken: (input: string) => set((state) => ({ ...state, accessToken: input })),
    removeAccessToken: () => set((state) => ({ ...state, accessToken: null })),
    setUser: (input) => set((state) => ({ ...state, user: input })),
    removeUser: () => set((state) => ({ ...state, user: null })),
}))