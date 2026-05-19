import Sidebar from "../../components/Sidebar";
import Header from "../../components/Header";

import { stations } from "../../data/stations";

export default function PontosPage() {
  return (
    <main className="flex">
      <Sidebar />

      <section className="flex-1 p-10">
        <Header
          title="Pontos de Recarga"
          subtitle="Gerencie as estações"
        />

        <div className="grid gap-4">
          {stations.map((station) => (
            <div
              key={station.id}
              className="bg-white p-6 rounded-2xl"
            >
              <h2 className="text-2xl font-bold">
                {station.name}
              </h2>

              <p className="text-zinc-500 mt-2">
                {station.power}
              </p>

              <span className="inline-block mt-4 bg-green-100 text-green-700 px-4 py-2 rounded-full">
                {station.status}
              </span>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
