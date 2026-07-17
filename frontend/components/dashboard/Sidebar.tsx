"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  LayoutDashboard,
  FileText,
  Brain,
  Layers3,
  BookOpen,
  CalendarDays,
  Settings,
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
    name: "Study Assistant",
    href: "/dashboard/chat",
    icon: BookOpen,
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
    <aside className="w-72 bg-white border-r border-slate-200 flex flex-col">

      {/* Logo */}

      <div className="px-7 py-8 border-b border-slate-200">

        <div className="flex items-center gap-4">

          <div
            className="
              w-12
              h-12
              rounded-2xl
              bg-gradient-to-br
              from-sky-400
              to-blue-500
              flex
              items-center
              justify-center
              shadow-sm
            "
          >
            <span className="text-white text-xl font-bold">
              ✦
            </span>
          </div>

          <div>

            <h1 className="text-xl font-bold text-slate-900">
              NOVA AI
            </h1>

            <p className="text-xs text-slate-500 mt-1">
              Intelligent Study Workspace
            </p>

          </div>

        </div>

      </div>

      {/* Navigation */}

      <nav className="flex-1 px-5 py-6">

        <div className="space-y-1.5">

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
                  gap-3
                  rounded-2xl
                  px-4
                  py-3.5
                  transition-all
                  duration-300

                  ${
                    active
                      ? "bg-sky-50 border border-sky-100 text-sky-700 shadow-sm"
                      : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                  }
                `}
              >

                <Icon
                  size={20}
                  className={`
                    transition-colors
                    ${
                      active
                        ? "text-sky-600"
                        : "text-slate-500 group-hover:text-slate-700"
                    }
                  `}
                />

                <span className="font-medium">
                  {item.name}
                </span>

              </Link>

            );

          })}

        </div>

      </nav>

      {/* Bottom */}

      <div className="border-t border-slate-200 p-5">

        <button
          className="
            w-full
            flex
            items-center
            gap-3
            rounded-2xl
            px-4
            py-3.5
            text-slate-600
            hover:bg-slate-50
            hover:text-slate-900
            transition-all
            duration-300
          "
        >
          <Settings
            size={20}
            className="text-slate-500"
          />

          <span className="font-medium">
            Settings
          </span>

        </button>

      </div>

    </aside>
  );
}