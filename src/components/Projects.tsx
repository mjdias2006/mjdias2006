"use client";

import { motion } from "framer-motion";

export default function Projects() {
    const projects = [
        {
            title: "ETL Pipeline",
            desc: "Pipeline de ETL em Python para automação de análise de portfólios.",
            link: "https://github.com/mjdias2006/dio-etl-pipeline-starter",
            // URL direta do arquivo no seu repositório GitHub
            image: "https://raw.githubusercontent.com/mjdias2006/dio-etl-pipeline-starter/main/assets/main_script_overview.png"
        },
        {
            title: "Sales Dashboard",
            desc: "Dashboard de BI no Excel/Power BI para monitoramento de métricas SaaS.",
            link: "https://github.com/mjdias2006/dio-rdstation-sales-dashboard",
            // URL direta do arquivo no seu repositório GitHub
            image: "https://raw.githubusercontent.com/mjdias2006/dio-rdstation-sales-dashboard/main/assets/dashboard_overview.png"
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
            whileHover={{ y: -10 }}
            className="glass-card rounded-3xl border-2 border-slate-800 hover:border-cyan-500/50 transition-all p-4 group cursor-pointer flex flex-col"
            >
            <div className="w-full h-48 overflow-hidden rounded-2xl mb-4 bg-slate-950">
            <img
            src={p.image}
            alt={p.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            onError={(e) => {
                // Caso a imagem não carregue, mantém um placeholder ou esconde
                (e.target as HTMLImageElement).src = 'https://via.placeholder.com/400x200?text=Imagem+Indisponivel';
            }}
            />
            </div>

            <div className="text-center p-2">
            <h4 className="text-xl font-bold mb-2 text-white font-mono">{p.title}</h4>
            <p className="text-slate-400 text-sm mb-4">{p.desc}</p>
            <span className="text-cyan-500 font-mono text-xs uppercase tracking-widest font-bold">
            // Clique para acessar
            </span>
            </div>
            </motion.a>
        ))}
        </div>
        </section>
    );
}
