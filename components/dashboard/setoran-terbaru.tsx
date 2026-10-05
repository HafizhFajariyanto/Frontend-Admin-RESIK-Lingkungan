import Link from "next/link";
import { MoreVertical } from "lucide-react";
import Avatar from "@/components/ui/avatar";
import { JenisBadge, StatusBadge } from "@/components/features/setoran/status-badge";
import { SETORAN_TERBARU } from "@/lib/dummy-data";

export default function SetoranTerbaru() {
  return (
    <div className="rounded-2xl bg-white shadow-sm">
      <div className="flex items-center justify-between p-5">
        <div>
          <h3 className="text-sm font-bold text-forest">Setoran Terbaru</h3>
          <p className="text-[11px] text-gray-500">Menampilkan 5 aktivitas setoran sampah terakhir.</p>
        </div>
        <Link href="/setoran" className="text-xs font-semibold text-forest">
          Lihat Semua
        </Link>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full min-w-[720px] text-left text-xs">
          <thead className="bg-gray-50 text-[10px] uppercase tracking-wide text-gray-500">
            <tr>
              {["Nasabah", "Jenis Sampah", "Berat", "Poin", "Status", "Tanggal", "Aksi"].map((h) => (
                <th key={h} className="px-5 py-3 font-semibold">{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {SETORAN_TERBARU.map((s) => (
              <tr key={s.id} className="border-t border-gray-100">
                <td className="px-5 py-3">
                  <div className="flex items-center gap-3">
                    <Avatar name={s.nasabah} size={30} />
                    <div className="leading-tight">
                      <p className="font-semibold text-gray-900">{s.nasabah}</p>
                      <p className="text-[10px] text-gray-400">{s.nasabahId}</p>
                    </div>
                  </div>
                </td>
                <td className="px-5 py-3"><JenisBadge jenis={s.jenis} /></td>
                <td className="px-5 py-3 text-gray-800">{s.berat.toFixed(1)} kg</td>
                <td className="px-5 py-3 font-bold text-forest">{s.poin.toLocaleString("en-US")} pts</td>
                <td className="px-5 py-3"><StatusBadge status={s.status} /></td>
                <td className="px-5 py-3 text-gray-500">{s.tanggal}</td>
                <td className="px-5 py-3 text-gray-500"><MoreVertical size={14} /></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}