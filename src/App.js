import { useState } from "react";
import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList";
import FeedbackData from "./data/FeedbackData";
import "./index.css";

function App() {
  const [feedback, setFeedback] = useState(FeedbackData);

  return (
    <>
      <Header />
      <div className="container">
        <FeedbackList feedbacks={feedback} />
      </div>
    </>
  );
}

export default App;
