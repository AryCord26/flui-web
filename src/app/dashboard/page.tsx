import {
  BatteryCharging,
  MapPinned,
  Star,
  PlugZap,
  Bell,
} from "lucide-react";

const stats = [
  {
    title: "Total de estações",
    value: "248",
    icon: <MapPinned size={28} />,
    growth: "+12% este mês",
  },
  {
    title: "Sessões realizadas",
    value: "1.482",
    icon: <BatteryCharging size={28} />,
    growth: "+16% este mês",
  },
  {
    title: "Avaliação média",
    value: "4,7",
    icon: <Star size={28} />,
    growth: "+0,2 este mês",
  },
  {
    title: "Pontos ativos",
    value: "236",
    icon: <PlugZap size={28} />,
    growth: "95% do total",
  },
];

const activities = [
  {
    action: "Nova estação cadastrada",
    location: "Shopping Eldorado",
    user: "Lucas Ferreira",
    date: "18/05/2026",
  },
  {
    action: "Estação em manutenção",
    location: "Parque Ibirapuera",
    user: "Mariana Santos",
    date: "18/05/2026",
  },
  {
    action: "Nova avaliação recebida",
    location: "Estação Alameda",
    user: "João Paulo",
    date: "17/05/2026",
  },
];

export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-[#F8FAFC] flex">
      {/* Sidebar */}
      <aside className="w-72 bg-[#0F172A] text-white p-6 flex flex-col justify-between">
        <div>
          <div className="flex items-center gap-2 mb-12">
            <div className="w-4 h-4 rounded-full bg-green-500" />
            <h1 className="text-3xl font-bold">flui</h1>
          </div>

          <nav className="space-y-4">
            <button className="w-full bg-green-500 text-white py-3 rounded-xl text-left px-4 font-medium">
              Dashboard
            </button>

            <button className="w-full hover:bg-slate-800 py-3 rounded-xl text-left px-4 transition">
              Pontos de recarga
            </button>

            <button className="w-full hover:bg-slate-800 py-3 rounded-xl text-left px-4 transition">
              Avaliações
            </button>

            <button className="w-full hover:bg-slate-800 py-3 rounded-xl text-left px-4 transition">
              Usuários
            </button>

            <button className="w-full hover:bg-slate-800 py-3 rounded-xl text-left px-4 transition">
              Relatórios
            </button>

            <button className="w-full hover:bg-slate-800 py-3 rounded-xl text-left px-4 transition">
              Configurações
            </button>
          </nav>
        </div>

        <div className="bg-slate-900 rounded-3xl p-5 border border-slate-800">
          <h2 className="text-xl font-semibold mb-2">
            Energia que move o futuro.
          </h2>

          <p className="text-slate-400 text-sm">
            Plataforma inteligente de mobilidade elétrica.
          </p>
        </div>
      </aside>

      {/* Content */}
      <section className="flex-1 p-8">
        {/* Header */}
        <header className="flex items-center justify-between mb-10">
          <div>
            <h1 className="text-4xl font-bold text-slate-900">
              Dashboard
            </h1>

            <p className="text-slate-500 mt-2">
              Visão geral da operação da Flui
            </p>
          </div>

          <div className="flex items-center gap-6">
            <button className="relative">
              <Bell className="text-slate-700" />

              <span className="absolute -top-1 -right-1 bg-green-500 w-2 h-2 rounded-full" />
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

        {/* Stats */}
        <div className="grid grid-cols-4 gap-6 mb-8">
          {stats.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl p-6 shadow-sm border border-slate-100"
            >
              <div className="flex items-center justify-between mb-6">
                <div className="bg-green-100 text-green-600 p-4 rounded-2xl">
                  {item.icon}
                </div>
              </div>

              <p className="text-slate-500 text-sm mb-2">
                {item.title}
              </p>

              <h2 className="text-4xl font-bold text-slate-900 mb-2">
                {item.value}
              </h2>

              <span className="text-green-600 text-sm font-medium">
                {item.growth}
              </span>
            </div>
          ))}
        </div>

        {/* Charts */}
        <div className="grid grid-cols-3 gap-6 mb-8">
          {/* Sessions */}
          <div className="col-span-2 bg-white rounded-3xl p-6 border border-slate-100">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold">
                Sessões nos últimos 7 dias
              </h2>

              <button className="border border-slate-200 px-4 py-2 rounded-xl text-sm">
                Últimos 7 dias
              </button>
            </div>

            <div className="h-72 flex items-end gap-4">
              {[40, 80, 55, 90, 75, 110, 95].map((height, i) => (
                <div
                  key={i}
                  className="bg-green-500 rounded-t-xl w-full"
                  style={{ height: `${height}%` }}
                />
              ))}
            </div>
          </div>

          {/* Status */}
          <div className="bg-white rounded-3xl p-6 border border-slate-100">
            <h2 className="text-xl font-semibold mb-6">
              Distribuição por status
            </h2>

            <div className="flex flex-col items-center justify-center h-72">
              <div className="w-44 h-44 rounded-full border-[18px] border-green-500 flex items-center justify-center">
                <div className="text-center">
                  <h2 className="text-4xl font-bold">248</h2>
                  <p className="text-slate-500">Total</p>
                </div>
              </div>

              <div className="mt-6 space-y-2 text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                  <span>Ativas</span>
                </div>

                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-yellow-400" />
                  <span>Manutenção</span>
                </div>

                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-slate-300" />
                  <span>Inativas</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Activities */}
        <div className="bg-white rounded-3xl p-6 border border-slate-100">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold">
              Atividades recentes
            </h2>

            <button className="text-green-600 font-medium">
              Ver tudo
            </button>
          </div>

          <div className="space-y-5">
            {activities.map((item, index) => (
              <div
                key={index}
                className="flex items-center justify-between border-b border-slate-100 pb-4"
              >
                <div>
                  <h3 className="font-semibold text-slate-900">
                    {item.action}
                  </h3>

                  <p className="text-slate-500 text-sm">
                    {item.location}
                  </p>
                </div>

                <div className="text-right">
                  <p className="font-medium text-slate-800">
                    {item.user}
                  </p>

                  <span className="text-sm text-slate-500">
                    {item.date}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
