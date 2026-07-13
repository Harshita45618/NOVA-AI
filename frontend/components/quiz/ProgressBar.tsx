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

      <div className="flex justify-between text-sm text-stone-500 mb-2">

        <span>Progress</span>

        <span>

          {Math.round(progress)}%

        </span>

      </div>

      <div className="w-full h-3 bg-stone-200 rounded-full overflow-hidden">

        <div
          className="h-full bg-gradient-to-r from-violet-600 to-indigo-600 transition-all duration-500"
          style={{
            width: `${progress}%`,
          }}
        />

      </div>

    </div>
  );
}