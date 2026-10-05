"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { LogOut } from "lucide-react";
import { MENU } from "@/lib/constants";
import Avatar from "@/components/ui/avatar";

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="sticky top-0 hidden h-screen w-60 shrink-0 flex-col bg-sand px-4 py-6 lg:flex">
      <div className="mb-8 flex items-center gap-3 px-2">
        <Image src="/Overlay.png" alt="Logo RESIK" width={36} height={36} priority />
        <span className="text-lg font-bold text-forest">RESIK Admin</span>
      </div>

      <nav className="flex-1 space-y-1">
        {MENU.map(({ href, label, icon: Icon }) => {
          const active = pathname.startsWith(href);
          return (
            <Link
              key={href}
              href={href}
              className={`flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition ${
                active ? "bg-black text-white" : "text-gray-800 hover:bg-black/5"
              }`}
            >
              <Icon size={16} />
              {label}
            </Link>
          );
        })}
      </nav>

      <div>
        <div className="mb-4 flex items-center gap-2 px-2">
          <Avatar name="Andi Wijaya" size={32} />
          <div className="leading-tight">
            <p className="text-xs font-semibold text-gray-900">Andi Wijaya</p>
            <p className="text-[10px] text-gray-500">Super Admin</p>
          </div>
        </div>
        <Link href="/login" className="flex items-center gap-2 px-2 text-sm font-medium text-red-600">
          <LogOut size={16} />
          Keluar
        </Link>
      </div>
    </aside>
  );
}