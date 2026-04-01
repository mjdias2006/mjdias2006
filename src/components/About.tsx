"use client";
import { motion } from "framer-motion";
import SpotlightCard from "./SpotlightCard";

export default function About() {
    return (
        <section id="about" className="py-20">
        <h3 className="text-3xl font-bold mb-12 text-cyan-400">System.info()</h3>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[180px]">
        {/* Biografia Grande */}
        <SpotlightCard className="md:col-span-3 md:row-span-2 p-8 flex flex-col justify-center">
        <h4 className="text-xl font-bold mb-4 text-white">Engenheiro de Dados em Construção</h4>
        <p className="text-slate-400 text-lg leading-relaxed">
        Acredito no poder da tecnologia para guiar decisões estratégicas de alto impacto.
        Foco no ciclo completo: extração, pipelines e modelagem de insights.
        </p>
        </SpotlightCard>

        {/* Idiomas */}
        <SpotlightCard className="md:col-span-1 md:row-span-1 p-6 flex flex-col justify-center text-center">
        <span className="text-cyan-400 font-bold block">Inglês</span>
        <span className="text-2xl font-black">B1</span>
        </SpotlightCard>

        <SpotlightCard className="md:col-span-1 md:row-span-1 p-6 flex flex-col justify-center text-center">
        <span className="text-cyan-400 font-bold block">Mandarim</span>
        <span className="text-2xl font-black">A1</span>
        </SpotlightCard>

        {/* Conquistas Rápidas */}
        <SpotlightCard className="md:col-span-2 p-6 flex items-center gap-4">
        <span className="text-3xl">🏆</span>
        <span className="text-sm font-medium">Vencedor Hackathon+ SESI</span>
        </SpotlightCard>

        <SpotlightCard className="md:col-span-2 p-6 flex items-center gap-4">
        <span className="text-3xl">🥈</span>
        <span className="text-sm font-medium">Prata na ONIA (IA)</span>
        </SpotlightCard>
        </div>
        </section>
    );
}
