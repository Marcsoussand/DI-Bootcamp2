import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState<number>(0);
  const [lastAction, setLastAction] = useState<string | null>(null);

  const increment = () => {
    setCount(count + 1);
    setLastAction("increment");
  };

  const decrement = () => {
    setCount(count - 1);
    setLastAction("decrement");
  };

  return (
    <div>
      <p>Count: {count}</p>
      <p>Last action: {lastAction ?? "none"}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
}