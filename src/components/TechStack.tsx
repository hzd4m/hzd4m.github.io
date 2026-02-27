"use client";

import { motion } from "framer-motion";
import { techStack } from "@/data/projects";

export default function TechStack() {
  return (
    <section id="tech" className="py-32 px-6 bg-carbon">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-5xl md:text-6xl text-offwhite mb-4">
            TECH <span className="text-quark">STACK</span>
          </h2>
          <p className="font-body text-dim max-w-xl mx-auto">
            Ferramentas que transformam ideias em realidade
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {techStack.map((category, catIndex) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: catIndex * 0.1, duration: 0.5 }}
              className="bg-muted/30 border border-muted rounded-xl p-6 hover:border-quark/50 transition-colors group"
            >
              <h3 className="font-display text-2xl text-offwhite mb-4 flex items-center gap-2">
                <span className="w-2 h-2 bg-quark rounded-full group-hover:animate-pulse" />
                {category.name}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.technologies.map((tech, techIndex) => (
                  <motion.span
                    key={tech}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      delay: catIndex * 0.1 + techIndex * 0.05,
                    }}
                    className="font-mono text-sm text-electric bg-carbon px-3 py-1 rounded-md border border-muted hover:border-quark hover:text-quark transition-colors cursor-default"
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
