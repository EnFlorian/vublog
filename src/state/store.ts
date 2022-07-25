import create from "zustand";
import { IPost, IPostsStore, IUIStore } from "./types";

const useUIStore = create<IUIStore>((set) => ({
  isDarkMode: true,
  isLoading: false,
  setIsLoading: (isLoading: boolean) => set((state) => ({ ...state, isLoading })),
  toggleDarkMode: () => set((state) => ({ ...state, isDarkMode: !state.isDarkMode })),
}));

const usePostStore = create<IPostsStore>((set) => ({
  posts: [],
  setPosts: (posts: IPost[]) => set((state) => ({ ...state, posts })),
}));

export { useUIStore, usePostStore };
