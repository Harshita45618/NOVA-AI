"use client";

import { useState } from "react";

import Header from "@/components/ai-notes/Header";
import NotesInput from "@/components/ai-notes/NotesInput";
import SummaryCard from "@/components/ai-notes/SummaryCard";

import { generateSummary } from "@/services/ai";

export default function AINotesPage() {
  const [text, setText] = useState("");
  const [summary, setSummary] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleGenerate() {
    if (!text.trim()) return;

    setLoading(true);

    try {
      const data = await generateSummary(text);
      setSummary(data.summary);
    } catch (error) {
      console.error(error);
      alert("Failed to generate summary.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="min-h-screen bg-[#F8F7F4] p-8">

      <Header />

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">

        <NotesInput
          text={text}
          setText={setText}
          onGenerate={handleGenerate}
          loading={loading}
        />

        <SummaryCard
          summary={summary}
        />

      </div>

    </main>
  );
}