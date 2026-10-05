import { RefreshCw, UserCheck, UserPlus, Users } from "lucide-react";

const STATS = [
  { label: "Total Nasabah", value: "1,240", icon: Users, cls: "bg-blue-50 text-blue-600" },
  { label: "Nasabah Aktif", value: "1,100", icon: UserCheck, cls: "bg-emerald-50 text-emerald-600" },
  { label: "Nasabah Baru", value: "45", icon: UserPlus, cls: "bg-orange-50 text-orange-500" },
  { label: "Total Transaksi", value: "3,200", icon: RefreshCw, cls: "bg-purple-50 text-purple-600" },
];

export default function NasabahStats() {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
      {STATS.map(({ label, value, icon: Icon, cls }) => (
        <div key={label} className="flex items-center gap-3 rounded-2xl bg-sand p-4">
          <div className={`rounded-xl p-2.5 ${cls}`}>
            <Icon size={18} />
          </div>
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-wide text-gray-500">{label}</p>
            <p className="text-xl font-bold text-forest">{value}</p>
          </div>
        </div>
      ))}
    </div>
  );
}