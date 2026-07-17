import Link from "next/link";

import DashboardLayout from "@/components/layout/DashboardLayout";

import WelcomeCard from "@/components/dashboard/WelcomeCard";
import StatsCard from "@/components/dashboard/StatsCard";
import QuickActions from "@/components/dashboard/QuickActions";
import RecentActivity from "@/components/dashboard/RecentActivity";

import {
  FileText,
  Brain,
  Layers3,
  Clock3,
} from "lucide-react";

const cards = [
  {
    title: "AI Notes",
    description: "Generate AI-powered study summaries.",
    href: "/dashboard/ai-notes",
    emoji: "📝",
  },
  {
    title: "AI Quiz",
    description: "Practice with AI-generated MCQs.",
    href: "/dashboard/quiz",
    emoji: "🧠",
  },
  {
    title: "Flashcards",
    description: "Revise concepts faster.",
    href: "/dashboard/flashcards",
    emoji: "📚",
  },
  {
    title: "Study Assistant",
    description: "Ask AI questions about your subjects.",
    href: "/dashboard/chat",
    emoji: "💬",
  },
  {
    title: "Study Planner",
    description: "Generate a personalized study schedule.",
    href: "/dashboard/planner",
    emoji: "📅",
  },
];

export default function DashboardPage() {
  return (
    <DashboardLayout>

      {/* Welcome */}

      <WelcomeCard />

      <div className="h-8" />

      {/* Statistics */}

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-10">

        <StatsCard
          title="Notes Created"
          value="15"
          icon={FileText}
          color="bg-sky-100"
        />

        <StatsCard
          title="Quizzes Taken"
          value="9"
          icon={Brain}
          color="bg-indigo-100"
        />

        <StatsCard
          title="Flashcards"
          value="42"
          icon={Layers3}
          color="bg-emerald-100"
        />

        <StatsCard
          title="Study Hours"
          value="18h"
          icon={Clock3}
          color="bg-amber-100"
        />

      </div>

      {/* Quick Actions */}

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 mb-10">

        <div className="xl:col-span-2">

          <QuickActions />

        </div>

        <RecentActivity />

      </div>

      {/* Explore */}

      <div>

        <h2 className="text-2xl font-bold text-slate-900 mb-6">
          Explore NOVA AI
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">

          {cards.map((card) => (

            <Link
              key={card.title}
              href={card.href}
              className="
                group
                bg-white
                rounded-3xl
                border
                border-slate-200
                shadow-sm
                p-8
                transition-all
                duration-300
                hover:shadow-lg
                hover:-translate-y-1
              "
            >

              <div className="text-5xl mb-6">
                {card.emoji}
              </div>

              <h2 className="text-2xl font-bold text-slate-900 transition-colors group-hover:text-sky-600">
                {card.title}
              </h2>

              <p className="text-slate-500 mt-3 leading-7">
                {card.description}
              </p>

              <p className="mt-6 font-semibold text-sky-600 group-hover:translate-x-1 transition-transform">
                Open →
              </p>

            </Link>

          ))}

        </div>

      </div>

    </DashboardLayout>
  );
}