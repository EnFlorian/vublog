import { BsCodeSquare } from "react-icons/bs";
import { FiChrome, FiServer } from "react-icons/fi";
import { AiOutlineLineChart } from "react-icons/ai";
import { FaFacebookSquare, FaGithubSquare, FaInstagram, FaTwitterSquare } from "react-icons/fa";

const markdown = `

# h1 Heading
## h2 Heading
### h3 Heading
#### h4 Heading
##### h5 Heading
###### h6 Heading


### Horizontal Rule
***


## Typographic replacements



## Emphasis

**This is bold text**

__This is bold text__

*This is italic text*

_This is italic text_

~~Strikethrough~~

## Blockquotes

> Blockquotes can also be nested...
>> ...by using additional greater-than signs right next to each other...
> > > ...or with spaces between arrows.

## Lists

Unordered

+ Create a list by starting a line with 
+ Create a list by starting a line with 
+ Create a list by starting a line with 
+ Create a list by starting a line with 

## Code


Indented code

    // Some comments
    line 1 of code
    line 2 of code
    line 3 of code



## Tables

| Option | Description |
| ------ | ----------- |
| data   | path to data files to supply the data that will be passed into templates. |
| engine | engine to be used for processing templates. Handlebars is the default. |
| ext    | extension to be used for dest files. |

Right aligned columns

| Option | Description |
| ------:| -----------:|
| data   | path to data files to supply the data that will be passed into templates. |
| engine | engine to be used for processing templates. Handlebars is the default. |
| ext    | extension to be used for dest files. |

## Links

[link text](http://dev.nodeca.com)

[link with title](http://nodeca.github.io/pica/demo/ "title text!")

Autoconverted link https://github.com/nodeca/pica (enable linkify to see)
## Images
![Minion](https://octodex.github.com/images/minion.png)


`;

const navLinks = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Posts",
    path: "/posts",
  },
  {
    name: "About",
    path: "/about",
  },
];

