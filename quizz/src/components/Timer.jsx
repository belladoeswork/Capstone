import { useRouter } from "next/navigation";
import { useState, useEffect, useRef } from "react";

export default function Timer() {
  const STARTING_TIME = 30;
  const router = useRouter();

  const [timeRemaining, setTimeRemaining] = useState(STARTING_TIME);
  const [isTimeRunning, setIsTimeRunning] = useState(false);
  const textBoxRef = useRef(null);

  useEffect(() => {
    if (isTimeRunning && timeRemaining > 0) {
      setTimeout(() => {
        setTimeRemaining((time) => time - 1);
      }, 1000);
    } else if (timeRemaining === 0) {
      endGame();
    }
  }, [timeRemaining, isTimeRunning]);

  function startGame() {
    setIsTimeRunning(true);
    setTimeRemaining(STARTING_TIME);
  }

  function endGame() {
    setIsTimeRunning(false);
    router.refresh();
  }

  return [timeRemaining, startGame, isTimeRunning];
}
