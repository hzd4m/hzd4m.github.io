"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useRef } from "react";
import { projects } from "@/data/projects";
import { scrollReveal, cardHover } from "@/animation/variants";

export default function Projects() {
  const prefersReducedMotion = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="py-32 px-6 bg-carbon relative"
    >
      {/* Background accents */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-quark/3 rounded-full blur-[150px]" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          variants={prefersReducedMotion ? undefined : scrollReveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-5xl md:text-6xl text-offwhite mb-4">
            PROJETOS
          </h2>
          <p className="font-body text-dim max-w-xl mx-auto">
            Construções que demonstram capacidade técnica
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.article
              key={project.id}
              variants={prefersReducedMotion ? undefined : scrollReveal}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.15 }}
              whileHover={prefersReducedMotion ? {} : { y: -8 }}
              className={`relative bg-muted/20 rounded-2xl p-8 border border-muted/40 hover:border-quark/50 hover:shadow-[0_0_40px_rgba(0,245,255,0.08)] transition-all duration-300 group cursor-pointer ${
                project.featured ? "md:col-span-2" : ""
              }`}
            >
              {/* Hover glow effect */}
              <motion.div
                className="absolute inset-0 rounded-2xl bg-quark/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                layoutId="project-glow"
              />

              {project.featured && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  className="absolute top-4 right-4"
                >
                  <span className="font-mono text-xs text-quark bg-quark/10 px-3 py-1 rounded-full border border-quark/30">
                    DESTAQUE
                  </span>
                </motion.div>
              )}

              <div className="relative z-10">
                <motion.h3
                  className="font-display text-3xl md:text-4xl text-offwhite mb-4 group-hover:text-quark transition-colors duration-300"
                  whileHover={prefersReducedMotion ? {} : { x: 4 }}
                >
                  {project.title}
                </motion.h3>

                <p className="font-body text-dim mb-6 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <motion.span
                      key={tech}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: techIndex * 0.05 }}
                      whileHover={prefersReducedMotion ? {} : { scale: 1.1, y: -2 }}
                      className="font-mono text-xs text-electric/80 bg-carbon/50 px-3 py-1 rounded-md border border-muted/40 hover:border-quark/50 hover:text-quark transition-all cursor-default"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>

                {project.hasLink && project.link && (
                  <motion.a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 mt-6 font-body text-sm text-quark group/link"
                    whileHover={prefersReducedMotion ? {} : { x: 6 }}
                    whileTap={prefersReducedMotion ? {} : { scale: 0.98 }}
                  >
                    Ver projeto
                    <motion.span
                      className="text-lg"
                      animate={prefersReducedMotion ? {} : { x: [0, 4, 0] }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 0.5,
                      }}
                    >
                      →
                    </motion.span>
                  </motion.a>
                )}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
