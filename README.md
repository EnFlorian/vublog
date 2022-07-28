# 💻 VuBlog

##### VuBlog is a minimal personal blog that lets you post content and stay in touch with people


## 📖 Features
 - Fully Responsive / Mobile friendly
 - Darkmode
 - Pure (S)CSS


## 👩‍💻 Live Website

### [Vublog (Vercel)](vublog.vercel.app)

## 🖼 Offline Demo

### Desktop Preview
![Vublog](/demo/vublog-desktop-demo.gif)

### Offline Preview
![Vublog](/demo/vublog-mobile-demo.gif)


## ⚒ Installation/Setup
The installation requires at least **node version 10.4**

```Shell
# run in the root directory of the project
npm install
npm run start

# run in the root directory of the project
yarn install
yarn run start
```


## 📚 Technical Informations

#### Technologies used

| Technology              | Description                            |
|-------------------------|----------------------------------------|
| Typescript              |   Programming Language
| Vite                    |   Build tool as replacement for CRA    |
| React                   |   Frontend Library                              |
| SCSS                    |   CSS preprocessor                              |
| Zustand.js              |   Global state management, Darkmode/Posts  |


#### Implementation
The Blog uses Typescript together with React. 
Zustand.js is used to manage the global state of the blog, because it offers a more lighweight typesafe alternative to redux and react context/useReducer. 
The styling is done with pure SCSS.





