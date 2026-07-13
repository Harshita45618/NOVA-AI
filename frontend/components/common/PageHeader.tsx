interface Props {
  title: string;
  subtitle: string;
}

export default function PageHeader({
  title,
  subtitle,
}: Props) {
  return (
    <div className="mb-8">

      <h1 className="text-4xl font-bold text-stone-900">
        {title}
      </h1>

      <p className="text-stone-500 mt-2">
        {subtitle}
      </p>

    </div>
  );
}