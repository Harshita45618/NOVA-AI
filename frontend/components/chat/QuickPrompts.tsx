"use client";

import {
  Lightbulb,
  GraduationCap,
  BookOpen,
  Code2,
  FileText,
  Shapes,
} from "lucide-react";

type Props = {
  onPromptClick: (prompt: string) => void;
};

const prompts = [
  {
    title: "Explain Topic",
    icon: Lightbulb,
    prompt: "Explain this topic in simple language with examples.",
    color: "bg-yellow-100 text-yellow-700",
  },
  {
    title: "Viva Questions",
    icon: GraduationCap,
    prompt: "Generate 10 viva questions with answers.",
    color: "bg-violet-100 text-violet-700",
  },
  {
    title: "Short Notes",
    icon: FileText,
    prompt: "Create short revision notes.",
    color: "bg-blue-100 text-blue-700",
  },
  {
    title: "Important Concepts",
    icon: BookOpen,
    prompt: "List all important concepts for exams.",
    color: "bg-green-100 text-green-700",
  },
  {
    title: "Explain Code",
    icon: Code2,
    prompt: "Explain this code line by line.",
    color: "bg-red-100 text-red-700",
  },
  {
    title: "Examples",
    icon: Shapes,
    prompt: "Give real-world examples for this topic.",
    color: "bg-pink-100 text-pink-700",
  },
];

export default function QuickPrompts({
  onPromptClick,
}: Props) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">

      {prompts.map((item) => {
        const Icon = item.icon;

        return (
          <button
            key={item.title}
            onClick={() => onPromptClick(item.prompt)}
            className="
              bg-white
              rounded-2xl
              border
              border-stone-200
              p-5
              shadow-sm
              hover:shadow-lg
              hover:-translate-y-1
              transition-all
              text-left
            "
          >
            <div
              className={`w-12 h-12 rounded-xl flex items-center justify-center ${item.color}`}
            >
              <Icon size={22} />
            </div>

            <h3 className="font-bold text-lg mt-4">
              {item.title}
            </h3>

            <p className="text-sm text-stone-500 mt-2">
              Click to instantly ask NOVA AI
            </p>
          </button>
        );
      })}

    </div>
  );
}