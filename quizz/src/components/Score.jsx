import React from "react";

const ScoreBoard = ({ correctAnswers }) => {
  return (
    <div>
      <h3>Score: {correctAnswers}</h3>
    </div>
  );
};

export default ScoreBoard;
