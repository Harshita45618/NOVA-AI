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
    emoji: "🗂️",
  },
  {
    title: "AI Chat",
    description: "Ask questions from your notes.",
    href: "/dashboard/chat",
    emoji: "💬",
  },
  {
    title: "Study Planner",
    description: "Generate a smart study schedule.",
    href: "/dashboard/planner",
    emoji: "📅",
  },
];

export default function DashboardPage() {
  return (
    <DashboardLayout>

      {/* Welcome Card */}

      <WelcomeCard />

      <div className="h-8" />

      {/* Statistics */}

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-10">

        <StatsCard
          title="Notes Created"
          value="15"
          icon={FileText}
          color="bg-violet-600"
        />

        <StatsCard
          title="Quizzes Taken"
          value="9"
          icon={Brain}
          color="bg-blue-600"
        />

        <StatsCard
          title="Flashcards"
          value="42"
          icon={Layers3}
          color="bg-green-600"
        />

        <StatsCard
          title="Study Hours"
          value="18h"
          icon={Clock3}
          color="bg-orange-500"
        />

      </div>

      {/* Quick Actions + Recent Activity */}

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 mb-10">

        <div className="xl:col-span-2">

          <QuickActions />

        </div>

        <RecentActivity />

      </div>

      {/* Explore NOVA AI */}

      <div>

        <h2 className="text-2xl font-bold text-stone-900 mb-6">
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
                border-stone-200
                shadow-sm
                p-8
                hover:shadow-xl
                hover:-translate-y-1
                transition-all
              "
            >

              <div className="text-5xl mb-6">
                {card.emoji}
              </div>

              <h2 className="text-2xl font-bold text-stone-900 group-hover:text-violet-600 transition">

                {card.title}

              </h2>

              <p className="text-stone-500 mt-3 leading-7">

                {card.description}

              </p>

              <p className="mt-6 text-violet-600 font-semibold">

                Open →

              </p>

            </Link>

          ))}

        </div>

      </div>

    </DashboardLayout>
  );
}