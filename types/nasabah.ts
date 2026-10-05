export type StatusNasabah = "Aktif" | "Tidak Aktif";

export interface Nasabah {
  id: string;
  nama: string;
  telepon: string;
  alamat: string;
  saldo: number;
  totalSetoran: number; // kg
  status: StatusNasabah;
}