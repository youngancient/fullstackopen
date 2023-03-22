
import "./style.css";

const Notification = ({ message }) => {
  return <>{message && <div className={`${message ? message.type : ''} msg`}>
    <p>{message.text}</p>
    </div>}</>;
};

export default Notification;
