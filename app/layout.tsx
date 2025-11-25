import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import VirtualAssistant from "@/components/VirtualAssistant";
import WhatsAppButton from "@/components/WhatsAppButton";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ing Jonathan Yanez - Ingetsoport | Desarrollo Web y Diseño",
  description: "Portafolio profesional de Ing Jonathan Yanez - Ingetsoport. Desarrollo web, diseño UI/UX, e-commerce y aplicaciones modernas",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
        <VirtualAssistant />
        <WhatsAppButton />
      </body>
    </html>
  );
}

