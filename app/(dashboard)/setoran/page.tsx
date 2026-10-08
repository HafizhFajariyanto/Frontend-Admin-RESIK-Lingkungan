"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import {
  Search,
  Plus,
  Eye,
  Edit,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const BULAN: Record<string, string> = {
  Jan: "01", Feb: "02", Mar: "03", Apr: "04", Mei: "05", Jun: "06",
  Jul: "07", Agu: "08", Sep: "09", Okt: "10", Nov: "11", Des: "12",
};

// "24 Okt 2023, 10:15" -> "2023-10-24"
function tanggalToISO(tanggal: string) {
  const [d, b, y] = tanggal.split(",")[0].trim().split(" ");
  return `${y}-${BULAN[b] ?? "01"}-${d.padStart(2, "0")}`;
}

export default function KelolaSetoranPage() {
  // State Filter & Search
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedJenis, setSelectedJenis] = useState("Semua");
  const [selectedStatus, setSelectedStatus] = useState("Semua");
  const [selectedDate, setSelectedDate] = useState(""); // format YYYY-MM-DD

  // State Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5; // Jumlah data per halaman

  // Data Dummy Lebih Banyak untuk Simulasi Berpindah Halaman
  const initialData = [
    // Page 1
    {
      id: "STR-9921",
      nasabah: "Siti Aminah",
      nsbId: "NSB-0421",
      avatar:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=100",
      jenis: "PLASTIK",
      jenisBg: "bg-blue-100 text-blue-600",
      berat: "12.5 kg",
      poin: "1,250 pts",
      tanggal: "24 Okt 2023, 10:15",
      status: "Berhasil",
    },
    {
      id: "STR-9922",
      nasabah: "Budi Santoso",
      nsbId: "NSB-0512",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=100",
      jenis: "KARDUS",
      jenisBg: "bg-orange-100 text-orange-600",
      berat: "5.2 kg",
      poin: "520 pts",
      tanggal: "24 Okt 2023, 11:30",
      status: "Verifikasi",
    },
    {
      id: "STR-9923",
      nasabah: "Maya Lestari",
      nsbId: "NSB-0489",
      avatar:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=100",
      jenis: "MINYAK JELANTAH",
      jenisBg: "bg-amber-100 text-amber-700",
      berat: "2.0 kg",
      poin: "800 pts",
      tanggal: "23 Okt 2023, 09:45",
      status: "Berhasil",
    },
    {
      id: "STR-9924",
      nasabah: "Rendi Wijaya",
      nsbId: "NSB-0318",
      avatar:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=100",
      jenis: "KARDUS",
      jenisBg: "bg-orange-100 text-orange-600",
      berat: "3.8 kg",
      poin: "152 pts",
      tanggal: "23 Okt 2023, 14:20",
      status: "Ditolak",
    },
    {
      id: "STR-9925",
      nasabah: "Diana Putri",
      nsbId: "NSB-0622",
      avatar:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=100",
      jenis: "PLASTIK",
      jenisBg: "bg-blue-100 text-blue-600",
      berat: "25.0 kg",
      poin: "2,500 pts",
      tanggal: "22 Okt 2023, 16:05",
      status: "Berhasil",
    },

    // Page 2
    {
      id: "STR-9926",
      nasabah: "Ahmad Dahlan",
      nsbId: "NSB-0101",
      avatar:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=100",
      jenis: "KARDUS",
      jenisBg: "bg-orange-100 text-orange-600",
      berat: "8.0 kg",
      poin: "800 pts",
      tanggal: "22 Okt 2023, 08:30",
      status: "Berhasil",
    },
    {
      id: "STR-9927",
      nasabah: "Siska Pratama",
      nsbId: "NSB-0205",
      avatar:
        "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=100",
      jenis: "PLASTIK",
      jenisBg: "bg-blue-100 text-blue-600",
      berat: "15.0 kg",
      poin: "1,500 pts",
      tanggal: "21 Okt 2023, 13:10",
      status: "Verifikasi",
    },
    {
      id: "STR-9928",
      nasabah: "Eko Prasetyo",
      nsbId: "NSB-0312",
      avatar:
        "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=100",
      jenis: "MINYAK JELANTAH",
      jenisBg: "bg-amber-100 text-amber-700",
      berat: "4.5 kg",
      poin: "1,800 pts",
      tanggal: "21 Okt 2023, 15:45",
      status: "Berhasil",
    },
    {
      id: "STR-9929",
      nasabah: "Dewi Kurnia",
      nsbId: "NSB-0419",
      avatar:
        "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=100",
      jenis: "KARDUS",
      jenisBg: "bg-orange-100 text-orange-600",
      berat: "2.5 kg",
      poin: "100 pts",
      tanggal: "20 Okt 2023, 11:20",
      status: "Ditolak",
    },
    {
      id: "STR-9930",
      nasabah: "Fajar Nugraha",
      nsbId: "NSB-0550",
      avatar:
        "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=100",
      jenis: "PLASTIK",
      jenisBg: "bg-blue-100 text-blue-600",
      berat: "10.0 kg",
      poin: "1,000 pts",
      tanggal: "20 Okt 2023, 14:00",
      status: "Berhasil",
    },

    // Page 3
    {
      id: "STR-9931",
      nasabah: "Gita Gutawa",
      nsbId: "NSB-0601",
      avatar:
        "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=100",
      jenis: "KARDUS",
      jenisBg: "bg-orange-100 text-orange-600",
      berat: "3.0 kg",
      poin: "300 pts",
      tanggal: "19 Okt 2023, 09:15",
      status: "Berhasil",
    },
    {
      id: "STR-9932",
      nasabah: "Hadi Sucipto",
      nsbId: "NSB-0710",
      avatar:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=100",
      jenis: "MINYAK JELANTAH",
      jenisBg: "bg-amber-100 text-amber-700",
      berat: "1.2 kg",
      poin: "480 pts",
      tanggal: "19 Okt 2023, 10:50",
      status: "Verifikasi",
    },
  ];

  // 1. Filter Data Berdasarkan Input Search & Dropdown
  const filteredData = useMemo(() => {
    return initialData.filter((item) => {
      const matchesSearch =
        item.nasabah.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.id.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesJenis =
        selectedJenis === "Semua" ||
        item.jenis.toUpperCase() === selectedJenis.toUpperCase();

      const matchesStatus =
        selectedStatus === "Semua" ||
        item.status.toUpperCase() === selectedStatus.toUpperCase();

      const matchesDate =
        !selectedDate || tanggalToISO(item.tanggal) === selectedDate;

      return matchesSearch && matchesJenis && matchesStatus && matchesDate;
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchQuery, selectedJenis, selectedStatus, selectedDate]);

  // Total Halaman Berdasarkan Data Hasil Filter
  const totalPages = Math.ceil(filteredData.length / itemsPerPage) || 1;

  // 2. Potong Data Sesuai Halaman yang Sedang Aktif (Slice)
  const paginatedData = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    return filteredData.slice(startIndex, startIndex + itemsPerPage);
  }, [filteredData, currentPage]);

  // Handler Perubahan Halaman (Otomatis Reset Halaman Saat Filter Berubah)
  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    setCurrentPage(1); // Reset ke halaman 1 saat nyari
  };

  const handleJenisChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedJenis(e.target.value);
    setCurrentPage(1); // Reset ke halaman 1
  };

  const handleStatusChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedStatus(e.target.value);
    setCurrentPage(1); // Reset ke halaman 1
  };

  return (
    <div className="p-6 space-y-4">
      {/* Header Halaman */}
      <div>
        <div className="flex items-center gap-2 text-[11px] text-gray-500 font-medium">
          <span>Kelola Setoran</span>
          <span>&gt;</span>
          <span className="text-emerald-800 font-bold">Daftar</span>
        </div>
        <h1 className="text-xl font-bold text-gray-900 leading-tight mt-1">
          Kelola Setoran
        </h1>
        <p className="text-xs text-gray-500 mt-1">
          Kelola data setoran sampah nasabah.
        </p>
      </div>

      {/* Card Table Container */}
      <div className="bg-[#EFE4C8] rounded-2xl p-4 border border-[#E5D7B3] space-y-4">
        {/* Filter & Tombol Tambah */}
        <div className="flex flex-wrap items-center justify-between gap-3 text-xs">
          <div className="flex flex-wrap items-center gap-3 flex-1">
            <div className="relative flex-1 min-w-[220px]">
              <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Cari nasabah atau ID setoran..."
                value={searchQuery}
                onChange={handleSearchChange}
                className="w-full bg-white text-xs pl-8 pr-3 py-2 rounded-xl border border-gray-200 focus:outline-none"
              />
            </div>

            <div className="flex items-center gap-1">
              <input
                type="date"
                value={selectedDate}
                onChange={(e) => {
                  setSelectedDate(e.target.value);
                  setCurrentPage(1);
                }}
                aria-label="Pilih tanggal"
                className="px-3 py-2 bg-[#E5D7B3]/60 rounded-xl font-semibold text-gray-700 focus:outline-none cursor-pointer hover:bg-[#E5D7B3]"
              />
              {selectedDate && (
                <button
                  onClick={() => {
                    setSelectedDate("");
                    setCurrentPage(1);
                  }}
                  className="px-2 py-2 text-[11px] font-bold text-rose-600 hover:underline"
                >
                  Reset
                </button>
              )}
            </div>

            <select
              value={selectedJenis}
              onChange={handleJenisChange}
              className="px-3 py-2 bg-[#E5D7B3]/60 rounded-xl font-semibold text-gray-700 border-none focus:outline-none cursor-pointer hover:bg-[#E5D7B3]"
            >
              <option value="Semua">Jenis: Semua</option>
              <option value="PLASTIK">Jenis: Plastik</option>
              <option value="KARDUS">Jenis: Kardus</option>
              <option value="MINYAK JELANTAH">Jenis: Minyak Jelantah</option>
            </select>

            <select
              value={selectedStatus}
              onChange={handleStatusChange}
              className="px-3 py-2 bg-[#E5D7B3]/60 rounded-xl font-semibold text-gray-700 border-none focus:outline-none cursor-pointer hover:bg-[#E5D7B3]"
            >
              <option value="Semua">Status: Semua</option>
              <option value="Berhasil">Status: Berhasil</option>
              <option value="Verifikasi">Status: Verifikasi</option>
              <option value="Ditolak">Status: Ditolak</option>
            </select>
          </div>

          <Link
            href="/setoran/tambah"
            className="px-4 py-2 bg-[#044E3A] hover:bg-[#033c2d] text-white text-xs font-bold rounded-xl flex items-center gap-1.5 transition-colors cursor-pointer"
          >
            <Plus className="w-4 h-4" /> Tambah Setoran
          </Link>
        </div>

        {/* Tabel Data */}
        <div className="bg-white/70 rounded-xl overflow-hidden">
          <table className="w-full text-left text-xs">
            <thead className="text-[10px] font-bold text-gray-500 uppercase border-b border-[#E5D7B3]">
              <tr>
                <th className="p-3.5 pl-4">ID SETORAN</th>
                <th className="p-3.5">NASABAH</th>
                <th className="p-3.5">JENIS SAMPAH</th>
                <th className="p-3.5">BERAT (KG)</th>
                <th className="p-3.5">POIN</th>
                <th className="p-3.5">TANGGAL</th>
                <th className="p-3.5">STATUS</th>
                <th className="p-3.5 text-center">AKSI</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#E5D7B3]/50 text-gray-700 font-medium">
              {paginatedData.length > 0 ? (
                paginatedData.map((row) => (
                  <tr key={row.id} className="hover:bg-white/50">
                    <td className="p-3.5 pl-4 font-bold text-[#044E3A]">
                      {row.id}
                    </td>
                    <td className="p-3.5">
                      <div className="flex items-center gap-2.5">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={row.avatar}
                          alt={row.nasabah}
                          className="w-7 h-7 rounded-full object-cover"
                        />
                        <div>
                          <p className="font-bold text-gray-900 leading-tight">
                            {row.nasabah}
                          </p>
                          <p className="text-[10px] text-gray-400">
                            {row.nsbId}
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="p-3.5">
                      <span
                        className={`px-2.5 py-1 rounded-md text-[10px] font-bold ${row.jenisBg}`}
                      >
                        🏷️ {row.jenis}
                      </span>
                    </td>
                    <td className="p-3.5 font-bold text-gray-900">
                      {row.berat}
                    </td>
                    <td className="p-3.5 font-bold text-[#044E3A]">
                      {row.poin}
                    </td>
                    <td className="p-3.5 text-gray-500">{row.tanggal}</td>
                    <td className="p-3.5">
                      {row.status === "Berhasil" && (
                        <span className="px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 font-bold text-[10px] flex items-center gap-1 w-fit">
                          ✓ Berhasil
                        </span>
                      )}
                      {row.status === "Verifikasi" && (
                        <span className="px-2.5 py-0.5 rounded-full bg-amber-100 text-amber-800 font-bold text-[10px] flex items-center gap-1 w-fit">
                          • Verifikasi
                        </span>
                      )}
                      {row.status === "Ditolak" && (
                        <span className="px-2.5 py-0.5 rounded-full bg-rose-100 text-rose-800 font-bold text-[10px] flex items-center gap-1 w-fit">
                          ✕ Ditolak
                        </span>
                      )}
                    </td>
                    <td className="p-3.5">
                      <div className="flex items-center justify-center gap-1">
                        <Link
                          href={`/setoran/detail/${row.id}`}
                          aria-label="Lihat detail"
                          className="p-1 bg-white rounded-md border border-gray-200 text-gray-600 hover:bg-gray-50 hover:text-[#044E3A]"
                        >
                          <Eye className="w-3.5 h-3.5" />
                        </Link>
                        <Link
                          href={`/setoran/edit/${row.id}`}
                          aria-label="Edit"
                          className="p-1 bg-white rounded-md border border-gray-200 text-gray-600 hover:bg-gray-50 hover:text-[#044E3A]"
                        >
                          <Edit className="w-3.5 h-3.5" />
                        </Link>
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan={8}
                    className="p-6 text-center text-gray-500 italic"
                  >
                    Tidak ada data setoran yang cocok.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Pagination Controls */}
        <div className="flex items-center justify-between text-xs text-gray-500 pt-2">
          <span>
            Menampilkan{" "}
            {filteredData.length > 0 ? (currentPage - 1) * itemsPerPage + 1 : 0}{" "}
            hingga {Math.min(currentPage * itemsPerPage, filteredData.length)}{" "}
            dari {filteredData.length} setoran
          </span>

          <div className="flex items-center gap-1">
            {/* Tombol Previous */}
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className="p-1.5 rounded-lg border border-[#E5D7B3] bg-white hover:bg-gray-50 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
            >
              <ChevronLeft className="w-3.5 h-3.5" />
            </button>

            {/* List Tombol Angka Halaman */}
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                onClick={() => handlePageChange(page)}
                className={`px-3 py-1 rounded-lg font-bold transition-colors ${
                  currentPage === page
                    ? "bg-[#044E3A] text-white"
                    : "bg-white/50 hover:bg-white text-gray-700"
                }`}
              >
                {page}
              </button>
            ))}

            {/* Tombol Next */}
            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="p-1.5 rounded-lg border border-[#E5D7B3] bg-white hover:bg-gray-50 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
            >
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}