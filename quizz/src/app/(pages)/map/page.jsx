import QuestionAnswer from "@/components/Answer";
import QuestionComponent from "@/components/QuestionComponent";
import QuestionSelection from "@/components/QuestionSelection";
import { prisma } from "@/lib/prisma";

export default async function Map() {
  //   const specificRoomId = "fd8bc1e2-d3c6-48e2-abed-d395248e4a7d";

  //   const questions = await prisma.question.findMany({
  //     where: {
  //       roomId: specificRoomId,
  //     },
  //     include: {
  //       answers: true,
  //     },
  //   });

  return (
    <div className="map-container">
      <QuestionSelection />
      {/* {questions.map((question) => {
        return (
          <div key={question.id}>
            {question.answers.map((answer) => (
              <div key={answer.id}>
                <p>{answer.text}</p>

                <QuestionAnswer
                  hint={question.hint}
                  questionTitle={question.title}
                  answerText={answer.text}
                />
              </div>
            ))}
          </div>
        );
      })} */}
    </div>
  );
}
