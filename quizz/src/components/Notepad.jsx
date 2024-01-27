import { useState } from "react";

export default function Notepad() {
  const [text, setText] = useState("");

  return (
    <div id="notepadContainer">
      <div className="page">
        <div className="box">
          <div className="boxContent">
            <p id="notepadText">
              <form>
                <input
                  id="notepadText"
                  type="text"
                  placeholder="Notes"
                  value={text}
                  onChange={(e) => {
                    setText(e.target.value);
                  }}
                />
                <button
                //   onClick={() => handleAnswer(text === question.answer)}
                >
                  Save
                </button>
              </form>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
