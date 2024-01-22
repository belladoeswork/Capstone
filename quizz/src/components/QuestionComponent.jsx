import React from "react";

export default function QuestionComponent({
  options,
  correctAnswer,
  onAnswer,
}) {
  if (!options) {
    return <p>Loading question...</p>;
  }
  return (
    <div>
      {options.map((option, index) => (
        <button key={index} onClick={() => onAnswer(option === correctAnswer)}>
          {option}
        </button>
      ))}
    </div>
  );
}
