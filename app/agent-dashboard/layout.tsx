import AgentDashboardSidebar from "@/components/agent-dashboard/AgentDashboardSidebar";

export default function AgentDashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar — fixed 256px */}
      <AgentDashboardSidebar />

      {/* Main content — offset by sidebar width */}
      <main className="flex-1 ml-64 min-h-screen overflow-y-auto pt-10 px-6">
        {children}
      </main>
    </div>
  );
}
