
export interface Project {
  id: string;
  link: string;
  title: string;
  category: string[];
  year: string;
  role: string;
  services: string[];
  description: string;
  challenge: string;
  solution: string;
  image: string;  
  gallery: string[];
  techStack: string[];
  features: string[];
  nextProjectId?: string;
}

export interface NavLink {
  label: string;
  href: string;
}

export enum ButtonVariant {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
  GHOST = 'ghost',
  LINK = 'link'
}

export interface SocialLink {
  label: string;
  href: string;
}

export interface ProjectCardProps {
  project: Project;
  onClick: (id: string) => void;
}

