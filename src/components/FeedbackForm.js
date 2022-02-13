import React, { useState } from "react";
import Button from "./shared/Button";
import Card from "./shared/Card";

const FeedbackForm = () => {
  const [text, setText] = useState("");

  const handleTextChange = (e) => {
    console.log(e.target.value);
    setText(e.target.value);
  };
  return (
    <Card>
      <from>
        <h2>How would you rate your service with us?</h2>
        <div className="input-group">
          <input
            onChange={handleTextChange}
            type="text"
            placeholder="Write a review."
            value={text}
          />
          <Button type="submit"> Send</Button>
        </div>
      </from>
    </Card>
  );
};

export default FeedbackForm;
