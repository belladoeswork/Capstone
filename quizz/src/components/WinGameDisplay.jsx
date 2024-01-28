import Link from "next/link.js";

import Confetti from "@/components/ConfettiPage.jsx";

export default function WinGameDisplay() {
  return (
    <div className="congrats-container">
      <h1 className="congrats-header">Congratulation!!</h1>
      <h4 className="congrats-subheader">You are now a CodeHero!!</h4>

      <p className="congrats-quote">
        "Opportunities don't happen. You create them." - Chris Grosser
      </p>

      <Link href={"/"}>
        <button className="congratsBtn">Home</button>
      </Link>
      <Confetti />
    </div>
  );
}
