"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  LayoutDashboard,
  FileText,
  Brain,
  Layers3,
  MessageSquare,
  CalendarDays,
  Settings,
  Sparkles,
} from "lucide-react";

const menu = [
  {
    name: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    name: "AI Notes",
    href: "/dashboard/ai-notes",
    icon: FileText,
  },
  {
    name: "AI Quiz",
    href: "/dashboard/quiz",
    icon: Brain,
  },
  {
    name: "Flashcards",
    href: "/dashboard/flashcards",
    icon: Layers3,
  },
  {
    name: "AI Chat",
    href: "/dashboard/chat",
    icon: MessageSquare,
  },
  {
    name: "Study Planner",
    href: "/dashboard/planner",
    icon: CalendarDays,
  },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside
      className="
      w-72
      h-screen
      sticky
      top-0
      bg-white
      border-r
      border-stone-200
      flex
      flex-col
      shadow-sm
    "
    >
      {/* Logo */}

      <div className="px-8 py-8 border-b border-stone-100">

        <div className="flex items-center gap-4">

          <div
            className="
            w-14
            h-14
            rounded-2xl
            bg-gradient-to-br
            from-violet-600
            to-indigo-600
            flex
            items-center
            justify-center
            shadow-lg
          "
          >
            <Sparkles className="text-white" size={24} />
          </div>

          <div>

            <h1 className="text-3xl font-extrabold tracking-tight text-stone-900">
              NOVA AI
            </h1>

            <p className="text-sm text-stone-500 mt-1">
              AI Study Workspace
            </p>

          </div>

        </div>

      </div>

      {/* Navigation */}

      <nav className="flex-1 px-5 py-6">

        <p className="text-xs uppercase tracking-widest text-stone-400 px-3 mb-4">
          Workspace
        </p>

        <div className="space-y-2">

          {menu.map((item) => {

            const Icon = item.icon;
            const active = pathname === item.href;

            return (

              <Link
                key={item.name}
                href={item.href}
                className={`
                  group
                  flex
                  items-center
                  gap-4
                  px-4
                  py-3.5
                  rounded-2xl
                  font-medium
                  transition-all
                  duration-300

                  ${
                    active
                      ? "bg-gradient-to-r from-violet-600 to-indigo-600 text-white shadow-lg"
                      : "text-stone-700 hover:bg-violet-50 hover:text-violet-700"
                  }
                `}
              >

                <Icon
                  size={21}
                  className={`
                    ${
                      active
                        ? "text-white"
                        : "text-stone-500 group-hover:text-violet-600"
                    }
                  `}
                />

                <span>{item.name}</span>

              </Link>

            );

          })}

        </div>

      </nav>

      {/* Bottom */}

      <div className="p-5 border-t border-stone-100">

        <button
          className="
          w-full
          flex
          items-center
          gap-4
          px-4
          py-3.5
          rounded-2xl
          text-stone-700
          hover:bg-stone-100
          transition
        "
        >

          <Settings size={20} />

          <span>Settings</span>

        </button>

        <div
          className="
          mt-6
          rounded-2xl
          bg-gradient-to-r
          from-violet-600
          to-indigo-600
          p-4
          text-white
        "
        >

          <p className="text-xs uppercase opacity-80">
            NOVA AI
          </p>

          <h3 className="font-bold text-lg mt-1">
            Study Smarter 🚀
          </h3>

          <p className="text-sm opacity-90 mt-1">
            AI-powered learning for university students.
          </p>

        </div>

      </div>

    </aside>
  );
}