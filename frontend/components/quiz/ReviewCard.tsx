type Question = {
  question: string;
  answer: string;
  explanation: string;
};

type Props = {
  questions: Question[];
  selectedAnswers: string[];
  onBack: () => void;
};

export default function ReviewCard({
  questions,
  selectedAnswers,
  onBack,
}: Props) {
  return (
    <div className="bg-white rounded-3xl shadow-lg border border-stone-200 p-8">

      <h1 className="text-3xl font-bold mb-8">

        📖 Review Answers

      </h1>

      <div className="space-y-8">

        {questions.map((q, index) => {

          const userAnswer = selectedAnswers[index];

          const correct =
            userAnswer === q.answer;

          return (
            <div
              key={index}
              className="border rounded-2xl p-6"
            >

              <h2 className="text-xl font-bold mb-4">

                {index + 1}. {q.question}

              </h2>

              <p className="mb-2">

                <strong>Your Answer:</strong>{" "}

                <span
                  className={
                    correct
                      ? "text-green-600"
                      : "text-red-600"
                  }
                >
                  {userAnswer || "Not Answered"}
                </span>

              </p>

              <p className="mb-2">

                <strong>Correct Answer:</strong>{" "}

                <span className="text-green-600">

                  {q.answer}

                </span>

              </p>

              <div className="mt-4 bg-violet-50 rounded-xl p-4">

                <strong>Explanation</strong>

                <p className="mt-2">

                  {q.explanation}

                </p>

              </div>

            </div>
          );

        })}

      </div>

      <button
        onClick={onBack}
        className="mt-8 px-6 py-3 rounded-xl bg-violet-600 text-white"
      >
        Back
      </button>

    </div>
  );
}