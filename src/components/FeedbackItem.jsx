import { useState } from "react";
import Card from "./Card";
function FeedbackItem({ feedback }) {
  return (
    <Card reverse={true}>
      <div className="num-display">{feedback.rating}</div>
      <div className="text-display">{feedback.text}</div>
    </Card>
  );
}

export default FeedbackItem;
