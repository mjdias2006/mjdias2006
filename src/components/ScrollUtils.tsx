"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import { useEffect, useState } from "react";
import { ChevronUp } from "lucide-react";

export default function ScrollUtils() {
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    const [showTop, setShowTop] = useState(false);

    useEffect(() => {
        const checkScroll = () => {
            setShowTop(window.scrollY > 400);
        };
        window.addEventListener("scroll", checkScroll);
        return () => window.removeEventListener("scroll", checkScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <>

        <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-cyan-500 origin-left z-[60]"
        style={{ scaleX }}
        />

        {showTop && (
            <motion.button
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 p-3 bg-blue-600 text-white rounded-full shadow-lg z-50 hover:bg-cyan-500 transition-colors border border-white/10"
            >
            <ChevronUp size={24} />
            </motion.button>
        )}
        </>
    );
}
