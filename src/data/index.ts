const navLinks = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "About",
    path: "/about",
  },
  {
    name: "Contact",
    path: "/contact",
  },
];

const posts = [
  {
    id: "1",
    title: "Why Machine Learning is the Future of Web Development",
    summary: "Machine learning is the future of web development. It's the future of everything.",
    content:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    image: "https://res.cloudinary.com/dymu62vtv/image/upload/v1655250543/blog-cms/posts/7_mzutvj.jpg",
    category: "Machine Learning",
    createdAt: "2020-01-01",
    author: {
      id: "1",
      name: "John Doe",
      image: "https://res.cloudinary.com/dymu62vtv/image/upload/v1655340581/blog-cms/users/person_n0canj.jpg",
    },
  },

  {
    id: "2",
    title: "Why Machine Learning is the Future of Web Development",
    summary: "Machine learning is the future of web development. It's the future of everything.",
    content:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    image: "https://res.cloudinary.com/dymu62vtv/image/upload/v1655250543/blog-cms/posts/7_mzutvj.jpg",
    category: "Machine Learning",
    createdAt: "2020-01-01",
    author: {
      id: "1",
      name: "John Doe",
      image: "https://res.cloudinary.com/dymu62vtv/image/upload/v1655340581/blog-cms/users/person_n0canj.jpg",
    },
  },

  {
    id: "3",
    title: "Why Machine Learning is the Future of Web Development",
    summary: "Machine learning is the future of web development. It's the future of everything.",
    content:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    image: "https://res.cloudinary.com/dymu62vtv/image/upload/v1655250543/blog-cms/posts/7_mzutvj.jpg",
    category: "Machine Learning",

    createdAt: "2020-01-01",
    author: {
      id: "1",
      name: "John Doe",
      image: "https://res.cloudinary.com/dymu62vtv/image/upload/v1655340581/blog-cms/users/person_n0canj.jpg",
    },
  },

  {
    id: "4",
    title: "Why Machine Learning is the Future of Web Development",
    summary: "Machine learning is the future of web development. It's the future of everything.",
    content:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    image: "https://res.cloudinary.com/dymu62vtv/image/upload/v1655250543/blog-cms/posts/7_mzutvj.jpg",
    category: "Machine Learning",
    createdAt: "2020-01-01",
    author: {
      id: "1",
      name: "John Doe",
      image: "https://res.cloudinary.com/dymu62vtv/image/upload/v1655340581/blog-cms/users/person_n0canj.jpg",
    },
  },

  {
    id: "5",
    title: "Why Machine Learning is the Future of Web Development",
    summary: "Machine learning is the future of web development. It's the future of everything.",
    content:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    image: "https://res.cloudinary.com/dymu62vtv/image/upload/v1655250543/blog-cms/posts/7_mzutvj.jpg",
    category: "Machine Learning",
    createdAt: "2020-01-01",
    author: {
      id: "1",
      name: "John Doe",
      image: "https://res.cloudinary.com/dymu62vtv/image/upload/v1655340581/blog-cms/users/person_n0canj.jpg",
    },
  },

  {
    id: "6",
    title: "Why Machine Learning is the Future of Web Development",
    summary: "Machine learning is the future of web development. It's the future of everything.",
    content:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    image: "https://res.cloudinary.com/dymu62vtv/image/upload/v1655250543/blog-cms/posts/7_mzutvj.jpg",
    category: "Machine Learning",
    createdAt: "2020-01-01",
    author: {
      id: "1",
      name: "John Doe",
      image: "https://res.cloudinary.com/dymu62vtv/image/upload/v1655340581/blog-cms/users/person_n0canj.jpg",
    },
  },

  {
    id: "7",
    title: "Why Machine Learning is the Future of Web Development",
    summary: "Machine learning is the future of web development. It's the future of everything.",
    content:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    image: "https://res.cloudinary.com/dymu62vtv/image/upload/v1655250543/blog-cms/posts/7_mzutvj.jpg",
    category: "Machine Learning",
    createdAt: "2020-01-01",
    author: {
      id: "1",
      name: "John Doe",
      image: "https://res.cloudinary.com/dymu62vtv/image/upload/v1655340581/blog-cms/users/person_n0canj.jpg",
    },
  },
];

export { navLinks, posts };
