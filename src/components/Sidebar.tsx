"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  MapPinned,
  Star,
  Users,
  FileBarChart2,
  Settings,
} from "lucide-react";

const links = [
  {
    label: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    label: "Pontos de recarga",
    href: "/pontos",
    icon: MapPinned,
  },
  {
    label: "Avaliações",
    href: "/avaliacoes",
    icon: Star,
  },
  {
    label: "Usuários",
    href: "/usuarios",
    icon: Users,
  },
  {
    label: "Relatórios",
    href: "/relatorios",
    icon: FileBarChart2,
  },
  {
    label: "Configurações",
    href: "/configuracoes",
    icon: Settings,
  },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-72 min-h-screen bg-[#0F172A] text-white p-6 flex flex-col justify-between">
      <div>
        <div className="flex items-center gap-2 mb-12">
          <div className="w-4 h-4 rounded-full bg-green-500" />

          <h1 className="text-3xl font-bold">flui</h1>
        </div>

        <nav className="space-y-3">
          {links.map((item) => {
            const Icon = item.icon;

            const active = pathname === item.href;

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center gap-3 px-4 py-3 rounded-2xl transition-all
                ${
                  active
                    ? "bg-green-500 text-white"
                    : "hover:bg-slate-800 text-slate-300"
                }`}
              >
                <Icon size={20} />

                <span>{item.label}</span>
              </Link>
            );
          })}
        </nav>
      </div>

      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-5">
        <h2 className="text-lg font-semibold mb-2">
          Energia que move o futuro.
        </h2>

        <p className="text-slate-400 text-sm leading-relaxed">
          Plataforma inteligente para mobilidade elétrica sustentável.
        </p>
      </div>
    </aside>
  );
}
