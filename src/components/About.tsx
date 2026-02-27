"use client";

import { motion } from "framer-motion";

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
  return (
    <section
      id="about"
      className="py-32 px-6 bg-muted/20"
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
          >
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 mx-auto bg-gradient-to-br from-quark/20 to-electric/20 rounded-2xl border border-quark/30 flex items-center justify-center">
                <div className="font-display text-8xl text-quark/50">H4</div>
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-quark/10 rounded-xl border border-quark/20 flex items-center justify-center">
                <span className="font-mono text-quark">&lt;/&gt;</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <p className="font-body text-lg text-offwhite leading-relaxed">
              Acadêmico de <span className="text-quark">Ciência da Computação</span> com
              paixão por construir software que funciona quando mais importa.
              Desenvolvedor Full Stack com experiência em múltiplas linguagens e
              paradigmas.
            </p>
            <p className="font-body text-dim leading-relaxed">
              Especializado em desenvolvimento de sistemas robustos, arquitetura
              de software e resolução de problemas complexos. Acredito que bom
              código é como uma boa filosofia: simples, elegante e funcional.
            </p>

            <div className="grid sm:grid-cols-3 gap-4 pt-4">
              {passions.map((passion, index) => (
                <motion.div
                  key={passion.name}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center p-4 bg-carbon rounded-xl border border-muted hover:border-quark/50 transition-colors"
                >
                  <div className="text-3xl mb-2">{passion.icon}</div>
                  <h4 className="font-display text-lg text-offwhite">
                    {passion.name}
                  </h4>
                  <p className="font-body text-xs text-dim mt-1">
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
