import { Project } from "@/types";

export const projects: Project[] = [
  {
    id: "medcortex",
    title: "MedCortex",
    description: "Sistema de gestão médica desenvolvido com foco em eficiência e experiência do usuário. Arquitetura moderna com tecnologias de ponta.",
    technologies: ["React", "Node.js", "PostgreSQL", "AWS"],
    featured: true,
    hasLink: false,
  },
  {
    id: "medcortex-factory",
    title: "MedCortex Factory AWS",
    description: "Infraestrutura completa na AWS para o sistema MedCortex. Pipeline de CI/CD, ECS Fargate, RDS, ElastiCache e monitoramento avançado.",
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
