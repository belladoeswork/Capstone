"use client";
import { useState } from "react";

export default function QuestionAnswer({
  user,
  questionTitle,
  answerText,
  hint,
}) {
  const [answer, setAnswer] = useState("");
  const [hideHint, setHideHint] = useState(true);
  const [clue, setClue] = useState("");

  function handleClue() {
    setClue(hint);
  }
  // if the answers 5 qs they unlock the next level

  async function handleSubmit(e) {
    e.preventDefault();
    if (condition) {
    }
  }

  return (
    <div>
      <button></button>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter you're answer here"
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
        />
        <button type="submit">Submit</button>
        <button type="button" onClick={handleClue}>
          Hint
        </button>
        <div style={{ display: !hideHint ? "flex" : "none" }}>
          <p>{clue}</p>
        </div>
      </form>
    </div>
  );
}
