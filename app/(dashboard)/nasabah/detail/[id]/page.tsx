"use client";

import React from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import {
  ChevronLeft,
  ChevronRight,
  Edit3,
  Phone,
  Mail,
  MapPin,
  CheckCircle2,
  Clock,
  Printer,
} from "lucide-react";

export default function DetailNasabahPage() {
  const params = useParams();
  const idNasabah = (params.id as string) || "NSB-0512";

  return (
    <div className="space-y-6 pb-12 text-gray-800">
      {/* BREADCRUMB & HEADER ACTION */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-1.5 text-xs text-gray-500 mb-2">
            <Link href="/nasabah" className="hover:underline">
              Data Nasabah
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
            <span className="font-medium text-gray-700">Detail</span>
          </div>

          <div className="flex items-center gap-3">
            <Link
              href="/nasabah"
              className="w-8 h-8 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-600 hover:bg-gray-50 transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </Link>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-2xl font-bold text-gray-900">
                  {idNasabah}
                </h1>
                <span className="bg-emerald-100 text-emerald-800 text-[11px] font-bold px-2.5 py-0.5 rounded-full uppercase">
                  AKTIFF
                </span>
              </div>
              <p className="text-xs text-gray-500 mt-0.5">
                Terdaftar sejak 12 Januari 2023
              </p>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => window.print()}
            className="px-3.5 py-2 bg-white border border-gray-200 hover:bg-gray-50 rounded-xl text-xs font-semibold text-gray-700 flex items-center gap-1.5 shadow-sm cursor-pointer"
          >
            <Printer className="w-4 h-4 text-gray-600" />
            <span>Cetak Kartu</span>
          </button>

          <Link
            href={`/nasabah/edit/${idNasabah}`}
            className="px-4 py-2 bg-[#064e3b] hover:bg-[#04382a] text-white rounded-xl text-xs font-semibold flex items-center gap-1.5 shadow-sm transition-colors"
          >
            <Edit3 className="w-4 h-4" />
            <span>Edit Nasabah</span>
          </Link>
        </div>
      </div>

      {/* GRID UTAMA */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* KOLOM KIRI */}
        <div className="lg:col-span-2 space-y-6">
          {/* INFORMASI PROFIL NASABAH */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 space-y-4">
            <h3 className="text-sm font-bold text-gray-900">
              Informasi Diri Nasabah
            </h3>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-2xl overflow-hidden bg-emerald-50 border-2 border-emerald-500 shrink-0 flex items-center justify-center font-bold text-emerald-800 text-xl">
                  BS
                </div>
                <div>
                  <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider block">
                    NAMA LENGKAP
                  </span>
                  <h4 className="text-lg font-bold text-gray-900">
                    Budi Santoso
                  </h4>
                  <p className="text-xs text-gray-500 mt-0.5">
                    NIK: 3174092801900002
                  </p>
                </div>
              </div>

              <div className="space-y-1.5 text-xs text-gray-600">
                <div className="flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-gray-400" />
                  <span>0856-9876-5432</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-3.5 h-3.5 text-gray-400" />
                  <span>budi.santoso@gmail.com</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5 text-gray-400" />
                  <span>Jl. Mawar Gg. 3 No. 45, Bandung</span>
                </div>
              </div>
            </div>
          </div>

          {/* RIWAYAT SETORAN TERAKHIR */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-bold text-gray-900">
                Riwayat Setoran Terbaru
              </h3>
              <Link
                href="/setoran"
                className="text-xs font-semibold text-[#064e3b] hover:underline"
              >
                Lihat Semua
              </Link>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead>
                  <tr className="border-b border-gray-100 text-gray-400 font-bold uppercase text-[10px]">
                    <th className="pb-3">ID SETORAN</th>
                    <th className="pb-3">TANGGAL</th>
                    <th className="pb-3 text-center">BERAT</th>
                    <th className="pb-3 text-right">POIN</th>
                    <th className="pb-3 text-right">STATUS</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-50">
                  <tr>
                    <td className="py-3.5 font-bold text-[#064e3b]">
                      STR-9921
                    </td>
                    <td className="py-3.5 text-gray-500">24 Okt 2023</td>
                    <td className="py-3.5 text-center font-bold text-gray-800">
                      5.2 kg
                    </td>
                    <td className="py-3.5 text-right font-bold text-emerald-700">
                      520 pts
                    </td>
                    <td className="py-3.5 text-right">
                      <span className="bg-emerald-100 text-emerald-800 text-[10px] font-bold px-2 py-0.5 rounded-full">
                        Selesai
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* KOLOM KANAN */}
        <div className="space-y-6">
          {/* RINGKASAN SALDO & AKUMULASI */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 space-y-4">
            <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider">
              RINGKASAN SALDO
            </h3>
            <div className="space-y-3 text-xs">
              <div className="flex justify-between items-center text-gray-600">
                <span>Total Saldo</span>
                <span className="text-xl font-extrabold text-[#064e3b]">
                  Rp 120.500
                </span>
              </div>
              <div className="flex justify-between items-center text-gray-600">
                <span>Total Poin Aktif</span>
                <span className="font-bold text-emerald-700 text-sm">
                  1.720 PTS
                </span>
              </div>
              <div className="flex justify-between text-gray-600 pt-2 border-t border-gray-50">
                <span>Total Sampah Disetor</span>
                <span className="font-bold text-gray-900">88.2 kg</span>
              </div>
            </div>
          </div>

          {/* STATUS AKUN */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 space-y-4">
            <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider">
              STATUS AKUN
            </h3>
            <div className="relative pl-6 space-y-6 before:absolute before:left-2 before:top-2 before:bottom-2 before:w-0.5 before:bg-gray-100">
              <div className="relative">
                <div className="absolute -left-6 top-0.5 w-4 h-4 rounded-full bg-emerald-600 flex items-center justify-center text-white ring-4 ring-white">
                  <CheckCircle2 className="w-3 h-3" />
                </div>
                <div>
                  <p className="text-xs font-bold text-gray-900">
                    Akun Terverifikasi
                  </p>
                  <p className="text-[10px] text-gray-400">
                    Sesuai dokumen identitas
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}