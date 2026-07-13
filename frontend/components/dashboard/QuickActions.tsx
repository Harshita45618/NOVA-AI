import Link from "next/link";
import {
  FileText,
  Brain,
  MessageSquare,
  CalendarDays,
} from "lucide-react";

const actions = [
  {
    title: "Generate Summary",
    icon: FileText,
    href: "/dashboard/ai-notes",
    color: "bg-violet-600",
  },
  {
    title: "Create Quiz",
    icon: Brain,
    href: "/dashboard/quiz",
    color: "bg-blue-600",
  },
  {
    title: "Ask AI",
    icon: MessageSquare,
    href: "/dashboard/chat",
    color: "bg-green-600",
  },
  {
    title: "Study Planner",
    icon: CalendarDays,
    href: "/dashboard/planner",
    color: "bg-orange-500",
  },
];

export default function QuickActions() {
  return (
    <div className="bg-white rounded-3xl border border-stone-200 shadow-sm p-8">

      <h2 className="text-2xl font-bold text-stone-900">
        Quick Actions
      </h2>

      <p className="text-stone-500 mt-1 mb-6">
        Jump directly to your favourite AI tools.
      </p>

      <div className="grid grid-cols-2 gap-5">

        {actions.map((action) => {
          const Icon = action.icon;

          return (
            <Link
              key={action.title}
              href={action.href}
              className="
                group
                rounded-2xl
                border
                border-stone-200
                p-6
                hover:border-violet-300
                hover:shadow-md
                transition-all
              "
            >

              <div
                className={`w-14 h-14 rounded-2xl ${action.color} flex items-center justify-center mb-5`}
              >
                <Icon
                  className="text-white"
                  size={28}
                />
              </div>

              <h3 className="text-2xl font-semibold text-stone-900 group-hover:text-violet-600 transition">
                {action.title}
              </h3>

              <p className="text-stone-500 mt-2">
                {action.title === "Generate Summary" &&
                  "Generate smart summaries from your notes."}

                {action.title === "Create Quiz" &&
                  "Practice with AI-generated MCQs."}

                {action.title === "Ask AI" &&
                  "Ask questions and clear your doubts."}

                {action.title === "Study Planner" &&
                  "Create a personalized study schedule."}
              </p>

            </Link>
          );
        })}

      </div>

    </div>
  );
}