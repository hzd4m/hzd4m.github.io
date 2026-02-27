"use client";

import { motion } from "framer-motion";
import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <section id="projects" className="py-32 px-6 bg-carbon">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-5xl md:text-6xl text-offwhite mb-4">
            PROJETOS
          </h2>
          <p className="font-body text-dim max-w-xl mx-auto">
            Construções que demonstram capacidade técnica
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              className={`relative bg-muted/30 rounded-2xl p-8 border transition-all duration-300 hover:border-quark/50 hover:shadow-[0_0_30px_rgba(0,245,255,0.1)] group ${
                project.featured ? "md:col-span-2" : ""
              }`}
            >
              {project.featured && (
                <div className="absolute top-4 right-4">
                  <span className="font-mono text-xs text-quark bg-quark/10 px-3 py-1 rounded-full border border-quark/30">
                    DESTAQUE
                  </span>
                </div>
              )}

              <h3 className="font-display text-3xl md:text-4xl text-offwhite mb-4 group-hover:text-quark transition-colors">
                {project.title}
              </h3>

              <p className="font-body text-dim mb-6 leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="font-mono text-xs text-electric bg-carbon px-3 py-1 rounded-md border border-muted"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {project.hasLink && project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 mt-6 font-body text-sm text-quark hover:text-electric transition-colors"
                >
                  Ver projeto
                  <span className="text-lg">→</span>
                </a>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
