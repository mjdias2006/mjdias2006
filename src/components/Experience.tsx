"use client";

import { motion } from "framer-motion";

export default function Experience() {
    const experiences = [
        {
            company: "Moura Dubeux",
            role: "Aprendiz Assistente Administrativo",
            period: "Agosto 2025 - Novembro 2025",
            description: "Digitalização e organização de acervo documental. Otimização de planilhas com Microsoft Copilot para estruturar dados e agilizar processos."
        },
        {
            company: "Clínica de Olhos Senhor do Bonfim",
            role: "Estagiário Administrativo",
            period: "Março 2024 - Maio 2024",
            description: "Suporte administrativo direto à supervisão e atuação na manutenção da integridade dos dados internos da clínica."
        }
    ];

    return (
        <section id="experience" className="py-20 relative">
        <motion.h3
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="text-3xl font-bold mb-16 text-white"
        >
        Trajetória Profissional
        </motion.h3>

        <div className="space-y-12 relative">
        {/* Linha vertical da timeline animada */}
        <motion.div
        initial={{ height: 0 }}
        whileInView={{ height: "100%" }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 1 }}
        className="absolute left-1 top-0 w-px bg-slate-800"
        />

        {experiences.map((exp, index) => (
            <motion.div
            key={index}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ type: "spring", stiffness: 100, damping: 20, delay: index * 0.3 }}
            className="border-l-4 border-blue-600 pl-10 relative group"
            >
            {/* Ponto na timeline animado */}
            <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: index * 0.3 + 0.2, type: "spring" }}
            whileHover={{ scale: 1.3 }}
            className="absolute w-5 h-5 bg-slate-950 border-2 border-blue-600 rounded-full -left-[12px] top-1 group-hover:shadow-[0_0_15px_rgba(37,99,235,0.8)] transition-all"
            />

            <h4 className="text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors">{exp.company}</h4>
            <p className="text-cyan-400 font-medium tracking-tight mb-4 text-sm font-mono">{exp.role} | {exp.period}</p>
            <p className="text-slate-400 leading-relaxed max-w-3xl">{exp.description}</p>
            </motion.div>
        ))}
        </div>
        </section>
    );
}
