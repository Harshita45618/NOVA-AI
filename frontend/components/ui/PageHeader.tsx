import { ReactNode } from "react";

type PageHeaderProps = {
  title: string;
  subtitle: string;
  rightContent?: ReactNode;
};

export default function PageHeader({
  title,
  subtitle,
  rightContent,
}: PageHeaderProps) {
  return (
    <div className="flex justify-between items-center mb-10">

      <div>

        <h1 className="text-4xl font-bold text-stone-800">
          {title}
        </h1>

        <p className="mt-2 text-stone-500">
          {subtitle}
        </p>

      </div>

      {rightContent}

    </div>
  );
}