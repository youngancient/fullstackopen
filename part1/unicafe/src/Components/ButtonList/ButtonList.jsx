import Button from "../Button/Button";
import "./style.css";
import { v4 as uuid } from "uuid";
const ButtonList = ({ feedback, setFeedback, setIsFeedback }) => {
  return (
    <div className="btn-list">
      {feedback.map((state) => (
        <Button
          type={state.type}
          feedback={feedback}
          key={uuid()}
          setFeedback={setFeedback}
          setIsFeedback={setIsFeedback}
        />
      ))}
    </div>
  );
};

export default ButtonList;
