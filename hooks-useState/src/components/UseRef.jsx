import React, { useState, useEffect, useRef } from "react";

const UseRef = () => {
  const [name, setName] = useState("");
  const renderCount = useRef(0);

  const inputRef = useRef();

  const prevName = useRef("");

  useEffect(() => {
    prevName.current = name;
  }, [name]);

  const focus = () => inputRef.current.focus();

  useEffect(() => {
    renderCount.current = renderCount.current + 1;
  });
  return (
    <>
      <input
        ref={inputRef}
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className=" border-2 text-black border-black m-2 outline-none"
      />
      <div>
        My Name is {name}, but it used to be {prevName.current}
      </div>
      <div>I rendered {renderCount.current} times</div>
      <button onClick={focus}>Focus</button>
    </>
  );
};

export default UseRef;
