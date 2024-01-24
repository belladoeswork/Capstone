// "use client";

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
  //   const [interactedItems, setInteractedItems] = useState({});
  //   const [gameOver, setGameOver] = useState(false);
  const [level, setLevel] = useState(0);
  const [score, setScore] = useState(0);
  //   const [showQuestion, setShowQuestion] = useState(false);
  //   const [currentQuestion, setCurrentQuestion] = useState(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  const handleAnswer = (isCorrect, itemKey) => {
    if (isCorrect) {
      setScore(score + 1);
      if ((score + 1) % 5 === 0) {
        if (score + 1 < questions.length) {
          setLevel(level + 1);
        } else {
          setGameOver(true);
          setGameOverMessage("Congratulations! You completed all levels!");
        }
      }
      setShowPopup(false);
    } else if (question.type === "message") {
      setShowPopup(false);
    } else {
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
      {showPopup && (
        <div>
          <h3>{question?.question}</h3>

          {question?.options?.map((option, index) => (
            <button
              key={index}
              onClick={() => handleAnswer(option === question.answer)}
            >
              {option}
            </button>
          ))}
        </div>
      )}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          backgroundColor: "white",
          padding: "20px",
          borderRadius: "10px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          zIndex: 100,
        }}
      ></div>
      <div
        style={{
          display: "flex",
          backgroundColor: "#F2F5FF",
          flexDirection: "row",
          paddingLeft: "200px",
          gap: "100px",
          fontSize: "50px",
        }}
      >
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
