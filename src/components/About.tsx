"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useRef } from "react";

const passions = [
  {
    icon: "COFFEE",
    name: "Cafe",
    description: "O combustivel de toda boa ideia",
  },
  {
    icon: "CODE",
    name: "Tecnologia",
    description: "Transformando codigo em impacto",
  },
  {
    icon: "THINK",
    name: "Filosofia",
    description: "Pensamento profundo sobre sistemas",
  },
];

export default function About() {
  const prefersReducedMotion = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="py-32 px-6 bg-muted/10 relative overflow-hidden"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-5xl md:text-6xl text-offwhite mb-4">
            SOBRE <span className="text-quark">MIM</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex justify-center"
          >
            <div className="relative">
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-quark/20 to-electric/20 rounded-2xl blur-xl"
                animate={prefersReducedMotion ? {} : { scale: [1, 1.05, 1] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              />
              <motion.div
                className="relative w-64 h-64 md:w-80 md:h-80 bg-gradient-to-br from-muted/40 to-muted/20 rounded-2xl border border-quark/30 flex items-center justify-center backdrop-blur-sm"
                whileHover={prefersReducedMotion ? {} : { scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div
                  className="font-display text-8xl text-quark/60"
                  animate={prefersReducedMotion ? {} : { scale: [1, 1.02, 1] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                >
                  H4
                </motion.div>
              </motion.div>
              <motion.div
                className="absolute -bottom-4 -right-4 w-24 h-24 bg-carbon/80 rounded-xl border border-quark/30 flex items-center justify-center backdrop-blur-md"
                animate={
                  prefersReducedMotion
                    ? {}
                    : {
                        y: [0, -6, 0],
                        rotate: [0, 2, 0],
                      }
                }
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              >
                <span className="font-mono text-quark text-lg">{'< />'}</span>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <motion.p
              className="font-mono text-lg text-quark leading-relaxed"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              while (cafe) {'{'}
              <br />
              &nbsp;&nbsp;codigo++;
              <br />
              &nbsp;&nbsp;ideias++;
              <br />
              {'}'}
            </motion.p>
            <motion.p
              className="font-body text-dim leading-relaxed"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              Acadêmico de Ciência da Computação que acredita: bom código nasce de
              uma boa xícara. Aqui a filosofia encontra a engenharia.
            </motion.p>

            <div className="grid sm:grid-cols-3 gap-4 pt-4">
              {passions.map((passion, index) => (
                <motion.div
                  key={passion.name}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={prefersReducedMotion ? {} : { y: -8, scale: 1.02 }}
                  className="text-center p-4 bg-carbon/50 rounded-xl border border-muted/30 hover:border-quark/40 hover:bg-carbon/80 transition-all cursor-default group"
                >
                  <motion.div
                    className="text-3xl mb-2"
                    whileHover={prefersReducedMotion ? {} : { scale: 1.15, rotate: 5 }}
                  >
                    {passion.icon === "COFFEE" && "☕"}
                    {passion.icon === "CODE" && "💻"}
                    {passion.icon === "THINK" && "🤔"}
                  </motion.div>
                  <h4 className="font-display text-lg text-offwhite group-hover:text-quark transition-colors">
                    {passion.name}
                  </h4>
                  <p className="font-body text-xs text-dim mt-1 leading-tight">
                    {passion.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
