"use client";

import { motion, Variants } from "framer-motion";
import GithubStatus from "./GithubStatus";

export default function Hero() {

    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.4,
            },
        },
    };

    const itemVariants: Variants = {
        hidden: {
            opacity: 0,
            y: 25,
            filter: "blur(12px)"
        },
        visible: {
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            transition: {
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1]
            }
        },
    };

    return (
        <section className="min-h-screen flex flex-col justify-center items-center text-center px-6 pt-20 relative overflow-hidden">

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-[120px] -z-10" />

        <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-5xl flex flex-col items-center"
        >
        {/* 1. Status em tempo real do GitHub */}
        <motion.div variants={itemVariants} className="mb-10">
        <GithubStatus />
        </motion.div>

        <motion.h1
        variants={itemVariants}
        className="text-7xl md:text-9xl font-black mb-8 tracking-tighter text-white leading-[0.9]"
        >
        Miguel Jesus <br />
        <span className="text-cyan-500">Dias</span>
        </motion.h1>

        <motion.div variants={itemVariants} className="mb-12">
        <p className="text-xl md:text-2xl text-slate-400 font-light font-mono tracking-tight mb-6">
        <span className="text-cyan-500 font-bold"> {">"} </span>
        Engenheiro de Dados em formação
        </p>

        <div className="flex flex-wrap justify-center gap-3">
        {["PowerBI", "SQL", "Python", "R"].map((tech) => (
            <span
            key={tech}
            className="px-4 py-1.5 text-[10px] md:text-xs font-bold uppercase tracking-[0.3em] bg-slate-900/50 border border-white/5 text-slate-500 rounded-full backdrop-blur-sm"
            >
            {tech}
            </span>
        ))}
        </div>
        </motion.div>

        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-6 items-center relative z-10">
        <motion.a
        href="#projects"
        whileHover={{ scale: 1.05, y: -3 }}
        whileTap={{ scale: 0.98 }}
        className="bg-white text-black px-12 py-4 rounded-full font-bold transition-all shadow-2xl shadow-cyan-500/10 hover:bg-cyan-500 hover:text-white"
        >
        Ver Projetos
        </motion.a>

        <motion.a
        href="#contact"
        whileHover={{ scale: 1.05, y: -3, borderColor: "rgba(34,211,238,0.4)" }}
        whileTap={{ scale: 0.98 }}
        className="group flex items-center gap-3 border border-slate-800 text-slate-400 px-12 py-4 rounded-full font-bold transition-all hover:text-white"
        >
        Contato
        <span className="group-hover:translate-x-1 transition-transform">→</span>
        </motion.a>
        </motion.div>
        </motion.div>

        <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 1.5 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 hidden md:flex"
        >
        <span className="text-[10px] font-mono text-slate-700 uppercase tracking-[0.5em] rotate-90 mb-8">Scroll</span>
        <div className="w-[1px] h-16 bg-gradient-to-b from-cyan-500/50 to-transparent" />
        </motion.div>
        </section>
    );
}
