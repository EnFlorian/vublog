import create from "zustand";
import { IPostsStore, IUIStore } from "./types";

const useUIStore = create<IUIStore>((set) => ({
  darkMode: true,
  isLoading: false,
  setIsLoading: (isLoading: boolean) => set((state) => ({ ...state, isLoading })),

  toggleDarkMode: () => set((state) => ({ ...state, darkMode: !state.darkMode })),
}));

const usePostStore = create<IPostsStore>((set) => ({
  posts: [],
  setPosts: (posts: any[]) => set((state) => ({ ...state, posts })),
}));

export { useUIStore, usePostStore };
