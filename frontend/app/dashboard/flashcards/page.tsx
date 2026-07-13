"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import DashboardLayout from "@/components/layout/DashboardLayout";
import FlashcardDeck from "../../../components/flashcards/FlashcardDeck";

type Flashcard = {
  question: string;
  answer: string;
};

export default function FlashcardsPage() {
  const router = useRouter();

  const [flashcards, setFlashcards] = useState<Flashcard[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const stored = sessionStorage.getItem("flashcards");

    if (stored) {
      setFlashcards(JSON.parse(stored));
    }

    setLoading(false);
  }, []);

  if (loading) {
    return (
      <DashboardLayout>
        <div className="flex justify-center items-center min-h-[70vh]">
          <h1 className="text-3xl font-bold">
            Loading Flashcards...
          </h1>
        </div>
      </DashboardLayout>
    );
  }

  if (flashcards.length === 0) {
    return (
      <DashboardLayout>

        <div className="flex justify-center items-center min-h-[70vh]">

          <div className="bg-white rounded-3xl shadow-lg p-10 text-center">

            <h1 className="text-3xl font-bold mb-4">
              No Flashcards Found
            </h1>

            <p className="text-stone-500 mb-8">
              Generate flashcards from AI Notes first.
            </p>

            <button
              onClick={() => router.push("/dashboard/ai-notes")}
              className="px-6 py-3 rounded-xl bg-violet-600 text-white"
            >
              Back to AI Notes
            </button>

          </div>

        </div>

      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout>

      <div className="max-w-5xl mx-auto">

        <div className="mb-10">

          <h1 className="text-4xl font-bold">
            📚 AI Flashcards
          </h1>

          <p className="text-stone-500 mt-2">
            Learn faster using AI-generated flashcards.
          </p>

        </div>

        <FlashcardDeck flashcards={flashcards} />

      </div>

    </DashboardLayout>
  );
}