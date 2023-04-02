import { useContext } from "react";
import FeedbackContext from "../context/FeedbackContext";

function FeedbackStats() {
  const { feedbacks } = useContext(FeedbackContext);
  //claculate the average Rating
  let average = (
    feedbacks.reduce((acc, cur) => {
      return acc + cur.rating;
    }, 0) / feedbacks.length
  ).toFixed(1);

  return (
    <>
      <div className="feedback-stats">
        <h4>{feedbacks.length} Reviews</h4>
        <h4>Average : {isNaN(average) ? "0" : average}</h4>
      </div>
    </>
  );
}

export default FeedbackStats;
