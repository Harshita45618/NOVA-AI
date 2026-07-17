import { Sparkles } from "lucide-react";

export default function Header() {
  return (
    <header className="mb-8">

      <div
        className="
          bg-white
          rounded-3xl
          border
          border-slate-200
          shadow-sm
          px-8
          py-6
        "
      >

        <div className="flex items-center justify-between">

          <div>

            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-sky-600">
              AI Powered Learning
            </p>

            <h1 className="text-4xl font-bold text-slate-900 mt-2">
              AI Notes
            </h1>

            <p className="text-slate-500 mt-3 text-lg">
              Upload PDFs, generate structured notes, quizzes and flashcards in seconds.
            </p>

          </div>

          <div
            className="
              flex
              items-center
              gap-3
              rounded-2xl
              bg-gradient-to-r
              from-sky-100
              to-blue-200
              border
              border-sky-200
              px-5
              py-3
              shadow-sm
            "
          >

            <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center">

              <Sparkles
                size={18}
                className="text-sky-600"
              />

            </div>

            <div>

              <p className="text-xs text-slate-500 font-medium">
                Powered by
              </p>

              <span className="font-semibold text-slate-900">
                NOVA AI
              </span>

            </div>

          </div>

        </div>

      </div>

    </header>
  );
}