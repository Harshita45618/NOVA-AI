"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import {
  Brain,
  Sparkles,
  ArrowLeft,
  LoaderCircle,
} from "lucide-react";

import Quiz from "@/components/quiz/Quiz";
import DashboardLayout from "@/components/layout/DashboardLayout";

type Question = {
  question: string;
  options: string[];
  answer: string;
  explanation: string;
};

export default function QuizPage() {
  const router = useRouter();

  const [questions, setQuestions] = useState<Question[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const storedQuiz = sessionStorage.getItem("quiz");

    if (storedQuiz) {
      setQuestions(JSON.parse(storedQuiz));
    }

    setLoading(false);
  }, []);

  if (loading) {
    return (
      <main className="min-h-screen bg-slate-50 flex items-center justify-center">
        <div className="bg-white border border-slate-200 rounded-3xl shadow-sm p-10 flex flex-col items-center">

          <div className="w-20 h-20 rounded-full bg-sky-100 flex items-center justify-center">

            <LoaderCircle
              size={40}
              className="text-sky-600 animate-spin"
            />

          </div>

          <h1 className="mt-8 text-2xl font-bold text-slate-900">
            Loading Quiz...
          </h1>

          <p className="mt-2 text-slate-500">
            Preparing your AI-generated questions.
          </p>

        </div>
      </main>
    );
  }

  if (questions.length === 0) {
    return (
      <main className="min-h-screen bg-slate-50 flex items-center justify-center px-6">

        <div className="bg-white border border-slate-200 rounded-3xl shadow-sm p-10 max-w-lg w-full text-center">

          <div className="mx-auto w-20 h-20 rounded-full bg-sky-100 flex items-center justify-center">

            <Brain
              size={36}
              className="text-sky-600"
            />

          </div>

          <h1 className="mt-8 text-3xl font-bold text-slate-900">
            No Quiz Found
          </h1>

          <p className="mt-4 text-slate-500 leading-7">
            Generate a quiz from the AI Notes module first.
          </p>

          <button
            onClick={() => router.push("/dashboard/ai-notes")}
            className="
              mt-8
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
              font-medium
              shadow-sm
              transition-all
            "
          >
            <ArrowLeft size={18} />
            Back to AI Notes
          </button>

        </div>

      </main>
    );
  }

  return (
    <DashboardLayout>

      <div className="max-w-7xl mx-auto">

        {/* Header */}

        <div className="mb-8">

          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-sky-100 to-blue-200 text-sky-700 text-sm font-semibold mb-4">

            <Sparkles size={16} />

            AI Powered Assessment

          </div>

          <div className="flex items-center gap-4">

            <div className="w-14 h-14 rounded-2xl bg-sky-100 flex items-center justify-center">

              <Brain
                className="text-sky-600"
                size={26}
              />

            </div>

            <div>

              <h1 className="text-4xl font-bold text-slate-900">
                AI Quiz
              </h1>

              <p className="mt-2 text-slate-600">
                Test your understanding with AI-generated questions.
              </p>

            </div>

          </div>

        </div>

        <Quiz questions={questions} />

      </div>

    </DashboardLayout>
  );
}