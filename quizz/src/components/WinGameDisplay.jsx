import Link from "next/link.js";

import Confetti from "@/components/ConfettiPage.jsx";
import { useState } from "react";

export default function WinGameDisplay() {
  const [restartGame, setRestartGame] = useState(false);

  function handleButtonClick() {
    setRestartGame(true); 
    window.location.reload(true);
  }

  return (
    <div className="congrats-container">
      <h1 className="congrats-header">Congratulation!!</h1>
      <div style={{ width: "500px" }}>
        <h4 className="congrats-subheader">You are now a CodeHero!!</h4>
      </div>
      <p className="congrats-quote">
        "Opportunities don't happen. You create them." - Chris Grosser
      </p>

      {/* <Link href={"/"}> */}
        <button className="congratsBtn" onClick={handleButtonClick} >Replay</button>
      {/* </Link> */}
    </div>
  );
}
