// "use client";
// import { useState } from "react";
// import QuestionComponent from "./QuestionComponent";

// const QuestionSelection = ({ questions, onAnswer }) => {
//   const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
//   const question = questions[currentQuestionIndex];

//   const handleNextQuestion = () => {
//     if (currentQuestionIndex + 1 < questions.length) {
//       setCurrentQuestionIndex(currentQuestionIndex + 1);
//     }
//   };

//   return (
//     <div>
//       {question && (
//         <>
//           <QuestionComponent
//             question={question.question}
//             options={question.options}
//             correctAnswer={question.answer}
//             onAnswer={(isCorrect) => {
//               onAnswer(isCorrect);
//               if (isCorrect) {
//                 handleNextQuestion();
//               }
//             }}
//           />
//           <button onClick={handleNextQuestion}>Get Question</button>
//         </>
//       )}
//     </div>
//   );
// };

// export default QuestionSelection;
