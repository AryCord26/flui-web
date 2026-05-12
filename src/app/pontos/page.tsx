import {
  Search,
  SlidersHorizontal,
  Plus,
  Pencil,
  MoreVertical,
} from "lucide-react";

const stations = [
  {
    id: 1,
    name: "Estação Alameda",
    address: "Av. Paulista, 1000",
    city: "São Paulo, SP",
    connectors: "Tipo 2, CCS2",
    power: "22 kW / 50 kW",
    status: "Ativa",
    available: "Disponível",
    rating: 4.7,
    image:
      "https://images.unsplash.com/photo-1593941707882-a56bbc8df7f2?q=80&w=600",
  },
  {
    id: 2,
    name: "Shopping Eldorado",
    address: "Av. Rebouças, 3870",
    city: "São Paulo, SP",
    connectors: "Tipo 2",
    power: "22 kW",
    status: "Ativa",
    available: "Disponível",
    rating: 4.3,
    image:
      "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=600",
  },
  {
    id: 3,
    name: "Parque Ibirapuera",
    address: "Av. Pedro Álvares Cabral",
    city: "São Paulo, SP",
    connectors: "CCS2",
    power: "50 kW",
    status: "Manutenção",
    available: "Indisponível",
    rating: 4.6,
    image:
      "https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=600",
  },
  {
    id: 4,
    name: "Hospital Sírio-Libanês",
    address: "R. Dona Adma Jafet, 91",
    city: "São Paulo, SP",
    connectors: "Tipo 2, CCS2",
    power: "22 kW / 50 kW",
    status: "Ativa",
    available: "Disponível",
    rating: 4.8,
    image:
      "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=600",
  },
];

function getStatusColor(status: string) {
  switch (status) {
    case "Ativa":
      return "bg-green-100 text-green-700";

    case "Manutenção":
      return "bg-yellow-100 text-yellow-700";

    default:
      return "bg-slate-100 text-slate-700";
  }
}

function getAvailabilityColor(status: string) {
  switch (status) {
    case "Disponível":
      return "bg-green-100 text-green-700";

    default:
      return "bg-red-100 text-red-700";
  }
}

export default function PontosPage() {
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
            <button className="w-full hover:bg-slate-800 py-3 rounded-xl text-left px-4 transition">
              Dashboard
            </button>

            <button className="w-full bg-green-500 py-3 rounded-xl text-left px-4 font-medium">
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
            Conectando sustentabilidade à mobilidade.
          </h2>

          <p className="text-slate-400 text-sm">
            Gerencie todos os pontos da rede Flui.
          </p>
        </div>
      </aside>

      {/* Content */}
      <section className="flex-1 p-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-10">
          <div>
            <h1 className="text-4xl font-bold text-slate-900">
              Pontos de recarga
            </h1>

            <p className="text-slate-500 mt-2">
              Gerencie todos os pontos de recarga da rede Flui.
            </p>
          </div>

          <button className="bg-green-500 hover:bg-green-600 transition text-white px-6 py-3 rounded-2xl flex items-center gap-2 font-medium shadow-lg shadow-green-200">
            <Plus size={20} />
            Adicionar estação
          </button>
        </div>

        {/* Filters */}
        <div className="flex items-center gap-4 mb-8">
          {/* Search */}
          <div className="relative flex-1">
            <Search
              className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
              size={20}
            />

            <input
              type="text"
              placeholder="Buscar estação..."
              className="w-full bg-white border border-slate-200 rounded-2xl pl-12 pr-4 py-4 outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          {/* Selects */}
          <select className="bg-white border border-slate-200 rounded-2xl px-5 py-4 outline-none">
            <option>Status: Todos</option>
          </select>

          <select className="bg-white border border-slate-200 rounded-2xl px-5 py-4 outline-none">
            <option>Tipo de conector</option>
          </select>

          <button className="bg-white border border-slate-200 px-5 py-4 rounded-2xl flex items-center gap-2 hover:bg-slate-50 transition">
            <SlidersHorizontal size={18} />
            Mais filtros
          </button>
        </div>

        {/* Table */}
        <div className="bg-white rounded-3xl border border-slate-100 overflow-hidden">
          {/* Table Header */}
          <div className="grid grid-cols-8 gap-4 px-8 py-5 border-b border-slate-100 text-sm font-semibold text-slate-500">
            <span>Estação</span>
            <span>Localização</span>
            <span>Conectores</span>
            <span>Potência</span>
            <span>Status</span>
            <span>Disponibilidade</span>
            <span>Avaliação</span>
            <span className="text-right">Ações</span>
          </div>

          {/* Table Body */}
          <div>
            {stations.map((station) => (
              <div
                key={station.id}
                className="grid grid-cols-8 gap-4 px-8 py-6 border-b border-slate-100 items-center hover:bg-slate-50 transition"
              >
                {/* Station */}
                <div className="flex items-center gap-4">
                  <img
                    src={station.image}
                    alt={station.name}
                    className="w-20 h-20 rounded-2xl object-cover"
                  />

                  <div>
                    <h2 className="font-semibold text-slate-900">
                      {station.name}
                    </h2>

                    <p className="text-sm text-slate-500">
                      {station.address}
                    </p>
                  </div>
                </div>

                {/* Location */}
                <div>
                  <p className="text-slate-700">{station.city}</p>
                </div>

                {/* Connectors */}
                <div>
                  <p className="text-slate-700">
                    {station.connectors}
                  </p>
                </div>

                {/* Power */}
                <div>
                  <p className="text-slate-700">{station.power}</p>
                </div>

                {/* Status */}
                <div>
                  <span
                    className={`px-4 py-2 rounded-full text-sm font-medium ${getStatusColor(
                      station.status
                    )}`}
                  >
                    {station.status}
                  </span>
                </div>

                {/* Availability */}
                <div>
                  <span
                    className={`px-4 py-2 rounded-full text-sm font-medium ${getAvailabilityColor(
                      station.available
                    )}`}
                  >
                    {station.available}
                  </span>
                </div>

                {/* Rating */}
                <div>
                  <div className="flex items-center gap-1">
                    <span className="font-semibold">
                      {station.rating}
                    </span>

                    <span className="text-yellow-400">★</span>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex items-center justify-end gap-3">
                  <button className="hover:bg-slate-100 p-2 rounded-xl transition">
                    <Pencil size={18} />
                  </button>

                  <button className="hover:bg-slate-100 p-2 rounded-xl transition">
                    <MoreVertical size={18} />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Footer */}
          <div className="flex items-center justify-between px-8 py-5">
            <p className="text-slate-500 text-sm">
              Mostrando 1 a 4 de 248 estações
            </p>

            <div className="flex items-center gap-2">
              <button className="w-10 h-10 rounded-xl border border-slate-200">
                1
              </button>

              <button className="w-10 h-10 rounded-xl hover:bg-slate-100">
                2
              </button>

              <button className="w-10 h-10 rounded-xl hover:bg-slate-100">
                3
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
