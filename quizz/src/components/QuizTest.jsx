export default function QuizTest({
  showQuestion,
  question,
  handleAnswer,
  getNextQuestion,
}) {
  return (
    <div>
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
    </div>
  );
}
