"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

export default function CursorAndGrid() {
    const [isMounted, setIsMounted] = useState(false);
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const springConfig = { stiffness: 150, damping: 20 };
    const springX = useSpring(mouseX, springConfig);
    const springY = useSpring(mouseY, springConfig);

    const [particles, setParticles] = useState<{ left: string; top: string; duration: number }[]>([]);

    useEffect(() => {
        setIsMounted(true);

        const handleMouseMove = (e: MouseEvent) => {
            mouseX.set(e.clientX);
            mouseY.set(e.clientY);
        };

        // Gera posições em 'vw/vh' para não quebrar a animação
        const generated = Array.from({ length: 25 }).map(() => ({
            left: `${Math.random() * 100}vw`,
                                                                top: `${Math.random() * 100}vh`,
                                                                duration: Math.random() * 10 + 15, // Mais lentas e orgânicas
        }));
        setParticles(generated);

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, [mouseX, mouseY]);

    if (!isMounted) return null;

    return (
        <>
        {/* 1. Mancha de Luz que SEGUE O MOUSE */}
        <div className="fixed inset-0 -z-30 overflow-hidden pointer-events-none">
        <motion.div
        className="absolute top-0 left-0 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none"
        style={{
            x: springX,
            y: springY,
            translateX: "-50%", // Centraliza o brilho exatamente na ponta do mouse
            translateY: "-50%",
        }}
        />
        </div>

        {/* 2. Partículas Flutuantes Animadas */}
        <div className="fixed inset-0 -z-20 overflow-hidden pointer-events-none">
        {particles.map((p, i) => (
            <motion.div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400 rounded-full blur-[1px]"
            style={{ left: p.left, top: p.top }}
            animate={{
                y: [0, -150, 0], // Move 150px para cima e desce
                opacity: [0.1, 0.7, 0.1], // Pulsa o brilho
            }}
            transition={{
                duration: p.duration,
                repeat: Infinity,
                ease: "easeInOut"
            }}
            />
        ))}
        </div>

        {/* 3. Grid de Engenharia Estático */}
        <div
        className="fixed inset-0 -z-10 opacity-[0.03] pointer-events-none"
        style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 40L40 0H20L0 20M40 40V20L20 40' fill='%2322d3ee' fill-opacity='1'/%3E%3C/svg%3E")` }}
        />

        {/* 4. Cursores Customizados */}
        <motion.div
        className="fixed top-0 left-0 w-8 h-8 border-2 border-cyan-500 rounded-full pointer-events-none z-[9999] hidden md:block"
        style={{ x: springX, y: springY, translateX: "-50%", translateY: "-50%" }}
        />
        <motion.div
        className="fixed top-0 left-0 w-1.5 h-1.5 bg-cyan-400 rounded-full pointer-events-none z-[9999] hidden md:block"
        style={{ x: mouseX, y: mouseY, translateX: "-50%", translateY: "-50%" }}
        />
        </>
    );
}
