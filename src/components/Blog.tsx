"use client";

import { motion } from "framer-motion";
import { posts } from "@/data/posts";

export default function Blog() {
  return (
    <section id="blog" className="py-32 px-6 bg-muted/20">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-5xl md:text-6xl text-offwhite mb-4">
            CRÔNICAS
          </h2>
          <p className="font-body text-dim max-w-xl mx-auto">
            Reflexoes sobre tecnologia, codigo e filosofia
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {posts.map((post, index) => (
            <motion.article
              key={post.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-carbon rounded-xl p-6 border border-muted hover:border-quark/50 transition-colors group cursor-pointer"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="font-mono text-xs text-electric bg-electric/10 px-2 py-1 rounded">
                  {post.category}
                </span>
                <span className="font-body text-xs text-dim">
                  {new Date(post.date).toLocaleDateString("pt-BR", {
                    day: "numeric",
                    month: "short",
                    year: "numeric",
                  })}
                </span>
              </div>

              <h3 className="font-display text-xl text-offwhite mb-3 group-hover:text-quark transition-colors">
                {post.title}
              </h3>

              <p className="font-body text-sm text-dim leading-relaxed">
                {post.excerpt}
              </p>

              <div className="mt-4 pt-4 border-t border-muted">
                <span className="font-body text-sm text-quark group-hover:text-electric transition-colors">
                  Ler mais →
                </span>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center mt-12"
        >
          <a
            href="/blog"
            className="inline-flex items-center gap-2 font-body text-offwhite border border-quark/50 px-6 py-3 rounded-lg hover:bg-quark/10 hover:border-quark transition-all"
          >
            Ver todas as crônicas
            <span className="text-quark">→</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
