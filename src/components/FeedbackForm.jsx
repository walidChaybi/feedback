import { useState } from "react";
import Card from "./Card";
import Button from "./Button";
function FeedbackForm() {
  const [text, setText] = useState("");
  const [rating, setRating] = useState(10);
  const [disabled, setDisabled] = useState(true);
  const [message, setMessage] = useState("at least 10 caractere is required");

  const handleText = (e) => {
    setText(e.target.value);
    console.log(text);
    if (text.length > 10) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  };
  return (
    <Card>
      <form>
        <h2>How would you rate us?</h2>
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
