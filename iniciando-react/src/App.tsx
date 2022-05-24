import { useState } from "react";
import { Tweet } from "./components/Tweet";

import "./App.css";
import { RoutesApp } from "./RoutesApp";


function App() {
  const [tweets, setTweets] = useState<string[]>([
    "Tweet 01",
    "Tweet 02",
    "Tweet 03",
    "Tweet 04",
  ]);

  function createTweet() {
    setTweets([...tweets, "Tweet 05"]);
  }

  return (
    <div>
      <div>
      <RoutesApp />
      </div>
      
     {tweets.map((tweet) => {
        return <Tweet text={tweet} />;
      })}

      <button
        onClick={createTweet}
        style={{
          background: "purple",
          color: "white",
          padding: "15px",
          borderRadius: "15px",
          border: "none",
        }}
      >
        Adicionar Tweet
      </button> 
    </div>
  );
}

export default App;
