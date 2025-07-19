"use client";

import { useEffect } from "react";
import { motion, useMotionValue, useMotionTemplate } from "framer-motion";

export function Vortex({ children }) {
  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { innerWidth, innerHeight } = window;
      mouseX.set(e.clientX / innerWidth);
      mouseY.set(e.clientY / innerHeight);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  // Gradient muy visible (fondo morado claro con borde)
  const background = useMotionTemplate`radial-gradient(400px at ${mouseX.get() * 100}% ${mouseY.get() * 100}%, rgba(168, 85, 247, 0.4), transparent 70%)`;

  return (
    <motion.div className="relative min-h-screen w-full overflow-x-hidden bg-black text-white">
      {/* Fondo animado */}
      <motion.div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{ background }}
      />
      
      {/* Contenido encima */}
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
}
