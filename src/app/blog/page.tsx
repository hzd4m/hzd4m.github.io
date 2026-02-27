import { posts } from "@/data/posts";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog | Hzd4m",
  description: "Crônicas e reflexões sobre tecnologia, código e filosofia.",
};

export default function BlogPage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen pt-24 pb-16 px-6 bg-carbon">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-display text-6xl md:text-7xl text-offwhite mb-4">
            CRÔNICAS
          </h1>
          <p className="font-body text-dim mb-16 max-w-xl">
            Reflexões sobre tecnologia, código e filosofia. Pensamentos
            de um acadêmico de Ciência da Computação.
          </p>

          <div className="space-y-8">
            {posts.map((post) => (
              <article
                key={post.slug}
                className="bg-muted/30 rounded-xl p-8 border border-muted hover:border-quark/50 transition-colors"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="font-mono text-xs text-electric bg-electric/10 px-2 py-1 rounded">
                    {post.category}
                  </span>
                  <span className="font-body text-xs text-dim">
                    {new Date(post.date).toLocaleDateString("pt-BR", {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    })}
                  </span>
                </div>

                <h2 className="font-display text-3xl text-offwhite mb-4 hover:text-quark transition-colors">
                  {post.title}
                </h2>

                <p className="font-body text-dim leading-relaxed mb-6">
                  {post.excerpt}
                </p>

                <a
                  href="#"
                  className="inline-flex items-center gap-2 font-body text-sm text-quark hover:text-electric transition-colors"
                >
                  Ler artigo completo
                  <span>→</span>
                </a>
              </article>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
