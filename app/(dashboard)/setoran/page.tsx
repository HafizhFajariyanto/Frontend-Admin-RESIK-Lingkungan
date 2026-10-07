import SetoranTable from "@/components/features/setoran/setoran-table";

export default function SetoranPage() {
  return (
    <div className="space-y-6">
      <p className="text-sm text-gray-500">Kelola data setoran sampah nasabah.</p>
      <SetoranTable />
    </div>
  );
}