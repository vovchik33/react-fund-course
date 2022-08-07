import React, {useState} from "react";

function App() {
  const [likes, setLikes] = useState(0);
  
  return (
    <div className="App">
      <h2>{likes}</h2>
      <button onClick={() => setLikes(likes-1)}>Decrease</button>
      <button onClick={() => setLikes(likes+1)}>Increase</button>
    </div>
  );
}

export default App;
