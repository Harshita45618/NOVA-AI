"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
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
      <main className="min-h-screen flex items-center justify-center bg-[#F5F7FA]">
        <h1 className="text-2xl font-bold text-stone-800">
          Loading Quiz...
        </h1>
      </main>
    );
  }

  if (questions.length === 0) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-[#F5F7FA]">

        <div className="bg-white p-10 rounded-3xl shadow-lg text-center">

          <h1 className="text-3xl font-bold text-stone-900 mb-4">
            No Quiz Found
          </h1>

          <p className="text-stone-600 mb-8">
            Please generate a quiz from AI Notes first.
          </p>

          <button
            onClick={() => router.push("/dashboard/ai-notes")}
            className="px-6 py-3 rounded-xl bg-violet-600 text-white hover:bg-violet-700 transition"
          >
            Back to AI Notes
          </button>

        </div>

      </main>
    );
  }

  return (
  <DashboardLayout>

    <div className="max-w-7xl mx-auto">

      <div className="mb-8">

        <h1 className="text-4xl font-bold text-stone-900">
          🧠 AI Quiz
        </h1>

        <p className="text-stone-600 mt-2">
          Test your understanding with AI-generated questions.
        </p>

      </div>

      <Quiz questions={questions} />

    </div>

  </DashboardLayout>
);
}