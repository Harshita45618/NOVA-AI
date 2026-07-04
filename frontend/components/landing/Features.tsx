import Container from "../common/Container";

const features = [
  {
    icon: "📄",
    title: "AI Notes",
    description: "Convert long notes into concise summaries in seconds.",
  },
  {
    icon: "❓",
    title: "Quiz Generator",
    description: "Generate practice quizzes instantly from your notes.",
  },
  {
    icon: "📅",
    title: "Study Planner",
    description: "Create a personalized timetable based on your goals.",
  },
  {
    icon: "🧠",
    title: "AI Study Assistant",
    description: "Ask questions and receive instant AI-powered answers.",
  },
];

export default function Features() {
  return (
    <section className="py-28">
      <Container>

        <div className="text-center mb-16">

          <p className="text-[#5C7C6F] font-semibold">
            FEATURES
          </p>

          <h2 className="mt-4 text-5xl font-bold text-[#2F3437] leading-tight">
            Everything You Need
            <br />
            To Study Smarter
          </h2>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {features.map((feature) => (

            <div
              key={feature.title}
              className="rounded-3xl bg-white p-8 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >

              <div className="text-4xl mb-6">
                {feature.icon}
              </div>

             <h3 className="mb-4 text-2xl font-semibold text-[#2F3437]">
                {feature.title}
              </h3>

              <p className="leading-7 text-[#5B6470]">
                {feature.description}
              </p>

            </div>

          ))}

        </div>

      </Container>
    </section>
  );
}