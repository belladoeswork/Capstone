"use client";
import { useState } from "react";
import questionsData from "@/lib/question";

export default function QuizComponent({ getQuestion, setGetQuestion }) {
  const [score, setScore] = useState(0);
  const [level, setLevel] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [gameOverMessage, setGameOverMessage] = useState("");
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0); // Start with -1, so no question is displayed initially
  const [showQuestion, setShowQuestion] = useState(false); // Control when to show the question

  const question =
    currentQuestionIndex >= 0
      ? questionsData[level][currentQuestionIndex]
      : null;

  const handleAnswer = (isCorrect) => {
    setShowQuestion(false); // Hide the question after answering
    if (isCorrect) {
      setScore(score + 1);
      if ((score + 1) % 5 === 0) {
        // Every 5 correct answers, go up a level
        if (level + 1 < questionsData.length) {
          setLevel(level + 1);
          setCurrentQuestionIndex(-1); // Reset the question index
        } else {
          setGameOver(true);
          setGameOverMessage("Congratulations! You completed all levels!");
        }
      }
    } else {
      setGameOver(true);
      setGameOverMessage("You Lose, Keep Studying!");
    }
  };

  const restartGame = () => {
    setScore(0);
    setLevel(0);
    setCurrentQuestionIndex(-1);
    setShowQuestion(false);
    setGameOver(false);
    setGameOverMessage("");
  };

  const getNextQuestion = () => {
    if (currentQuestionIndex + 1 < questionsData[level].length) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
    setShowQuestion(true); // Show the next question
  };

  return (
    <div>
      {gameOver ? (
        <div>
          <h1>{gameOverMessage}</h1>
          <button onClick={restartGame}>Restart</button>
        </div>
      ) : (
        <div>
          <h2>Score: {score}</h2>
          <h2>Level: {level + 1}</h2>
          {showQuestion && question && (
            <div>
              <h3>{question.question}</h3>
              {question.options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswer(option === question.answer)}
                >
                  {option}
                </button>
              ))}
            </div>
          )}
          <div>
            {" "}
            <h3>You've unlocked a question!</h3>
            <button onClick={getNextQuestion}>Get Question</button>
          </div>
        </div>
      )}
    </div>
  );
}
