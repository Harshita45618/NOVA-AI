"use client";

import { ReactNode } from "react";
import Sidebar from "./Sidebar";

type DashboardLayoutProps = {
  children: ReactNode;
};

export default function DashboardLayout({
  children,
}: DashboardLayoutProps) {
  return (
    <div className="min-h-screen bg-slate-50 flex">

      {/* Sidebar */}

      <Sidebar />

      {/* Main Content */}

      <main className="flex-1 overflow-y-auto">

        <div className="max-w-[1700px] mx-auto px-10 py-8">

          {children}

        </div>

      </main>

    </div>
  );
}