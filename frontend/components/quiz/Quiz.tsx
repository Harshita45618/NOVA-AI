"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

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

        <div className="bg-white rounded-3xl shadow-lg border border-stone-200 p-8">

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

          <div className="space-y-4">

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
                px-6
                py-3
                rounded-xl
                bg-stone-200
                hover:bg-stone-300
                disabled:opacity-50
              "
            >
              Previous
            </button>

            <button
              onClick={nextQuestion}
              className="
                px-6
                py-3
                rounded-xl
                bg-violet-600
                hover:bg-violet-700
                text-white
              "
            >
              {currentQuestion === questions.length - 1
                ? "Finish Quiz"
                : "Next"}
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

        <div className="bg-white rounded-3xl shadow-lg border border-stone-200 p-6">

          <h2 className="text-xl font-bold mb-5">
            Quiz Statistics
          </h2>

          <div className="space-y-4">

            <div className="flex justify-between">

              <span className="text-stone-600">
                Total Questions
              </span>

              <span className="font-bold">
                {questions.length}
              </span>

            </div>

            <div className="flex justify-between">

              <span className="text-stone-600">
                Answered
              </span>

              <span className="font-bold text-green-600">
                {answeredCount}
              </span>

            </div>

            <div className="flex justify-between">

              <span className="text-stone-600">
                Remaining
              </span>

              <span className="font-bold text-orange-500">
                {questions.length - answeredCount}
              </span>

            </div>

            <div className="flex justify-between">

              <span className="text-stone-600">
                Current
              </span>

              <span className="font-bold text-violet-600">
                {currentQuestion + 1}
              </span>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}