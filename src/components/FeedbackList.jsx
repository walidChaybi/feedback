import FeedbackItem from "./FeedbackItem";

function FeedbackList({ feedbacks }) {
  if (!feedbacks) return <h2>No feedback</h2>;

  return (
    <div className="feedback-list">
      {feedbacks.map((feedback) => (
        <FeedbackItem key={feedback.id} feedback={feedback} />
      ))}
    </div>
  );
}

export default FeedbackList;
