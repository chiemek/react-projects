import { useState } from "react";
import Card from "./components/Card";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1 className=" text-3xl bg-green-500 p-3 rounded-md">
        Tailwind and react
      </h1>
      <Card
        username="Emeka"
        post="Software Engineer"
        images={
          "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHRlY2h8ZW58MHx8MHx8fDA%3D"
        }
      />

      <Card
        username="Ada"
        post="Cloud Engineer"
        images={
          "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dGVjaHxlbnwwfHwwfHx8MA%3D%3D"
        }
      />
      <Card
        username="Paul"
        post="Product Manager"
        images={
          "https://images.unsplash.com/photo-1530893609608-32a9af3aa95c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHRlY2h8ZW58MHx8MHx8fDA%3D"
        }
      />
    </>
  );
}

export default App;
