"use client";

import { useState } from "react";
import {
  SendHorizontal,
  LoaderCircle,
  Sparkles,
} from "lucide-react";

type Props = {
  onSend: (message: string) => void;
  loading: boolean;
};

export default function ChatInput({
  onSend,
  loading,
}: Props) {
  const [message, setMessage] = useState("");

  function sendMessage() {
    if (!message.trim()) return;

    onSend(message);
    setMessage("");
  }

  return (
    <div className="mt-6">

      <div
        className="
          bg-white
          border
          border-slate-200
          rounded-3xl
          shadow-sm
          p-3
          flex
          items-end
          gap-3
        "
      >

        <div className="flex-1">

          <div className="flex items-center gap-2 mb-2 px-2">

            <Sparkles
              size={15}
              className="text-sky-600"
            />

            <span className="text-xs font-medium text-slate-500">
              Ask NOVA AI anything
            </span>

          </div>

          <input
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                sendMessage();
              }
            }}
            placeholder="Explain operating systems, debug code, solve DSA problems..."
            className="
              w-full
              bg-transparent
              px-2
              py-3
              text-slate-700
              placeholder:text-slate-400
              outline-none
            "
          />

        </div>

        <button
          onClick={sendMessage}
          disabled={loading || !message.trim()}
          className="
            h-14
            w-14
            rounded-2xl
            bg-gradient-to-r
            from-sky-500
            to-blue-500
            hover:from-sky-600
            hover:to-blue-600
            disabled:opacity-50
            disabled:cursor-not-allowed
            transition-all
            shadow-sm
            flex
            items-center
            justify-center
            text-white
          "
        >
          {loading ? (
            <LoaderCircle
              size={22}
              className="animate-spin"
            />
          ) : (
            <SendHorizontal size={22} />
          )}
        </button>

      </div>

      <p className="mt-3 text-center text-xs text-slate-500">
        Press <span className="font-semibold">Enter</span> to send your message.
      </p>

    </div>
  );
}