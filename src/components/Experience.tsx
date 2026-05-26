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
        <h4 className="text-2xl font-bold text-white mb-2">Em busca da primeira oportunidade</h4>
        <p className="text-cyan-400 font-medium tracking-tight mb-4 text-sm font-mono uppercase">
        Estudante de Engenharia de Software | Analista de Dados em formação
        </p>
        <p className="text-slate-400 leading-relaxed max-w-3xl">
        Atualmente dedicado ao aprendizado contínuo em Engenharia de Dados e Analytics.
        Combinando conhecimentos acadêmicos em SQL, Python e Power BI para transformar dados
        em insights. Estou em busca de um estágio onde eu possa aplicar meus estudos,
        colaborar com times técnicos e desenvolver soluções orientadas a dados.
        </p>
        </motion.div>
        </section>
    );
}
