import React, { useState, useEffect } from "react";

const UseEffect = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const setResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", setResize);
    return () => {
      window.removeEventListener("resize", setResize);
    };
  }, []);

  return <div>{windowWidth}</div>;
};

export default UseEffect;
