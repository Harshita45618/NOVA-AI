"use client";

import { useState } from "react";
import ReactMarkdown from "react-markdown";
import {
  Bot,
  User,
  Copy,
  Check,
  Sparkles,
} from "lucide-react";

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
      className={`flex gap-4 ${
        isUser ? "justify-end" : "justify-start"
      }`}
    >
      {/* AI Avatar */}

      {!isUser && (
        <div className="w-12 h-12 rounded-full bg-sky-100 flex items-center justify-center shrink-0">

          <Bot
            className="text-sky-600"
            size={22}
          />

        </div>
      )}

      {/* Bubble */}

      <div
        className={`
          max-w-3xl
          rounded-3xl
          px-6
          py-5
          shadow-sm
          transition-all
          ${
            isUser
              ? "bg-gradient-to-r from-sky-500 to-blue-500 text-white"
              : "bg-white border border-slate-200 hover:shadow-md"
          }
        `}
      >
        {/* AI Header */}

        {!isUser && (

          <div className="flex items-center justify-between mb-5">

            <div className="flex items-center gap-2">

              <Sparkles
                size={16}
                className="text-sky-600"
              />

              <h3 className="font-semibold text-slate-900">
                NOVA AI
              </h3>

            </div>

            <button
              onClick={copyText}
              className="
                inline-flex
                items-center
                gap-2
                px-3
                py-1.5
                rounded-lg
                bg-slate-100
                hover:bg-slate-200
                text-slate-600
                transition
              "
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

        {/* User */}

        {isUser ? (

          <>
            <div className="flex items-center gap-2 mb-3">

              <User size={18} />

              <span className="font-semibold">
                You
              </span>

            </div>

            <p className="leading-7 whitespace-pre-wrap">
              {content}
            </p>
          </>

        ) : (

          <div
            className="
              prose
              max-w-none

              prose-slate

              prose-headings:text-slate-900
              prose-headings:font-bold

              prose-p:text-slate-700
              prose-p:leading-8

              prose-strong:text-sky-700

              prose-a:text-sky-600

              prose-li:text-slate-700

              prose-ul:leading-8

              prose-code:text-sky-700
              prose-code:bg-sky-50
              prose-code:px-1
              prose-code:py-0.5
              prose-code:rounded

              prose-pre:bg-slate-900
              prose-pre:text-white
              prose-pre:rounded-2xl

              prose-blockquote:border-sky-500
              prose-blockquote:text-slate-600

              prose-table:w-full
              prose-th:border
              prose-td:border
            "
          >
            <ReactMarkdown>
              {content}
            </ReactMarkdown>
          </div>

        )}

      </div>

      {/* User Avatar */}

      {isUser && (
        <div className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center shrink-0">

          <User
            className="text-white"
            size={22}
          />

        </div>
      )}

    </div>
  );
}