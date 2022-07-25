import create from "zustand";

interface IUIStore {
  darkMode: boolean;
  isLoading: boolean;
  setIsLoading: (isLoading: boolean) => void;
}

const useUIStore = create<IUIStore>((set) => ({
  darkMode: true,
  isLoading: false,
  setIsLoading: (isLoading: boolean) =>
    set((state) => ({ ...state, isLoading })),

  toggleDarkMode: () =>
    set((state) => ({ ...state, darkMode: !state.darkMode })),
}));

export { useUIStore };
