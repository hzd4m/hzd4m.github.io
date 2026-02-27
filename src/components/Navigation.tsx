"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { navSlideDown, mobileMenuSlide, staggerContainer } from "@/animation/variants";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "Tech", href: "#tech" },
  { name: "Sobre", href: "#about" },
  { name: "Projetos", href: "#projects" },
  { name: "Blog", href: "#blog" },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <>
      <motion.nav
        variants={prefersReducedMotion ? undefined : navSlideDown}
        initial="hidden"
        animate="visible"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-carbon/95 backdrop-blur-md border-b border-muted/50 shadow-lg shadow-quark/5"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <motion.a
            href="#home"
            className="font-display text-3xl text-quark tracking-wider relative group"
            whileHover={prefersReducedMotion ? {} : { scale: 1.02 }}
            whileTap={prefersReducedMotion ? {} : { scale: 0.98 }}
          >
            <span className="relative z-10">HZD4M</span>
            <motion.span
              className="absolute inset-0 bg-quark/20 rounded-lg blur-lg opacity-0 group-hover:opacity-100 transition-opacity"
              layoutId="logo-glow"
            />
          </motion.a>

          <div className="hidden md:flex gap-8">
            {navLinks.map((link) => (
              <motion.a
                key={link.name}
                href={link.href}
                className="font-body text-sm uppercase tracking-widest relative group"
                whileHover={prefersReducedMotion ? {} : { y: -2 }}
                custom={link.name}
              >
                <span className="relative z-10 text-offwhite group-hover:text-quark transition-colors duration-200">
                  {link.name}
                </span>
                <motion.span
                  className="absolute -bottom-1 left-0 h-0.5 bg-quark"
                  initial={{ width: "0%" }}
                  whileHover={{ width: "100%" }}
                  transition={{ duration: 0.2 }}
                />
              </motion.a>
            ))}
          </div>

          <motion.button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-offwhite p-2 relative z-50"
            aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={isOpen}
            whileHover={prefersReducedMotion ? {} : { scale: 1.1 }}
            whileTap={prefersReducedMotion ? {} : { scale: 0.9 }}
          >
            <div className="w-6 h-5 flex flex-col justify-between">
              <motion.span
                className="w-full h-0.5 bg-offwhite origin-center"
                animate={
                  isOpen
                    ? { rotate: 45, y: 8 }
                    : { rotate: 0, y: 0 }
                }
                transition={{ duration: 0.2 }}
              />
              <motion.span
                className="w-full h-0.5 bg-offwhite"
                animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
                transition={{ duration: 0.2 }}
              />
              <motion.span
                className="w-full h-0.5 bg-offwhite origin-center"
                animate={
                  isOpen
                    ? { rotate: -45, y: -8 }
                    : { rotate: 0, y: 0 }
                }
                transition={{ duration: 0.2 }}
              />
            </div>
          </motion.button>
        </div>
      </motion.nav>

      <AnimatePresence mode="wait">
        {isOpen && (
          <motion.div
            variants={prefersReducedMotion ? undefined : mobileMenuSlide}
            initial="closed"
            animate="open"
            exit="exit"
            className="fixed inset-0 z-40 bg-carbon/98 backdrop-blur-xl md:hidden"
          >
            <motion.div
              variants={prefersReducedMotion ? undefined : staggerContainer}
              initial="hidden"
              animate="visible"
              className="flex flex-col items-center justify-center h-full gap-8"
            >
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="font-display text-5xl text-offwhite hover:text-quark transition-colors relative"
                  custom={i}
                  variants={prefersReducedMotion ? undefined : {
                    hidden: { opacity: 0, x: 30 },
                    visible: { opacity: 1, x: 0 },
                  }}
                  whileHover={prefersReducedMotion ? {} : { x: 10 }}
                  transition={{ delay: i * 0.08 }}
                >
                  {link.name}
                  <motion.span
                    className="absolute -right-8 top-1/2 -translate-y-1/2 text-quark opacity-0 group-hover:opacity-100"
                    initial={{ opacity: 0, x: -10 }}
                    whileHover={{ opacity: 1, x: 0 }}
                  >
                    →
                  </motion.span>
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
