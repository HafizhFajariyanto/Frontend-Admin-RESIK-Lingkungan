import type { JenisSampah, StatusSetoran } from "@/types/setoran";

const STATUS_STYLE: Record<StatusSetoran, { dot: string; text: string }> = {
  Berhasil: { dot: "bg-emerald-500", text: "text-emerald-600" },
  Verifikasi: { dot: "bg-orange-400", text: "text-orange-500" },
  Ditolak: { dot: "bg-red-500", text: "text-red-600" },
};

export function StatusBadge({ status }: { status: StatusSetoran }) {
  const s = STATUS_STYLE[status];
  return (
    <span className={`inline-flex items-center gap-1.5 text-xs font-medium ${s.text}`}>
      <span className={`h-1.5 w-1.5 rounded-full ${s.dot}`} />
      {status}
    </span>
  );
}

const JENIS_STYLE: Record<JenisSampah, string> = {
  "PLASTIK PET": "bg-blue-50 text-blue-600",
  "KERTAS/KARDUS": "bg-orange-50 text-orange-600",
  "LOGAM/BESI": "bg-purple-50 text-purple-600",
  LAINNYA: "bg-red-50 text-red-600",
};

export function JenisBadge({ jenis }: { jenis: JenisSampah }) {
  return (
    <span className={`rounded px-2 py-1 text-[10px] font-bold ${JENIS_STYLE[jenis]}`}>{jenis}</span>
  );
}