import create from "zustand";
import { IPost, IPostsStore, IUIStore } from "./types";
import { posts } from "../data";

const useUIStore = create<IUIStore>((set) => ({
  isDarkMode: true,
  isLoading: false,
  isNotificationModalOpen: false,

  setIsLoading: (isLoading: boolean) => set((state) => ({ ...state, isLoading })),
  toggleDarkMode: () => set((state) => ({ ...state, isDarkMode: !state.isDarkMode })),
  closeNotificationModal: () => set((state) => ({ ...state, isNotificationModalOpen: false })),
  openNotificationModal: () => set((state) => ({ ...state, isNotificationModalOpen: true })),
}));

const usePostStore = create<IPostsStore>((set) => ({
  posts: posts,
  filteredPosts: [],

  setPosts: (posts: IPost[]) => set((state) => ({ ...state, posts })),
  setFilteredPosts: (filteredPosts: IPost[]) => set((state) => ({ ...state, filteredPosts })),
  getPostById: (id: string) => posts.find((post) => post.id === id) || null,
}));

export { useUIStore, usePostStore };
