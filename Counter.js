import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  // Increment count by 1
  const increment = () => {
    setCount(count + 1);
  };

  // Increment count by 1 after 2 seconds
  const incrementAfterDelay = () => {
    setTimeout(() => {
      setCount(count + 1);
    }, 2000);
  };

  // Incorrect increment by 2 (React may batch updates)
  const incrementTwice = () => {
    setCount(count + 1);
    setCount(count + 1);
  };

  // Correctly increment by 2 using state updater function
  const correctIncrementTwice = () => {
    setCount((prevCount) => prevCount + 1);
    setCount((prevCount) => prevCount + 1);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Counter: {count}</h2>
      <button onClick={increment}>Increment</button>
      <button onClick={incrementAfterDelay}>Increment After Delay</button>
      <button onClick={incrementTwice}>Increment Twice</button>
      <button onClick={correctIncrementTwice}>Correct Increment Twice</button>
    </div>
  );
};

export default Counter;
