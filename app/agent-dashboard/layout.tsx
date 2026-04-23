import AgentDashboardSidebar from "@/components/agent-dashboard/AgentDashboardSidebar";

export default function AgentDashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col lg:flex-row">
      {/* Sidebar — hidden on mobile, fixed on desktop */}
      <AgentDashboardSidebar />

      {/* Main content — responsive padding/margin */}
      <main className="flex-1 lg:ml-64 min-h-screen overflow-y-auto pt-16 lg:pt-10 px-4 sm:px-6">
        {children}
      </main>
    </div>

  );
}
