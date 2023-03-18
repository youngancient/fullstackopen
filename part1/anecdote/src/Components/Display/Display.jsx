import "./style.css";
import { useEffect, useState } from "react";

const Display = ({ anecdotes, setAnecdotes, isVoted, setIsVoted }) => {
  const [selectedAnecdote, setSelectedAnecdote] = useState({});
  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  // for updating the selectedAnecdote by continously calling the useEffect
  const [v, setV] = useState(0);

  // selects a random number which is used to display an anecdote from the array of object anecdotes
  let random = getRandomInt(0, 7);
  useEffect(() => {
    if (!isVoted) {
      // if noone voted return the selected obj like that
      setSelectedAnecdote(anecdotes[random]);
    } else {
      // if selected, we update the vote of the selected anecdote which triggers a rerender
      setSelectedAnecdote({
        ...selectedAnecdote,
        vote: selectedAnecdote.vote + 1,
      });
    }
  }, [v]);

  const handleNext = () => {
    let random = getRandomInt(0, 7);
    if (random === selectedAnecdote.id) {
      random = getRandomInt(0, 7);
    }
    setSelectedAnecdote(anecdotes[random]);
  };

  const handleVote = () => {
    setV(v + 1);
    setIsVoted(true);
    //  updating the anecdotes when clicked
    const newAnecdotes = anecdotes.map((ele) => {
      if (ele.id == selectedAnecdote.id) {
        return {
          ...ele,
          vote: ele.vote + 1,
        };
      } else {
        return ele;
      }
    });
    setAnecdotes(newAnecdotes);
  };
  return (
    <div className="display">
      <p className="anecdote">{selectedAnecdote.text}</p>
      <p className="vote">No of votes: {selectedAnecdote.vote}</p>
      <div className="btn">
        <button type="submit" onClick={handleVote}>
          Vote
        </button>
        <button type="submit" onClick={handleNext}>
          Next Anecdote
        </button>
      </div>
    </div>
  );
};

export default Display;
