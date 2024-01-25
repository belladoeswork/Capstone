"use client";

import { ApiError } from "next/dist/server/api-utils";
import { useState } from "react";
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
}) {
  const [level, setLevel] = useState(0);
  const [score, setScore] = useState(0);
  const [showOptions, setShowOptions] = useState(true);
  const [resultMessage, setResultMessage] = useState("");
  const [inputAnswer, setInputAnswer] = useState("");

  const handleAnswer = (isCorrect, itemKey) => {
    if (isCorrect && question?.type !== "message") {
      setResultMessage("correct!");
      setScore(score + 1);
      if ((score + 1) % 5 === 0) {
        if (score + 1 < questions.length) {
          setLevel(level + 1);
          // if ((level + 1) % 5 === 0) {

          // }
        } else {
          setGameOver(true);
          setGameOverMessage("Congratulations! You completed all levels!");
        }
      }
      setShowPopup(false);
    } else if (question.type === "message") {
      setShowPopup(false);
    } else {
      setResultMessage("wrong");
      console.log("wrong");
      console.log(10 == "10");
      setGameOver(true);
    }

    questions?.map((quest) => {
      if (quest.id === question.id) {
        question.isAnswered = true;
      }
    });
  };

  function highestScore(score) {
    if (score > user.score) {
    }
  }

  return (
    <div>
      <div>
        {showPopup && (
          <div className="popup-container">
            <h2>{question?.message}</h2>
            <h3 className="popup-question">{question?.question}</h3>

            <div
              className="popup-options"
              style={{ display: showOptions ? "flex" : "none" }}
            >
              {question?.options?.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswer(option === question.answer)}
                >
                  {option}
                </button>
              ))}
            </div>
            <div style={{ display: showOptions ? "flex" : "none" }}>
              <form>
                <input
                  type="text"
                  placeholder="Type answer here"
                  value={inputAnswer}
                  onChange={(e) => {
                    setInputAnswer(e.target.value);
                  }}
                />
                <button
                  onClick={() => handleAnswer(inputAnswer === question.answer)}
                >
                  submit
                </button>
              </form>
            </div>
          </div>
        )}
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "end",
          justifyContent: "center",
          backgroundColor: "#F2F5FF",
          flexDirection: "row",
          gap: "100px",
          fontSize: "10px",
        }}
      >
        {resultMessage && <p className="result-message">{resultMessage}</p>}
        <h2>
          Score: <span style={{ color: "#2274a5" }}>{score}</span>
        </h2>
        <h2>
          Level: <span style={{ color: "#2274a5" }}>{level + 1}</span>
        </h2>
      </div>
    </div>
  );
}
