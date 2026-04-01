"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function GithubStatus() {
    const [lastCommit, setLastCommit] = useState<string | null>(null);

    useEffect(() => {
        fetch("https://api.github.com/users/mjdias2006/events")
        .then(res => res.json())
        .then(data => {
            const pushEvent = data.find((e: any) => e.type === "PushEvent");
            if (pushEvent) {
                const date = new Date(pushEvent.created_at).toLocaleDateString('pt-BR');
                setLastCommit(date);
            }
        })
        .catch(() => setLastCommit(null));
    }, []);

    if (!lastCommit) return null;

    return (
        <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="flex items-center gap-2 text-[10px] font-mono text-slate-500 uppercase tracking-tighter"
        >
        <span className="relative flex h-2 w-2">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
        </span>
        Último deploy: {lastCommit}
        </motion.div>
    );
}
