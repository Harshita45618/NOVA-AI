import { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
};

export default function Button({
  children,
  className = "",
  ...props
}: ButtonProps) {
  return (
    <button
      {...props}
      className={`
        flex
        items-center
        justify-center
        gap-2
        px-6
        py-3
        rounded-2xl
        font-semibold
        transition
        bg-gradient-to-r
        from-[#5C7C6F]
        to-[#6B9080]
        text-white
        hover:scale-[1.02]
        disabled:opacity-50
        disabled:cursor-not-allowed
        ${className}
      `}
    >
      {children}
    </button>
  );
}