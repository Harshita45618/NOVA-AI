import {
  FileText,
  Brain,
  MessageCircle,
  CalendarDays,
} from "lucide-react";

const activities = [
  {
    title: "Operating Systems Summary",
    subtitle: "AI Notes",
    time: "2 mins ago",
    icon: FileText,
    color: "bg-violet-100 text-violet-600",
  },
  {
    title: "DBMS Quiz Completed",
    subtitle: "AI Quiz",
    time: "20 mins ago",
    icon: Brain,
    color: "bg-blue-100 text-blue-600",
  },
  {
    title: "AI Chat Session",
    subtitle: "AI Chat",
    time: "Yesterday",
    icon: MessageCircle,
    color: "bg-green-100 text-green-600",
  },
  {
    title: "Study Plan Generated",
    subtitle: "Planner",
    time: "Yesterday",
    icon: CalendarDays,
    color: "bg-orange-100 text-orange-600",
  },
];

export default function RecentActivity() {
  return (
    <div className="bg-white rounded-3xl border border-stone-200 shadow-sm p-8 h-full">

      <h2 className="text-2xl font-bold text-stone-900">
        Recent Activity
      </h2>

      <p className="text-stone-500 mt-1 mb-6">
        Your latest learning activities.
      </p>

      <div className="space-y-5">

        {activities.map((activity) => {
          const Icon = activity.icon;

          return (
            <div
              key={activity.title}
              className="
                flex
                items-center
                gap-4
                rounded-2xl
                p-3
                hover:bg-stone-50
                transition
              "
            >

              <div
                className={`w-12 h-12 rounded-xl flex items-center justify-center ${activity.color}`}
              >
                <Icon size={22} />
              </div>

              <div className="flex-1">

                <h3 className="font-semibold text-stone-900">
                  {activity.title}
                </h3>

                <p className="text-sm text-stone-500">
                  {activity.subtitle}
                </p>

              </div>

              <span className="text-xs text-stone-400 whitespace-nowrap">
                {activity.time}
              </span>

            </div>
          );
        })}

      </div>

    </div>
  );
}