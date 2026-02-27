"use client";

import { motion } from "framer-motion";

const codeTagline = `const impacto = () => {
  return "software" + "ideias";
};`;

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center items-center relative overflow-hidden"
    >
      {/* Background Grid Effect */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(0, 245, 255, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0, 245, 255, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      {/* Glow orbs */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-quark/20 rounded-full blur-[100px]" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-electric/20 rounded-full blur-[100px]" />

      <div className="relative z-10 text-center px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="font-display text-7xl md:text-9xl text-offwhite tracking-wider mb-4">
            <span className="text-quark drop-shadow-[0_0_30px_rgba(0,245,255,0.5)]">
              HZD
            </span>
            <span className="text-dim">4M</span>
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="font-body text-xl md:text-2xl text-dim mb-8"
        >
          Desenvolvedor de Software & Ideias
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="font-mono text-sm md:text-base text-electric/80 bg-muted/50 px-6 py-3 rounded-lg inline-block"
        >
          <span className="text-quark">&gt;</span> {codeTagline}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
        >
          <a
            href="#tech"
            className="flex flex-col items-center gap-2 text-dim hover:text-quark transition-colors"
          >
            <span className="font-body text-xs uppercase tracking-widest">
              Explore
            </span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="w-6 h-10 border-2 border-dim rounded-full flex justify-center pt-2"
            >
              <div className="w-1 h-2 bg-quark rounded-full" />
            </motion.div>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
