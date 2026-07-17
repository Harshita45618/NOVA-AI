"use client";

import {
  Lightbulb,
  GraduationCap,
  BookOpen,
  Code2,
  FileText,
  Shapes,
  Sparkles,
} from "lucide-react";

type Props = {
  onPromptClick: (prompt: string) => void;
};

const prompts = [
  {
    title: "Explain Topic",
    icon: Lightbulb,
    prompt: "Explain this topic in simple language with examples.",
    color: "bg-amber-100 text-amber-600",
  },
  {
    title: "Viva Questions",
    icon: GraduationCap,
    prompt: "Generate 10 viva questions with answers.",
    color: "bg-sky-100 text-sky-600",
  },
  {
    title: "Short Notes",
    icon: FileText,
    prompt: "Create short revision notes.",
    color: "bg-blue-100 text-blue-600",
  },
  {
    title: "Important Concepts",
    icon: BookOpen,
    prompt: "List all important concepts for exams.",
    color: "bg-emerald-100 text-emerald-600",
  },
  {
    title: "Explain Code",
    icon: Code2,
    prompt: "Explain this code line by line.",
    color: "bg-indigo-100 text-indigo-600",
  },
  {
    title: "Examples",
    icon: Shapes,
    prompt: "Give real-world examples for this topic.",
    color: "bg-cyan-100 text-cyan-600",
  },
];

export default function QuickPrompts({
  onPromptClick,
}: Props) {
  return (
    <div className="mb-8">

      <div className="flex items-center gap-2 mb-5">

        <Sparkles
          size={18}
          className="text-sky-600"
        />

        <h2 className="text-xl font-bold text-slate-900">
          Quick Prompts
        </h2>

      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">

        {prompts.map((item) => {
          const Icon = item.icon;

          return (
            <button
              key={item.title}
              onClick={() => onPromptClick(item.prompt)}
              className="
                group
                bg-white
                rounded-3xl
                border
                border-slate-200
                p-5
                shadow-sm
                hover:shadow-md
                hover:-translate-y-1
                hover:border-sky-200
                transition-all
                duration-300
                text-left
              "
            >

              <div
                className={`
                  w-12
                  h-12
                  rounded-2xl
                  flex
                  items-center
                  justify-center
                  transition-transform
                  group-hover:scale-110
                  ${item.color}
                `}
              >
                <Icon size={22} />
              </div>

              <h3 className="mt-4 text-lg font-semibold text-slate-900">
                {item.title}
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-500">
                Click to instantly ask NOVA AI about this topic.
              </p>

            </button>
          );
        })}

      </div>

    </div>
  );
}