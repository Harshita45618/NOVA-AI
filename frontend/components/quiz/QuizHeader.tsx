type Props = {
  currentQuestion: number;
  totalQuestions: number;
};

export default function QuizHeader({
  currentQuestion,
  totalQuestions,
}: Props) {
  return (
    <div className="flex items-center justify-between mb-8">

      <div>

        <h1 className="text-3xl font-bold text-stone-900">
          🧠 AI Quiz
        </h1>

        <p className="text-stone-500 mt-2">
          Test your understanding with AI-generated questions.
        </p>

      </div>

      <div className="bg-violet-100 text-violet-700 px-5 py-3 rounded-2xl font-semibold">

        Question {currentQuestion + 1} / {totalQuestions}

      </div>

    </div>
  );
}