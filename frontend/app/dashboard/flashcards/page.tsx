"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import {
  BookOpen,
  Sparkles,
  ArrowLeft,
  LoaderCircle,
} from "lucide-react";

import DashboardLayout from "@/components/layout/DashboardLayout";
import FlashcardDeck from "@/components/flashcards/FlashcardDeck";

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
        <div className="flex items-center justify-center min-h-[70vh]">

          <div className="bg-white border border-slate-200 rounded-3xl shadow-sm p-10 flex flex-col items-center">

            <div className="w-20 h-20 rounded-full bg-sky-100 flex items-center justify-center">

              <LoaderCircle
                size={40}
                className="text-sky-600 animate-spin"
              />

            </div>

            <h1 className="mt-8 text-2xl font-bold text-slate-900">
              Loading Flashcards...
            </h1>

            <p className="mt-2 text-slate-500">
              Preparing your AI flashcard deck.
            </p>

          </div>

        </div>
      </DashboardLayout>
    );
  }

  if (flashcards.length === 0) {
    return (
      <DashboardLayout>

        <div className="flex justify-center items-center min-h-[70vh] px-6">

          <div className="bg-white border border-slate-200 rounded-3xl shadow-sm p-10 max-w-lg w-full text-center">

            <div className="mx-auto w-20 h-20 rounded-full bg-sky-100 flex items-center justify-center">

              <BookOpen
                size={36}
                className="text-sky-600"
              />

            </div>

            <h1 className="mt-8 text-3xl font-bold text-slate-900">
              No Flashcards Found
            </h1>

            <p className="mt-4 text-slate-500 leading-7">
              Generate flashcards from the AI Notes module first.
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

        </div>

      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout>

      <div className="max-w-5xl mx-auto">

        {/* Header */}

        <div className="mb-10">

          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-sky-100 to-blue-200 text-sky-700 text-sm font-semibold mb-4">

            <Sparkles size={16} />

            AI Powered Revision

          </div>

          <div className="flex items-center gap-4">

            <div className="w-14 h-14 rounded-2xl bg-sky-100 flex items-center justify-center">

              <BookOpen
                size={26}
                className="text-sky-600"
              />

            </div>

            <div>

              <h1 className="text-4xl font-bold text-slate-900">
                AI Flashcards
              </h1>

              <p className="mt-2 text-slate-600">
                Learn faster with AI-generated flashcards and active recall.
              </p>

            </div>

          </div>

        </div>

        <FlashcardDeck flashcards={flashcards} />

      </div>

    </DashboardLayout>
  );
}