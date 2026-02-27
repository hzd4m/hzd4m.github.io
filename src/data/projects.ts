import { Project } from "@/types";

export const projects: Project[] = [
  {
    id: "medcortex",
    title: "MedCortex",
    description: "Sistema de gestão médica onde React encontra Node. PostgreSQL como backbone, UX que médicos merecem. Código limpo, complexidade escondida.",
    technologies: ["React", "Node.js", "PostgreSQL", "AWS"],
    featured: true,
    hasLink: false,
  },
  {
    id: "medcortex-factory",
    title: "MedCortex Factory AWS",
    description: "AWS bem-feita: ECS Fargate, RDS PostgreSQL, ElastiCache Redis. CI/CD via GitHub Actions. Infra como código — Terraform. Monitore com CloudWatch.",
    technologies: ["AWS", "Terraform", "Docker", "CI/CD"],
    featured: true,
    hasLink: false,
  },
];

export const techStack = [
  {
    name: "Linguagens",
    technologies: ["Python", "Java", "C++", "TypeScript", "JavaScript", "Ruby"],
  },
  {
    name: "Bancos de Dados",
    technologies: ["PostgreSQL", "MySQL", "Neo4j", "Redis", "NoSQL"],
  },
  {
    name: "Frontend",
    technologies: ["React", "Next.js", "HTML", "CSS", "Tailwind"],
  },
  {
    name: "Backend",
    technologies: ["Node.js", "Ruby on Rails", "FastAPI"],
  },
  {
    name: "Cloud & DevOps",
    technologies: ["AWS", "Firebase", "Docker", "CI/CD"],
  },
];
