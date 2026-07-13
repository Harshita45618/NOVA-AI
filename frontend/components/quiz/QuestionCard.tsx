type Props = {
  question: string;
};

export default function QuestionCard({
  question,
}: Props) {
  return (
    <div className="bg-stone-50 rounded-2xl border border-stone-200 p-6 mb-8">

      <h2 className="text-2xl font-bold text-stone-900">

        {question}

      </h2>

    </div>
  );
}