"use client";
import { motion } from "framer-motion";

export default function Experience() {
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

        <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="border-l-4 border-cyan-500 pl-10 py-6"
        >
        <h4 className="text-2xl font-bold text-white mb-2">Engenharia de Analytics em Ação</h4>
        <p className="text-cyan-400 font-medium tracking-tight mb-4 text-sm font-mono uppercase">
        Focado em Data Pipelines & Business Intelligence
        </p>
        <p className="text-slate-400 leading-relaxed max-w-3xl">
        Desenvolvendo e aplicando soluções técnicas para extração, tratamento e modelagem de dados.
        Meu foco está na construção de pipelines eficientes e visualizações que suportam
        decisões estratégicas de negócio. Aberto a colaborações em projetos que buscam
        escalabilidade e clareza analítica.
        </p>
        </motion.div>
        </section>
    );
}
