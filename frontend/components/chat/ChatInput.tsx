"use client";

import { useState } from "react";
import { SendHorizontal } from "lucide-react";

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
    <div className="flex gap-3 mt-6">

      <input
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            sendMessage();
          }
        }}
        placeholder="Ask NOVA AI anything..."
        className="
          flex-1
          rounded-2xl
          border
          border-stone-300
          px-5
          py-4
          outline-none
          focus:ring-2
          focus:ring-violet-500
        "
      />

      <button
        onClick={sendMessage}
        disabled={loading}
        className="
          px-6
          rounded-2xl
          bg-violet-600
          text-white
          hover:bg-violet-700
          transition
          disabled:opacity-50
        "
      >
        <SendHorizontal />
      </button>

    </div>
  );
}