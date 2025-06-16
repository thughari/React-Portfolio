import React from 'react';
import { Project } from '../types';
import { GitHubIcon, ExternalLinkIcon, CodeIcon } from './icons';

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const handleCardClick = () => {
    if (project.liveLink && project.liveLink !== '#') {
      window.open(project.liveLink, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <div
      className="bg-dark-card rounded-xl shadow-2xl overflow-hidden flex flex-col h-full transition-all duration-300 hover:shadow-brand-primary/30 hover:scale-[1.02] cursor-pointer"
      onClick={handleCardClick}
      tabIndex={0}
      role="button"
      aria-label={`Live demo of ${project.title}`}
      onKeyPress={e => {
        if (e.key === 'Enter' || e.key === ' ') handleCardClick();
      }}
    >
      <img 
        src={project.imageUrl} 
        alt={project.title} 
        className="w-full h-56 object-cover"
        loading="lazy"
      />
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-semibold text-slate-100 mb-2">{project.title}</h3>
        {project.category && <p className="text-xs text-brand-secondary font-medium mb-3 uppercase tracking-wider">{project.category}</p>}
        <p className="text-dark-text-secondary text-sm mb-4 flex-grow">{project.description}</p>
        
        <div className="mb-4">
          <h4 className="text-sm font-semibold text-slate-300 mb-2">Technologies:</h4>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span key={tech} className="bg-slate-700 text-xs text-sky-300 px-2 py-1 rounded-full flex items-center gap-1">
                <CodeIcon className="w-3 h-3" /> {tech}
              </span>
            ))}
          </div>
        </div>

        {project.longDescription && (
            <details className="mb-4 text-sm text-dark-text-secondary">
                <summary className="cursor-pointer text-sky-400 hover:text-sky-300">More details</summary>
                <p className="mt-2">{project.longDescription}</p>
            </details>
        )}
        
        <div className="mt-auto pt-4 border-t border-slate-700/50 flex items-center justify-end space-x-4">
          {project.repoLink && (
            <a
              href={project.repoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-brand-primary transition-colors duration-200 flex items-center space-x-1"
              aria-label={`GitHub repository for ${project.title}`}
              tabIndex={0}
              onClick={e => e.stopPropagation()}
            >
              <GitHubIcon className="w-5 h-5" />
              <span>Code</span>
            </a>
          )}
          {project.liveLink && project.liveLink !== '#' && (
            <a
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-brand-primary transition-colors duration-200 flex items-center space-x-1"
              aria-label={`Live demo of ${project.title}`}
              tabIndex={0}
              onClick={e => e.stopPropagation()}
            >
              <ExternalLinkIcon className="w-5 h-5" />
              <span>Demo</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};
