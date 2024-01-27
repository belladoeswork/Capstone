"use client";
import { useState } from "react";

const TextEditor = () => {
  const [text, setText] = useState("");

  const handleChange = (event) => {
    setText(event.target.value);
  };

  const handleClear = () => {
    setText("");
  };

  return (
    <div className="text-editor">
      <textarea
        id="text-editor-textarea"
        value={text}
        onChange={handleChange}
        placeholder="Start typing..."
        rows="10"
        cols="50"
      />
      <div>
        <button id="text-editor-button" onClick={handleClear}>
          Clear
        </button>
      </div>
    </div>
  );
};

export default TextEditor;
