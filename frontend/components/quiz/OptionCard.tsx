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
        border-2
        transition-all
        duration-200

        ${
          selected
            ? "border-violet-600 bg-violet-50"
            : "border-stone-200 hover:border-violet-300 hover:bg-violet-50"
        }
      `}
    >
      <div className="flex justify-between items-center">

        <span className="text-lg font-medium">
          {option}
        </span>

        {selected && (
          <CheckCircle2
            className="text-violet-600"
            size={24}
          />
        )}

      </div>
    </button>
  );
}