"use client";

import { Sparkles, BrainCircuit, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Header() {
  return (
    <header className="mb-10">

      <div
        className="
          relative
          overflow-hidden
          rounded-[32px]
          bg-gradient-to-br
          from-violet-700
          via-indigo-600
          to-blue-600
          p-10
          shadow-xl
        "
      >

        {/* Background Blur */}

        <div className="absolute -top-20 right-0 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
        <div className="absolute -bottom-16 left-16 h-56 w-56 rounded-full bg-violet-400/20 blur-3xl" />

        <div className="relative flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">

          {/* Left */}

          <div className="max-w-3xl">

            <div className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-2 backdrop-blur-md">

              <BrainCircuit
                size={18}
                className="text-white"
              />

              <span className="text-sm font-medium text-white">

                AI Powered Study Assistant

              </span>

            </div>

            <h1 className="mt-6 text-5xl font-extrabold leading-tight text-white">

              AI Notes

            </h1>

            <p className="mt-5 text-lg leading-8 text-violet-100">

              Upload your PDFs or paste your notes to generate
              structured summaries, quizzes, flashcards and
              exam-ready study material in seconds.

            </p>

          </div>

          {/* Right */}

          <div
            className="
              rounded-3xl
              border
              border-white/20
              bg-white/10
              backdrop-blur-xl
              p-6
              min-w-[300px]
            "
          >

            <div className="flex items-center gap-3">

              <Sparkles
                className="text-yellow-300"
                size={24}
              />

              <div>

                <p className="text-sm text-violet-100">

                  Powered by

                </p>

                <h2 className="text-2xl font-bold text-white">

                  Groq AI ⚡

                </h2>

              </div>

            </div>

            <div className="mt-6 h-2 rounded-full bg-white/20 overflow-hidden">

              <div className="h-full w-4/5 rounded-full bg-white" />

            </div>

            <p className="mt-4 text-sm text-violet-100">

              Fast AI summaries, quizzes and flashcards
              for smarter learning.

            </p>

            <Link
              href="/dashboard/chat"
              className="
                mt-6
                inline-flex
                items-center
                gap-2
                rounded-2xl
                bg-white
                px-5
                py-3
                font-semibold
                text-violet-700
                transition
                hover:scale-105
              "
            >

              Open AI Chat

              <ArrowRight size={18} />

            </Link>

          </div>

        </div>

      </div>

    </header>
  );
}