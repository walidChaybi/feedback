import { useState } from "react";
import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList";
import FeedbackData from "./data/FeedbackData";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";
import "./index.css";

function App() {
  const [feedbacks, setFeedback] = useState(FeedbackData);
  const handleDelete = (id) => {
    const filtered = feedbacks.filter((f) => f.id !== id);
    setFeedback(filtered);
  };
  return (
    <>
      <Header />
      <div className="container">
        <FeedbackForm />
        <FeedbackStats feedbacks={feedbacks} />
        <FeedbackList handleDelete={handleDelete} feedbacks={feedbacks} />
      </div>
    </>
  );
}

export default App;
