import Sidebar from "../../components/Sidebar";
import Header from "../../components/Header";

import { reviews } from "../../data/reviews";

export default function AvaliacoesPage() {
  return (
    <main className="flex">
      <Sidebar />

      <section className="flex-1 p-10">
        <Header
          title="Avaliações"
          subtitle="Feedback dos usuários"
        />

        <div className="grid gap-4">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="bg-white p-6 rounded-2xl"
            >
              <h2 className="font-bold text-xl">
                {review.user}
              </h2>

              <p className="text-zinc-500 mt-2">
                {review.comment}
              </p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
