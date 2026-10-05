export type StatusSetoran = "Berhasil" | "Verifikasi" | "Ditolak";
export type JenisSampah = "PLASTIK PET" | "KERTAS/KARDUS" | "LOGAM/BESI" | "LAINNYA";

export interface Setoran {
  id: string;
  nasabahId: string;
  nasabah: string;
  jenis: JenisSampah;
  berat: number; // kg
  poin: number;
  status: StatusSetoran;
  tanggal: string;
}