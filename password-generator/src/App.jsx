import { useState } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [numAllowed, setNumAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState(" ");
  return (
    <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
      <h1 className="text-white text-center my-3">Password Generator</h1>
      <div className="flex shadow rounded-lg overflow-hidden md-4    mb-3">
        <input
          type="text"
          value={password}
          className="outline-none w-full py-1 px-3"
          placeholder="Password"
          readOnly
        />
        <button className="outline-none bg-blue-600 text-white px-3 py-0.5 shrink-0">
          Copy
        </button>
      </div>
      <div className="flex text-sm gap-x-2">
        <div className="flex items-center gap-x-1  ">
          <input
            type="range"
            name=""
            min={8}
            max={20}
            className="cursor-pointer"
            id=""
            value={length}
            onChange={(e) => setLength(e.target.value)}
          />
          <label htmlFor="length"> Length: {length}</label>
        </div>
        <div className="flex items-center gap-x-1  ">
          <input
            type="checkbox"
            defaultChecked={numAllowed}
            onChange={() => {
              setNumAllowed((prev) => !prev);
            }}
            name=""
            id=""
          />
          <label htmlFor="number"> Numbers</label>
        </div>
        <div className="flex items-center gap-x-1  ">
          <input
            type="checkbox"
            defaultChecked={charAllowed}
            onChange={() => {
              setCharAllowed((prev) => !prev);
            }}
            name=""
            id=""
          />
          <label htmlFor="text"> Characters</label>
        </div>
      </div>
    </div>
  );
}

export default App;
