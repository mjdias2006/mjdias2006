"use client";

import { motion } from "framer-motion";
import { FaLinkedinIn, FaGithub, FaEnvelope } from "react-icons/fa";

export default function Contact() {
    const contactLinks = [
        { name: "Email", href: "mailto:mj.dias@proton.me", icon: <FaEnvelope />, value: "mj.dias@proton.me" },
        { name: "LinkedIn", href: "https://linkedin.com/in/mjdias2006", icon: <FaLinkedinIn />, value: "/mjdias2006" },
        { name: "GitHub", href: "https://github.com/mjdias2006", icon: <FaGithub />, value: "/mjdias2006" }
    ];

    return (
        <motion.section
        id="contact"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 1 }}
        className="py-24 text-center border-t border-white/5 relative overflow-hidden mt-10"
        >
        {/* Brilho sutil no contato */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-cyan-600/10 rounded-full blur-[100px] -z-10" />

        <motion.h3
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl font-black mb-12 text-white tracking-tight"
        >
        Pronto para transformar o caos dos seus dados em pipelines de valor?
        </motion.h3>

        <div className="flex flex-col md:flex-row justify-center gap-6 text-lg font-medium max-w-4xl mx-auto px-4">
        {contactLinks.map((link, index) => (
            <motion.a
            key={link.name}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 100, damping: 15, delay: index * 0.15 }}
            whileHover={{ y: -5, borderColor: "rgba(34,211,238,0.5)", color: "#22d3ee" }}
            className="flex-1 flex items-center gap-4 p-6 glass-card rounded-2xl border border-white/5 transition-all text-slate-300 hover:text-cyan-400 group"
            >
            <div className="text-2xl text-cyan-500 group-hover:scale-110 transition-transform">
            {link.icon}
            </div>
            <div className="text-left">
            <span className="text-xs text-slate-500 font-mono block uppercase tracking-wider">{link.name}</span>
            <span className="font-semibold text-base break-all text-white group-hover:text-cyan-400">{link.value}</span>
            </div>
            </motion.a>
        ))}
        </div>

        <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.8 }}
        className="mt-24 text-slate-600 text-xs font-mono tracking-wider"
        >
        © 2026 Miguel Jesus Dias. <br />
        Fluid UI desenhada com Next.js, Tailwind & Framer Motion.
        </motion.p>
        </motion.section>
    );
}
