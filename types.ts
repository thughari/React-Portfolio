
import React from 'react';

export interface NavItem {
  id: string;
  label: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  imageUrl: string;
  technologies: string[];
  liveLink?: string;
  repoLink?: string;
  category?: string; // e.g., "Web App", "AI Project"
}

export interface Skill {
  name: string;
  category: string; // e.g., 'Frontend', 'Backend', 'Languages', 'AI/ML'
  // FIX: Changed icon type to React.FC<React.SVGProps<SVGSVGElement>>
  icon?: React.FC<React.SVGProps<SVGSVGElement>>; // Optional: an icon component for the skill
  level?: number; // Optional: 1-5 for proficiency
}

export interface TimelineEvent {
  id: string;
  title: string; // Role or Degree
  institution: string; // Company or University
  dateRange: string;
  description: string | string[]; // Key achievements or details
  // FIX: Changed icon type to React.FC<React.SVGProps<SVGSVGElement>>
  icon?: React.FC<React.SVGProps<SVGSVGElement>>;
  technologies?: string[];
}

export interface SocialLink {
  name: string;
  url: string;
  // FIX: Changed icon type to React.FC<React.SVGProps<SVGSVGElement>>
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
}