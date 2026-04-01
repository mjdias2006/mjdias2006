"use client";

import { motion } from "framer-motion";

export default function Projects() {
    const projects = [1, 2]; // Placeholders

    return (
        <section id="projects" className="py-20 relative">
        <motion.h3
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-3xl font-bold mb-16 text-center text-white"
        >
        Projetos em Destaque
        </motion.h3>

        <div className="grid md:grid-cols-2 gap-10">
        {projects.map((p, index) => (
            <motion.div
            key={p}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ type: "spring", stiffness: 100, damping: 20, delay: index * 0.2 }}
            whileHover={{ y: -10, boxShadow: "0_0_40px_rgba(34,211,238,0.1)" }}
            className="glass-card h-72 rounded-3xl flex flex-col items-center justify-center border-2 border-slate-800 hover:border-cyan-500/50 transition-all p-6 group cursor-pointer"
            >
            <h4 className="text-2xl font-bold mb-3 text-slate-500 group-hover:text-white transition-colors font-mono">Projeto {p}</h4>
            <span className="text-cyan-600 font-mono text-xs uppercase tracking-widest animate-pulse font-bold">
            // Em andamento
            </span>
            <p className="text-slate-600 mt-6 text-center text-sm group-hover:text-slate-400">
            Desenvolvendo solução orientada a dados. Detalhes em breve.
            </p>
            </motion.div>
        ))}
        </div>
        </section>
    );
}
