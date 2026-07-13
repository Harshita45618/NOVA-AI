"use client";

import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  loading?: boolean;
  variant?: "primary" | "secondary";
}

export default function Button({
  children,
  loading,
  variant = "primary",
  className = "",
  ...props
}: ButtonProps) {
  const styles =
    variant === "primary"
      ? "bg-violet-600 text-white hover:bg-violet-700"
      : "bg-white text-violet-600 border border-violet-600 hover:bg-violet-50";

  return (
    <button
      {...props}
      disabled={loading || props.disabled}
      className={`
        px-6
        py-3
        rounded-xl
        font-semibold
        transition
        disabled:opacity-50
        ${styles}
        ${className}
      `}
    >
      {loading ? "Loading..." : children}
    </button>
  );
}