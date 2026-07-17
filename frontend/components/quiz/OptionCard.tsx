"use client";

import { CheckCircle2 } from "lucide-react";

type Props = {
  option: string;
  selected: boolean;
  onClick: () => void;
};

export default function OptionCard({
  option,
  selected,
  onClick,
}: Props) {
  return (
    <button
      onClick={onClick}
      className={`
        w-full
        text-left
        p-5
        rounded-2xl
        border
        transition-all
        duration-300
        group

        ${
          selected
            ? `
              border-sky-500
              bg-sky-50
              shadow-sm
            `
            : `
              border-slate-200
              bg-white
              hover:border-sky-300
              hover:bg-sky-50
              hover:shadow-sm
            `
        }
      `}
    >
      <div className="flex items-center justify-between gap-4">

        <div className="flex items-center gap-4">

          <div
            className={`
              flex
              h-8
              w-8
              items-center
              justify-center
              rounded-full
              text-sm
              font-bold
              transition-all

              ${
                selected
                  ? "bg-sky-500 text-white"
                  : "bg-slate-100 text-slate-600 group-hover:bg-sky-100 group-hover:text-sky-700"
              }
            `}
          >
            •
          </div>

          <span
            className={`
              text-lg
              font-medium
              transition-colors

              ${
                selected
                  ? "text-slate-900"
                  : "text-slate-700"
              }
            `}
          >
            {option}
          </span>

        </div>

        <div className="flex items-center">

          {selected && (
            <CheckCircle2
              className="text-sky-600"
              size={24}
            />
          )}

        </div>

      </div>
    </button>
  );
}