"use client";

import { useState } from "react";

import DashboardLayout from "@/components/layout/DashboardLayout";
import ChatWindow from "@/components/chat/ChatWindow";
import ChatInput from "@/components/chat/ChatInput";
import QuickPrompts from "@/components/chat/QuickPrompts";

import { chatWithAI } from "@/services/chat";

type Message = {
  role: "user" | "assistant";
  content: string;
};

export default function ChatPage() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(false);

  async function handleSend(message: string) {
    if (!message.trim()) return;

    const updatedMessages: Message[] = [
      ...messages,
      {
        role: "user",
        content: message,
      },
    ];

    setMessages(updatedMessages);

    try {
      setLoading(true);

      const data = await chatWithAI(message);

      setMessages([
        ...updatedMessages,
        {
          role: "assistant",
          content: data.answer,
        },
      ]);
    } catch (error) {
      console.error(error);

      alert("Failed to get AI response.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <DashboardLayout>
      <div className="max-w-6xl mx-auto">

        {/* Header */}

        <div className="mb-8">

          <h1 className="text-5xl font-bold text-stone-900">
            🤖 NOVA AI Assistant
          </h1>

          <p className="text-lg text-stone-500 mt-3">
            Your Personal AI Study Mentor
          </p>

        </div>

        {/* Quick Prompt Cards */}

        <QuickPrompts
          onPromptClick={handleSend}
        />

        {/* Chat Window */}

        <ChatWindow
          messages={messages}
          loading={loading}
        />

        {/* Chat Input */}

        <ChatInput
          onSend={handleSend}
          loading={loading}
        />

      </div>
    </DashboardLayout>
  );
}