import Link from "next/link";
import { Check } from "lucide-react";

export default function SuccessModal() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4">
      <div className="w-full max-w-sm rounded-2xl bg-cream p-6 text-center shadow-xl">
        <div className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-green-100 text-green-600">
          <Check size={20} />
        </div>
        <h2 className="text-base font-bold text-forest">Akun Anda Berhasil Dibuat</h2>
        <p className="mb-5 mt-2 text-xs text-forest/70">
          Selamat datang di RESIK. Akun admin Anda sudah aktif dan siap digunakan untuk
          mengelola data sampah.
        </p>
        <Link
          href="/dashboard"
          className="block w-full rounded-lg bg-brand py-2.5 text-sm font-semibold text-white hover:bg-brand-dark"
        >
          Masuk ke Dashboard
        </Link>
        <Link href="/login" className="mt-3 block text-xs text-forest/80">
          Kembali ke halaman login
        </Link>
      </div>
    </div>
  );
}