"use client";
import { useState } from "react";
import Link from "next/link.js";

export default function() {
  const [restartGame, setRestartGame] = useState(false);

  function handleButtonClick() {
    setRestartGame(true);
  }
  return (
    <Link onClick={handleButtonClick} href={"/"}>
      <button className="restartBtn">Restart Game</button>
    </Link>
  );
}
