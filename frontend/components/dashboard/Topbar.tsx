export default function Topbar() {
  return (
    <div className="flex items-center justify-between">

      <input
        type="text"
        placeholder="Search notes..."
        className="w-96 rounded-2xl border border-gray-300 bg-white px-5 py-3 outline-none"
      />

      <div className="flex items-center gap-4">

        <button className="text-2xl">
          🔔
        </button>

        <div className="w-12 h-12 rounded-full bg-[#5C7C6F] flex items-center justify-center text-white font-bold">
          H
        </div>

      </div>

    </div>
  );
}