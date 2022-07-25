export interface IUIStore {
  isDarkMode: boolean;
  isLoading: boolean;
  setIsLoading: (isLoading: boolean) => void;
  toggleDarkMode: () => void;
}

export interface Author {
  id: string;
  name: string;
  image: string;
}

export interface IPost {
  id: string;
  title: string;
  summary: string;
  content: string;
  image: string;
  category: string;
  createdAt: string;
  author: Author;
}

export interface IPostsStore {
  posts: IPost[];
  setPosts: (posts: IPost[]) => void;
}
