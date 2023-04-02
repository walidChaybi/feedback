import { v4 as uuidv4 } from "uuid";
import FeedbackContext from "../context/FeedbackContext";
import { useContext, useState, useEffect } from "react";
import Card from "./Card";
import Button from "./Button";
import RatingSelect from "./RatingSelect";

function FeedbackForm() {
  const { handleAdd, feedbackEdit, updateFeedback } =
    useContext(FeedbackContext);
  const [text, setText] = useState("");
  const [rating, setRating] = useState(null);
  const [disabled, setDisabled] = useState(true);
  const [message, setMessage] = useState("at least 10 caractere is required");

  useEffect(() => {
    if (feedbackEdit.edit === true) {
      setText(feedbackEdit.item.text);
    }
  }, [feedbackEdit]);

  const handleText = (e) => {
    setText(e.target.value);
    text.length > 10 ? setDisabled(false) : setDisabled(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newFeedback = {
      text,
      rating,
      id: uuidv4(),
    };
    if (feedbackEdit.edit) {
      updateFeedback(feedbackEdit.item.id, newFeedback);
    } else {
      console.log(feedbackEdit.edit);
      handleAdd(newFeedback);
    }

    setText("");
  };

  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <h2>How would you rate us?</h2>
        <RatingSelect
          select={(r) => {
            setRating(r);
          }}
        />
        <div className="input-group">
          <input
            onChange={handleText}
            type="text"
            placeholder="Write a review"
            value={text}
          />
          <Button isDisabled={disabled} type="submit">
            Send
          </Button>
        </div>
        <h3>{disabled && message}</h3>
      </form>
    </Card>
  );
}

export default FeedbackForm;
