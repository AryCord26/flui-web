import Link from "next/link";

export default function HomePage() {
  return (
    <main className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-5xl font-bold mb-4">
          Flui Platform ⚡
        </h1>

        <p className="text-zinc-500 mb-8">
          Plataforma inteligente de mobilidade elétrica
        </p>

        <div className="flex gap-4 justify-center">
          <Link
            href="/dashboard"
            className="bg-green-500 text-white px-6 py-3 rounded-xl"
          >
            Dashboard
          </Link>

          <Link
            href="/pontos"
            className="bg-zinc-900 text-white px-6 py-3 rounded-xl"
          >
            Pontos
          </Link>
        </div>
      </div>
    </main>
  );
}
