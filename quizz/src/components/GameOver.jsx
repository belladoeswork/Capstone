"use client";
import { useState, useEffect } from "react";
import RestartBtnOnGo from "./RestartBtnOnGo.jsx";

export default function GameOver() {
  const [text, setText] = useState("");
  const [showQuote, setShowQuote] = useState(false);

  const quote =
    "“Do not be embarrassed by your failures, learn from them and start again.” — Richard Branson.";

  useEffect(() => {
    setTimeout(() => {
      setText(quote);
      setShowQuote(true);
    }, 3000);
  }, []);
  return (
    <div className="gameOver-container">
      {showQuote ? (
        <div className="quote-container">
          <p className="typed-quote">{text}</p>
          <RestartBtnOnGo />
        </div>
      ) : (
        <p className="gameOver-text">"Game Over"</p>
      )}
    </div>
  );
}
