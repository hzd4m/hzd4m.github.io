import { Post } from "@/types";

export const posts: Post[] = [
  {
    slug: "primeiro-post",
    title: "O Futuro da Programacao",
    excerpt: "Reflexoes sobre o caminho da computacao e como a IA esta transformando a forma como escrevemos codigo.",
    date: "2026-02-27",
    category: "Tecnologia",
  },
  {
    slug: "segundo-post",
    title: "Arquitetura de Sistemas",
    excerpt: "Lessons learned construindo sistemas distribuidos em escala. Patterns, anti-patterns e boas praticas.",
    date: "2026-02-20",
    category: "Arquitetura",
  },
  {
    slug: "terceiro-post",
    title: "A Filosofia do Cafe",
    excerpt: "Por que todo bom desenvolvedor precisa de uma boa xicara de cafe e tempo para pensar.",
    date: "2026-02-15",
    category: "Filosofia",
  },
];
