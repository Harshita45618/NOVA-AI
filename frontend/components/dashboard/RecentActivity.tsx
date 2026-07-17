import {
  FileText,
  Brain,
  MessageCircle,
  CalendarDays,
} from "lucide-react";

const activities = [
  {
    title: "Operating Systems Summary",
    time: "2 mins ago",
    icon: FileText,
    color: "bg-sky-100 text-sky-600",
  },
  {
    title: "DBMS Quiz Completed",
    time: "20 mins ago",
    icon: Brain,
    color: "bg-indigo-100 text-indigo-600",
  },
  {
    title: "Study Assistant Session",
    time: "Yesterday",
    icon: MessageCircle,
    color: "bg-emerald-100 text-emerald-600",
  },
  {
    title: "Study Plan Generated",
    time: "Yesterday",
    icon: CalendarDays,
    color: "bg-amber-100 text-amber-600",
  },
];

export default function RecentActivity() {
  return (
    <div
      className="
        bg-white
        rounded-3xl
        border
        border-slate-200
        shadow-sm
        p-8
        h-full
      "
    >
      <h2 className="text-2xl font-bold text-slate-900 mb-8">
        Recent Activity
      </h2>

      <div className="space-y-6">
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
                transition-all
                duration-300
                hover:bg-slate-50
              "
            >
              <div
                className={`
                  w-14
                  h-14
                  rounded-2xl
                  flex
                  items-center
                  justify-center
                  ${activity.color}
                `}
              >
                <Icon size={24} />
              </div>

              <div className="flex-1">
                <h3 className="font-semibold text-slate-900">
                  {activity.title}
                </h3>

                <p className="text-sm text-slate-500 mt-1">
                  {activity.time}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}