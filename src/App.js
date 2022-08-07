import React, {useState} from "react";
import Counter from "./components/Counter";
import ClassCounter from "./components/ClassCounter";

import "./styles/App.css";
import PostItem from "./components/PostItem";

function App() {
  const [value, setValue] = useState("Text");
  
  return (
    <div className="App">
      <PostItem post={{
        id: 1,
        title: "Post 1",
        body: "Post text"
      }}/>
      <PostItem post={{
        id: 2,
        title: "Post 2",
        body: "Post text"
      }}/>
      <PostItem post={{
        id: 3,
        title: "Post 3",
        body: "Post text"
      }}/>
    </div>
  );
}

export default App;
