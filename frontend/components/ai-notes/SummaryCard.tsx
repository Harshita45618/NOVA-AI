"use client";

import ReactMarkdown from "react-markdown";
import {
  Copy,
  Download,
  FileText,
  RotateCcw,
} from "lucide-react";

type SummaryCardProps = {
  summary: string;
};

export default function SummaryCard({
  summary,
}: SummaryCardProps) {

  const copySummary = async () => {
    if (!summary) return;

    await navigator.clipboard.writeText(summary);
    alert("Summary copied successfully!");
  };

  return (
    <div className="bg-white rounded-3xl shadow-lg border border-stone-200 p-8 h-full flex flex-col">

      {/* Header */}

      <div className="flex justify-between items-center mb-6">

        <div className="flex items-center gap-3">

          <div className="bg-green-100 p-3 rounded-xl">

            <FileText
              size={24}
              className="text-[#5C7C6F]"
            />

          </div>

          <div>

            <h2 className="text-2xl font-bold text-stone-800">
              AI Summary
            </h2>

            <p className="text-stone-500 text-sm">
              AI generated concise notes
            </p>

          </div>

        </div>

        {summary && (

          <div className="flex gap-2">

            <button
              onClick={copySummary}
              className="p-3 rounded-xl bg-stone-100 hover:bg-stone-200 transition"
            >
              <Copy size={18} />
            </button>

            <button
              className="p-3 rounded-xl bg-stone-100 hover:bg-stone-200 transition"
            >
              <Download size={18} />
            </button>

            <button
              className="p-3 rounded-xl bg-stone-100 hover:bg-stone-200 transition"
            >
              <RotateCcw size={18} />
            </button>

          </div>

        )}

      </div>

      {/* Body */}

      <div className="flex-1 overflow-y-auto">

        {summary ? (

     <div
  className="
    text-stone-700
    leading-8
    text-[16px]
    font-normal

    [&_h1]:text-3xl
    [&_h1]:font-bold
    [&_h1]:text-stone-900
    [&_h1]:mb-5

    [&_h2]:text-2xl
    [&_h2]:font-semibold
    [&_h2]:text-[#2F5D50]
    [&_h2]:mt-8
    [&_h2]:mb-4

    [&_h3]:text-xl
    [&_h3]:font-semibold
    [&_h3]:text-stone-800

    [&_p]:mb-4

    [&_ul]:list-disc
    [&_ul]:pl-6
    [&_ul]:space-y-3

    [&_li]:text-stone-700

    [&_strong]:font-bold
    [&_strong]:text-[#2F5D50]
  "
>
  <ReactMarkdown>{summary}</ReactMarkdown>
</div>    

        ) : (

          <div className="h-full flex flex-col justify-center items-center text-center">

            <div className="bg-stone-100 rounded-full p-6 mb-6">

              <FileText
                size={48}
                className="text-stone-400"
              />

            </div>

            <h3 className="text-2xl font-semibold text-stone-700">

              Ready to Generate

            </h3>

            <p className="mt-3 text-stone-500 max-w-sm">

              Paste your study notes on the left and let
              NOVA AI generate a smart summary for quick
              revision.

            </p>

          </div>

        )}

      </div>

    </div>
  );
}