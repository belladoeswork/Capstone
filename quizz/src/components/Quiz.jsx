"use client";

import { ApiError } from "next/dist/server/api-utils";
import Link from "next/link";
import { useState } from "react";
import NextLevelTransition from "./NextLevelTransition";
import { IoIosHelpCircleOutline } from "react-icons/io";
import WinGameDisplay from "./WinGameDisplay.jsx";
import GameOver from "./GameOver.jsx";

export default function Quiz({
  question,
  questions,
  currentItem,
  showPopup,
  interactedItems,
  gameOver,
  currentQuestion,
  currentQuestionInde,
  setCurrentQuestion,
  setShowPopup,
  setGameOver,
  level,
  setLevel,
  score,
  setScore,
  onAnsswerQuestion,
}) {
  // const [level, setLevel] = useState(0);
  // const [score, setScore] = useState(0);
  const [showOptions, setShowOptions] = useState(true);
  const [resultMessage, setResultMessage] = useState("");
  const [secretWord, setSecretWord] = useState("");
  const [inputAnswer, setInputAnswer] = useState("");
  const [showHint, setShowHint] = useState(false);
  const [transition, setTransition] = useState(false);
  const [winGame, setWinGame] = useState(false);
  const [looseGame, setLooseGame] = useState(false);

  async function handleAnswer(isCorrect) {
    if (isCorrect && question?.type !== "message") {
      setResultMessage("Correct");
      onAnsswerQuestion();
      setSecretWord(question?.resultMessage.correct);
      setScore(score + 1);
      setShowHint(false);
      if ((score + 1) % 2 === 0) {
        // if (score + 1 < questions.length) {
        if (level + 1 < 4) {
          setTransition(true);
          setResultMessage("");
          setTimeout(() => {
            setLevel(level + 1);
            setTransition(false);
            setResultMessage("");
          }, 6000);
        } else {
          setResultMessage("");
          setWinGame(true);
        }
      }
      setShowPopup(false);
    } else if (question.type === "message") {
      setShowPopup(false);
    } else {
      setResultMessage("");
      setGameOver(true);
      setLooseGame(true);
      setShowPopup(false);
    }

    // questions?.map((quest) => {
    //   if (quest.id === question.id) {
    //     question.isAnswered = true;
    //   }
    // });
  }

  function handleHint() {
    setShowHint(!showHint);
  }

  return (
    <div>
      <div>
        {showPopup && (
          <div className="popup-container">
            <h2 className="popup-message">{question?.message}</h2>
            <h3 className="popup-question">{question?.question}</h3>

            <div
              className="popup-options"
              style={{
                display: question.type !== "input" ? "flex" : "none",
              }}
            >
              {question?.options?.map((option, index) => (
                <button
                  className="popup-option-button"
                  key={index}
                  onClick={() => handleAnswer(option === question.answer)}
                >
                  {option}
                </button>
              ))}
            </div>
            <button
              className="popup-hint-button"
              type="button"
              onClick={() => handleHint()}
            >
              <IoIosHelpCircleOutline />
            </button>
            <div
              style={{
                display: question.type === "input" ? "flex" : "none",
              }}
            >
              <form className="popup-input-container">
                <input
                  type="text"
                  placeholder="Type answer here"
                  value={inputAnswer}
                  onChange={(e) => {
                    setInputAnswer(e.target.value);
                  }}
                />
                <button
                  className="popup-option-button"
                  type="submit"
                  onClick={() => handleAnswer(inputAnswer === question.answer)}
                >
                  submit
                </button>
              </form>
            </div>
            {showHint && <div className="hint">{question?.hint}</div>}
            {secretWord}
          </div>
        )}
      </div>
      <h2 className="result-message">{resultMessage}</h2>
      {/* {resultMessage && <p className="result-message">{resultMessage}</p>} */}
      <div>{transition && <NextLevelTransition />}</div>
      <div>{looseGame && <GameOver />}</div>
      <div>{winGame && <WinGameDisplay />}</div>
    </div>
  );
}
