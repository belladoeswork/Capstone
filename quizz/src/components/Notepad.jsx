"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { MdClose } from "react-icons/md";

export default function TextEditor({ user, note }) {
  const [hideSave, setHideSave] = useState(note?.text ? false : true);
  const [text, setText] = useState("");
  const [error, setError] = useState("");

  const router = useRouter();

  const handleChange = (event) => {
    setText(event.target.value);
  };

  async function handleSave(event) {
    setHideSave(false);
    setText("");
    event.preventDefault();
    const response = await fetch("/api/notes", {
      method: "POST",
      body: JSON.stringify({
        userId: user.id,
        text: text,
      }),
    });
    console.log(response);
    const data = await response.json();
    console.log(data);

    if (data.error) {
      return setError(data.error);
    }
    setError("");
    router.refresh();
  }

  async function handleEditSubmit(e) {
    setHideSave(false);
    setText("");
    e.preventDefault();
    const response = await fetch(`/api/notes/${note.id}`, {
      method: "PUT",
      body: JSON.stringify({
        text,
      }),
    });

    const data = await response.json();
    if (data.error) {
      return setError(data.error);
    }

    router.refresh();
  }

  async function handleDelete() {
    const response = await fetch(`/api/notes/${note.id}`, {
      method: "DELETE",
      cache: "no-store",
    });

    router.refresh();
    setHideSave(true);
  }

  return (
    <div className="text-editor">
      <form onSubmit={handleSave}>
        <input
          className="text-editor-textarea"
          value={text}
          onChange={handleChange}
          placeholder="Start typing..."
        />

        <div className="text-editor-button-container">
          {hideSave && (
            <button type="submit" className="text-editor-button">
              Save
            </button>
          )}
          {!hideSave && (
            <button className="text-editor-button" onClick={handleEditSubmit}>
              Edit
            </button>
          )}
          <button className="text-editor-button" onClick={handleDelete}>
            Delete
          </button>
        </div>
      </form>

      <div
        style={{
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center",
        }}
      >
        {note?.text}
      </div>
    </div>
  );
}
