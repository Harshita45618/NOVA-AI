"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  ChevronLeft,
  ChevronRight,
  Trophy,
  CircleHelp,
} from "lucide-react";

import QuizHeader from "./QuizHeader";
import ProgressBar from "./ProgressBar";
import QuestionCard from "./QuestionCard";
import OptionCard from "./OptionCard";
import ResultCard from "./ResultCard";
import ReviewCard from "./ReviewCard";
import QuestionPalette from "./QuestionPallete";

type Question = {
  question: string;
  options: string[];
  answer: string;
  explanation: string;
};

type QuizProps = {
  questions: Question[];
};

export default function Quiz({ questions }: QuizProps) {
  const router = useRouter();

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<string[]>([]);
  const [showResult, setShowResult] = useState(false);
  const [showReview, setShowReview] = useState(false);

  const question = questions[currentQuestion];

  function selectAnswer(option: string) {
    const updated = [...selectedAnswers];
    updated[currentQuestion] = option;
    setSelectedAnswers(updated);
  }

  function nextQuestion() {
    if (currentQuestion === questions.length - 1) {
      setShowResult(true);
      return;
    }

    setCurrentQuestion((prev) => prev + 1);
  }

  function previousQuestion() {
    if (currentQuestion > 0) {
      setCurrentQuestion((prev) => prev - 1);
    }
  }

  function restartQuiz() {
    setCurrentQuestion(0);
    setSelectedAnswers([]);
    setShowResult(false);
    setShowReview(false);
  }

  const score = selectedAnswers.filter(
    (answer, index) => answer === questions[index].answer
  ).length;

  if (showReview) {
    return (
      <ReviewCard
        questions={questions}
        selectedAnswers={selectedAnswers}
        onBack={() => setShowReview(false)}
      />
    );
  }

  if (showResult) {
    return (
      <ResultCard
        score={score}
        total={questions.length}
        onRetry={restartQuiz}
        onDashboard={() => router.push("/dashboard")}
        onReview={() => setShowReview(true)}
      />
    );
  }

  const answeredCount = selectedAnswers.filter(Boolean).length;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

      {/* LEFT */}

      <div className="lg:col-span-2">

        <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-8">

          <QuizHeader
            currentQuestion={currentQuestion}
            totalQuestions={questions.length}
          />

          <ProgressBar
            currentQuestion={currentQuestion}
            totalQuestions={questions.length}
          />

          <QuestionCard
            question={question.question}
          />

          <div className="space-y-4 mt-8">

            {question.options.map((option) => (

              <OptionCard
                key={option}
                option={option}
                selected={
                  selectedAnswers[currentQuestion] === option
                }
                onClick={() => selectAnswer(option)}
              />

            ))}

          </div>

          <div className="flex justify-between mt-10">

            <button
              onClick={previousQuestion}
              disabled={currentQuestion === 0}
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
                disabled:opacity-50
                disabled:cursor-not-allowed
              "
            >
              <ChevronLeft size={18} />
              Previous
            </button>

            <button
              onClick={nextQuestion}
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
              {currentQuestion === questions.length - 1 ? (
                <>
                  <Trophy size={18} />
                  Finish Quiz
                </>
              ) : (
                <>
                  Next
                  <ChevronRight size={18} />
                </>
              )}
            </button>

          </div>

        </div>

      </div>

      {/* RIGHT */}

      <div className="space-y-6">

        <QuestionPalette
          totalQuestions={questions.length}
          currentQuestion={currentQuestion}
          selectedAnswers={selectedAnswers}
          onSelectQuestion={setCurrentQuestion}
        />

        <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-6">

          <div className="flex items-center gap-3 mb-6">

            <div className="w-11 h-11 rounded-xl bg-sky-100 flex items-center justify-center">

              <CircleHelp
                className="text-sky-600"
                size={20}
              />

            </div>

            <div>

              <h2 className="text-xl font-bold text-slate-900">
                Quiz Statistics
              </h2>

              <p className="text-sm text-slate-500">
                Live progress
              </p>

            </div>

          </div>

          <div className="space-y-4">

            <div className="flex justify-between items-center">

              <span className="text-slate-600">
                Total Questions
              </span>

              <span className="font-bold text-slate-900">
                {questions.length}
              </span>

            </div>

            <div className="flex justify-between items-center">

              <span className="text-slate-600">
                Answered
              </span>

              <span className="font-bold text-emerald-600">
                {answeredCount}
              </span>

            </div>

            <div className="flex justify-between items-center">

              <span className="text-slate-600">
                Remaining
              </span>

              <span className="font-bold text-amber-500">
                {questions.length - answeredCount}
              </span>

            </div>

            <div className="flex justify-between items-center">

              <span className="text-slate-600">
                Current Question
              </span>

              <span className="font-bold text-sky-600">
                {currentQuestion + 1}
              </span>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}