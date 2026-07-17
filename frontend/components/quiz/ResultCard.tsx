"use client";

import {
  Trophy,
  RotateCcw,
  Home,
  Eye,
  Award,
  Target,
} from "lucide-react";

type Props = {
  score: number;
  total: number;
  onRetry: () => void;
  onDashboard: () => void;
  onReview: () => void;
};

export default function ResultCard({
  score,
  total,
  onRetry,
  onDashboard,
  onReview,
}: Props) {
  const percentage = Math.round((score / total) * 100);

  let message = "Keep Practicing!";
  let messageColor = "text-amber-600";

  if (percentage >= 90) {
    message = "Outstanding Performance!";
    messageColor = "text-emerald-600";
  } else if (percentage >= 75) {
    message = "Excellent Work!";
    messageColor = "text-sky-600";
  } else if (percentage >= 60) {
    message = "Good Job!";
    messageColor = "text-blue-600";
  }

  return (
    <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-10">

      <div className="flex flex-col items-center text-center">

        {/* Trophy */}

        <div className="w-24 h-24 rounded-full bg-gradient-to-br from-sky-100 to-blue-200 flex items-center justify-center shadow-sm">

          <Trophy
            className="text-sky-600"
            size={48}
          />

        </div>

        {/* Heading */}

        <h1 className="mt-8 text-4xl font-bold text-slate-900">
          Quiz Completed 🎉
        </h1>

        <p className={`mt-3 text-lg font-semibold ${messageColor}`}>
          {message}
        </p>

        <p className="mt-2 text-slate-500 max-w-md">
          Your AI assessment has been completed successfully.
          Review your performance or retry the quiz to improve your score.
        </p>

        {/* Score Card */}

        <div className="mt-10 w-full max-w-md rounded-3xl border border-slate-200 bg-slate-50 p-8">

          <div className="flex justify-center">

            <div className="w-36 h-36 rounded-full bg-gradient-to-br from-sky-500 to-blue-500 flex flex-col items-center justify-center text-white shadow-md">

              <span className="text-5xl font-bold">
                {percentage}%
              </span>

              <span className="text-sm opacity-90">
                Accuracy
              </span>

            </div>

          </div>

          <div className="grid grid-cols-3 gap-4 mt-8">

            <div className="rounded-2xl bg-white border border-slate-200 p-4">

              <Award
                size={20}
                className="mx-auto text-sky-600"
              />

              <p className="mt-2 text-xs text-slate-500">
                Score
              </p>

              <p className="text-xl font-bold text-slate-900">
                {score}/{total}
              </p>

            </div>

            <div className="rounded-2xl bg-white border border-slate-200 p-4">

              <Target
                size={20}
                className="mx-auto text-emerald-600"
              />

              <p className="mt-2 text-xs text-slate-500">
                Correct
              </p>

              <p className="text-xl font-bold text-emerald-600">
                {score}
              </p>

            </div>

            <div className="rounded-2xl bg-white border border-slate-200 p-4">

              <Target
                size={20}
                className="mx-auto text-amber-500"
              />

              <p className="mt-2 text-xs text-slate-500">
                Incorrect
              </p>

              <p className="text-xl font-bold text-amber-500">
                {total - score}
              </p>

            </div>

          </div>

        </div>

        {/* Buttons */}

        <div className="flex flex-wrap justify-center gap-4 mt-10">

          <button
            onClick={onRetry}
            className="
              inline-flex
              items-center
              gap-2
              px-6
              py-3
              rounded-xl
              bg-gradient-to-r
              from-sky-500
              to-blue-500
              hover:from-sky-600
              hover:to-blue-600
              text-white
              shadow-sm
              transition-all
            "
          >
            <RotateCcw size={18} />
            Retry Quiz
          </button>

          <button
            onClick={onReview}
            className="
              inline-flex
              items-center
              gap-2
              px-6
              py-3
              rounded-xl
              border
              border-sky-200
              bg-sky-50
              text-sky-700
              hover:bg-sky-100
              transition-all
            "
          >
            <Eye size={18} />
            Review Answers
          </button>

          <button
            onClick={onDashboard}
            className="
              inline-flex
              items-center
              gap-2
              px-6
              py-3
              rounded-xl
              border
              border-slate-200
              bg-white
              text-slate-700
              hover:bg-slate-50
              transition-all
            "
          >
            <Home size={18} />
            Dashboard
          </button>

        </div>

      </div>

    </div>
  );
}