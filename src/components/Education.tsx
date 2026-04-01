"use client";

import { motion } from "framer-motion";

export default function Education() {
    const edu = [
        { title: "Engenharia de Software", institution: "Gran Centro Universitário", years: "2026 - 2030" }, // Atualizado
        { title: "Desenvolvimento de Sistemas", institution: "SENAI CETIND", years: "2025 - 2027" },
        { title: "Ensino Médio", institution: "SESI Djalma Pessoa", years: "2022 - 2024" }
    ];

    return (
        <section id="education" className="py-20 relative">
        <motion.h3
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-3xl font-bold mb-12 text-white"
        >
        Formação Acadêmica
        </motion.h3>

        <div className="grid md:grid-cols-3 gap-6">
        {edu.map((item, i) => (
            <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ type: "spring", stiffness: 100, damping: 15, delay: i * 0.2 }}
            whileHover={{ y: -8, transition: { duration: 0.3 } }}
            className="glass-card p-8 rounded-2xl border border-white/5 hover:border-blue-500/30 hover:bg-white/5 transition-all cursor-default flex flex-col justify-between"
            >
            <div>
            <motion.span
            animate={{ opacity: [0.7, 1, 0.7] }}
            transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.5 }}
            className="text-xs text-blue-500 font-mono font-bold tracking-widest uppercase"
            >
            {item.years}
            </motion.span>
            <h4 className="font-bold text-xl mt-3 text-white leading-snug">{item.title}</h4>
            </div>
            <p className="text-slate-400 text-sm mt-4 font-medium">{item.institution}</p>
            </motion.div>
        ))}
        </div>
        </section>
    );
}
