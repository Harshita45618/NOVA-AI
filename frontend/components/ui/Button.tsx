import React from "react";

type ButtonProps = {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  onClick?: () => void;
};

export default function Button({
  children,
  variant = "primary",
  onClick,
}: ButtonProps) {
  const baseStyle =
    "inline-flex items-center justify-center rounded-2xl px-6 py-3 font-semibold transition-all duration-300 cursor-pointer";

  const variants = {
    primary:
      "bg-[#5C7C6F] text-white shadow-md hover:-translate-y-1 hover:shadow-xl hover:bg-[#4E6C61]",

    secondary:
      "border border-[#D8D8D8] bg-white text-[#2F3437] hover:bg-gray-50 hover:-translate-y-1 hover:scale-105",
  };

  return (
    <button
      onClick={onClick}
      className={`${baseStyle} ${variants[variant]}`}
    >
      {children}
    </button>
  );
}