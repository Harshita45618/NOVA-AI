import Button from "../ui/Button";

export default function WelcomeCard() {
  return (
    <div className="rounded-3xl bg-white p-8 shadow-sm">

      <p className="font-semibold text-[#5C7C6F]">
        Welcome Back 👋
      </p>

      <h1 className="mt-3 text-4xl font-bold text-[#2F3437]">
        Good Evening, Harshita
      </h1>

      <p className="mt-4 max-w-xl text-gray-600">
        Ready to continue your learning?
        Let NOVA AI help you summarize notes,
        generate quizzes and organize your study plan.
      </p>

      <div className="mt-8 flex gap-4">
        <Button>AI Notes</Button>

        <Button variant="secondary">
          Generate Quiz
        </Button>
      </div>

    </div>
  );
}