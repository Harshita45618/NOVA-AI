import Link from "next/link";
import {
  FileText,
  Brain,
  BookOpen,
  CalendarDays,
} from "lucide-react";

const actions = [
  {
    title: "Generate Notes",
    icon: FileText,
    href: "/dashboard/ai-notes",
    color: "bg-sky-100",
    iconColor: "text-sky-600",
  },
  {
    title: "Practice Quiz",
    icon: Brain,
    href: "/dashboard/quiz",
    color: "bg-indigo-100",
    iconColor: "text-indigo-600",
  },
  {
    title: "Study Assistant",
    icon: BookOpen,
    href: "/dashboard/chat",
    color: "bg-emerald-100",
    iconColor: "text-emerald-600",
  },
  {
    title: "Study Planner",
    icon: CalendarDays,
    href: "/dashboard/planner",
    color: "bg-amber-100",
    iconColor: "text-amber-600",
  },
];

export default function QuickActions() {
  return (
    <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-8">

      <div className="flex items-center justify-between mb-8">

        <div>

          <h2 className="text-2xl font-bold text-slate-900">
            Quick Actions
          </h2>

          <p className="text-slate-500 mt-1">
            Jump straight into your most-used tools.
          </p>

        </div>

      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">

        {actions.map((action) => {

          const Icon = action.icon;

          return (

            <Link
              key={action.title}
              href={action.href}
              className="
                group
                rounded-3xl
                border
                border-slate-200
                bg-slate-50
                p-6
                transition-all
                duration-300
                hover:bg-white
                hover:shadow-lg
                hover:-translate-y-1
              "
            >

              <div
                className={`
                  w-14
                  h-14
                  rounded-2xl
                  ${action.color}
                  flex
                  items-center
                  justify-center
                  transition-all
                  duration-300
                  group-hover:scale-105
                `}
              >
                <Icon
                  className={action.iconColor}
                  size={26}
                />
              </div>

              <h3 className="mt-5 font-bold text-slate-900 group-hover:text-sky-600 transition-colors">
                {action.title}
              </h3>

              <p className="text-sm text-slate-500 mt-2">
                Open module
              </p>

            </Link>

          );

        })}

      </div>

    </div>
  );
}