import React, { useState } from "react";

const UseState = () => {
  const [count, setCount] = useState(7);

  return (
    <>
      <button
        className="p-5 m-2 border-2"
        onClick={() => setCount((prev) => prev - 1)}
      >
        -
      </button>
      <span>{count}</span>
      <button
        className="p-5 m-2 border-2"
        onClick={() => setCount((prev) => prev + 1)}
      >
        +
      </button>
    </>
  );
};

export default UseState;
