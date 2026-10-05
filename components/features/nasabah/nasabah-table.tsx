"use client";

import { useMemo, useState } from "react";
import { ChevronLeft, ChevronRight, Edit, Eye, Plus, Search } from "lucide-react";
import Avatar from "@/components/ui/avatar";
import { DAFTAR_NASABAH } from "@/lib/dummy-data";
import { formatRupiah } from "@/lib/utils";

const PER_PAGE = 5;

export default function NasabahTable() {
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);

  const filtered = useMemo(() => {
    const q = query.toLowerCase();
    return DAFTAR_NASABAH.filter(
      (n) => n.nama.toLowerCase().includes(q) || n.id.toLowerCase().includes(q)
    );
  }, [query]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / PER_PAGE));
  const current = Math.min(page, totalPages);
  const start = (current - 1) * PER_PAGE;
  const rows = filtered.slice(start, start + PER_PAGE);

  return (
    <div className="rounded-2xl bg-sand p-4">
      <div className="mb-4 flex flex-wrap items-center gap-3">
        <div className="relative min-w-60 flex-1">
          <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setPage(1);
            }}
            placeholder="Cari nama atau ID nasabah..."
            className="w-full rounded-lg bg-white/80 py-2.5 pl-9 pr-3 text-xs outline-none placeholder:text-gray-400"
          />
        </div>
        <span className="text-xs text-gray-600">Status: Semua</span>
        <span className="text-xs text-gray-600">Periode: 30 Hari Terakhir</span>
        <button className="flex items-center gap-2 rounded-lg bg-forest px-4 py-2.5 text-xs font-semibold text-white">
          <Plus size={14} />
          Tambah Nasabah
        </button>
      </div>

      <div className="overflow-x-auto rounded-xl bg-white/60">
        <table className="w-full min-w-[820px] text-left text-xs">
          <thead className="bg-white text-[10px] uppercase tracking-wide text-gray-500">
            <tr>
              {["ID Nasabah", "Nama Nasabah", "Nomor Telepon", "Alamat", "Saldo", "Total Setoran", "Status", "Aksi"].map((h) => (
                <th key={h} className="px-4 py-3 font-semibold">{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.length === 0 && (
              <tr>
                <td colSpan={8} className="px-4 py-10 text-center text-gray-500">
                  Nasabah tidak ditemukan.
                </td>
              </tr>
            )}
            {rows.map((n) => (
              <tr key={n.id} className="border-t border-black/5">
                <td className="px-4 py-3 font-semibold text-forest">{n.id}</td>
                <td className="px-4 py-3">
                  <div className="flex items-center gap-2">
                    <Avatar name={n.nama} size={30} />
                    <span className="font-semibold text-gray-900">{n.nama}</span>
                  </div>
                </td>
                <td className="px-4 py-3 text-gray-600">{n.telepon}</td>
                <td className="max-w-48 px-4 py-3 text-gray-600">{n.alamat}</td>
                <td className="px-4 py-3 font-bold text-gray-900">{formatRupiah(n.saldo)}</td>
                <td className="px-4 py-3 text-gray-800">{n.totalSetoran.toFixed(1)} kg</td>
                <td className="px-4 py-3">
                  <span
                    className={`rounded-full px-3 py-1 text-[10px] font-semibold ${
                      n.status === "Aktif" ? "bg-emerald-100 text-emerald-700" : "bg-red-100 text-red-600"
                    }`}
                  >
                    {n.status}
                  </span>
                </td>
                <td className="px-4 py-3">
                  <div className="flex items-center gap-3 text-gray-600">
                    <button aria-label="Lihat detail"><Eye size={15} /></button>
                    <button aria-label="Edit"><Edit size={15} /></button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-4 flex flex-wrap items-center justify-between gap-3 text-xs text-gray-600">
        <p>
          Menampilkan {filtered.length === 0 ? 0 : start + 1} hingga {start + rows.length} dari{" "}
          {filtered.length} nasabah
        </p>
        <div className="flex items-center gap-1">
          <button
            onClick={() => setPage(Math.max(1, current - 1))}
            disabled={current === 1}
            className="rounded-lg p-2 disabled:opacity-40"
            aria-label="Sebelumnya"
          >
            <ChevronLeft size={14} />
          </button>
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
            <button
              key={p}
              onClick={() => setPage(p)}
              className={`h-8 w-8 rounded-lg font-semibold ${
                p === current ? "bg-forest text-white" : "text-gray-600"
              }`}
            >
              {p}
            </button>
          ))}
          <button
            onClick={() => setPage(Math.min(totalPages, current + 1))}
            disabled={current === totalPages}
            className="rounded-lg p-2 disabled:opacity-40"
            aria-label="Berikutnya"
          >
            <ChevronRight size={14} />
          </button>
        </div>
      </div>
    </div>
  );
}