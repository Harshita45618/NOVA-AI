"use client";

import { useEffect, useRef } from "react";
import ChatMessage from "./ChatMessage";
import { Bot } from "lucide-react";

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
        shadow-xl
        border
        border-stone-200
        p-6
        h-[650px]
        overflow-y-auto
      "
    >
      {messages.length === 0 ? (
        <div className="h-full flex flex-col justify-center items-center text-center">

          <div className="w-24 h-24 rounded-full bg-violet-100 flex items-center justify-center mb-6">

            <Bot
              size={48}
              className="text-violet-600"
            />

          </div>

          <h2 className="text-3xl font-bold text-stone-900">

            Welcome to NOVA AI

          </h2>

          <p className="text-stone-500 mt-4 max-w-md leading-7">

            Ask questions about your notes,
            programming, operating systems,
            viva preparation, coding, or any
            academic topic.

          </p>

        </div>
      ) : (
        <>
          {messages.map((message, index) => (
            <ChatMessage
              key={index}
              role={message.role}
              content={message.content}
            />
          ))}

          {loading && (

            <div className="flex gap-4 items-start mt-6">

              <div className="w-12 h-12 rounded-full bg-violet-600 flex items-center justify-center">

                <Bot
                  className="text-white"
                  size={22}
                />

              </div>

              <div className="bg-white border border-stone-200 rounded-3xl px-6 py-5 shadow-md">

                <h3 className="font-bold text-violet-700 mb-3">

                  NOVA AI

                </h3>

                <div className="flex gap-2">

                  <span className="w-3 h-3 rounded-full bg-violet-600 animate-bounce"></span>

                  <span
                    className="w-3 h-3 rounded-full bg-violet-600 animate-bounce"
                    style={{ animationDelay: "0.2s" }}
                  ></span>

                  <span
                    className="w-3 h-3 rounded-full bg-violet-600 animate-bounce"
                    style={{ animationDelay: "0.4s" }}
                  ></span>

                </div>

              </div>

            </div>

          )}

          <div ref={bottomRef} />

        </>
      )}
    </div>
  );
}