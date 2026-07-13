"use client";

import { useState } from "react";
import ReactMarkdown from "react-markdown";
import { Bot, User, Copy, Check } from "lucide-react";

type Props = {
  role: "user" | "assistant";
  content: string;
};

export default function ChatMessage({
  role,
  content,
}: Props) {
  const [copied, setCopied] = useState(false);

  const isUser = role === "user";

  async function copyText() {
    await navigator.clipboard.writeText(content);

    setCopied(true);

    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <div
      className={`flex gap-4 mb-8 ${
        isUser ? "justify-end" : "justify-start"
      }`}
    >
      {!isUser && (
        <div className="w-12 h-12 rounded-full bg-violet-600 flex items-center justify-center shrink-0">
          <Bot className="text-white" size={22} />
        </div>
      )}

      <div
        className={`
          max-w-3xl
          rounded-3xl
          shadow-md
          px-6
          py-5
          ${
            isUser
              ? "bg-violet-600 text-white"
              : "bg-white border border-stone-200"
          }
        `}
      >
        {!isUser && (
          <div className="flex justify-between items-center mb-4">

            <h3 className="font-bold text-violet-700">
              NOVA AI
            </h3>

            <button
              onClick={copyText}
              className="flex items-center gap-2 text-sm px-3 py-1 rounded-lg bg-stone-100 hover:bg-stone-200 transition"
            >
              {copied ? (
                <>
                  <Check size={15} />
                  Copied
                </>
              ) : (
                <>
                  <Copy size={15} />
                  Copy
                </>
              )}
            </button>

          </div>
        )}

        {isUser ? (
          <>
            <div className="flex items-center gap-2 mb-3">
              <User size={18} />
              <span className="font-semibold">
                You
              </span>
            </div>

            <p>{content}</p>
          </>
        ) : (
          <div
            className="
              prose
              prose-stone
              max-w-none

              prose-headings:text-violet-700
              prose-headings:font-bold

              prose-strong:text-violet-700

              prose-code:text-pink-600

              prose-pre:bg-stone-900
              prose-pre:text-white

              prose-table:w-full
            "
          >
            <ReactMarkdown>
              {content}
            </ReactMarkdown>
          </div>
        )}
      </div>

      {isUser && (
        <div className="w-12 h-12 rounded-full bg-stone-800 flex items-center justify-center shrink-0">
          <User className="text-white" size={22} />
        </div>
      )}
    </div>
  );
}