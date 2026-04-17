import BuyerDashboardSidebar from "@/components/buyer-dashboard/BuyerDashboardSidebar";

export default function BuyerDashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-gray-50 flex">
      <BuyerDashboardSidebar />
      <main className="flex-1 ml-64 min-h-screen overflow-y-auto">
        {children}
      </main>
    </div>
  );
}
