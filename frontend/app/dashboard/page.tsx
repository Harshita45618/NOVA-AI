import DashboardLayout from "@/components/dashboard/DashboardLayout";
import WelcomeCard from "@/components/dashboard/WelcomeCard";
import StudyProgress from "@/components/dashboard/StudyProgress";
import RecentNotes from "@/components/dashboard/RecentNotes";
import QuickActions from "@/components/dashboard/QuickActions";
import StudyStreak from "@/components/dashboard/StudyStreak";

export default function Dashboard() {
  return (
    <DashboardLayout>
      <div className="grid grid-cols-12 gap-6">

        <div className="col-span-12">
          <WelcomeCard />
        </div>

        <div className="col-span-8">
          <RecentNotes />
        </div>

        <div className="col-span-4">
          <StudyProgress />
        </div>

        <div className="col-span-6">
          <QuickActions />
        </div>

        <div className="col-span-6">
          <StudyStreak />
        </div>

      </div>
    </DashboardLayout>
  );
}