const posts = [
  {
    id: "db07bb16-0c50-11ed-861d-0242ac120002",
    title: "Is the bigger screen on the new nintendo switch worth it?",
    summary:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
    content: markdown,
    image: "https://res.cloudinary.com/dymu62vtv/image/upload/v1655250543/blog-cms/posts/7_mzutvj.jpg",
    category: "Gaming",
    createdAt: "22.05.2020",
    author: {
      id: "1",
      name: "Akira Bauer",
      image: "https://res.cloudinary.com/dymu62vtv/image/upload/v1658860350/blog-cms/users/person_tapgn8.jpg",
    },
  },

  {
    id: "db07be90-0c50-11ed-861d-0242ac120002",
    title: "What does the future of electric mobiles look like?",
    summary:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
    content: markdown,
    image: "https://res.cloudinary.com/dymu62vtv/image/upload/v1655250545/blog-cms/posts/1_yibu7i.jpg",
    category: "Electric Cars",
    createdAt: "22.05.2020",
    author: {
      id: "1",
      name: "Akira Bauer",
      image: "https://res.cloudinary.com/dymu62vtv/image/upload/v1658860350/blog-cms/users/person_tapgn8.jpg",
    },
  },

  {
    id: "db07c00c-0c50-11ed-861d-0242ac120002",
    title: "How version control is properly done in a team?",
    summary:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
    content: markdown,
    image: "https://res.cloudinary.com/dymu62vtv/image/upload/v1655250544/blog-cms/posts/5_v8ne3l.jpg",
    category: "Programming",
    createdAt: "22.05.2020",
    author: {
      id: "1",
      name: "Akira Bauer",
      image: "https://res.cloudinary.com/dymu62vtv/image/upload/v1658860350/blog-cms/users/person_tapgn8.jpg",
    },
  },

  {
    id: "db07c4b2-0c50-11ed-861d-0242ac120002",
    title: "How many monitors are too many monitors?",
    summary:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
    content: markdown,
    image: "https://res.cloudinary.com/dymu62vtv/image/upload/v1655250544/blog-cms/posts/6_caczhu.jpg",
    category: "Programming",
    createdAt: "22.05.2020",
    author: {
      id: "1",
      name: "Akira Bauer",
      image: "https://res.cloudinary.com/dymu62vtv/image/upload/v1658860350/blog-cms/users/person_tapgn8.jpg",
    },
  },

  {
    id: "db07c5f2-0c50-11ed-861d-0242ac120002",
    title: "How gaming has changed over the last 10 years",
    summary:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
    content: markdown,
    image: "https://res.cloudinary.com/dymu62vtv/image/upload/v1655250543/blog-cms/posts/3_ibhljc.jpg",
    category: "Gaming",
    createdAt: "22.05.2020",
    author: {
      id: "1",
      name: "Akira Bauer",
      image: "https://res.cloudinary.com/dymu62vtv/image/upload/v1658860350/blog-cms/users/person_tapgn8.jpg",
    },
  },

  {
    id: "db07c70a-0c50-11ed-861d-0242ac120002",
    title: "What makes processor architecture different from GPU?",
    summary:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
    content: markdown,
    image: "https://res.cloudinary.com/dymu62vtv/image/upload/v1655250543/blog-cms/posts/2_ecqztt.jpg",
    category: "Technology",
    createdAt: "22.05.2020",
    author: {
      id: "1",
      name: "Akira Bauer",
      image: "https://res.cloudinary.com/dymu62vtv/image/upload/v1658860350/blog-cms/users/person_tapgn8.jpg",
    },
  },

  {
    id: "db07c836-0c50-11ed-861d-0242ac120002",
    title: "How robots will change our daily lives in the future",
    summary:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
    content: markdown,
    image: "https://res.cloudinary.com/dymu62vtv/image/upload/v1655250543/blog-cms/posts/4_g4ynww.jpg",
    category: "Machine Learning",
    createdAt: "22.05.2020",
    author: {
      id: "1",
      name: "Akira Bauer",
      image: "https://res.cloudinary.com/dymu62vtv/image/upload/v1658860350/blog-cms/users/person_tapgn8.jpg",
    },
  },

  // -----------------

  {
    id: "db07c836-0c50-11ed-861d-0242ac1200021",
    title: "How long will it take us to replace conventioanl cars with electric ones?",
    summary:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
    content: markdown,
    image: "https://res.cloudinary.com/dymu62vtv/image/upload/v1655250545/blog-cms/posts/1_yibu7i.jpg",
    category: "Electric Cars",
    createdAt: "22.05.2020",
    author: {
      id: "1",
      name: "Akira Bauer",
      image: "https://res.cloudinary.com/dymu62vtv/image/upload/v1658860350/blog-cms/users/person_tapgn8.jpg",
    },
  },

  {
    id: "db07c836-0c50-11ed-861d-0242ac1200022",
    title: "How can you jailbreak your nintendo switch?",
    summary:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
    content: markdown,
    image: "https://res.cloudinary.com/dymu62vtv/image/upload/v1655250543/blog-cms/posts/7_mzutvj.jpg",
    category: "Gaming",
    createdAt: "22.05.2020",
    author: {
      id: "1",
      name: "Akira Bauer",
      image: "https://res.cloudinary.com/dymu62vtv/image/upload/v1658860350/blog-cms/users/person_tapgn8.jpg",
    },
  },
  {
    id: "db07c836-0c50-11ed-861d-0242ac1200023",
    title: "Should you use a GPU or CPU for your machine learning?",
    summary:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
    content: markdown,
    image: "https://res.cloudinary.com/dymu62vtv/image/upload/v1655250543/blog-cms/posts/2_ecqztt.jpg",
    category: "Technology",
    createdAt: "22.05.2020",
    author: {
      id: "1",
      name: "Akira Bauer",
      image: "https://res.cloudinary.com/dymu62vtv/image/upload/v1658860350/blog-cms/users/person_tapgn8.jpg",
    },
  },
  {
    id: "db07c836-0c50-11ed-861d-0242ac1200024",
    title: "What are robots already capable of?",
    summary:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
    content: markdown,
    image: "https://res.cloudinary.com/dymu62vtv/image/upload/v1655250543/blog-cms/posts/4_g4ynww.jpg",
    category: "Machine Learning",
    createdAt: "22.05.2020",
    author: {
      id: "1",
      name: "Akira Bauer",
      image: "https://res.cloudinary.com/dymu62vtv/image/upload/v1658860350/blog-cms/users/person_tapgn8.jpg",
    },
  },
  {
    id: "db07c836-0c50-11ed-861d-0242ac1200025",
    title: "Does using dark modes really reduce the strain on our eyes?",
    summary:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
    content: markdown,
    image: "https://res.cloudinary.com/dymu62vtv/image/upload/v1655250544/blog-cms/posts/6_caczhu.jpg",
    category: "Programming",
    createdAt: "22.05.2020",
    author: {
      id: "1",
      name: "Akira Bauer",
      image: "https://res.cloudinary.com/dymu62vtv/image/upload/v1658860350/blog-cms/users/person_tapgn8.jpg",
    },
  },

  {
    id: "db07c836-0c50-11ed-861d-0242ac1200026",
    title: "10 Ways to decrease the time you train your models",
    summary:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
    content: markdown,
    image: "https://res.cloudinary.com/dymu62vtv/image/upload/v1655250543/blog-cms/posts/2_ecqztt.jpg",
    category: "Machine Learning",
    createdAt: "22.05.2020",
    author: {
      id: "1",
      name: "Akira Bauer",
      image: "https://res.cloudinary.com/dymu62vtv/image/upload/v1658860350/blog-cms/users/person_tapgn8.jpg",
    },
  },

  {
    id: "db07c836-0c50-11ed-861d-0242ac1200027",
    title: "The best way to learn to Machine Learning?",
    summary:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
    content: markdown,
    image: "https://res.cloudinary.com/dymu62vtv/image/upload/v1655250544/blog-cms/posts/6_caczhu.jpg",
    category: "Machine Learning",
    createdAt: "22.05.2020",
    author: {
      id: "1",
      name: "Akira Bauer",
      image: "https://res.cloudinary.com/dymu62vtv/image/upload/v1658860350/blog-cms/users/person_tapgn8.jpg",
    },
  },

  {
    id: "db07c836-0c50-11ed-861d-0242ac1200028",
    title: "Does computer vision really help us to recognize cancer?",
    summary:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
    content: markdown,
    image: "https://res.cloudinary.com/dymu62vtv/image/upload/v1655250543/blog-cms/posts/2_ecqztt.jpg",
    category: "Machine Learning",
    createdAt: "22.05.2020",
    author: {
      id: "1",
      name: "Akira Bauer",
      image: "https://res.cloudinary.com/dymu62vtv/image/upload/v1658860350/blog-cms/users/person_tapgn8.jpg",
    },
  },

  {
    id: "db07c836-0c50-11ed-861d-0242ac1200029",
    title: "Will Transformers completely replace LSTMs?",
    summary:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
    content: markdown,
    image: "https://res.cloudinary.com/dymu62vtv/image/upload/v1655250545/blog-cms/posts/1_yibu7i.jpg",
    category: "Machine Learning",
    createdAt: "22.05.2020",
    author: {
      id: "1",
      name: "Akira Bauer",
      image: "https://res.cloudinary.com/dymu62vtv/image/upload/v1658860350/blog-cms/users/person_tapgn8.jpg",
    },
  },
];

const categories = [
  {
    id: "1",
    name: "Machine Learning",
    icon: <BsCodeSquare />,
  },
  {
    id: "2",
    name: "Programming",
    icon: <FiChrome />,
  },
  {
    id: "3",
    name: "Technology",
    icon: <AiOutlineLineChart />,
  },
  {
    id: "4",
    name: "Gaming",
    icon: <FiServer />,
  },
];

const socials = [
  {
    id: "1",
    name: "Facebook",
    path: "/",
    icon: <FaFacebookSquare />,
  },
  {
    id: "2",
    name: "Twitter",
    path: "/",
    icon: <FaTwitterSquare />,
  },
  {
    id: "3",
    name: "Instagram",
    path: "/",
    icon: <FaInstagram />,
  },
  {
    id: "4",
    name: "Github",
    path: "/",
    icon: <FaGithubSquare />,
  },
];

const about = {
  image: "https://res.cloudinary.com/dymu62vtv/image/upload/v1655250544/blog-cms/posts/5_v8ne3l.jpg",
  background: `lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
  webdev:
    "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
  devops:
    "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
};

export { navLinks, posts, categories, socials, about, markdown };
