
import { useEffect, useState } from "react";
import "./style.css";

const HighestVote = ({anecdotes}) => {
    const [highestVotedAnecdote, setHighestVotedAnecdote] = useState({});
    let highestObj = { id : 0, vote : 0};
    anecdotes.forEach((ele,index)=>{
        if(ele.vote > highestObj.vote){
            highestObj = {id : index, vote : ele.vote }
        }
    });
    useEffect(()=>{
        setHighestVotedAnecdote(anecdotes[highestObj.id]);
    },[highestObj]);
    return ( 
        <div className="highest">
            <p className="anecdote">{highestVotedAnecdote.text}</p>
            <p className="votes">No of votes : {highestVotedAnecdote.vote}</p>
        </div>
     );
}
 
export default HighestVote;