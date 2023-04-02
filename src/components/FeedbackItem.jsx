import { FaTimes } from "react-icons/fa";
import Card from "./Card";
import FeedbackContext from "../context/FeedbackContext";
import { useContext } from "react";
function FeedbackItem({ feedback }) {
  const { handleDelete } = useContext(FeedbackContext);
  return (
    <Card>
      <div className="num-display">{feedback.rating}</div>
      <div className="text-display">{feedback.text}</div>
      <button onClick={() => handleDelete(feedback.id)} className="close">
        <FaTimes color="pink" />
      </button>
    </Card>
  );
}

export default FeedbackItem;
