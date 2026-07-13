import Button from "../common/Button";
import Container from "../common/Container";

export default function Hero() {
  return (
    <section className="relative py-28">
        <div className="absolute left-0 right-0 top-20 -z-10 mx-auto h-96 w-96 rounded-full bg-[#E8F0EB] blur-3xl opacity-70"></div>
      <Container>
        <div className="max-w-3xl">

          <p className="text-[#5C7C6F] font-semibold mb-4">
            AI-Powered Study Workspace
          </p>

          <h1 className="text-6xl font-extrabold text-[#2F3437] leading-tight">
            Study Smarter.
            <br />
            Not Harder.
          </h1>

          <p className="mt-8 text-xl text-gray-600 leading-8">
            Summarize notes, generate quizzes, organize study
            material and learn faster with your personal AI study
            companion.
          </p>

          <div className="flex gap-4 mt-10">
            <Button>
              Get Started Free
            </Button>

            <Button
  className="bg-white text-violet-600 border border-violet-600 hover:bg-violet-50"
>
  Watch Demo
</Button>
          </div>

        </div>
      </Container>
    </section>
  );
}