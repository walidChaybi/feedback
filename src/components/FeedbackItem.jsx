import { FaTimes, FaEdit } from "react-icons/fa";
import Card from "./Card";
import FeedbackContext from "../context/FeedbackContext";
import { useContext } from "react";
function FeedbackItem({ feedback }) {
  const { handleDelete, editFeedback, feedbackEdit, setFeedbacks } =
    useContext(FeedbackContext);
  return (
    <Card>
      <div className="num-display">{feedback.rating}</div>
      <div className="text-display">{feedback.text}</div>
      <button onClick={() => handleDelete(feedback.id)} className="close">
        <FaTimes color="pink" />
      </button>
      <button onClick={() => editFeedback(feedback)} className="edit">
        <FaEdit color="black" />
      </button>
    </Card>
  );
}

export default FeedbackItem;
