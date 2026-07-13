"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, RotateCcw } from "lucide-react";

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

  return (
    <div className="space-y-8">

      {/* Progress */}

      <div className="flex justify-between items-center">

        <h2 className="text-xl font-bold">

          Card {currentCard + 1} / {flashcards.length}

        </h2>

        <button
          onClick={() => setFlipped(!flipped)}
          className="flex items-center gap-2 px-4 py-2 rounded-xl bg-violet-600 text-white hover:bg-violet-700 transition"
        >
          <RotateCcw size={18} />

          Flip Card
        </button>

      </div>

      {/* Flashcard */}

      <div
        onClick={() => setFlipped(!flipped)}
        className="
          cursor-pointer
          rounded-3xl
          shadow-xl
          border
          border-stone-200
          bg-white
          min-h-[380px]
          flex
          items-center
          justify-center
          p-10
          transition-all
          hover:scale-[1.01]
        "
      >

        {!flipped ? (

          <div className="text-center">

            <p className="text-sm uppercase tracking-widest text-violet-600 mb-6">

              Question

            </p>

            <h1 className="text-3xl font-bold leading-relaxed">

              {card.question}

            </h1>

            <p className="mt-10 text-stone-500">

              Click the card to reveal the answer

            </p>

          </div>

        ) : (

          <div className="text-center">

            <p className="text-sm uppercase tracking-widest text-green-600 mb-6">

              Answer

            </p>

            <h1 className="text-2xl leading-relaxed">

              {card.answer}

            </h1>

          </div>

        )}

      </div>

      {/* Navigation */}

      <div className="flex justify-between">

        <button
          onClick={previousCard}
          disabled={currentCard === 0}
          className="
            flex
            items-center
            gap-2
            px-6
            py-3
            rounded-xl
            bg-stone-200
            hover:bg-stone-300
            disabled:opacity-50
          "
        >
          <ChevronLeft size={20} />

          Previous

        </button>

        <button
          onClick={nextCard}
          disabled={currentCard === flashcards.length - 1}
          className="
            flex
            items-center
            gap-2
            px-6
            py-3
            rounded-xl
            bg-violet-600
            hover:bg-violet-700
            text-white
            disabled:opacity-50
          "
        >
          Next

          <ChevronRight size={20} />

        </button>

      </div>

    </div>
  );
}