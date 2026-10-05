import { Target, Users, Wallet, ShoppingBag } from "lucide-react";
import StatCard from "@/components/dashboard/stat-card";
import SetoranTerbaru from "@/components/dashboard/setoran-terbaru";
import SetoranChart from "@/components/charts/setoran-chart";
import NasabahBaruChart from "@/components/charts/nasabah-baru-chart";

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <p className="text-sm text-gray-500">Pantau aktivitas dan kinerja Bank Sampah RESIK secara real-time.</p>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <StatCard icon={Users} iconClass="bg-blue-50 text-blue-600" label="Total Nasabah" value="1,240" trend="+12%" />
        <StatCard icon={ShoppingBag} iconClass="bg-emerald-50 text-emerald-700" label="Total Setoran" value="5,420" unit="kg" trend="+8.4%" />
        <StatCard icon={Wallet} iconClass="bg-emerald-50 text-emerald-600" label="Total Saldo" value="Rp 15.2M" trend="+15.2%" />
        <StatCard icon={Target} iconClass="bg-orange-50 text-orange-500" label="Target" value="85%" progress={85} />
      </div>

      <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">
        <SetoranChart />
        <NasabahBaruChart />
      </div>

      <SetoranTerbaru />
    </div>
  );
}