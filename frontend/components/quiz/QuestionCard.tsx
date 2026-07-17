import { CircleHelp } from "lucide-react";

type Props = {
  question: string;
};

export default function QuestionCard({
  question,
}: Props) {
  return (
    <div className="mb-8 rounded-3xl border border-slate-200 bg-slate-50 p-7">

      <div className="flex items-center gap-3 mb-5">

        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-sky-100">

          <CircleHelp
            size={22}
            className="text-sky-600"
          />

        </div>

        <div>

          <p className="text-xs font-semibold uppercase tracking-wider text-sky-600">
            Question
          </p>

          <p className="text-sm text-slate-500">
            Read carefully before answering.
          </p>

        </div>

      </div>

      <h2 className="text-2xl font-bold leading-9 text-slate-900">

        {question}

      </h2>

    </div>
  );
}