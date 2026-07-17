"use client";

import { useEffect, useRef } from "react";
import { Bot, Sparkles } from "lucide-react";
import ChatMessage from "./ChatMessage";

type Message = {
  role: "user" | "assistant";
  content: string;
};

type Props = {
  messages: Message[];
  loading: boolean;
};

export default function ChatWindow({
  messages,
  loading,
}: Props) {
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages, loading]);

  return (
    <div
      className="
        bg-white
        rounded-3xl
        border
        border-slate-200
        shadow-sm
        hover:shadow-md
        transition-shadow
        p-6
        h-[650px]
        overflow-y-auto
      "
    >
      {messages.length === 0 ? (
        <div className="h-full flex flex-col items-center justify-center text-center">

          <div className="w-24 h-24 rounded-full bg-sky-100 flex items-center justify-center mb-8">

            <Bot
              size={46}
              className="text-sky-600"
            />

          </div>

          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-sky-100 to-blue-200 text-sky-700 text-sm font-semibold mb-5">

            <Sparkles size={16} />

            AI Study Mentor

          </div>

          <h2 className="text-3xl font-bold text-slate-900">
            Welcome to NOVA AI
          </h2>

          <p className="mt-5 max-w-lg text-slate-600 leading-8">
            Ask questions about your notes, coding, operating systems,
            databases, GATE preparation, placements, interview questions,
            or any academic topic. NOVA AI is ready to help you learn.
          </p>

        </div>
      ) : (
        <>
          <div className="space-y-6">

            {messages.map((message, index) => (
              <ChatMessage
                key={index}
                role={message.role}
                content={message.content}
              />
            ))}

            {loading && (

              <div className="flex items-start gap-4">

                <div className="w-12 h-12 rounded-full bg-sky-100 flex items-center justify-center flex-shrink-0">

                  <Bot
                    size={22}
                    className="text-sky-600"
                  />

                </div>

                <div className="bg-slate-50 border border-slate-200 rounded-3xl px-6 py-5 shadow-sm">

                  <div className="flex items-center gap-2 mb-4">

                    <Sparkles
                      size={16}
                      className="text-sky-600"
                    />

                    <h3 className="font-semibold text-slate-900">
                      NOVA AI
                    </h3>

                  </div>

                  <div className="flex gap-2">

                    <span
                      className="w-3 h-3 rounded-full bg-sky-500 animate-bounce"
                    />

                    <span
                      className="w-3 h-3 rounded-full bg-sky-500 animate-bounce"
                      style={{ animationDelay: "0.15s" }}
                    />

                    <span
                      className="w-3 h-3 rounded-full bg-sky-500 animate-bounce"
                      style={{ animationDelay: "0.3s" }}
                    />

                  </div>

                </div>

              </div>

            )}

          </div>

          <div ref={bottomRef} />
        </>
      )}
    </div>
  );
}