# React Project Setup with Vite

## Overview - React

React is a JavaScript library for building user interfaces, especially single-page applications where you need a fast, interactive experience. It lets you build reusable UI components and manage state efficiently.

## Why React

- Component-based architecture
- Fast and efficient rendering with virtual DOM
- Large community and ecosystem
- Suitable for complex frontend applications

## Overview - Vite

Vite is a modern frontend build tool that provides a faster and leaner development experience for modern web projects. It uses native ES modules and starts the server instantly.

## Why Vite

- Lightning-fast cold starts
- Hot Module Replacement (HMR) for instant updates
- Optimized build using Rollup
- Easy configuration for React and other frameworks

## Installation of Node.js and npm

Install Node.js (which comes with npm) from the official site:

🔗 https://nodejs.org/

## Why install Node.js and npm?

- **Node.js** is required to run JavaScript tools on your system.
- **npm (Node Package Manager)** is used to manage project dependencies like React, Vite, etc.

## Getting Started with React + Vite

Open your terminal and run:

```bash
npm create vite@latest my-react-app -- --template react
cd my-react-app
npm install
npm run dev
```

---

## My First React Code

Once the project is set up, replace the content of `src/App.jsx` with the following code:

```jsx
function App() {
  return (
    <div>
      <h1>Hello World</h1>
      <h2>This is my first React App</h2>
      <p>My name is namrata...</p>
    </div>
  );
}

export default App;


--------
```

## 🧩 Adding a Reusable Header Component

Now let's organize our code by creating a separate `Header` component and using it inside the `App` component.

### 📄 `src/Header.jsx`

```jsx
function Header() {
  return <h1>Header</h1>;
}

export default Header;

import Header from './Header.jsx';

function App() {
  return (
    <div>
      <Header />
        ..... other existing elemnts
          </div>
  );
}

export default App;
```
