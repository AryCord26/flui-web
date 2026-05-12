import { Bell } from "lucide-react";

interface HeaderProps {
  title: string;
  subtitle: string;
}

export default function Header({
  title,
  subtitle,
}: HeaderProps) {
  return (
    <header className="flex items-center justify-between mb-10">
      <div>
        <h1 className="text-4xl font-bold text-slate-900">
          {title}
        </h1>

        <p className="text-slate-500 mt-2">{subtitle}</p>
      </div>

      <div className="flex items-center gap-6">
        <button className="relative">
          <Bell className="text-slate-700" />

          <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-green-500" />
        </button>

        <div className="flex items-center gap-3">
          <img
            src="https://i.pravatar.cc/100"
            alt="user"
            className="w-12 h-12 rounded-full"
          />

          <div>
            <p className="font-semibold text-slate-900">
              Equipe Flui
            </p>

            <span className="text-sm text-slate-500">
              Administrador
            </span>
          </div>
        </div>
      </div>
    </header>
  );
}
