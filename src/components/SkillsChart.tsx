"use client";
import {
    Radar, RadarChart, PolarGrid, PolarAngleAxis,
    Tooltip
} from "recharts";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

// NOVAS PORCENTAGENS: Focadas em Base Sólida para Iniciante
const data = [
    { subject: 'SQL', A: 65, fullMark: 100 },        // Base Sólida (Joins, Aggregations)
    { subject: 'Linux', A: 60, fullMark: 100 },      // Comandos Básicos e Permissões
{ subject: 'Python', A: 55, fullMark: 100 },     // Lógica e Estruturas de Dados
{ subject: 'Git', A: 40, fullMark: 100 },        // Versionamento Básico (Commit, Push)
{ subject: 'GitHub', A: 40, fullMark: 100 },     // Repositórios e Pull Requests
{ subject: 'Power BI', A: 35, fullMark: 100 },   // Visualização Básica de Dados
];

// Estilização customizada para o Tooltip (Funcionalidade)
const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
        return (
            <div className="bg-slate-900/95 border border-cyan-500/50 px-3 py-2 rounded-lg shadow-xl backdrop-blur-md">
            <p className="text-cyan-400 font-mono text-xs font-bold">{`${payload[0].payload.subject}`}</p>
            <p className="text-white text-sm">{`Domínio da Base: ${payload[0].value}%`}</p>
            </div>
        );
    }
    return null;
};

export default function SkillsChart() {
    const [isMounted, setIsMounted] = useState(false);
    const [chartSize, setChartSize] = useState(400);

    useEffect(() => {
        setIsMounted(true);
        const handleResize = () => {
            setChartSize(window.innerWidth > 768 ? 500 : 320);
        };
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    if (!isMounted) return null;

    return (
        <motion.div
        initial={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }}
        whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="w-full flex flex-col items-center justify-center mt-12 glass-card rounded-3xl p-8 border border-white/5 relative overflow-hidden"
        >
        {/* Decoração de fundo para Profundidade */}
        <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/5 to-transparent pointer-events-none" />

        {/* NOVO NOME: Mais Profissional e Condizente com Iniciante */}
        <h4 className="text-slate-500 font-mono text-[10px] md:text-xs mb-8 uppercase tracking-[0.4em] z-10">
        Status de Proficiência
        </h4>

        <div className="flex justify-center items-center w-full z-10">
        <RadarChart
        cx={chartSize / 2}
        cy={chartSize / 2}
        outerRadius={chartSize / 3.5}
        width={chartSize}
        height={chartSize}
        data={data}
        >
        {/* Grade com efeito sutil */}
        <PolarGrid stroke="#1e293b" strokeDasharray="3 3" />

        {/* Eixos com fonte mono */}
        <PolarAngleAxis
        dataKey="subject"
        tick={{ fill: '#94a3b8', fontSize: 11, fontFamily: 'monospace', fontWeight: 600 }}
        />

        {/* Tooltip funcional para interatividade */}
        <Tooltip content={<CustomTooltip />} cursor={false} />

        {/* O Radar com Animação Ativa */}
        <Radar
        name="Miguel"
        dataKey="A"
        stroke="#22d3ee"
        strokeWidth={3}
        fill="url(#radarGradient)"
        fillOpacity={0.6}

        // CONFIGURAÇÃO DE ANIMAÇÃO REAL
        isAnimationActive={true}
        animationBegin={500}
        animationDuration={2500}
        animationEasing="ease-in-out"
        />

        {/* Definição de Gradiente para o preenchimento do Radar */}
        <defs>
        <linearGradient id="radarGradient" x1="0" y1="0" x2="0" y2="1">
        <stop offset="5%" stopColor="#22d3ee" stopOpacity={0.8}/>
        <stop offset="95%" stopColor="#0891b2" stopOpacity={0.2}/>
        </linearGradient>
        </defs>
        </RadarChart>
        </div>

        <p className="mt-6 text-[10px] text-slate-600 font-mono uppercase tracking-widest italic">
        Hover para detalhes técnicos
        </p>
        </motion.div>
    );
}
