import { Sparkles } from "lucide-react";

export default function Header() {
  return (
    <div className="flex justify-between items-center mb-10">

      <div>

        <h1 className="text-4xl font-bold text-stone-800">
          AI Notes
        </h1>

        <p className="text-stone-500 mt-2">
          Generate concise study summaries using Gemini AI.
        </p>

      </div>

      <div className="flex items-center gap-2 bg-green-100 px-4 py-2 rounded-full">

        <Sparkles
          className="text-green-700"
          size={18}
        />

        <span className="text-green-700 font-medium">
          AI Powered
        </span>

      </div>

    </div>
  );
}