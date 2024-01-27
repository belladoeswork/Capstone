import Confetti from "react-confetti/dist/types/Confetti.js";

export default function EndGameDisplay() {
  return (
    <div>
      <h1>Congratulation</h1>
      <p className="typed-login">You are now a CodeHero!!</p>
      <p>Wishing you the best of luck on your coding journey.</p>
      <p>"Opportunities don't happen. You create them." - Chris Grosser</p>
      <p>
        "Success is not final, failure is not fatal: It is the courage to
        continue that counts." - Winston Churchill
      </p>
      <button>Play Again</button>
      <Confetti />
    </div>
  );
}
