"use client";

import { motion } from "framer-motion";

export default function Header() {
    const links = [
        { name: "Sobre", href: "#about" },
        { name: "Experiência", href: "#experience" },
        { name: "Projetos", href: "#projects" },
        { name: "Contato", href: "#contact" }
    ];

    return (
        <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
        className="fixed top-0 left-0 right-0 z-50 bg-slate-950/70 backdrop-blur-xl border-b border-white/5 py-4 px-6"
        >
        <div className="max-w-6xl mx-auto flex justify-end items-center">
        <nav className="flex gap-8 text-sm font-medium text-slate-300">
        {links.map((link, index) => (
            <motion.a
            key={link.name}
            href={link.href}
            className="relative hover:text-cyan-400 transition-colors"
            whileHover={{ y: -2 }}
            transition={{ type: "spring", stiffness: 300 }}
            >
            {link.name}
            <motion.span
            className="absolute left-0 bottom-0 w-0 h-px bg-cyan-400"
            whileHover={{ width: "100%" }}
            transition={{ duration: 0.3 }}
            />
            </motion.a>
        ))}
        </nav>
        </div>
        </motion.header>
    );
}
