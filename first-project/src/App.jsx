import { useState } from "react";
import "./App.css";

function App() {
  const [counter, setCounter] = useState(20);
  const addValue = () => {
    setCounter(counter + 1);
  };

  const removeValue = () => {
    setCounter(counter - 1);
  };

  return (
    <>
      <h1> Counting Program {counter}</h1>
      <h2> Count {counter}</h2>
      <button onClick={addValue}> Increase count </button>
      {"    "}
      <button onClick={removeValue}> Decrease count </button>
      <p> Footer {counter}</p>
    </>
  );
}

export default App;
