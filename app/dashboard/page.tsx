import Sidebar from "../../components/Sidebar";
import Header from "../../components/Header";

export default function DashboardPage() {
  return (
    <main className="flex">
      <Sidebar />

      <section className="flex-1 p-10">
        <Header
          title="Dashboard"
          subtitle="Visão geral da plataforma"
        />

        <div className="grid grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-2xl">
            <h2 className="text-zinc-500">
              Pontos ativos
            </h2>

            <p className="text-4xl font-bold mt-4">
              128
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl">
            <h2 className="text-zinc-500">
              Recargas hoje
            </h2>

            <p className="text-4xl font-bold mt-4">
              842
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl">
            <h2 className="text-zinc-500">
              Avaliação média
            </h2>

            <p className="text-4xl font-bold mt-4">
              4.8
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
