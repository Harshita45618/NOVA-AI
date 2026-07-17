"use client";

import { useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  RotateCcw,
  BookOpen,
  Brain,
} from "lucide-react";

type Flashcard = {
  question: string;
  answer: string;
};

type Props = {
  flashcards: Flashcard[];
};

export default function FlashcardDeck({ flashcards }: Props) {
  const [currentCard, setCurrentCard] = useState(0);
  const [flipped, setFlipped] = useState(false);

  const card = flashcards[currentCard];

  function nextCard() {
    if (currentCard < flashcards.length - 1) {
      setCurrentCard(currentCard + 1);
      setFlipped(false);
    }
  }

  function previousCard() {
    if (currentCard > 0) {
      setCurrentCard(currentCard - 1);
      setFlipped(false);
    }
  }

  const progress =
    ((currentCard + 1) / flashcards.length) * 100;

  return (
    <div className="space-y-8">

      {/* Header */}

      <div className="flex items-center justify-between">

        <div>

          <h2 className="text-2xl font-bold text-slate-900">
            Flashcard Deck
          </h2>

          <p className="mt-1 text-slate-500">
            Card {currentCard + 1} of {flashcards.length}
          </p>

        </div>

        <button
          onClick={() => setFlipped(!flipped)}
          className="
            inline-flex
            items-center
            gap-2
            px-5
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
          <RotateCcw size={18} />

          Flip Card

        </button>

      </div>

      {/* Progress */}

      <div>

        <div className="flex justify-between text-sm mb-3">

          <span className="text-slate-600">
            Progress
          </span>

          <span className="font-semibold text-sky-600">
            {Math.round(progress)}%
          </span>

        </div>

        <div className="h-3 rounded-full bg-slate-200 overflow-hidden">

          <div
            className="
              h-full
              rounded-full
              bg-gradient-to-r
              from-sky-500
              to-blue-500
              transition-all
              duration-500
            "
            style={{
              width: `${progress}%`,
            }}
          />

        </div>

      </div>

      {/* Flashcard */}

      <div
        onClick={() => setFlipped(!flipped)}
        className="
          cursor-pointer
          rounded-3xl
          border
          border-slate-200
          bg-white
          shadow-sm
          hover:shadow-md
          transition-all
          duration-300
          hover:scale-[1.01]
          min-h-[420px]
          flex
          items-center
          justify-center
          p-10
        "
      >

        {!flipped ? (

          <div className="text-center max-w-3xl">

            <div className="mx-auto w-20 h-20 rounded-full bg-sky-100 flex items-center justify-center mb-8">

              <Brain
                size={36}
                className="text-sky-600"
              />

            </div>

            <p className="uppercase tracking-widest text-xs font-semibold text-sky-600 mb-5">

              Question

            </p>

            <h1 className="text-3xl font-bold leading-relaxed text-slate-900">

              {card.question}

            </h1>

            <p className="mt-10 text-slate-500">

              Click anywhere on the card to reveal the answer

            </p>

          </div>

        ) : (

          <div className="text-center max-w-3xl">

            <div className="mx-auto w-20 h-20 rounded-full bg-emerald-100 flex items-center justify-center mb-8">

              <BookOpen
                size={36}
                className="text-emerald-600"
              />

            </div>

            <p className="uppercase tracking-widest text-xs font-semibold text-emerald-600 mb-5">

              Answer

            </p>

            <h1 className="text-3xl font-semibold leading-relaxed text-slate-900">

              {card.answer}

            </h1>

            <p className="mt-10 text-slate-500">

              Click again to view the question

            </p>

          </div>

        )}

      </div>

      {/* Navigation */}

      <div className="flex justify-between">

        <button
          onClick={previousCard}
          disabled={currentCard === 0}
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

          <ChevronLeft size={20} />

          Previous

        </button>

        <button
          onClick={nextCard}
          disabled={currentCard === flashcards.length - 1}
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
            disabled:opacity-50
            disabled:cursor-not-allowed
          "
        >

          Next

          <ChevronRight size={20} />

        </button>

      </div>

    </div>
  );
}