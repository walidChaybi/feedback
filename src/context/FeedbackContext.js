import { createContext, useState } from "react";
import FeedbackData from "../data/FeedbackData";
const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [feedbacks, setFeedbacks] = useState(FeedbackData);

  const handleDelete = (id) => {
    const filtered = feedbacks.filter((f) => f.id !== id);
    setFeedbacks(filtered);
  };

  const handleAdd = (newFeedback) => {
    setFeedbacks([...feedbacks, newFeedback]);
  };

  return (
    <FeedbackContext.Provider value={{ feedbacks, handleDelete, handleAdd }}>
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;
