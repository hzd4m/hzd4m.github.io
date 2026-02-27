"use client";

import { motion, useReducedMotion } from "framer-motion";
import { scrollReveal } from "@/animation/variants";

const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/hzd4m",
    icon: (
      <svg
        className="w-5 h-5"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          fillRule="evenodd"
          d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
          clipRule="evenodd"
        />
      </svg>
    ),
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/in/hzd4m",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
      </svg>
    ),
  },
  {
    name: "Email",
    href: "mailto:contato@hzd4m.dev",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
];

export default function Footer() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <footer className="py-16 px-6 bg-carbon border-t border-muted/30 relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-48 bg-quark/5 rounded-full blur-[100px]" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <motion.div
            variants={prefersReducedMotion ? undefined : scrollReveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center md:text-left"
          >
            <motion.a
              href="#home"
              className="font-display text-3xl text-quark tracking-wider inline-block relative group"
              whileHover={prefersReducedMotion ? {} : { scale: 1.02 }}
              whileTap={prefersReducedMotion ? {} : { scale: 0.98 }}
            >
              <span className="relative z-10">HZD4M</span>
              <motion.span
                className="absolute inset-0 bg-quark/20 rounded-lg blur-lg opacity-0 group-hover:opacity-100 transition-opacity"
                layoutId="footer-logo-glow"
              />
            </motion.a>
            <p className="font-body text-dim mt-2">
              Desenvolvedor de Software & Ideias
            </p>
          </motion.div>

          {/* Social links with enhanced interactions */}
          <motion.div
            className="flex gap-4"
            variants={prefersReducedMotion ? undefined : scrollReveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            {socialLinks.map((link, index) => (
              <motion.a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                variants={prefersReducedMotion ? undefined : {
                  hidden: { opacity: 0, y: 10 },
                  visible: { opacity: 1, y: 0 },
                }}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: 0.1 + index * 0.05 }}
                whileHover={prefersReducedMotion ? {} : {
                  scale: 1.15,
                  y: -3,
                }}
                whileTap={prefersReducedMotion ? {} : { scale: 0.9 }}
                className="text-dim hover:text-quark transition-colors p-3 rounded-lg hover:bg-muted/30 border border-transparent hover:border-muted/50 group"
                aria-label={link.name}
              >
                <motion.span
                  animate={prefersReducedMotion ? {} : {
                    rotate: [0, 5, -5, 0],
                  }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  {link.icon}
                </motion.span>
              </motion.a>
            ))}
          </motion.div>
        </div>

        <motion.div
          variants={prefersReducedMotion ? undefined : scrollReveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-12 pt-8 border-t border-muted/30 flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <p className="font-body text-sm text-dim">
            © {new Date().getFullYear()} Hzd4m. Todos os direitos reservados.
          </p>
          <p className="font-body text-sm text-dim">
            Built with{" "}
            <motion.span
              className="text-electric"
              whileHover={prefersReducedMotion ? {} : { scale: 1.1 }}
            >
              Next.js
            </motion.span>{" "}
            +{" "}
            <motion.span
              className="text-quark"
              whileHover={prefersReducedMotion ? {} : { scale: 1.1 }}
            >
              QUARK
            </motion.span>
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
