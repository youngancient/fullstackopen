import { useState } from "react";
import viteLogo from "/vite.svg";
import "./App.css";
import Display from "./Components/Display/Display";
import HighestVote from "./Components/Highest/HighestVote";

function App() {
  const [anecdotes, setAnecdotes] = useState([
    { id: 0, text: "If it hurts, do it more often.", vote: 0 },
    {
      id: 1,
      text: "Adding manpower to a late software project makes it later!",
      vote: 0,
    },
    {
      id: 2,
      text: "The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
      vote: 0,
    },
    {
      id: 3,
      text: "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
      vote: 0,
    },
    { id: 4, text: "Premature optimization is the root of all evil.", vote: 0 },
    {
      id: 5,
      text: "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
      vote: 0,
    },
    {
      id: 6,
      text: "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
      vote: 0,
    },
    { id: 7, text: "The only way to go fast, is to go well.", vote: 0 },
  ]);
  const [isVoted, setIsVoted] = useState(false);
  return (
    <div className="App">
      <h1>Anecdote of the day</h1>
      <div className="display-cont">
        <Display
          anecdotes={anecdotes}
          setAnecdotes={setAnecdotes}
          isVoted={isVoted}
          setIsVoted={setIsVoted}
        />
      </div>
      <div className="highest-votes">
        <h2>Anecdotes with the most votes</h2>
        {isVoted && <HighestVote anecdotes={anecdotes} />}
      </div>
    </div>
  );
}

export default App;
