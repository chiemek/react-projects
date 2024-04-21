import React, { useState, useMemo } from "react";

const UseMemo = () => {
  const slowFunction = (num) => {
    for (let i = 0; i <= 100000000; i++) {}
    return num * 2;
  };
  const [number, setNumber] = useState(0);
  const [dark, setDark] = useState(false);
  const doubleNumber = useMemo(() => {
    return slowFunction(number);
  }, [number]);
  const themeStyles = useMemo(() => {
    return {
      backgroundColor: dark ? "black" : "white",
      color: dark ? "white" : "black",
    };
  }, [dark]);
  return (
    <>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(parseInt(e.target.value))}
        className=" border-2"
      />
      <button onClick={() => setDark((prev) => !prev)} className=" border-2 ">
        Change Theme
      </button>
      <div style={themeStyles}>{doubleNumber}</div>
    </>
  );
};

export default UseMemo;
