import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Flui Platform",
  description:
    "Plataforma inteligente de mobilidade elétrica da Flui.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className="bg-[#F8FAFC] text-slate-900 antialiased">
        {children}
      </body>
    </html>
  );
}
