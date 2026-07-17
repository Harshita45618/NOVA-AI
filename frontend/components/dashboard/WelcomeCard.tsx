"use client";

import { Flame } from "lucide-react";

export default function WelcomeCard() {
  return (
    <div
      className="
        rounded-3xl
        overflow-hidden
        border
        border-slate-200
        bg-gradient-to-r
        from-sky-100
        via-blue-100
        to-blue-200
        shadow-sm
      "
    >
      <div className="flex items-center justify-between px-10 py-9">
        <div>
          <p className="text-sky-700 uppercase tracking-[0.28em] text-sm font-semibold">
            Welcome Back
          </p>

          <h1 className="text-4xl font-bold text-slate-900 mt-3">
            Good Morning, Harshita 👋
          </h1>

          <p className="text-lg text-slate-600 mt-4">
            Ready to achieve your study goals today?
          </p>
        </div>

        <div
          className="
            hidden
            lg:flex
            items-center
            gap-5
            rounded-3xl
            bg-white/70
            backdrop-blur-md
            border
            border-white/60
            shadow-sm
            px-6
            py-5
          "
        >
          <div className="w-16 h-16 rounded-2xl bg-white flex items-center justify-center">
            <Flame
              size={30}
              className="text-amber-500"
            />
          </div>

          <div>
            <p className="text-slate-500 text-sm">
              Study Streak
            </p>

            <h2 className="text-3xl font-bold text-slate-900">
              7 Days
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}