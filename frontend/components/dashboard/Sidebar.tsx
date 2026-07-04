export default function Sidebar() {
  return (
    <aside className="w-72 bg-white border-r border-gray-200 p-6">

      <h1 className="text-3xl font-bold">
        🚀 NOVA AI
      </h1>

      <p className="text-gray-500 mt-1">
        Student Workspace
      </p>

      <nav className="mt-12 flex flex-col gap-4">

        <button className="rounded-xl bg-[#5C7C6F] text-white px-4 py-3 text-left">
          🏠 Dashboard
        </button>

        <button className="text-left px-4 py-3 rounded-xl hover:bg-gray-100">
          📄 AI Notes
        </button>

        <button className="text-left px-4 py-3 rounded-xl hover:bg-gray-100">
          ❓ Quiz Generator
        </button>

        <button className="text-left px-4 py-3 rounded-xl hover:bg-gray-100">
          📅 Study Planner
        </button>

        <button className="text-left px-4 py-3 rounded-xl hover:bg-gray-100">
          🧠 AI Chat
        </button>

      </nav>

    </aside>
  );
}