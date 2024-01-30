"use client";
import { useState } from "react";
import Link from "next/link.js";

export default function() {
  const [restartGame, setRestartGame] = useState(false);

  function handleButtonClick() {
    setRestartGame(true);
  }
  return (
    <Link href={"/"}>
      <button onClick={handleButtonClick} className="restartBtn">
        Restart Game
      </button>
    </Link>
  );
}
