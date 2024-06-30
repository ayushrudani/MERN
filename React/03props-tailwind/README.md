# props and tailwind in react

## Tailwind CSS

Tailwind CSS is a utility-first CSS framework for rapidly building custom designs. It is a low-level framework that provides you with all of the building blocks you need to create a custom design without any opinionated styles. It is a highly customizable framework that allows you to build designs without having to leave your HTML.

### Installation

To install Tailwind CSS, you can use npm or yarn. You can install Tailwind CSS by running the following command:

```bash
npm install -D tailwindcss@latest postcss@latest autoprefixer@latest
```

### Configuration

After installing Tailwind CSS, you need to create a configuration file to customize the default settings. You can create a configuration file by running the following command:

```bash
npx tailwindcss init -p
```

This will create a `tailwind.config.js` file in your project directory. You can customize the default settings in this file to suit your project requirements.

## configuring path

```bash
/** @type {import('tailwindcss').Config} */
export default{
    content: [
        "./index.html",
        "./src/**/*.{js,jsx,ts,tsx}"
    ],
    theme: {
        extend: {},
    },
    plugins: [],
}
```

## add the tailwindcss to CSS

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

### Using Tailwind CSS in React

To use Tailwind CSS in a React project, you need to import the Tailwind CSS styles in your project. You can do this by importing the `tailwind.css` file in your `index.js` file:

```jsx
import "tailwindcss/tailwind.css";
```

This will apply the default Tailwind CSS styles to your project. You can now start using Tailwind CSS utility classes in your components to style your application.

### Example

Here is an example of how you can use Tailwind CSS utility classes in a React component:

```jsx
import React from "react";

function App() {
  return (
    <div className="bg-gray-100 p-4">
      <h1 className="text-2xl font-bold text-gray-800">Hello, Tailwind CSS!</h1>
      <p className="text-gray-600">
        This is a sample React component styled with Tailwind CSS.
      </p>
    </div>
  );
}

export default App;
```
