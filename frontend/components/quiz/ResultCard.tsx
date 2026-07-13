"use client";

import { Trophy, RotateCcw, Home } from "lucide-react";

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
  return (
    <div className="bg-white rounded-3xl shadow-lg border border-stone-200 p-10">

      <div className="flex flex-col items-center">

        <div className="w-24 h-24 rounded-full bg-yellow-100 flex items-center justify-center">

          <Trophy
            className="text-yellow-500"
            size={48}
          />

        </div>

        <h1 className="text-4xl font-bold mt-6">

          Quiz Completed 🎉

        </h1>

        <p className="text-stone-500 mt-3">

          Great work!

        </p>

        <h2 className="text-6xl font-bold text-violet-600 mt-8">

          {score}/{total}

        </h2>

        <p className="text-xl text-stone-500 mt-2">

          {Math.round((score / total) * 100)}% Accuracy

        </p>

        <div className="flex flex-wrap justify-center gap-4 mt-10">

          <button
            onClick={onRetry}
            className="flex items-center gap-2 px-6 py-3 rounded-xl bg-violet-600 text-white hover:bg-violet-700"
          >
            <RotateCcw size={18} />
            Retry Quiz
          </button>

          <button
            onClick={onReview}
            className="px-6 py-3 rounded-xl border border-violet-600 text-violet-600 hover:bg-violet-50"
          >
            Review Answers
          </button>

          <button
            onClick={onDashboard}
            className="flex items-center gap-2 px-6 py-3 rounded-xl border border-stone-300 hover:bg-stone-100"
          >
            <Home size={18} />
            Dashboard
          </button>

        </div>

      </div>

    </div>
  );
}