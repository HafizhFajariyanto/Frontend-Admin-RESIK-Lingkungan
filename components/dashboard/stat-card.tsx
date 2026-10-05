import type { LucideIcon } from "lucide-react";
import { TrendingUp } from "lucide-react";

type Props = {
  icon: LucideIcon;
  iconClass: string; // contoh: "bg-blue-50 text-blue-600"
  label: string;
  value: string;
  unit?: string;
  trend?: string;
  progress?: number; // 0 - 100
};

export default function StatCard({ icon: Icon, iconClass, label, value, unit, trend, progress }: Props) {
  return (
    <div className="rounded-2xl bg-white p-5 shadow-sm">
      <div className="mb-4 flex items-start justify-between">
        <div className={`rounded-xl p-2.5 ${iconClass}`}>
          <Icon size={18} />
        </div>
        {trend ? (
          <span className="flex items-center gap-1 text-[11px] font-semibold text-emerald-600">
            <TrendingUp size={12} />
            {trend}
          </span>
        ) : (
          <span className="text-[11px] font-semibold text-gray-500">vs target</span>
        )}
      </div>
      <p className="text-xs text-gray-500">{label}</p>
      <p className="text-2xl font-bold text-forest">
        {value}
        {unit && <span className="ml-1 text-xs font-normal text-gray-500">{unit}</span>}
      </p>
      {progress !== undefined && (
        <div className="mt-3 h-1.5 w-full rounded-full bg-gray-200">
          <div className="h-full rounded-full bg-emerald-600" style={{ width: `${progress}%` }} />
        </div>
      )}
    </div>
  );
}