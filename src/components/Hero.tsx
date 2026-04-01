"use client";

import { motion } from "framer-motion";
import GithubStatus from "./GithubStatus";

export default function Hero() {
    // Configuração para animação em cascata (Stagger)
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2, // Intervalo entre cada item
                delayChildren: 0.3,   // Atraso inicial antes de começar
            },
        },
    };

    // Configuração para o efeito de revelação com desfoque (Apple-style)
    const itemVariants = {
        hidden: { opacity: 0, y: 20, filter: "blur(10px)" },
        visible: {
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            transition: { duration: 0.8, ease: "easeOut" }
        },
    };

    return (
        <section className="min-h-screen flex flex-col justify-center items-center text-center px-6 pt-24 pb-12 relative overflow-hidden">
        {/* Brilho de fundo para profundidade */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[120px] -z-10" />

        <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-4xl flex flex-col items-center"
        >
        {/* 1. Status do GitHub (Indicador de Atividade Real-time) */}
        <motion.div variants={itemVariants} className="mb-8">
        <GithubStatus />
        </motion.div>

        {/* 2. Título Principal com Tipografia Premium */}
        <motion.h1
        variants={itemVariants}
        className="text-6xl md:text-8xl font-black mb-6 tracking-tight text-white leading-none"
        >
        Miguel Jesus <span className="text-cyan-500">Dias</span>
        </motion.h1>

        {/* 3. Subtítulo com Estética de Terminal (Corrigido o token '>') */}
        <motion.div variants={itemVariants} className="mb-12">
        <p className="text-xl md:text-2xl text-slate-400 font-light font-mono tracking-tight leading-relaxed">
        <span className="text-cyan-500 font-bold"> {">"} </span>
        Engenheiro de Dados em formação
        </p>
        <div className="mt-4 flex justify-center gap-3">
        {["SQL", "Python", "Linux"].map((tech) => (
            <span
            key={tech}
            className="px-3 py-1 text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] bg-slate-900 border border-slate-800 text-slate-500 rounded-md"
            >
            {tech}
            </span>
        ))}
        </div>
        </motion.div>

        {/* 4. Chamadas para Ação (CTAs) */}
        <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-6 relative z-10">
        <motion.a
        href="#projects"
        whileHover={{ scale: 1.05, y: -2 }}
        whileTap={{ scale: 0.95 }}
        className="bg-white text-black px-10 py-4 rounded-full font-bold transition-all shadow-xl shadow-cyan-950/20 hover:bg-cyan-500 hover:text-white"
        >
        Explorar Projetos
        </motion.a>

        <motion.a
        href="#contact"
        whileHover={{ scale: 1.05, y: -2, borderColor: "rgba(34,211,238,0.5)" }}
        whileTap={{ scale: 0.95 }}
        className="border border-slate-800 text-slate-300 px-10 py-4 rounded-full font-bold transition-all"
        >
        Iniciar Conversa
        </motion.a>
        </motion.div>
        </motion.div>

        {/* Indicador de Scroll Suave no final da tela */}
        <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-slate-600 hidden md:block"
        >
        <div className="w-[1px] h-12 bg-gradient-to-b from-cyan-500 to-transparent mx-auto" />
        </motion.div>
        </section>
    );
}
