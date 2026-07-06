"use client";

import { FileText, Sparkles } from "lucide-react";

type NotesInputProps = {
  text: string;
  setText: (value: string) => void;
  onGenerate: () => void;
  loading: boolean;
};

export default function NotesInput({
  text,
  setText,
  onGenerate,
  loading,
}: NotesInputProps) {
  const wordCount = text.trim()
    ? text.trim().split(/\s+/).length
    : 0;

  const characterCount = text.length;

  return (
    <div className="bg-white rounded-3xl shadow-lg border border-stone-200 p-8 h-full flex flex-col">

      {/* Header */}
      <div className="flex items-center gap-3 mb-6">
        <div className="bg-green-100 p-3 rounded-xl">
          <FileText className="text-[#5C7C6F]" size={24} />
        </div>

        <div>
          <h2 className="text-2xl font-bold text-stone-800">
            Paste Your Notes
          </h2>

          <p className="text-stone-500 text-sm">
            Paste lecture notes, assignments or study material.
          </p>
        </div>
      </div>

      {/* Text Area */}
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Start typing or paste your notes here..."
        className="
          flex-1
          min-h-[380px]
          rounded-2xl
          border
          border-stone-300
          bg-stone-50
          p-5
          resize-none
          outline-none
          text-stone-700
          placeholder:text-stone-400
          focus:ring-2
          focus:ring-[#5C7C6F]
          focus:border-transparent
          transition
        "
      />

      {/* Footer */}
      <div className="mt-6">

        <div className="flex justify-between items-center mb-5">

          <div className="flex gap-6 text-sm text-stone-500">

            <span>
              <strong>{wordCount}</strong> Words
            </span>

            <span>
              <strong>{characterCount}</strong> Characters
            </span>

          </div>

        </div>

        <button
          onClick={onGenerate}
          disabled={loading || !text.trim()}
          className="
            w-full
            flex
            justify-center
            items-center
            gap-2
            py-4
            rounded-2xl
            font-semibold
            text-white
            bg-gradient-to-r
            from-[#5C7C6F]
            to-[#6B9080]
            hover:scale-[1.02]
            transition
            disabled:opacity-50
            disabled:cursor-not-allowed
          "
        >
          <Sparkles size={20} />

          {loading ? "Generating Summary..." : "Generate AI Summary"}
        </button>

      </div>

    </div>
  );
}