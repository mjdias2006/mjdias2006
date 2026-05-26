"use client";

import { motion } from "framer-motion";

export default function Projects() {
    const projects = [
        {
            title: "ETL Pipeline",
            desc: "Pipeline de ETL em Python para automação de análise de portfólios.",
            link: "https://github.com/mjdias2006/dio-etl-pipeline-starter"
        },
        {
            title: "Sales Dashboard",
            desc: "Dashboard de BI no Excel/Power BI para monitoramento de métricas SaaS.",
            link: "https://github.com/mjdias2006/dio-rdstation-sales-dashboard"
        }
    ];

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
            <motion.a
            key={index}
            href={p.link}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ type: "spring", stiffness: 100, damping: 20, delay: index * 0.2 }}
            whileHover={{ y: -10, boxShadow: "0px 0px 40px rgba(6, 182, 212, 0.2)" }}
            className="glass-card h-72 rounded-3xl flex flex-col items-center justify-center border-2 border-slate-800 hover:border-cyan-500/50 transition-all p-6 group cursor-pointer"
            >
            <h4 className="text-2xl font-bold mb-3 text-white transition-colors font-mono">{p.title}</h4>
            <span className="text-cyan-500 font-mono text-xs uppercase tracking-widest font-bold">
            // Clique para acessar
            </span>
            <p className="text-slate-400 mt-6 text-center text-sm group-hover:text-slate-200">
            {p.desc}
            </p>
            </motion.a>
        ))}
        </div>
        </section>
    );
}
