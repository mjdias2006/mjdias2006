"use client";
import { motion } from "framer-motion";

export default function Achievements() {
    const items = [
        "🏆 Vencedor Hackathon+ SESI Saúde",
        "🥈 Medalha de Prata ONIA (IA)",
        "🚀 Engenharia de Software @ Gran Centro Universitário",
        "💻 Dev. Sistemas @ SENAI CETIND",
        "✨ Foco em Data Engineering",
        "📊 SQL & Power BI",
    ];

    return (
        <div className="py-6 overflow-hidden bg-slate-900/50 border-y border-white/5 whitespace-nowrap relative">

        <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-slate-950 to-transparent z-10" />
        <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-slate-950 to-transparent z-10" />

        <motion.div
        className="flex gap-12 items-center"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear"
        }}
        style={{ width: "fit-content" }}
        >

        {[...items, ...items].map((item, i) => (
            <span
            key={i}
            className="text-slate-400 font-mono text-xs md:text-sm uppercase tracking-wider flex items-center gap-3"
            >
            <span className="w-2 h-2 bg-cyan-500 rounded-full shadow-[0_0_8px_#22d3ee]" />
            {item}
            </span>
        ))}
        </motion.div>
        </div>
    );
}
