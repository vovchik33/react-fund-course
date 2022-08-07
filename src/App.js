import React, {useState} from "react";
import Counter from "./components/Counter";
import ClassCounter from "./components/ClassCounter";

function App() {
  const [value, setValue] = useState("Text");
  
  return (
    <div className="App">
      <Counter />
      <ClassCounter />
      
      <h2>{value}</h2>
      <input value={value} onChange={(e) => setValue(e.target.value)}/>
    </div>
  );
}

export default App;
