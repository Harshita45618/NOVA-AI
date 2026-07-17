"use client";

import {
  ArrowLeft,
  CheckCircle2,
  XCircle,
  BookOpen,
  CircleHelp,
} from "lucide-react";

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
    <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-8">

      {/* Header */}

      <div className="flex items-center justify-between mb-10">

        <div className="flex items-center gap-4">

          <div className="w-14 h-14 rounded-2xl bg-sky-100 flex items-center justify-center">

            <BookOpen
              size={26}
              className="text-sky-600"
            />

          </div>

          <div>

            <h1 className="text-3xl font-bold text-slate-900">
              Review Answers
            </h1>

            <p className="text-slate-500 mt-1">
              Check your responses and understand every solution.
            </p>

          </div>

        </div>

        <button
          onClick={onBack}
          className="
            inline-flex
            items-center
            gap-2
            px-5
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
          <ArrowLeft size={18} />
          Back
        </button>

      </div>

      {/* Questions */}

      <div className="space-y-8">

        {questions.map((q, index) => {
          const userAnswer = selectedAnswers[index];
          const correct = userAnswer === q.answer;

          return (
            <div
              key={index}
              className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm"
            >

              {/* Question */}

              <div className="flex items-start gap-4 mb-6">

                <div className="w-11 h-11 rounded-xl bg-sky-100 flex items-center justify-center flex-shrink-0">

                  <CircleHelp
                    size={20}
                    className="text-sky-600"
                  />

                </div>

                <div>

                  <p className="text-sm font-semibold text-sky-600 uppercase tracking-wide">
                    Question {index + 1}
                  </p>

                  <h2 className="text-xl font-bold text-slate-900 mt-1 leading-8">
                    {q.question}
                  </h2>

                </div>

              </div>

              {/* Your Answer */}

              <div
                className={`
                  rounded-2xl
                  border
                  p-5
                  mb-4

                  ${
                    correct
                      ? "border-emerald-200 bg-emerald-50"
                      : "border-red-200 bg-red-50"
                  }
                `}
              >

                <div className="flex items-center gap-3 mb-2">

                  {correct ? (
                    <CheckCircle2
                      className="text-emerald-600"
                      size={22}
                    />
                  ) : (
                    <XCircle
                      className="text-red-500"
                      size={22}
                    />
                  )}

                  <h3 className="font-semibold text-slate-900">
                    Your Answer
                  </h3>

                </div>

                <p
                  className={
                    correct
                      ? "text-emerald-700"
                      : "text-red-700"
                  }
                >
                  {userAnswer || "Not Answered"}
                </p>

              </div>

              {/* Correct Answer */}

              {!correct && (
                <div className="rounded-2xl border border-sky-200 bg-sky-50 p-5 mb-4">

                  <h3 className="font-semibold text-slate-900 mb-2">
                    Correct Answer
                  </h3>

                  <p className="text-sky-700 font-medium">
                    {q.answer}
                  </p>

                </div>
              )}

              {/* Explanation */}

              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">

                <h3 className="font-semibold text-slate-900 mb-3">
                  Explanation
                </h3>

                <p className="text-slate-600 leading-7">
                  {q.explanation}
                </p>

              </div>

            </div>
          );
        })}

      </div>

    </div>
  );
}