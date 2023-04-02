import { FaTimes } from "react-icons/fa";
import Card from "./Card";
function FeedbackItem({ feedback, handleDelete }) {
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
