"use client";

import { motion } from "framer-motion";
import { FaPython, FaDatabase, FaGitAlt, FaGithub, FaLinux, FaChartBar } from "react-icons/fa";
import { SiR } from "react-icons/si";

export default function Skills() {
    const skills = [
        { name: "Python", icon: <FaPython className="text-4xl mb-4" /> },
        { name: "SQL", icon: <FaDatabase className="text-4xl mb-4" /> },
        { name: "R", icon: <SiR className="text-4xl mb-4" /> },
        { name: "Power BI", icon: <FaChartBar className="text-4xl mb-4" /> },
        { name: "Git", icon: <FaGitAlt className="text-4xl mb-4" /> },
        { name: "GitHub", icon: <FaGithub className="text-4xl mb-4" /> },
        { name: "Linux", icon: <FaLinux className="text-4xl mb-4" /> }
    ];

    return (
        <section id="skills" className="py-10 relative">
        <motion.h3
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-3xl font-bold mb-12 text-center uppercase tracking-widest text-slate-500 font-mono"
        >
        Stack Técnica
        </motion.h3>

        <div className="flex flex-wrap justify-center gap-6">
        {skills.map((skill, index) => (
            <motion.div
            key={skill.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
                type: "spring",
                stiffness: 200,
                damping: 12,
                delay: index * 0.1
            }}
            whileHover={{
                y: -10,
                borderColor: "rgba(34,211,238,0.5)",
                                       boxShadow: "0px 0px 25px rgba(34,211,238,0.2)",
                                       color: "#22d3ee"
            }}
            className="group flex flex-col items-center justify-center w-36 h-36 glass-card rounded-3xl text-slate-400 transition-all duration-300 cursor-pointer p-4 text-center border border-white/5 bg-slate-900/40"
            >
            <motion.div
            whileHover={{ rotate: [0, -10, 10, 0] }}
            transition={{ duration: 0.5 }}
            className="transform group-hover:scale-110 transition-transform duration-300"
            >
            {skill.icon}
            </motion.div>
            <span className="text-xs font-bold uppercase tracking-wider font-mono">
            {skill.name}
            </span>
            </motion.div>
        ))}
        </div>
        </section>
    );
}
