import type { Metadata } from "next";
import { Inter } from "next/font/google";
import ScrollEffects from "./components/ScrollEffects";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Arthur Amorim — Software Engineer",
  description:
    "Arthur Amorim — Software Engineer focado em arquitetura de software, sistemas distribuídos de alta escala e engenharia assistida por IA.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={inter.variable}>
      <body>
        <div className="progress-bar" id="progressBar" />
        {children}
        <ScrollEffects />
      </body>
    </html>
  );
}
