import { useState } from "react";
import "./App.css";
import ButtonList from "./Components/ButtonList/ButtonList";
import Stat from "./Components/Stat/Stat";

function App() {
  const [feedback, setFeedback] = useState([
    { type: "good", number: 0 },
    { type: "neutral", number: 0 },
    { type: "bad", number: 0 },
  ]);

  // state controlling the feedback stat
  const [isFeedback, setIsFeedback] = useState(false);
  return (
    <div className="App">
      <h1>Give Feedback</h1>
      <div className="btn-cont">
        <ButtonList
          feedback={feedback}
          setFeedback={setFeedback}
          setIsFeedback={setIsFeedback}
        />
      </div>
      <h2>Statistics</h2>
      <div className="stats-cont">
        <Stat feedback={feedback} isFeedback={isFeedback}/>
      </div>
    </div>
  );
}

export default App;
