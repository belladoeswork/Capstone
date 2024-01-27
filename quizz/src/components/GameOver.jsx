"use client";
import { useState, useEffect } from "react";
import RestartBtnOnGo from "./RestartBtnOnGo.jsx";

export default function GameOver() {
  const [text, setText] = useState("");

  const quote =
    "“Do not be embarrassed by your failures, learn from them and start again.” — Richard Branson.";

  useEffect(() => {
    setTimeout(() => {
      setText(quote);
    }, 3000);
  }, []);
  return (
    <div className="gameOver-container">
      {text ? (
        <div className="quote-container">
          <p className="typed-quote">{text}</p>
          <RestartBtnOnGo />
        </div>
      ) : (
        <p class="gameOver-text">"Game Over"</p>
      )}
    </div>
  );
}
