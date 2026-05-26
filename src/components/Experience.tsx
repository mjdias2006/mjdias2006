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
        <h4 className="text-2xl font-bold text-white mb-2">À procura de novas oportunidades</h4>
        <p className="text-cyan-400 font-medium tracking-tight mb-4 text-sm font-mono uppercase">
        Engenheiro de Analytics | Data Enthusiast
        </p>
        <p className="text-slate-400 leading-relaxed max-w-3xl">
        Atualmente em busca de desafios como Engenheiro de Analytics.
        Focado em construir pipelines de dados robustos, modelagem de insights
        estratégicos e otimização de processos baseada em dados.
        </p>
        </motion.div>
        </section>
    );
}
