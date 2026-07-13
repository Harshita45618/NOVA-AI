"use client";

import { Flame } from "lucide-react";

export default function WelcomeCard() {
  return (
    <div className="bg-gradient-to-r from-violet-600 via-indigo-600 to-blue-600 rounded-3xl px-10 py-8 shadow-lg">

      <div className="flex items-center justify-between">

        <div>

          <p className="text-violet-100 text-sm uppercase tracking-wider">

            Welcome Back

          </p>

          <h1 className="text-5xl font-bold text-white mt-2">

            Good Evening, Harshita 👋

          </h1>

          <p className="text-violet-100 mt-4 text-lg">

            Ready to study smarter today?

          </p>

        </div>

        <div className="bg-white/10 rounded-2xl px-6 py-5">

          <div className="flex items-center gap-3">

            <Flame
              className="text-orange-300"
              size={28}
            />

            <div>

              <p className="text-violet-100 text-sm">

                Study Streak

              </p>

              <h2 className="text-3xl font-bold text-white">

                7 Days 🔥

              </h2>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}