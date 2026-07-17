"use client";

import {
  CheckCircle2,
  Circle,
  Navigation,
} from "lucide-react";

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
    <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-6">

      {/* Header */}

      <div className="flex items-center gap-3 mb-6">

        <div className="w-11 h-11 rounded-xl bg-sky-100 flex items-center justify-center">

          <Navigation
            size={20}
            className="text-sky-600"
          />

        </div>

        <div>

          <h2 className="text-xl font-bold text-slate-900">
            Question Palette
          </h2>

          <p className="text-sm text-slate-500">
            Jump to any question
          </p>

        </div>

      </div>

      {/* Question Buttons */}

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
                transition-all
                duration-300

                ${
                  current
                    ? `
                      bg-gradient-to-r
                      from-sky-500
                      to-blue-500
                      text-white
                      shadow-sm
                    `
                    : answered
                    ? `
                      bg-emerald-100
                      text-emerald-700
                      border
                      border-emerald-200
                      hover:bg-emerald-200
                    `
                    : `
                      bg-slate-100
                      text-slate-700
                      border
                      border-slate-200
                      hover:bg-slate-200
                    `
                }
              `}
            >
              {index + 1}
            </button>
          );

        })}

      </div>

      {/* Legend */}

      <div className="mt-8 space-y-4 text-sm">

        <div className="flex items-center gap-3">

          <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-sky-500 to-blue-500 flex items-center justify-center">

            <Navigation
              size={16}
              className="text-white"
            />

          </div>

          <span className="text-slate-600">
            Current Question
          </span>

        </div>

        <div className="flex items-center gap-3">

          <div className="w-8 h-8 rounded-lg bg-emerald-100 border border-emerald-200 flex items-center justify-center">

            <CheckCircle2
              size={16}
              className="text-emerald-600"
            />

          </div>

          <span className="text-slate-600">
            Answered
          </span>

        </div>

        <div className="flex items-center gap-3">

          <div className="w-8 h-8 rounded-lg bg-slate-100 border border-slate-200 flex items-center justify-center">

            <Circle
              size={16}
              className="text-slate-500"
            />

          </div>

          <span className="text-slate-600">
            Not Answered
          </span>

        </div>

      </div>

    </div>
  );
}