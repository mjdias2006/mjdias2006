import type { Metadata } from "next";
import { Inter, Geist_Mono } from "next/font/google";
import "./globals.css";
import CursorAndGrid from "../components/CursorAndGrid";
import ScrollUtils from "../components/ScrollUtils";

const inter = Inter({ subsets: ["latin"], variable: '--font-inter' });
const geistMono = Geist_Mono({ subsets: ["latin"], variable: '--font-geist-mono' });

export const metadata: Metadata = {
    title: "Miguel Jesus Dias | Software & Data Engineer",
    description: "Portfólio profissional focado em Engenharia de Dados e Software.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="pt-br" className="scroll-smooth">
        <body className={`${inter.variable} ${geistMono.variable} font-sans bg-slate-950 antialiased`}>
        {/* Camada de Textura Orgânica */}
        <div className="noise-bg" />

        <CursorAndGrid />
        <ScrollUtils />

        {children}
        </body>
        </html>
    );
}
