# Basics

## how to create a react app

### 1. using create-react-app

```bash
npx create-react-app my-app
cd my-app
npm start
```

### 2. using vite

```bash
npm create vite@latest
cd my-app
npm install
npm run dev
```

## what is the difference between create-react-app and vite

- create-react-app is a tool that sets up a new React project with a single command. It is a popular tool for creating React applications.
- Vite is a new build tool that is designed to be fast and lightweight. It is a modern build tool that is designed to be faster than other build tools like Webpack.

## structure of a react app created by create-react-app

- public
- src
  - components
  - pages
  - App.js
  - index.js
- package.json
- README.md

## structure of a react app created by vite

- public
- src
  - components
  - pages
  - App.jsx
  - main.jsx
- package.json
- README.md

## how to create a new component in a react app

```bash
cd src/components
touch MyComponent.jsx
```

```jsx
import React from "react";
const MyComponent = () => {
  return <div>My Component</div>;
};
export default MyComponent;
```

## how to create a new page in a react app

```bash
cd src/pages
touch MyPage.jsx
```

```jsx
import React from "react";
const MyPage = () => {
  return <div>My Page</div>;
};
export default MyPage;
```

## Comman Rules

- Always use JSX extension for React components
- Always create a new component using first letter capital
- Always use PascalCase for React components
- Always use camelCase for React components' file names
- Always use double quotes for JSX attributes
- Always use single quotes for other JavaScript code
- Always use semicolons at the end of statements
