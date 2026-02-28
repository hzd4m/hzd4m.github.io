"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useRef } from "react";
import { scrollReveal, cardHover } from "@/animation/variants";

const passions = [
  {
    icon: "☕",
    name: "Café",
    description: "O combustivel de toda boa ideia",
  },
  {
    icon: "💻",
    name: "Tecnologia",
    description: "Transformando codigo em impacto",
  },
  {
    icon: "🤔",
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
      {/* Decorative elements */}
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-quark/5 rounded-full blur-[80px] -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-px h-32 bg-gradient-to-t from-quark/20 to-transparent" />

      <div className="max-w-6xl mx-auto">
        <motion.div
          variants={prefersReducedMotion ? undefined : scrollReveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-5xl md:text-6xl text-offwhite mb-4">
            SOBRE <span className="text-quark">MIM</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Avatar section */}
          <motion.div
            variants={prefersReducedMotion ? undefined : scrollReveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="flex justify-center"
          >
            <div className="relative">
              {/* Glow effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-quark/20 to-electric/20 rounded-2xl blur-xl"
                animate={prefersReducedMotion ? {} : { scale: [1, 1.05, 1] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              />

              {/* Main avatar */}
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

              {/* Floating badge */}
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
                <span className="font-mono text-quark text-lg">&lt;/&gt;</span>
              </motion.div>
            </div>
          </motion.div>

          {/* Content section */}
          <motion.div
            variants={prefersReducedMotion ? undefined : scrollReveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="space-y-6"
          >
            <motion.p
              className="font-mono text-lg text-quark leading-relaxed"
              variants={prefersReducedMotion ? undefined : scrollReveal}
            >
              while (café) &#123;
              <br />
              &nbsp;&nbsp;codigo++;
              <br />
              &nbsp;&nbsp;ideias++;
              <br />
              &#125;
            </motion.p>
            <motion.p
              className="font-body text-dim leading-relaxed"
              variants={prefersReducedMotion ? undefined : scrollReveal}
            >
              Acadêmico de Ciência da Computação que acredita: bom código nasce de
              uma boa xícara. Aqui a filosofia encontra a engenharia.
            </motion.p>

            {/* Passion cards */}
            <div className="grid sm:grid-cols-3 gap-4 pt-4">
              {passions.map((passion, index) => (
                <motion.div
                  key={passion.name}
                  variants={prefersReducedMotion ? undefined : scrollReveal}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 }}
                  whileHover={prefersReducedMotion ? {} : { y: -8, scale: 1.02 }}
                  className="text-center p-4 bg-carbon/50 rounded-xl border border-muted/30 hover:border-quark/40 hover:bg-carbon/80 transition-all cursor-default group"
                >
                  <motion.div
                    className="text-3xl mb-2"
                    whileHover={prefersReducedMotion ? {} : { scale: 1.15, rotate: 5 })}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    {passion.icon}
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
