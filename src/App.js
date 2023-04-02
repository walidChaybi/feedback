import { useState } from "react";
import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList";
import FeedbackData from "./data/FeedbackData";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";
import "./index.css";

function App() {
  const [feedbacks, setFeedbacks] = useState(FeedbackData);

  const handleAdd = (newFeedback) => {
    setFeedbacks([...feedbacks, newFeedback]);
  };

  const handleDelete = (id) => {
    const filtered = feedbacks.filter((f) => f.id !== id);
    setFeedbacks(filtered);
  };
  return (
    <>
      <Header />
      <div className="container">
        <FeedbackForm handleAdd={handleAdd} />
        <FeedbackStats feedbacks={feedbacks} />
        <FeedbackList handleDelete={handleDelete} feedbacks={feedbacks} />
      </div>
    </>
  );
}

export default App;
