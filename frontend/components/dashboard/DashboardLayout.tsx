import { ReactNode } from "react";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";

type DashboardLayoutProps = {
  children: ReactNode;
};

export default function DashboardLayout({
  children,
}: DashboardLayoutProps) {
  return (
    <main className="min-h-screen bg-[#F8F7F4] flex">
      <Sidebar />

      <div className="flex-1 p-8">
        <Topbar />

        <div className="mt-8">
          {children}
        </div>
      </div>
    </main>
  );
}