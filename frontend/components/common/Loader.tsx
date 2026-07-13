import { LoaderCircle } from "lucide-react";

export default function Loader() {
  return (
    <div className="flex flex-col items-center justify-center py-16">

      <LoaderCircle
        className="animate-spin text-violet-600"
        size={55}
      />

      <h2 className="text-2xl font-bold mt-6">
        NOVA AI is Thinking...
      </h2>

    </div>
  );
}