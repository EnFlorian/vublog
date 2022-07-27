import create from "zustand";
import { IPost, IPostsStore, IUIStore } from "./types";
import { posts } from "../data";

const useUIStore = create<IUIStore>((set) => ({
  isDarkMode: true,
  isNotificationModalOpen: false,

  toggleDarkMode: () => set((state) => ({ ...state, isDarkMode: !state.isDarkMode })),
  closeNotificationModal: () => set((state) => ({ ...state, isNotificationModalOpen: false })),
  openNotificationModal: () => set((state) => ({ ...state, isNotificationModalOpen: true })),
}));

const usePostStore = create<IPostsStore>((set) => ({
  posts: posts,

  setPosts: (posts: IPost[]) => set((state) => ({ ...state, posts })),
  getPostById: (id: string) => posts.find((post) => post.id === id) || null,
}));

export { useUIStore, usePostStore };
