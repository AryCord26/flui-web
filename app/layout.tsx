import "./globals.css";

export const metadata = {
  title: "Flui Platform",
  description: "Plataforma de mobilidade elétrica",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
