"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full border-b bg-white">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-8 py-5">

        <h1 className="text-3xl font-bold text-violet-600">
          NOVA AI
        </h1>

        <div className="flex gap-8">

          <Link href="/">Home</Link>

          <Link href="/dashboard">Dashboard</Link>

          <Link href="/dashboard/ai-notes">
            AI Notes
          </Link>

        </div>

      </div>
    </nav>
  );
}