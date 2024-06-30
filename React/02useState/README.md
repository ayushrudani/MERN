# Hooks in react

## useState

useState is a Hook that lets you add React state to function components.

```jsx
import React, { useState } from "react";

function Example() {
  // Declare a state variable named "count" and set it to 0
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}
```

In this example, `useState` is a Hook that lets you add state to function components. It returns a pair of values: the current state and a function that updates it. This is similar to `this.state` and `this.setState` in a class, except you get them in a pair.

The only argument to `useState` is the initial state. In the example above, it is `0` because our counter starts from zero. Note that unlike `this.state`, the state here does not have to be an object — although it can be if you want. The initial state argument is only used during the first render.

## Declaring multiple state variables

You can use the `useState` Hook more than once in a single component:

```jsx
import React, { useState } from "react";

function ExampleWithManyStates() {
  // Declare multiple state variables!
  const [age, setAge] = useState(42);
  const [fruit, setFruit] = useState("banana");
  const [todos, setTodos] = useState([{ text: "Learn Hooks" }]);
}
```

The array destructuring syntax lets us give different names to the state variables we declared by calling `useState`. These names aren’t a part of the `useState` API. Instead, React assumes that if you call `useState` many times, you do it in the same order during every render.

## Functional updates

If the new state is computed using the previous state, you can pass a function to `setState`. The function will receive the previous value, and return an updated value. Here’s an example of a counter component that uses both forms of `setState`:

```jsx
import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
      <button onClick={() => setCount((prevCount) => prevCount - 1)}>
        Click me
      </button>
    </div>
  );
}
```

The `count + 1` form will be used if you click on the first button, and the `prevCount => prevCount - 1` form will be used if you click on the second button.

The `prevCount` argument will be the state value at the time the change is applied. It’s possible that an update is scheduled, but has not yet happened. React will always use the most recent state value.

## Lazy initial state

The `initialState` argument is the state used during the initial render. In the example above, it is `0`. It’s only used during the first render.

If the initial state is the result of an expensive computation, you may provide a function instead, which will be executed only on the initial render:

```jsx
import React, { useState } from "react";

function init() {
  return Math.random();
}

function Random() {
  const [random, setRandom] = useState(init);

  return (
    <div>
      <p>{random}</p>
      <button onClick={() => setRandom(init)}>Randomize</button>
    </div>
  );
}
```

In this example, `init` will only be called during the initial render, and its result will be used as the initial state.
