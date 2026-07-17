import { Brain, Sparkles } from "lucide-react";

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

      <div className="flex items-center gap-4">

        <div className="w-14 h-14 rounded-2xl bg-sky-100 flex items-center justify-center">

          <Brain
            className="text-sky-600"
            size={26}
          />

        </div>

        <div>

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r from-sky-100 to-blue-200 text-sky-700 text-xs font-semibold mb-2">

            <Sparkles size={14} />

            AI Assessment

          </div>

          <h1 className="text-3xl font-bold text-slate-900">
            AI Quiz
          </h1>

          <p className="text-slate-500 mt-1">
            Test your understanding with AI-generated questions.
          </p>

        </div>

      </div>

      <div className="px-5 py-3 rounded-2xl border border-sky-200 bg-sky-50 shadow-sm">

        <p className="text-xs font-medium uppercase tracking-wide text-sky-600">
          Current Progress
        </p>

        <p className="mt-1 text-lg font-bold text-slate-900">
          {currentQuestion + 1}
          <span className="text-slate-400 font-medium">
            {" "}
            / {totalQuestions}
          </span>
        </p>

      </div>

    </div>
  );
}