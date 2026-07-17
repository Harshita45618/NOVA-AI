"use client";

import DashboardLayout from "@/components/layout/DashboardLayout";
import { useState } from "react";
import { useRouter } from "next/navigation";

import Header from "@/components/ai-notes/Header";
import NotesInput from "@/components/ai-notes/NotesInput";
import SummaryCard from "@/components/ai-notes/SummaryCard";

import { generateSummary } from "@/services/ai";
import { generateQuiz } from "@/services/quiz";
import { generateFlashcards } from "@/services/flashcards";
import { uploadPDF } from "@/services/pdf";

import { toast } from "sonner";

export default function AINotesPage() {
  const router = useRouter();

  const [text, setText] = useState("");
  const [summary, setSummary] = useState("");

  const [loading, setLoading] = useState(false);
  const [quizLoading, setQuizLoading] = useState(false);
  const [flashcardLoading, setFlashcardLoading] = useState(false);

  async function handleGenerate() {
    if (!text.trim()) return;

    try {
      setLoading(true);

      const data = await generateSummary(text);

      setSummary(data.summary);
      toast.success("Summary generated successfully!");
    } catch (error) {
      console.error(error);
      toast.error("Failed to generate summary.");
    } finally {
      setLoading(false);
    }
  }

  async function handlePDFUpload(file: File) {
    try {
      setLoading(true);

      const data = await uploadPDF(file);

      setText(data.text);
      toast.success("PDF uploaded successfully!");
    } catch (error) {
      console.error(error);
      toast.error("Failed to upload PDF.");
    } finally {
      setLoading(false);
    }
  }

 async function handleGenerateQuiz() {
  if (!text.trim()) return;

  try {
    setQuizLoading(true);

    const data = await generateQuiz(text);

    console.log("Quiz Response:", data);
    console.log("Questions:", data.questions);
    console.log("Is Array:", Array.isArray(data.questions));

    sessionStorage.setItem(
      "quiz",
      JSON.stringify(data.questions)
    );

    console.log(
      "Stored Quiz:",
      sessionStorage.getItem("quiz")
    );

    toast.success("Quiz generated successfully!");
    router.push("/dashboard/quiz");
  } catch (error) {
    console.error(error);
    alert("Failed to generate quiz.");
  } finally {
    setQuizLoading(false);
  }
}

  async function handleGenerateFlashcards() {
    if (!text.trim()) return;

    try {
      setFlashcardLoading(true);

      const data = await generateFlashcards(text);

      sessionStorage.setItem(
        "flashcards",
        JSON.stringify(data.flashcards)
      );

      router.push("/dashboard/flashcards");
    } catch (error) {
      console.error(error);
      toast.error("Failed to generate flashcards.");
    } finally {
      setFlashcardLoading(false);
    }
  }

  return (
    <DashboardLayout>

      <div className="max-w-7xl mx-auto">

        <Header />

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 mt-8">

          <div className="h-[780px]">

            <NotesInput
              text={text}
              setText={setText}
              onGenerate={handleGenerate}
              onFileSelect={handlePDFUpload}
              loading={loading}
            />

          </div>

          <div className="h-[780px]">

            <SummaryCard
              summary={summary}
              loading={loading}

              onGenerateQuiz={handleGenerateQuiz}
              quizLoading={quizLoading}

              onGenerateFlashcards={handleGenerateFlashcards}
              flashcardLoading={flashcardLoading}
            />

          </div>

        </div>

      </div>

    </DashboardLayout>
  );
}