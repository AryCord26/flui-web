import Link from "next/link";

export default function Sidebar() {
  return (
    <aside className="w-64 min-h-screen bg-zinc-900 text-white p-6">
      <h2 className="text-2xl font-bold mb-10">
        Flui ⚡
      </h2>

      <nav className="flex flex-col gap-4">
        <Link href="/dashboard">
          Dashboard
        </Link>

        <Link href="/pontos">
          Pontos
        </Link>

        <Link href="/avaliacoes">
          Avaliações
        </Link>
      </nav>
    </aside>
  );
}
