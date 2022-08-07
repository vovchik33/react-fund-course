import React, {useState} from "react";
import Counter from "./components/Counter";

function App() {
  const [likes, setLikes] = useState(0);
  const [value, setValue] = useState("Text");
  
  return (
    <div className="App">
      <Counter />
      <h2>{value}</h2>
      <input value={value} onChange={(e) => setValue(e.target.value)}/>
    </div>
  );
}

export default App;
