import { useState } from "react";

export default function Answer({ user, room }) {
  const [answer, setAnswer] = useState("");
  const [clue, setClue] = useState("");

  function handleClue() {
    setClue("Test");
  }

  async function handleSubmit(e) {
    e.preventDefault();
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
        >
          <button type="submit">Submit</button>
          <button type="button" onClick={handleClue}>
            Clue
          </button>
        </input>
      </form>
    </div>
  );
}
