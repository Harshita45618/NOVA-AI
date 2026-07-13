"use client";

type Props = {
  totalQuestions: number;
  currentQuestion: number;
  selectedAnswers: string[];
  onSelectQuestion: (index: number) => void;
};

export default function QuestionPalette({
  totalQuestions,
  currentQuestion,
  selectedAnswers,
  onSelectQuestion,
}: Props) {
  return (
    <div className="bg-white rounded-3xl border border-stone-200 shadow-lg p-6">

      <h2 className="text-xl font-bold mb-6">
        Question Palette
      </h2>

      <div className="grid grid-cols-5 gap-3">

        {Array.from({ length: totalQuestions }).map((_, index) => {

          const answered = !!selectedAnswers[index];

          const current = currentQuestion === index;

          return (
            <button
              key={index}
              onClick={() => onSelectQuestion(index)}
              className={`
                h-12
                rounded-xl
                font-semibold
                transition

                ${
                  current
                    ? "bg-violet-600 text-white"
                    : answered
                    ? "bg-green-500 text-white"
                    : "bg-stone-200 hover:bg-stone-300"
                }
              `}
            >
              {index + 1}
            </button>
          );

        })}

      </div>

      <div className="mt-8 space-y-3 text-sm">

        <div className="flex items-center gap-3">

          <div className="w-5 h-5 rounded bg-violet-600" />

          Current Question

        </div>

        <div className="flex items-center gap-3">

          <div className="w-5 h-5 rounded bg-green-500" />

          Answered

        </div>

        <div className="flex items-center gap-3">

          <div className="w-5 h-5 rounded bg-stone-300" />

          Not Answered

        </div>

      </div>

    </div>
  );
}