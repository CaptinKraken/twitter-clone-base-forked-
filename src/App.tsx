import type { Component } from "solid-js";
import { createSignal, createEffect } from "solid-js";

const App: Component = () => {
  const [count, setCount] = createSignal(0);

  console.log(count());

  createEffect(() => {
    setInterval(() => {
      setCount(count() + 1);
    }, 1000);
  });

  return <>Twitter Clone</>;
};

export default App;
