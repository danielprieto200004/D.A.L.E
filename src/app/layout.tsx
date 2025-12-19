import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FontLoader from "@/components/FontLoader";

export const metadata: Metadata = {
  title: "D.A.L.E - De los Datos a las Decisiones",
  description: "La plataforma de alfabetización en datos para Latinoamérica. Experiencias inmersivas que transforman la manera en que tomas decisiones.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className="font-sans antialiased bg-[#0D1117] text-white">
        <FontLoader />
        <Navbar />
        <main className="pt-16">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
