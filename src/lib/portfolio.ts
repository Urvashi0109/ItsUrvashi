// Portfolio data management utilities

export interface Project {
  title: string;
  category: 'cloud-infra' | 'automation' | 'open-source' | 'personal';
  desc: string;
  highlights?: string[];
  tech: string[];
  order: number;
  demoLink?: string;
  githubLink?: string;
  demoLinkRel?: string;
  status?: 'ongoing' | 'completed';
  slug?: string;
}

// Import all portfolio JSON files
const portfolioModules = import.meta.glob<{ default: Project }>('../content/portfolio/*.json', {
  eager: true,
});

// Get all projects
export function getAllProjects(): Project[] {
  const projects: Project[] = [];

  for (const path in portfolioModules) {
    const project = portfolioModules[path].default;
    projects.push(project);
  }

  // Sort by order
  return projects.sort((a, b) => a.order - b.order);
}

// Get projects by category
export function getProjectsByCategory(category: Project['category']): Project[] {
  return getAllProjects().filter(project => project.category === category);
}

// Get featured projects (ongoing projects only)
export function getFeaturedProjects(count: number = 3): Project[] {
  return getAllProjects()
    .filter(project => project.status === 'ongoing')
    .slice(0, count);
}

// Get completed projects
export function getCompletedProjects(): Project[] {
  return getAllProjects().filter(project => project.status !== 'ongoing');
}

// Category metadata
export const projectCategories = [
  {
    name: 'Cloud Infrastructure',
    slug: 'cloud-infra',
    description: 'Scalable cloud architectures and infrastructure as code',
  },
  {
    name: 'Automation & DevOps',
    slug: 'automation',
    description: 'CI/CD pipelines, GitOps, and platform engineering',
  },
  {
    name: 'Open Source',
    slug: 'open-source',
    description: 'Contributions to open source communities',
  },
  {
    name: 'Personal Projects',
    slug: 'personal',
    description: 'Side projects and hackathon builds',
  },
];

// Get category metadata
export function getCategoryMetadata(slug: string) {
  return projectCategories.find(cat => cat.slug === slug);
}
