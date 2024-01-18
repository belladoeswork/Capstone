"use client";
import React, { useState } from "react";
import ScoreBoard from "./Score";
import QuestionComponent from "./Question";
import questionsData from "@/lib/question";

const QuestionSelection = () => {
  const [currentLevel, setCurrentLevel] = useState(0);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [message, setMessage] = useState("");

  const handleAnswer = (isCorrect) => {
    if (isCorrect) {
      setMessage("");
      const nextQuestionIndex = currentQuestionIndex + 1;
      if (nextQuestionIndex < 5) {
        setCurrentQuestionIndex(nextQuestionIndex);
        setCorrectAnswers(correctAnswers + 1);
      } else if (currentLevel < 3) {
        setCurrentLevel(currentLevel + 1);
        setCurrentQuestionIndex(0);
        // setCorrectAnswers(0);
      } else {
        setMessage("Congratulations! You completed all levels!");
      }
    } else {
      setMessage("Incorrect answer. The game is restarting.");
      setCurrentLevel(0);
      setCurrentQuestionIndex(0);
      setCorrectAnswers(0);
    }
  };

  const currentQuestion = questionsData[currentLevel][currentQuestionIndex];

  return (
    <div>
      <h2>Level: {currentLevel + 1}</h2>
      <ScoreBoard correctAnswers={correctAnswers} />
      <QuestionComponent
        question={currentQuestion.question}
        options={currentQuestion.options}
        correctAnswer={currentQuestion.answer}
        onAnswer={handleAnswer}
      />
      {message && <p>{message}</p>}
    </div>
  );
};

export default QuestionSelection;
