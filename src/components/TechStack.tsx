"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useRef } from "react";
import { techStack } from "@/data/projects";
import { scrollReveal, techTagPop, cardHover } from "@/animation/variants";

export default function TechStack() {
  const prefersReducedMotion = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);

  return (
    <section
      ref={sectionRef}
      id="tech"
      className="py-32 px-6 bg-carbon relative overflow-hidden"
    >
      {/* Background accent */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-quark/30 to-transparent" />
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-quark/5 rounded-full blur-[100px]" />

      <div className="max-w-6xl mx-auto">
        <motion.div
          variants={prefersReducedMotion ? undefined : scrollReveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-5xl md:text-6xl text-offwhite mb-4">
            TECH <span className="text-quark">STACK</span>
          </h2>
          <p className="font-body text-dim max-w-xl mx-auto">
            Ferramentas que transformam ideias em realidade
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {techStack.map((category, catIndex) => (
            <motion.div
              key={category.name}
              variants={prefersReducedMotion ? undefined : scrollReveal}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: catIndex * 0.1 }}
              whileHover={prefersReducedMotion ? {} : { y: -6 }}
              className="bg-muted/20 border border-muted/50 rounded-xl p-6 hover:border-quark/40 transition-colors duration-300 group cursor-default"
            >
              <h3 className="font-display text-2xl text-offwhite mb-5 flex items-center gap-3">
                <motion.span
                  className="w-2 h-2 bg-quark rounded-full"
                  animate={prefersReducedMotion ? {} : { scale: [1, 1.3, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: catIndex * 0.3 }}
                />
                {category.name}
              </h3>
              <div className="flex flex-wrap gap-2.5">
                {category.technologies.map((tech, techIndex) => (
                  <motion.span
                    key={tech}
                    variants={prefersReducedMotion ? undefined : techTagPop}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ delay: catIndex * 0.1 + techIndex * 0.03 }}
                    whileHover={prefersReducedMotion ? {} : { scale: 1.08, y: -2 }}
                    className="font-mono text-sm text-electric/80 bg-carbon/50 px-3 py-1.5 rounded-md border border-muted/50 hover:border-quark/60 hover:text-quark hover:bg-quark/5 transition-all cursor-default"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
