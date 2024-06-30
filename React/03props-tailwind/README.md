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

# props in react

## Props

Props are short for properties and are used to pass data from one component to another. They are read-only and cannot be modified by the child component that receives them. Props are passed down from parent components to child components and are used to customize the behavior and appearance of a component.

### Passing props

You can pass props to a component by adding attributes to the component when you use it in another component. Here is an example of how you can pass props to a component:

```jsx
import React from "react";

function Greeting(props) {
  return <h1>Hello, {props.name}!</h1>;
}

function App() {
  return <Greeting name="John" />;
}

export default App;
```

In this example, the `Greeting` component receives a `name` prop from the `App` component. The `name` prop is passed as an attribute to the `Greeting` component, and the component displays a greeting message using the `name` prop.

### Using props

You can access props in a component by using the `props` object. The `props` object contains all the props passed to the component as key-value pairs. You can access the props by using dot notation on the `props` object. Here is an example of how you can access props in a component:

```jsx
import React from "react";

function Greeting(props) {
  return <h1>Hello, {props.name}!</h1>;
}

function App() {
  return <Greeting name="John" />;
}

export default App;
```

In this example, the `Greeting` component accesses the `name` prop by using `props.name` and displays a greeting message using the `name` prop.

### Default props

You can define default props for a component by using the `defaultProps` property on the component. Default props are used when a prop is not passed to the component. Here is an example of how you can define default props for a component:

```jsx
import React from "react";

function Greeting(props) {
  return <h1>Hello, {props.name}!</h1>;
}

Greeting.defaultProps = {
  name: "Guest",
};

function App() {
  return <Greeting />;
}

export default App;
```

In this example, the `Greeting` component defines a default prop for the `name` prop using the `defaultProps` property. If the `name` prop is not passed to the `Greeting` component, it will display a greeting message using the default value of `Guest`.

### Children props

You can pass children to a component as props by using the special `children` prop. The `children` prop is a special prop that contains the children of the component. You can access the children of a component by using the `props.children` property. Here is an example of how you can pass children to a component:

```jsx
import React from "react";

function Card(props) {
  return <div className="card">{props.children}</div>;
}

function App() {
  return (
    <Card>
      <h1>Hello, World!</h1>
      <p>This is a sample card component.</p>
    </Card>
  );
}

export default App;
```

In this example, the `Card` component receives children as props and displays the children inside a `div` element with the class `card`. The `App` component passes children to the `Card` component by wrapping the children inside the `Card` component.
