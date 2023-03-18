import { useEffect, useState } from "react";
import { v4 as uuid } from "uuid";
import { roundTo } from "round-to";
import "./style.css";

export const StatisticLine = ({ text, value }) => {
  return (
    <tr>
      <td>{text}</td>
      <td className="right">{value}</td>
    </tr>
  );
};

const Stat = ({ feedback, isFeedback }) => {
  // console.log(feedback[0]["type"]);
  const [total, setTotal] = useState(0);
  const [average, setAverage] = useState(0);
  const [positive, setPositive] = useState(0);
  let all = 0;
  let good = 0;
  feedback.forEach((ele) => {
    all += ele.number;
    if (ele.type === "good") {
      good += ele.number;
    }
  });
  let positivePercent = 0;
  if(all !== 0){
    positivePercent = (good * 100) / all;
  }
  useEffect(() => {
    setTotal(all);
    setAverage(roundTo(all / 3, 4));
    setPositive(roundTo(positivePercent, 4));
  }, [all]);
  return (
    <div className="stat">
      <div className="first">
        {isFeedback && (
          <table>
            <tbody>
              {feedback.map((state) => (
                <StatisticLine
                  text={state.type}
                  value={state.number}
                  key={uuid()}
                />
              ))}
              <StatisticLine text="All" value={total} />
              <StatisticLine text="Average" value={average} />
              <StatisticLine text="Positive" value={positive} />
            </tbody>
          </table>
        )}
        {!isFeedback && <p>No Feedback given</p>}
      </div>
    </div>
  );
};

export default Stat;
