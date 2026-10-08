"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import {
  ChevronLeft,
  ChevronRight,
  User,
  Phone,
  Mail,
  MapPin,
  Save,
} from "lucide-react";

export default function EditNasabahAdminPage() {
  const params = useParams();
  const router = useRouter();
  const idNasabah = (params.id as string) || "NSB-0512";

  const [nama, setNama] = useState("Budi Santoso");
  const [telepon, setTelepon] = useState("0856-9876-5432");
  const [email, setEmail] = useState("budi.santoso@gmail.com");
  const [alamat, setAlamat] = useState("Jl. Mawar Gg. 3 No. 45, Bandung");
  const [status, setStatus] = useState("Aktif");

  return (
    <div className="space-y-6 pb-12 text-gray-800">
      {/* Top Header Navigation */}
      <div>
        <div className="flex items-center gap-1.5 text-xs text-gray-500 mb-2">
          <Link href="/nasabah" className="hover:underline">
            Data Nasabah
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
          <span className="font-medium text-gray-700">Edit</span>
        </div>

        <div className="flex items-center gap-3">
          <Link
            href={`/nasabah/detail/${idNasabah}`}
            className="w-8 h-8 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-600 hover:bg-gray-50 transition-colors"
          >
            <ChevronLeft className="w-5 h-5" />
          </Link>
          <div>
            <h1 className="text-2xl font-bold text-gray-900">
              Edit Data Nasabah
            </h1>
            <p className="text-xs text-gray-500 mt-0.5">
              Perbarui informasi identitas nasabah {idNasabah}.
            </p>
          </div>
        </div>
      </div>

      {/* Alert Info Banner */}
      <div className="bg-amber-100/70 border border-amber-200/80 rounded-2xl p-4 flex items-center gap-3">
        <div className="w-6 h-6 rounded-lg bg-amber-200/80 text-amber-800 flex items-center justify-center shrink-0 text-xs font-bold">
          👤
        </div>
        <p className="text-xs font-semibold text-amber-900">
          Perubahan kontak dan alamat akan memperbarui informasi pengiriman bukti transaksi secara otomatis.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Kolom Kiri: Form Edit */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 space-y-4">
            <h3 className="text-base font-bold text-gray-900">
              Informasi Diri
            </h3>

            <div className="space-y-4 text-xs">
              <div>
                <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-1.5">
                  NAMA LENGKAP
                </label>
                <div className="relative">
                  <User className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
                  <input
                    type="text"
                    value={nama}
                    onChange={(e) => setNama(e.target.value)}
                    className="w-full border border-gray-200 rounded-xl pl-10 pr-4 py-2.5 text-xs text-gray-900 font-semibold focus:outline-none focus:border-[#064e3b]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-1.5">
                    NOMOR TELEPON
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
                    <input
                      type="text"
                      value={telepon}
                      onChange={(e) => setTelepon(e.target.value)}
                      className="w-full border border-gray-200 rounded-xl pl-10 pr-4 py-2.5 text-xs text-gray-900 font-semibold focus:outline-none focus:border-[#064e3b]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-1.5">
                    EMAIL
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full border border-gray-200 rounded-xl pl-10 pr-4 py-2.5 text-xs text-gray-900 font-semibold focus:outline-none focus:border-[#064e3b]"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-1.5">
                  ALAMAT LENGKAP
                </label>
                <div className="relative">
                  <MapPin className="w-4 h-4 absolute left-3.5 top-3 text-gray-400" />
                  <textarea
                    rows={3}
                    value={alamat}
                    onChange={(e) => setAlamat(e.target.value)}
                    className="w-full border border-gray-200 rounded-xl pl-10 pr-4 py-2.5 text-xs text-gray-900 font-semibold focus:outline-none focus:border-[#064e3b]"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 space-y-4">
            <h3 className="text-base font-bold text-gray-900">
              Pengaturan Akun
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
              <div>
                <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-1.5">
                  ID NASABAH
                </label>
                <input
                  type="text"
                  disabled
                  value={idNasabah}
                  className="w-full bg-gray-50 border border-gray-100 rounded-xl px-3 py-2.5 text-xs font-semibold text-gray-400"
                />
              </div>

              <div>
                <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-1.5">
                  STATUS AKUN
                </label>
                <select
                  value={status}
                  onChange={(e) => setStatus(e.target.value)}
                  className="w-full border border-gray-200 rounded-xl px-3 py-2.5 text-xs text-gray-800 font-semibold focus:outline-none focus:border-[#064e3b]"
                >
                  <option value="Aktif">Aktif</option>
                  <option value="Tidak Aktif">Tidak Aktif</option>
                </select>
              </div>
            </div>
          </div>

          {/* Bottom Actions */}
          <div className="flex items-center justify-between pt-2">
            <button
              type="button"
              className="text-xs font-bold text-red-500 hover:text-red-600 flex items-center gap-1 cursor-pointer"
            >
              <span>✕</span>
              <span>Nonaktifkan Nasabah</span>
            </button>

            <div className="flex items-center gap-3">
              <Link
                href={`/nasabah/detail/${idNasabah}`}
                className="px-5 py-2.5 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-xl text-xs font-semibold transition-colors"
              >
                Batal
              </Link>
              <button
                type="button"
                onClick={() => router.push(`/nasabah/detail/${idNasabah}`)}
                className="px-5 py-2.5 bg-[#064e3b] hover:bg-[#04382a] text-white rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-colors shadow-sm cursor-pointer"
              >
                <Save className="w-4 h-4" />
                <span>Simpan Perubahan</span>
              </button>
            </div>
          </div>
        </div>

        {/* Kolom Kanan */}
        <div className="space-y-6">
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 space-y-4">
            <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider">
              RINGKASAN AKUN
            </h4>
            <div className="space-y-3 text-xs">
              <div className="flex justify-between">
                <span className="text-gray-500">Saldo Saat Ini</span>
                <span className="font-bold text-[#064e3b]">Rp 120.500</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Total Poin</span>
                <span className="font-bold text-gray-900">1.720 PTS</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}