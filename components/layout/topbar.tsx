"use client";

import { usePathname } from "next/navigation";
import { Bell, Search } from "lucide-react";
import { PAGE_META } from "@/lib/constants";
import Avatar from "@/components/ui/avatar";
import Breadcrumb from "./breadcrumb";

export default function Topbar() {
  const pathname = usePathname();
  const key = Object.keys(PAGE_META)
  .filter((k) => pathname.startsWith(k))
  .sort((a, b) => b.length - a.length)[0];
  const meta = key ? PAGE_META[key] : { section: "RESIK", crumb: "Admin", title: "RESIK Admin" };

  return (
    <header className="flex items-center justify-between gap-4 bg-sand px-6 py-3">
      <div>
        <Breadcrumb section={meta.section} crumb={meta.crumb} />
        <h2 className="text-lg font-bold text-forest">{meta.title}</h2>
      </div>

      <div className="flex items-center gap-4">
        <div className="relative hidden sm:block">
          <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            placeholder="Cari data..."
            className="w-56 rounded-lg bg-white py-2 pl-9 pr-3 text-xs outline-none placeholder:text-gray-400"
          />
        </div>
        <button className="relative rounded-lg bg-white p-2 text-gray-600" aria-label="Notifikasi">
          <Bell size={16} />
          <span className="absolute right-1.5 top-1.5 h-1.5 w-1.5 rounded-full bg-red-500" />
        </button>
        <div className="flex items-center gap-2">
          <div className="hidden text-right leading-tight sm:block">
            <p className="text-xs font-semibold text-gray-900">Andi Wijaya</p>
            <p className="text-[10px] text-gray-500">Super Admin</p>
          </div>
          <Avatar name="Andi Wijaya" size={34} />
        </div>
      </div>
    </header>
  );
}