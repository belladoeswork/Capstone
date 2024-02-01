"use client";
import { useState } from "react";

export default function () {
  const [restartGame, setRestartGame] = useState(false);

  function handleButtonClick() {
    setRestartGame(true); 
    window.location.reload(true); 
  }

  return (
    <button onClick={handleButtonClick} className="restartBtn">
      Restart Game
    </button>
  );
}
