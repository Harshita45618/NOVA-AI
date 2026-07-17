type Props = {
  currentQuestion: number;
  totalQuestions: number;
};

export default function ProgressBar({
  currentQuestion,
  totalQuestions,
}: Props) {
  const progress =
    ((currentQuestion + 1) / totalQuestions) * 100;

  return (
    <div className="mb-10">

      <div className="flex items-center justify-between mb-3">

        <span className="text-sm font-medium text-slate-600">
          Quiz Progress
        </span>

        <span className="text-sm font-semibold text-sky-600">
          {Math.round(progress)}%
        </span>

      </div>

      <div className="relative w-full h-3 rounded-full bg-slate-200 overflow-hidden">

        <div
          className="
            h-full
            rounded-full
            bg-gradient-to-r
            from-sky-500
            via-sky-500
            to-blue-500
            transition-all
            duration-500
            ease-out
          "
          style={{
            width: `${progress}%`,
          }}
        />

      </div>

      <div className="flex justify-between mt-2 text-xs text-slate-400">

        <span>Question 1</span>

        <span>{totalQuestions} Questions</span>

      </div>

    </div>
  );
}