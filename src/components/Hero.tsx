"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const codeTagline = `const impacto = () => {
  return "café" + "código" + "♥";
};`;

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section
      ref={containerRef}
      id="home"
      className="min-h-screen flex flex-col justify-center items-center relative overflow-hidden"
    >
      {/* Animated background grid */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(0, 245, 255, 1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0, 245, 255, 1) 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
          }}
        />
        {/* Subtle grid movement */}
        {!prefersReducedMotion && (
          <motion.div
            className="absolute inset-0 opacity-[0.02]"
            style={{
              backgroundImage: `
                linear-gradient(rgba(0, 245, 255, 1) 1px, transparent 1px),
                linear-gradient(90deg, rgba(0, 245, 255, 1) 1px, transparent 1px)
              `,
              backgroundSize: "60px 60px",
            }}
            animate={{ backgroundPosition: ["0px 0px", "60px 60px"] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          />
        )}
      </div>

      {/* Floating glow orbs */}
      <motion.div
        className="absolute top-[15%] left-[10%] w-96 h-96 bg-quark/15 rounded-full blur-[120px]"
        animate={
          prefersReducedMotion
            ? {}
            : {
                scale: [1, 1.1, 1],
                opacity: [0.3, 0.5, 0.3],
              }
        }
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-[15%] right-[10%] w-80 h-80 bg-electric/10 rounded-full blur-[100px]"
        animate={
          prefersReducedMotion
            ? {}
            : {
                scale: [1.1, 1, 1.1],
                opacity: [0.2, 0.4, 0.2],
              }
        }
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />

      {/* Main content */}
      <motion.div
        style={{ y: prefersReducedMotion ? 0 : y, opacity }}
        className="relative z-10 text-center px-6"
      >
        {/* Main heading with character-by-character reveal */}
        <motion.h1
          className="font-display text-7xl md:text-9xl text-offwhite tracking-wider mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: prefersReducedMotion ? 0.1 : 0.8 }}
        >
          <motion.span
            className="inline-block"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: prefersReducedMotion ? 0.1 : 0.6,
              delay: prefersReducedMotion ? 0 : 0.1,
            }}
          >
            ZD<span className="text-quark drop-shadow-[0_0_40px_rgba(0,245,255,0.6)]">4M</span>
          </motion.span>
        </motion.h1>

        {/* Tagline with typewriter effect */}
        <motion.p
          className="font-body text-xl md:text-2xl text-dim mb-8"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: prefersReducedMotion ? 0.1 : 0.5,
            delay: prefersReducedMotion ? 0 : 0.4,
          }}
        >
          Café e Código <span className="text-quark">♥</span>
        </motion.p>

        {/* Code snippet with typing effect */}
        <motion.div
          className="font-mono text-sm md:text-base text-electric/90 bg-muted/40 px-6 py-3 rounded-lg inline-block border border-muted/50"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: prefersReducedMotion ? 0.1 : 0.5,
            delay: prefersReducedMotion ? 0 : 0.6,
          }}
        >
          <motion.span
            className="text-quark inline-block"
            animate={prefersReducedMotion ? {} : { opacity: [1, 1, 0, 1] }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          >
            &gt;
          </motion.span>{" "}
          <motion.span
            className="inline-block overflow-hidden border-r-2 border-quark"
            initial={{ width: "0%" }}
            animate={{ width: "auto" }}
            transition={{
              duration: prefersReducedMotion ? 0.1 : 1.5,
              delay: prefersReducedMotion ? 0 : 0.7,
              ease: "easeInOut",
            }}
          >
            {codeTagline}
          </motion.span>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: prefersReducedMotion ? 0.1 : 0.5,
            delay: prefersReducedMotion ? 0 : 1.2,
          }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
        >
          <motion.a
            href="#tech"
            className="flex flex-col items-center gap-3 group cursor-pointer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="font-body text-xs uppercase tracking-[0.3em] text-dim group-hover:text-quark transition-colors">
              Explore
            </span>
            <motion.div
              className="w-8 h-14 border-2 border-dim/50 rounded-full flex justify-center pt-2 group-hover:border-quark/50 transition-colors"
              animate={
                prefersReducedMotion
                  ? {}
                  : {
                      y: [0, 4, 0],
                    }
              }
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <motion.div
                className="w-1.5 h-3 bg-quark rounded-full"
                animate={prefersReducedMotion ? {} : { opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              />
            </motion.div>
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
}
