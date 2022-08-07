import React, {useState} from "react";

function App() {
  const [likes, setLikes] = useState(0);
  const [value, setValue] = useState("Text");
  
  return (
    <div className="App">
      <h2>{likes}</h2>
      <h2>{value}</h2>
      <input value={value} onChange={(e) => setValue(e.target.value)}/>
      <button onClick={() => setLikes(likes-1)}>Decrease</button>
      <button onClick={() => setLikes(likes+1)}>Increase</button>
    </div>
  );
}

export default App;
