import React from "react";

const QuestionComponent = ({ question, options, correctAnswer, onAnswer }) => {
  const handleSubmit = (selectedOption) => {
    onAnswer(selectedOption === correctAnswer);
  };

  return (
    <div>
      <h3>{question}</h3>
      {options.map((option, index) => (
        <button key={index} onClick={() => handleSubmit(option)}>
          {option}
        </button>
      ))}
    </div>
  );
};

export default QuestionComponent;
