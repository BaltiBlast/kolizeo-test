import Navbar from "@/components/NavBar/Navbar";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kolizeo test - Florian Fougeray",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr" data-theme="light">
      <head>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@picocss/pico@2/css/pico.min.css"></link>
      </head>

      <body>
        <main className="container">
          <Navbar />
          {children}
        </main>
      </body>
    </html>
  );
}
