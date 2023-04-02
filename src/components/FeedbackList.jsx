import FeedbackItem from "./FeedbackItem";
import { motion, AnimatePresence, animate } from "framer-motion";
function FeedbackList({ feedbacks, handleDelete }) {
  if (!feedbacks) return <h2>No feedback</h2>;
  return (
    <div className="feedback-list">
      <AnimatePresence>
        {feedbacks.map((feedback) => (
          <motion.div
            key={feedback.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <FeedbackItem
              handleDelete={handleDelete}
              key={feedback.id}
              feedback={feedback}
            />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}

export default FeedbackList;
