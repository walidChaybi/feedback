import { createContext, useState } from "react";
import FeedbackData from "../data/FeedbackData";
const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [feedbacks, setFeedbacks] = useState(FeedbackData);
  const [feedbackEdit, setFeedbackEdit] = useState({
    item: {},
    edit: false,
  });

  const handleDelete = (id) => {
    const filtered = feedbacks.filter((f) => f.id !== id);
    setFeedbacks(filtered);
  };

  const handleAdd = (newFeedback) => {
    setFeedbacks([...feedbacks, newFeedback]);
  };

  // to update the feedback
  const editFeedback = (item) => {
    setFeedbackEdit({
      item,
      edit: true,
    });
  };

  const updateFeedback = (id, updatedItem) => {
    setFeedbacks(
      feedbacks.map((feedback) =>
        feedback.id === id ? { ...feedback, ...updatedItem } : feedback
      )
    );
  };

  return (
    <FeedbackContext.Provider
      value={{
        feedbacks,
        handleDelete,
        handleAdd,
        feedbackEdit,
        editFeedback,
        updateFeedback,
        setFeedbackEdit,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;
