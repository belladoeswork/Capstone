import Link from "next/link.js";

import Confetti from "@/components/ConfettiPage.jsx";

export default function WinGameDisplay() {
  return (
    <div className="congrats-container">
      <h1 className="congrats-header">Congratulation!!</h1>
      <div style={{ width: "500px" }}>
        <h4 className="congrats-subheader">You are now a CodeHero!!</h4>
      </div>
      <p className="congrats-quote">
        "Opportunities don't happen. You create them." - Chris Grosser
      </p>

      <Link href={"/"}>
        <button className="congratsBtn">Home</button>
      </Link>
    </div>
  );
}
