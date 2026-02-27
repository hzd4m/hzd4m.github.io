"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useRef } from "react";
import { posts } from "@/data/posts";
import { scrollReveal } from "@/animation/variants";

export default function Blog() {
  const prefersReducedMotion = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);

  return (
    <section
      ref={sectionRef}
      id="blog"
      className="py-32 px-6 bg-muted/10 relative overflow-hidden"
    >
      {/* Background accents */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-quark/20 to-transparent" />
      <div className="absolute bottom-1/3 right-0 w-64 h-64 bg-electric/5 rounded-full blur-[80px]" />

      <div className="max-w-6xl mx-auto">
        <motion.div
          variants={prefersReducedMotion ? undefined : scrollReveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-5xl md:text-6xl text-offwhite mb-4">
            CRONICAS
          </h2>
          <p className="font-body text-dim max-w-xl mx-auto">
            Reflexoes sobre tecnologia, codigo e filosofia
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {posts.map((post, index) => (
            <motion.article
              key={post.slug}
              variants={prefersReducedMotion ? undefined : scrollReveal}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1 }}
              whileHover={prefersReducedMotion ? {} : { y: -6 }}
              className="bg-carbon/50 rounded-xl p-6 border border-muted/30 hover:border-quark/50 hover:shadow-[0_0_30px_rgba(0,245,255,0.05)] transition-all duration-300 group cursor-pointer"
            >
              <div className="flex items-center gap-3 mb-4">
                <motion.span
                  className="font-mono text-xs text-electric bg-electric/10 px-2 py-1 rounded"
                  whileHover={prefersReducedMotion ? {} : { scale: 1.05 }}
                >
                  {post.category}
                </motion.span>
                <span className="font-body text-xs text-dim">
                  {new Date(post.date).toLocaleDateString("pt-BR", {
                    day: "numeric",
                    month: "short",
                    year: "numeric",
                  })}
                </span>
              </div>

              <motion.h3
                className="font-display text-xl text-offwhite mb-3 group-hover:text-quark transition-colors duration-200"
                whileHover={prefersReducedMotion ? {} : { x: 3 }}
              >
                {post.title}
              </motion.h3>

              <p className="font-body text-sm text-dim leading-relaxed">
                {post.excerpt}
              </p>

              <motion.div
                className="mt-4 pt-4 border-t border-muted/30 flex items-center gap-2"
                whileHover={prefersReducedMotion ? {} : { x: 4 }}
              >
                <span className="font-body text-sm text-quark group-hover:text-electric transition-colors">
                  Ler mais
                </span>
                <motion.span
                  className="text-quark"
                  animate={prefersReducedMotion ? {} : { x: [0, 3, 0] }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1,
                  }}
                >
                  →
                </motion.span>
              </motion.div>
            </motion.article>
          ))}
        </div>

        <motion.div
          variants={prefersReducedMotion ? undefined : scrollReveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-center mt-12"
        >
          <motion.a
            href="/blog"
            className="inline-flex items-center gap-3 font-body text-offwhite border border-quark/40 px-8 py-3 rounded-lg hover:bg-quark/10 hover:border-quark transition-all duration-300 group"
            whileHover={prefersReducedMotion ? {} : { scale: 1.02, y: -2 }}
            whileTap={prefersReducedMotion ? {} : { scale: 0.98 }}
          >
            Ver todas as cronicas
            <motion.span
              className="text-quark"
              animate={prefersReducedMotion ? {} : { x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            >
              →
            </motion.span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
