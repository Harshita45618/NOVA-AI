"use client";

import { useState } from "react";

import {
  Sparkles,
  Bot,
} from "lucide-react";

import DashboardLayout from "@/components/layout/DashboardLayout";
import ChatWindow from "@/components/chat/ChatWindow";
import ChatInput from "@/components/chat/ChatInput";
import QuickPrompts from "@/components/chat/QuickPrompts";

import { chatWithAI } from "@/services/chat";

import { toast } from "sonner";

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
      toast.error("Failed to get AI response.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <DashboardLayout>
      <div className="max-w-6xl mx-auto">

        {/* Header */}

        <div className="mb-8">

          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-sky-100 to-blue-200 text-sky-700 text-sm font-semibold mb-4">

            <Sparkles size={16} />

            AI Powered Assistant

          </div>

          <div className="flex items-center gap-4">

            <div className="w-14 h-14 rounded-2xl bg-sky-100 flex items-center justify-center">

              <Bot
                size={28}
                className="text-sky-600"
              />

            </div>

            <div>

              <h1 className="text-4xl font-bold text-slate-900">
                NOVA AI Assistant
              </h1>

              <p className="mt-2 text-slate-600">
                Ask questions, understand concepts, solve doubts, and get personalized study guidance instantly.
              </p>

            </div>

          </div>

        </div>

        {/* Quick Prompt Cards */}

        <div className="mb-6">
          <QuickPrompts
            onPromptClick={handleSend}
          />
        </div>

        {/* Chat Window */}

        <div className="mb-6">
          <ChatWindow
            messages={messages}
            loading={loading}
          />
        </div>

        {/* Chat Input */}

        <ChatInput
          onSend={handleSend}
          loading={loading}
        />

      </div>
    </DashboardLayout>
  );
}