import { ReactNode } from "react";

type CardProps = {
  children: ReactNode;
  className?: string;
};

export default function Card({
  children,
  className = "",
}: CardProps) {
  return (
    <div
      className={`
        bg-white
        rounded-3xl
        border
        border-stone-200
        shadow-sm
        p-8
        ${className}
      `}
    >
      {children}
    </div>
  );
}