export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  featured: boolean;
  hasLink: boolean;
  link?: string;
}

export interface Post {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
}

export interface TechCategory {
  name: string;
  technologies: string[];
}
