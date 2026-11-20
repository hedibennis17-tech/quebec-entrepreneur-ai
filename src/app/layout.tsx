import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Québec Entrepreneur AI — Formation Lancement d'Entreprise",
  description: "Plateforme de formation entrepreneuriale numérique — 2 saisons, 24 modules, mentor IA. Projet pilote gouvernemental Québec.",
  keywords: ["entrepreneuriat", "Québec", "formation", "plan d'affaires", "IA"],
  openGraph: {
    title: "Québec Entrepreneur AI",
    description: "Formation numérique en entrepreneuriat — 24 modules, mentor IA",
    locale: "fr_CA",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr-CA" className="h-full">
      <body className="min-h-full flex flex-col antialiased">{children}</body>
    </html>
  );
}
