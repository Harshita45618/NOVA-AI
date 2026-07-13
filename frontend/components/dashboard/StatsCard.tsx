import { LucideIcon } from "lucide-react";

type Props = {
  title: string;
  value: string;
  icon: LucideIcon;
  color: string;
};

export default function StatsCard({
  title,
  value,
  icon: Icon,
  color,
}: Props) {
  return (
    <div
      className="
        bg-white
        rounded-3xl
        border
        border-stone-200
        shadow-sm
        hover:shadow-md
        transition-all
        p-6
      "
    >
      <div className="flex items-center justify-between">

        <div>

          <p className="text-sm font-medium text-stone-500">
            {title}
          </p>

          <h2 className="mt-2 text-4xl font-bold text-stone-900">
            {value}
          </h2>

        </div>

        <div
          className={`
            w-16
            h-16
            rounded-2xl
            flex
            items-center
            justify-center
            ${color}
          `}
        >
          <Icon
            size={30}
            className="text-white"
          />
        </div>

      </div>
    </div>
  );
}