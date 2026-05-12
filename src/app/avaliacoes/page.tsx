import {
  Search,
  CalendarDays,
  Download,
  Reply,
  Trash2,
  Star,
} from "lucide-react";

const reviews = [
  {
    id: 1,
    user: "Lucas Ferreira",
    email: "lucas@email.com",
    station: "Estação Alameda",
    location: "Av. Paulista, 1000 - SP",
    rating: 5,
    comment:
      "Ótima estrutura e fácil de usar! Consegui carregar meu carro rapidamente.",
    date: "18/05/2026",
    hour: "14:32",
    avatar: "https://i.pravatar.cc/150?img=12",
  },
  {
    id: 2,
    user: "Mariana Santos",
    email: "mariana@email.com",
    station: "Shopping Eldorado",
    location: "Av. Rebouças, 3870 - SP",
    rating: 4,
    comment:
      "Tudo funcionando bem, mas poderia ter mais tomadas rápidas.",
    date: "18/05/2026",
    hour: "10:15",
    avatar: "https://i.pravatar.cc/150?img=32",
  },
  {
    id: 3,
    user: "João Paulo",
    email: "joao@email.com",
    station: "Parque Ibirapuera",
    location: "Av. Pedro Álvares Cabral - SP",
    rating: 5,
    comment: "Localização excelente e estação muito moderna.",
    date: "17/05/2026",
    hour: "09:48",
    avatar: "https://i.pravatar.cc/150?img=15",
  },
  {
    id: 4,
    user: "Ana Clara",
    email: "ana@email.com",
    station: "Estação Vila Madalena",
    location: "R. Harmonia, 123 - SP",
    rating: 4,
    comment:
      "Preço justo e atendimento ótimo. Voltarei a utilizar.",
    date: "17/05/2026",
    hour: "16:20",
    avatar: "https://i.pravatar.cc/150?img=45",
  },
  {
    id: 5,
    user: "Rafael Lima",
    email: "rafa@email.com",
    station: "Hospital Sírio-Libanês",
    location: "R. Dona Adma Jafet, 91 - SP",
    rating: 5,
    comment: "Sempre encontro disponível e funcionando.",
    date: "16/05/2026",
    hour: "09:00",
    avatar: "https://i.pravatar.cc/150?img=51",
  },
];

export default function AvaliacoesPage() {
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

            <button className="w-full hover:bg-slate-800 py-3 rounded-xl text-left px-4 transition">
              Pontos de recarga
            </button>

            <button className="w-full bg-green-500 py-3 rounded-xl text-left px-4 font-medium">
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
            Mobilidade que transforma.
          </h2>

          <p className="text-slate-400 text-sm">
            Acompanhe a experiência dos motoristas em tempo real.
          </p>
        </div>
      </aside>

      {/* Content */}
      <section className="flex-1 p-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-10">
          <div>
            <h1 className="text-4xl font-bold text-slate-900">
              Avaliações
            </h1>

            <p className="text-slate-500 mt-2">
              Visualize e gerencie as avaliações dos motoristas.
            </p>
          </div>

          <button className="bg-white border border-slate-200 hover:bg-slate-50 transition px-6 py-3 rounded-2xl flex items-center gap-2 font-medium">
            <Download size={18} />
            Exportar
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
              placeholder="Buscar avaliação..."
              className="w-full bg-white border border-slate-200 rounded-2xl pl-12 pr-4 py-4 outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          {/* Select */}
          <select className="bg-white border border-slate-200 rounded-2xl px-5 py-4 outline-none">
            <option>Estação: Todas</option>
          </select>

          <select className="bg-white border border-slate-200 rounded-2xl px-5 py-4 outline-none">
            <option>Nota: Todas</option>
          </select>

          {/* Date */}
          <button className="bg-white border border-slate-200 px-5 py-4 rounded-2xl flex items-center gap-2">
            <CalendarDays size={18} />
            Maio 2026
          </button>
        </div>

        {/* Reviews Table */}
        <div className="bg-white rounded-3xl border border-slate-100 overflow-hidden">
          {/* Header */}
          <div className="grid grid-cols-6 gap-4 px-8 py-5 border-b border-slate-100 text-sm font-semibold text-slate-500">
            <span>Usuário</span>
            <span>Estação</span>
            <span>Nota</span>
            <span>Comentário</span>
            <span>Data</span>
            <span className="text-right">Ações</span>
          </div>

          {/* Body */}
          <div>
            {reviews.map((review) => (
              <div
                key={review.id}
                className="grid grid-cols-6 gap-4 px-8 py-6 border-b border-slate-100 items-center hover:bg-slate-50 transition"
              >
                {/* User */}
                <div className="flex items-center gap-4">
                  <img
                    src={review.avatar}
                    alt={review.user}
                    className="w-14 h-14 rounded-full object-cover"
                  />

                  <div>
                    <h2 className="font-semibold text-slate-900">
                      {review.user}
                    </h2>

                    <p className="text-sm text-slate-500">
                      {review.email}
                    </p>
                  </div>
                </div>

                {/* Station */}
                <div>
                  <h3 className="font-medium text-slate-800">
                    {review.station}
                  </h3>

                  <p className="text-sm text-slate-500">
                    {review.location}
                  </p>
                </div>

                {/* Rating */}
                <div className="flex items-center gap-1">
                  {Array.from({ length: review.rating }).map(
                    (_, index) => (
                      <Star
                        key={index}
                        size={18}
                        className="fill-yellow-400 text-yellow-400"
                      />
                    )
                  )}
                </div>

                {/* Comment */}
                <div>
                  <p className="text-slate-700 text-sm leading-relaxed">
                    {review.comment}
                  </p>
                </div>

                {/* Date */}
                <div>
                  <p className="font-medium text-slate-800">
                    {review.date}
                  </p>

                  <span className="text-sm text-slate-500">
                    {review.hour}
                  </span>
                </div>

                {/* Actions */}
                <div className="flex items-center justify-end gap-3">
                  <button className="hover:bg-slate-100 p-3 rounded-xl transition">
                    <Reply size={18} />
                  </button>

                  <button className="hover:bg-red-50 text-red-500 p-3 rounded-xl transition">
                    <Trash2 size={18} />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Footer */}
          <div className="flex items-center justify-between px-8 py-5">
            <p className="text-slate-500 text-sm">
              Mostrando 1 a 5 de 1.236 avaliações
            </p>

            <div className="flex items-center gap-2">
              <button className="w-10 h-10 rounded-xl bg-green-500 text-white">
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
