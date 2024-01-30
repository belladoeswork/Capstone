"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function TextEditor({ user }) {
  const [text, setText] = useState("");
  const [error, setError] = useState("");

  const router = useRouter();

  const handleChange = (event) => {
    setText(event.target.value);
  };

  async function handleSave(event) {
    event.preventDefault();
    const response = await fetch("/api/note", {
      method: "POST",
      body: JSON.stringify({
        userId: user.id,
        text: text,
      }),
    });

    const data = await response.json();

    if (data.error) {
      return setError(data.error);
    }
    setError("");
    router.refresh();
  }

  const handleClear = () => {
    setText("");
  };

  return (
    <div className="text-editor">
      <form onSubmit={handleSave}>
        <textarea
          id="text-editor-textarea"
          value={text}
          onChange={handleChange}
          placeholder="Start typing..."
          rows="10"
          cols="50"
        />
        <div>
          <button type="button" id="text-editor-button" onClick={handleClear}>
            Clear
          </button>
          <button type="submit" id="text-editor-button">
            Save
          </button>
        </div>
      </form>
    </div>
  );
}
